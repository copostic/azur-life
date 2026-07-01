# Azur Life — Masterclass Acquisition Payante

### Cours approfondi de stratégie publicitaire : Google Ads, le moteur d'enchères, et l'écosystème cross-canal

**Version du 23 juin 2026.** Document autonome et pédagogique. Il ne se contente pas de dire *quoi* régler : il explique *comment fonctionne la machine sous le capot*, pour que chaque décision soit comprise et non subie.

---

## Avant-propos : la posture à adopter

La plupart des gens « font de la pub Google ». Toi, tu vas **piloter un système d'enchères en temps réel adossé à une IA**. Ce n'est pas la même chose. La différence entre un compte qui brûle 3 000 € (comme l'ancien) et un compte rentable ne tient pas à un secret caché, mais à la compréhension de trois mécaniques fondamentales :

1. **L'enchère** ne récompense pas le plus offrant, mais le plus *pertinent*.
2. **L'algorithme** n'optimise bien que ce qu'il peut *mesurer* — d'où la primauté absolue du tracking.
3. **L'intention** est la matière première : Google capte une demande qui existe déjà ; il ne la crée pas (c'est le rôle de Meta).

Ce cours est structuré en 4 parties : (I) la théorie qui gouverne tout, (II) l'architecture du compte Azur Life, (III) le pilotage dans le temps, (IV) la vision cross-canal Google + Meta. Lis la Partie I même si tu es pressé : sans elle, le reste n'est qu'une suite de boutons à cliquer.

---

# PARTIE I — La théorie qui gouverne tout

## 1. Comment se déroule réellement une enchère Google

À chaque recherche d'un internaute, Google organise une enchère en quelques millisecondes. Contrairement à une idée tenace, **le plus gros budget ne gagne pas**. Ce qui détermine ta position, c'est l'**Ad Rank** :

> **Ad Rank ≈ Enchère (CPC max) × Quality Score + impact des assets**

Et — point crucial — **le prix que tu paies réellement** au clic dépend de l'Ad Rank du concurrent juste en dessous de toi :

> **CPC réel = (Ad Rank du concurrent en dessous ÷ ton Quality Score) + 0,01 €**

**Conséquence stratégique majeure :** un Quality Score élevé agit comme un *diviseur* sur ton coût. Deux annonceurs peuvent viser la même position ; celui qui a le meilleur Quality Score paie moins cher pour la même place. C'est mathématique, pas magique.

Illustration concrète : si ton concurrent a un Ad Rank de 20 et que ton Quality Score est de 5, tu paies 20÷5 = 4 €. Si tu montes ton Quality Score à 10, tu paies 20÷10 = 2 €. **Tu as divisé ton coût par deux sans toucher à ton enchère.** Voilà pourquoi le Quality Score est le premier levier de rentabilité, et pourquoi l'ancien compte d'Azur Life — avec sa landing page notée 8/100 en vitesse mobile — payait probablement le prix fort sur chaque clic.

## 2. Le Quality Score décortiqué

Le Quality Score est une note de 1 à 10, par mot-clé, calculée à partir de trois composants. Des analyses sectorielles (Adalysis) estiment leurs poids ainsi :

| Composant | Poids estimé | Ce qu'il mesure | Sous le contrôle de… |
|---|---|---|---|
| **Taux de clic attendu** (Expected CTR) | ~39 % | La probabilité qu'on clique ton annonce vs les concurrents sur ce mot-clé | Tes titres, ton accroche |
| **Expérience landing page** | ~39 % | Pertinence, vitesse, mobile, absence de tromperie | Ton site |
| **Pertinence de l'annonce** | ~22 % | À quel point l'annonce répond à l'intention de la requête | Ta structure de groupes |

**Trois enseignements de cette pondération :**

- Le **taux de clic attendu** et la **landing page** pèsent chacun deux fois plus que la pertinence pure. Beaucoup d'annonceurs sur-investissent dans le « mettre le mot-clé dans le titre » (pertinence) et négligent la landing — c'est exactement l'erreur la plus coûteuse.
- Le taux de clic attendu est **relatif** : Google compare ton annonce aux autres sur la même requête, *à position égale*. Un CTR brut de 6 % peut être jugé « en dessous de la moyenne » sur un mot-clé, et 2 % « au-dessus » sur un autre. Ne te fie pas au chiffre brut.
- La landing page est le composant le plus **négligé** parce que le corriger demande du travail technique, pas juste une réécriture de titre. C'est précisément là qu'Azur Life a le plus à gagner.

**Nuance importante (à enseigner) :** Google affirme officiellement que le Quality Score « n'est pas un input direct de l'enchère » mais un *outil de diagnostic*. C'est subtil et vrai : l'enchère utilise des signaux de qualité en temps réel, plus riches que la note 1-10 figée que tu vois. Mais les *causes* sont les mêmes. Donc on ne « travaille pas le Quality Score » comme une fin ; on travaille ses trois causes (clic, intention, page), et la note suit. Vise 7+ sur tes mots-clés à fort budget ; viser 10 partout est un gaspillage d'énergie.

