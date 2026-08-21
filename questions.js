window.CATEGORIES = [
  { id: "abs", name: "ABS", meaning: "Antiblocage des roues" },
  { id: "ebs", name: "EBS", meaning: "Freinage électronique" },
  { id: "esp", name: "ESP", meaning: "Contrôle de trajectoire" },
  { id: "chaine", name: "Chaîne cinématique", meaning: "Transmission" },
  { id: "afu", name: "AFU", meaning: "Assistance au freinage d'urgence" },
  { id: "egr", name: "EGR", meaning: "Recyclage des gaz d'échappement" },
  { id: "ralentisseurs", name: "Les 4 ralentisseurs", meaning: "Freinage continu" },
  { id: "freinage", name: "Freinage AV / AR + park", meaning: "Circuits pneumatiques" },
  { id: "asr", name: "ASR", meaning: "Antipatinage" },
  { id: "front", name: "Front Assist", meaning: "Aide à l'anticollision" },
  { id: "art", name: "ART", meaning: "Régulateur adaptatif" },
  { id: "conduite", name: "Conduite rationnelle", meaning: "Éco-conduite" },
  { id: "couple", name: "Couple / puissance / conso", meaning: "Moteur" },
  { id: "surcharge", name: "Surcharge", meaning: "Risques et sanctions" },
  { id: "ptac", name: "PTAC", meaning: "Masse maxi du véhicule seul" },
  { id: "ptra", name: "PTRA", meaning: "Masse maxi de l'ensemble" },
  { id: "dimensions", name: "Dimensions", meaning: "Longueur, largeur, hauteur" },
  { id: "essieux", name: "Essieux", meaning: "PTAC maxi selon le nombre" }
];

