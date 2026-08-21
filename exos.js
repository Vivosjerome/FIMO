(function () {
  function round1(n) {
    return Math.round(n * 10) / 10;
  }
  function round05(n) {
    return Math.round(n * 2) / 2;
  }

  function fmt(n) {
    return String(round1(n)).replace(".", ",");
  }

  function maxPtacMoteur(axles) {
    if (axles <= 2) return 19;
    if (axles === 3) return 26;
    return 32;
  }

  function maxPtacRemorque(axles) {
    if (axles <= 2) return 19;
    return 26;
  }

  function loiEssieux(total, eligible44) {
    if (total <= 3) return total <= 2 ? 19 : 26;
    if (total === 4) return 38;
    return eligible44 ? 44 : 40;
  }

  function eligible44(exo) {
    const total = totalAxles(exo);
    if (total < 5) return false;
    const moteur = exo.kind === "porteur-remorque" ? exo.porteur : exo.tracteur;
    if (!moteur || moteur.ptra < 44) return false;
    if (exo.kind === "tracteur-semi") {
      if (exo.semi.axles <= 2) return exo.semi.ptac >= 37;
      return exo.semi.ptac >= 38;
    }
    if (exo.kind === "porteur-remorque") {
      return (
        exo.porteur.ptac >= maxPtacMoteur(exo.porteur.axles) &&
        exo.remorque.ptac >= maxPtacRemorque(exo.remorque.axles)
      );
    }
    return false;
  }

  function totalAxles(exo) {
    if (exo.kind === "porteur") return exo.porteur.axles;
    if (exo.kind === "porteur-remorque") return exo.porteur.axles + exo.remorque.axles;
    return exo.tracteur.axles + exo.semi.axles;
  }

  function reason44(exo) {
    if (exo.kind === "porteur") return "Véhicule isolé : le 44 t ne s'applique pas (MMA = PTAC).";
    const total = totalAxles(exo);
    const bits = [];
    if (total < 5) bits.push("moins de 5 essieux");
    const moteur = exo.kind === "porteur-remorque" ? exo.porteur : exo.tracteur;
    if (moteur.ptra < 44) bits.push("PTRA du moteur < 44 t");
    if (exo.kind === "tracteur-semi") {
      if (exo.semi.axles <= 2 && exo.semi.ptac < 37) bits.push("semi 2 essieux : PTAC < 37 t");
      if (exo.semi.axles >= 3 && exo.semi.ptac < 38) bits.push("semi 3 essieux : PTAC < 38 t");
    }
    if (exo.kind === "porteur-remorque") {
      if (exo.porteur.ptac < maxPtacMoteur(exo.porteur.axles)) bits.push("porteur pas au max de la loi essieux");
      if (exo.remorque.ptac < maxPtacRemorque(exo.remorque.axles)) bits.push("remorque pas au max de la loi essieux");
    }
    if (!bits.length) return "Conditions 44 t réunies.";
    return "Pas de 44 t : " + bits.join(" · ") + ".";
  }

  function compute(exo) {
    exo.eligible44 = eligible44(exo);
    exo.banner44 = exo.eligible44 ? "44 t possible" : "44 t NON";
    const steps = [];
    let mma;

    if (exo.kind === "porteur") {
      mma = exo.porteur.ptac;
      steps.push("Véhicule isolé → MMA (PMA) = PTAC = " + fmt(mma) + " t.");
      steps.push("Le PTRA (" + fmt(exo.porteur.ptra) + " t) ne sert PAS tant qu'il n'y a pas d'attelage. Piège fréquent.");
      const cu = round1(mma - exo.porteur.pv);
      steps.push("CU = MMA − PV = " + fmt(mma) + " − " + fmt(exo.porteur.pv) + " = " + fmt(cu) + " t.");
      return { mma: round1(mma), cu, steps, c1: mma, c2: maxPtacMoteur(exo.porteur.axles), c3: mma };
    }

    const moteur = exo.kind === "porteur-remorque" ? exo.porteur : exo.tracteur;
    const total = totalAxles(exo);
    const c1 = moteur.ptra;
    const c2 = loiEssieux(total, exo.eligible44);
    let c3;
    let c3txt;
    if (exo.kind === "porteur-remorque") {
      c3 = round1(exo.porteur.ptac + exo.remorque.ptac);
      c3txt = "Addition ensemble : PTAC porteur + PTAC remorque = " + fmt(exo.porteur.ptac) + " + " + fmt(exo.remorque.ptac) + " = " + fmt(c3) + " t.";
    } else {
      c3 = round1(exo.tracteur.pv + exo.semi.ptac);
      c3txt = "Addition articulé : PV tracteur + PTAC semi = " + fmt(exo.tracteur.pv) + " + " + fmt(exo.semi.ptac) + " = " + fmt(c3) + " t.";
      steps.push("PIÈGE : on n'ajoute PAS les deux PTAC (tracteur + semi). Sur articulé c'est PV tracteur + PTAC semi.");
    }
    steps.push("Critère 1 — PTRA du véhicule moteur : " + fmt(c1) + " t.");
    steps.push("Critère 2 — loi des essieux (" + total + " essieux" + (exo.eligible44 ? ", 44 t OK" : ", 44 t KO") + ") : " + fmt(c2) + " t. " + reason44(exo));
    steps.push("Critère 3 — " + c3txt);
    mma = round1(Math.min(c1, c2, c3));
    steps.push("On garde le PLUS PETIT : MMA (PMA) = " + fmt(mma) + " t.");

    const pv2 = exo.kind === "porteur-remorque" ? exo.porteur.pv + exo.remorque.pv : exo.tracteur.pv + exo.semi.pv;
    const cu = round1(mma - pv2);
    steps.push("CU = MMA − (somme des PV) = " + fmt(mma) + " − " + fmt(round1(pv2)) + " = " + fmt(cu) + " t.");
    return { mma, cu, steps, c1, c2, c3 };
  }

  function toQuestion(exo) {
    const r = compute(exo);
    exo.eligible44 = eligible44(exo);
    exo.banner44 = exo.eligible44 ? "44 t possible" : "44 t NON";
    const kindLabel =
      exo.kind === "porteur" ? "ce porteur" : exo.kind === "porteur-remorque" ? "cet ensemble" : "cet articulé";
    return {
      id: exo.id,
      type: "pma-free",
      category: "pma",
      exo: exo,
      diagram: true,
      q: "Calcule le PMA et la CU de " + kindLabel + " (en tonnes).",
      expl: r.steps.join(" "),
      steps: r.steps,
      mma: r.mma,
      cu: r.cu,
      options: []
    };
  }

  const HAND = [
    {
      id: "h1",
      kind: "porteur",
      pneu: true,
      porteur: { axles: 2, ptac: 19, pv: 8, ptra: 40 }
    },
    {
      id: "h2",
      kind: "porteur",
      pneu: true,
      porteur: { axles: 3, ptac: 26, pv: 10.5, ptra: 44 }
    },
    {
      id: "h3",
      kind: "porteur",
      pneu: true,
      porteur: { axles: 4, ptac: 32, pv: 14, ptra: 40 }
    },
    {
      id: "h4",
      kind: "porteur-remorque",
      pneu: true,
      porteur: { axles: 2, ptac: 19, pv: 8, ptra: 44 },
      remorque: { axles: 2, ptac: 18, pv: 5.5 }
    },
    {
      id: "h5",
      kind: "porteur-remorque",
      pneu: true,
      porteur: { axles: 2, ptac: 19, pv: 8, ptra: 40 },
      remorque: { axles: 3, ptac: 26, pv: 6 }
    },
    {
      id: "h6",
      kind: "porteur-remorque",
      pneu: true,
      porteur: { axles: 2, ptac: 19, pv: 8, ptra: 44 },
      remorque: { axles: 3, ptac: 26, pv: 6 }
    },
    {
      id: "h7",
      kind: "tracteur-semi",
      pneu: true,
      tracteur: { axles: 2, ptac: 19, pv: 7.5, ptra: 42 },
      semi: { axles: 2, ptac: 31, pv: 6.5 }
    },
    {
      id: "h8",
      kind: "tracteur-semi",
      pneu: true,
      tracteur: { axles: 2, ptac: 19, pv: 7, ptra: 40 },
      semi: { axles: 3, ptac: 32, pv: 7 }
    },
    {
      id: "h9",
      kind: "tracteur-semi",
      pneu: true,
      tracteur: { axles: 2, ptac: 19, pv: 7, ptra: 44 },
      semi: { axles: 3, ptac: 38, pv: 8 }
    },
    {
      id: "h10",
      kind: "tracteur-semi",
      pneu: true,
      tracteur: { axles: 2, ptac: 18, pv: 7.5, ptra: 44 },
      semi: { axles: 3, ptac: 34, pv: 7 }
    },
    {
      id: "h11",
      kind: "porteur-remorque",
      pneu: true,
      porteur: { axles: 3, ptac: 26, pv: 11, ptra: 40 },
      remorque: { axles: 2, ptac: 19, pv: 6 }
    },
    {
      id: "h12",
      kind: "porteur-remorque",
      pneu: true,
      porteur: { axles: 3, ptac: 26, pv: 11, ptra: 44 },
      remorque: { axles: 2, ptac: 19, pv: 6 }
    },
    {
      id: "h13",
      kind: "tracteur-semi",
      pneu: true,
      tracteur: { axles: 2, ptac: 19, pv: 8, ptra: 44 },
      semi: { axles: 3, ptac: 38, pv: 7 }
    },
    {
      id: "h14",
      kind: "tracteur-semi",
      pneu: true,
      tracteur: { axles: 3, ptac: 26, pv: 9, ptra: 44 },
      semi: { axles: 3, ptac: 38, pv: 8 }
    },
    {
      id: "h15",
      kind: "tracteur-semi",
      pneu: true,
      tracteur: { axles: 2, ptac: 18, pv: 8, ptra: 44 },
      semi: { axles: 2, ptac: 37, pv: 7 }
    },
    {
      id: "h16",
      kind: "porteur-remorque",
      pneu: true,
      porteur: { axles: 2, ptac: 19, pv: 8, ptra: 44 },
      remorque: { axles: 2, ptac: 16, pv: 5 }
    },
    {
      id: "h17",
      kind: "porteur-remorque",
      pneu: true,
      porteur: { axles: 4, ptac: 32, pv: 13, ptra: 44 },
      remorque: { axles: 2, ptac: 19, pv: 6 }
    },
    {
      id: "h18",
      kind: "tracteur-semi",
      pneu: true,
      tracteur: { axles: 2, ptac: 19, pv: 7.2, ptra: 44 },
      semi: { axles: 3, ptac: 32, pv: 6.8 }
    },
    {
      id: "h19",
      kind: "porteur",
      pneu: true,
      porteur: { axles: 2, ptac: 18, pv: 9, ptra: 44 }
    },
    {
      id: "h20",
      kind: "porteur-remorque",
      pneu: true,
      porteur: { axles: 3, ptac: 26, pv: 12, ptra: 44 },
      remorque: { axles: 3, ptac: 26, pv: 7 }
    },
    {
      id: "h21",
      kind: "tracteur-semi",
      pneu: true,
      tracteur: { axles: 3, ptac: 26, pv: 10, ptra: 40 },
      semi: { axles: 2, ptac: 31, pv: 6 }
    },
    {
      id: "h22",
      kind: "porteur-remorque",
      pneu: true,
      porteur: { axles: 2, ptac: 19, pv: 7, ptra: 38 },
      remorque: { axles: 2, ptac: 19, pv: 6 }
    }
  ];

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randInt(a, b) {
    return a + Math.floor(Math.random() * (b - a + 1));
  }

  function generateOne(i) {
    const kind = pick(["porteur", "porteur-remorque", "porteur-remorque", "tracteur-semi", "tracteur-semi"]);
    const pneu = true;
    if (kind === "porteur") {
      const axles = pick([2, 3, 4]);
      const ptac = maxPtacMoteur(axles) - pick([0, 0, 0, 1]);
      const pv = round05(Math.min(ptac - 6, ptac * (0.38 + Math.random() * 0.12)));
      const ptra = pick([38, 40, 44, 44]);
      return { id: "r" + i, kind, pneu, porteur: { axles, ptac, pv, ptra } };
    }
    if (kind === "porteur-remorque") {
      const pa = pick([2, 2, 3, 3, 4]);
      const ra = pick([2, 2, 3]);
      const ptacP = maxPtacMoteur(pa) - pick([0, 0, 1]);
      const ptacR = maxPtacRemorque(ra) - pick([0, 0, 0, 1, 3]);
      return {
        id: "r" + i,
        kind,
        pneu,
        porteur: { axles: pa, ptac: ptacP, pv: round05(7 + Math.random() * 5), ptra: pick([38, 40, 44, 44, 42]) },
        remorque: { axles: ra, ptac: ptacR, pv: round05(4.5 + Math.random() * 2.5) }
      };
    }
    const ta = pick([2, 2, 2, 3]);
    const sa = pick([2, 3, 3, 3]);
    const semiPtac = sa <= 2 ? pick([31, 32, 37, 37]) : pick([32, 34, 36, 38, 38]);
    return {
      id: "r" + i,
      kind,
      pneu,
      tracteur: {
        axles: ta,
        ptac: ta === 2 ? pick([18, 19]) : 26,
        pv: round05(6.5 + Math.random() * 2.5),
        ptra: pick([40, 42, 44, 44, 38])
      },
      semi: { axles: sa, ptac: semiPtac, pv: round05(5.5 + Math.random() * 2.5) }
    };
  }

  function fingerprint(exo) {
    if (exo.kind === "porteur") {
      return ["p", exo.porteur.axles, exo.porteur.ptac, exo.porteur.pv, exo.porteur.ptra].join("|");
    }
    if (exo.kind === "porteur-remorque") {
      return [
        "e",
        exo.pneu,
        exo.porteur.axles,
        exo.porteur.ptac,
        exo.porteur.pv,
        exo.porteur.ptra,
        exo.remorque.axles,
        exo.remorque.ptac,
        exo.remorque.pv
      ].join("|");
    }
    return [
      "a",
      exo.pneu,
      exo.tracteur.axles,
      exo.tracteur.ptac,
      exo.tracteur.pv,
      exo.tracteur.ptra,
      exo.semi.axles,
      exo.semi.ptac,
      exo.semi.pv
    ].join("|");
  }

  window.buildPmaQuestions = function (count) {
    const out = [];
    const seen = {};
    let i = 0;
    while (out.length < count && i < 400) {
      const exo = generateOne(Date.now() + i + randInt(1, 9999));
      i += 1;
      const key = fingerprint(exo);
      if (seen[key]) continue;
      seen[key] = true;
      out.push(toQuestion(exo));
    }
    return out;
  };

  window.PMA_HAND_COUNT = HAND.length;
})();
