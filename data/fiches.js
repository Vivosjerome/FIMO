(function () {
  const F = (window.FIMO = window.FIMO || {});

  const TITLES = {
    chaine: "Chaîne cinématique",
    "moteur-diesel": "Moteur diesel",
    embrayage: "Embrayage",
    boite: "Boîte de vitesses",
    freinage: "Freinage de service et de parc",
    "abs-ebs": "ABS et EBS",
    ralentisseurs: "Ralentisseurs",
    pneumatiques: "Pneumatiques",
    direction: "Direction",
    suspensions: "Suspensions",
    "controles-vehicule": "Contrôles du véhicule",
    ptac: "PTAC",
    ptra: "PTRA",
    "pma-cu": "PMA et charge utile",
    essieux: "Charges et nombre d'essieux",
    dimensions: "Dimensions",
    "ensemble-mma": "Ensembles de véhicules",
    t44: "44 tonnes",
    surcharge: "Surcharge",
    repartition: "Répartition des charges",
    arrimage: "Arrimage",
    stabilite: "Stabilité du véhicule chargé",
    "temps-conduite": "Temps de conduite",
    pauses: "Pauses",
    "repos-journalier": "Repos journalier",
    "repos-hebdo": "Repos hebdomadaire",
    "temps-travail": "Temps de travail",
    "chrono-usage": "Chronotachygraphe",
    infractions: "Infractions liées aux temps",
    conduite: "Conduite rationnelle",
    distances: "Distances de sécurité",
    descente: "Conduite en descente",
    meteo: "Pluie, neige, verglas, vent",
    "angles-morts": "Angles morts",
    fatigue: "Fatigue et hypovigilance",
    alcool: "Alcool",
    stupefiants: "Stupéfiants",
    medicaments: "Médicaments",
    accident: "Conduite à tenir en cas d'accident",
    secours: "Premiers secours",
    incendie: "Incendie",
    documents: "Documents de transport",
    responsabilites: "Responsabilités du conducteur",
    "controles-routiers": "Contrôles routiers",
    livraison: "Livraison",
    "relation-client": "Relation client",
    "eco-conduite": "Éco-conduite",
    emissions: "Émissions"
  };

  function stub(id) {
    return {
      id: id,
      title: TITLES[id] || id,
      status: "draft",
      note: "Cours à rédiger. Aucune règle n'est inventée en attendant la fiche.",
      sections: []
    };
  }

  F.FICHES = Object.keys(TITLES).map(stub);
  F.FICHE_BY_ID = {};
  F.FICHES.forEach(function (f) {
    f.domain = F.domainOfFiche(f.id);
    F.FICHE_BY_ID[f.id] = f;
  });

  F.getFiche = function (id) {
    return F.FICHE_BY_ID[id] || null;
  };

  F.publishFiche = function (id, data) {
    const f = F.FICHE_BY_ID[id];
    if (!f) return;
    f.status = "published";
    f.note = "";
    f.sections = data.sections || [];
    f.source = data.source || null;
  };
})();