window.QUESTIONS = [
  /* ===================== ABS ===================== */
  {
    id: "abs-1", category: "abs",
    q: "Que signifie ABS ?",
    options: ["Anti-Blocking System : système antiblocage des roues", "Automatic Brake Support : assistance permanente au frein", "Air Brake System : circuit d'air comprimé", "Anti-Skid Rear : antipatinage de l'essieu arrière"],
    correct: 0,
    expl: "ABS = Anti-lock Braking System (système antiblocage). Il empêche les roues de se bloquer au freinage pour garder la possibilité de braquer."
  },
  {
    id: "abs-2", category: "abs",
    q: "Quel est le rôle principal de l'ABS ?",
    options: ["Raccourcir toujours la distance d'arrêt, même sur gravillons", "Empêcher le blocage des roues pour conserver la direction", "Remplacer le frein de stationnement", "Augmenter la pression d'air dans les réservoirs"],
    correct: 1,
    expl: "L'ABS évite le blocage. Une roue bloquée ne dirige plus. Il ne garantit pas une distance d'arrêt plus courte sur tous les sols.",
    scene: "aides"
  },
  {
    id: "abs-3", category: "abs",
    q: "Que ressent-on à la pédale lorsque l'ABS intervient ?",
    options: ["La pédale devient molle et inefficace", "Des pulsations / vibrations normales", "Le moteur cale systématiquement", "Le frein de park se serre tout seul"],
    correct: 1,
    expl: "Les pulsations sont normales : le modulateur relâche puis reprend la pression plusieurs fois par seconde. Il ne faut PAS lever le pied."
  },
  {
    id: "abs-4", category: "abs",
    q: "Sur un PL, l'ABS agit principalement sur :",
    options: ["Uniquement le moteur", "La pression de freinage de chaque roue (ou essieu) surveillée", "Le carburant injecté uniquement", "Le ralentisseur électromagnétique uniquement"],
    correct: 1,
    expl: "Des capteurs mesurent la vitesse de rotation des roues. Si une roue décélère trop (début de blocage), le modulateur baisse la pression de frein sur cette roue."
  },
  {
    id: "abs-5", category: "abs",
    q: "Le voyant ABS reste allumé. Que faire ?",
    options: ["Continuer sans changer d'attitude, le système est en mode sport", "Considérer que l'ABS peut être HS : freiner plus tôt, plus progressif, et faire contrôler", "Couper le contact en roulant pour le réinitialiser", "Serrer le frein de park pour compenser"],
    correct: 1,
    expl: "Voyant ABS = le système antiblocage peut être indisponible. Les freins de service marchent encore, mais les roues peuvent se bloquer. On adapte la conduite et on fait réparer."
  },
  {
    id: "abs-6", category: "abs",
    q: "Avec l'ABS, peut-on braquer pendant un freinage d'urgence ?",
    options: ["Non, il faut toujours freiner en ligne droite", "Oui, c'est justement son intérêt : garder la direction tout en freinant fort", "Oui, mais seulement sous 30 km/h", "Uniquement si l'ESP est coupé"],
    correct: 1,
    expl: "Sans ABS, braquer + freiner fort = souvent tout droit. Avec ABS, on peut (dans une certaine mesure) éviter un obstacle tout en freinant."
  },
  {
    id: "abs-7", category: "abs",
    q: "Sur sol meuble (gravier, neige), l'ABS :",
    options: ["Raccourcit toujours fortement la distance d'arrêt", "Peut allonger la distance d'arrêt, mais conserve le contrôle", "Se coupe automatiquement et c'est voulu", "Bloque volontairement toutes les roues"],
    correct: 1,
    expl: "Sur meuble, un léger blocage peut « coincer » un coin de neige/gravier et raccourcir l'arrêt. L'ABS empêche ce coin : distance parfois plus longue, mais le camion reste orientable."
  },
  {
    id: "abs-8", category: "abs",
    q: "L'ABS remplace-t-il la distance de sécurité ?",
    options: ["Oui, c'est fait pour ça", "Non : l'ABS aide au contrôle, il ne supprime pas l'énergie cinétique", "Oui, uniquement de nuit", "Oui si le PTAC est inférieur à 19 t"],
    correct: 1,
    expl: "L'énergie à dissiper dépend de la masse et de la vitesse (½ mv²). L'ABS n'invente pas de l'adhérence. Distance, anticipation et ralentisseurs restent indispensables."
  },
  {
    id: "abs-9", category: "abs",
    q: "Quel organe n'appartient pas à l'ABS ?",
    options: ["Capteurs de vitesse de roue", "Modulateurs / électrovannes", "Calculateur ABS", "Vanne EGR"],
    correct: 3,
    expl: "La vanne EGR concerne les gaz d'échappement (NOx), pas le freinage. L'ABS = capteurs + calculateur + modulateurs de pression."
  },
  {
    id: "abs-10", category: "abs",
    q: "Au contact, le voyant ABS s'allume puis s'éteint. C'est :",
    options: ["Toujours une panne grave", "Souvent un autotest normal", "Le signe qu'il faut vidanger l'air", "L'ABS qui se désactive pour la journée"],
    correct: 1,
    expl: "Beaucoup de calculateurs font un autotest à la mise du contact. S'il reste allumé ou se rallume en roulant : anomalie."
  },

  /* ===================== EBS ===================== */
  {
    id: "ebs-1", category: "ebs",
    q: "Que signifie EBS ?",
    options: ["Emergency Brake Switch", "Electronic Braking System : freinage à commande électronique", "Empty Box Sensor", "Engine Boost System"],
    correct: 1,
    expl: "EBS = Electronic Braking System. La pédale envoie surtout un signal électrique au calculateur, qui commande des modulateurs. L'air reste l'énergie de freinage."
  },
  {
    id: "ebs-2", category: "ebs",
    q: "Quelle est la différence principale entre ABS et EBS ?",
    options: ["L'ABS est électronique, l'EBS est 100 % mécanique", "L'ABS empêche surtout le blocage ; l'EBS gère tout le freinage (répartition, temps de réponse, ABS intégré…)", "Aucun lien, ce sont deux marques", "L'EBS ne fonctionne que sur l'essieu avant"],
    correct: 1,
    expl: "L'ABS est une fonction antiblocage. L'EBS est un système complet de freinage électronique qui INTÈGRE généralement l'ABS, l'ASR, parfois l'ESP, et répartit mieux les efforts."
  },
  {
    id: "ebs-3", category: "ebs",
    q: "Pourquoi l'EBS réagit-il plus vite qu'un circuit 100 % pneumatique ?",
    options: ["Parce qu'il n'utilise plus d'air du tout", "Le signal électrique va plus vite que la propagation de l'air dans les tuyaux longs", "Parce qu'il coupe le moteur à chaque freinage", "Parce qu'il double le PTAC"],
    correct: 1,
    expl: "Sur un attelage long, l'air met du temps à arriver à la remorque. L'ordre électrique est quasi immédiat : meilleur accord tracteur / remorque, moins de coups d'attelage."
  },
  {
    id: "ebs-4", category: "ebs",
    q: "En cas de panne électronique de l'EBS :",
    options: ["Plus aucun frein, immédiat", "Un mode secours pneumatique (backup) permet encore de freiner, avec moins de finesse", "Le frein de park se serre à 90 km/h", "Le véhicule accélère pour sortir de la voie"],
    correct: 1,
    expl: "L'EBS a un repli pneumatique. On peut s'arrêter, mais sans toutes les aides. On réduit la vitesse et on fait contrôler."
  },
  {
    id: "ebs-5", category: "ebs",
    q: "L'EBS peut optimiser :",
    options: ["Uniquement la radio", "La répartition de freinage avant / arrière et tracteur / remorque", "Le volume de la citerne", "La largeur légale du véhicule"],
    correct: 1,
    expl: "Le calculateur connaît charges, pressions, vitesses de roues. Il dose pour éviter que la remorque « pousse » ou que l'avant décroche trop tôt."
  },
  {
    id: "ebs-6", category: "ebs",
    q: "À quoi sert la prise EBS / ABS de la remorque ?",
    options: ["Alimenter le frigo uniquement", "Faire dialoguer tracteur et remorque pour le freinage électronique", "Remplir le réservoir AdBlue", "Mesurer le PTAC"],
    correct: 1,
    expl: "Sans cette liaison (ou si elle est HS), la remorque peut basculer en freinage « classique » moins performant. Toujours vérifier la prise au branchement."
  },
  {
    id: "ebs-7", category: "ebs",
    q: "L'EBS utilise encore l'air comprimé pour :",
    options: ["Rien, tout est électrique", "Serrer réellement les mâchoires / étriers (énergie de freinage)", "Uniquement gonfler les pneus", "Ouvrir la vanne EGR"],
    correct: 1,
    expl: "Électronique = commande. Air = muscle. Les chambres de frein restent pneumatiques (ou pneumatiques + ressort pour le park)."
  },
  {
    id: "ebs-8", category: "ebs",
    q: "En descente longue, un avantage de l'EBS est :",
    options: ["Il interdit l'usage des ralentisseurs", "Il peut mieux coordonner frein de service et ralentisseur (selon véhicule)", "Il augmente le régime moteur tout seul", "Il vide les réservoirs d'air volontairement"],
    correct: 1,
    expl: "Sur beaucoup de PL récents, l'intégration EBS / ralentisseur préserve les garnitures. En FIMO : on privilégie quand même le freinage continu avant le service."
  },
  {
    id: "ebs-9", category: "ebs",
    q: "Si la prise EBS remorque n'est pas branchée :",
    options: ["C'est sans importance", "Freinage remorque dégradé, risque de désaccord d'attelage, voyants possibles", "La remorque freine plus fort, c'est mieux", "Le PTRA augmente de 4 t"],
    correct: 1,
    expl: "Oubli fréquent et dangereux. Contrôle attelage : flexibles air + prise électrique / EBS + crosse + câbles de sécurité."
  },

  /* ===================== ESP ===================== */
  {
    id: "esp-1", category: "esp",
    q: "Que signifie ESP ?",
    options: ["Engine Speed Power", "Electronic Stability Program : programme de stabilité électronique", "Emergency Stop Pedal", "Empty Semi Protection"],
    correct: 1,
    expl: "ESP (parfois ESC) surveille la trajectoire. S'il détecte un écart (tête-à-queue, sous-virage, risque de tonneau), il corrige."
  },
  {
    id: "esp-2", category: "esp",
    q: "Comment l'ESP corrige-t-il la trajectoire ?",
    options: ["Il tourne le volant à la place du conducteur", "Il freine une ou plusieurs roues et peut réduire le couple moteur", "Il gonfle les pneus du côté extérieur", "Il coupe l'ABS"],
    correct: 1,
    expl: "L'ESP n'est pas une direction automatique. Il crée un couple de lacet en freinant sélectivement, et baisse souvent le couple moteur."
  },
  {
    id: "esp-3", category: "esp",
    q: "Sur PL, l'ESP contribue aussi à prévenir :",
    options: ["Les amendes de surcharge", "Le risque de retournement (roulis), surtout citerne / haut chargement", "La panne d'AdBlue", "Le dépassement de largeur 2,55 m"],
    correct: 1,
    expl: "Le centre de gravité d'un PL est haut. L'ESP / contrôle de roulis peut freiner tôt si l'accéléromètre voit un risque de tonneau en courbe."
  },
  {
    id: "esp-4", category: "esp",
    q: "L'ESP peut-il compenser une vitesse excessive en virage ?",
    options: ["Oui, toujours, c'est magique", "Non : il a des limites physiques (adhérence, masse, hauteur de charge)", "Oui si le PTAC n'est pas atteint", "Uniquement à vide"],
    correct: 1,
    expl: "Les aides ne reculent pas les lois de la physique. Un ensemble de 40 t mal abordé en courbe peut basculer malgré l'ESP."
  },
  {
    id: "esp-5", category: "esp",
    q: "L'ESP s'appuie notamment sur :",
    options: ["Uniquement le GPS", "Capteurs de roues, angle volant, lacet, accélération latérale", "La vanne EGR", "Le chronotachygraphe"],
    correct: 1,
    expl: "Il compare « ce que le conducteur demande » (volant) et « ce que le véhicule fait ». Écart = intervention."
  },
  {
    id: "esp-6", category: "esp",
    q: "Quel lien existe entre ABS, ASR et ESP ?",
    options: ["Ce sont trois noms du même boîtier sans lien", "L'ESP s'appuie souvent sur l'ABS (freinage roue par roue) et l'ASR (antipatinage)", "L'ASR remplace l'ESP", "L'ABS interdit l'ESP"],
    correct: 1,
    expl: "Sans pouvoir freiner une roue précisément (ABS/EBS), pas d'ESP efficace. L'ASR gère le patinage à l'accélération, l'ESP la trajectoire."
  },
  {
    id: "esp-7", category: "esp",
    q: "Le voyant ESP clignote en courbe. Cela signifie :",
    options: ["Panne définitive", "Souvent le système est EN TRAIN d'intervenir : on relâche, on ralentit", "Il faut accélérer pour l'aider", "Il faut braquer à fond dans l'autre sens"],
    correct: 1,
    expl: "Clignotement = travail en cours. On ne se bat pas contre le système : on réduit l'allure et on assouplit la demande au volant."
  },
  {
    id: "esp-8", category: "esp",
    q: "Un chargement trop haut ou mal réparti :",
    options: ["N'a aucun effet si ESP présent", "Augmente le risque de tonneau, l'ESP peut arriver trop tard", "Baisse le PTAC légal", "Active automatiquement l'ART"],
    correct: 1,
    expl: "L'arrimage et le baricentre, c'est du FIMO pur. L'électronique arrive après la physique du chargement."
  },

  /* ===================== CHAINE CINEMATIQUE ===================== */
  {
    id: "ch-1", category: "chaine",
    q: "Qu'est-ce que la chaîne cinématique ?",
    options: ["La chaîne du hayon uniquement", "L'ensemble des organes qui transmettent le couple du moteur jusqu'aux roues", "Le circuit de frein avant", "Le réseau AdBlue"],
    correct: 1,
    expl: "Cinématique = mouvement. Le couple part du moteur et doit arriver aux roues motrices via embrayage, boîte, transmission, pont."
  },
  {
    id: "ch-2", category: "chaine",
    q: "Quel est l'ordre d'une chaîne cinématique PL (propulsion) ?",
    options: ["Roues → pont → moteur → boîte", "Moteur → embrayage → boîte de vitesses → arbre de transmission → pont / différentiel → roues", "Boîte → EGR → ABS → roues", "Moteur → frein de park → volant → roues"],
    correct: 1,
    expl: "Volant moteur → embrayage → BV → arbre (cardan) → pont (différentiel) → arbres de roues.",
    scene: "chaine"
  },
  {
    id: "ch-3", category: "chaine",
    q: "Quel est le rôle de l'embrayage ?",
    options: ["Freiner l'essieu avant", "Coupler ou découpler moteur et boîte (démarrage, arrêts, changements de rapport)", "Recirculer les gaz d'échappement", "Mesurer le PTRA"],
    correct: 1,
    expl: "Sans embrayage (ou équivalent convertisseur / boîte auto), on ne peut pas séparer le régime moteur de la transmission à l'arrêt."
  },
  {
    id: "ch-4", category: "chaine",
    q: "À quoi sert le différentiel du pont ?",
    options: ["Bloquer les deux roues à la même vitesse en virage", "Permettre aux roues motrices de tourner à des vitesses différentes en virage", "Chauffer l'huile du ralentisseur", "Remplacer l'ABS"],
    correct: 1,
    expl: "En virage, la roue extérieure parcourt plus de chemin. Le différentiel évite de faire patiner / crier les pneus. Le blocage de diff existe pour le tout-terrain / perte d'adhérence."
  },
  {
    id: "ch-5", category: "chaine",
    q: "Un arbre de transmission (cardan) cassé entraîne :",
    options: ["Plus de direction assistée uniquement", "Plus d'entraînement des roues motrices (et danger si l'arbre fouette)", "Uniquement un voyant EGR", "Une hausse de charge utile"],
    correct: 1,
    expl: "La chaîne est rompue : plus de propulsion. L'arbre qui pend peut détruire le freinage, le réservoir, le sol. On s'arrête."
  },
  {
    id: "ch-6", category: "chaine",
    q: "Pourquoi le régime moteur n'est-il pas égal à la vitesse des roues ?",
    options: ["À cause de la vanne EGR uniquement", "À cause du rapport de boîte et du rapport de pont", "Parce que l'ABS multiplie le couple", "Parce que le PTAC change le nombre de dents"],
    correct: 1,
    expl: "Chaque rapport démultiplie le couple (et réduit la vitesse de rotation). Le pont ajoute une démultiplication finale."
  },
  {
    id: "ch-7", category: "chaine",
    q: "Où se trouve souvent le ralentisseur hydrodynamique ?",
    options: ["Sur le rétroviseur", "En sortie de boîte / intégré à la transmission, donc DANS la chaîne cinématique", "Dans le filtre à pollen", "Uniquement sur l'essieu directeur"],
    correct: 1,
    expl: "Il « freine » l'arbre qui tourne. Plus le régime de cet arbre est élevé (bon rapport), plus le ralentisseur est efficace — d'où l'intérêt de rétrograder."
  },
  {
    id: "ch-8", category: "chaine",
    q: "Une boîte automatique PL a-t-elle encore une chaîne cinématique ?",
    options: ["Non, plus aucun organe mécanique", "Oui : moteur, convertisseur ou embrayages, boîte, pont, roues", "Seulement le moteur et les roues collés", "Uniquement l'EBS"],
    correct: 1,
    expl: "Auto ou manuelle, le couple doit toujours transiter. Seul le mode de couplage change (convertisseur, double embrayage, etc.)."
  },
  {
    id: "ch-9", category: "chaine",
    q: "Sur un porteur 6x4, le pont tandem désigne :",
    options: ["Deux essieux directeurs à l'avant", "Deux essieux moteurs à l'arrière", "Un essieu relevable uniquement", "Le nom du frein de park"],
    correct: 1,
    expl: "6x4 = 6 roues (3 essieux), 4 motrices : généralement 1 directeur + 2 moteurs. Plus de motricité, autre répartition de charge."
  },

  /* ===================== AFU ===================== */
  {
    id: "afu-1", category: "afu",
    q: "Que signifie AFU ?",
    options: ["Aide au Freinage d'Urgence (amplificateur)", "Anti-Frein Universel", "Air Flow Unit", "Automatic Fuel Use"],
    correct: 0,
    expl: "L'AFU détecte un freinage d'urgence (pédale très rapide) et pousse la pression au maximum, jusqu'au seuil ABS. Beaucoup de conducteurs n'appuient pas assez fort."
  },
  {
    id: "afu-2", category: "afu",
    q: "Pourquoi l'AFU existe-t-elle ?",
    options: ["Pour remplacer l'ABS", "Parce qu'en urgence on appuie souvent trop mollement / trop tard, l'AFU complète la pression", "Pour économiser les garnitures en ville", "Pour desserrer le frein de park"],
    correct: 1,
    expl: "Études d'accidentologie : le réflexe n'atteint pas toujours la pression max. L'AFU y va pour toi, puis l'ABS empêche le blocage."
  },
  {
    id: "afu-3", category: "afu",
    q: "L'AFU se déclenche surtout lorsque :",
    options: ["On relâche l'accélérateur très lentement", "Le passage accélérateur → frein est brutal / la vitesse d'enfoncement de la pédale est élevée", "On utilise le ralentisseur cran 1", "On est à l'arrêt"],
    correct: 1,
    expl: "Ce n'est pas un freinage « confort ». C'est la brusquerie du geste qui est reconnue comme urgence."
  },
  {
    id: "afu-4", category: "afu",
    q: "Quels sont les rôles respectifs de l'AFU et de l'ABS ?",
    options: ["AFU = antiblocage, ABS = amplification", "AFU = met la pression max ; ABS = évite le blocage une fois cette pression atteinte", "Les deux coupent le moteur", "AFU gère l'EGR"],
    correct: 1,
    expl: "Ils se complètent. Sans ABS, tout mettre d'un coup bloquerait les roues. Sans AFU, on n'atteint parfois jamais la bonne pression."
  },
  {
    id: "afu-5", category: "afu",
    q: "Lorsque l'AFU s'enclenche, les feux stop :",
    options: ["S'éteignent pour ne pas éblouir", "Peuvent clignoter / alerter plus fort selon véhicules (détresse)", "Passent en feux de recul", "N'ont aucun lien"],
    correct: 1,
    expl: "Beaucoup de systèmes signalent l'urgence aux suivants (stop clignotants, warnings). Derrière un PL, ça sauve des rattrapages."
  },
  {
    id: "afu-6", category: "afu",
    q: "L'AFU dispense-t-elle d'anticiper ?",
    options: ["Oui, c'est son rôle", "Non : à 80 km/h un 40 t a une énergie énorme, l'AFU ne raccourcit pas magiquement de 100 m", "Oui sur autoroute uniquement", "Oui si Front Assist est présent"],
    correct: 1,
    expl: "Les aides d'urgence sont le filet, pas la méthode. La méthode FIMO = anticipation + ralentisseurs + distance."
  },
  {
    id: "afu-7", category: "afu",
    q: "Un freinage progressif déclenche-t-il l'AFU ?",
    options: ["Oui, à chaque stop", "Non, et c'est voulu : on ne veut pas un coup de barre à chaque rond-point", "Oui si l'ESP est on", "Uniquement à vide"],
    correct: 1,
    expl: "L'AFU distingue urgence et usage courant. Sinon le camion « plongerait » tout le temps et usinerait les pneus / la marchandise."
  },

  /* ===================== EGR ===================== */
  {
    id: "egr-1", category: "egr",
    q: "Quel est le rôle d'une vanne EGR ?",
    options: ["Elle injecte plus de gazole pour le couple", "Elle recycle une partie des gaz d'échappement vers l'admission pour baisser les NOx", "Elle bloque les roues au freinage", "Elle mesure le PTAC"],
    correct: 1,
    expl: "EGR = Exhaust Gas Recirculation. Gaz brûlés (inertes) → température de combustion plus basse → moins d'oxydes d'azote (NOx)."
  },
  {
    id: "egr-2", category: "egr",
    q: "Pourquoi cherche-t-on à réduire les NOx ?",
    options: ["Pour augmenter le PTRA", "Pollution atmosphérique / santé (gaz irritants, normes Euro)", "Pour lubrifier le turbo", "Pour remplir l'AdBlue plus vite"],
    correct: 1,
    expl: "Les diesels PL sont soumis aux normes Euro. EGR + SCR (AdBlue) + FAP travaillent ensemble, chacun sur des polluants différents."
  },
  {
    id: "egr-3", category: "egr",
    q: "Vanne EGR grippée ouverte : symptôme fréquent ?",
    options: ["Surcouple et conso en baisse", "Manque de puissance, ralenti instable, parfois fumée / à-coups", "ABS qui pulse en permanence", "PTAC qui diminue"],
    correct: 1,
    expl: "Trop de gaz d'échappement à l'admission = mélange « étouffé », mauvaise combustion. Le contraire d'un moteur « qui crache » proprement."
  },
  {
    id: "egr-4", category: "egr",
    q: "Vanne EGR grippée fermée : risque typique ?",
    options: ["Plus de NOx, voyant pollution, parfois régime / turbo perturbés", "Plus aucun frein moteur", "Largeur illégale", "Vidange d'air des circuits de frein"],
    correct: 0,
    expl: "Plus de recirculation = combustion plus chaude = plus de NOx. Le calculateur peut passer en mode dégradé."
  },
  {
    id: "egr-5", category: "egr",
    q: "L'encrassement de l'EGR est favorisé par :",
    options: ["Les longs trajets autoroute à chaud uniquement", "Les parcours urbains, bas régimes, trajets froids, calamine", "Le trop-plein d'AdBlue", "Un PTAC trop bas"],
    correct: 1,
    expl: "Suie + vapeur d'huile + gaz recyclés = calamine. Un moteur qui ne monte jamais en température s'encrasse plus."
  },
  {
    id: "egr-6", category: "egr",
    q: "Peut-on supprimer l'EGR pour gagner de la puissance ?",
    options: ["Oui, c'est conseillé en FIMO", "Non : illégal (anti-pollution), risque contrôle technique / malus / infraction", "Oui si on déclare la surcharge", "Uniquement de nuit"],
    correct: 1,
    expl: "Le by-pass EGR est une fraude. En plus ça peut déréglage moteur, assurance, et tu es en formation pro : hors sujet et hors-la-loi."
  },
  {
    id: "egr-7", category: "egr",
    q: "Quel est le lien entre EGR et AdBlue (SCR) ?",
    options: ["C'est exactement le même système", "Complémentaires : EGR agit dans le moteur, SCR traite les NOx dans l'échappement", "L'AdBlue remplace l'air de frein", "L'EGR sert à refroidir les mâchoires"],
    correct: 1,
    expl: "Euro 6 combine souvent les deux. Pas d'AdBlue ≠ EGR, et inversement."
  },
  {
    id: "egr-8", category: "egr",
    q: "Face à un voyant pollution / EGR, le conducteur doit :",
    options: ["On continue à fond jusqu'à la panne", "On note, on prévient l'exploitant, on évite de forcer le moteur, contrôle atelier", "On tape sur la vanne avec un marteau en tournée", "On coupe l'ABS"],
    correct: 1,
    expl: "Tu n'es pas mécano de tournée pour démonter l'EGR. Conduite adaptée + signalement : c'est le geste pro."
  },

  /* ===================== RALENTISSEURS ===================== */
  {
    id: "ral-1", category: "ralentisseurs",
    q: "Quels sont les 4 types de ralentisseurs PL ?",
    options: ["ABS, ESP, ASR, AFU", "Frein moteur, frein sur échappement, ralentisseur hydrodynamique, ralentisseur électromagnétique", "Park, secours, service, EGR", "EBS, ART, Front Assist, pont"],
    correct: 1,
    expl: "Ce sont les 4 familles de freinage continu. ABS/ESP sont des aides, pas des ralentisseurs.",
    scene: "ralentisseurs"
  },
  {
    id: "ral-2", category: "ralentisseurs",
    q: "À quoi sert un ralentisseur ?",
    options: ["Remplacer totalement le frein de service, même à l'arrêt", "Maintenir / réduire la vitesse surtout en descente, sans surchauffer les freins de service", "Augmenter le PTAC", "Bloquer les roues au feu rouge"],
    correct: 1,
    expl: "En descente, le service seul fading (perte d'efficacité par chaleur). Le continu dissipe l'énergie ailleurs (moteur, huile, courants de Foucault)."
  },
  {
    id: "ral-3", category: "ralentisseurs",
    q: "Le frein moteur agit surtout :",
    options: ["En injectant plus de gazole", "En utilisant la compression / le frein sur les gaz du moteur, pédale d'accélérateur relâchée, bon rapport engagé", "Sur le flexible jaune uniquement", "Uniquement à l'arrêt"],
    correct: 1,
    expl: "Plus le régime est dans la bonne plage et plus le rapport est court, plus le frein moteur retient. D'où : rétrograder AVANT que ça s'emballe."
  },
  {
    id: "ral-4", category: "ralentisseurs",
    q: "Qu'est-ce que le frein sur échappement ?",
    options: ["Un papillon / une vanne qui obstrue l'échappement et crée une contre-pression", "Un disque Telma", "Le frein de park à ressort", "Un radiateur d'huile de boîte"],
    correct: 0,
    expl: "Les gaz ne s'évacuent plus librement → le moteur « pousse » dans un mur → ralentissement. Souvent couplé au frein moteur."
  },
  {
    id: "ral-5", category: "ralentisseurs",
    q: "Le ralentisseur hydrodynamique fonctionne par :",
    options: ["Aimants et courants de Foucault uniquement", "Un rotor qui brassse un fluide : l'énergie cinétique devient chaleur, évacuée par le refroidissement", "Le blocage de l'essieu directeur", "La vanne EGR 100 % ouverte"],
    correct: 1,
    expl: "Pas de contact d'usure type plaquette. La chaleur part dans le circuit de refroidissement : attention en été / files lentes si thermo saturé."
  },
  {
    id: "ral-6", category: "ralentisseurs",
    q: "Le ralentisseur électromagnétique (Telma) utilise :",
    options: ["De l'huile sous 10 bars", "Un champ magnétique et des courants de Foucault dans un rotor, sans contact de friction", "Le frein à main câblé", "L'AdBlue"],
    correct: 1,
    expl: "Bobines + disque qui tourne. Chaleur évacuée par l'air autour du ralentisseur (souvent derrière la BV / sur l'arbre)."
  },
  {
    id: "ral-7", category: "ralentisseurs",
    q: "En descente, la méthode correcte est :",
    options: ["Frein de service en continu, pied posé", "Stabiliser avec le continu (ralentisseur + bon rapport), service par petits coups si besoin", "Point mort pour économiser", "Frein de park à cran 2"],
    correct: 1,
    expl: "Point mort = suicide (plus de frein moteur, emballement). Pied posé en continu = fading. On « tient » au moteur / retarder."
  },
  {
    id: "ral-8", category: "ralentisseurs",
    q: "Un ralentisseur est plus efficace lorsque :",
    options: ["Toujours à 600 tr/min, au ralenti", "En général plus efficace quand la transmission tourne assez vite (bon rapport, pas trop sous-régime)", "Uniquement à l'arrêt", "Uniquement en marche arrière"],
    correct: 1,
    expl: "Un Telma / hydro à l'arbre : peu de tours = peu d'effet. D'où rétrogradage. Piège classique de QCM."
  },
  {
    id: "ral-9", category: "ralentisseurs",
    q: "Peut-on s'immobiliser au feu avec le seul ralentisseur ?",
    options: ["Oui, c'est fait pour ça", "Non : le continu ne bloque pas le véhicule à l'arrêt ; il faut le frein de service, puis le park si on quitte le poste", "Oui si ESP on", "Oui sous 40 t"],
    correct: 1,
    expl: "Le ralentisseur diminue la vitesse, il n'immobilise pas comme des mâchoires serrées + ressorts de park."
  },
  {
    id: "ral-10", category: "ralentisseurs",
    q: "Sur chaussée glissante, un cran de ralentisseur trop brutal :",
    options: ["Est toujours le plus sûr", "Peut faire décrocher l'essieu moteur / plier l'ensemble : on dose, l'ABS/EBS peut limiter", "Augmente l'adhérence", "Remplace les chaînes"],
    correct: 1,
    expl: "Le continu agit sur la chaîne cinématique (roues motrices). Trop violent sur verglas = perte d'adhérence arrière. On y va progressivement."
  },
  {
    id: "ral-11", category: "ralentisseurs",
    q: "Lequel n'est pas un ralentisseur ?",
    options: ["Frein moteur", "Ralentisseur hydrodynamique", "AFU", "Ralentisseur électromagnétique"],
    correct: 2,
    expl: "L'AFU amplifie le FREIN DE SERVICE en urgence. Ce n'est pas un freinage continu d'endurance."
  },
  {
    id: "ral-12", category: "ralentisseurs",
    q: "Pourquoi faut-il préserver le frein de service en montagne ?",
    options: ["Pour économiser l'AdBlue", "Pour garder son efficacité si un vrai coup d'arrêt est nécessaire (fading)", "Parce que l'ABS ne marche que à froid", "Pour respecter le PTAC"],
    correct: 1,
    expl: "Garnitures chaudes = coefficient qui s'effondre. Le continu est là pour ça : arriver en bas avec des freins encore capables d'un arrêt d'urgence."
  },

  /* ===================== FREINAGE AV/AR + PARK ===================== */
  {
    id: "fr-1", category: "freinage",
    q: "Sur PL, le frein de service est en général :",
    options: ["Un seul circuit hydraulique comme une citadine", "Pneumatique à DOUBLE CIRCUIT (souvent avant / arrière) pour le secours", "Uniquement électrique", "Uniquement le levier de park"],
    correct: 1,
    expl: "Deux circuits indépendants. Si l'un fuit, l'autre permet encore de s'arrêter (moins bien). C'est la redondance de sécurité."
  },
  {
    id: "fr-2", category: "freinage",
    q: "Les circuits avant et arrière sont :",
    options: ["Sont le même tuyau avec deux noms", "Alimentent séparément essieu(x) directeur(s) et essieu(x) arrière : une fuite n'emporte pas tout", "Servent uniquement à la suspension", "Remplacent le PTRA"],
    correct: 1,
    expl: "Classique FIMO : avant + arrière indépendants. Tu dois savoir qu'une rupture n'enlève pas 100 % du freinage de service."
  },
  {
    id: "fr-3", category: "freinage",
    q: "Le frein de stationnement PL utilise surtout :",
    options: ["Un câble de vélo sur l'essieu avant", "Des chambres à RESSORT (spring brake) : l'air DESSERRE, le ressort SERRE", "L'ABS uniquement", "La vanne EGR fermée"],
    correct: 1,
    expl: "Piège n°1 : contrairement à l'idée « je mets de l'air pour freiner », au PARK c'est le contraire. Perte d'air = les ressorts serrent (sécurité immobilisation)."
  },
  {
    id: "fr-4", category: "freinage",
    q: "Pourquoi le frein de park se serre-t-il si les réservoirs d'air sont vides ?",
    options: ["Bug EBS", "Plus d'air pour comprimer les ressorts → les ressorts appliquent les mâchoires", "L'ESP le décide", "Le gasoil manque"],
    correct: 1,
    expl: "D'où l'intérêt de remplir l'air AVANT de partir, et de ne pas « forcer » un véhicule coincé park / plus d'air en tractant comme un forcené."
  },
  {
    id: "fr-5", category: "freinage",
    q: "Pour desserrer le frein de park, il faut :",
    options: ["Débrancher l'EGR", "Avoir assez de pression d'air, puis commander le levier / bouton park", "Couper l'ABS", "Être au-dessus de 40 t"],
    correct: 1,
    expl: "Sans pression, le bouton park ne fera rien de propre : les ressorts restent collés. On attend le bon niveau au manomètre."
  },
  {
    id: "fr-6", category: "freinage",
    q: "Quelle différence entre frein de service et frein de park ?",
    options: ["C'est le même circuit, deux pédales", "Service = pédale, l'air SERRE ; park = ressorts, l'air DESSERRE", "Park = uniquement l'essieu avant", "Service = uniquement la remorque"],
    correct: 1,
    expl: "Service : on envoie de l'air dans les membranes pour serrer. Park : on relâche l'air, les ressorts serrent. Perte d'air = immobilisation.",
    scene: "freins"
  },
  {
    id: "fr-7", category: "freinage",
    q: "Le frein de secours correspond souvent à :",
    options: ["Un troisième pédalier", "La capacité à s'arrêter avec un circuit restant et/ou le park selon conception", "Le klaxon", "Le limiteur de vitesse"],
    correct: 1,
    expl: "Le code impose un dispositif de secours. En pratique : 2e circuit de service + park. On ne « improvise » pas un calage moteur en descente."
  },
  {
    id: "fr-8", category: "freinage",
    q: "Le manomètre d'air est trop bas. Que faire ?",
    options: ["On part, l'ABS compensera", "On ne part pas : park peut rester serré, service faible, danger", "On n'utilise que l'ART", "On charge plus pour caler les ressorts"],
    correct: 1,
    expl: "Contrôle journalier FIMO : pressions, purge des bouteilles (eau/huile), fuites au stationnement."
  },
  {
    id: "fr-9", category: "freinage",
    q: "Les flexibles de frein d'un attelage (rouge / jaune) :",
    options: ["Sont optionnels si EBS présent", "Doivent être branchés : alimentation + commande, sinon remorque mal / non freinée", "Servent au gavage du moteur", "Mesurent la hauteur 4 m"],
    correct: 1,
    expl: "Jaune = commande (signal de freinage). Rouge = alimentation (réservoir remorque + desserrage park remorque selon montage). Oubli = catastrophe."
  },
  {
    id: "fr-10", category: "freinage",
    q: "Si le flexible d'alimentation remorque (rouge) se rompt en roulant :",
    options: ["Rien, la semi continue", "La remorque doit se serrer (sécurité rupture d'attelage)", "Le tracteur gagne 10 km/h", "L'EGR s'ouvre"],
    correct: 1,
    expl: "C'est le principe du freinage automatique de remorque en cas de rupture. Au sol, on ne débranche pas n'importe comment sans cales / park."
  },
  {
    id: "fr-11", category: "freinage",
    q: "À quoi servent les cales de roue ?",
    options: ["Augmenter le PTAC", "Compléter le park sur pente / sol glissant / lors d'une intervention", "Remplacer l'ABS", "Ouvrir les portes arrières"],
    correct: 1,
    expl: "Le park peut lâcher (fuite, mauvais serrage, verglas). Cales = geste pro, surtout livraison en pente."
  },
  {
    id: "fr-12", category: "freinage",
    q: "Pourquoi le frein de service a-t-il deux circuits ?",
    options: ["Pour la beauté du schéma", "Une fuite unique ne doit pas supprimer tout le freinage de service", "Pour chauffer l'EGR", "Parce que le PTRA l'impose à 19 t seulement"],
    correct: 1,
    expl: "Redondance. Même logique que deux circuits auto, mais en air et avec des volumes énormes."
  },
  {
    id: "fr-13", category: "freinage",
    q: "Le correcteur de freinage selon la charge sert à :",
    options: ["Freiner trop fort à vide et trop peu en charge, c'est voulu", "Éviter de bloquer trop tôt à vide et d'être trop mou en charge", "Changer le PTAC sur la carte grise", "Couper l'essieu relevable"],
    correct: 1,
    expl: "À vide, trop de pression arrière = dérapage. En charge, pas assez = distance d'arrêt énorme. D'où dosage selon charge (capteurs / EBS)."
  },

  /* ===================== ASR ===================== */
  {
    id: "asr-1", category: "asr",
    q: "Que signifie ASR ?",
    options: ["Automatic Speed Record", "Anti-Slip Regulation : antipatinage des roues motrices", "Air Suspension Ride", "Axle Safety Rear"],
    correct: 1,
    expl: "L'ASR empêche les roues motrices de patiner à l'accélération (boue, pluie, dos d'âne, départ chargé)."
  },
  {
    id: "asr-2", category: "asr",
    q: "L'ASR intervient surtout :",
    options: ["Au freinage d'urgence uniquement", "À l'accélération, quand une roue motrice tourne trop vite par rapport aux autres", "À l'arrêt park", "Quand on ouvre l'EGR"],
    correct: 1,
    expl: "ABS = blocage au frein. ASR = patinage à l'accel. Miroir l'un de l'autre, mêmes capteurs de roues souvent."
  },
  {
    id: "asr-3", category: "asr",
    q: "Comment l'ASR réduit-il le patinage ?",
    options: ["En augmentant le gaz", "En baissant le couple moteur et/ou en freinant la roue qui patine", "En serrant le park", "En vidant les bouteilles d'air"],
    correct: 1,
    expl: "Freiner la roue qui glisse envoie le couple vers celle qui a de l'adhérence (effet « différentiel »). Et moins de gaz = moins de couple à transmettre."
  },
  {
    id: "asr-4", category: "asr",
    q: "Quelle différence entre ASR et ESP ?",
    options: ["L'ASR remplace l'ESP en virage", "L'ASR gère le patinage en ligne ; l'ESP gère la trajectoire / stabilité", "Aucun lien capteur", "L'ESP ne marche que sans ASR"],
    correct: 1,
    expl: "Famille d'aides, rôles différents. On peut patiner droit (ASR) ou partir en lacet (ESP)."
  },
  {
    id: "asr-5", category: "asr",
    q: "Sur verglas, accélérer à fond malgré l'ASR :",
    options: ["Est parfait, l'ASR invente du grip", "Reste une mauvaise idée : l'ASR limite mais n'invente pas l'adhérence", "Double la charge utile", "Coupe le frein moteur"],
    correct: 1,
    expl: "Souplesse, bon rapport, parfois pontage de diff selon véhicule / consignes constructeur. Pas le pied au plancher."
  },
  {
    id: "asr-6", category: "asr",
    q: "Désactiver l'ASR (si le véhicule le permet) peut servir :",
    options: ["En autoroute sèche pour aller plus vite", "Parfois dans la boue profonde / neige où un peu de patinage aide à avancer — avec prudence", "À augmenter le PTRA", "À désactiver l'ABS en même temps, c'est le but"],
    correct: 1,
    expl: "Certains PL ont un mode « off-road ». Ce n'est pas pour la nationale mouillée à 80. Et ça ne coupe pas l'ABS."
  },
  {
    id: "asr-7", category: "asr",
    q: "Le voyant ASR reste allumé fixe. Cela signifie :",
    options: ["Tout va bien", "Système indisponible ou défaut : motricité moins sécurisée, contrôle atelier", "Le park est serré", "Le PTAC est bon"],
    correct: 1,
    expl: "Comme pour ABS/ESP : fixe = pas OK. Clignotant en action = souvent intervention en cours."
  },

  /* ===================== FRONT ASSIST ===================== */
  {
    id: "fa-1", category: "front",
    q: "Qu'est-ce que le Front Assist ?",
    options: ["Un régulateur de descente", "Une aide anticollision avant (alerte + freinage automatique possible)", "Un limiteur de PTAC", "Un type de ralentisseur à huile"],
    correct: 1,
    expl: "Radar et/ou caméra surveillent l'avant. Alerte, puis coup de frein si tu ne réagis pas. Noms selon marques (Front Assist, AEBS, City Brake…)."
  },
  {
    id: "fa-2", category: "front",
    q: "Le Front Assist remplace-t-il la vigilance du conducteur ?",
    options: ["Oui, c'est homologué pour lire WhatsApp", "Non : angles morts, intempéries, usagers soudains, pannes capteurs", "Oui la nuit uniquement", "Oui si l'ART est on"],
    correct: 1,
    expl: "AEBS obligatoire progressivement sur PL, mais le conducteur reste responsable. Brouillard, averse, capteur sale = système aveugle."
  },
  {
    id: "fa-3", category: "front",
    q: "Si le Front Assist déclenche un freinage automatique :",
    options: ["Accélérer pour « reprendre la main » tout de suite", "Laisser l'urgence se faire, puis reprendre une conduite maîtrisée ; ne pas se battre contre le freinage", "Couper le contact", "Serrer le park"],
    correct: 1,
    expl: "Le système cherche à éviter le tamponnement. Contre-braquer + gaz par surprise, c'est empirer. Ensuite on se replace, on analyse."
  },
  {
    id: "fa-4", category: "front",
    q: "Un capteur Front Assist sale, givré ou masqué :",
    options: ["Marche mieux", "Peut s'inhiber ou mal voir : voyant, pas d'alerte, ou fausse alerte", "Augmente le couple", "Règle l'EGR"],
    correct: 1,
    expl: "Contrôle journalier : calandre, logo radar, pare-brise caméra. L'hiver ça s'oublie."
  },
  {
    id: "fa-5", category: "front",
    q: "Quelle différence entre Front Assist et AFU ?",
    options: ["Identiques", "Front Assist décide parfois SANS que tu aies touché la pédale ; AFU AMPLIFIE ton geste d'urgence", "AFU lit le radar", "Front Assist n'agit que sur le park"],
    correct: 1,
    expl: "L'un est « je vois l'obstacle ». L'autre est « tu as déjà tapé dans la pédale, je pousse ». Souvent les deux cohabitent."
  },
  {
    id: "fa-6", category: "front",
    q: "Le Front Assist détecte-t-il toujours un piéton, un deux-roues ou un véhicule de travers ?",
    options: ["Oui, 100 %", "Non : limites de détection, surtout objets atypiques, virages, dénivelé", "Oui s'ils font plus de 3,5 t", "Uniquement sur autoroute"],
    correct: 1,
    expl: "Les QCM aiment ce piège. Ce n'est pas un super-héros. Toi tu regardes encore."
  },
  {
    id: "fa-7", category: "front",
    q: "Sur PL, le Front Assist (AEBS) vise surtout à éviter :",
    options: ["Gagner du gasoil en plaine", "Limiter les rattrapages par l'arrière… non : les collisions par l'AVANT (tamponnement)", "Remplacer l'angle mort", "Augmenter le PMA"],
    correct: 1,
    expl: "Le scénario type : files, bouchon, inattention. Un 40 t dans un VL arrêté, c'est le drame que le législateur vise."
  },

  /* ===================== ART ===================== */
  {
    id: "art-1", category: "art",
    q: "Que désigne l'ART sur un PL ?",
    options: ["Un type de semi frigo", "Le régulateur de vitesse ADAPTATIF (distance avec le véhicule devant)", "Le frein sur échappement", "La loi des 19 tonnes"],
    correct: 1,
    expl: "ART vient de l'allemand Abstand-Regel-Tempomat : régulateur qui tient une ALLURE et une DISTANCE. Proche d'ACC (Adaptive Cruise Control)."
  },
  {
    id: "art-2", category: "art",
    q: "Quelle différence entre l'ART et un régulateur classique ?",
    options: ["Aucune", "Le classique tient une vitesse ; l'ART ralentit / réaccélère selon le véhicule suivi", "L'ART ne marche qu'à l'arrêt", "Le classique utilise le radar, pas l'ART"],
    correct: 1,
    expl: "Régulateur simple = tu te ramasses dans le bouchon si tu ne coupes pas. ART = il gère l'écart (dans ses limites)."
  },
  {
    id: "art-3", category: "art",
    q: "Peut-on quitter le volant lorsque l'ART est activé ?",
    options: ["Oui, c'est de la conduite autonome niveau 5", "Non : tu restes responsable, mains et regard, l'ART ne voit pas tout", "Oui sur A-roads françaises", "Oui si Front Assist off"],
    correct: 1,
    expl: "Ni ART ni Front Assist = pilote auto. Couper un virage, un animal, un cône, un camion qui se rabat : à toi."
  },
  {
    id: "art-4", category: "art",
    q: "L'ART est moins fiable dans quelles conditions ?",
    options: ["Sur autoroute dégagée et sèche", "En virage serré, pluie battante, neige, capteur masqué, insertion chaotique", "Quand le radar est propre", "À 80 km/h réglementaires PL"],
    correct: 1,
    expl: "Le radar « perd » la cible en courbe. La neige colle. On reprend le pied. On ne « fait confiance » aveuglément."
  },
  {
    id: "art-5", category: "art",
    q: "L'ART et la conduite rationnelle :",
    options: ["L'ART interdit d'anticiper", "Bien réglé, il évite les coups d'accélérateur inutiles ; mal utilisé (trop près), il pompe et consomme", "L'ART coupe toujours le ralentisseur", "L'ART augmente le couple max"],
    correct: 1,
    expl: "Distance longue = souplesse = conso. Distance minimale en permanence = yo-yo, gaz, frein, gasoil, stress du suivant."
  },
  {
    id: "art-6", category: "art",
    q: "Si le véhicule suivi quitte la voie, l'ART peut :",
    options: ["Rester à 50 km/h par sécurité toujours", "Réaccélérer vers la vitesse consigne : il faut SURVEILLER (piège fréquent)", "Serrer le park", "Couper le moteur"],
    correct: 1,
    expl: "Classique : la voiture de devant sort, le camion remet les gaz alors qu'un virage / un péage arrive. Pied prêt."
  },
  {
    id: "art-7", category: "art",
    q: "Front Assist et ART utilisent souvent :",
    options: ["Le même type de capteur avant (radar / caméra), mais pas le même objectif", "La vanne EGR", "Le flexible rouge uniquement", "Le chronotachygraphe papier"],
    correct: 0,
    expl: "Même « yeux », cerveaux / fonctions différents : distance de croisière (ART) vs urgence collision (Front Assist)."
  },
  {
    id: "art-8", category: "art",
    q: "En descente raide, se fier uniquement à l'ART :",
    options: ["Est la méthode FIMO", "Est dangereux : il faut rapport, ralentisseur, maîtrise de l'allure, pas un cruise qui peut se tromper", "Remplace le frein moteur", "Est obligatoire au-dessus de 26 t"],
    correct: 1,
    expl: "Col : on pilote. Les aides d'allure ne sont pas un frein de montagne."
  },

  /* ===================== CONDUITE RATIONNELLE ===================== */
  {
    id: "co-1", category: "conduite",
    q: "La conduite rationnelle vise surtout à :",
    options: ["Aller le plus vite possible pour finir plus tôt", "Sécurité + moins de conso + moins d'usure, par l'anticipation", "Couper tous les aides électroniques", "Charger au-dessus du PMA"],
    correct: 1,
    expl: "Ce n'est pas « conduire lentement bêtement ». C'est utiliser l'inertie, le couple, le continu, et éviter les à-coups."
  },
  {
    id: "co-2", category: "conduite",
    q: "Le principal levier d'économie de carburant est :",
    options: ["La couleur de la cabine", "L'anticipation (lever le pied tôt, éviter l'arrêt / le réaccélération)", "Klaxonner", "Rouler au régime de puissance max en permanence"],
    correct: 1,
    expl: "Chaque arrêt d'un 40 t coûte une fortune d'énergie à relancer. Voir loin = moins de frein de service = moins de gaz ensuite."
  },
  {
    id: "co-3", category: "conduite",
    q: "Pourquoi rester dans la zone verte du compte-tours ?",
    options: ["C'est le régime de puissance maxi, donc plus on tape fort mieux c'est", "C'est souvent la plage de couple élevé / bon rendement, donc moins de litres aux 100", "L'ABS ne marche que là", "Le PTRA est calculé là"],
    correct: 1,
    expl: "La zone verte n'est pas au même régime sur tous les moteurs. On se cale sur celle DU CAMION. Ce n'est pas la puissance max (plus haut), c'est le couple / le rendement.",
    context: "Chaque moteur a sa zone verte au compte-tours (plage de couple / meilleur rendement). Un diesel moderne peut être coupleux dès 900 tr/min, un autre plus haut. Ce n'est pas un chiffre unique.",
    scene: "tacho-green"
  },
  {
    id: "co-4", category: "conduite",
    q: "À l'approche d'un rond-point ou d'un feu, la méthode rationnelle est :",
    options: ["Garder le pied au plancher puis ABS", "Relâcher tôt, laisser retenir moteur / ralentisseur, doser, parfois éviter l'arrêt complet", "Point mort + frein de service dès 200 m", "ART distance mini + espoir"],
    correct: 1,
    expl: "L'énergie du camion est précieuse. On la « recycle » en roulant au lieu de la brûler dans les disques."
  },
  {
    id: "co-5", category: "conduite",
    q: "Des pneus sous-gonflés entraînent :",
    options: ["Meilleure conso", "Plus de conso, plus de chaleur, plus de risque d'éclatement, moins de stabilité", "Plus de charge utile légale", "Ça coupe l'EGR"],
    correct: 1,
    expl: "Contrôle journalier. Un PL sous-gonflé, c'est l'incendie de pneu et la facture gasoil."
  },
  {
    id: "co-6", category: "conduite",
    q: "Déflecteur, bâche tendue et portes fermées servent à :",
    options: ["C'est du squatte visuel", "Ça réduit la traînée aéro, donc la conso surtout à 80 km/h", "Augmente le PTAC", "Sert uniquement à l'EBS"],
    correct: 1,
    expl: "À 80, l'air c'est un mur. Une bâche claquante = parachute. Détail pro."
  },
  {
    id: "co-7", category: "conduite",
    q: "Laisser le moteur au ralenti longtemps, sans besoin réel :",
    options: ["Économise le démarreur donc c'est écologique", "Brûle du gazole, encrasse (EGR/FAP), pollue, use : on coupe si l'arrêt dure", "Remplit l'air plus vite indéfiniment sans coût", "Est obligatoire au-delà de 32 t"],
    correct: 1,
    expl: "Sauf consigne frigo / confort / air à remonter / grand froid selon règles entreprise. Le « je laisse tourner 40 min » n'est pas rationnel."
  },
  {
    id: "co-8", category: "conduite",
    q: "Sur autoroute, accélérer à 90 km/h puis freiner :",
    options: ["Est plus rationnel", "Casse le rythme, consomme, use, et tu n'arrives pas vraiment plus tôt", "Active l'ART magique", "Baisse le PMA"],
    correct: 1,
    expl: "Allure stable près de la limite légale. Les coups de gaz se paient cash."
  },
  {
    id: "co-9", category: "conduite",
    q: "Utiliser le ralentisseur plutôt que le frein de service en descente :",
    options: ["Use plus les plaquettes", "Préserve le service pour l'urgence et évite le fading : c'est rationnel ET sûr", "Est interdit en FIMO", "Augmente les NOx uniquement"],
    correct: 1,
    expl: "Sécurité et entretien dans la même phrase. Rare et beau."
  },
  {
    id: "co-10", category: "conduite",
    q: "Un chargement trop haut ou trop à l'arrière :",
    options: ["N'impacte que le look", "Déstabilise, allonge/déséquilibre le freinage, augmente la conso et le risque essieux", "Est corrigé par l'EGR", "Est sans effet sous le PTAC"],
    correct: 1,
    expl: "Même sous le PMA, un essieu peut être écrasé (piège). Répartition + arrimage = conduite rationnelle au sens large."
  },
  {
    id: "co-11", category: "conduite",
    q: "La distance de sécurité d'un PL doit être :",
    options: ["Comme une Clio, 2 secondes suffisent toujours", "Plus longue qu'un VL : masse, temps de réponse attelage — souvent 3 s / repères d'aménagement", "1 mètre par km/h comme en 125", "Celle du Front Assist uniquement"],
    correct: 1,
    expl: "Les barèmes exacts varient selon supports de cours (temps, mètres, damier autoroute). L'idée : un PL a besoin de BEAUCOUP plus qu'un VL."
  },
  {
    id: "co-12", category: "conduite",
    q: "Avec une boîte automatique, la conduite rationnelle consiste à :",
    options: ["On n'a plus rien à faire", "On choisit le mode, on anticipe encore, parfois on force un rapport en col", "On passe en manuel pour rester à 2000 tr en permanence", "On coupe l'ASR tout le temps"],
    correct: 1,
    expl: "L'auto aide, elle ne voit pas le rond-point dans 400 m aussi bien que toi si tu lèves le pied tôt (selon boîtes)."
  },

  /* ===================== COUPLE / PUISSANCE / CONSO ===================== */
  {
    id: "cp-1", category: "couple",
    q: "Qu'est-ce que le couple moteur ?",
    options: ["La vitesse de pointe", "La « force de rotation » (N.m) disponible à un régime donné", "Le volume du réservoir", "La largeur hors tout"],
    correct: 1,
    expl: "Couple = ce qui fait démarrer, grimper, tracter sans hurler. Un moteur « coupleux » bas dans les tours est agréable et économe."
  },
  {
    id: "cp-2", category: "couple",
    q: "Qu'est-ce que la puissance ?",
    options: ["Uniquement le bruit du pot", "Le couple multiplié par le régime (en gros) : capacité à entretenir une vitesse / grimper vite", "Le PTAC divisé par le PV", "La pression des bouteilles d'air"],
    correct: 1,
    expl: "P = C × ω. Haut régime × couple = grosse puissance, mais pas forcément le meilleur litre aux 100."
  },
  {
    id: "cp-3", category: "couple",
    q: "Pour limiter la consommation, on recherche plutôt :",
    options: ["Le régime de puissance maximale en continu", "La plage de couple élevé / meilleur rendement (zone économique)", "Le ralenti en descente, point mort", "La puissance max dès 30 km/h"],
    correct: 1,
    expl: "Puissance max ≠ conso min. On laisse le couple travailler, dans la zone verte du moteur que l'on conduit.",
    scene: "curves",
    context: "Sur un diesel, le couple max arrive à un régime plus bas que la puissance max. La zone verte est du côté couple — et elle dépend du moteur."
  },
  {
    id: "cp-4", category: "couple",
    q: "Que faire ?",
    options: [
      "Rester sur ce rapport : 800 tr/min est toujours économique",
      "Rétrograder pour ramener l'aiguille dans la zone verte de ce moteur",
      "Couper l'ASR pour gagner du couple",
      "Serrer le frein de park"
    ],
    correct: 1,
    expl: "800 tr/min n'est pas un chiffre magique : selon le moteur, ça peut être encore dans la zone verte. ICI l'aiguille est sous la zone verte de CE camion, et la vitesse chute : sous-régime. On rétrograde.",
    context: "Côte, ensemble chargé. Sur le compte-tours de CE camion, l'aiguille est sous la zone verte. La vitesse diminue malgré l'accélérateur à fond.",
    scene: "tacho-low"
  },
  {
    id: "cp-5", category: "couple",
    q: "Que faire ?",
    options: [
      "Rester ici : puissance max = moins de conso",
      "Passer le rapport supérieur pour redescendre dans la zone verte",
      "Couper l'EBS",
      "Ouvrir la vanne EGR"
    ],
    correct: 1,
    expl: "Zone rouge = sur-régime : bruit, usure, litres en trop. On allonge le rapport pour revenir dans la zone de couple de ce moteur.",
    context: "Palier, allure déjà stabilisée. L'aiguille du compte-tours de CE camion est dans la zone rouge.",
    scene: "tacho-red"
  },
  {
    id: "cp-6", category: "couple",
    q: "Pourquoi un moteur plus puissant peut-il consommer moins ?",
    options: ["C'est impossible", "S'il reste en zone de couple sans être écrasé en permanence, il « force » moins", "Les chevaux boivent de l'eau", "Le 500 ch a un PTRA illimité"],
    correct: 1,
    expl: "Moteur sous-dimensionné = pied au plancher tout le trajet = conso et casse. Le bon dimensionnement fait partie de l'exploitant, toi tu gères le régime."
  },
  {
    id: "cp-7", category: "couple",
    q: "La consommation d'un PL dépend surtout de :",
    options: ["Uniquement la marque du siège", "Masse réelle, vitesse, aéro, relief, conduite, pneus, accessoires (frigo, prise de force)", "Uniquement la vanne EGR ouverte", "Uniquement le nombre d'essieux pair"],
    correct: 1,
    expl: "½ mv² et la traînée. Un kilo inutile, 5 km/h de trop, une bâche : tout se voit à la pompe."
  },
  {
    id: "cp-8", category: "couple",
    q: "Le limiteur 90 km/h sert à :",
    options: ["Est un accessoire confort", "Borne la vitesse max : au-delà la conso explose et c'est illégal pour beaucoup de PL", "Augmente le couple", "Remplace le tachygraphe"],
    correct: 1,
    expl: "La résistance de l'air monte fort avec la vitesse. 80 vs 90 sur PL, ce n'est pas « un petit plus », c'est un gouffre + légal."
  },
  {
    id: "cp-9", category: "couple",
    q: "En palier, à allure stabilisée, le moteur a surtout besoin :",
    options: ["Du couple max ET de la puissance max en même temps forcément", "Surtout de la puissance pour vaincre résistances (air, roulement) ; un petit couple suffit si le rapport est bon", "D'être au ralenti", "De l'AFU"],
    correct: 1,
    expl: "Démarrage / col = couple. Palier 80 = vaincre l'air, donc de la puissance, mais dans un rapport qui garde un régime raisonnable."
  },
  {
    id: "cp-10", category: "couple",
    q: "« L'économie de carburant se fait au pied » signifie :",
    options: ["On roule pieds nus", "La façon d'accélérer, d'anticiper et de choisir le régime pèse autant que la techno du camion", "On débranche l'EGR", "On vide le réservoir pour baisser le PV"],
    correct: 1,
    expl: "Deux conducteurs, même 44 t, écart de litres énorme. C'est tout l'objet des 65 h de conduite rationnelle en FIMO."
  },

  /* ===================== SURCHARGE ===================== */
  {
    id: "su-1", category: "surcharge",
    q: "Qu'est-ce que la surcharge ?",
    options: ["Dépasser le volume en m³ uniquement", "Dépasser les masses autorisées (PMA/MMA, PTAC, essieux) même si ça rentre dans la caisse", "Uniquement dépasser 4 m de haut", "Avoir trop d'AdBlue"],
    correct: 1,
    expl: "Le volume peut être plein et le poids encore OK (volumeux léger)… ou la caisse à moitié et déjà HS (acier, liquide). On pèse, on ne devine pas."
  },
  {
    id: "su-2", category: "surcharge",
    q: "En contrôle de masse PL, la règle à retenir est :",
    options: ["+10 % comme en supermarché", "Tolérance 0 : on ne dépasse pas", "+2 t systématiques", "+5 % sur autoroute seulement"],
    correct: 1,
    expl: "On t'enseigne zéro dépassement. Les barèmes d'amende existent, mais tu ne « joues » pas avec. Si le pont-bascule dit 40,2 t pour 40 t : problème."
  },
  {
    id: "su-3", category: "surcharge",
    q: "Qui peut être responsable en cas de surcharge ?",
    options: ["Uniquement le chargeur, jamais le conducteur", "Le conducteur peut être verbalisé ; l'entreprise / le donneur d'ordre aussi selon les cas — tu refuses un camion hors limites", "Uniquement le constructeur", "Personne si ESP on"],
    correct: 1,
    expl: "Tu signes, tu roules, tu es le dernier maillon. Consigne FIMO : tu ne pars pas en surcharge, même « pour dépanner le chef »."
  },
  {
    id: "su-4", category: "surcharge",
    q: "Quels sont les effets d'une surcharge ?",
    options: ["Meilleur freinage grâce à plus d'adhérence toujours", "Distance d'arrêt ↑, sous-virage / tonneau, pneus, ponts, direction, routes", "ABS plus intelligent", "PTRA qui s'adapte tout seul"],
    correct: 1,
    expl: "Plus de masse = plus d'énergie. Les aides ne multiplient pas l'asphalte par deux."
  },
  {
    id: "su-5", category: "surcharge",
    q: "Peut-on dépasser la charge d'un essieu sans dépasser la MMA ?",
    options: ["Faux", "Vrai : mal réparti, un essieu peut dépasser 13 t (ou 12 t selon cas 44 t) alors que le total passe", "Uniquement sur porteur 4 essieux", "Uniquement à vide"],
    correct: 1,
    expl: "PIÈGE D'OR. Tout le monde regarde le total. Le pont-bascule essieu par essieu te grille. D'où glissières, position de la charge, essieu relevable."
  },
  {
    id: "su-6", category: "surcharge",
    q: "Charge maximale d'un essieu isolé (régime 40 t) :",
    options: ["8 t", "13 t", "19 t", "26 t"],
    correct: 1,
    expl: "13 t par essieu isolé en règle générale. Entre 40 et 44 t, ça peut descendre à 12 t sur l'essieu le plus chargé (règles plus strictes)."
  },
  {
    id: "su-7", category: "surcharge",
    q: "Un contrôle surcharge peut entraîner :",
    options: ["Un sourire et un sticker", "Amende, immobilisation, déchargement, poursuites entreprise, assurance qui chipote en cas de sinistre", "Un bonus malus gasoil", "La hausse automatique du PTAC"],
    correct: 1,
    expl: "Et un accident en surcharge, c'est le dossier pénal qui s'ouvre. Pas un détail admin."
  },
  {
    id: "su-8", category: "surcharge",
    q: "Avant le départ, le contrôle des masses consiste à :",
    options: ["Estimer au feeling du parachoc", "Documents, nature de la marchandise, pesée si doute, calcul CU, regarder les essieux / l'assiette", "Remplir jusqu'au toit bâche", "Demander à l'ART"],
    correct: 1,
    expl: "Pro = tu sais ce que tu charges (densité). Les ferrailleurs et les citernes ne se chargent pas comme du polystyrène."
  },
  {
    id: "su-9", category: "surcharge",
    q: "Dépasser la charge utile (CU), c'est :",
    options: ["OK si le volume reste libre", "Une surcharge au regard du PMA/PTAC", "Un problème seulement pour l'EGR", "Corrigé par le frein moteur"],
    correct: 1,
    expl: "CU = ce que tu as le droit de mettre DEDANS (et passagers / accessoires selon définitions du cours). Au-dessus = hors jeu."
  },

  /* ===================== PTAC ===================== */
  {
    id: "ptac-1", category: "ptac",
    q: "Qu'est-ce que le PTAC ?",
    options: ["Le poids à vide usine", "Le Poids Total Autorisé en Charge du VÉHICULE SEUL (véhicule + chargement + occupants)", "La masse de l'ensemble tracteur + semi toujours", "La puissance fiscale"],
    correct: 1,
    expl: "Véhicule isolé. Sur la carte grise, case F.2 (MMA du véhicule). On ne confond pas avec le PTRA (F.3)."
  },
  {
    id: "ptac-2", category: "ptac",
    q: "Qui fixe le PTAC ?",
    options: ["Le conducteur chaque matin", "Le constructeur, validé administrativement, en tenant compte essieux, freins, structure", "Le client chargeur", "L'ART"],
    correct: 1,
    expl: "Tu ne « déclares » pas 32 t sur un 19 t parce que la caisse est grande. La plaque et la carte grise font foi."
  },
  {
    id: "ptac-3", category: "ptac",
    q: "Pour un véhicule isolé, la MMA est :",
    options: ["Toujours 40 t", "Égale au PTAC", "Égale au PTRA", "PV + PTRA"],
    correct: 1,
    expl: "Isolé : un seul véhicule → MMA = PTAC. La CU = PTAC − PV."
  },
  {
    id: "ptac-4", category: "ptac",
    q: "Un porteur d'aspect imposant peut-il avoir un PTAC bas ?",
    options: ["Impossible", "Vrai : le PTAC dépend de l'homologation, pas de l'impression visuelle", "Seulement les frigos", "Seulement à 4 essieux"],
    correct: 1,
    expl: "Piège cours : on lit la plaque, on ne charge pas « à l'œil »."
  },
  {
    id: "ptac-5", category: "ptac",
    q: "PV + chargement réel =",
    options: ["PTRA", "Poids réel (PR) ; il doit rester ≤ PTAC (isolé) ou ≤ MMA (ensemble)", "CU", "Toujours 19 t"],
    correct: 1,
    expl: "PR = ce que tu pèses aujourd'hui. PTAC/MMA = le plafond. PR ≤ plafond."
  },
  {
    id: "ptac-6", category: "ptac",
    q: "La charge utile d'un véhicule isolé se calcule :",
    options: ["PTAC + PV", "PTAC − PV", "PTRA − PTAC", "PV − 13 t"],
    correct: 1,
    expl: "CU = ce que tu peux ajouter. Plus le PV est lourd (grue, hayon, plein, chauffeur… selon convention du cours), plus la CU fond."
  },
  {
    id: "ptac-7", category: "ptac",
    q: "Où lit-on le PTAC ?",
    options: ["Uniquement dans le carnet de voyage", "Sur la carte grise (F.2) et souvent sur la plaque constructeur", "Sur le pneu avant gauche", "Dans l'EBS"],
    correct: 1,
    expl: "Contrôle, calcul MMA, discussion chargeur : tu sais où lire."
  },
  {
    id: "ptac-8", category: "ptac",
    q: "Avec une remorque attelée, le PTAC du porteur :",
    options: ["Disparaît", "Reste une limite pour LE porteur : on ne l'écrase pas même si l'ensemble a une MMA de 40 t", "Devient 44 t auto", "Est remplacé par la largeur"],
    correct: 1,
    expl: "Chaque élément a son PTAC. La MMA d'ensemble est un AUTRE plafond. On respecte les deux mondes."
  },
  {
    id: "ptac-9", category: "ptac",
    q: "PTAC maximal d'une remorque isolée à 3 essieux :",
    options: ["19 t", "26 t", "32 t", "40 t"],
    correct: 1,
    expl: "Remorque 3 essieux ou plus : 26 t. Attention, ce n'est pas 32 t (32 t = moteur à 4 essieux)."
  },

  /* ===================== PTRA ===================== */
  {
    id: "ptra-1", category: "ptra",
    q: "Qu'est-ce que le PTRA ?",
    options: ["Le poids à vide du tracteur", "Le Poids Total Roulant Autorisé de l'ENSEMBLE que le véhicule moteur a le droit de faire rouler", "La somme des PV", "Le couple maxi"],
    correct: 1,
    expl: "PTRA = plafond constructeur / homologation pour tracteur+remorqué(s). Carte grise F.3."
  },
  {
    id: "ptra-2", category: "ptra",
    q: "Dans le calcul de MMA d'un ensemble, le PTRA est :",
    options: ["Ignoré", "L'un des 3 critères : on prend le PLUS PETIT (PTRA, loi essieux, addition)", "Toujours le gagnant", "Additionné au PTAC"],
    correct: 1,
    expl: "Méthode FIMO : 3 nombres, on garde le mini. Le PTRA peut être le maillon faible (ex. 40 t alors que l'addition ferait 45)."
  },
  {
    id: "ptra-3", category: "ptra",
    q: "Un porteur isolé utilise-t-il son PTRA ?",
    options: ["Oui, la MMA isolée = PTRA", "Non : isolé → MMA = PTAC. Le PTRA sert dès qu'il Y A attelage", "Oui si 2 essieux", "Uniquement en recul"],
    correct: 1,
    expl: "Sans remorque, le PTRA ne « gonfle » pas le droit à charger le porteur au-delà du PTAC."
  },
  {
    id: "ptra-4", category: "ptra",
    q: "Pour circuler à 44 t, le PTRA du véhicule moteur doit être :",
    options: ["Valoir 38 t", "Être de 44 t (entre autres conditions)", "Être égal au PV", "Être de 19 t"],
    correct: 1,
    expl: "Condition classique : PTRA 44 t + 5 essieux min + suspensions pneumatiques + PTAC d'attelage au max selon le cas. Sinon on retombe à 40 t (ou 38 t à 4 essieux)."
  },
  {
    id: "ptra-5", category: "ptra",
    q: "PTRA 40 t, loi des essieux 40 t, addition 45 t. Quelle est la MMA ?",
    options: ["45 t", "40 t", "85 t", "19 t"],
    correct: 1,
    expl: "Le plus petit = 40. L'addition 45 est un piège : on ne la garde pas."
  },
  {
    id: "ptra-6", category: "ptra",
    q: "Où est indiqué le PTRA ?",
    options: ["Nulle part", "Carte grise du véhicule MOTEUR (F.3) / plaque", "Uniquement sur la semi", "Sur le disque de chrono"],
    correct: 1,
    expl: "C'est une capa du tracteur / porteur qui TRACTE, pas un tampon sur la caisse de la remorque."
  },
  {
    id: "ptra-7", category: "ptra",
    q: "PTRA 38 t, autres critères 40 t. Quelle est la MMA ?",
    options: ["On roule à 40 t, le PTRA est indicatif", "MMA = 38 t : le constructeur / l'homologation limite l'ensemble", "On ajoute 2 t d'AdBlue", "On relève un essieu pour tricher"],
    correct: 1,
    expl: "On ne dépasse JAMAIS le PTRA, même si la loi des essieux est plus généreuse."
  },
  {
    id: "ptra-8", category: "ptra",
    q: "Quelle affirmation est exacte ?",
    options: ["PTRA ≤ PTAC toujours", "Le PTRA est en général SUPÉRIEUR au PTAC (on tracte en plus de soi)", "PTRA = largeur × hauteur", "PTAC sert seulement aux VL"],
    correct: 1,
    expl: "Exemple : PTAC 19 t, PTRA 44 t. Isolé tu restes à 19. Attelé tu joues avec 38/40/44 selon le reste."
  },

  /* ===================== DIMENSIONS ===================== */
  {
    id: "dim-1", category: "dimensions",
    q: "Longueur maximale d'un porteur isolé :",
    options: ["6 m", "12 m", "16,50 m", "18,75 m"],
    correct: 1,
    expl: "Porteur = 12 m. 16,50 m = articulé (tracteur+semi). 18,75 m = train routier (porteur+remorque)."
  },
  {
    id: "dim-2", category: "dimensions",
    q: "Longueur maximale d'un articulé (tracteur + semi) :",
    options: ["12 m", "16,50 m", "18,75 m", "24,50 m"],
    correct: 1,
    expl: "16,50 m pour l'articulé marchandises standard. Ne pas coller la valeur du train routier."
  },
  {
    id: "dim-3", category: "dimensions",
    q: "Longueur maximale d'un train routier (porteur + remorque) :",
    options: ["12 m", "16,50 m", "18,75 m", "20 m pile"],
    correct: 2,
    expl: "18,75 m. Piège : beaucoup répondent 16,50 par confusion avec la semi."
  },
  {
    id: "dim-4", category: "dimensions",
    q: "Largeur maximale hors véhicule frigorifique :",
    options: ["2,00 m", "2,55 m", "2,60 m", "3,00 m"],
    correct: 1,
    expl: "2,55 m. Les rétros, feux de gabarit, bâches selon règles, ne se comptent pas comme la caisse."
  },
  {
    id: "dim-5", category: "dimensions",
    q: "Largeur maximale d'un véhicule à parois épaisses (frigo) :",
    options: ["2,55 m", "2,60 m", "2,75 m", "3,50 m"],
    correct: 1,
    expl: "2,60 m pour l'isolation. Ce n'est pas un droit à « tirer large » pour un tautliner standard."
  },
  {
    id: "dim-6", category: "dimensions",
    q: "En France, la hauteur des PL est :",
    options: ["Strictement limitée à 3,00 m", "Souvent enseignée comme NON limitée par le code, mais 4 m est la référence pratique (ponts, 4,30 m d'ouvrages…)", "Limitée à 12 m", "Limitée à 2,55 m"],
    correct: 1,
    expl: "Piège de cours : beaucoup croient « 4 m max légal ». En France on insiste sur l'absence de limite unique, ET sur l'obligation de connaître son gabarit / itinéraire. Tu mesures, tu lis les panneaux."
  },
  {
    id: "dim-7", category: "dimensions",
    q: "Les rétroviseurs comptent-ils dans les 2,55 m ?",
    options: ["Oui, toujours, on les démonte", "Non, en général non comptabilisés (comme certains feux de gabarit), dans les règles du gabarit", "Uniquement à droite", "Uniquement en 44 t"],
    correct: 1,
    expl: "Sinon aucun PL ne passerait. En revanche tu ne charges pas une palette qui dépasse au-delà du droit à saillie."
  },
  {
    id: "dim-8", category: "dimensions",
    q: "Les tampons et timons d'attelage, dans la longueur légale :",
    options: ["Toujours comptés en plus des 12 m", "Souvent enseignés comme non comptabilisés (selon cours dimensions FIMO)", "Comptent double", "Remplacent le PTAC"],
    correct: 1,
    expl: "Point de cours LegiTrans / FIMO : tampons et timons ne sont pas comptabilisés dans ces longueurs types. On reste sur les valeurs 12 / 16,50 / 18,75."
  },
  {
    id: "dim-9", category: "dimensions",
    q: "Un porteur mesure 13,20 m. Est-ce autorisé ?",
    options: ["OK, c'est presque 12", "Hors gabarit longueur isolé (12 m) sauf véhicule spécial / convoi", "OK si PTRA 44", "OK la nuit"],
    correct: 1,
    expl: "12 m n'est pas une moyenne, c'est un max pour l'isolé standard."
  },
  {
    id: "dim-10", category: "dimensions",
    q: "Pont indiqué 3,90 m, véhicule haut de 4,10 m. Que faire ?",
    options: ["Passe, la hauteur n'est jamais limitée", "Ne passe pas : tu es responsable du gabarit réel même si « le code ne met pas 4 m »", "Passe si Front Assist on", "Passe à vide seulement"],
    correct: 1,
    expl: "La pratique bat la théorie du QCM. Panneau = loi du moment. On détourne. Un toit arraché, c'est toi."
  },

  /* ===================== ESSIEUX / PTAC MAX ===================== */
  {
    id: "es-1", category: "essieux",
    q: "PTAC maximal d'un véhicule à moteur à 2 essieux :",
    options: ["13 t", "19 t", "26 t", "32 t"],
    correct: 1,
    expl: "Loi des essieux isolés : 2 essieux = 19 t. À retenir par cœur."
  },
  {
    id: "es-2", category: "essieux",
    q: "PTAC maximal d'un véhicule à moteur à 3 essieux :",
    options: ["19 t", "26 t", "32 t", "40 t"],
    correct: 1,
    expl: "3 essieux = 26 t. Porteur « 26 tonnes » du quotidien."
  },
  {
    id: "es-3", category: "essieux",
    q: "PTAC maximal d'un véhicule à moteur à 4 essieux ou plus :",
    options: ["26 t", "32 t", "38 t", "44 t"],
    correct: 1,
    expl: "4 essieux isolés = 32 t. Pas 38 (38 = ensemble 4 essieux), pas 44 (ensemble 5+ sous conditions)."
  },
  {
    id: "es-4", category: "essieux",
    q: "PTAC maximal d'une remorque isolée à 2 essieux :",
    options: ["13 t", "19 t", "26 t", "32 t"],
    correct: 1,
    expl: "Comme un moteur 2 essieux : 19 t."
  },
  {
    id: "es-5", category: "essieux",
    q: "PTAC maximal d'une remorque isolée à 3 essieux ou plus :",
    options: ["19 t", "26 t", "32 t", "38 t"],
    correct: 1,
    expl: "26 t, pas 32. Le 32 t est pour le VÉHICULE À MOTEUR à 4 essieux."
  },
  {
    id: "es-6", category: "essieux",
    q: "Ensemble à 4 essieux : plafond de la loi des essieux :",
    options: ["32 t", "38 t", "40 t", "44 t"],
    correct: 1,
    expl: "4 essieux = 38 t. Impossible d'aller à 44 : il faut AU MOINS 5 essieux."
  },
  {
    id: "es-7", category: "essieux",
    q: "Ensemble à 5 essieux ou plus, hors 44 t : plafond =",
    options: ["38 t", "40 t", "32 t", "26 t"],
    correct: 1,
    expl: "40 t par défaut. 44 t seulement si TOUTES les conditions sont réunies."
  },
  {
    id: "es-8", category: "essieux",
    q: "Pour le 44 t, le nombre d'essieux minimum est :",
    options: ["3", "4", "5", "8"],
    correct: 2,
    expl: "Au moins 5. Un 2+2 (4 essieux) reste à 38 t max, même PTRA 44."
  },
  {
    id: "es-9", category: "essieux",
    q: "44 t articulé : PTAC minimal d'une semi à 3 essieux :",
    options: ["26 t", "32 t", "38 t", "44 t"],
    correct: 2,
    expl: "Semi 3 essieux → PTAC 38 t. Semi 2 essieux → 37 t. Sinon pas de 44 t."
  },
  {
    id: "es-10", category: "essieux",
    q: "44 t articulé : PTAC minimal d'une semi à 2 essieux :",
    options: ["19 t", "26 t", "37 t", "40 t"],
    correct: 2,
    expl: "37 t. Une semi 2 essieux à 32 t ne « fait pas » le 44 t."
  },
  {
    id: "es-11", category: "essieux",
    q: "Pour le 44 t, les suspensions du véhicule moteur doivent être :",
    options: ["À lames obligatoirement", "Pneumatiques ou équivalent", "Inexistantes", "Hydrauliques de hayon"],
    correct: 1,
    expl: "Condition officielle. Lames seules → souvent 40 t."
  },
  {
    id: "es-12", category: "essieux",
    q: "Porteur 26 t (3 essieux) + remorque 19 t (2 essieux), PTRA 44 t, conditions 44 t OK. Loi des essieux :",
    options: ["38 t", "40 t", "44 t", "19 t"],
    correct: 2,
    expl: "C'est l'exemple type des cours : porteur 26 + remorque 19, 5 essieux, PTRA 44, pneumatique → on joue dans le 44 t (puis on recoupe avec l'addition et le PTRA)."
  },
  {
    id: "es-13", category: "essieux",
    q: "Pour compter les essieux d'un ensemble, on :",
    options: ["Compter seulement le tracteur", "Additionner TOUS les essieux au sol du tracteur/porteur ET du remorqué", "Compter les roues et diviser par 8", "Ignorer l'essieu relevé s'il est baissé"],
    correct: 1,
    expl: "Essieu relevé : s'il est relevé, il ne porte pas (et souvent ne compte pas comme portant). Piège : un essieu relevé pour « passer » un gabarit vs masse. En QCM, on te donne le nombre d'essieux du schéma."
  },
  {
    id: "es-14", category: "essieux",
    q: "Tracteur 2 essieux + semi 3 essieux. Cela correspond à :",
    options: ["3 essieux, 26 t", "4 essieux, 38 t", "5 essieux, 40 t (ou 44 t si conditions)", "6 essieux, 32 t"],
    correct: 2,
    expl: "Le classique « tautliner 13,60 ». 2+3=5. Plafond 40 ou 44, jamais 38 (le 38 c'est 4 essieux)."
  },
  {
    id: "es-15", category: "essieux",
    q: "Tracteur 2 essieux + semi 2 essieux. Loi des essieux :",
    options: ["40 t", "38 t", "44 t", "19 t"],
    correct: 1,
    expl: "4 essieux = 38 t. Même si le PTRA affiche 44. Piège ultra classique des exos."
  },

  /* ===== Pièges croisés / plus de QCM ===== */
  {
    id: "mix-1", category: "abs",
    q: "Parmi ABS, ASR et ESP, lequel empêche le blocage au freinage ?",
    options: ["ASR", "ABS", "EGR", "ART"],
    correct: 1,
    expl: "ABS = antiblocage au frein. ASR = antipatinage à l'accélération. ESP = trajectoire.",
    scene: "aides"
  },
  {
    id: "mix-2", category: "asr",
    q: "Parmi ABS, ASR et ESP, lequel limite le patinage à l'accélération ?",
    options: ["ABS", "AFU", "ASR", "Front Assist"],
    correct: 2,
    expl: "ASR = Anti-Slip. À l'accélération, une roue motrice file : l'ASR coupe le couple ou freine cette roue.",
    scene: "aides"
  },
  {
    id: "mix-3", category: "esp",
    q: "En freinage sur chaussée mouillée, quelle aide limite le pliage de l'ensemble ?",
    options: ["Vanne EGR", "ESP / EBS (accord tracteur-remorque + stabilité)", "Le limiteur 90", "Le déflecteur"],
    correct: 1,
    expl: "Le pliage, c'est de la dynamique d'attelage. EBS aligne les freinages, ESP corrige le lacet. Rien à voir avec l'EGR."
  },
  {
    id: "ebs-10", category: "ebs",
    q: "Le flexible jaune d'un attelage correspond à :",
    options: ["L'alimentation (pression permanente remorque)", "La commande de freinage (signal « je freine »)", "Le gazole", "L'AdBlue"],
    correct: 1,
    expl: "Jaune = commande. Rouge = alimentation. Tu les rebranches dans le bon sens, à fond, et tu vérifies l'accrochage."
  },
  {
    id: "ebs-11", category: "ebs",
    q: "Le flexible rouge d'un attelage correspond à :",
    options: ["La commande de frein", "L'alimentation en air de la remorque (réservoir / park)", "Le chauffage cabine", "Le retour EGR"],
    correct: 1,
    expl: "Rouge = alim. Sans lui, la remorque n'a pas d'air « de fond » et le park remorque peut rester serré ou se serrer."
  },
  {
    id: "fr-14", category: "freinage",
    q: "Avant de quitter le poste de conduite :",
    options: ["Point mort suffît, moteur tournant", "Frein de park, éventuellement cales, moteur selon consignes", "Seulement l'ART on", "Boîte en 1ère sans park"],
    correct: 1,
    expl: "Le service (pédale) ne tient pas tout seul. Park obligatoire. Pente / lourds : cales. C'est du réflexe FIMO."
  },
  {
    id: "fr-15", category: "freinage",
    q: "Purger les bouteilles d'air sert à :",
    options: ["Baisser le PTAC", "Évacuer condensats (eau/huile) qui gèlent, corrodent et ramollissent le freinage", "Remplir l'AdBlue", "Calibrer l'ART"],
    correct: 1,
    expl: "Contrôle journalier. L'eau dans l'air = hiver = valves coincées, park capricieux, service mou."
  },
  {
    id: "ral-13", category: "ralentisseurs",
    q: "En descente, rétrograder trop tard, moteur déjà emballé :",
    options: ["Est parfait pour le Telma", "Peut rater le rapport / détruire la boîte : on rétrograde AVANT, on stabilise tôt", "Coupe l'ESP", "Augmente la CU"],
    correct: 1,
    expl: "On choisit le rapport en haut de col, pas au milieu du mur. Le continu a besoin d'un régime, pas d'un moteur en sur-régime paniqué."
  },
  {
    id: "ral-14", category: "ralentisseurs",
    q: "Frein moteur, ralentisseur et léger frein de service :",
    options: ["Interdit, un seul à la fois", "C'est souvent la bonne recette montagne, le service reste l'appoint", "Uniquement à vide", "Uniquement si PTRA 44"],
    correct: 1,
    expl: "On empile le continu, on pique le service si l'allure monte encore. On ne « cale » pas le pied 4 km."
  },
  {
    id: "co-13", category: "conduite",
    q: "Que faire ?",
    options: ["Garder ce rapport, c'est toujours plus économe", "Rétrograder pour revenir dans la zone de couple", "Activer l'AFU", "Couper l'EBS"],
    correct: 1,
    expl: "Un grand rapport n'est économe que si le moteur reste dans sa plage utile. S'il s'étouffe, on rétrograde.",
    context: "Côte. Le rapport est trop long : le régime tombe sous la zone verte de ce moteur, le moteur s'étouffe, la vitesse diminue.",
    scene: "tacho-low"
  },
  {
    id: "co-14", category: "conduite",
    q: "Des palettes mal arrimées dans la caisse :",
    options: ["N'a pas d'effet sur le freinage", "Déplace la masse, peut surcharge un essieu, transperce la cabine au coup de frein", "Est corrigé par l'ABS seulement", "Est OK sous le PTAC"],
    correct: 1,
    expl: "FIMO chargement : sangles, tapis antiglisse, répartition. L'électronique ne cloue pas les palettes au plancher."
  },
  {
    id: "cp-11", category: "couple",
    q: "Le régime de puissance maximale se situe :",
    options: ["Plus BAS que le régime de couple max", "Plus HAUT que le régime de couple max", "Au ralenti", "Uniquement au point mort"],
    correct: 1,
    expl: "P = couple × régime. Le pic de puissance est plus haut dans les tours que le pic de couple. Pour la conso, on vit côté couple (zone verte).",
    scene: "curves",
    context: "Courbes d'un diesel : le couple max (bleu) culmine avant la puissance max (orange). La zone verte est autour du couple, pas autour de la puissance."
  },
  {
    id: "cp-12", category: "couple",
    q: "Accélérer en tout ou rien :",
    options: ["Le plus rationnel", "Fait exploser la conso et les à-coups de charge : on dose, on laisse le turbo et le couple", "Obligatoire en 44 t", "Protège l'EGR"],
    correct: 1,
    expl: "Pied progressif = turbo, couple, litres. Le on/off, c'est le contraire du stage éco."
  },
  {
    id: "ptac-10", category: "ptac",
    q: "Hayon, grue, carburant et conducteur réduisent surtout :",
    options: ["Rien, le PTAC bouge", "Le PV réel donc la CU restante", "Le PTRA légal du code", "La largeur 2,55 m"],
    correct: 1,
    expl: "Plus tu embarques d'équipements, moins tu charges de marchandise. La plaque CU d'origine n'est pas un droit magique si tu as ajouté une grue."
  },
  {
    id: "ptra-9", category: "ptra",
    q: "PTRA 44 t, 4 essieux, addition 45 t. Quelle est la MMA ?",
    options: ["44 t", "45 t", "38 t", "32 t"],
    correct: 2,
    expl: "4 essieux = 38 t, point. Le 44 t est illisible tant qu'il n'y a pas 5 essieux. min(44, 38, 45) = 38."
  },
  {
    id: "ptra-10", category: "ptra",
    q: "Articulé 5 essieux, 44 t OK. PTAC tracteur 19 t, PTAC semi 38 t, PV tracteur 7 t. Le 3e critère (addition) vaut :",
    options: ["19 + 38 = 57 t", "7 + 38 = 45 t", "44 + 7 = 51 t", "19 + 7 = 26 t"],
    correct: 1,
    expl: "PV tracteur + PTAC semi. 19+38 est LE piège. Ensuite min(44, 44, 45) = 44 t."
  },
  {
    id: "ess-16", category: "essieux",
    q: "Un essieu relevé en charge :",
    options: ["Change le PTAC écrit sur la carte", "Concentre le poids sur les essieux restants : risque de surcharge essieu même si le total est bon", "Est obligatoire en 44 t", "Annule l'ESP"],
    correct: 1,
    expl: "On relève pour le virage / les pneus à vide, pas pour « passer » un pont-bascule en charge. Contrôle essieu = piège."
  },
  {
    id: "ess-17", category: "essieux",
    q: "Entre 40 t et 44 t, les charges à l'essieu sont :",
    options: ["Sont plus généreuses (15 t)", "Sont plus sévères (souvent 12 t essieu le plus chargé, 27 t le tridem)", "Disparaissent", "Passent à 19 t par essieu"],
    correct: 1,
    expl: "Le 44 t n'est pas « +4 t sans contrepartie ». L'État protège les chaussées : essieux plus limités."
  },
  {
    id: "dim-11", category: "dimensions",
    q: "16,50 m est la longueur maximale de :",
    options: ["Un porteur isolé", "Un articulé (tracteur + semi)", "Un train routier porteur + remorque", "Un bus bi-articulé"],
    correct: 1,
    expl: "12 / 16,50 / 18,75 : la triade à réciter. Porteur / semi / train routier."
  },
  {
    id: "dim-12", category: "dimensions",
    q: "18,75 m est la longueur maximale de :",
    options: ["Un porteur", "Un articulé classique", "Un train routier (porteur + remorque)", "Une semi seule"],
    correct: 2,
    expl: "Porteur + remorque = le plus long des trois cas marchandises courants."
  },
  {
    id: "su-10", category: "surcharge",
    q: "Le pont-bascule indique 41,2 t pour une MMA de 40 t. Que faire ?",
    options: ["On continue, 1,2 t c'est rien", "On ne part pas / on décharge : c'est une surcharge", "L'ABS l'absorbe", "OK si ART on"],
    correct: 1,
    expl: "Tolérance 0 dans l'esprit FIMO. 41,2 c'est 41,2. On retourne à quai."
  },
  {
    id: "su-11", category: "surcharge",
    q: "Citerne à demi-volume, produit très dense. Que faut-il en conclure ?",
    options: ["Impossible de surcharger", "On peut déjà être au PMA : on se fie à la masse, pas au niveau visuel seul", "Le volume = la CU toujours", "L'EGR calcule la masse"],
    correct: 1,
    expl: "Liquides, acier, papier, palettes de boissons : le « ça a l'air vide » ne pèse pas."
  },
  {
    id: "egr-9", category: "egr",
    q: "Après un défaut pollution, le moteur passe en mode dégradé. Que faire ?",
    options: ["On ignore, on force", "Couple bridé possible : on prévient l'exploitant, on ne « saute pas » le défaut", "On débranche l'AdBlue", "On coupe l'ABS pour compenser"],
    correct: 1,
    expl: "Les PL Euro 6 se protègent. Rouler en brute sur un défaut, c'est la casse et la verbalisation."
  },
  {
    id: "afu-8", category: "afu",
    q: "L'AFU intervient surtout lorsque :",
    options: ["On freine doucement au feu", "On a tapé la pédale trop mollement alors que c'est une urgence", "On utilise le cran 3 de ralentisseur", "On stationne"],
    correct: 1,
    expl: "C'est un amplificateur d'urgence, pas un régulateur de confort."
  },
  {
    id: "fa-8", category: "front",
    q: "Un véhicule s'insère brusquement devant. Le Front Assist :",
    options: ["Gère toujours à 100 %", "Peut alerter / freiner, mais tu dois déjà lever le pied : le délai est court", "Augmente le PTRA", "Coupe l'ASR"],
    correct: 1,
    expl: "L'aide arrive après que le danger existe. L'œil et le pied d'abord."
  },
  {
    id: "art-9", category: "art",
    q: "Régler l'ART sur l'écart le plus court en permanence :",
    options: ["Le plus sûr et le plus éco", "Moins de marge, plus de yo-yo, plus de conso, plus de stress : on élargit", "Obligatoire en FIMO", "Coupe le Front Assist"],
    correct: 1,
    expl: "Distance = temps de cerveau. L'ART n'est pas un permis de coller."
  },
  {
    id: "ch-10", category: "chaine",
    q: "Le pont est le dernier démultiplicateur. Cela signifie :",
    options: ["Il coupe le couple", "Il baisse encore la vitesse de rotation et augmente le couple aux roues", "Il remplace la boîte", "Il mesure le PTAC"],
    correct: 1,
    expl: "La BV choisit un cran, le pont applique le rapport final. D'où l'importance du bon pont selon métier (chantier vs longue dist)."
  },
  {
    id: "ch-11", category: "chaine",
    q: "Bloquer le différentiel sur le sec, en virage :",
    options: ["Toujours recommandé", "Fait crier / user / casser : le blocage c'est pour le terrain glissant en ligne", "Active l'ABS", "Est obligatoire à 44 t"],
    correct: 1,
    expl: "Le diff est là pour le virage. On le bloque quand une roue n'a plus de grip, on le débloque dès que ça passe."
  },
  {
    id: "abs-11", category: "abs",
    q: "En freinage d'urgence avec ABS, la bonne technique est :",
    options: ["Pomper la pédale comme en 1995 sans ABS", "Appuyer FORT et GARDER, diriger, ne pas relâcher à cause des pulsations", "Braquer en grand et lever le pied", "Serrer le park"],
    correct: 1,
    expl: "L'ABS pompe tout seul. Toi tu restes à fond jusqu'à l'arrêt ou jusqu'à ce que le danger soit évité."
  },
  {
    id: "esp-9", category: "esp",
    q: "Pourquoi l'ESP est-il particulièrement utile sur citerne, vrac ou bétaillère ?",
    options: ["Parce que le PTRA change tout seul", "Centre de gravité haut / liquide qui ballotte = tonneau plus vite", "Parce que l'EGR est plus grosse", "Parce que la largeur est 3 m"],
    correct: 1,
    expl: "La physique du chargement d'abord, l'électronique ensuite. On aborde plus lentement."
  }
];
