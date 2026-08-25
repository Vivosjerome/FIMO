(function () {
  const F = (window.FIMO = window.FIMO || {});
  const P = F.publishFiche;

  P("moteur-diesel", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Savoir ce qu'un diesel PL attend du conducteur : air, gazole, régime de couple, et ce qui casse s'il tourne trop bas ou trop haut." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Le diesel brûle du gazole avec beaucoup d'air comprimé. Le turbo aide à remplir les cylindres. S'il n'y a pas assez d'air (filtre bouché, turbo HS) : fumée noire, perte de puissance, conso." },
          { h: "Couple et régime", p: "Le couple utile se trouve dans une plage (souvent indiquée au compte-tours par une zone verte / extraits constructeur). En dessous : sous-régime, à-coups, encrassement. Au-dessus : bruit, usure, conso, sans gain de force." },
          { h: "Frein moteur", p: "En retenue, le moteur « pompe » de l'air. Plus le régime est dans la plage utile et le rapport adapté, plus ça retient. Couper le contact en descente est une aberration." },
          { h: "EGR / dépollution (idée)", p: "Des systèmes recyclent une partie des gaz (EGR) ou les traitent (filtre, AdBlue selon véhicules). Un voyant moteur / dépollution : on ne l'ignore pas. On n'invente pas un « by-pass »." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Rester dans la plage de couple", "Fumée noire = souvent trop de gazole / pas assez d'air", "Le ralenti n'est pas une descente", "Un voyant moteur se fait contrôler"] },
      { type: "pieges", title: "Pièges", ul: ["Coller la pédale « pour avoir du couple » hors plage", "Point mort pour « reposer le moteur »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Rampe : tu descends un rapport dès que le régime quitte la zone utile, sans attendre que ça cale. Palier : tu allonges le rapport, pied léger." },
      { type: "resume", title: "Résumé", body: "Air + gazole + bon régime. Le diesel pardonne mal le sous-régime et le point mort." }
    ]
  });

  P("embrayage", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Utiliser l'embrayage pour coupler, pas pour freiner ni pour « tenir » en côte." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "L'embrayage relie ou sépare le moteur et la boîte. Au démarrage on dose le patinage le temps que ça parte, puis pied levé. En conduite, le pied reste à côté, pas dessus." },
          { p: "Un pied posé use, chauffe, sent le brûlé, puis glisse pour de bon. En côte on utilise le frein, pas l'embrayage en patinage prolongé." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Pied levé dès que c'est en prise", "Ce n'est pas un frein", "Patinage long = casse"] },
      { type: "pieges", title: "Pièges", ul: ["Tenir le PL à l'embrayage au feu en rampe", "Reposer le pied « pour être prêt »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Stop en côte : park ou service, tu prépares le départ, tu embrayes franchement, tu relâches le frein. Pas 30 secondes de fumée." },
      { type: "resume", title: "Résumé", body: "Embrayer, puis pied dehors. Jamais un frein de fortune." }
    ]
  });

  P("boite", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Choisir un rapport pour le couple, la vitesse et le frein moteur — manuelle ou automatisée." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Rapport court : plus de couple aux roues, moins de vitesse. Rapport long : l'inverse. On change pour rester dans la plage utile, pas « par habitude tous les 10 km/h » comme en voiture." },
          { p: "Automatisée / automatique : le calculateur aide, le conducteur peut encore imposer un mode (manu, kick-down, mode rampe selon véhicules). En descente, on verrouille un rapport qui donne du frein moteur plutôt que de laisser la boîte « monter » toute seule." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Court = couple, long = allure", "Descente : rapport qui retient", "Ne pas sauter les rapports en charge au hasard"] },
      { type: "pieges", title: "Pièges", ul: ["Laisser l'auto passer le plus long en col", "Croire qu'une boîte auto dispense de réfléchir"] },
      { type: "exemple", title: "Exemple conducteur", body: "Col : tu bloques un rapport trop court plutôt trop long. Ça chante un peu, le continu complète, la vitesse est stable." },
      { type: "resume", title: "Résumé", body: "Le rapport sert le couple et la retenue, pas l'ego du compteur." }
    ]
  });

  P("pneumatiques", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Contrôler les pneus comme un organe de sécurité : pression, usure, jumelés, chaleur." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Le pneu est le seul contact avec la route. Sous-gonflé : il travaille, chauffe, peut éclater, consomme, dirige mal. Sur-gonflé : empreinte réduite, adhérence et confort dégradés, usure au centre." },
          { h: "Contrôle", ul: ["Pression à froid, selon consigne véhicule / charge", "Jumelés : même type, usure proche, rien de coincé entre les deux", "Flancs : hernie, coupure, frottement de trottoir", "Sculptures apparentes, pas de toile à nu", "Écrous / traces de fluide au moyeu"] },
          { h: "Usure légale", p: "Le code exige des sculptures apparentes, sans toile visible, sans déchirure profonde des flancs (R314-1). Le millimètre mini exact dépend du type de véhicule et de l'arrêté pneus : on ne récite pas un chiffre VL (1,6 mm) comme s'il allait de soi pour tout PL. En pratique, on ne va jamais « jusqu'au lisse »." },
          { p: "Un pneu qui chauffe après une étape : on s'arrête, on cherche la cause (pression, frein qui frotte, surcharge essieu)." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Pression à froid", "Sous-gonflage = chaleur = danger", "Jumelés assortis", "Hernie / toile = immobiliser"] },
      { type: "pieges", title: "Pièges", ul: ["Gonfler « à l'œil »", "Un jumelé lisse « ça passe, l'autre est bon »", "Réciter 1,6 mm sans savoir si c'est le bon texte PL"] },
      { type: "exemple", title: "Exemple conducteur", body: "Tour de l'auto le matin : coup de pied n'est pas une mesure. Jauge / manomètre, regard entre les jumelés, valve. Après 50 km : main près du flanc (sans se brûler) si un essieu sent le chaud." },
      { type: "resume", title: "Résumé", body: "Pression, usure, jumelés, chaleur. Un pneu, ce n'est pas un détail." }
    ]
  });

  P("direction", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Comprendre qu'un PL ne se place pas comme une voiture, et que la direction se contrôle avant de partir." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Assistance (souvent hydraulique) : sans huile / pompe, le volant devient très lourd. Fuite, niveau, bruits : atelier. Jeu excessif, vibration, véhicule qui tire : on ne « s'y fait pas »." },
          { p: "En manœuvre, l'avant et l'arrière ne suivent pas la même courbe (porte-à-faux, semi). On place d'abord, on avance ensuite. Un coup de volant tardif rase le trottoir ou le cycliste." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Niveau / fuite de direction", "Le PL balaie large à l'arrière", "Pas de jeu « acceptable parce que c'est un camion »"] },
      { type: "pieges", title: "Pièges", ul: ["Couper le moteur en manœuvre assistée trop longtemps", "Oublier le porte-à-faux avant au péage"] },
      { type: "exemple", title: "Exemple conducteur", body: "Rond-point : tu t'éloignes du céder-le-passage intérieur, tu laisses de l'air au cycliste à droite, tu ne coupes pas." },
      { type: "resume", title: "Résumé", body: "Volant sain, trajectoire large, regard sur les extrémités du véhicule." }
    ]
  });

  P("suspensions", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Relier suspensions, charge par essieu et stabilité." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Lames, air (pneumatique), combiné. Les coussins d'air gardent une assiette et protègent la marchandise. Une fuite d'air : le véhicule s'affaisse d'un côté, charge mal répartie, risque au virage." },
          { p: "Une suspension HS tape, dirige mal, use les pneus en scie. Ce n'est pas « le confort du chauffeur » seulement." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Fuite d'air = assiette et essieux faussés", "Usure en scie → regarder pneus + train"] },
      { type: "pieges", title: "Pièges", ul: ["Partir « un peu penché, ça remontera »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Après chargement : regarder si le camion est droit, si un soufflet n'est pas à plat, si rien ne frotte." },
      { type: "resume", title: "Résumé", body: "L'assiette, c'est de la sécurité, pas de l'esthétique." }
    ]
  });

  P("controles-vehicule", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Faire un tour du véhicule utile, pas une checklist récitée sans regarder." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { h: "Avant le départ", ul: ["Tour extérieur : pneus, fuites, feux, plaques, bâche / ridelles, attelage, flexibles", "Niveaux et air", "Documents et carte chrono", "Sièges, rétros, caméras d'angles morts si présentes", "Essai frein dans la cour"] },
          { p: "Après attelage : goupilles, manivelle relevée, flexibles, tests lumineux et de frein remorque. Un « ça a claqué » n'est pas une preuve si tu n'as pas vérifié la prise." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Tour + air + feux + attelage + essai frein", "Après attelage, on recontrôle"] },
      { type: "pieges", title: "Pièges", ul: ["Signer la tournée sans être allé au hayon", "Oublier le coin de cale / la manivelle"] },
      { type: "exemple", title: "Exemple conducteur", body: "5 minutes le matin évitent un flexible jaune mal enclenché découvert au premier rond-point." },
      { type: "resume", title: "Résumé", body: "Regarder pour de vrai. L'attelage se recontrôle toujours." }
    ]
  });

  P("ptac", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Savoir ce que le PTAC autorise — et ce qu'il n'autorise pas." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "PTAC = poids total autorisé en charge du véhicule seul (plaque). C'est le maximum de cette unité, pas de l'ensemble." },
          { p: "Isolé : MMA = PTAC. Le PTRA n'entre pas en jeu. La CU = PTAC − PV si tu es au max plaque, ou MMA − PV une fois le PMA calculé." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["PTAC = véhicule seul", "Isolé : on ignore le PTRA"] },
      { type: "pieges", title: "Pièges", ul: ["Lire le PTRA en pensant charger un porteur seul à 40 t"] },
      { type: "exemple", title: "Exemple conducteur", body: "Porteur 19 t de PTAC, PTRA 44 t, pas de remorque : tu restes à 19 t." },
      { type: "resume", title: "Résumé", body: "PTAC = cette caisse-là, toute seule." }
    ]
  });

  P("ptra", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Le PTRA ne sert que s'il y a un attelage." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "PTRA = poids total roulant autorisé de l'ensemble, lu sur le véhicule moteur. C'est un des trois plafonds du PMA d'ensemble, pas un droit à soi tout seul." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["PTRA = plaque du moteur", "Sans attelage : on n'y touche pas"] },
      { type: "pieges", title: "Pièges", ul: ["PTRA 44 t = je peux 44 t même à 2 essieux isolé"] },
      { type: "exemple", title: "Exemple conducteur", body: "Tracteur PTRA 40 t + 6 essieux : tu n'iras pas à 44 t." },
      { type: "resume", title: "Résumé", body: "Le PTRA cappe l'ensemble, jamais l'isolé." }
    ]
  });

  P("ensemble-mma", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Enchaîner les 3 critères sans se tromper de formule selon l'attelage." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { ol: ["PTRA moteur", "Loi des essieux (38 / 40 / 44)", "Addition : PTAC+PTAC (porteur+remorque) ou PV tracteur + PTAC semi"] },
          { p: "On garde le plus petit. Puis CU = MMA − somme des PV." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Min des 3", "Articulé ≠ PTAC + PTAC"] },
      { type: "pieges", title: "Pièges", ul: ["Deux PTAC sur un tracteur + semi"] },
      { type: "exemple", title: "Exemple conducteur", body: "Les exos PMA du site : même méthode, plaques différentes." },
      { type: "resume", title: "Résumé", body: "Trois nombres, on garde le petit." }
    ]
  });

  P("surcharge", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Relier surcharge, physique et responsabilité." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Trop lourd : distances, freins, pneus, direction, essieux, ponts. Ce n'est pas « juste une amende »." },
          { p: "Le conducteur peut être verbalisé. D'autres acteurs aussi selon les faits. « Le chargeur a dit OK » n'annule pas un essieu à 14 t." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Surcharge = danger + infraction", "Le conducteur n'est pas hors-jeu"] },
      { type: "pieges", title: "Pièges", ul: ["Partir parce que le quai est pressé"] },
      { type: "exemple", title: "Exemple conducteur", body: "Ticket de bascule au-dessus du PMA : on décharge, on ne « roule cool »." },
      { type: "resume", title: "Résumé", body: "Si c'est trop lourd, ça ne part pas." }
    ]
  });

  P("repartition", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Placer la marchandise pour les essieux et la direction, pas seulement pour remplir." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Trop à l'arrière : avant léger, direction et freinage avant dégradés. Trop à l'avant : essieu avant écrasé, traction/comportement faussés. Lourds en bas, centrés, contre une paroi, vides comblés." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Pas tout derrière", "CG bas", "Respecter les essieux, pas seulement le PTAC global"] },
      { type: "pieges", title: "Pièges", ul: ["« Le PTAC n'est pas dépassé donc c'est bon » alors qu'un essieu l'est"] },
      { type: "exemple", title: "Exemple conducteur", body: "Une bobine trop arrière : le tracteur « vire dans le vide ». Tu la fais avancer avant de partir." },
      { type: "resume", title: "Résumé", body: "Le total et chaque essieu. Lourds en bas." }
    ]
  });

  P("stabilite", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Comprendre le basculement et le ballant d'un PL chargé." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Centre de gravité haut + virage + vitesse = basculement. Liquides non cloisonnés : effet de vague. Un écart d'urgence en haut d'un citernier mal pensé, c'est trop tard." },
          { p: "On lève le pied avant le virage, on ne braque pas fort en relevant, on arrime pour que ça ne glisse pas d'un côté." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["CG haut = lent dans les courbes", "Liquide = ballant", "Freiner avant le virage, pas dedans"] },
      { type: "pieges", title: "Pièges", ul: ["Couper comme une voiture pour « gagner le giratoire »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Bretelle : tu es déjà à l'allure du virage 80 m avant. Le continu, pas la pédale au milieu." },
      { type: "resume", title: "Résumé", body: "Hauteur, liquide, vitesse : les trois se multiplient." }
    ]
  });

  P("distances", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Garder une distance qui correspond à la masse et à la vitesse, pas à l'ABS." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "L'énergie à dissiper croît avec la masse et avec le carré de la vitesse. Un PL chargé à 90 km/h n'est pas une voiture à 90. Pluie, descente, chargement qui peut glisser : on allonge encore." },
          { p: "Les règles « 2 secondes » sont un outil pédagogique, pas une magie. L'ART / ABS ne permettent pas de coller." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Plus lourd / plus vite = plus loin", "Aides ≠ permission de coller", "Pluie = encore plus"] },
      { type: "pieges", title: "Pièges", ul: ["« L'ABS raccourcit toujours »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Si tu ne vois pas le sol devant le précédent au moment où il passe un pont, tu es trop près." },
      { type: "resume", title: "Résumé", body: "La physique d'abord, les aides ensuite." }
    ]
  });

  P("descente", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Descendre un col chargé sans faire fading." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { ol: ["Rapport qui donne du frein moteur (pas de point mort)", "Ralentisseur dosé", "Service par à-coups courts si ça accélère encore", "Jamais la pédale collée des kilomètres"] },
          { p: "Fading : les freins chauffent, plus rien. L'odeur, la pédale molle, la vitesse qui monte : tu t'arrêtes dès que c'est possible, tu laisses refroidir. Tu n'arroses pas un tambour brûlant n'importe comment." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Continu d'abord", "Pas de point mort", "Service = appoint, pas 4 km collé"] },
      { type: "pieges", title: "Pièges", ul: ["« Je gagne du gazole au point mort »", "Park en roulant"] },
      { type: "exemple", title: "Exemple conducteur", body: "Panneau 6 % / 4 km : tu es déjà sur le bon rapport en haut, pas au 3e virage." },
      { type: "resume", title: "Résumé", body: "Retenir avec le moteur et le continu. Le service, c'est l'urgence et l'arrêt." }
    ]
  });

  P("meteo", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Adapter allure et distances au sol, au vent, à la visibilité." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Pluie : aquaplaning possible, distances allongées, moins d'à-coups. Neige / verglas : démarrages tout doux, continu très dosé (une roue motrice qui décroche), parfois chaînes selon consignes / conditions. Vent : surtout les bâchés / vides, ponts, dépassements de PL. On tient le volant, on réduit." },
          { p: "Brouillard : feux adaptés, pas les warnings en roulant comme seul équipement, allure qui permet de s'arrêter dans ce qu'on voit." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Moins d'adhérence = plus de distance", "Vent + bâche vide = prudence", "Verglas : douceur, pas de continu brutal"] },
      { type: "pieges", title: "Pièges", ul: ["Couper l'ABS « pour mordre »", "Même allure qu'à sec « je connais la route »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Rafale sur viaduc, caisse vide : tu descends de 15–20 km/h et tu reports le dépassement." },
      { type: "resume", title: "Résumé", body: "Le sol commande. Pas le planning." }
    ]
  });

  P("angles-morts", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Savoir où les usagers disparaissent, et comment on s'en sert en ville et au changement de file." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Un PL a des angles morts avant, arrière, et surtout côté passager (et au ras des roues). Un vélo, un piéton, une citadine peuvent être invisibles au rétroviseur « classique ». Caméras et radars aident : ils ne dispensent pas du contrôle." },
          { h: "Gestes", ul: ["Rétros réglés avant de partir", "Dépassement / droite : un temps d'attente, cligno tôt, regard, éventuellement un appui d'avertisseur en ville selon le contexte", "Manoeuvre : un guide au sol si besoin, jamais de recul « au feeling » dans un angle mort", "Arrêt : attention au cycliste qui se faufile à droite"] }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Côté passager = zone critique", "Les aides ne voient pas tout", "Cligno tôt, on ne coupe pas"] },
      { type: "pieges", title: "Pièges", ul: ["« Je l'aurais vu » après un angle mort", "Tourner à droite en collant le trottoir"] },
      { type: "exemple", title: "Exemple conducteur", body: "Tourne-à-droite urbain : tu te places, tu laisses un couloir, tu attends, tu recontrôles. Un vélo collé à la portière, tu ne le vois plus." },
      { type: "resume", title: "Résumé", body: "Si tu ne l'as pas vu, il peut être dans l'angle mort. Tu agis comme s'il y était." }
    ]
  });

  P("fatigue", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Reconnaître l'hypovigilance et s'arrêter — ce n'est pas un manque de volonté." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Signaux : paupières lourdes, micro-sommeils, ligne de rive touchée, souvenirs flous des derniers kilomètres, irritabilité. Café et radio ne remplacent pas le sommeil." },
          { p: "Facteurs : nuit, repas lourd, monotonie (autoroute), maladie, alcool même « sous le seuil », horaires pourris. La FIMO insiste là-dessus parce que le PL transforme un micro-sommeil en drame." },
          { p: "Réponse : s'arrêter, repos réel (pas « 4 minutes à fumer dehors » si tu dors). Respecter pauses et repos, ce n'est pas seulement le chrono, c'est rester vivant." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Sommeil = arrêt", "Les signes d'hypovigilance", "Café ≠ repos"] },
      { type: "pieges", title: "Pièges", ul: ["« Encore 40 km, je connais »", "Fenêtre ouverte comme solution"] },
      { type: "exemple", title: "Exemple conducteur", body: "3 h 40, troisième fois que tu corriges la trajectoire : prochaine aire, couchette, tu préviens l'exploitant." },
      { type: "resume", title: "Résumé", body: "Le camion n'attend pas. Toi non plus : tu t'arrêtes." }
    ]
  });

  P("stupefiants", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Retenir qu'on ne conduit pas sous stupéfiants — ce n'est pas un seuil « comme l'alcool 0,5 »." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Contrôle salivaire / sanguin. Cannabis, cocaïne, etc. : interdiction de conduire sous l'empire. Le « joint d'hier » n'est pas un débat à avoir au volant d'un 40 t." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Pas de stupéfiants et volant", "Ce n'est pas le barème alcool"] },
      { type: "pieges", title: "Pièges", ul: ["« C'était le week-end »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Contrôle : tu te soumets. Tu ne « négocies » pas le hayon." },
      { type: "resume", title: "Résumé", body: "Zéro. Point." }
    ]
  });

  P("medicaments", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Lire la notice avant la tournée." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Antihistaminiques, anxiolytiques, certains antitussifs, etc. peuvent baisser la vigilance. Pictogramme véhicule : on en parle au médecin / pharmacien. Autonmédication « pour tenir » : très mauvaise idée." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Notice + pictogramme", "En cas de doute, on ne part pas"] },
      { type: "pieges", title: "Pièges", ul: ["Doubler la dose « parce que nuit »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Rhume : tu prends un produit compatible conduite, ou tu te déclares inapte le temps de l'effet." },
      { type: "resume", title: "Résumé", body: "Un cachet n'est pas anodin dans un PL." }
    ]
  });

  P("secours", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Faire les gestes de base sans aggraver." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Après avoir protégé et alerté : saignement (compression), conscience (parler, PLS si inconscient qui respire — selon formation), ne pas retirer un casque / ne pas bouger un traumatisé sauf danger immédiat (feu)." },
          { p: "La FIMO rappelle les principes. Ce n'est pas un diplôme de secouriste complet : tu appliques ce que tu as réellement appris en stage." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Ne pas aggraver", "PLS si formé et situation adaptée", "Feu = exception pour dégager"] },
      { type: "pieges", title: "Pièges", ul: ["Boire à un inconscient", "Tourner un possible traumatisé « pour le mettre à l'ombre » sans urgence"] },
      { type: "exemple", title: "Exemple conducteur", body: "Piéton au sol, respire, inconscient : tu as appris la PLS, tu la fais, tu couvres, tu attends le 15." },
      { type: "resume", title: "Résumé", body: "Simple, formé, sans héroïsme stupide." }
    ]
  });

  P("incendie", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Savoir quoi faire avant que le feu de pneus / moteur / bâche devienne incontrôlable." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Prévention : fuites, cendriers, gazole, électricité, freins qui chauffent, pneu sous-gonflé. Extincteurs : emplacement, jauge, accès. On sait s'en servir avant le jour J." },
          { h: "Si ça brûle", ol: ["Arrêter si possible hors trafic, warnings, gilet", "Faire descendre, écarter les gens, appeler 18 / 112", "Contact coupé, si tu peux agir sans risque : extincteur à la BASE de la flamme, vent dans le dos", "Feu moteur / gazole / pneus massif : tu n'es pas pompier, tu éloignes"] },
          { p: "Tunnel : consignes de l'ouvrage (niches, issues). On n'essaie pas de « finir le tunnel » coûte que coûte si l'instruction est de s'arrêter à la niche." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Éloigner les personnes", "112 / 18", "Extincteur = petit feu, pas un pneu en feu de 5 minutes", "Tunnel : consignes affichées"] },
      { type: "pieges", title: "Pièges", ul: ["Ouvrir le capot d'un feu moteur en grand et se prendre le flash", "Rester au vent du fumée"] },
      { type: "exemple", title: "Exemple conducteur", body: "Odeur de brûlé + fumée à un jumelé : tu t'arrêtes tout de suite. Un pneu en feu se propage à la bâche." },
      { type: "resume", title: "Résumé", body: "Prévenir, s'arrêter, éloigner, alerter. L'héroïsme brûle." }
    ]
  });

  P("documents", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Savoir quels papiers un contrôle peut demander, sans inventer un « dossier unique »." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "En pratique, un contrôle mélange : identité / permis, titre de formation (FIMO / FCO selon le cas), carte chrono, papiers du véhicule (immatriculation, assurance), documents de la marchandise (lettre de voiture nationale, CMR à l'international, consignes matière selon le transport)." },
          { p: "Transport public / compte propre, national / international : les titres d'entreprise (licence, copie conforme, etc.) relèvent de l'exploitant, mais le conducteur doit pouvoir présenter ce qui est à bord. En cas de doute, la liste de l'entreprise + le classeur cabine priment sur un « on m'a dit »." },
          { p: "On ne liste pas ici des amendes au chiffre près : ça change. On retient : pas de papier = pas de débat, tu es en faute de présentation." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Permis + formation + chrono + véhicule + marchandise", "CMR souvent dès qu'on sort du national", "Le classeur se tient à jour"] },
      { type: "pieges", title: "Pièges", ul: ["Tout est « au siège »", "Carte chrono du copain"] },
      { type: "exemple", title: "Exemple conducteur", body: "Avant une tournée export : tu vérifies CMR, plaques, assurances, consignes. Pas à la frontière." },
      { type: "resume", title: "Résumé", body: "Ce qui est à bord se présente. Le reste, l'exploitant l'a prévu — tu vérifies quand même." }
    ]
  });

  P("responsabilites", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Le conducteur n'est pas un exécutant sans regard." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Tu peux dire non à un départ dangereux (surcharge, arrimage, temps, alcool, véhicule HS). L'ordre du client ou du quai ne t'absout pas automatiquement." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Droit / devoir de refuser le danger", "Le quai n'est pas le code de la route"] },
      { type: "pieges", title: "Pièges", ul: ["« C'est lui qui a chargé »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Sangles absentes : tu appelles l'exploitant, tu ne pars pas « ils râlent »." },
      { type: "resume", title: "Résumé", body: "Tu signes la route avec tes pneus. Tu décides du départ." }
    ]
  });

  P("controles-routiers", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Se comporter comme un pro : stop, papiers, chrono, courtoisie." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Tu t'arrêtes, warnings, gilet si tu sors, documents. Tu n'effaces rien, tu ne « testes » pas une carte. Les forces de l'ordre / DREAL contrôlent temps, masses, technique, marchandise." },
          { p: "Pour les temps : tu dois pouvoir justifier la journée en cours et les 56 jours précédents (carte, tickets, disques si analogique). 28 jours, c'est le rythme de téléchargement de la carte par l'entreprise, pas la durée du contrôle." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Coopérer", "Rien cacher sur le chrono", "Jour en cours + 56 jours"] },
      { type: "pieges", title: "Pièges", ul: ["Jeter un disque / une carte", "Réciter 28 jours pour le contrôle"] },
      { type: "exemple", title: "Exemple conducteur", body: "File de contrôle : tu as déjà le classeur en main, tu restes dans la cabine tant qu'on ne te dit pas de descendre." },
      { type: "resume", title: "Résumé", body: "Calme, papiers, vérité du chrono." }
    ]
  });

  P("livraison", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Livrer sans abandonner la marchandise ni se mettre en danger." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Client absent, quai saturé, refus de déchargement : procédure entreprise (appel, consigne, attente cadrée). Pas de palette sur le trottoir « comme ça c'est livré »." },
          { p: "Manutention : gants, zone, hayon, transpalette — accidents du travail à l'arrêt, pas seulement en roulant." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Pas d'abandon", "Appel exploitant", "Sécurité au quai"] },
      { type: "pieges", title: "Pièges", ul: ["Signer pour le client"] },
      { type: "exemple", title: "Exemple conducteur", body: "Fermé : tu notes l'heure, tu photos la porte si la procédure le dit, tu rappelles, tu attends la consigne." },
      { type: "resume", title: "Résumé", body: "Livrer, c'est aussi ne pas créer un autre problème." }
    ]
  });

  P("relation-client", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Représenter l'entreprise sans vendre la sécurité." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Calme, clarté, horaires, état de la marchandise. Un client qui veut « encore deux palettes » ou « plus vite » : tu expliques la règle, tu appelles. L'image de marque, ce n'est pas dire oui à une surcharge." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Courtois ≠ soumis", "La sécu n'est pas négociable"] },
      { type: "pieges", title: "Pièges", ul: ["S'énerver au quai"] },
      { type: "exemple", title: "Exemple conducteur", body: "Retard : tu préviens tôt. Tu n'inventes pas un mensonge chrono." },
      { type: "resume", title: "Résumé", body: "Pro, poli, ferme sur le danger." }
    ]
  });

  P("eco-conduite", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Lier conso, usure et sécurité — les 65 h ne sont pas du « rouler lent pour le climat » seulement." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Anticiper, régime de couple, moins de ralenti inutile, pression pneus, bâche tendue, moins d'à-coups. Ça baisse le gazole et les freins. Une descente en point mort n'est pas de l'éco-conduite." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Anticipation = premier levier", "Point mort ≠ éco"] },
      { type: "pieges", title: "Pièges", ul: ["Couper le moteur en descente"] },
      { type: "exemple", title: "Exemple conducteur", body: "Péage à 800 m : tu souffles déjà. Souvent plus de pédale." },
      { type: "resume", title: "Résumé", body: "Lisser. Pas tricher avec la mécanique." }
    ]
  });

  P("emissions", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Comprendre que fumée et AdBlue ne sont pas du décor." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Un diesel mal mené fume, pollue, peut passer en mode dégradé. Les systèmes de dépollution se font entretenir. On ne les shunte pas. L'éco-conduite réduit aussi les émissions." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Pas de shunt dépollution", "Voyant = contrôle"] },
      { type: "pieges", title: "Pièges", ul: ["« Ça fume, c'est un diesel, c'est normal » en charge constante noire"] },
      { type: "exemple", title: "Exemple conducteur", body: "Mode dégradé après AdBlue vide : tu traites, tu n'enchaînes pas 400 km « on verra »." },
      { type: "resume", title: "Résumé", body: "Entretenir, bien conduire, ne pas bricoler." }
    ]
  });

  P("infractions", {
    sections: [
      { type: "objectif", title: "Objectif", body: "Savoir que fraude chrono / dépassement de temps, ce n'est pas « un détail admin »." },
      {
        type: "cours",
        title: "Cours",
        blocks: [
          { p: "Dépassement de conduite, pause sautée, carte absente, aimant / carte d'un autre : contrôles fréquents, sanctions conducteur et entreprise. On ne met pas de montants ici (ils évoluent) : on retient que ça peut aller jusqu'à l'immobilisation et bien plus grave en cas d'accident." }
        ]
      },
      { type: "connaitre", title: "À connaître parfaitement", ul: ["Le chrono dit la vérité ou tu es en faute", "La fraude n'est pas un habileté"] },
      { type: "pieges", title: "Pièges", ul: ["« Tout le monde le fait »"] },
      { type: "exemple", title: "Exemple conducteur", body: "Il te reste 20 min de conduite, 40 km : tu t'arrêtes. Le planning se refait. Pas l'inverse." },
      { type: "resume", title: "Résumé", body: "Les temps, c'est de la sécu. Tricher coûte." }
    ]
  });
})();
