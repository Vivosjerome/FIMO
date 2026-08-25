(function () {
  const app = document.getElementById("app");
  const F = window.FIMO;

  if (typeof CATEGORIES === "undefined" || typeof QUESTIONS === "undefined" || !F || !F.ui) {
    app.innerHTML = '<p class="boot">Erreur : les questions n\'ont pas chargé. Recharge la page.</p>';
    return;
  }

  if (F.decorateBank) F.decorateBank();

  const escapeHtml = F.ui.escapeHtml;
  const markText = F.ui.markText;
  const catLine = F.ui.catLine;
  const topbar = F.ui.topbar;

  const CAT_MAP = {};
  CATEGORIES.forEach((c) => (CAT_MAP[c.id] = c));

  const state = {
    view: "home",
    quiz: [],
    i: 0,
    picked: null,
    history: [],
    mode: "learn",
    title: "",
    startedAt: 0,
    ficheId: null,
    errorFilter: "",
    classNotice: "",
    nav: [],
    restoreScroll: null
  };

  let wipeTaps = 0;
  let wipeTapTimer = 0;

  function fmtT(n) {
    return String(Math.round(n * 10) / 10).replace(".", ",");
  }

  function parseTonnes(s) {
    if (s == null) return NaN;
    let t = String(s).trim().toLowerCase().replace(/\s/g, "").replace(",", ".");
    t = t.replace(/kg/g, "").replace(/tonnes?/g, "").replace(/t$/g, "");
    const n = parseFloat(t);
    if (!isFinite(n)) return NaN;
    if (n > 90) return Math.round(n) / 1000;
    return n;
  }

  function near(a, b) {
    return isFinite(a) && Math.abs(a - b) < 0.051;
  }

  function shuffle(arr) {
    return F.shuffle(arr);
  }

  function prepare(q) {
    if (q.type === "pma-free") {
      return {
        id: q.id,
        type: q.type,
        category: q.category,
        relatedFiche: q.relatedFiche,
        domain: q.domain,
        skill: q.skill,
        origin: q.origin,
        q: q.q,
        expl: q.expl,
        trap: q.trap,
        remember: q.remember,
        steps: q.steps,
        exo: q.exo,
        diagram: q.diagram,
        mma: q.mma,
        cu: q.cu,
        options: []
      };
    }
    const order = q.options.map((_, i) => i);
    const shuffled = shuffle(order);
    return {
      id: q.id,
      category: q.category,
      relatedFiche: q.relatedFiche,
      domain: q.domain,
      skill: q.skill,
      origin: q.origin,
      q: q.q,
      expl: q.expl,
      trap: q.trap,
      remember: q.remember,
      steps: q.steps,
      exo: q.exo,
      diagram: q.diagram,
      context: q.context,
      scene: q.scene,
      options: shuffled.map((i) => q.options[i]),
      correct: shuffled.indexOf(q.correct)
    };
  }

  function byCat(id) {
    return F.bank.byCategory(id);
  }

  function mixed(n, withPma) {
    return F.select.mixed(n, { withPma: withPma });
  }

  function home() {
    return F.views.dashboard(state.classNotice);
  }

  function navSnap() {
    return {
      view: state.view,
      ficheId: state.ficheId,
      errorFilter: state.errorFilter,
      classNotice: state.classNotice,
      scroll: window.scrollY || 0
    };
  }

  function applyNav(s) {
    state.view = s.view;
    state.ficheId = s.ficheId;
    state.errorFilter = s.errorFilter;
    state.classNotice = s.classNotice || "";
    state.restoreScroll = s.scroll || 0;
  }

  function pushNav() {
    if (state.view === "login" || state.view === "quiz" || state.view === "result") return;
    const s = navSnap();
    const last = state.nav[state.nav.length - 1];
    if (last && last.view === s.view && last.ficheId === s.ficheId && last.errorFilter === s.errorFilter) {
      last.scroll = s.scroll;
      return;
    }
    state.nav.push(s);
    if (state.nav.length > 24) state.nav.shift();
  }

  function goHome() {
    state.nav = [];
    state.view = "home";
    state.classNotice = "";
    state.restoreScroll = null;
  }

  function goBack() {
    if (!state.nav.length) {
      goHome();
      state.restoreScroll = 0;
      return;
    }
    applyNav(state.nav.pop());
  }

  function goTo(view) {
    if (view === "home") {
      goHome();
      return;
    }
    if (state.view === view) return;
    pushNav();
    state.view = view;
  }

  function startQuiz(list, title, mode) {
    pushNav();
    state.quiz = shuffle(list).map(prepare);
    state.i = 0;
    state.picked = null;
    state.history = [];
    state.mode = mode || "learn";
    state.title = title;
    state.startedAt = Date.now();
    state.view = "quiz";
    render();
  }

  function pmaSetup() {
    return `
      <div class="page">
        <header class="chrome">${topbar()}</header>
        <main class="wrap">
        <section class="hero">
          <h2>Exercices PMA &amp; charge utile</h2>
          <p>
            Que du calcul : le dessin, les plaques de tare, et tu tapes le PMA et la CU.
            Pas de QCM. Les chiffres changent à chaque série.
          </p>
          <p class="foot-link">
            <button class="ghost" data-go="fiche">Fiche formules</button>
          </p>
          <div class="modes modes-3">
            <button class="mode mode-main" data-start-pma="8">
              <span class="mode-kicker">Série</span>
              <strong>8 véhicules</strong>
              <span>Rapide</span>
            </button>
            <button class="mode" data-start-pma="12">
              <span class="mode-kicker">Série</span>
              <strong>12 véhicules</strong>
              <span>Standard</span>
            </button>
            <button class="mode" data-start-pma="16">
              <span class="mode-kicker">Série</span>
              <strong>16 véhicules</strong>
              <span>Complet</span>
            </button>
          </div>
        </section>
        </main>
      </div>`;
  }

  function fiche() {
    return `
      <div class="page">
        <header class="chrome">${topbar()}</header>
        <main class="wrap">
        <div class="section-title">À coller dans la tête</div>
        <div class="fiche">
          <article>
            <h3>Véhicule isolé</h3>
            <p class="line"><span class="sigle">MMA</span> = <strong><span class="sigle">PTAC</span></strong></p>
            <p class="line"><span class="sigle">CU</span> = <strong><span class="sigle">MMA</span> - <span class="sigle">PV</span></strong></p>
            <p class="line"><span class="sigle">PTRA</span> = <strong>ignoré sans attelage</strong></p>
          </article>

          <article>
            <h3>Ensemble - le plus petit des 3</h3>
            <p class="line">1. <span class="sigle">PTRA</span> moteur = <strong>plaque de tare</strong></p>
            <p class="line">2. Loi des essieux = <strong>38 t / 40 t / 44 t</strong></p>
            <p class="line">3. Porteur + remorque = <strong><span class="sigle">PTAC</span> + <span class="sigle">PTAC</span></strong></p>
            <p class="line">3. Tracteur + semi = <strong><span class="sigle">PV</span> tracteur + <span class="sigle">PTAC</span> semi</strong></p>
            <p class="line"><span class="sigle">CU</span> = <strong><span class="sigle">MMA</span> - somme des <span class="sigle">PV</span></strong></p>
          </article>

          <article>
            <h3>Essieux - isolé</h3>
            <p class="kv-label">Moteur</p>
            <p class="line">2 essieux = <strong>19 t</strong></p>
            <p class="line">3 essieux = <strong>26 t</strong></p>
            <p class="line">4 essieux et + = <strong>32 t</strong></p>
            <p class="kv-label">Remorque / semi</p>
            <p class="line">2 essieux = <strong>19 t</strong></p>
            <p class="line">3 essieux et + = <strong>26 t</strong></p>
          </article>

          <article>
            <h3>Essieux - ensemble</h3>
            <p class="line">4 essieux = <strong>38 t</strong></p>
            <p class="line">5 essieux et + = <strong>40 t</strong></p>
            <p class="line">5 essieux et + avec conditions = <strong>44 t</strong></p>
          </article>

          <article>
            <h3>44 t</h3>
            <p class="line">Essieux = <strong>&gt;= 5</strong></p>
            <p class="line"><span class="sigle">PTRA</span> moteur = <strong>44 t</strong></p>
            <p class="line">Semi 2 essieux = <strong><span class="sigle">PTAC</span> &gt;= 37 t</strong></p>
            <p class="line">Semi 3 essieux = <strong><span class="sigle">PTAC</span> &gt;= 38 t</strong></p>
            <p class="line">Porteur + remorque = <strong>chaque unité au max essieux</strong></p>
          </article>

          <article>
            <h3>Dimensions</h3>
            <p class="line">Porteur = <strong>12 m</strong></p>
            <p class="line">Articulé = <strong>16,50 m</strong></p>
            <p class="line">Train routier = <strong>18,75 m</strong></p>
            <p class="line">Largeur = <strong>2,55 m</strong></p>
            <p class="line">Largeur frigo = <strong>2,60 m</strong></p>
          </article>

          <article>
            <h3>Ralentisseurs</h3>
            <p class="line">1. Frein moteur = <strong>compression</strong></p>
            <p class="line">2. Échappement = <strong>contre-pression</strong></p>
            <p class="line">3. Hydrodynamique = <strong>huile / eau</strong></p>
            <p class="line">4. Électromagnétique = <strong>Telma</strong></p>
          </article>

          <article>
            <h3>Freins</h3>
            <p class="line">Service = <strong>l'air serre</strong></p>
            <p class="line">Park = <strong>l'air desserre</strong></p>
          </article>
        </div>
        </main>
      </div>`;
  }

  function quizView() {
    const q = state.quiz[state.i];
    const n = state.quiz.length;
    const pct = Math.round((state.i / n) * 100);
    const isPma = q.type === "pma-free";
    const cat = CAT_MAP[q.category];
    const kicker = isPma
      ? `<div class="q-kicker"><span class="sigle">PMA</span> / <span class="sigle">CU</span><span class="sigle-rest">Poids maxi et charge utile</span></div>`
      : cat
        ? `<div class="q-kicker">${catLine(cat)}</div>`
        : "";
    const diagram = q.diagram && q.exo
      ? `${drawExoMeta(q.exo)}<div class="exo-scene"><div class="diagram">${drawExo(q.exo)}</div>${drawPlaques(q.exo)}</div>`
      : q.scene
        ? `<div class="diagram">${drawScene(q.scene)}</div>`
        : "";
    const situation = q.context
      ? `<div class="context"><b>Situation</b>${markText(q.context)}</div>`
      : "";
    const locked = state.mode === "learn" && state.picked !== null;
    const showFeedback = locked;

    let answers = "";
    if (isPma) {
      const g = state.picked && typeof state.picked === "object" ? state.picked : { pma: "", cu: "" };
      const pmaCls = showFeedback ? (g.pmaOk ? "ok" : "bad") : "";
      const cuCls = showFeedback ? (g.cuOk ? "ok" : "bad") : "";
      answers = `
        <div class="free-grid">
          <div class="free-field ${pmaCls}">
            <label><span class="sigle">PMA</span></label>
            <input id="inp-pma" inputmode="decimal" placeholder="ex. 38" value="${escapeHtml(g.pma || "")}" ${locked ? "disabled" : ""} />
            <small>en tonnes</small>
          </div>
          <div class="free-field ${cuCls}">
            <label>Charge utile (<span class="sigle">CU</span>)</label>
            <input id="inp-cu" inputmode="decimal" placeholder="ex. 23,5" value="${escapeHtml(g.cu || "")}" ${locked ? "disabled" : ""} />
            <small>en tonnes</small>
          </div>
        </div>`;
    } else {
      answers = `<div class="choices">${q.options
        .map((opt, idx) => {
          let cls = "choice";
          if (state.picked !== null && state.mode === "learn") {
            if (idx === q.correct) cls += " ok";
            else if (idx === state.picked && idx !== q.correct) cls += " bad";
          }
          const letter = "ABCD".charAt(idx);
          return `<button class="${cls}" data-pick="${idx}" ${locked ? "disabled" : ""}><span class="key">${letter}</span><span class="txt">${markText(opt)}</span></button>`;
        })
        .join("")}</div>`;
    }

    let explain = "";
    if (showFeedback) {
      const steps = (q.steps || []).map((s) => `<li>${markText(s)}</li>`).join("");
      if (isPma) {
        const g = state.picked;
        const both = g.pmaOk && g.cuOk;
        explain = `<div class="explain ${both ? "ok" : "bad"}">
          <strong>${both ? "Juste." : "À revoir."}</strong>
          <div class="pma-verdict">
            <p><span class="sigle">PMA</span> ${g.pmaOk ? "bon" : "faux → " + fmtT(q.mma) + " t"}</p>
            <p><span class="sigle">CU</span> ${g.cuOk ? "bon" : "faux → " + fmtT(q.cu) + " t"}</p>
          </div>
          ${steps ? `<ol class="steps">${steps}</ol>` : ""}
        </div>`;
      } else {
        const good = state.picked === q.correct;
        const letter = "ABCD".charAt(q.correct);
        const trap = q.trap ? `<p class="tip-trap">Piège fréquent : ${markText(q.trap)}</p>` : "";
        const remember = q.remember ? `<p class="tip-hold">À retenir : ${markText(q.remember)}</p>` : "";
        explain = `<div class="explain ${good ? "ok" : "bad"}">
          <strong>${good ? "Bonne réponse" : "Mauvaise réponse"}</strong>
          <p>Bonne réponse : ${letter} — ${markText(q.options[q.correct])}</p>
          <p style="margin-top:8px">${markText(q.expl || "")}</p>
          ${remember}${trap}
          ${steps ? `<ul class="steps">${steps}</ul>` : ""}
        </div>`;
      }
    }

    const nextLabel = state.i === n - 1 ? "Voir le score" : "Question suivante";
    let footerRight = "";
    if (isPma && !locked) footerRight = `<button class="btn btn-primary" data-valid-pma="1">Valider</button>`;
    else if (locked) footerRight = `<button class="btn btn-primary" data-next="1">${nextLabel}</button>`;
    else if (state.mode === "exam" && isPma) footerRight = `<button class="btn btn-primary" data-valid-pma="1">Valider</button>`;
    else if (state.mode === "exam") footerRight = `<span class="exam-note">Corrigé à la fin</span>`;
    const footer = `<div class="action-bar"><div class="action-bar-inner">
      <button class="ghost" data-back="1">Retour</button>
      ${footerRight}
    </div></div>`;

    return `
      <div class="page quiz-page">
        <header class="chrome">
          ${topbar()}
          <div class="quiz-head">
            <div class="quiz-meta">${escapeHtml(state.title)}</div>
            <div class="quiz-meta">${state.i + 1} / ${n}</div>
          </div>
          <div class="progress"><span style="width:${pct}%"></span></div>
        </header>
        <main class="wrap wrap-quiz">
          <div class="q-card${isPma ? " q-card-pma" : ""}">
            ${kicker}
            ${diagram}
            ${situation}
            <h3>${markText(q.q)}</h3>
            ${answers}
            <p class="hint${isPma ? " pma-hint" : ""}">${isPma ? "Lis les plaques, calcule, puis valide." : state.mode === "exam" ? "Une réponse et on passe. Corrigé à la fin." : "Touches 1 à 4, Entrée pour continuer."}</p>
            ${explain}
          </div>
        </main>
        ${footer}
      </div>`;
  }

  function resultView() {
    let got = 0;
    let max = 0;
    state.history.forEach((h) => {
      got += h.got != null ? h.got : h.good ? 1 : 0;
      max += h.max != null ? h.max : 1;
    });
    const p = max ? Math.round((got / max) * 100) : 0;
    const examNote = state.title.indexOf("60") !== -1
      ? `<p>${got >= 36 ? "Seuil FIMO 36/60 : tu passes ce blanc." : "Seuil FIMO 36/60 : encore trop de fautes."}</p>`
      : "";
    const review = state.history
      .map((h, i) => {
        if (h.good) {
          return `<article><b>Q${i + 1} — <span class="right">Bon</span></b><div class="muted">${markText(h.q || "PMA / CU")}</div></article>`;
        }
        const steps = (h.steps || []).map((s) => `<li>${markText(s)}</li>`).join("");
        return `<article>
          <b>Q${i + 1} — <span class="wrong">Faux</span></b>
          <div>${markText(h.q || "PMA / CU")}</div>
          <div class="muted">Tu as répondu : ${markText(h.given)}</div>
          <div class="muted">Bonne réponse : ${markText(h.right)}</div>
          <p style="margin-top:8px">${markText(h.expl || "")}</p>
          ${steps ? `<ul class="steps">${steps}</ul>` : ""}
        </article>`;
      })
      .join("");

    return `
      <div class="page">
        <header class="chrome">${topbar()}</header>
        <main class="wrap">
        <div class="result">
          <div class="score-ring" style="--p:${p}"><span>${got}/${max}</span></div>
          <h2>${p}% de bonnes réponses</h2>
          <p style="margin:8px 0 0">${escapeHtml(state.title)}</p>
          ${examNote}
          <div class="result-actions">
            <button class="btn btn-primary" data-go="home">Accueil</button>
            <button class="btn btn-dark" data-retry="1">Refaire un tirage</button>
            <button class="btn btn-dark" data-go="errors">Mes erreurs</button>
          </div>
        </div>
        <div class="section-title">Corrigé</div>
        <div class="review">${review}</div>
        </main>
      </div>`;
  }

  function needLogin() {
    return !(F.profiles && F.profiles.hasCurrent());
  }

  function paintBoard() {
    const el = document.getElementById("live-board");
    if (!el || !F.views || !F.views.boardPanel) return;
    const sig = F.views.boardSig ? F.views.boardSig() : "";
    if (el.getAttribute("data-sig") === sig) return;
    const next = F.views.boardPanel();
    const wrap = document.createElement("div");
    wrap.innerHTML = next.trim();
    const fresh = wrap.firstElementChild;
    if (!fresh) return;
    fresh.setAttribute("data-sig", sig);
    el.replaceWith(fresh);
  }

  function render() {
    F.ui.canBack = state.nav.length > 0 && state.view !== "login";
    if (needLogin() && state.view !== "login") state.view = "login";
    if (state.view === "login") app.innerHTML = F.views.login();
    else if (state.view === "classement") app.innerHTML = F.views.classement(state.classNotice);
    else if (state.view === "home") app.innerHTML = home();
    else if (state.view === "themes") app.innerHTML = F.views.themes();
    else if (state.view === "revisions") app.innerHTML = F.views.revisions();
    else if (state.view === "fiche-view") app.innerHTML = F.views.fiche(state.ficheId);
    else if (state.view === "errors") app.innerHTML = F.views.errors(state.errorFilter);
    else if (state.view === "practice") app.innerHTML = F.views.practice();
    else if (state.view === "pma") app.innerHTML = pmaSetup();
    else if (state.view === "fiche") app.innerHTML = fiche();
    else if (state.view === "quiz") app.innerHTML = quizView();
    else if (state.view === "result") app.innerHTML = resultView();
    if (state.view === "quiz") {
      const q = state.quiz[state.i];
      if (q && q.type === "pma-free" && state.picked === null && window.matchMedia("(pointer: fine)").matches) {
        const el = document.getElementById("inp-pma");
        if (el) el.focus();
      }
    }
    if (state.view === "login") {
      const el = document.getElementById("gate-name");
      if (el) el.focus();
    }
    if (state.view === "classement" && state.classNotice === "wipe-code") {
      const pin = document.getElementById("wipe-pin");
      if (pin) pin.focus();
    }
    paintBack();
    const y = state.restoreScroll;
    state.restoreScroll = null;
    if (y != null) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          window.scrollTo(0, y);
        });
      });
    }
  }

  function paintBack() {
    let el = document.getElementById("fimo-back");
    if (!F.ui.canBack) {
      if (el) el.remove();
      return;
    }
    if (el) return;
    const wrap = document.createElement("div");
    wrap.innerHTML = (F.ui.backBtn && F.ui.backBtn()) || "";
    el = wrap.firstElementChild;
    if (!el) return;
    el.id = "fimo-back";
    document.body.appendChild(el);
  }

  function answer(idx) {
    const q = state.quiz[state.i];
    if (q.type === "pma-free") return;
    if (state.mode === "learn" && state.picked !== null) return;
    state.picked = idx;
    const good = idx === q.correct;
    state.history.push({
      id: q.id,
      q: q.q,
      good: good,
      given: q.options[idx],
      right: q.options[q.correct],
      expl: q.expl,
      steps: q.steps
    });
    F.progress.recordAnswer(q, good);
    if (state.mode === "exam") {
      next();
      return;
    }
    render();
  }

  function answerPma() {
    const q = state.quiz[state.i];
    if (q.type !== "pma-free") return;
    if (state.mode === "learn" && state.picked !== null) return;
    const pmaEl = document.getElementById("inp-pma");
    const cuEl = document.getElementById("inp-cu");
    const pma = pmaEl ? pmaEl.value : "";
    const cu = cuEl ? cuEl.value : "";
    const pmaOk = near(parseTonnes(pma), q.mma);
    const cuOk = near(parseTonnes(cu), q.cu);
    state.picked = { pma: pma, cu: cu, pmaOk: pmaOk, cuOk: cuOk };
    const both = pmaOk && cuOk;
    state.history.push({
      id: q.id,
      q: q.q,
      good: both,
      got: (pmaOk ? 1 : 0) + (cuOk ? 1 : 0),
      max: 2,
      given: "PMA " + (pma || "—") + " · CU " + (cu || "—"),
      right: "PMA " + fmtT(q.mma) + " t · CU " + fmtT(q.cu) + " t",
      expl: q.expl,
      steps: q.steps
    });
    F.progress.recordAnswer(q, both);
    if (state.mode === "exam") {
      next();
      return;
    }
    render();
  }

  function next() {
    state.picked = null;
    if (state.i >= state.quiz.length - 1) {
      let got = 0;
      let max = 0;
      state.history.forEach((h) => {
        got += h.got != null ? h.got : h.good ? 1 : 0;
        max += h.max != null ? h.max : 1;
      });
      F.progress.recordSession(state.title, got, max);
      state.view = "result";
      render();
      window.scrollTo(0, 0);
      return;
    }
    state.i += 1;
    render();
    window.scrollTo(0, 0);
  }

  function bind() {
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-back]");
      if (!t) return;
      e.preventDefault();
      goBack();
      render();
      return;
    });
    app.addEventListener("submit", (e) => {
      const wipeForm = e.target.closest("[data-wipe-code]");
      if (wipeForm && app.contains(wipeForm)) {
        e.preventDefault();
        const pin = String((document.getElementById("wipe-pin") || {}).value || "");
        const expected = String((window.FIMO_SYNC && window.FIMO_SYNC.wipe) || "");
        state.classNotice = expected && pin === expected ? "wipe-ask" : "";
        render();
        window.scrollTo(0, 0);
        return;
      }
      const form = e.target.closest("[data-login-form]");
      if (!form || !app.contains(form)) return;
      e.preventDefault();
      const nameEl = document.getElementById("gate-name");
      const classEl = document.getElementById("gate-class");
      const res = F.profiles.create(nameEl ? nameEl.value : "", classEl ? classEl.value : "");
      if (!res.ok) {
        state.view = "login";
        render();
        const err = document.createElement("p");
        err.className = "note warn";
        err.textContent = res.err || "Prénom obligatoire.";
        const wrap = app.querySelector(".gate-form");
        if (wrap) wrap.appendChild(err);
        return;
      }
      goHome();
      if (F.sync && F.sync.start) F.sync.start();
      render();
      window.scrollTo(0, 0);
    });
    app.addEventListener("click", (e) => {
      const secret = e.target.closest("[data-wipe-secret]");
      if (secret && app.contains(secret) && state.view === "classement") {
        wipeTaps += 1;
        clearTimeout(wipeTapTimer);
        wipeTapTimer = setTimeout(function () {
          wipeTaps = 0;
        }, 2500);
        if (wipeTaps >= 5) {
          wipeTaps = 0;
          state.classNotice = "wipe-code";
          render();
        }
        return;
      }
      const rank = e.target.closest("[data-rank-toggle]");
      if (rank && app.contains(rank) && !e.target.closest("[data-go], [data-reset]")) {
        const open = rank.classList.contains("is-open");
        app.querySelectorAll("[data-rank-toggle].is-open").forEach(function (node) {
          node.classList.remove("is-open");
        });
        if (!open) rank.classList.add("is-open");
        return;
      }
      const t = e.target.closest("[data-go], [data-go-fiche], [data-start-mix], [data-start-exam], [data-start-pma], [data-start-fiche], [data-start-errors], [data-start-quick], [data-error-filter], [data-theme], [data-pick], [data-valid-pma], [data-next], [data-retry], [data-reset], [data-switch-user], [data-wipe-board]");
      if (!t || !app.contains(t)) return;
      if (t.disabled || t.hasAttribute("disabled")) return;
      e.preventDefault();

      if (t.hasAttribute("data-go")) {
        const view = t.getAttribute("data-go");
        if (state.classNotice === "reset-ask" || state.classNotice === "wipe-ask") state.classNotice = "";
        if (state.view === view) {
          render();
          return;
        }
        goTo(view);
        render();
        window.scrollTo(0, 0);
        return;
      }
      if (t.hasAttribute("data-wipe-board")) {
        const kind = t.getAttribute("data-wipe-board");
        if (kind === "ask") {
          state.classNotice = "wipe-ask";
          state.view = "classement";
          render();
          window.scrollTo(0, 0);
          return;
        }
        if (kind === "yes") {
          if (F.sync && F.sync.clearAll) {
            F.sync.clearAll().then(function () {
              state.classNotice = "Classement vidé. Tu es tout seul dessus.";
              state.view = "classement";
              render();
            });
          }
          return;
        }
      }
      if (t.hasAttribute("data-reset")) {
        const kind = t.getAttribute("data-reset");
        if (kind === "ask") {
          state.classNotice = "reset-ask";
          if (state.view !== "classement") goHome();
          render();
          window.scrollTo(0, 0);
          return;
        }
        if (kind === "yes") {
          F.profiles.resetProgress();
          goHome();
          state.classNotice = "Progression effacée. Ton prénom est toujours là.";
          render();
          window.scrollTo(0, 0);
          return;
        }
        if (kind === "forget") {
          F.profiles.removeCurrent();
          state.view = "login";
          render();
          window.scrollTo(0, 0);
          return;
        }
      }
      if (t.hasAttribute("data-switch-user")) {
        F.profiles.switchTo(t.getAttribute("data-switch-user"));
        goHome();
        if (F.sync && F.sync.start) F.sync.start();
        render();
        window.scrollTo(0, 0);
        return;
      }
      if (t.hasAttribute("data-go-fiche")) {
        const id = t.getAttribute("data-go-fiche");
        if (!id) return;
        if (state.view !== "fiche-view" || state.ficheId !== id) pushNav();
        state.ficheId = id;
        state.view = "fiche-view";
        F.progress.openFiche(id);
        render();
        window.scrollTo(0, 0);
        return;
      }
      if (t.hasAttribute("data-error-filter")) {
        state.errorFilter = t.getAttribute("data-error-filter") || "";
        state.view = "errors";
        render();
        return;
      }
      if (t.hasAttribute("data-start-mix")) {
        const n = Number(t.getAttribute("data-start-mix"));
        startQuiz(mixed(n, true), "Test aléatoire " + n + " questions", "learn");
        return;
      }
      if (t.hasAttribute("data-start-exam")) {
        const n = Number(t.getAttribute("data-start-exam"));
        startQuiz(mixed(n, false), "Blanc " + n + " questions", "exam");
        return;
      }
      if (t.hasAttribute("data-start-pma")) {
        const n = Number(t.getAttribute("data-start-pma"));
        startQuiz(F.generate.fromTemplate("pma", n), "Exos PMA / CU", "learn");
        return;
      }
      if (t.hasAttribute("data-start-fiche")) {
        const id = t.getAttribute("data-start-fiche");
        const list = F.select.byFiche(id);
        const fiche = F.getFiche(id);
        if (!list.length) return;
        startQuiz(list, (fiche && fiche.title) || id, "learn");
        return;
      }
      if (t.hasAttribute("data-start-errors")) {
        const id = t.getAttribute("data-start-errors") || "";
        const list = F.select.errors(id);
        if (!list.length) return;
        startQuiz(list, id ? "Erreurs — " + ((F.getFiche(id) || {}).title || id) : "Mes erreurs", "learn");
        return;
      }
      if (t.hasAttribute("data-start-quick")) {
        const n = Number(t.getAttribute("data-start-quick"));
        const pool = t.getAttribute("data-pool") || "random";
        const labels = { random: "Révision rapide", unseen: "Jamais vues", errors: "Questions ratées", weak: "Points faibles" };
        startQuiz(F.select.mixed(n, { pool: pool }), (labels[pool] || "Révision") + " · " + n, "learn");
        return;
      }
      if (t.hasAttribute("data-theme")) {
        const id = t.getAttribute("data-theme");
        startQuiz(F.select.byCategory(id), CAT_MAP[id].name, "learn");
        return;
      }
      if (t.hasAttribute("data-pick")) {
        answer(Number(t.getAttribute("data-pick")));
        return;
      }
      if (t.hasAttribute("data-valid-pma")) {
        answerPma();
        return;
      }
      if (t.hasAttribute("data-next")) {
        next();
        return;
      }
      if (t.hasAttribute("data-retry")) {
        if (state.title.indexOf("PMA") !== -1) startQuiz(F.generate.fromTemplate("pma", 12), "Exos PMA / CU", "learn");
        else if (state.title.indexOf("Blanc") !== -1) startQuiz(mixed(60, false), "Blanc 60 questions", "exam");
        else if (state.title.indexOf("Erreurs") !== -1) startQuiz(F.select.errors(state.errorFilter || ""), state.title, "learn");
        else {
          const n = /\d+/.exec(state.title);
          const count = n ? Number(n[0]) : 20;
          startQuiz(mixed(count, true), "Test aléatoire " + count + " questions", "learn");
        }
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (state.view !== "quiz") return;
    const q = state.quiz[state.i];
    if (!q) return;
    if (q.type === "pma-free") {
      if (e.key === "Enter") {
        e.preventDefault();
        if (state.picked !== null && state.mode === "learn") next();
        else answerPma();
      }
      return;
    }
    if (e.key >= "1" && e.key <= "4") answer(Number(e.key) - 1);
    if (e.key === "Enter" && state.picked !== null && state.mode === "learn") next();
  });

  try {
    if (typeof CATEGORIES === "undefined" || typeof QUESTIONS === "undefined") {
      throw new Error("Les questions n'ont pas chargé.");
    }
    bind();
    if (F.sync && F.sync.on) F.sync.on(paintBoard);
    if (!needLogin() && F.sync && F.sync.start) F.sync.start();
    render();
  } catch (err) {
    app.innerHTML = '<p class="boot">Erreur : ' + String(err.message || err) + "</p>";
  }
})();
