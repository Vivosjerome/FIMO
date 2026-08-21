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
    return `
      <div class="topbar">
        <button class="brand" data-go="home">
          <div class="logo">PL</div>
          <div>
            <h1>FIMO PL</h1>
            <p>Préparation</p>
          </div>
        </button>
        ${extra || `<button class="ghost" data-go="home">Accueil</button>`}
      </div>`;
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
    bar: bar
  };
})();
