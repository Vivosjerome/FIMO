(function () {
  const F = (window.FIMO = window.FIMO || {});
  F.NEW_QUESTIONS = F.NEW_QUESTIONS || [];

  F.addQ = function (rows) {
    rows.forEach(function (r) {
      F.NEW_QUESTIONS.push({
        id: r[0],
        category: r[1],
        relatedFiche: r[2],
        domain: F.domainOfFiche(r[2]),
        q: r[3],
        options: r[4],
        correct: r[5],
        expl: r[6],
        trap: r[7] || "",
        remember: r[8] || "",
        source: r[9] || null,
        skill: r[2],
        difficulty: r[10] || 2,
        type: "single",
        origin: "new",
        auditStatus: "ok",
        tags: []
      });
    });
  };
})();