## 3. Les types de correspondance, ou comment on parle à la machine

Un mot-clé n'est pas un mot : c'est une **instruction de matching** donnée à Google. La syntaxe encode le degré de liberté que tu laisses à l'algorithme.

| Type | Syntaxe | Déclenche sur | Liberté laissée à Google | Risque |
|---|---|---|---|---|
| Exact | `[expertise immobilière nice]` | Le sens exact (variantes proches incluses) | Faible | Faible — contrôle max |
| Expression | `"expert succession nice"` | Toute requête contenant ce sens | Moyenne | Moyen |
| Large | `expert immobilier` | Tout ce que Google juge lié | Élevée | Élevé sans garde-fous |

**Le grand basculement de 2026 :** Google pousse massivement le **broad match (requête large) + Smart Bidding** comme combo par défaut. Et ça fonctionne — *mais seulement si deux conditions sont réunies simultanément* : (1) un tracking de conversion fiable qui nourrit l'algorithme, et (2) une gestion active et continue des mots-clés à exclure. Sans ces deux conditions, le broad match « surface des requêtes hors sujet et gaspille le budget » — c'est exactement ce qui est arrivé à l'ancien compte.

**Décision pour Azur Life :** on démarre en **exact + expression**, parce qu'on n'a NI historique de conversion NI tracking encore prouvé. Le broad match viendra plus tard, comme un outil qu'on déverrouille une fois les fondations posées. Enseigner ça, c'est enseigner la *séquence* : la bonne technique au mauvais moment est une mauvaise technique.

## 4. Pourquoi le tracking n'est pas une étape, c'est LE fondement

Voici le raisonnement que tout stratège doit intérioriser :

> Le Smart Bidding est une IA qui apprend à reconnaître les profils qui convertissent. Elle apprend à partir des conversions que tu lui montres. **Si tu ne mesures pas une conversion, elle n'existe pas pour l'algorithme.** Et si tu mesures mal (doublons, mauvais déclencheurs), tu apprends à l'algorithme à chercher les mauvaises personnes — avec une efficacité redoutable. Une IA bien réglée optimisant vers un mauvais signal est *pire* qu'un pilotage manuel, parce qu'elle se trompe à grande échelle et avec assurance.

C'est la leçon brutale de l'ancien compte : 20 conversions sur toute sa vie, un tracking douteux, 87 % du budget hors zone. La machine n'a jamais reçu de signal propre. On répare ça en Partie II avant tout le reste.

**Les conversions optimisées (Enhanced Conversions)** méritent une explication, car c'est devenu un standard 2026. Avec la disparition des cookies tiers, 5 à 17 % des conversions ne sont plus attribuables par les méthodes classiques. Les Enhanced Conversions envoient l'email/téléphone du prospect **haché en SHA-256** (un procédé cryptographique irréversible : Google ne voit jamais la donnée en clair) pour ré-attribuer ces conversions perdues en les rapprochant des comptes Google connectés. Effet double : tu *récupères* du signal, et tu *améliores* la précision du Smart Bidding. Attention cependant — une implémentation bâclée dégrade les données au lieu de les améliorer, d'où l'étape de test obligatoire.

## 5. Le funnel : où Google agit, et où il n'agit pas

Modèle mental indispensable. Le parcours d'achat se décompose en trois étages :

- **Haut de funnel (TOFU) — la prise de conscience.** La personne ne sait pas encore qu'elle a besoin de toi. *Google Search ne joue presque pas ici* (personne ne tape ce qu'il ne cherche pas). C'est le terrain de Meta, YouTube, du display.
- **Milieu de funnel (MOFU) — la considération.** La personne compare. Retargeting, contenu, preuves sociales.
- **Bas de funnel (BOFU) — l'intention.** La personne tape « expert immobilier succession Nice ». **C'est le terrain de prédilection de Google Search.** L'intention est *déclarée*, pas inférée.

**Conséquence pour Azur Life :** nos 3 campagnes Search sont des campagnes **bas de funnel** — on capte une demande qui existe déjà. C'est le canal le plus rentable au démarrage parce que l'intention est la plus chaude. La Partie IV expliquera comment Meta peut, plus tard, *créer* de la demande en amont et démultiplier l'efficacité de Google (le « halo effect »).

---

# PARTIE II — Architecture du compte Azur Life

Rappel du contexte : l'ancien compte est coupé, on repart neuf. Le seul actif récupéré est la liste des mots-clés à exclure (CSV des 150+ négatifs). Les 20 conversions de l'ancien compte sont inexploitables (anciennes, mal trackées, et le Smart Bidding exige 30 conversions sur 30 jours *glissants*, pas sur la vie du compte).

**Vue d'ensemble des 3 campagnes :**

