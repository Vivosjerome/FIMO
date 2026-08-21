(function () {
  const F = (window.FIMO = window.FIMO || {});

  F.DOMAINS = [
    {
      id: "vehicule",
      name: "Véhicule",
      fiches: [
        "chaine",
        "moteur-diesel",
        "embrayage",
        "boite",
        "freinage",
        "abs-ebs",
        "ralentisseurs",
        "pneumatiques",
        "direction",
        "suspensions",
        "controles-vehicule"
      ]
    },
    {
      id: "masses",
      name: "Masses et dimensions",
      fiches: ["ptac", "ptra", "pma-cu", "essieux", "dimensions", "ensemble-mma", "t44", "surcharge"]
    },
    {
      id: "chargement",
      name: "Chargement",
      fiches: ["repartition", "arrimage", "stabilite"]
    },
    {
      id: "socio",
      name: "Réglementation",
      fiches: ["temps-conduite", "pauses", "repos-journalier", "repos-hebdo", "temps-travail", "chrono-usage", "infractions"]
    },
    {
      id: "conduite",
      name: "Conduite",
      fiches: ["conduite", "distances", "descente", "meteo", "angles-morts"]
    },
    {
      id: "sante",
      name: "Sécurité et santé",
      fiches: ["fatigue", "alcool", "stupefiants", "medicaments", "accident", "secours", "incendie"]
    },
    {
      id: "transport",
      name: "Transport et client",
      fiches: ["documents", "responsabilites", "controles-routiers", "livraison", "relation-client"]
    },
    {
      id: "environnement",
      name: "Environnement",
      fiches: ["eco-conduite", "emissions"]
    }
  ];

  F.QCM_CATEGORIES = [
    { id: "temps-conduite", name: "Temps de conduite", meaning: "9 h / 10 h / 56 h / 90 h" },
    { id: "pauses", name: "Pauses", meaning: "4 h 30 et 45 min" },
    { id: "repos-journalier", name: "Repos journalier", meaning: "11 h et 9 h" },
    { id: "repos-hebdo", name: "Repos hebdomadaire", meaning: "45 h et 24 h" },
    { id: "temps-travail", name: "Temps de travail", meaning: "48 h / 60 h" },
    { id: "chrono-usage", name: "Chronotachygraphe", meaning: "Carte et modes" },
    { id: "chaine", name: "Chaîne cinématique", meaning: "Moteur → roues" },
    { id: "freinage", name: "Freinage", meaning: "Service, park, air" },
    { id: "ralentisseurs", name: "Ralentisseurs", meaning: "Freinage continu" },
    { id: "abs-ebs", name: "ABS / EBS", meaning: "Aides au freinage" },
    { id: "pma-cu", name: "PMA / CU", meaning: "Masses et plaques" },
    { id: "essieux", name: "Essieux et 44 t", meaning: "19 / 26 / 32 / 38 / 40 / 44" },
    { id: "dimensions", name: "Dimensions", meaning: "Longueur et largeur" },
    { id: "arrimage", name: "Chargement / arrimage", meaning: "Stabilité du chargement" },
    { id: "conduite", name: "Conduite rationnelle", meaning: "Anticipation et éco" },
    { id: "alcool", name: "Santé et alcool", meaning: "Fatigue, alcool, stupéfiants" },
    { id: "accident", name: "Accident et secours", meaning: "Conduite à tenir" },
    { id: "documents", name: "Documents et client", meaning: "Obligations pro" },
    { id: "pneumatiques", name: "Pneumatiques", meaning: "Pression et usure" },
    { id: "angles-morts", name: "Angles morts", meaning: "Usagers vulnérables" },
    { id: "fatigue", name: "Fatigue", meaning: "Hypovigilance" },
    { id: "incendie", name: "Incendie", meaning: "Conduite à tenir" },
    { id: "descente", name: "Descente et météo", meaning: "Frein moteur, pluie, vent" }
  ];

  F.FICHE_INDEX = {};
  F.DOMAINS.forEach(function (d) {
    d.fiches.forEach(function (id) {
      F.FICHE_INDEX[id] = d.id;
    });
  });

  F.domainOfFiche = function (ficheId) {
    return F.FICHE_INDEX[ficheId] || null;
  };
})();
