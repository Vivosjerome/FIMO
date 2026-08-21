(function () {
  const WY = 210;
  const GAP = 33;

  function esc(n) {
    return String(n).replace(".", ",");
  }

  function kg(t) {
    const n = Math.round(Number(t) * 1000);
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " kg";
  }

  function plateCard(opts) {
    const rows = [];
    if (opts.ptac != null) rows.push(["PTAC", kg(opts.ptac)]);
    if (opts.ptra != null) rows.push(["PTRA", kg(opts.ptra)]);
    rows.push(["PV", kg(opts.pv)]);
    const body = rows
      .map(([k, v]) => `<div class="plaque-row"><span>${k}</span><strong>${v}</strong></div>`)
      .join("");
    const extra = opts.pneu == null ? "" : `<p class="plaque-tag">${opts.pneu ? "Pneumatiques" : "Non pneum."}</p>`;
    return `<article class="plaque">
      <h3>${opts.title} <small>${opts.essieux} ess.</small></h3>
      ${body}${extra}
    </article>`;
  }

  function frame(inner) {
    return `<svg viewBox="0 52 940 196" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="940" height="248" fill="#1b1e24"/>
      <rect x="0" y="0" width="940" height="${WY + 19}" fill="#1f232a"/>
      ${road()}${inner}
    </svg>`;
  }

  function road() {
    return `
      <rect x="0" y="${WY + 19}" width="940" height="171" fill="#252a32"/>
      <rect x="0" y="${WY + 19}" width="940" height="72" fill="#2c3138"/>
      <rect x="0" y="${WY + 19}" width="940" height="5" fill="#3d4450"/>
      <line x1="20" y1="${WY + 54}" x2="920" y2="${WY + 54}" stroke="#9aabbc" stroke-width="2" stroke-dasharray="16 18" opacity="0.28"/>`;
  }

  function wheel(x) {
    const y = WY;
    const lugs = [0, 60, 120, 180, 240, 300]
      .map((a) => {
        const r = (a * Math.PI) / 180;
        return `<circle cx="${(x + Math.cos(r) * 6.2).toFixed(1)}" cy="${(y + Math.sin(r) * 6.2).toFixed(1)}" r="1.15" fill="#eef1f4"/>`;
      })
      .join("");
    return `
      <g>
        <ellipse cx="${x}" cy="${y + 17}" rx="16" ry="3.5" fill="#6b737c" opacity="0.35"/>
        <circle cx="${x}" cy="${y}" r="18.5" fill="#1a1a1a"/>
        <circle cx="${x}" cy="${y}" r="16.4" fill="#111"/>
        <circle cx="${x}" cy="${y}" r="11.4" fill="#c5ccd4"/>
        <circle cx="${x}" cy="${y}" r="9.6" fill="#8e97a3"/>
        <circle cx="${x}" cy="${y}" r="4" fill="#4a515a"/>
        ${lugs}
        <circle cx="${x}" cy="${y}" r="1.6" fill="#dfe4ea"/>
      </g>`;
  }

  function arch(x) {
    return `<path d="M ${x - 22} ${WY - 8} Q ${x} ${WY - 28} ${x + 22} ${WY - 8}" fill="#2a2a2a"/>`;
  }

  function mud(x) {
    return `<rect x="${x + 12}" y="${WY + 2}" width="5" height="20" rx="1" fill="#3f3f3f"/>`;
  }

  function axleXs(frontX, rearX, count, type) {
    if (type === "semi" || (type === "remorque" && count >= 3)) {
      const last = rearX - 28;
      const xs = [];
      for (let i = count - 1; i >= 0; i--) xs.push(last - i * GAP);
      return xs;
    }
    if (type === "remorque") return [frontX + 58, rearX - 28];
    const steer = frontX + 56;
    if (count <= 2) return [steer, rearX - 34];
    if (count === 3) return [steer, rearX - 34 - GAP, rearX - 34];
    return [steer, steer + 34, rearX - 34 - GAP, rearX - 34];
  }

  function cab(x) {
    return `
      <g>
        <path d="M ${x + 8} 186 L ${x + 3} 176 L ${x + 5} 168 L ${x + 42} 168 L ${x + 44} 186 Z" fill="#2f2f2f"/>
        <rect x="${x + 6}" y="174" width="36" height="4" fill="#e8a317"/>
        <path d="M ${x + 16} 186 L ${x + 12} 160 L ${x + 14} 112 L ${x + 32} 76 L ${x + 112} 70 L ${x + 122} 78 L ${x + 124} 168 L ${x + 118} 186 Z" fill="#efeae0"/>
        <path d="M ${x + 92} 78 L ${x + 122} 78 L ${x + 124} 168 L ${x + 96} 168 Z" fill="#e2dacd"/>
        <path d="M ${x + 28} 76 L ${x + 36} 68 L ${x + 114} 64 L ${x + 116} 74 Z" fill="#d9d1c4"/>
        <path d="M ${x + 24} 114 L ${x + 36} 82 L ${x + 64} 78 L ${x + 58} 114 Z" fill="#4e6574"/>
        <path d="M ${x + 28} 110 L ${x + 38} 86 L ${x + 46} 84 L ${x + 42} 110 Z" fill="#c9d8e3" opacity="0.4"/>
        <rect x="${x + 68}" y="82" width="42" height="30" rx="3" fill="#4e6574"/>
        <rect x="${x + 70}" y="84" width="13" height="26" rx="2" fill="#c9d8e3" opacity="0.28"/>
        <path d="M ${x + 66} 116 L ${x + 66} 186" stroke="#cfc6b6" stroke-width="1.2"/>
        <rect x="${x + 88}" y="128" width="11" height="4" rx="1" fill="#8a8378"/>
        <ellipse cx="${x + 14}" cy="154" rx="6.5" ry="5" fill="#f3ebd0"/>
        <ellipse cx="${x + 14}" cy="154" rx="3.4" ry="2.8" fill="#fff8e0"/>
        <rect x="${x + 46}" y="176" width="20" height="5" rx="1" fill="#6b6b6b"/>
        <path d="M ${x + 10} 108 L ${x - 8} 106 L ${x - 10} 130 L ${x + 6} 128 Z" fill="#3c3c3c"/>
        <rect x="${x - 12}" y="108" width="9" height="18" rx="1.5" fill="#5b7382"/>
        <rect x="${x - 11}" y="110" width="3" height="14" fill="#c9d8e3" opacity="0.35"/>
      </g>`;
  }

  function chassis(x, w) {
    return `
      <rect x="${x}" y="168" width="${w}" height="12" fill="#2b2b2b"/>
      <rect x="${x + 8}" y="176" width="${Math.max(40, w * 0.28)}" height="16" rx="7" fill="#6a6f76"/>
      <rect x="${x + 12}" y="179" width="${Math.max(32, w * 0.28 - 8)}" height="6" rx="3" fill="#7d838b"/>`;
  }

  function tautliner(x, y, w, h, fill) {
    const n = Math.max(3, Math.floor(w / 38));
    let posts = "";
    for (let i = 0; i <= n; i++) {
      posts += `<rect x="${x + 8 + (i * (w - 16)) / n}" y="${y + 6}" width="3" height="${h - 14}" fill="#c4b7a3" opacity="0.75"/>`;
    }
    return `
      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/>
      <rect x="${x}" y="${y}" width="${w}" height="7" fill="#d8d0c3"/>
      <rect x="${x}" y="${y + h - 9}" width="${w}" height="9" fill="#c9c0b2"/>
      ${posts}
      <rect x="${x}" y="${y}" width="7" height="${h}" fill="#b7ad9c"/>
      <rect x="${x + w - 7}" y="${y}" width="7" height="${h}" fill="#b7ad9c"/>`;
  }

  function wheels(xs) {
    return xs.map((x) => arch(x) + wheel(x) + mud(x)).join("");
  }

  function drawPorteur(exo) {
    const a = exo.porteur;
    const x0 = 70;
    const boxW = a.axles >= 4 ? 430 : a.axles === 3 ? 370 : 330;
    const cabW = 124;
    const rear = x0 + cabW + boxW;
    const xs = axleXs(x0, rear, a.axles, "moteur");
    return frame(`
      ${tautliner(x0 + 118, 74, boxW, 100, "#f3efe6")}
      ${chassis(x0 + 110, boxW + 8)}
      ${cab(x0)}
      ${wheels(xs)}
    `);
  }

  function drawEnsemble(exo) {
    const p = exo.porteur;
    const r = exo.remorque;
    const x0 = 28;
    const boxW = p.axles >= 4 ? 300 : p.axles === 3 ? 260 : 230;
    const cabW = 124;
    const pEnd = x0 + cabW + boxW;
    const hitch = pEnd + 18;
    const t0 = hitch + 52;
    const tW = r.axles >= 3 ? 300 : 250;
    const tEnd = t0 + tW;
    const px = axleXs(x0, pEnd, p.axles, "moteur");
    const rx = axleXs(t0, tEnd, r.axles, "remorque");
    return frame(`
      ${tautliner(x0 + 118, 78, boxW, 96, "#f3efe6")}
      ${chassis(x0 + 110, boxW + 6)}
      ${cab(x0)}
      <path d="M ${pEnd - 4} 176 L ${t0} 168 L ${t0} 180 L ${pEnd - 4} 184 Z" fill="#4a4a4a"/>
      <circle cx="${t0}" cy="174" r="5" fill="#666" stroke="#e8a317" stroke-width="1.5"/>
      ${tautliner(t0, 76, tW, 100, "#e7e2d6")}
      ${chassis(t0 + 8, tW - 16)}
      <rect x="${t0 + 22}" y="176" width="4" height="22" fill="#555"/>
      ${wheels(px)}${wheels(rx)}
    `);
  }

  function drawArticule(exo) {
    const t = exo.tracteur;
    const s = exo.semi;
    const x0 = 36;
    const cabW = 124;
    const chW = t.axles >= 3 ? 168 : 142;
    const tEnd = x0 + cabW + chW;
    const fifth = tEnd - 36;
    const s0 = fifth - 18;
    const sW = s.axles >= 3 ? 430 : 380;
    const sEnd = s0 + sW;
    const tx = axleXs(x0, tEnd, t.axles, "moteur");
    const sx = axleXs(s0 + 80, sEnd, s.axles, "semi");
    return frame(`
      ${tautliner(s0, 70, sW, 104, "#f3efe6")}
      ${chassis(s0 + 20, sW - 36)}
      <rect x="${s0 + 70}" y="172" width="5" height="20" fill="#555"/>
      <ellipse cx="${fifth}" cy="172" rx="15" ry="6" fill="#5c5c5c"/>
      <ellipse cx="${fifth}" cy="172" rx="7" ry="3" fill="#8d8d8d"/>
      ${chassis(x0 + 110, chW)}
      ${cab(x0)}
      ${wheels(sx)}${wheels(tx)}
    `);
  }

  window.drawExo = function (exo) {
    if (exo.kind === "porteur") return drawPorteur(exo);
    if (exo.kind === "porteur-remorque") return drawEnsemble(exo);
    return drawArticule(exo);
  };

  window.drawExoMeta = function (exo) {
    let title;
    let axles;
    if (exo.kind === "porteur") {
      title = "Véhicule isolé — porteur";
      axles = exo.porteur.axles + " essieux";
      return `<div class="exo-meta"><strong>${title}</strong><span>${axles}</span></div>`;
    }
    if (exo.kind === "porteur-remorque") {
      title = "Ensemble — porteur + remorque";
      axles = exo.porteur.axles + exo.remorque.axles + " essieux";
    } else {
      title = "Articulé — tracteur + semi";
      axles = exo.tracteur.axles + exo.semi.axles + " essieux";
    }
    const ok44 = !!exo.eligible44;
    return `<div class="exo-meta">
      <strong>${title}</strong>
      <span>${axles}</span>
      <span class="exo-44${ok44 ? " ok" : ""}">${ok44 ? "44 t possible" : "44 t non"}</span>
    </div>`;
  };

  window.drawPlaques = function (exo) {
    if (exo.kind === "porteur") {
      const a = exo.porteur;
      return `<div class="plaques plaques-1">${plateCard({
        title: "Porteur",
        essieux: a.axles,
        ptac: a.ptac,
        ptra: a.ptra,
        pv: a.pv
      })}</div>`;
    }
    if (exo.kind === "porteur-remorque") {
      const p = exo.porteur;
      const r = exo.remorque;
      return `<div class="plaques">${plateCard({
        title: "Porteur",
        essieux: p.axles,
        ptac: p.ptac,
        ptra: p.ptra,
        pv: p.pv,
        pneu: exo.pneu
      })}${plateCard({
        title: "Remorque",
        essieux: r.axles,
        ptac: r.ptac,
        pv: r.pv
      })}</div>`;
    }
    const t = exo.tracteur;
    const s = exo.semi;
    return `<div class="plaques">${plateCard({
      title: "Tracteur",
      essieux: t.axles,
      ptac: t.ptac,
      ptra: t.ptra,
      pv: t.pv,
      pneu: exo.pneu
    })}${plateCard({
      title: "Semi",
      essieux: s.axles,
      ptac: s.ptac,
      pv: s.pv
    })}</div>`;
  };

  function wrap(inner, h) {
    const H = h || 260;
    return `<svg viewBox="0 0 720 ${H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="${H}" rx="0" fill="#1f232a"/>
      ${inner}
    </svg>`;
  }

  function polar(cx, cy, r, deg) {
    const a = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy - r * Math.sin(a) };
  }

  function rpmDeg(rpm) {
    const min = 500;
    const max = 2500;
    const t = Math.max(0, Math.min(1, (rpm - min) / (max - min)));
    return 180 - t * 180;
  }

  function tachoArc(cx, cy, r, fromRpm, toRpm, color, width) {
    const a1 = rpmDeg(fromRpm);
    const a2 = rpmDeg(toRpm);
    const p1 = polar(cx, cy, r, a1);
    const p2 = polar(cx, cy, r, a2);
    return `<path d="M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} A ${r} ${r} 0 0 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}" fill="none" stroke="${color}" stroke-width="${width || 16}" stroke-linecap="butt"/>`;
  }

  function drawTacho(rpm, title, note) {
    const cx = 200;
    const cy = 168;
    const r = 112;
    const needle = polar(cx, cy, r - 22, rpmDeg(rpm));
    const ticks = [500, 1000, 1500, 2000, 2500]
      .map((v) => {
        const a = rpmDeg(v);
        const p0 = polar(cx, cy, r - 8, a);
        const p1 = polar(cx, cy, r + 10, a);
        const lab = polar(cx, cy, r + 26, a);
        return `<line x1="${p0.x}" y1="${p0.y}" x2="${p1.x}" y2="${p1.y}" stroke="#5c616a" stroke-width="2"/>
          <text x="${lab.x}" y="${lab.y}" fill="#8b929c" font-size="11" text-anchor="middle" dominant-baseline="middle" font-family="Segoe UI, sans-serif">${v}</text>`;
      })
      .join("");
    return `
      <text x="24" y="28" fill="#9aabbc" font-size="13" font-weight="700" font-family="Segoe UI, sans-serif">${title}</text>
      ${tachoArc(cx, cy, r, 500, 1100, "#c9b8a4", 18)}
      ${tachoArc(cx, cy, r, 1100, 1600, "#5ea04a", 18)}
      ${tachoArc(cx, cy, r, 1600, 1900, "#d4a017", 18)}
      ${tachoArc(cx, cy, r, 1900, 2500, "#c4453c", 18)}
      ${ticks}
      <line x1="${cx}" y1="${cy}" x2="${needle.x}" y2="${needle.y}" stroke="#e8eaed" stroke-width="4" stroke-linecap="round"/>
      <circle cx="${cx}" cy="${cy}" r="8" fill="#e8a317"/>
      <text x="${cx}" y="${cy + 36}" fill="#e8eaed" font-size="18" font-weight="800" text-anchor="middle" font-family="Segoe UI, sans-serif">${rpm} tr/min</text>
      <text x="24" y="232" fill="#8b929c" font-size="12" font-family="Segoe UI, sans-serif">Marron : sous-régime · Vert : zone de couple (varie selon le moteur) · Rouge : sur-régime</text>
      <text x="24" y="250" fill="#9aabbc" font-size="12" font-family="Segoe UI, sans-serif">${note}</text>
    `;
  }

  function hillTruck() {
    return `
      <g transform="translate(430,70)">
        <polygon points="20,150 250,70 250,150" fill="#3a3834" stroke="#5c5852"/>
        <g transform="translate(70,78) rotate(-18)">
          <rect x="0" y="0" width="36" height="28" rx="4" fill="#e8a317"/>
          <rect x="36" y="6" width="70" height="22" rx="3" fill="#5c656f"/>
          <circle cx="16" cy="30" r="7" fill="#1a1a1a" stroke="#dfe4ea"/>
          <circle cx="86" cy="30" r="7" fill="#1a1a1a" stroke="#dfe4ea"/>
        </g>
        <text x="40" y="20" fill="#c4453c" font-size="13" font-weight="700" font-family="Segoe UI, sans-serif">Côte · vitesse qui chute</text>
        <path d="M 200 40 L 200 58 L 192 50 M 200 58 L 208 50" fill="none" stroke="#c4453c" stroke-width="2"/>
      </g>`;
  }

  function drawCurves() {
    const ptsC = [
      [80, 170], [140, 130], [220, 88], [300, 95], [380, 130], [480, 165]
    ];
    const ptsP = [
      [80, 175], [160, 155], [240, 125], [340, 80], [430, 70], [500, 78]
    ];
    function d(pts) {
      return pts.map((p, i) => (i ? "L" : "M") + p[0] + " " + p[1]).join(" ");
    }
    return wrap(`
      <text x="24" y="28" fill="#9aabbc" font-size="13" font-weight="700" font-family="Segoe UI, sans-serif">Couple et puissance selon le régime</text>
      <rect x="200" y="50" width="140" height="140" fill="#2a3530"/>
      <text x="270" y="44" fill="#2f8f55" font-size="12" text-anchor="middle" font-family="Segoe UI, sans-serif">Zone verte (exemple)</text>
      <path d="${d(ptsC)}" fill="none" stroke="#3d6d8c" stroke-width="3"/>
      <path d="${d(ptsP)}" fill="none" stroke="#c4840c" stroke-width="3"/>
      <circle cx="220" cy="88" r="5" fill="#3d6d8c"/>
      <circle cx="430" cy="70" r="5" fill="#c4840c"/>
      <text x="230" y="80" fill="#3d6d8c" font-size="12" font-family="Segoe UI, sans-serif">Couple max</text>
      <text x="442" y="66" fill="#c4840c" font-size="12" font-family="Segoe UI, sans-serif">Puissance max</text>
      <line x1="70" y1="200" x2="520" y2="200" stroke="#c5ccd4"/>
      <line x1="70" y1="50" x2="70" y2="200" stroke="#c5ccd4"/>
      <text x="70" y="222" fill="#8b929c" font-size="12" font-family="Segoe UI, sans-serif">Régime (tr/min) →</text>
      <text x="540" y="88" fill="#3d6d8c" font-size="13" font-family="Segoe UI, sans-serif">— Couple</text>
      <text x="540" y="110" fill="#c4840c" font-size="13" font-family="Segoe UI, sans-serif">— Puissance</text>
      <text x="24" y="248" fill="#8b929c" font-size="12" font-family="Segoe UI, sans-serif">La zone verte n'est pas au même régime sur tous les moteurs. On se cale sur CELLE DU CAMION, pas sur un chiffre magique.</text>
    `, 260);
  }

  function drawChain() {
    const boxes = ["Moteur", "Embrayage", "Boîte", "Arbre", "Pont", "Roues"];
    const items = boxes.map((b, i) => {
      const x = 24 + i * 116;
      const arrow = i < boxes.length - 1
        ? `<path d="M ${x + 100} 120 L ${x + 112} 120 L ${x + 106} 114 M ${x + 112} 120 L ${x + 106} 126" fill="none" stroke="#c4840c" stroke-width="2"/>`
        : "";
      return `
        <rect x="${x}" y="90" width="96" height="58" rx="10" fill="#252a32" stroke="#3d4450"/>
        <text x="${x + 48}" y="124" fill="#e8eaed" font-size="13" text-anchor="middle" font-family="Segoe UI, sans-serif">${b}</text>
        ${arrow}`;
    }).join("");
    return wrap(`
      <text x="24" y="36" fill="#9aabbc" font-size="13" font-weight="700" font-family="Segoe UI, sans-serif">Chaîne cinématique (propulsion)</text>
      ${items}
      <text x="24" y="190" fill="#8b929c" font-size="13" font-family="Segoe UI, sans-serif">Le couple part du moteur et arrive aux roues motrices. Si un maillon casse, plus de propulsion.</text>
    `, 210);
  }

  function drawFreins() {
    return wrap(`
      <text x="24" y="32" fill="#9aabbc" font-size="13" font-weight="700" font-family="Segoe UI, sans-serif">Deux circuits de service + park à ressorts</text>
      <rect x="80" y="70" width="50" height="40" rx="6" fill="#e8a317"/>
      <rect x="130" y="78" width="160" height="28" rx="4" fill="#5c656f"/>
      <circle cx="100" cy="130" r="12" fill="#1a1a1a" stroke="#3d6d8c" stroke-width="3"/>
      <circle cx="250" cy="130" r="12" fill="#1a1a1a" stroke="#c4453c" stroke-width="3"/>
      <text x="70" y="168" fill="#3d6d8c" font-size="12" font-family="Segoe UI, sans-serif">Circuit AV</text>
      <text x="220" y="168" fill="#c4453c" font-size="12" font-family="Segoe UI, sans-serif">Circuit AR</text>
      <rect x="400" y="60" width="280" height="130" rx="10" fill="#252a32" stroke="#3d4450"/>
      <text x="420" y="88" fill="#e8eaed" font-size="13" font-family="Segoe UI, sans-serif">Service (pédale) : l'air SERRE</text>
      <text x="420" y="114" fill="#e8eaed" font-size="13" font-family="Segoe UI, sans-serif">Park (ressorts) : l'air DESSERRE</text>
      <text x="420" y="148" fill="#8b929c" font-size="12" font-family="Segoe UI, sans-serif">Plus d'air → le park se serre tout seul.</text>
      <text x="420" y="170" fill="#8b929c" font-size="12" font-family="Segoe UI, sans-serif">Une fuite n'enlève qu'un circuit de service.</text>
    `, 210);
  }

  function drawRalentisseurs() {
    const items = [
      ["1", "Frein moteur", "Compression"],
      ["2", "Échappement", "Contre-pression"],
      ["3", "Hydrodynamique", "Huile / eau"],
      ["4", "Électromagnétique", "Telma / Foucault"]
    ];
    const cards = items.map((it, i) => {
      const x = 24 + i * 174;
      return `
        <rect x="${x}" y="56" width="160" height="110" rx="12" fill="#252a32" stroke="#3d4450"/>
        <circle cx="${x + 24}" cy="80" r="14" fill="#e8a317"/>
        <text x="${x + 24}" y="85" text-anchor="middle" fill="#1a1408" font-size="14" font-weight="800" font-family="Segoe UI, sans-serif">${it[0]}</text>
        <text x="${x + 80}" y="110" text-anchor="middle" fill="#e8eaed" font-size="13" font-family="Segoe UI, sans-serif">${it[1]}</text>
        <text x="${x + 80}" y="132" text-anchor="middle" fill="#8b929c" font-size="12" font-family="Segoe UI, sans-serif">${it[2]}</text>`;
    }).join("");
    return wrap(`
      <text x="24" y="32" fill="#9aabbc" font-size="13" font-weight="700" font-family="Segoe UI, sans-serif">Les 4 ralentisseurs (freinage continu)</text>
      ${cards}
      <text x="24" y="190" fill="#8b929c" font-size="13" font-family="Segoe UI, sans-serif">Ils retiennent en descente sans user les garnitures. Ils n'immobilisent pas le véhicule à l'arrêt.</text>
    `, 210);
  }

  function drawAides() {
    const items = [
      ["ABS", "Au FREINAGE", "Empêche le blocage", "Garder la direction"],
      ["ASR", "À l'ACCÉLÉRATION", "Empêche le patinage", "Roues motrices"],
      ["ESP", "TRAJECTOIRE", "Corrige le lacet / roulis", "Freine une roue"]
    ];
    const cards = items.map((it, i) => {
      const x = 30 + i * 230;
      return `
        <rect x="${x}" y="50" width="210" height="130" rx="12" fill="#252a32" stroke="#3d4450"/>
        <text x="${x + 105}" y="82" text-anchor="middle" fill="#c4840c" font-size="22" font-weight="800" font-family="Segoe UI, sans-serif">${it[0]}</text>
        <text x="${x + 105}" y="108" text-anchor="middle" fill="#e8eaed" font-size="13" font-family="Segoe UI, sans-serif">${it[1]}</text>
        <text x="${x + 105}" y="132" text-anchor="middle" fill="#8b929c" font-size="12" font-family="Segoe UI, sans-serif">${it[2]}</text>
        <text x="${x + 105}" y="154" text-anchor="middle" fill="#8b929c" font-size="12" font-family="Segoe UI, sans-serif">${it[3]}</text>`;
    }).join("");
    return wrap(`
      <text x="24" y="32" fill="#9aabbc" font-size="13" font-weight="700" font-family="Segoe UI, sans-serif">Ne pas confondre ABS, ASR et ESP</text>
      ${cards}
    `, 200);
  }

  window.drawScene = function (id) {
    if (id === "tacho-low") return wrap(drawTacho(800, "Compte-tours de CE camion", "Ici l'aiguille est SOUS la zone verte de ce moteur.") + hillTruck());
    if (id === "tacho-green") return wrap(drawTacho(1300, "Compte-tours de CE camion", "Aiguille dans la zone verte = plage de couple / bon rendement."));
    if (id === "tacho-red") return wrap(drawTacho(2100, "Compte-tours de CE camion", "Aiguille dans le rouge : sur-régime, on passe le rapport supérieur."));
    if (id === "curves") return drawCurves();
    if (id === "chaine") return drawChain();
    if (id === "freins") return drawFreins();
    if (id === "ralentisseurs") return drawRalentisseurs();
    if (id === "aides") return drawAides();
    return "";
  };
})();
