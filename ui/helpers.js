(function () {
  const F = (window.FIMO = window.FIMO || {});
  const SIGLE_RE = /\b(PTRA|PTAC|PMA|MMA|ABS|EBS|ESP|AFU|ASR|ART|EGR|CU|PV)\b/g;

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function markText(s) {
    const sigles = F.SIGLES || {};
    return escapeHtml(s).replace(SIGLE_RE, function (code) {
      const mean = sigles[code] || "";
      return `<span class="sigle"${mean ? ` title="${escapeHtml(mean)}"` : ""}>${code}</span>`;
    });
  }

  function catLine(c) {
    const mean = c.meaning || "";
    const acronym = /^[A-Z]{2,6}$/.test(c.name);
    const title = acronym
      ? `<span class="sigle">${escapeHtml(c.name)}</span>`
      : `<span class="theme-name">${markText(c.name)}</span>`;
    return `${title}${mean ? `<span class="sigle-rest">${markText(mean)}</span>` : ""}`;
  }

  function topbar(extra) {
    const right = extra || (F.ui.canBack ? "" : `<button class="ghost" data-go="home">Accueil</button>`);
    return `
      <div class="topbar${F.ui.canBack ? " has-back" : ""}">
        <div class="topbar-left">
          <button class="brand" type="button" data-go="home">
            <div class="logo">PL</div>
            <div>
              <h1>FIMO PL</h1>
              <p>Préparation</p>
            </div>
          </button>
        </div>
        ${right}
      </div>`;
  }

  function backBtn() {
    return `<button class="back" type="button" data-back="1" aria-label="Retour">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M15.4 4.6 13.8 3 5 12l8.8 9 1.6-1.6L8.2 12z"/></svg>
    </button>`;
  }

  function bar(pct) {
    const p = Math.max(0, Math.min(100, pct || 0));
    return `<div class="progress dash-bar"><span style="width:${p}%"></span></div>`;
  }

  F.ui = {
    escapeHtml: escapeHtml,
    markText: markText,
    catLine: catLine,
    topbar: topbar,
    backBtn: backBtn,
    bar: bar,
    canBack: false
  };
})();
