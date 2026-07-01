import { SITE, PHONE, ROUTES } from './constants';

type Lang = 'fr' | 'ru';

export interface FaqEntry {
  q: string;
  a: string;
}

export interface ServiceEntry {
  name: string;
  description: string;
  url?: string;
}

const languagesSpoken = ['fr', 'en', 'ru', 'it', 'sv'];

export function realEstateAgent(lang: Lang) {
  const url = SITE.url + (lang === 'fr' ? ROUTES.fr : ROUTES.ru);
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': SITE.url + '#agency',
    name: SITE.name,
    legalName: SITE.legalName,
    url,
    image: SITE.url + '/og/azur-life-cover.jpg',
    logo: SITE.url + '/favicon.svg',
    telephone: PHONE.raw,
    email: SITE.email,
    priceRange: '€€€',
    inLanguage: lang,
    knowsLanguage: languagesSpoken,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Alpes-Maritimes' },
      { '@type': 'AdministrativeArea', name: 'Monaco' },
      { '@type': 'Place', name: 'Côte d’Azur' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postal,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.address.lat,
      longitude: SITE.address.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
  };
}

export function servicesGraph(services: ServiceEntry[], lang: Lang) {
  return services.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.description,
    inLanguage: lang,
    url: s.url,
    provider: { '@id': SITE.url + '#agency' },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Alpes-Maritimes' },
      { '@type': 'Place', name: 'Côte d’Azur' },
    ],
  }));
}

export function faqPage(entries: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((e) => ({
      '@type': 'Question',
      name: e.q,
      acceptedAnswer: { '@type': 'Answer', text: e.a },
    })),
  };
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function propertyManagementOffer() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Property Management — Côte d’Azur',
    serviceType: 'Annual property management mandate',
    provider: { '@id': SITE.url + '#agency' },
    areaServed: { '@type': 'Place', name: 'Côte d’Azur' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Apartment',
        price: '4000',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '4000',
          priceCurrency: 'EUR',
          unitText: 'YEAR',
          valueAddedTaxIncluded: false,
        },
      },
      {
        '@type': 'Offer',
        name: 'Villa',
        price: '7200',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '7200',
          priceCurrency: 'EUR',
          unitText: 'YEAR',
          valueAddedTaxIncluded: false,
        },
      },
    ],
  };
}
