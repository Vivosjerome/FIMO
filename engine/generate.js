(function () {
  const F = (window.FIMO = window.FIMO || {});

  function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  }
  function fmtH(h, m) {
    return pad2(h) + " h " + pad2(m);
  }
  function addMin(h, m, add) {
    let t = h * 60 + m + add;
    t = ((t % 1440) + 1440) % 1440;
    return { h: Math.floor(t / 60), m: t % 60 };
  }
  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function fmtDur(min) {
    const h = Math.floor(min / 60);
    const m = min % 60;
    if (!m) return h + " h";
    if (!h) return m + " min";
    return h + " h " + pad2(m);
  }
  function shuffleOpts(opts, correctIdx) {
    const order = opts.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = order[i];
      order[i] = order[j];
      order[j] = t;
    }
    return {
      options: order.map((i) => opts[i]),
      correct: order.indexOf(correctIdx)
    };
  }

  F.generateDriveTime = function (n) {
    const out = [];
    const social = (F.RULES && F.RULES.social) || {};
    const pauseAfter = 270;
    const src = social.source ? social.source.label : "Règlement (CE) n° 561/2006";

    function one() {
      const kind = pick(["pause-heure", "conduite-totale", "reste-90", "doit-pauser"]);
      if (kind === "pause-heure") {
        const startH = pick([5, 6, 6, 7, 8]);
        const startM = pick([0, 15, 30, 45]);
        const end = addMin(startH, startM, pauseAfter);
        const d4 = addMin(startH, startM, 240);
        const d5 = addMin(startH, startM, 300);
        const d530 = addMin(startH, startM, 330);
        const sh = shuffleOpts(
          [fmtH(end.h, end.m), fmtH(d4.h, d4.m), fmtH(d5.h, d5.m), fmtH(d530.h, d530.m)],
          0
        );
        return {
          id: "gen-ph-" + startH + startM + Math.random().toString(16).slice(2, 6),
          category: "pauses",
          relatedFiche: "pauses",
          q:
            "Un conducteur commence à conduire à " +
            fmtH(startH, startM) +
            " sans interruption. À quelle heure doit-il prendre sa pause de 45 min ?",
          options: sh.options,
          correct: sh.correct,
          expl:
            "4 h 30 après " +
            fmtH(startH, startM) +
            " = " +
            fmtH(end.h, end.m) +
            ". La pause est de 45 min (561/2006 art. 7).",
          trap: "4 h ou 5 h au lieu de 4 h 30.",
          remember: "4 h 30 → 45 min.",
          source: src,
          type: "single"
        };
      }
      if (kind === "conduite-totale") {
        const d1 = pick([120, 150, 180, 210]);
        const d2 = pick([60, 90, 120, 150]);
        const total = d1 + d2;
        if (total > 540) return one();
        const pause = 45;
        const fake1 = total + pause;
        const fake2 = d1;
        const fake3 = total + 15;
        const sh = shuffleOpts([fmtDur(total), fmtDur(fake1), fmtDur(fake2), fmtDur(fake3)], 0);
        return {
          id: "gen-ct-" + d1 + "-" + d2 + Math.random().toString(16).slice(2, 6),
          category: "temps-conduite",
          relatedFiche: "temps-conduite",
          q:
            "Il conduit " +
            fmtDur(d1) +
            ", prend 45 min de pause, puis conduit " +
            fmtDur(d2) +
            ". Combien de temps a-t-il conduit ?",
          options: sh.options,
          correct: sh.correct,
          expl:
            "La pause n'est pas de la conduite. " +
            fmtDur(d1) +
            " + " +
            fmtDur(d2) +
            " = " +
            fmtDur(total) +
            ".",
          trap: "Additionner la pause.",
          remember: "Pause ≠ conduite.",
          source: src,
          type: "single"
        };
      }
      if (kind === "reste-90") {
        const w1 = pick([48, 50, 52, 54, 56]);
        const rest = 90 - w1;
        const cand = [rest + " h", "56 h", w1 + " h", "45 h", "40 h", "90 h"];
        const uniq = [];
        cand.forEach(function (c) {
          if (uniq.indexOf(c) === -1) uniq.push(c);
        });
        const opts = uniq.slice(0, 4);
        const sh = shuffleOpts(opts, opts.indexOf(rest + " h"));
        return {
          id: "gen-90-" + w1 + Math.random().toString(16).slice(2, 6),
          category: "temps-conduite",
          relatedFiche: "temps-conduite",
          q:
            "Il a conduit " +
            w1 +
            " h cette semaine. Quel maximum lui reste-t-il la semaine suivante (plafonds 56 h et 90 h) ?",
          options: sh.options,
          correct: sh.correct,
          expl:
            "min(56, 90 − " +
            w1 +
            ") = min(56, " +
            rest +
            ") = " +
            rest +
            " h.",
          trap: "Répondre 56 h sans regarder les 90 h.",
          remember: "90 h sur deux semaines.",
          source: src,
          type: "single"
        };
      }
      const driven = pick([240, 255, 270, 285]);
      const must = driven >= 270;
      const sh = shuffleOpts(
        [
          must ? "Oui, pause de 45 min" : "Non, pas encore 4 h 30",
          must ? "Non, il reste 1 h" : "Oui, dès 4 h",
          "Seulement après 10 h",
          "Seulement la nuit"
        ],
        0
      );
      return {
        id: "gen-dp-" + driven + Math.random().toString(16).slice(2, 6),
        category: "pauses",
        relatedFiche: "pauses",
        q: "Un conducteur a déjà conduit " + fmtDur(driven) + " d'affilée. Doit-il prendre maintenant la pause de 45 min ?",
        options: sh.options,
        correct: sh.correct,
        expl: must
          ? "4 h 30 (270 min) sont atteintes ou dépassées : pause 45 min, sauf repos."
          : "4 h 30 ne sont pas encore atteintes (" + fmtDur(driven) + ").",
        trap: "Déclencher à 4 h pile.",
        remember: "Le seuil est 4 h 30.",
        source: src,
        type: "single"
      };
    }

    let guard = 0;
    while (out.length < n && guard < n * 8) {
      guard++;
      out.push(one());
    }
    return out;
  };

  function decorateGenerated(q, template) {
    q.origin = "generated";
    q.templateId = template.id;
    q.relatedFiche = q.relatedFiche || template.relatedFiche;
    q.category = q.category || template.category;
    q.domain = q.domain || template.domain;
    q.skill = q.skill || template.skill;
    q.type = q.type || template.type;
    q.auditStatus = "generated";
    q.metaVersion = F.SCHEMA_VERSION || 1;
    return q;
  }

  F.generate = {
    fromTemplate: function (templateId, n) {
      const t = F.TEMPLATES && F.TEMPLATES[templateId];
      if (!t || typeof t.build !== "function") return [];
      return t.build(n).map(function (q) {
        return decorateGenerated(q, t);
      });
    }
  };
})();
