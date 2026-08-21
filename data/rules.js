(function () {
  const F = (window.FIMO = window.FIMO || {});

  F.RULES = F.RULES || {};

  F.RULES.masses = {
    id: "masses",
    status: "sourced",
    source: {
      label: "Code de la route, article R312-4",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074228/LEGISCTA000006159214/"
    },
    ptacMoteur: { 2: 19, 3: 26, "4+": 32, unit: "t" },
    ptacRemorque: { 2: 19, "3+": 26, unit: "t" },
    ptraEssieux: { 4: 38, "5+": 40, unit: "t" }
  };

  F.RULES.t44 = {
    id: "t44",
    status: "sourced",
    source: {
      label: "Décret n° 2012-1359 — FAQ ministère (10/01/2017)",
      url: "https://www.ecologie.gouv.fr/sites/default/files/documents/FAQ%2044%20tonnes%20Version%2010%2001%202017.pdf"
    },
    minEssieux: 5,
    ptraMoteurMin: 44,
    ptacSemi2Min: 37,
    ptacSemi3Min: 38,
    unit: "t"
  };

  F.RULES.dimensions = {
    id: "dimensions",
    status: "sourced",
    source: {
      label: "Code de la route, art. R312-10 (largeur) et R312-11 (longueur)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074228/LEGISCTA000006159214/"
    },
    longueur: { vehiculeMoteur: 12, articule: 16.5, trainRoutier: 18.75, unit: "m" },
    largeur: { general: 2.55, temperatureDirigee: 2.6, unit: "m" }
  };

  F.RULES.additionEnsemble = {
    id: "addition-ensemble",
    status: "training",
    porteurRemorque: "PTAC + PTAC",
    tracteurSemi: "PV tracteur + PTAC semi",
    isole: "MMA = PTAC ; PTRA ignoré"
  };

  F.RULES.social = {
    id: "social",
    status: "sourced",
    source: {
      label: "Règlement (CE) n° 561/2006 consolidé (EUR-Lex)",
      url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02006R0561-20240522"
    },
    conduiteJournaliere: { normal: 9, prolongation: 10, maxProlongationsParSemaine: 2, unit: "h" },
    conduiteHebdomadaire: { max: 56, unit: "h" },
    conduiteDeuxSemaines: { max: 90, unit: "h" },
    pause: {
      apresConduite: 4.5,
      duree: 45,
      fractionnement: { premier: 15, second: 30, ordre: "15 puis 30" },
      unitMin: "min"
    },
    reposJournalier: {
      normal: 11,
      reduit: 9,
      maxReduitsEntreHebdo: 3,
      fractionne: { premier: 3, second: 9, total: 12 },
      unit: "h"
    },
    reposHebdomadaire: {
      normal: 45,
      reduitMin: 24,
      compensationAvantFin: "3e semaine suivante",
      unit: "h"
    }
  };

  F.RULES.travail = {
    id: "travail",
    status: "sourced",
    source: {
      label: "Directive 2002/15/CE — durée du travail des conducteurs",
      url: "https://eur-lex.europa.eu/eli/dir/2002/15/oj"
    },
    moyenneHebdo: 48,
    maxSemaine: 60,
    periodeReference: "4 mois",
    travailNuitMax: { heures: 10, per: "24 h" },
    note: "Temps de travail ≠ temps de conduite. Chargement, attente, autres tâches comptent dans le travail, pas dans la conduite 561/2006."
  };

  F.RULES.alcool = {
    id: "alcool",
    status: "sourced",
    source: {
      label: "Code de la route, article R234-1",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006841515"
    },
    marchandisesSang: 0.5,
    marchandisesAir: 0.25,
    transportCommunSang: 0.2,
    unitSang: "g/l",
    unitAir: "mg/l",
    piege: "0,2 g/l = transport en commun, permis probatoire ou EAD. Un PL marchandises n'est pas dans cette liste."
  };

  F.getRule = function (id) {
    return F.RULES[id] || null;
  };
})();
