(function () {
  const F = (window.FIMO = window.FIMO || {});

  F.TEMPLATES = {
    pma: {
      id: "pma",
      kind: "generated",
      relatedFiche: "pma-cu",
      category: "pma-cu",
      domain: "masses",
      skill: "pma-cu",
      type: "pma-free",
      rules: ["masses", "t44", "additionEnsemble"],
      build: function (n) {
        if (typeof window.buildPmaQuestions !== "function") return [];
        return window.buildPmaQuestions(n);
      }
    },
    "drive-time": {
      id: "drive-time",
      kind: "generated",
      relatedFiche: "temps-conduite",
      category: "temps-conduite",
      domain: "socio",
      skill: "temps-conduite",
      type: "single",
      rules: ["social"],
      note: "Les horaires changent. Les plafonds 9 h / 4 h 30 / 90 h restent ceux du 561/2006.",
      build: function (n) {
        return F.generateDriveTime(n);
      }
    }
  };
})();
