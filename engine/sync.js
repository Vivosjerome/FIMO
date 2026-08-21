(function () {
  const F = (window.FIMO = window.FIMO || {});
  const cfg = window.FIMO_SYNC || {};
  const host = String(cfg.host || "").replace(/\/$/, "");
  const ns = String(cfg.ns || "");
  const path = String(cfg.path || "board");
  const key = String(cfg.key || "");
  const url = host && ns ? host + "/" + ns + "/" + path : "";

  let cache = [];
  let listeners = [];
  let timer = null;
  let pubTimer = null;
  let started = false;
  let busy = false;

  function clamp(n, min, max) {
    n = Number(n) || 0;
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  function deviceId() {
    const u = F.profiles && F.profiles.current();
    return u && u.id ? u.id : "";
  }

  function domainMap() {
    if (F.recommend && F.recommend.domainMap) return F.recommend.domainMap();
    return {};
  }

  function localRow() {
    const u = F.profiles && F.profiles.current();
    if (!u) return null;
    const total = F.bank && F.bank.stats ? F.bank.stats().fixed : 0;
    const s = F.progress.summary(total);
    return {
      id: u.id,
      name: u.name,
      className: u.className || "",
      rate: s.rate || 0,
      coverage: s.coverage || 0,
      ok: s.ok || 0,
      attempts: s.attempts || 0,
      unique: s.unique || 0,
      blanc: s.blanc ? s.blanc.got : null,
      domains: domainMap(),
      me: true,
      t: Date.now()
    };
  }

  function payloadOf(row) {
    const dom = row.domains || {};
    const compact = {};
    (F.DOMAINS || []).forEach(function (d) {
      const v = dom[d.id];
      compact[d.id] = v == null || v < 0 ? -1 : clamp(v, 0, 100);
    });
    return {
      name: String(row.name || "").slice(0, 20),
      className: String(row.className || "").slice(0, 24),
      rate: clamp(row.rate, 0, 100),
      coverage: clamp(row.coverage, 0, 100),
      ok: clamp(row.ok, 0, 99999),
      attempts: clamp(row.attempts, 0, 99999),
      unique: clamp(row.unique, 0, 99999),
      blanc: row.blanc == null ? -1 : clamp(row.blanc, 0, 60),
      dom: compact,
      t: Date.now()
    };
  }

  function rankScore(row) {
    const att = row.attempts || 0;
    const rate = row.rate || 0;
    const weighted = att >= 10 ? rate : Math.round((rate * att) / 10);
    const blanc = row.blanc == null || row.blanc < 0 ? 0 : row.blanc;
    return weighted * 100000 + (row.ok || 0) * 100 + blanc;
  }

  function parseUsers(data) {
    const users = data && data.users ? data.users : data || {};
    const me = deviceId();
    const rows = [];
    Object.keys(users).forEach(function (id) {
      const r = users[id];
      if (!r || !r.name) return;
      rows.push({
        id: id,
        name: r.name,
        className: r.className || "",
        rate: r.rate || 0,
        coverage: r.coverage || 0,
        ok: r.ok || 0,
        attempts: r.attempts || 0,
        unique: r.unique || 0,
        blanc: r.blanc == null || r.blanc < 0 ? null : r.blanc,
        domains: r.dom || r.domains || {},
        me: id === me,
        t: r.t || 0
      });
    });
    return rows;
  }

  function sameName(a, b) {
    return (
      String((a && a.name) || "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim() ===
      String((b && b.name) || "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim()
    );
  }

  function foldNames(rows) {
    const meId = deviceId();
    const byName = {};
    rows.forEach(function (r) {
      const k = String(r.name || "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
      if (!k) return;
      const prev = byName[k];
      if (!prev) {
        byName[k] = r;
        return;
      }
      if (r.id === meId) byName[k] = r;
      else if (prev.id !== meId && (r.t || 0) >= (prev.t || 0)) byName[k] = r;
    });
    return Object.keys(byName).map(function (k) {
      return byName[k];
    });
  }

  function mergeMe(rows) {
    const me = localRow();
    let list = (rows || []).slice();
    if (me) {
      list = list.filter(function (r) {
        return r.id === me.id || !sameName(r, me);
      });
      let found = false;
      list = list.map(function (r) {
        if (r.id !== me.id) return r;
        found = true;
        return me;
      });
      if (!found) list.push(me);
    }
    list = foldNames(list);
    list.sort(function (a, b) {
      return rankScore(b) - rankScore(a);
    });
    return list;
  }

  function emit() {
    const rows = mergeMe(cache);
    listeners.forEach(function (fn) {
      try {
        fn(rows);
      } catch (e) {}
    });
  }

  function headers(write) {
    const h = { Accept: "application/json" };
    if (write) {
      h["Content-Type"] = "application/json";
      if (key) h["X-Mantle-Key"] = key;
    }
    return h;
  }

  function pull() {
    if (!url || busy) return Promise.resolve(mergeMe(cache));
    busy = true;
    return fetch(url, { headers: headers(false), cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("sync");
        return r.json();
      })
      .then(function (data) {
        cache = parseUsers(data);
        emit();
        return mergeMe(cache);
      })
      .catch(function () {
        emit();
        return mergeMe(cache);
      })
      .then(function (rows) {
        busy = false;
        return rows;
      });
  }

  function publish() {
    const row = localRow();
    if (!url || !row || !key) return Promise.resolve();
    const body = { users: {} };
    body.users[row.id] = payloadOf(row);
    cache.forEach(function (r) {
      if (r.id !== row.id && sameName(r, row)) body.users[r.id] = null;
    });
    return fetch(url, {
      method: "PATCH",
      headers: headers(true),
      body: JSON.stringify(body)
    })
      .then(function () {
        return pull();
      })
      .catch(function () {});
  }

  function publishSoon() {
    clearTimeout(pubTimer);
    pubTimer = setTimeout(publish, 900);
  }

  function drop(id) {
    if (!url || !key || !id) return Promise.resolve();
    const body = { users: {} };
    body.users[id] = null;
    return fetch(url, {
      method: "PATCH",
      headers: headers(true),
      body: JSON.stringify(body)
    }).catch(function () {});
  }

  function clearAll() {
    if (!url || !key) return Promise.resolve();
    const vis = host + "/visibility/" + ns + "/" + path;
    return fetch(url, {
      method: "POST",
      headers: headers(true),
      body: JSON.stringify({ users: {} })
    })
      .then(function () {
        return fetch(vis, {
          method: "PUT",
          headers: headers(true),
          body: JSON.stringify({ public_read: true })
        });
      })
      .then(function () {
        cache = [];
        emit();
        return publish();
      })
      .catch(function () {});
  }

  function tick() {
    if (document.hidden) return;
    pull();
  }

  function start() {
    if (!url || started) {
      publishSoon();
      return;
    }
    started = true;
    publish();
    clearInterval(timer);
    timer = setInterval(tick, 7000);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) {
        publishSoon();
        pull();
      }
    });
  }

  F.sync = {
    rows: function () {
      return mergeMe(cache);
    },
    on: function (fn) {
      if (typeof fn === "function") listeners.push(fn);
    },
    start: start,
    pull: pull,
    publish: publish,
    publishSoon: publishSoon,
    drop: drop,
    clearAll: clearAll
  };
})();
