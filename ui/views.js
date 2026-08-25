(function () {
  const F = (window.FIMO = window.FIMO || {});
  const u = function () {
    return F.ui;
  };

  function wrap(titleExtra, body, wrapClass) {
    return `
      <div class="page">
        <header class="chrome">${u().topbar(titleExtra)}</header>
        <main class="wrap${wrapClass ? " " + wrapClass : ""}">${body}</main>
      </div>`;
  }

  function boardSig(rows) {
    rows = rows || (F.sync && F.sync.rows ? F.sync.rows() : []);
    return rows
      .map(function (r) {
        const map = r.domains || {};
        const d = (F.DOMAINS || [])
          .map(function (x) {
            const v = map[x.id];
            return x.id + ":" + (v == null || v < 0 ? "x" : v);
          })
          .join(",");
        return [r.id, r.name, r.rate, r.ok, r.attempts, d].join("|");
      })
      .join(";");
  }

  function domainTip(row) {
    const map = row.domains || {};
    return (
      `<div class="rank-tip">` +
      (F.DOMAINS || [])
        .map(function (d) {
          const v = map[d.id];
          const label = v == null || v < 0 ? "—" : v + " %";
          return `<div class="rank-tip-row"><span>${u().escapeHtml(d.name)}</span><b>${label}</b></div>`;
        })
        .join("") +
      `</div>`
    );
  }

  function rankItems(rows) {
    if (!rows || !rows.length) {
      return `<p class="muted">Personne encore. Dès qu'un copain se connecte, il apparaît ici.</p>`;
    }
    return (
      `<ol class="rank-list">` +
      rows
        .map(function (r, i) {
          const detail = r.attempts
            ? r.ok + " bonnes · " + r.attempts + " tentatives"
            : "pas encore de réponse";
          return `<li class="rank-row${r.me ? " is-me" : ""}" data-rank-toggle="${u().escapeHtml(r.id)}">
            <span class="rank-n">${i + 1}</span>
            <span class="rank-who">
              <strong>${u().escapeHtml(r.name)}${r.me ? " · toi" : ""}</strong>
              <small>${u().escapeHtml(detail)}</small>
            </span>
            <span class="rank-score">
              <b>${r.rate} %</b>
              <small>global</small>
            </span>
            ${domainTip(r)}
          </li>`;
        })
        .join("") +
      `</ol>`
    );
  }

  function boardPanel() {
    const rows = F.sync && F.sync.rows ? F.sync.rows() : [];
    return `<aside class="board" id="live-board">
      <div class="board-head">
        <strong>Classement</strong>
        <span class="board-live" data-wipe-secret="1">en direct</span>
      </div>
      ${rankItems(rows)}
      <p class="muted board-hint">% global. Survole un nom pour le détail à côté.</p>
    </aside>`;
  }

  function dashboard(notice) {
    const stats = F.bank.stats();
    const sum = F.progress.summary(stats.fixed);
    const domains = F.recommend.byDomain();
    const weak = F.recommend.weakFiches();
    const errors = F.progress.errorIds().length;
    const weakHtml = weak.length
      ? `<ul class="dash-list">${weak
          .slice(0, 3)
          .map(function (w) {
            return `<li><button class="linkish" data-go-fiche="${w.id}">${u().escapeHtml(w.title)}</button> ${w.rate} %</li>`;
          })
          .join("")}</ul>`
      : `<p class="muted">Pas assez de réponses encore. Fais un QCM, les points faibles apparaîtront ici.</p>`;

    const domainRows = domains
      .map(function (d) {
        const label = d.rate == null ? "—" : d.rate + " %";
        const width = d.rate == null ? 0 : d.rate;
        return `<div class="dom-row">
          <span>${u().escapeHtml(d.name)}</span>
          <span class="muted">${label}</span>
          ${u().bar(width)}
        </div>`;
      })
      .join("");

    const user = F.profiles.current();
    const who = user ? user.name : "";
    const done = sum.coverage >= 100 && sum.total > 0;
    const blanc = sum.blanc ? sum.blanc.got + " / 60" : "pas encore";
    return wrap(
      `<button class="ghost" data-go="classement">${u().escapeHtml(who || "Classe")}</button>`,
      `
      <div class="dash-layout">
        <section class="hero dash-hero">
          <div class="hero-top">
            <img class="prof" src="https://vivosjerome.github.io/FIMO/gandalf.gif" alt="Le formateur" />
            <h2>${who ? "Salut " + u().escapeHtml(who) : "Préparation FIMO"}</h2>
          </div>
          <div class="dash-progress">
            <div class="dash-progress-label">
              <strong>Progression</strong>
              <span>${sum.unique} / ${sum.total} questions vues · ${sum.coverage} %</span>
            </div>
            ${u().bar(sum.coverage)}
            <p class="muted">Réussite ${sum.rate} % · Blanc ${blanc} · ${sum.ok} / ${sum.attempts || 0} tentatives</p>
          </div>
          ${
            notice === "reset-ask"
              ? `<div class="reset-banner">
                  <p><strong>Tout recommencer ?</strong> Tes QCM, erreurs et blancs partent. Ton prénom reste.</p>
                  <button class="btn btn-primary" data-reset="yes">Oui, effacer ma progression</button>
                  <button class="btn btn-dark" data-go="home">Annuler</button>
                </div>`
              : done
              ? `<div class="reset-banner">
                  <p><strong>100 % des questions vues.</strong> Tu peux tout recommencer pour un second tour.</p>
                  <button class="btn btn-primary" data-reset="ask">Recommencer à zéro</button>
                </div>`
              : notice
              ? `<p class="note">${u().escapeHtml(notice)}</p>`
              : ""
          }
        </section>
        ${boardPanel()}
        <div class="dash-rest">
          <div class="modes">
            <button class="mode mode-rev" data-go="revisions">
              <span class="mode-kicker">Apprendre</span>
              <strong>Révisions</strong>
              <span>Fiches par thème</span>
            </button>
            <button class="mode mode-fiche" data-go="fiche">
              <span class="mode-kicker">À retenir</span>
              <strong>Fiche formules</strong>
              <span>PMA · essieux · 44 t</span>
            </button>
            <button class="mode" data-go="themes">
              <span class="mode-kicker">S'entraîner</span>
              <strong>QCM</strong>
              <span>Par matière</span>
            </button>
            <button class="mode" data-go="errors">
              <span class="mode-kicker">Corriger</span>
              <strong>Mes erreurs</strong>
              <span>${errors ? errors + " en cours" : "Aucune pour l'instant"}</span>
            </button>
            <button class="mode" data-go="practice">
              <span class="mode-kicker">Rapide</span>
              <strong>Révision / blanc</strong>
              <span>10 · 20 · 50 · examen</span>
            </button>
            <button class="mode" data-go="pma">
              <span class="mode-kicker">Calcul</span>
              <strong><span class="sigle">PMA</span> / <span class="sigle">CU</span></strong>
              <span>Dessin + plaques</span>
            </button>
            <button class="mode" ${weak.length ? 'data-start-quick="10" data-pool="weak"' : "disabled"}>
              <span class="mode-kicker">Cibler</span>
              <strong>Points faibles</strong>
              <span>${weak.length ? weak.length + " sujets" : "Pas encore"}</span>
            </button>
          </div>
          <div class="section-title">Réussite par domaine</div>
          <div class="dom-grid">${domainRows}</div>
          <div class="section-title">Points faibles</div>
          ${weakHtml}
          <p class="foot-link">
            <button class="ghost danger-ghost" data-reset="ask">Tout recommencer</button>
          </p>
        </div>
      </div>
    `,
      "wrap-dash"
    );
  }

  function themes() {
    const cards = (window.CATEGORIES || [])
      .map(function (c) {
        const n = F.bank.byCategory(c.id).length;
        return `<button class="card" data-theme="${c.id}">
          ${u().catLine(c)}
          <small>${n} questions</small>
        </button>`;
      })
      .join("");
    return wrap(
      "",
      `
      <div class="section-title">QCM par matière</div>
      <p class="muted block-note">Réponses courtes. L'explication vient après. Les cours sont dans Révisions, pas ici.</p>
      <div class="grid">${cards}</div>
    `
    );
  }

  function revisions() {
    const blocks = (F.DOMAINS || [])
      .map(function (d) {
        const cards = d.fiches
          .map(function (id) {
            const f = F.getFiche(id);
            if (!f) return "";
            const st = f.status === "published" ? "Cours" : "Bientôt";
            return `<button class="card" data-go-fiche="${id}">
              <span class="theme-name">${u().escapeHtml(f.title)}</span>
              <span class="sigle-rest">${st}</span>
              <small>${st === "Cours" ? "Lire" : "—"}</small>
            </button>`;
          })
          .join("");
        return `<div class="section-title">${u().escapeHtml(d.name)}</div><div class="grid">${cards}</div>`;
      })
      .join("");
    return wrap("", `<p class="muted block-note">Les fiches enseignent. Pour t'entraîner, ouvre ensuite la partie QCM.</p>${blocks}`);
  }

  function renderBlocks(blocks) {
    return (blocks || [])
      .map(function (b) {
        let html = "";
        if (b.h) html += `<h4>${u().escapeHtml(b.h)}</h4>`;
        if (b.p) html += `<p>${u().markText(b.p)}</p>`;
        if (b.ul) html += `<ul>${b.ul.map(function (i) { return `<li>${u().markText(i)}</li>`; }).join("")}</ul>`;
        if (b.ol) html += `<ol>${b.ol.map(function (i) { return `<li>${u().markText(i)}</li>`; }).join("")}</ol>`;
        if (b.table) {
          html += `<div class="cours-table"><table><thead><tr>${b.table.headers
            .map(function (h) { return `<th>${u().escapeHtml(h)}</th>`; })
            .join("")}</tr></thead><tbody>${b.table.rows
            .map(function (row) {
              return `<tr>${row.map(function (cell) { return `<td>${u().markText(cell)}</td>`; }).join("")}</tr>`;
            })
            .join("")}</tbody></table></div>`;
        }
        return html;
      })
      .join("");
  }

  function ficheView(ficheId) {
    const f = F.getFiche(ficheId);
    if (!f) return wrap("", "<p>Fiche introuvable.</p>");
    const qs = F.bank.byFiche(f.id);
    const order = { connaitre: 0, objectif: 1, cours: 2, pieges: 3, exemple: 4, resume: 5 };
    const sections = (f.sections || [])
      .slice()
      .sort(function (a, b) {
        const ia = order[a.type] != null ? order[a.type] : 8;
        const ib = order[b.type] != null ? order[b.type] : 8;
        return ia - ib;
      })
      .map(function (s) {
        const title = s.type === "connaitre" ? "À connaître parfaitement" : s.title || "";
        const extra = s.body ? `<p>${u().markText(s.body)}</p>` : "";
        const lists = (s.ul ? `<ul>${s.ul.map(function (i) { return `<li>${u().markText(i)}</li>`; }).join("")}</ul>` : "") +
          (s.ol ? `<ol>${s.ol.map(function (i) { return `<li>${u().markText(i)}</li>`; }).join("")}</ol>` : "");
        return `<article class="cours-block cours-${u().escapeHtml(s.type || "")}">
          <h3>${u().escapeHtml(title)}</h3>
          ${extra}${lists}${renderBlocks(s.blocks)}
        </article>`;
      })
      .join("");
    const source = f.source
      ? `<p class="note">Source : ${
          f.source.url
            ? `<a class="ext" href="${u().escapeHtml(f.source.url)}" target="_blank" rel="noopener">${u().escapeHtml(f.source.label)}</a>`
            : u().escapeHtml(f.source.label)
        }</p>`
      : "";
    const empty = f.status === "draft"
      ? `<p class="muted block-note">${u().escapeHtml(f.note || "Cours à rédiger.")}</p>`
      : "";
    const qcmFoot = qs.length
      ? `<div class="cours-qcm">
          <p>Cours terminé. L'entraînement est à part.</p>
          <button class="btn btn-primary" data-start-fiche="${f.id}">QCM — ${u().escapeHtml(f.title)}</button>
        </div>`
      : `<p class="muted block-note">Pas encore de QCM pour cette fiche.</p>`;
    return wrap(
      "",
      `
      <div class="section-title">${u().escapeHtml(((F.DOMAINS || []).filter(function (d) { return d.id === f.domain; })[0] || {}).name || "Révisions")}</div>
      <h2 class="page-h">${u().markText(f.title)}</h2>
      ${empty}
      <div class="fiche cours">${sections}</div>
      ${source}
      ${qcmFoot}
    `
    );
  }

  function errorsView(filter) {
    const ids = F.progress.errorIds();
    let list = F.bank.allFixed().filter(function (q) {
      return ids.indexOf(q.id) !== -1;
    });
    const fiches = {};
    list.forEach(function (q) {
      const k = q.relatedFiche || q.category;
      fiches[k] = (fiches[k] || 0) + 1;
    });
    if (filter) {
      list = list.filter(function (q) {
        return q.relatedFiche === filter || q.category === filter;
      });
    }
    const chips =
      `<button class="ghost ${filter ? "" : "is-on"}" data-error-filter="">Tout</button>` +
      Object.keys(fiches)
        .map(function (id) {
          const f = F.getFiche(id);
          const label = f ? f.title : id;
          return `<button class="ghost ${filter === id ? "is-on" : ""}" data-error-filter="${id}">${u().escapeHtml(label)} (${fiches[id]})</button>`;
        })
        .join("");
    const items = list.length
      ? list
          .map(function (q) {
            return `<article>
              <b>${u().markText(q.q)}</b>
              <div class="muted">${u().escapeHtml((F.getFiche(q.relatedFiche) || {}).title || q.category || "")}</div>
              <p class="note">${u().markText(q.expl || "")}</p>
              <p><button class="ghost" data-go-fiche="${q.relatedFiche || ""}">Revoir la fiche</button></p>
            </article>`;
          })
          .join("")
      : `<p class="muted">Pas d'erreur en cours. Les questions ratées apparaissent ici après un QCM.</p>`;
    return wrap(
      "",
      `
      <div class="section-title">Mes erreurs</div>
      <p class="muted block-note">Dernière tentative fausse. Une bonne réponse les retire de cette liste.</p>
      <div class="chip-row">${chips}</div>
      <div class="modes" style="margin:14px 0">
        <button class="mode mode-main" data-start-errors="${filter || ""}" ${list.length ? "" : "disabled"}>
          <span class="mode-kicker">Refaire</span>
          <strong>${list.length || 0} questions</strong>
          <span>${filter ? "Filtre actif" : "Toutes les erreurs"}</span>
        </button>
      </div>
      <div class="review">${items}</div>
    `
    );
  }

  function practice() {
    return wrap(
      "",
      `
      <div class="section-title">Révision rapide</div>
      <div class="modes">
        <button class="mode mode-main" data-start-quick="10" data-pool="random"><span class="mode-kicker">10 min</span><strong>10 questions</strong><span>Aléatoire</span></button>
        <button class="mode" data-start-quick="20" data-pool="random"><span class="mode-kicker">Série</span><strong>20 questions</strong><span>Aléatoire</span></button>
        <button class="mode" data-start-quick="50" data-pool="random"><span class="mode-kicker">Long</span><strong>50 questions</strong><span>Aléatoire</span></button>
        <button class="mode" data-start-quick="20" data-pool="unseen"><span class="mode-kicker">Nouveau</span><strong>Jamais vues</strong><span>20 questions</span></button>
        <button class="mode" data-start-quick="20" data-pool="errors"><span class="mode-kicker">Corriger</span><strong>Déjà ratées</strong><span>20 questions</span></button>
        <button class="mode" data-start-quick="20" data-pool="weak"><span class="mode-kicker">Cibler</span><strong>Points faibles</strong><span>20 questions</span></button>
      </div>
      <div class="section-title">Examen blanc</div>
      <p class="muted block-note">Corrigé à la fin, thèmes mélangés. Chronomètre : phase 10. Seuil indicatif 36 / 60.</p>
      <div class="modes">
        <button class="mode mode-main" data-start-exam="60"><span class="mode-kicker">Examen</span><strong>Blanc 60</strong><span>QCM existants</span></button>
        <button class="mode" data-start-mix="20"><span class="mode-kicker">Révision</span><strong>Test 20</strong><span>Avec PMA</span></button>
        <button class="mode" data-start-mix="40"><span class="mode-kicker">Révision</span><strong>Test 40</strong><span>Avec PMA</span></button>
        <button class="mode" data-go="pma"><span class="mode-kicker">Calcul</span><strong>PMA / CU</strong><span>Dessin + plaques</span></button>
      </div>
    `
    );
  }

  function login() {
    const others = ((F.profiles && F.profiles.list && F.profiles.list()) || []).filter(function (u) {
      return !u.imported;
    });
    const chips = others.length
      ? `<div class="section-title">Déjà sur ce téléphone</div>
         <div class="modes">${others
           .map(function (usr) {
             return `<button class="mode" data-switch-user="${usr.id}">
               <span class="mode-kicker">Continuer</span>
               <strong>${u().escapeHtml(usr.name)}</strong>
               <span>Continuer ici</span>
             </button>`;
           })
           .join("")}</div>`
      : "";
    return `
      <div class="page">
        <header class="chrome">${u().topbar('<span class="stat">Profil</span>')}</header>
        <main class="wrap">
          <section class="hero">
            <h2>Bienvenue</h2>
            <p class="muted">Entre ton prénom, c'est pour le classement.</p>
            <p class="note warn">Attention : la navigation privée ne sauvegarde pas tes données.</p>
            <form class="gate-form" data-login-form="1">
              <label>Prénom
                <input id="gate-name" name="name" autocomplete="nickname" maxlength="20" />
              </label>
              <label class="sr-only">Groupe
                <input id="gate-class" name="className" maxlength="24" value="FIMO" />
              </label>
              <button class="btn btn-primary" type="submit">C'est moi</button>
            </form>
          </section>
          ${chips}
        </main>
      </div>`;
  }

  function classement(notice) {
    const me = F.profiles.current();
    const resetAsk = notice === "reset-ask";
    const wipeAsk = notice === "wipe-ask";
    return wrap(
      "",
      `
      ${notice && !resetAsk && !wipeAsk && notice !== "wipe-code" ? `<p class="note">${u().escapeHtml(notice)}</p>` : ""}
      ${boardPanel()}
      <div class="section-title">Comptes sur ce téléphone</div>
      <div class="modes">
        <button class="mode" data-go="login">
          <span class="mode-kicker">Nouveau</span>
          <strong>Autre prénom</strong>
          <span>Changer de compte</span>
        </button>
      </div>
      ${
        wipeAsk
          ? `<div class="reset-banner">
              <p><strong>Vider tout le classement ?</strong> Jérôme, Hugo, tout le monde disparaît. Toi tu reviens tout seul.</p>
              <button class="btn btn-primary" data-wipe-board="yes">Oui, tout effacer</button>
              <button class="btn btn-dark" data-go="classement">Annuler</button>
            </div>`
          : notice === "wipe-code"
          ? `<form class="wipe-pin" data-wipe-code="1">
              <input id="wipe-pin" type="password" inputmode="numeric" maxlength="8" autocomplete="off" />
            </form>`
          : resetAsk
          ? `<div class="reset-banner">
              <p><strong>Tout recommencer ?</strong> Tes QCM, erreurs et blancs partent. Ton prénom reste.</p>
              <button class="btn btn-primary" data-reset="yes">Oui, effacer ma progression</button>
              <button class="btn btn-dark" data-go="classement">Annuler</button>
            </div>`
          : `<p class="foot-link">
              <button class="ghost danger-ghost" data-reset="ask">Tout recommencer</button>
              <button class="ghost danger-ghost" data-reset="forget">Oublier ${u().escapeHtml((me && me.name) || "ce profil")}</button>
            </p>`
      }
    `
    );
  }

  F.views = {
    dashboard: dashboard,
    themes: themes,
    revisions: revisions,
    fiche: ficheView,
    errors: errorsView,
    practice: practice,
    login: login,
    classement: classement,
    boardPanel: boardPanel,
    rankItems: rankItems,
    boardSig: boardSig
  };
})();
