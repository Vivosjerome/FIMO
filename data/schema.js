(function () {
  const F = (window.FIMO = window.FIMO || {});

  F.SCHEMA_VERSION = 1;

  F.QUESTION_TYPES = [
    "single",
    "multi",
    "truefalse",
    "calc",
    "scenario",
    "order",
    "match",
    "pma-free",
    "template"
  ];

  F.AUDIT_STATUS = {
    pending: "À auditer",
    ok: "Validée",
    fix: "À corriger",
    obsolete: "Obsolète",
    generated: "Générée (règle fixe)"
  };

  F.DIFFICULTY = {
    1: "Essentiel",
    2: "Standard",
    3: "Piège / cas"
  };

  F.ORIGINS = {
    legacy: "Banque existante",
    new: "Nouvelle question",
    generated: "Instance de template"
  };

  F.SIGLES = {
    ABS: "Antiblocage des roues",
    EBS: "Freinage électronique",
    ESP: "Contrôle de trajectoire",
    AFU: "Assistance au freinage d'urgence",
    ASR: "Antipatinage",
    ART: "Régulateur de vitesse adaptatif",
    EGR: "Recyclage des gaz d'échappement",
    PTAC: "Poids total autorisé en charge",
    PTRA: "Poids total roulant autorisé",
    PMA: "Poids maximal autorisé",
    MMA: "Masse maximale autorisée",
    CU: "Charge utile",
    PV: "Poids à vide"
  };

  F.emptyQuestion = function () {
    return {
      id: "",
      domain: null,
      category: null,
      subcategory: null,
      difficulty: null,
      relatedFiche: null,
      skill: null,
      type: "single",
      q: "",
      options: [],
      correct: 0,
      expl: "",
      trap: "",
      remember: "",
      tags: [],
      source: null,
      origin: "new",
      auditStatus: "pending",
      templateId: null
    };
  };
})();
