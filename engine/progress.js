(function () {
  const F = (window.FIMO = window.FIMO || {});
  const LEGACY_KEY = "fimo-progress-v1";
  const STORE_KEY = "fimo-profiles-v1";

  function emptyProgress() {
    return { v: 1, answers: {}, fiches: {}, sessions: [] };
  }

  function emptyStore() {
    return { v: 1, currentId: null, users: {} };
  }

  function uid() {
    return "u" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function cleanName(s) {
    return String(s || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 20);
  }

  function cleanClass(s) {
    return String(s || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 24);
  }

  function loadStore() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (data && data.v === 1 && data.users) return data;
      }
    } catch (e) {}
    return emptyStore();
  }

  function saveStore() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch (e) {}
  }

  function readLegacy() {
    try {
      const raw = localStorage.getItem(LEGACY_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || data.v !== 1) return null;
      data.answers = data.answers || {};
      data.fiches = data.fiches || {};
      data.sessions = data.sessions || [];
      return data;
    } catch (e) {
      return null;
    }
  }

  let store = loadStore();
  let cache = emptyProgress();

  function currentUser() {
    return (store.currentId && store.users[store.currentId]) || null;
  }

  function bindCache() {
    const u = currentUser();
    cache = u ? u.progress : emptyProgress();
  }

  function persist() {
    const u = currentUser();
    if (!u) return;
    u.progress = cache;
    u.t = Date.now();
    saveStore();
    if (F.sync && F.sync.publishSoon) F.sync.publishSoon();
  }

  bindCache();

  function statsOfProgress(progress, totalFixed) {
    const answers = (progress && progress.answers) || {};
    const ids = Object.keys(answers);
    let answered = 0;
    let ok = 0;
    ids.forEach(function (id) {
      const rec = answers[id];
      if (!rec || !(rec.n || rec.last)) return;
      answered += 1;
      if (rec.last) ok += 1;
    });
    let blanc = null;
    ((progress && progress.sessions) || []).forEach(function (s) {
      if (!s || Number(s.max) !== 60) return;
      if (!blanc || s.got > blanc.got) blanc = { got: s.got, max: 60, t: s.t };
    });
    return {
      unique: answered,
      total: totalFixed || 0,
      attempts: answered,
      ok: ok,
      rate: answered ? Math.round((ok / answered) * 100) : 0,
      coverage: totalFixed ? Math.round((answered / totalFixed) * 100) : 0,
      blanc: blanc
    };
  }

  function snapshotOf(user, totalFixed) {
    if (user.imported && user.card) {
      const c = user.card;
      return {
        id: user.id,
        name: user.name,
        className: user.className || "",
        imported: true,
        me: user.id === store.currentId,
        unique: c.unique || 0,
        coverage: c.coverage || 0,
        rate: c.rate || 0,
        ok: c.ok || 0,
        attempts: c.attempts || 0,
        blanc: c.blancGot != null ? { got: c.blancGot, max: 60 } : null,
        t: user.t || 0
      };
    }
    const s = statsOfProgress(user.progress, totalFixed);
    s.id = user.id;
    s.name = user.name;
    s.className = user.className || "";
    s.imported = false;
    s.me = user.id === store.currentId;
    s.t = user.t || 0;
    return s;
  }

  function rankScore(row) {
    const n = row.unique || row.attempts || 0;
    const rate = row.rate || 0;
    const blanc = row.blanc ? row.blanc.got : 0;
    return rate * 100000 + n * 100 + blanc;
  }

  F.progress = {
    get: function () {
      return cache;
    },

    recordAnswer: function (q, ok) {
      if (!q || !q.id || !currentUser()) return;
      const rec = cache.answers[q.id] || { n: 0, ok: 0, ko: 0, t: 0, last: false };
      rec.n += 1;
      if (ok) rec.ok += 1;
      else rec.ko += 1;
      rec.t = Date.now();
      rec.last = !!ok;
      rec.category = q.category || rec.category;
      rec.relatedFiche = q.relatedFiche || rec.relatedFiche;
      rec.domain = q.domain || rec.domain;
      rec.q = q.q || rec.q;
      cache.answers[q.id] = rec;
      persist();
    },

    openFiche: function (ficheId) {
      if (!ficheId || !currentUser()) return;
      const rec = cache.fiches[ficheId] || { opens: 0, t: 0 };
      rec.opens += 1;
      rec.t = Date.now();
      cache.fiches[ficheId] = rec;
      persist();
    },

    recordSession: function (title, got, max) {
      if (!currentUser()) return;
      cache.sessions.push({ title: title, got: got, max: max, t: Date.now() });
      if (cache.sessions.length > 40) cache.sessions = cache.sessions.slice(-40);
      persist();
    },

    answerOf: function (id) {
      return cache.answers[id] || null;
    },

    errorIds: function () {
      const ids = [];
      Object.keys(cache.answers).forEach(function (id) {
        const rec = cache.answers[id];
        if (rec && rec.ko > 0 && rec.last === false) ids.push(id);
      });
      return ids;
    },

    everFailedIds: function () {
      const ids = [];
      Object.keys(cache.answers).forEach(function (id) {
        if (cache.answers[id].ko > 0) ids.push(id);
      });
      return ids;
    },

    seenIds: function () {
      return Object.keys(cache.answers);
    },

    summary: function (totalFixed) {
      return statsOfProgress(cache, totalFixed);
    },

    reset: function () {
      cache = emptyProgress();
      persist();
    }
  };

  F.profiles = {
    current: currentUser,

    hasCurrent: function () {
      return !!currentUser();
    },

    list: function () {
      return Object.keys(store.users)
        .map(function (id) {
          return store.users[id];
        })
        .sort(function (a, b) {
          return (b.t || 0) - (a.t || 0);
        });
    },

    create: function (name, className) {
      const n = cleanName(name);
      if (n.length < 2) return { ok: false, err: "Prénom trop court." };
      const id = uid();
      const legacy = readLegacy();
      const progress = legacy && Object.keys(store.users).length === 0 ? legacy : emptyProgress();
      store.users[id] = {
        id: id,
        name: n,
        className: cleanClass(className),
        imported: false,
        created: Date.now(),
        t: Date.now(),
        progress: progress
      };
      store.currentId = id;
      saveStore();
      bindCache();
      if (legacy) {
        try {
          localStorage.removeItem(LEGACY_KEY);
        } catch (e) {}
      }
      return { ok: true, user: store.users[id] };
    },

    switchTo: function (id) {
      if (!store.users[id] || store.users[id].imported) return false;
      store.currentId = id;
      saveStore();
      bindCache();
      return true;
    },

    resetProgress: function () {
      F.progress.reset();
    },

    removeCurrent: function () {
      const u = currentUser();
      if (!u) return;
      if (F.sync && F.sync.drop) F.sync.drop(u.id);
      delete store.users[u.id];
      const playable = Object.keys(store.users).filter(function (id) {
        return !store.users[id].imported;
      });
      store.currentId = playable[0] || null;
      saveStore();
      bindCache();
    },

    ranking: function (totalFixed) {
      return F.profiles
        .list()
        .map(function (u) {
          return snapshotOf(u, totalFixed);
        })
        .sort(function (a, b) {
          return rankScore(b) - rankScore(a);
        });
    },

    exportCard: function (totalFixed) {
      const u = currentUser();
      if (!u) return "";
      const s = snapshotOf(u, totalFixed);
      const blanc = s.blanc ? s.blanc.got : "";
      return [
        "FIMO1",
        s.name.replace(/\*/g, " "),
        (s.className || "").replace(/\*/g, " "),
        s.coverage,
        s.rate,
        blanc,
        s.ok,
        s.unique
      ].join("*");
    },

    exportText: function (totalFixed) {
      const u = currentUser();
      if (!u) return "";
      const s = snapshotOf(u, totalFixed);
      const blanc = s.blanc ? s.blanc.got + "/60" : "pas encore de blanc";
      const card = F.profiles.exportCard(totalFixed);
      return (
        s.name +
        (s.className ? " · " + s.className : "") +
        "\nVues " +
        s.coverage +
        " % · Réussite " +
        s.rate +
        " % · Blanc " +
        blanc +
        "\n" +
        card
      );
    },

    importCard: function (raw, totalFixed) {
      const line = String(raw || "")
        .split(/\n/)
        .map(function (l) {
          return l.trim();
        })
        .filter(function (l) {
          return l.indexOf("FIMO1*") === 0;
        })[0];
      const src = line || String(raw || "").trim();
      const parts = src.split("*");
      if (parts[0] !== "FIMO1" || parts.length < 6) return { ok: false, err: "Code invalide. Colle la ligne FIMO1*…" };
      const name = cleanName(parts[1]);
      const className = cleanClass(parts[2]);
      if (name.length < 2) return { ok: false, err: "Nom manquant." };
      const card = {
        coverage: Number(parts[3]) || 0,
        rate: Number(parts[4]) || 0,
        blancGot: parts[5] === "" ? null : Number(parts[5]),
        ok: Number(parts[6]) || 0,
        unique: Number(parts[7]) || 0
      };
      const me = currentUser();
      if (me && me.name.toLowerCase() === name.toLowerCase() && (me.className || "").toLowerCase() === className.toLowerCase()) {
        return { ok: false, err: "C'est déjà ton score." };
      }
      let found = null;
      Object.keys(store.users).forEach(function (id) {
        const u = store.users[id];
        if (
          u.imported &&
          u.name.toLowerCase() === name.toLowerCase() &&
          (u.className || "").toLowerCase() === className.toLowerCase()
        ) {
          found = u;
        }
      });
      if (!found) {
        const id = uid();
        found = {
          id: id,
          name: name,
          className: className,
          imported: true,
          created: Date.now(),
          t: Date.now(),
          progress: emptyProgress(),
          card: card
        };
        store.users[id] = found;
      } else {
        found.card = card;
        found.t = Date.now();
      }
      saveStore();
      return { ok: true, user: found };
    }
  };
})();