| Campagne | Étage funnel | Budget Phase 1 | Logique stratégique |
|---|---|---|---|
| Expertise immobilière | BOFU | 280 €/mois | ROI le plus rapide, honoraires élevés, intention chaude |
| Property Management RU | BOFU | 100 €/mois | CPC dérisoire + zéro concurrent FR = ROI exceptionnel par mandat |
| Marque | BOFU défensif | 20 €/mois | Protège l'investissement des deux autres |

**Pourquoi 3 campagnes et pas 1 ni 10 ?** Règle de structure 2026 : on segmente par **distinction business réelle** (intention, marge, budget, langue), jamais par micro-variation. Trois raisons justifient une campagne séparée : marque vs hors-marque (marges et intentions différentes), services à objectifs de CPA distincts, et marchés/langues nécessitant des budgets séparés. Azur Life coche les trois. À l'inverse, **sur-découper tue le Smart Bidding** : éclater les conversions sur trop de campagnes/groupes empêche l'algorithme d'atteindre le seuil d'apprentissage sur aucune. Les « SKAG » (un mot-clé par groupe) d'il y a quelques années sont aujourd'hui contre-productifs.

---

## PHASE 1 — Le compte (fondations)

### 1.1 Créer le compte en mode Expert
- `ads.google.com`, adresse Google **dédiée** (`ads@azur-life.com`) pour que la propriété reste à l'entreprise et survive au départ de tout prestataire.
- En bas du premier écran : **« Passer en mode Expert »**. Si Google force une campagne : **« Créer un compte sans campagne »**.
- **France / GMT+1 / EUR**. ⚠️ **Définitif** — le fuseau et la devise ne changent jamais. C'est la première erreur irréversible possible.
- *Pourquoi le mode Expert :* le mode intelligent masque les mots-clés exacts, les exclusions, l'enchère manuelle et le ciblage géographique précis. Sans lui, la stratégie est physiquement inapplicable.

### 1.2 Facturation
- **Facturation → Paramètres** : entité Azur Life, TVA, moyen de paiement, paiement automatique.
- *Astuce de prudence :* seuil de facturation le plus bas au début — limite l'exposition pendant la vérification.

### 1.3 Les liaisons (fondation des données)
- **GA4** (Admin → Liens produits → Google Ads), **Google Business Profile**, **conteneur GTM**.
- *Architecture de mesure :* le pilotage des enchères s'appuiera sur la **balise native Google Ads** (latence faible, ~10-20 % plus précise que l'import GA4 pour le bidding). GA4 sert à *comprendre* le comportement et bâtir des audiences ; le natif sert à *optimiser*. On ne choisit pas, on utilise les deux à leur place.

---

## PHASE 2 — Le tracking (avant tout lancement)

### 2.1 Trois conversions distinctes
**Objectifs → Conversions → + Nouvelle action → Site Web :**
- **Formulaire** (catégorie « Soumettre un formulaire pour prospect »)
- **Clic WhatsApp** (catégorie « Contacter »)
- **Appel** (catégorie « Appeler »)

*Pourquoi séparer :* la lecture par canal est stratégique. Hypothèse à vérifier — les Russes convertiront surtout par WhatsApp, l'expertise par téléphone. Tu ne pourras adapter que ce que tu mesures séparément.

⚠️ *Conversion principale unique :* le Smart Bidding n'optimise que vers UN objectif principal. Pendant la collecte, les 3 sont « Principale ». Au passage en CPA cible, ne garde en « Principale » que la conversion à vraie valeur business (formulaire + appel) ; bascule les micro-signaux en « Secondaire » pour ne pas diluer l'apprentissage.

### 2.2 Balises GTM
1. **Conversion Linker** sur toutes les pages (stocke le gclid, le jeton du clic publicitaire). Sans elle, rien n'est attribué.
2. Une balise « Conversion Google Ads » par action, avec ID + libellé.
3. Déclencheurs : `form submission`, clic sur lien `wa.me`, clic sur lien `tel:`.
4. **Enhanced Conversions** activées dans chaque balise (voir Partie I §4 pour le pourquoi).

### 2.3 RGPD — Consent Mode v2
Obligatoire (cible UE + UK). Le bandeau cookies transmet le consentement à Google ; en cas de refus, des « pings » anonymes permettent à Google de *modéliser* les conversions manquantes. C'est une dépendance technique du site, à faire valider par qui le gère. Sans ça : risque juridique **et** perte de mesure.

### 2.4 Tester — le feu vert
GTM Mode Aperçu → test réel des 3 actions → vérifier le déclenchement → attendre le statut **« Enregistrement de conversions »** dans Google Ads (24-48 h). **Tant que ce statut n'est pas vert, on ne lance rien.** C'est la règle qui aurait sauvé l'ancien compte.

