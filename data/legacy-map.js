(function () {
  const F = (window.FIMO = window.FIMO || {});

  F.LEGACY_MAP = {
    abs: { domain: "vehicule", fiche: "abs", skill: "abs", subcategory: "aides" },
    ebs: { domain: "vehicule", fiche: "ebs", skill: "ebs", subcategory: "aides" },
    esp: { domain: "vehicule", fiche: "esp", skill: "esp", subcategory: "aides" },
    afu: { domain: "vehicule", fiche: "afu", skill: "afu", subcategory: "aides" },
    asr: { domain: "vehicule", fiche: "asr", skill: "asr", subcategory: "aides" },
    art: { domain: "vehicule", fiche: "art", skill: "art", subcategory: "aides" },
    front: { domain: "vehicule", fiche: "front", skill: "front", subcategory: "aides" },
    chaine: { domain: "vehicule", fiche: "chaine", skill: "chaine", subcategory: "transmission" },
    egr: { domain: "vehicule", fiche: "egr", skill: "egr", subcategory: "moteur" },
    ralentisseurs: { domain: "freinage", fiche: "ralentisseurs", skill: "ralentisseurs", subcategory: "continu" },
    freinage: { domain: "freinage", fiche: "freinage", skill: "freinage-air", subcategory: "circuits" },
    conduite: { domain: "conduite", fiche: "conduite", skill: "eco", subcategory: "rationnelle" },
    couple: { domain: "conduite", fiche: "couple", skill: "moteur", subcategory: "energie" },
    surcharge: { domain: "masses", fiche: "surcharge", skill: "surcharge", subcategory: "risques" },
    ptac: { domain: "masses", fiche: "ptac", skill: "ptac", subcategory: "definitions" },
    ptra: { domain: "masses", fiche: "ptra", skill: "ptra", subcategory: "definitions" },
    dimensions: { domain: "masses", fiche: "dimensions", skill: "gabarit", subcategory: "limites" },
    essieux: { domain: "masses", fiche: "essieux", skill: "essieux", subcategory: "limites" },
    pma: { domain: "masses", fiche: "pma-cu", skill: "pma-cu", subcategory: "calcul" }
  };
})();
