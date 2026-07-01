// All FR copy lives here. Edit text, the page rebuilds itself.

export type IntentKey = 'default' | 'succession' | 'divorce' | 'ifi' | 'judiciaire';

export interface HeroVariant {
  eyebrow: string;
  h1Html: string; // allows <strong> emphasis
  sub: string;
}

export const fr = {
  meta: {
    title: 'Expertise Immobilière Côte d\'Azur | Azur Life',
    description:
      'Cabinet d\'expertise immobilière indépendant à Beaulieu-sur-Mer. Rapports certifiés pour successions, IFI, divorces et procédures judiciaires. 6 langues, remise sous 48h.',
    ogImage: '/og/fr-expertise-cover.jpg',
  },

  header: {
    metaLine: 'Beaulieu-sur-Mer · French Riviera',
    ctaCall: 'Appelez-nous',
    ctaSecondary: 'Consultation privée',
  },

  hero: {
    variants: {
      default: {
        eyebrow: 'BEAULIEU-SUR-MER · FRENCH RIVIERA',
        h1Html: 'Expertise Immobilière <strong><em>Indépendante</em></strong> : Votre Patrimoine Valorisé avec Rigueur.',
        sub: 'Rapports officiels certifiés pour successions, déclarations IFI, divorces et procédures judiciaires sur la Côte d\'Azur.',
      },
      succession: {
        eyebrow: 'SUCCESSION · PARTAGE · DONATION',
        h1Html: 'Une valeur vénale <strong><em>incontestable</em></strong> pour votre succession.',
        sub: 'Rapport d\'expertise opposable aux héritiers, au notaire et à l\'administration fiscale. Cabinet indépendant, rendu sous 48h.',
      },
      divorce: {
        eyebrow: 'DIVORCE · LIQUIDATION DU RÉGIME',
        h1Html: 'Évaluation <strong><em>équitable et opposable</em></strong> du bien commun.',
        sub: 'Expert immobilier indépendant entre Nice et Monaco. Rapport signé, recevable devant le juge et le notaire.',
      },
      ifi: {
        eyebrow: 'IFI · VALEUR VÉNALE CERTIFIÉE',
        h1Html: 'Déclaration IFI : <strong><em>rapport d\'expertise opposable</em></strong> à l\'administration.',
        sub: 'Sécurisez votre valeur déclarée. Conformité totale avec la méthodologie DGFiP. Délai express disponible.',
      },
      judiciaire: {
        eyebrow: 'EXPERTISE JUDICIAIRE & CONTENTIEUX',
        h1Html: 'Expertise <strong><em>opposable au tribunal</em></strong> — cabinet indépendant.',
        sub: 'Procédure judiciaire, litige, contentieux. Rapport circonstancié, méthodologie tracée. Tribunal de Nice et Cour d\'appel d\'Aix.',
      },
    } as Record<IntentKey, HeroVariant>,
    ctaCall: 'Appeler Natalia',
    ctaForm: 'Consultation privée',
    callMicroCopy: 'Réponse directe · Confidentialité absolue',
  },

  trustPills: [
    'Opposabilité juridique',
    'Aucun conflit d\'intérêt',
    '6 langues parlées',
    'Remise sous 48h',
    'Nice · Monaco · Menton',
  ],

  trustStats: [
    { value: '5.0★', label: 'Google Reviews (45+)' },
    { value: '10+', label: 'Years Experience' },
    { value: '400+', label: 'Reports Delivered' },
    { value: '6', label: 'Languages Spoken' },
    { value: '48h', label: 'Standard Delivery' },
  ],

  serviceCardsTitle: 'Domaines d\'Expertise Juridique',
  serviceCardsKicker: 'NOS COMPÉTENCES',
  serviceCardsLead:
    'Cabinet indépendant spécialisé dans l\'évaluation immobilière pour procédures légales, déclarations fiscales et situations patrimoniales sensibles. Méthodologie rigoureuse, rapports opposables.',

  serviceCards: [
    {
      ref: '01',
      anchor: 'succession',
      intent: 'succession',
      title: 'Succession & Donation',
      body: 'Évaluation vénale opposable pour le règlement des successions et des indivisions. Prévient les contentieux entre héritiers et sécurise la déclaration auprès du notaire et de l\'administration fiscale. Méthodologie conforme aux exigences de la DGFiP, délai express disponible.',
    },
    {
      ref: '02',
      anchor: 'divorce',
      intent: 'divorce',
      title: 'Divorce & Prestation',
      body: 'Expertise du bien commun pour liquidation de régime matrimonial. Garantit une évaluation équitable opposable au juge aux affaires familiales et recevable par les deux parties. Confidentialité absolue, rapport circonstancié avec méthodologie tracée.',
    },
    {
      ref: '03',
      anchor: 'ifi',
      intent: 'ifi',
      title: 'IFI & Optimisation',
      body: 'Déclaration de l\'Impôt sur la Fortune Immobilière avec rapport certifié opposable à l\'administration fiscale. Méthodologie conforme DGFiP pour sécuriser la base imposable et prévenir tout redressement. Délai express janvier–juin.',
    },
    {
      ref: '04',
      anchor: 'judiciaire',
      intent: 'judiciaire',
      title: 'Expertise Judiciaire',
      body: 'Mission privée ou contradictoire pour les procédures devant les tribunaux civils et commerciaux. Rapport recevable au Tribunal de Nice et en Cour d\'appel d\'Aix. Expert indépendant, méthodologie traçable conforme à la charte CEEI.',
    },
    {
      ref: '05',
      anchor: 'credit',
      intent: null,
      title: 'Crédit & Garantie',
      body: 'Évaluation de la valeur vénale pour constitution de garantie bancaire. Rapport signé par expert indépendant conforme aux exigences des établissements de crédit. Délais courts, méthodologie normée.',
    },
    {
      ref: '06',
      anchor: 'sci',
      intent: null,
      title: 'Cession de parts & SCI',
      body: 'Valorisation d\'actifs immobiliers détenus en société (SCI, SARL de famille) dans le cadre de cessions de parts ou de restructurations patrimoniales. Rapport circonstancié avec méthodes croisées.',
    },
  ],

  whySection: {
    kicker: 'NOTRE BILAN',
    title: 'Des résultats qui parlent',
    lead: '',
    blocks: [
      {
        title: '5.0★',
        body: 'Note Google Reviews basée sur 45+ avis clients vérifiés. Qualité de service, réactivité et fiabilité reconnues.',
      },
      {
        title: '10+ Années',
        body: 'Une décennie d\'expertise sur le marché immobilier de la Côte d\'Azur. Connaissance approfondie du micro-marché Nice–Monaco.',
      },
      {
        title: '400+ Rapports',
        body: 'Plus de 400 expertises réalisées pour successions, IFI, divorces, contentieux et procédures judiciaires.',
      },
      {
        title: '6 Langues',
        body: 'Service disponible en français, anglais, russe, italien, suédois et espagnol. Clientèle internationale prise en charge directement.',
      },
      {
        title: 'Remise 48h',
        body: 'Délai standard de 48 heures ouvrées après visite. Option express disponible pour urgences judiciaires ou fiscales.',
      },
    ],
  },

  process: {
    kicker: 'RIGUEUR TECHNIQUE',
    title: 'Méthodologies d\'Appraisal',
    steps: [
      {
        n: 'I',
        title: 'Méthode par Comparaison',
        body: 'Sélection d\'un panel de 5 à 12 transactions réelles issues des bases DVF et notariales. Ajustements techniques : étage, exposition, état, et prestations.',
      },
      {
        n: 'II',
        title: 'Méthode par le Revenu',
        body: 'Capitalisation des loyers pour les actifs de rendement. Utilisation des taux de rendement de marché par segment de quartier et typologie d\'actif.',
      },
      {
        n: 'III',
        title: 'Valeur de Remplacement',
        body: 'Pour les biens atypiques (Villas Belle Époque, immeubles entiers). Calcul basé sur le coût de reconstruction à neuf diminué de la vétusté.',
      },
    ],
  },

  marketData: {
    kicker: 'DONNÉES DE MARCHÉ',
    title: 'Analyse Micro-Marché Nice 2026',
    lead: 'Les moyennes de quartier sont souvent trompeuses. Chaque rapport d\'expertise repose sur une analyse granulaire du micro-marché, isolant les caractéristiques intrinsèques de votre bien.',
    stats: [
      { value: '10 850 €/m²', label: 'Prix Moyen Appartement Nice', note: 'Données prévisionnelles 2026, secteurs résidentiels premium.' },
      { value: '15 400 €/m²', label: 'Prix Moyen Maison & Villa', note: 'Forte disparité selon l\'exposition et la vue mer.' },
      { value: '1 à 4x', label: 'Amplitude de Prix', note: 'Ratio entre les quartiers standard et les enclaves de prestige (Cimiez, Mont Boron).' },
    ],
  },

  caseStudies: {
    kicker: 'ÉTUDES DE CAS',
    title: 'Expertise en Action',
    cases: [
      {
        tag: 'SUCCESSION — INDIVISION',
        title: 'Villa Belle Époque à Cimiez, Nice',
        context: 'Trois héritiers en désaccord. Les estimations d\'agences variaient de manière excessive, bloquant la succession.',
        intervention: 'Analyse croisée par méthode comparative et coût de remplacement (méthode de la valeur vénale).',
        result: 'Écart réduit de 65% par rapport aux estimations initiales. Accord trouvé en 4 semaines sans liquidation judiciaire.',
        image: '/img/case-belle-epoque.jpg',
      },
      {
        tag: 'CONTRÔLE FISCAL — IFI',
        title: 'Appartement de réception (165 m²), Carré d\'Or',
        context: 'Propriétaire non-résident faisant face à un audit de la DGFiP sur sa déclaration IFI.',
        intervention: 'Panel de 11 transactions comparables avec méthodologie conforme aux exigences de l\'administration fiscale.',
        result: 'Réduction de 18% de la base imposable. Dossier clôturé par la DGFiP sans redressement.',
        image: '/img/case-carre-dor.jpg',
      },
    ],
  },

  ifiPromo: {
    kicker: 'SAISONNIER : JANVIER À JUIN',
    title: 'Expertise IFI Côte d\'Azur — Déclaration 2025–2026',
    body: 'La firme délivre des rapports d\'expertise certifiés pour vos déclarations IFI, avec déductions fiscalement admises et une méthodologie conforme à la DGFiP. Livraison express disponible avant la date limite de déclaration.',
    cta: 'Demander mon rapport IFI',
  },

  faq: {
    kicker: 'QUESTIONS FRÉQUENTES',
    title: 'Vos questions, nos réponses',
    items: [
      {
        q: 'Azur Life intervient-elle pour des propriétaires résidant à l\'étranger ?',
        a: 'Oui, Natalia parle couramment russe et anglais, et prend en charge des clients non-résidents dans le cadre de successions internationales, d\'IFI, de ventes ou de contentieux. Le cabinet coordonne si nécessaire avec les conseils juridiques et fiscalistes basés à l\'étranger.',
      },
      {
        q: 'Quelle différence entre une estimation d\'agence et une expertise immobilière ?',
        a: 'L\'estimation d\'agence est un avis commercial gratuit destiné à fixer un prix de vente. Elle n\'est ni signée, ni datée, ni opposable. L\'expertise immobilière est un rapport officiel, produit par un expert indépendant, signé, circonstancié, avec une méthodologie tracée. Il est recevable devant les notaires, les tribunaux et l\'administration fiscale.',
      },
      {
        q: 'Combien coûte une expertise immobilière sur la Côte d\'Azur ?',
        a: 'Le coût dépend de la complexité du bien, de l\'urgence et du contexte (succession, divorce, IFI). Nous émettons un devis ferme sous 24h après le premier contact. Les honoraires sont forfaitaires, sans surprise, sans pourcentage caché.',
      },
      {
        q: 'Quel délai pour obtenir un rapport d\'expertise ?',
        a: 'Le délai standard est de 48 heures à 7 jours après la visite du bien. Sur urgence (procédure judiciaire imminente, échéance IFI), nous proposons une remise express sous 24h moyennant un supplément.',
      },
      {
        q: 'L\'expertise est-elle valable devant les tribunaux et la cour d\'appel d\'Aix ?',
        a: 'Oui, le rapport rédigé selon la charte de la CEEI (Chambre de l\'Expertise et de l\'Évaluation Immobilière) est recevable au Tribunal de Nice et en Cour d\'appel d\'Aix. Méthodologie tracée, hypothèses détaillées, photos et annexes techniques.',
      },
      {
        q: 'Peut-on contester un redressement IFI grâce à votre rapport ?',
        a: 'Oui, le rapport constitue une preuve probante opposable à l\'administration fiscale. Il permet de contester un redressement en procédure de rectification ou devant les juridictions compétentes. Méthodologie conforme DGFiP.',
      },
      {
        q: 'Comment se déroule une mission d\'expertise ?',
        a: 'Appel de cadrage gratuit, puis devis ferme sous 24h. Après acceptation, visite sur site (relevés, photos, documentation). Analyse technique et rédaction du rapport. Remise sous 48h à 7 jours selon la complexité. Disponibilité post-remise pour toute question.',
      },
    ],
  },

  form: {
    kicker: 'CONCIERGE REQUEST',
    title: 'Consultation Privée',
    lead: 'Confiez vos besoins d\'évaluation à notre expertise indépendante et discrète. Natalia vous rappelle personnellement sous 24 heures.',
    fields: {
      firstName: 'Prénom',
      lastName: 'Nom',
      phone: 'Téléphone / WhatsApp',
      email: 'Email',
      type: 'Type d\'expertise',
      message: 'Détails (situation, échéance, type de bien)',
      consent:
        'J\'accepte que mes informations soient utilisées pour répondre à ma demande. Aucune diffusion à des tiers. RGPD.',
    },
    types: [
      { v: '', label: 'Sélectionnez…' },
      { v: 'succession', label: 'Succession · partage · donation' },
      { v: 'ifi', label: 'Déclaration IFI' },
      { v: 'divorce', label: 'Divorce · liquidation' },
      { v: 'judiciaire', label: 'Procédure judiciaire' },
      { v: 'vente', label: 'Vente ou achat' },
      { v: 'sci', label: 'SCI · cession de parts' },
    ],
    submit: 'Envoyer ma demande',
    success: 'Demande reçue. Nous vous recontactons sous 24h ouvrées au numéro indiqué.',
    error: 'Une erreur est survenue. Merci d\'appeler directement ou de réessayer dans quelques instants.',
    altCall: 'Préférez le téléphone ?',
  },

  contact: {
    title: 'Azur Life Expertise',
    addressLine: '46 boulevard Leclerc · 06310 Beaulieu-sur-Mer',
    hours: 'Lun-Sam · 9h-19h',
    mapButton: 'Afficher la carte',
  },

  stickyMobile: {
    call: 'Appeler',
    whatsapp: 'WhatsApp',
    form: 'Formulaire',
  },

  cookies: {
    text: 'Nous utilisons des cookies de mesure d\'audience (Google Analytics & Google Ads) pour améliorer ce site. Voir notre politique de confidentialité.',
    accept: 'Accepter',
    reject: 'Refuser',
  },

  footer: {
    tagline: 'Cabinet d\'expertise immobilière indépendant · Beaulieu-sur-Mer · Alpes-Maritimes',
    crossLinkLabel: 'Русская версия',
    crossLinkHref: '/ru/property-management',
    legal: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Honoraires', href: '/honoraires' },
      { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
      { label: 'Gestion des cookies', href: '#', dataAttr: 'cookie-settings' },
    ],
    languages: 'Français · English · Русский · Italiano · Svenska · Español',
    copyright: '© 2026 Azur Life — Tous droits réservés.',
  },
} as const;