### 2.5 Liste de négatifs au niveau compte
**Outils → Bibliothèque partagée → Listes de mots-clés à exclure.** Crée la liste, importe le CSV de l'ancien compte, applique-la aux 3 campagnes. *Pourquoi au niveau compte :* avec la montée du broad match, le standard 2026 est de bloquer des thèmes entiers (« emploi », « gratuit », « pas cher ») partout d'un coup. L'ancien compte mettait ses exclusions au niveau groupe → non généralisées → dérives non bloquées.

---

## PHASE 3 — Campagne 1 : Expertise immobilière

### Paramètres
| Réglage | Valeur | Justification |
|---|---|---|
| Type | Search seul (Display décoché) | Le Display = bannières sur sites tiers, clics accidentels. On veut l'intention déclarée pure. |
| Budget | 9,20 €/jour (≈ 280 €/mois) | Google peut dépasser 2× un jour donné mais jamais budget×30,4 sur le mois → 280 € plafonnés. |
| Enchère | CPC manuel, plafond 6 € | CPC immobilier 2026 ≈ 2,5-3,2 € en résidentiel ; le juridique/IFI est plus cher. 6 € laisse de la marge sans dérapage. |
| Zones | 06 + 20 km, **Présence** | « Présence ou intérêt » = la cause des 87 % de budget gaspillé. Voir §ciblage. |
| Langue | Français | |
| Calendrier | Lun-Sam 8h-20h | |

### Le ciblage géographique, expliqué
Déplie **« Options de zone géographique »** (replié par défaut — le piège n°1) et choisis **« Présence : personnes se trouvant dans vos zones ciblées »**. L'option « intérêt » déclenchait l'annonce pour un Parisien lisant un article sur Monaco. *Règle générale :* la géo de ciblage dit *où est physiquement la personne* ; quand tu veux des non-résidents (cf. Property Management), tu cibles physiquement leur pays et tu mets la géo de destination *dans le mot-clé*.

