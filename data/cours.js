(function () {
  const F = (window.FIMO = window.FIMO || {});
  const P = F.publishFiche;
  const SRC561 = {
    label: "Règlement (CE) n° 561/2006, art. 6 à 8",
    url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02006R0561-20240522"
  };
  const SRC312 = {
    label: "Code de la route, art. R312-4, R312-10, R312-11",
    url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074228/LEGISCTA000006159214/"
  };

  P("chaine", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Comprendre comment la puissance va du moteur jusqu'aux roues, pour choisir le bon régime, le bon rapport, et utiliser le frein moteur sans casser la mécanique." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { h: "Qu'est-ce que la chaîne cinématique ?", p: "C'est l'ensemble des organes qui transmettent le mouvement du moteur vers les roues motrices. Si un maillon est mal utilisé (régime trop bas, embrayage qui patine, mauvais rapport), tu consommes plus, tu uses, et tu perds de la sécurité (peu de frein moteur, à-coups, calage)." },
          { h: "Cheminement de la puissance", ol: ["Moteur (couple et régime)", "Embrayage (coupler ou séparer moteur et boîte)", "Boîte de vitesses (adapter le couple et la vitesse)", "Arbre de transmission", "Pont / différentiel", "Roues"] },
          { h: "Moteur", p: "Le moteur diesel fournit un couple (force de rotation) dans une plage de régimes. En dessous, il « tourne court » : peu de couple, fumée, usure. Au-dessus, il hurle, consomme, et n'apporte plus de force utile. La conduite rationnelle consiste à rester dans la plage de couple utile." },
          { h: "Embrayage", p: "Il permet de démarrer, de changer de rapport, et d'arrêter le véhicule sans caler. Ce n'est pas un frein. Un pied posé en permanence use le mécanisme et chauffe." },
          { h: "Boîte de vitesses", p: "Un rapport court multiplie le couple (démarrage, rampe). Un rapport long privilégie la vitesse et la conso en palier. Automatisée ou manuelle : le principe reste le même. On ne « saute » pas les rapports au hasard en charge." },
          { h: "Différentiel et pont", p: "Le différentiel permet aux roues d'un même essieu de tourner à des vitesses différentes (virage). Le pont abaisse encore le régime et augmente le couple aux roues." },
          { h: "Frein moteur et ralentisseur", p: "En descente, on utilise d'abord le frein moteur (rapport adapté, pas de point mort) puis le ralentisseur. Les freins de service sont gardés pour l'arrêt et l'urgence. Un point mort en descente = plus de frein moteur, freins qui chauffent, danger." }
        ]
      },
      {
        type: "connaitre",
        title: "À connaître parfaitement",
        ul: [
          "Ordre : moteur → embrayage → boîte → arbre → pont / différentiel → roues",
          "Couple = force ; puissance = couple × régime",
          "Rester dans la plage de couple utile",
          "L'embrayage n'est pas un frein",
          "Jamais de point mort en descente",
          "Ralentisseur + frein moteur avant le frein de service en descente longue"
        ]
      },
      {
        type: "pieges",
        title: "Pièges et erreurs fréquentes",
        ul: [
          "Confondre couple et puissance",
          "Croire que le ralenti « économise » en descente",
          "Garder le pied sur l'embrayage",
          "Utiliser le ralentisseur pour s'arrêter au feu"
        ]
      },
      { type: "exemple", title: "Exemple conducteur", body: "Rampe d'autoroute chargée : tu descends d'un ou deux rapports pour rester dans le couple, sans coller la pédale. Au sommet, tu reprends un rapport plus long. En descente suivante : rapport qui donne du frein moteur, ralentisseur, freins de service par à-coups courts si besoin — jamais en continu jusqu'à l'arrivée." },
      { type: "resume", title: "Résumé à mémoriser", body: "La chaîne cinématique transmet et transforme le couple. Bien s'en servir, c'est : bon régime, bon rapport, embrayage propre, frein moteur en descente." }
    ]
  });

  P("ralentisseurs", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Savoir à quoi sert le freinage continu, nommer les 4 familles, et ne jamais le confondre avec le frein de service ou le park." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Un PL chargé accumule une énorme énergie en descente. Les freins de service (tambours / disques) chauffent si on les utilise trop longtemps : fading, perte de freinage. Le ralentisseur dissipe de l'énergie sans (ou presque sans) user les garnitures." },
          { h: "Les 4 familles", ol: ["Frein moteur : on utilise la compression du moteur (souvent commande au volant / pédale). Efficace surtout à régime élevé, sur le bon rapport.", "Frein d'échappement : un volet crée une contre-pression dans l'échappement.", "Ralentisseur hydrodynamique (huile, parfois eau) : un fluide freine un rotor. Très progressif, attention à l'échauffement du fluide / radiateur.", "Ralentisseur électromagnétique (ex. Telma) : courants de Foucault. Efficace, mais moins à très basse vitesse, et il chauffe."] },
          { h: "Ce qu'il ne fait pas", p: "Il ne bloque pas le véhicule à l'arrêt. Au feu, au stop, au chargement : frein de service puis park. Sur verglas, un ralentisseur trop brutal peut faire décrocher les roues motrices : on dose." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["4 familles : moteur, échappement, hydrodynamique, électromagnétique", "Rôle : retenir, pas immobiliser", "En descente longue : continu d'abord, service ensuite", "Park = ressorts, pas le ralentisseur"] },
      { type: "pieges", title: "Pièges", ul: ["« Je m'arrête au feu au ralentisseur »", "Point mort + ralentisseur seulement", "Oublier qu'un Telma est moins efficace presque à l'arrêt"] },
      { type: "exemple", title: "Exemple conducteur", body: "Col chargé : rapport qui fait crier un peu le moteur, ralentisseur à un cran, vitesse stable. Si ça accélère encore : un cran de plus, puis de petits coups de pédale. Jamais la pédale collée 4 km." },
      { type: "resume", title: "Résumé", body: "Le continu sauve les freins et la descente. Les 4 systèmes retiennent. Seul le service (puis le park) immobilise." }
    ]
  });

  P("freinage", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Retenir le fonctionnement air du PL : service et parc ne marchent pas de la même façon." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { h: "Frein de service", p: "C'est la pédale. Sur un PL, l'air comprimé serre les freins. Pas d'air = pas (ou plus) de service. D'où l'importance des réservoirs, du compresseur, des voyants, et de la purge des bouteilles (eau/huile)." },
          { h: "Frein de parc (park)", p: "En général à ressorts. Les ressorts serrent. L'air desserre. Conséquence : une fuite d'air au park, ou un véhicule sans air, tend à rester (ou à se mettre) freiné par les ressorts. C'est l'inverse du service." },
          { h: "Circuits", p: "Souvent un circuit avant et un circuit arrière (sécurité : une fuite ne doit pas tout enlever). Le flexible jaune / rouge vers la remorque : alimentation et commande. On vérifie les couples, l'usure, et on n'attelle pas « au feeling »." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Service : l'air serre", "Park : l'air desserre, les ressorts serrent", "Sans air, le park peut rester serré", "Le ralentisseur n'est pas le park"] },
      { type: "pieges", title: "Pièges", ul: ["Inverser service et park", "Partir park serré « un peu »", "Oublier de coupler l'air remorque"] },
      { type: "exemple", title: "Exemple conducteur", body: "Le matin : niveau d'air, voyants, purge, essai de pédale, essai park dans la cour. Après attelage : flexibles, test de frein remorque avant la route." },
      { type: "resume", title: "Résumé", body: "Pédale = air qui serre. Park = ressorts, air qui libère. Contrôler l'air avant de partir." }
    ]
  });

  P("abs-ebs", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Savoir ce que font ABS et EBS, et ce qu'ils ne remplacent pas." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { h: "ABS", p: "Antiblocage. Des capteurs voient si une roue va se bloquer. Le système baisse puis reprend la pression de frein. Tu peux (dans une certaine mesure) garder la direction pendant un freinage fort. Sur sol meuble, la distance d'arrêt peut être plus longue : l'ABS refuse le « coin » de gravier ou de neige. L'ABS ne raccourcit pas magiquement l'arrêt et ne remplace pas la distance de sécurité." },
          { h: "EBS", p: "Freinage à commande électronique. Il gère plus que l'antiblocage : temps de réponse, répartition, souvent l'ABS intégré, parfois l'aide d'urgence. Ce n'est pas « un ABS de marque ». Un voyant EBS / ABS allumé = aide potentiellement HS, freins de service encore là, mais conduite plus prudente et contrôle atelier." },
          { h: "À la pédale", p: "Les vibrations ABS sont normales. On ne lève pas le pied." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["ABS = éviter le blocage, garder la direction", "Pas une distance d'arrêt garantie plus courte", "EBS = gestion électronique du freinage, ABS souvent inclus", "Voyant allumé : adapter, faire contrôler"] },
      { type: "pieges", title: "Pièges", ul: ["« ABS = je peux coller le précédent »", "Couper le contact pour éteindre le voyant", "Confondre ABS, ASR, ESP"] },
      { type: "exemple", title: "Exemple conducteur", body: "Piéton qui traverse : tu freines à fond, tu braques pour l'éviter. L'ABS fait vibrer la pédale : tu gardes le pied. Sans ABS, le même geste part souvent tout droit." },
      { type: "resume", title: "Résumé", body: "ABS : pas de blocage, direction possible. EBS : cerveau du freinage. Ni l'un ni l'autre n'annule la masse × la vitesse." }
    ]
  });

  P("temps-conduite", {
    source: SRC561,
    sections: [
      { type: "objectif", title: "Objectif", body: "Retenir les plafonds de conduite du règlement 561/2006, et ne pas les confondre avec le temps de travail." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "La « conduite » au sens du règlement, c'est le temps où tu conduis le véhicule soumis au chrono. Un chargement, une attente, une manutention : ce n'est pas de la conduite (ça peut être du travail)." },
          { h: "Journalier", p: "Maximum 9 heures. Tu peux aller jusqu'à 10 heures, mais pas plus de deux fois dans la même semaine." },
          { h: "Hebdomadaire", p: "Maximum 56 heures de conduite sur une semaine (lundi 0 h → dimanche 24 h au sens du règlement)." },
          { h: "Deux semaines", p: "Maximum 90 heures sur deux semaines consécutives. Si tu as fait 56 h cette semaine, il ne reste que 34 h la suivante." },
          {
            table: {
              headers: ["Plafond", "Valeur", "Exception"],
              rows: [
                ["Jour", "9 h", "10 h, 2 fois / semaine"],
                ["Semaine", "56 h", "Sans dépasser aussi le temps de travail"],
                ["2 semaines", "90 h", "—"]
              ]
            }
          }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["9 h / jour", "10 h seulement 2 fois / semaine", "56 h / semaine", "90 h / 2 semaines", "Conduite ≠ travail"] },
      { type: "pieges", title: "Pièges", ul: ["Croire que 10 h est la règle de base", "Additionner pause + conduite dans le 9 h", "Oublier le plafond 90 h : 56 + 56 = 112, interdit"] },
      { type: "exemple", title: "Exemple conducteur", body: "Semaine A : 56 h de conduite. Semaine B : tu ne peux pas refaire 56 h. 90 − 56 = 34 h maximum." },
      { type: "resume", title: "Résumé", body: "9 h (10 h × 2), 56 h, 90 h. Source : 561/2006 art. 6." }
    ]
  });

  P("pauses", {
    source: SRC561,
    sections: [
      { type: "objectif", title: "Objectif", body: "Savoir quand une pause est obligatoire et comment on a le droit de la couper." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Après 4 h 30 de conduite, tu dois prendre une pause d'au moins 45 minutes, sauf si tu prends un repos (journalier ou hebdomadaire)." },
          { h: "Fractionnement", p: "Les 45 minutes peuvent être remplacées par 15 minutes puis 30 minutes, dans cet ordre, réparties pendant la période de 4 h 30. Pas 30 puis 15. Pas 3 × 15." },
          { p: "La pause n'est pas du temps de conduite. Elle n'allonge pas le compteur 4 h 30 : elle le remet en ordre pour la suite, selon les règles du règlement." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["4 h 30 → 45 min", "Fractionnement : 15 puis 30 seulement", "Un repos remplace la pause"] },
      { type: "pieges", title: "Pièges", ul: ["30 min puis 15 min", "Pause de 20 + 25", "Confondre pause et repos journalier"] },
      { type: "exemple", title: "Exemple conducteur", body: "Départ 6 h 00, conduite continue : à 10 h 30 tu as 4 h 30. Pause 45 min (ou 15 min plus tôt puis 30 min pour finir les 45). Tu ne « grattes » pas jusqu'à 11 h." },
      { type: "resume", title: "Résumé", body: "4 h 30 de conduite, 45 min de pause (15 + 30 dans cet ordre). 561/2006 art. 7." }
    ]
  });

  P("repos-journalier", {
    source: SRC561,
    sections: [
      { type: "objectif", title: "Objectif", body: "Distinguer repos journalier normal, réduit, et fractionné." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { h: "Normal", p: "Au moins 11 heures d'affilée." },
          { h: "Réduit", p: "Au moins 9 heures, mais moins de 11. Maximum 3 repos journaliers réduits entre deux repos hebdomadaires." },
          { h: "Fractionné (normal en deux tranches)", p: "3 heures puis 9 heures (dans cet ordre). Total 12 heures. C'est une façon de prendre le repos journalier normal, pas un « petit 9 h »." },
          { p: "Dans les 24 heures après la fin du repos précédent, un nouveau repos journalier doit avoir été pris." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["11 h normal", "9 h réduit, 3 fois max entre deux hebdo", "Fractionné : 3 h + 9 h", "9 h n'est pas la règle de base"] },
      { type: "pieges", title: "Pièges", ul: ["Croire que le réduit est illimité", "Inverser 9 + 3", "Confondre avec la pause 45 min"] },
      { type: "exemple", title: "Exemple conducteur", body: "Fin de service 21 h, reprise le lendemain 6 h = 9 h de repos → c'est un réduit. Tu notes combien tu en as déjà pris depuis le dernier hebdo." },
      { type: "resume", title: "Résumé", body: "11 h, ou 9 h (3 fois), ou 3 + 9. 561/2006 art. 8." }
    ]
  });

  P("repos-hebdo", {
    source: SRC561,
    sections: [
      { type: "objectif", title: "Objectif", body: "Retenir 45 h / 24 h, compensation, et l'interdiction de prendre le repos hebdo normal dans le camion." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Repos hebdomadaire normal : au moins 45 heures. Réduit : au moins 24 heures. Sur deux semaines : soit deux repos normaux, soit un normal et un réduit." },
          { p: "Le réduit doit être compensé par un repos équivalent, d'un seul bloc, avant la fin de la 3e semaine suivante, collé à un autre repos d'au moins 9 h." },
          { p: "Le repos hebdomadaire commence au plus tard à la fin de 6 périodes de 24 h après la fin du précédent." },
          { p: "Les repos hebdomadaires normaux (et les compensations de plus de 45 h) ne se prennent pas dans le véhicule : hébergement adapté, frais à la charge de l'employeur." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["45 h normal", "24 h réduit minimum", "Compensation avant la fin de la 3e semaine", "Pas dans le camion pour le normal"] },
      { type: "pieges", title: "Pièges", ul: ["45 h dans la couchette « c'est bon »", "Oublier la compensation du 24 h", "Confondre 45 h de repos et 45 min de pause"] },
      { type: "exemple", title: "Exemple conducteur", body: "S1 : repos 24 h. Tu dois un rattrapage de 21 h (45 − 24), pris en un bloc avec un repos ≥ 9 h, dans le délai du règlement, hors véhicule s'il s'agit d'un normal / compensation > 45 h." },
      { type: "resume", title: "Résumé", body: "45 h, ou 24 h + compensation. Pas de hebdo normal dans le véhicule. 561/2006 art. 8." }
    ]
  });

  P("temps-travail", {
    source: {
      label: "Directive 2002/15/CE",
      url: "https://eur-lex.europa.eu/eli/dir/2002/15/oj"
    },
    sections: [
      { type: "objectif", title: "Objectif", body: "Ne plus confondre temps de travail et temps de conduite." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Le temps de travail comprend la conduite mais aussi d'autres tâches : chargement, déchargement, entretien, formalités, etc. L'attente / disponibilité a un régime particulier : ce n'est pas traité ici comme un chiffre à réciter sans fiche paie / convention." },
          { h: "Plafonds européens (2002/15)", p: "Moyenne 48 h par semaine sur 4 mois. Une semaine isolée peut aller jusqu'à 60 h si la moyenne 48 h est respectée. En cas de travail de nuit, le temps de travail quotidien ne dépasse pas 10 h / 24 h." },
          { p: "On peut donc être « en limite de travail » sans avoir atteint 9 h de conduite, si la journée a été pleine de quais." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Travail ≠ conduite", "Moyenne 48 h / semaine", "Max 60 h une semaine si moyenne OK", "Nuit : 10 h de travail / 24 h"] },
      { type: "pieges", title: "Pièges", ul: ["« J'ai le droit de conduire 9 h donc je peux tout faire 9 h »", "Ignorer le quai dans le décompte travail"] },
      { type: "exemple", title: "Exemple conducteur", body: "3 h de quai + 7 h de conduite = 10 h de travail déjà (hors pauses). Ce n'est pas « seulement 7 h »." },
      { type: "resume", title: "Résumé", body: "48 h en moyenne, 60 h max, nuit 10 h. La conduite a ses propres plafonds en plus." }
    ]
  });

  P("chrono-usage", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Utiliser le chrono comme un outil d'enregistrement, pas comme un interrupteur qu'on « arrange »." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Le chronotachygraphe enregistre notamment la conduite, la vitesse, les temps. Le numérique utilise une carte conducteur. Conduire sans carte (sauf exception très encadrée) ou avec la carte d'un autre est une infraction grave." },
          { h: "Modes courants", ul: ["Conduite (souvent automatique dès que le véhicule roule)", "Autre travail", "Disponibilité", "Repos / pause"] },
          { p: "Les activités hors véhicule (quai, attente) doivent être saisies correctement, y compris en saisie manuelle si besoin, pour que le décompte 561/2006 et le temps de travail soient justes." },
          { p: "En contrôle : carte, sorties papier / données, et cohérence des pictogrammes. Un oubli de carte se voit." },
          { h: "28 jours et 56 jours — ne pas mélanger", ul: ["Contrôle sur route : journée en cours + 56 jours d'activité à justifier (règle actuelle, 165/2014 modifié). Les vieux supports disent encore 28.", "L'entreprise télécharge / archive la carte conducteur au moins tous les 28 jours. Ça n'a pas changé.", "Le boîtier du véhicule (VU) : téléchargement souvent tous les 90 jours."] }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Carte conducteur personnelle", "4 familles d'activité : conduite, travail, dispo, repos", "Contrôle : jour en cours + 56 jours", "Téléchargement carte entreprise : 28 jours", "Saisie manuelle des temps oubliés", "Ne jamais « prêter » sa carte"] },
      { type: "pieges", title: "Pièges", ul: ["Réciter 28 jours pour le contrôle (c'est l'ancien chiffre)", "Confondre 28 j (copie carte) et 56 j (présentation)", "Carte restée à la maison « juste aujourd'hui »", "Laisser le repos alors qu'on charge"] },
      { type: "exemple", title: "Exemple conducteur", body: "Arrivée au quai : tu passes en autre travail. Pause repas : repos. Reprise route : conduite. Le soir, tu vérifies que la journée affichée correspond à ce que tu as vraiment fait." },
      { type: "resume", title: "Résumé", body: "Le chrono prouve tes temps. Carte à soi, bon pictogramme, pas de bricolage." }
    ]
  });

  P("pma-cu", {
    source: SRC312,
    sections: [
      { type: "objectif", title: "Objectif", body: "Calculer le PMA (MMA) et la CU à partir des plaques, sans tomber dans les pièges d'attelage." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { h: "Véhicule isolé", p: "MMA = PTAC. Le PTRA de la plaque ne sert à rien tant qu'il n'y a pas d'attelage. CU = MMA − PV." },
          { h: "Ensemble : le plus petit des 3", ol: ["PTRA du moteur (plaque)", "Loi des essieux : 4 essieux = 38 t ; 5 et + = 40 t, ou 44 t si conditions", "Addition : porteur + remorque = PTAC + PTAC ; tracteur + semi = PV tracteur + PTAC semi"] },
          { p: "CU ensemble = MMA − somme des PV." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Isolé : MMA = PTAC", "Ensemble : min des 3", "Articulé : PV tracteur + PTAC semi (pas les deux PTAC)", "5 essieux ≠ 44 t automatique"] },
      { type: "pieges", title: "Pièges", ul: ["Utiliser le PTRA sur un porteur seul", "Ajouter PTAC + PTAC sur un tracteur + semi", "Croire que le 44 t est dû dès 5 essieux"] },
      { type: "exemple", title: "Exemple conducteur", body: "Les exercices PMA du site : tu lis les plaques jaunes, tu appliques la méthode, tu tapes PMA et CU. Les chiffres changent, la méthode non." },
      { type: "resume", title: "Résumé", body: "Isolé = PTAC. Ensemble = le plus petit des 3. Puis CU = MMA − PV." }
    ]
  });

  P("essieux", {
    source: SRC312,
    sections: [
      { type: "objectif", title: "Objectif", body: "Retenir les plafonds légaux de PTAC / PTRA selon le nombre d'essieux." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          {
            table: {
              headers: ["Cas", "Plafond"],
              rows: [
                ["Moteur 2 essieux", "19 t"],
                ["Moteur 3 essieux", "26 t"],
                ["Moteur 4 essieux et +", "32 t"],
                ["Remorque 2 essieux", "19 t"],
                ["Remorque 3 essieux et +", "26 t"],
                ["Ensemble 4 essieux", "38 t"],
                ["Ensemble 5 essieux et +", "40 t (44 t si conditions)"]
              ]
            }
          },
          { p: "Ces valeurs sont des maxima légaux. La plaque du véhicule peut être inférieure : on prend toujours le plus petit entre la loi et la plaque." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["19 / 26 / 32 (isolé moteur)", "19 / 26 (remorqué)", "38 / 40 / 44 (ensemble)"] },
      { type: "pieges", title: "Pièges", ul: ["44 t sans lire les conditions", "Appliquer 32 t à une remorque"] },
      { type: "exemple", title: "Exemple conducteur", body: "Porteur 2 essieux : même avec un PTRA 44, seul tu restes au PTAC (souvent 19 t)." },
      { type: "resume", title: "Résumé", body: "R312-4 : 19-26-32 isolé, 38-40-44 ensemble." }
    ]
  });

  P("t44", {
    source: {
      label: "Décret 2012-1359 — FAQ ministère 2017",
      url: "https://www.ecologie.gouv.fr/sites/default/files/documents/FAQ%2044%20tonnes%20Version%2010%2001%202017.pdf"
    },
    sections: [
      { type: "objectif", title: "Objectif", body: "Savoir que 44 t n'est pas automatique." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Depuis le décret du 4 décembre 2012, un ensemble de plus de 4 essieux peut circuler jusqu'à 44 t sur le territoire national, sous conditions." },
          { h: "Conditions plaque (FAQ ministère)", ul: ["Plus de 4 essieux", "PTRA du moteur ≥ 44 t", "Semi 2 essieux : PTAC ≥ 37 t", "Semi 3 essieux : PTAC ≥ 38 t"] },
          { p: "S'il manque une condition, on retombe en pratique sur 40 t (loi des essieux) ou moins (PTRA, addition)." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["≥ 5 essieux", "PTRA moteur 44 t", "Semi 2 ess. PTAC 37 t / 3 ess. 38 t", "5 essieux seuls ne suffisent pas"] },
      { type: "pieges", title: "Pièges", ul: ["« 5 essieux = 44 t »", "PTRA 40 t et vouloir 44 t"] },
      { type: "exemple", title: "Exemple conducteur", body: "Tracteur PTRA 40 t + semi 38 t + 5 essieux : pas 44 t. Le PTRA cappe." },
      { type: "resume", title: "Résumé", body: "44 t = essieux + plaques. Sinon 40 t ou moins." }
    ]
  });

  P("dimensions", {
    source: SRC312,
    sections: [
      { type: "objectif", title: "Objectif", body: "Retenir les gabarits utiles au quotidien FIMO marchandises." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          {
            table: {
              headers: ["Véhicule", "Longueur max"],
              rows: [
                ["Véhicule à moteur (porteur)", "12 m"],
                ["Véhicule articulé", "16,50 m"],
                ["Train routier", "18,75 m"]
              ]
            }
          },
          { p: "Largeur : 2,55 m en règle générale. 2,60 m pour les superstructures à parois épaisses (température dirigée / frigo). La hauteur n'est pas le même type de limite que la longueur dans le code : en pratique on se cale sur les ouvrages (souvent 4,30 m, 4,50 m, etc.) et sur 4 m comme référence courante d'infrastructure — à traiter comme un point de vigilance, pas comme un plafond unique inventé." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["12 m / 16,50 m / 18,75 m", "2,55 m, 2,60 m frigo"] },
      { type: "pieges", title: "Pièges", ul: ["16,50 m pour un train routier", "2,60 m pour tout PL"] },
      { type: "exemple", title: "Exemple conducteur", body: "Avant un tunnel ou un pont : hauteur réelle du véhicule chargé (bâche, hayon, GPS poids lourd)." },
      { type: "resume", title: "Résumé", body: "Longueurs R312-11, largeurs R312-10." }
    ]
  });

  P("arrimage", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Comprendre pourquoi un chargement bouge, et ce que le conducteur doit vérifier avant de partir." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Un chargement mal réparti ou mal arrimé déplace le centre de gravité, surcharge un essieu, fait élargir en virage, et peut se vider sur la chaussée. Le conducteur n'est pas spectateur : il refuse un départ dangereux." },
          { h: "Principes", ul: ["Répartir : pas tout sur l'arrière ni tout sur l'avant", "Baisser le centre de gravité (lourds en bas)", "Immobiliser : calage, sangles, tapis antidérapant, ridelles — selon la marchandise", "Recontrôler après les premiers kilomètres et après un fort freinage"] },
          { p: "Les forces au freinage sont énormes. « Ça n'a pas bougé au quai » ne prouve rien. Les normes d'arrimage (ex. calculs de sangles) s'apprennent avec le matériel réel : ici on retient le principe, pas un coefficient inventé." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["CG bas, charges réparties", "Arrimer avant de partir", "Le conducteur peut être responsable", "Recontrôle en route"] },
      { type: "pieges", title: "Pièges", ul: ["« Le chargeur a dit que c'était bon » = tu ne regardes pas", "Sangles molles « pour ne pas abîmer »", "Tout le poids sur le last essieu"] },
      { type: "exemple", title: "Exemple conducteur", body: "Palettes vers l'avant contre le front de cabine / la paroi, sangles tendues, vides comblés. Après 20 km : tu ouvres, tu retends si besoin." },
      { type: "resume", title: "Résumé", body: "Répartir, caler, sangler, revérifier. Un PL n'est sûr que chargé comme il faut." }
    ]
  });

  P("conduite", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Relier anticipation, distances, régime moteur et conso — le cœur des 65 h de conduite rationnelle." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Un PL ne se conduit pas comme une voiture : distances, angles morts, temps de montée des freins, énergie cinétique. Anticiper, c'est lever le pied tôt, utiliser le continu, éviter les coups de pédale." },
          { h: "Éco-conduite utile", ul: ["Régime de couple, pas la zone rouge", "Souffler avant un rond-point plutôt que freiner tard", "Pression des pneus, aéro (bâche, déflecteurs)", "Moins de ralenti inutile"] },
          { h: "Distance", p: "La règle « plus je vais vite et plus je suis lourd, plus j'ai besoin de distance » prime sur n'importe quelle aide (ABS, ART). Par temps de pluie, on allonge encore." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Anticiper > freiner fort", "Distance liée à masse et vitesse", "Frein moteur en descente", "Les aides n'annulent pas la physique"] },
      { type: "pieges", title: "Pièges", ul: ["Coller parce que l'ART est en marche", "Descente en point mort « pour économiser »"] },
      { type: "exemple", title: "Exemple conducteur", body: "File qui ralentit à 400 m : tu relâches, tu mets un cran de continu. Souvent tu n'as plus qu'un léger service, sans à-coup pour le chargement." },
      { type: "resume", title: "Résumé", body: "Regarder loin, régime utile, distance, continu. C'est ça la conduite rationnelle." }
    ]
  });

  P("alcool", {
    source: {
      label: "Code de la route, art. R234-1",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006841515"
    },
    sections: [
      { type: "objectif", title: "Objectif", body: "Connaître le seuil applicable au PL marchandises, et le piège du 0,2 g/l." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Pour un conducteur de PL marchandises (hors les cas particuliers de l'article R234-1), le seuil contraventionnel est le seuil général : 0,50 g/l de sang (0,25 mg/l d'air expiré)." },
          { p: "Le seuil 0,20 g/l (0,10 mg/l d'air) s'applique notamment au transport en commun, au permis probatoire, et à certains conducteurs avec EAD. Ce n'est pas « tous les professionnels »." },
          { p: "L'alcool baisse la vigilance bien avant d'être « bourré ». Le métier, c'est zéro verre avant la prise de poste. Stupéfiants : interdiction de conduire sous l'empire — politique de tolérance zéro côté contrôle." },
          { p: "Fatigue : mêmes effets qu'une baisse d'attention (tunnel, nuit, repas lourd). On s'arrête. On ne « lutte » pas avec la radio." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["PL marchandises : 0,5 g/l (seuil général R234-1)", "0,2 g/l = TC / probatoire / EAD, pas le PL marchandises par défaut", "Zéro stupéfiants", "Fatigue = on s'arrête"] },
      { type: "pieges", title: "Pièges", ul: ["Réciter 0,2 g/l pour tout FIMO marchandises", "Un verre au repas « ça passe, j'ai le chrono »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Client qui offre un verre : tu refuses. Contrôle : tu souffles. Si tu doutes de ta forme à 3 h du matin : aire, repos, tu ne « finis pas le reliquat de conduite » les yeux fermés." },
      { type: "resume", title: "Résumé", body: "Marchandises : 0,5 g/l. 0,2 g/l n'est pas ta règle par défaut. Pas de drogue. Pas de lutte contre le sommeil." }
    ]
  });

  P("accident", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Retenir l'ordre simple : protéger, alerter, secourir — sans jouer au médecin." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { ol: ["Protéger : gilet, triangle si possible, baliser, couper le contact, attention au trafic (surtout PL arrêté sur voie rapide)", "Alerter : 112 (ou 15/18 selon le cas), lieu précis, nombre de victimes, nature (PL, fuite, incendie)", "Secourir : dans la limite de ce qu'on a appris (PLS, saignement, ne pas dégager un blessé sauf danger vital immédiat type incendie)"] },
          { p: "Un PL peut perdre une matière, un incendie de pneus, un risque électrique. On n'improvise pas un « petit déplacement » du camion dans le tunnel sans consigne." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Protéger → alerter → secourir", "112", "Ne pas aggraver (feu, circulation, blessé)"] },
      { type: "pieges", title: "Pièges", ul: ["S'occuper du constat avant de baliser", "Laisser les victimes au milieu de la voie « le temps que ça vienne »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Accroc sur voie de droite : warnings, gilet, triangle si tu peux le poser sans te faire tuer, appel, tu restes en sécurité derrière la glissière si elle existe." },
      { type: "resume", title: "Résumé", body: "D'abord la scène, ensuite les secours, ensuite le papier." }
    ]
  });
})();