### Les 4 groupes d'annonces et leurs mots-clés
Structure thématique (3-10 groupes par campagne est l'optimum 2026). Chaque groupe = une intention = une annonce sur-mesure → meilleur Quality Score → CPC plus bas.

**GA-EXP-1 — Expert local (~35 % budget)**
```
[expert immobilier Côte d'Azur]
[expert immobilier Alpes-Maritimes]
[expertise immobilière Nice]
[expertise immobilière Menton]
[expert immobilier Beaulieu-sur-Mer]
[expert immobilier Monaco]
"expert immobilier indépendant 06"
"expertise immobilière 06"
"cabinet expertise immobilière Nice"
```

**GA-EXP-2 — Succession / divorce (~25 %)**
```
[expertise immobilière succession]
[expertise immobilière divorce]
"expertise valeur vénale succession"
"estimation bien immobilier succession"
"évaluation bien immobilier donation"
"expert immobilier succession Nice"
```

**GA-EXP-3 — IFI / valeur vénale (~20 %, saisonnier jan-juin)**
```
[expertise immobilière IFI]
[valeur vénale immobilier]
"évaluation patrimoine immobilier IFI"
"expertise fiscale bien immobilier"
"expert valeur vénale Nice"
```

**GA-EXP-4 — Judiciaire / contentieux (~20 %)**
```
[expertise immobilière judiciaire]
"expert judiciaire immobilier Nice"
"expertise immobilière crédit"
"expertise cession parts immobilières"
"expert immobilier agréé tribunal Nice"
```

### Les mots-clés à exclure (liste compte)
| Catégorie | Termes |
|---|---|
| Emploi/formation | emploi, recrutement, salaire, poste, job, formation, BTS, école, cours, devenir, stage |
| Estimation gratuite | gratuit, offert, sans frais, en ligne, simulateur, SeLoger, MeilleursAgents, DVF, Leboncoin, PAP |
| Diagnostics | diagnostic, DPE, amiante, plomb, électricité, gaz, état des risques, diagnostiqueur |
| Concurrents | Foncia, Orpi, Safti, Efficity, Capifrance, OptimHome, Arthurimmo, Saretec, Stelliant, BCA, Texa |
| Hors zone | Bordeaux, Paris, Lyon, Marseille, Grenoble, Île-de-France, Réunion, Guyane |
| Mauvaises intentions | fissure, sinistre, promoteur, VEFA, programme neuf, HLM, APL, CAF, syndic, copropriété |

### Les annonces (RSA) — méthode
Le RSA accepte jusqu'à 15 titres et 4 descriptions, que Google combine et teste. **Méthode pour un bon Ad Strength :**
- Fournis 8-10 titres *qui couvrent des angles différents* (métier, bénéfice, preuve, urgence, géo). Ne répète pas le même message reformulé.
- N'épingle que 1-2 titres essentiels. *Pourquoi :* épingler les 15 tue le test combinatoire, qui est l'intérêt même du RSA. Épingle l'accroche obligatoire, libère le reste.
- **Tendance 2026 — ton conversationnel :** avec les résumés IA (AI Overviews) dans les SERP, les internautes formulent des requêtes plus longues et contextuelles. Les annonces qui *répondent à la question* battent les titres rigides bourrés de mots-clés. Mixe titres « métier » et titres « réponse/bénéfice ».

**GA-EXP-1 — exemple complet :**

Titres :
```
Expert Immobilier Côte d'Azur        ← épinglé pos. 1
Master II Droit • 6 Langues          ← épinglé pos. 2
Expertise Indépendante & Certifiée
Succession · IFI · Divorce · Judiciaire
Résultat en 48h • Dispo Urgences
Cabinet Azur Life — Beaulieu
Rapport d'Expertise Officiel & Signé
Discrétion & Confidentialité Assurée
Besoin d'une valeur vénale fiable ?
Entre Nice et Monaco, sur mesure
```
Descriptions :
```
Expert immobilier indépendant sur la Côte d'Azur. Master II Droit, 6 langues. Succession, IFI, divorce, judiciaire. Devis gratuit.
Cabinet d'expertise multi-services entre Nice et Monaco. Réactivité, confidentialité, rapport opposable. Contactez-nous.
```
URL affichée : `azur-life.com/expertise-immobiliere`

**GA-EXP-3 — variante IFI (saisonnière) :**

Titres : `Expertise IFI — Côte d'Azur` (épinglé) · `Valeur Vénale Certifiée Master II` (épinglé) · `Rapport IFI Officiel en 48h` · `Alpes-Maritimes · Monaco · Var` · `Indépendant — Pas d'Agence`
Description : `Déclaration IFI à préparer ? Rapport d'expertise immobilière opposable. Expert indépendant, Master II Droit, Côte d'Azur. Délai express.`

### Les assets (ex-extensions) — non négociables en 2026
Ils agrandissent l'annonce, montent le CTR *et* le Quality Score. Une annonce sans assets est handicapée dans l'enchère.

| Asset | Contenu | Niveau |
|---|---|---|
| Liens annexes ×4 | Succession / IFI / Judiciaire / Devis | Campagne |
| Accroches ×6-8 | Master II Droit · 6 Langues · Indépendant · Réponse 48h · Confidentialité · Nice-Monaco | Campagne |
| Extraits structurés | « Services » : Succession, IFI, Divorce, Judiciaire, Crédit, Cession parts | Campagne |
| Asset d'appel | 06 23 53 19 55 + suivi d'appel | Campagne |
| Asset de lieu | Fiche Google Business | Compte |
| Formulaire prospect | Nom, Tél, Email, Type d'expertise | Campagne |

⚠️ **Les call-only ads n'existent plus depuis 2026** : le téléphone passe par l'asset d'appel sur annonces classiques.

---

## PHASE 4 — Campagne 2 : Property Management (Russe d'abord)

**La logique stratégique mérite d'être enseignée comme un cas d'école.** Avec 100 €/mois :
- En russe (CPC 0,60-1,50 €) → 70 à 150 clics/mois → assez pour tester la landing.
- En FR/EN (CPC 3-5 €) → ~2 clics/jour répartis sur 2 langues → l'algorithme n'apprend rien, la donnée est inexploitable.

Le marché russe cumule **CPC dérisoire + quasi-aucun concurrent français**. Et la valeur d'un mandat (4 000-7 000 €/an) est telle qu'**un seul contrat signé rentabilise des mois de budget**. C'est l'illustration parfaite d'un principe : *concentrer un petit budget là où l'asymétrie coût/valeur est maximale, plutôt que de le saupoudrer.*

### Paramètres
| Réglage | Valeur |
|---|---|
| Type | Search seul |
| Budget | 3,30 €/jour (≈ 100 €/mois) |
| Enchère | CPC manuel, plafond 1,50 € |
| Zones | Russie (Moscou, St-Pétersbourg), **Présence** |
| Langue | Russe |
| Calendrier | 7j/7 8h-22h (heure de Paris) |

### Mots-clés (cyrillique — la géo est DANS le mot-clé)
```
[управление недвижимостью Лазурный берег]
[управление недвижимостью Ницца]
"управление виллой Франция"
"доверительное управление недвижимостью"
"управление имуществом за рубежом"
"недвижимость Лазурный берег управление"
```
*Pourquoi :* on cible physiquement la Russie (les propriétaires sont chez eux). Le mot-clé doit contenir « Лазурный берег » (Côte d'Azur) ou « Ницца » (Nice), sinon on capte de la gestion immobilière *en* Russie — hors sujet.

### Annonce russe
Titres : `Управление недвижимостью — Лазурный берег` (épinglé) · `Наталья — носитель русского языка` (épinglé) · `Вилла или квартира — мы управляем` · `Конфиденциально • Надёжно • Прозрачно` · `Годовой договор — без посредников`
Descriptions :
```
Azur Life — доверительное управление вашей недвижимостью на Лазурном берегу. Технический надзор, ремонт, аренда. Носитель русского языка. Свяжитесь с Натальей.
Профессиональное управление виллой или апартаментами между Ниццей и Монако. Прозрачные тарифы, годовой договор. Бесплатная консультация.
```
*Titre clé :* « Наталья — носитель русского языка » (Natalia, russophone native) — le différenciateur décisif pour cette clientèle.

### Assets et exclusions
- Asset d'appel **+ WhatsApp** (canal de conversion privilégié des Russes). Formulaire en russe avec champ WhatsApp.
- ⚠️ **Ce n'est PAS de la conciergerie Airbnb.** Exclus : airbnb, booking, conciergerie, ménage, nettoyage, location vacances, séjour, syndic, copropriété, pas cher, low cost. On vise le **mandat de gestion premium annuel**.

---

## PHASE 5 — Campagne 3 : Marque (défensive)

### Le raisonnement
Un concurrent peut acheter le mot-clé « Azur Life » pour intercepter tes prospects. La campagne marque verrouille ta présence n°1 sur ton propre nom. Comme ton annonce est ultra-pertinente sur ton nom, ton Quality Score est quasi parfait → tu paies quelques centimes → **20 €/mois suffisent**. C'est l'assurance la moins chère du compte.

### Paramètres et mots-clés
| Réglage | Valeur |
|---|---|
| Budget | 0,70 €/jour (≈ 20 €/mois) |
| Enchère | CPC manuel, plafond 0,40 € |
| Zones | FR + zones étrangères, « Présence ou intérêt » toléré (hors-sujet nul sur un nom propre) |

Mots-clés : `[azur life]` · `[azur-life]` · `[azur life immobilier]` · `[azur life beaulieu]` · `[azur life natalia]` · `"azur life"`
À exclure : `[life immobilier]`, `[azur properties]`, `[azur real estate]`, emploi, recrutement, formation.

⚠️ **Pas de mots-clés génériques ici** (« agence immobilière Beaulieu ») — c'est le rôle des campagnes 1 et 2. Mélanger fausserait la lecture des performances de chaque campagne.

Annonce : `Azur Life — Site Officiel` (épinglé) · `Expert Immobilier Côte d'Azur` (épinglé) · `Expertise · Property Management · Vente` · `Master II Droit • 6 Langues` · `Beaulieu — Entre Nice et Monaco`. Assets : 3 liens annexes, 4 accroches, asset d'appel.

---

# PARTIE III — Le pilotage dans le temps

## 1. La stratégie d'enchère, et son évolution

C'est le sujet le plus mal compris. Voici la doctrine, étape par étape.

**Phase de démarrage — CPC manuel.** Validé par les benchmarks 2026 : sous ~2 000 €/mois OU moins de 15 conversions/mois, le manuel reste la méthode la plus sûre. Il empêche l'IA de sur-tester et de brûler un budget limité pendant la phase d'apprentissage volatile. Azur Life coche les deux critères.

**La contrainte mathématique qu'il faut comprendre :** le Smart Bidding exige ~30 conversions sur 30 jours pour fonctionner. La règle de pouce du métier : *budget quotidien ≈ CPC cible × 20 à 30* pour atteindre ce seuil. Avec un CPC expertise ~3 €, il faudrait 60-90 €/jour (1 800-2 700 €/mois) pour y arriver rapidement — très au-dessus de nos 280 €. **Conséquence assumée et à enseigner : avec un budget volontairement prudent, on RESTE en manuel plus longtemps que la moyenne. Ce n'est pas un échec, c'est une conséquence arithmétique.** Démarrer sous ce seuil ne « fait pas économiser » : ça allonge simplement le temps avant de pouvoir basculer en automatique.

**La transition.** Dès qu'une campagne atteint ~30 conversions / 30 jours :
1. Note le CPA moyen constaté.
2. Passe en **CPA cible**, fixé *légèrement au-dessus* du constaté (constaté 70 € → cible 80 €).
3. *Pourquoi au-dessus :* un CPA cible trop bas étouffe la diffusion — l'algo n'ose plus enchérir, la campagne s'éteint. On part large, on vérifie le volume, puis on resserre.
4. Observe 2-3 semaines sans toucher, puis resserre par paliers de 10-20 %.

**Option intermédiaire.** Si le manuel devient trop chronophage et que le volume stagne, « Maximiser les clics » plafonné accélère la collecte de données — mais attention, il cherche les clics *les moins chers*, pas les meilleurs. À utiliser comme transition, pas comme destination.

⚠️ **Erreur classique à ne jamais commettre :** sauter directement en « Maximiser les conversions » ou « CPA cible » sur un compte vierge. Sans données, l'algorithme tâtonne et gaspille avec assurance. Le Smart Bidding se *mérite*.

## 2. La routine hebdomadaire (le lundi, 15-20 min)

1. **Rapport sur les termes de recherche** (Mots clés → Termes de recherche). C'est l'examen le plus rentable. Tu vois les vraies requêtes qui ont déclenché tes annonces → tu ajoutes les parasites en négatif. *Donnée sectorielle :* les comptes qui ajoutent 20+ négatifs/mois voient leur CPC baisser de 8-12 %.
2. **CPC et CTR par groupe** : repère les groupes qui coûtent sans cliquer.
3. **Conversions par canal et campagne** : où va le ROI.

*Pourquoi hebdo et pas quotidien :* chaque modification relance une phase d'apprentissage de l'algorithme et rend les données illisibles. Toucher tous les jours, c'est saboter l'apprentissage. Une fois/semaine est le bon rythme ; entre deux, on observe.

⚠️ **Ne juge jamais sur 2-3 jours.** Minimum 2 semaines + volume suffisant. Les premiers jours sont structurellement instables.

## 3. Le tableau des leviers (par ordre de priorité)

| Symptôme observé | Levier | Fréquence |
|---|---|---|
| Requêtes hors sujet | Ajouter des négatifs | Hebdo |
| Mot-clé qui coûte sans convertir | Baisser son CPC ou le mettre en pause | Hebdo |
| Mot-clé qui convertit bien | Monter son CPC (+10-20 %) | Tous les 15 j |
| CTR faible sur une annonce | Tester de nouveaux titres | Tous les 15 j |
| Quality Score < 7 | Travailler la cause (clic / intention / page) | Continu |
| Budget « limité » par Google | Augmenter SI le CPA est bon | Mensuel |
| 30+ conv. / 30 j | Passer en CPA cible | Une fois, au palier |

**La règle des 10-20 %** : modifie CPC et CPA par paliers de 10-20 % max, 1-2 semaines d'écart. Les grands écarts réinitialisent l'apprentissage et brouillent la lecture des données.

## 4. Le levier Quality Score, appliqué

Tu te souviens de la Partie I : monter le Quality Score *divise* ton coût. Méthode de diagnostic concrète :
1. Affiche les colonnes : Quality Score, Taux de clic attendu, Pertinence annonce, Expérience landing page.
2. Trie par dépense décroissante. Repère les mots-clés à **fort budget ET composant « En dessous de la moyenne »** — ce sont tes priorités, ils te coûtent le plus *maintenant*.
3. Selon le composant défaillant :
   - **Taux de clic attendu faible** → resserre le mot-clé dans un groupe plus thématique, améliore l'accroche.
   - **Pertinence faible** → le titre doit refléter l'intention de la requête (pas juste contenir le mot-clé).
   - **Landing page faible** → c'est le plus dur mais le plus rentable. La page doit *tenir la promesse de l'annonce*, charger vite, être mobile. (L'ancien compte : score mobile 8/100 — un gouffre.) Envoie chaque groupe vers la page la plus spécifique, jamais la page d'accueil générique.

## 5. Test & scale — la règle d'or

On n'augmente JAMAIS un budget sans preuve de ROI.
- **CPA sous l'objectif sur 30 j → doubler le budget.**
- **CPA qui dérape (> 150 € sur Expertise) après 15 j → couper le groupe fautif et analyser.**

| Phase | Budget global | Déclencheur |
|---|---|---|
| 1 — Test (J0-J60) | 400 €/mois | — |
| 2 — Scale (J60-J120) | 620-790 €/mois | CPA Expertise < 80 € ET CPA RU < 80 € |
| 3 — Optim. (J120+) | 860-1 260 €/mois | Smart Bidding réussi sur 2 campagnes |

À la Phase 2, ouverture de Property Management FR et EN, idéalement en **campagnes séparées par marché** (les économies diffèrent trop pour les mélanger : un marché par campagne donne une donnée propre et un CPA cible adapté). Mots-clés FR : `[property management Côte d'Azur]`, `[gestion propriété non-résident France]`, `"gestion villa absence propriétaire"`. EN : `[property management French Riviera]`, `[villa management Côte d'Azur]`, `"non resident property management France"`.

---

# PARTIE IV — Vision cross-canal : Google + Meta

Ce n'est pas pour tout de suite (budget Phase 1 concentré sur Google), mais un stratège doit avoir la carte complète. Voici comment Azur Life pourra, plus tard, démultiplier ses résultats.

## 1. Le principe : Meta crée la demande, Google la capte

| | Google Search | Meta (Facebook/Instagram) |
|---|---|---|
| Logique | Intention **déclarée** (on tape une requête) | Intérêt **inféré** (profil, comportement) |
| Étage funnel | Bas (capture) | Haut et milieu (création de demande) |
| Force | Convertit une demande chaude | Construit la notoriété, raconte une histoire |
| Format roi | Annonce texte + assets | Vidéo, carrousel, visuels |
| Repères 2026 | CPC immo 2,5-3,2 € ; CPL ~100 $ ; CVR Search ~7 % | CPC trafic ~0,70 $ ; CPL lead gen ~28 $ ; CTR ~2 % |
| Qualité de lead | Élevée (intention) | Variable (à filtrer) |

**Le piège à éviter :** un lead Meta est moins cher mais souvent moins qualifié (la personne ne cherchait pas activement). On ne compare donc pas le CPL Meta et le CPL Google comme s'ils étaient équivalents — ils n'occupent pas le même étage du funnel.

## 2. Le « halo effect » — l'argument décisif

Donnée documentée : faire tourner Meta *en parallèle* de Google augmente le taux de clic des annonces Google Search de **22 à 35 %**. Mécanisme : une personne qui a déjà vu Azur Life sur Instagram (notoriété créée par Meta) clique bien plus volontiers sur l'annonce Google quand elle cherche ensuite « expert immobilier Nice ». Meta *réchauffe*, Google *encaisse*. Les deux canaux ne se cannibalisent pas, ils se renforcent.

## 3. Application concrète pour Azur Life (Phase 3+)

- **Meta TOFU (notoriété) :** vidéos courtes — Natalia présente le cabinet, visite d'une villa gérée, témoignage en russe sous-titré. Ciblage : CSP++ 45+ ans, propriétaires, expatriés russophones/anglophones intéressés par la Côte d'Azur. Objectif = vues et notoriété, *pas* conversion directe.
- **Meta MOFU (retargeting) :** recibler les visiteurs du site et les spectateurs des vidéos avec un message de réassurance (« Master II Droit, 6 langues, confidentialité ») et un appel à l'action (formulaire / WhatsApp). C'est ici que Meta convertit le mieux.
- **Meta Lead Ads :** formulaire pré-rempli natif dans Facebook/Instagram, très efficace en immobilier — à coupler avec un suivi rapide (un lead non rappelé sous 24 h se refroidit).
- **Google :** reste le moteur de capture bas de funnel décrit dans les parties précédentes. La marque captera mécaniquement plus de volume à mesure que Meta crée de la notoriété.

## 4. La mesure quand on combine les canaux

Piège d'attribution majeur : chaque plateforme s'auto-attribue les conversions → si tu additionnes les ROAS de Google et Meta, tu **comptes deux fois** la même conversion. La solution professionnelle : raisonner en **performance combinée (blended / MER)** — total des leads et du chiffre rapporté ÷ total dépensé tous canaux confondus — plutôt qu'en ROAS auto-déclaré par plateforme. Plus le dispositif grossit, plus cette discipline de mesure devient critique.

---

# Annexe — Garde-fous 2026 et culture du métier

- **AI Max for Search** est sorti de bêta ; dès septembre 2026, Google migre automatiquement les anciens formats (Dynamic Search Ads, broad match au niveau campagne, assets auto-créés) vers AI Max. *Pour nous :* on démarre en Search classique + CPC manuel → rien à migrer dans l'immédiat. On testera AI Max plus tard, sur UNE campagne, jamais tout le compte d'un coup.
- **AI Overviews / AI Mode :** les résumés IA dans les résultats font chuter le clic organique (jusqu'à -60 % sur les requêtes informationnelles) → davantage de trafic passe par le payant, et les annonces conversationnelles + les landings avec données structurées (Schema) sont favorisées.
- **CPC en hausse (~12 %/an) :** recalibre tes attentes de coût tous les ~6 mois. Un CPA cible non revu depuis un an est souvent 15-25 % trop optimiste.
- **Ne jamais tout automatiser d'un coup :** ne bascule pas broad match + auto-apply + Smart Bidding + AI Max + Performance Max simultanément — tu perdrais toute capacité à isoler cause et effet. L'automatisation se mérite : sur un compte sain elle est un levier, sur un compte bancal elle « scale le bazar » plus vite.
- **L'incitation de Google n'est pas la tienne.** Google gagne à augmenter l'adoption de l'automatisation et le volume dépensé. Toi, tu gagnes à générer des leads qualifiés à coût maîtrisé. Ça se recoupe parfois, pas toujours. Les recommandations de l'interface sont des *prompts*, pas une stratégie. Garde toujours un humain dans la boucle : teste petit, mesure, puis scale.
- **Les libellés de menus évoluent vite.** Si un intitulé exact diffère de ce cours, la logique reste valable — cherche l'option équivalente. C'est la compréhension des mécaniques (Parties I et III) qui ne périme pas, pas les chemins de clic.

---

## Le mot de la fin

Tu disposes maintenant des trois niveaux de lecture : la **théorie** (pourquoi la machine se comporte ainsi), l'**exécution** (chaque réglage des 3 campagnes), et le **pilotage** (comment faire évoluer le système dans le temps et l'ouvrir à Meta). 

Un dernier principe à graver : **en publicité payante, la discipline bat l'intuition.** Les comptes qui gagnent ne sont pas ceux qui ont trouvé un hack, mais ceux qui mesurent proprement, attendent assez longtemps pour conclure, et n'augmentent le budget que sur preuve. L'ancien compte d'Azur Life a échoué non par manque de budget, mais par absence de ces fondations. Tu repars avec elles.