// Single source of truth for site-wide constants.
// All values fall back to dev-safe defaults so the build works without an .env file.

const env = import.meta.env;

export const SITE = {
  url: env.PUBLIC_SITE_URL || 'https://landing.azur-life.com',
  name: 'Azur Life',
  legalName: 'Azur Life — Agence immobilière & Cabinet d’expertise',
  email: env.PUBLIC_EMAIL || 'contact@azur-life.com',
  address: {
    street: '46 boulevard Leclerc',
    postal: '06310',
    city: 'Beaulieu-sur-Mer',
    region: 'Alpes-Maritimes',
    country: 'FR',
    lat: 43.7066,
    lng: 7.3326,
  },
} as const;

// Phone numbers
// - phone: the CALL ASSET number used in Google Ads (call-attribution parity)
// - phoneOffice: the agency switchboard (from azur life.md)
export const PHONE = {
  raw: env.PUBLIC_PHONE || '+33623531955',
  display: env.PUBLIC_PHONE_DISPLAY || '06 23 53 19 55',
  office: env.PUBLIC_PHONE_OFFICE || '+33493160631',
  officeDisplay: env.PUBLIC_PHONE_OFFICE_DISPLAY || '04 93 16 06 31',
} as const;

export const WHATSAPP = {
  raw: env.PUBLIC_WHATSAPP || '33623531955',
  url: (msg = ''): string => {
    const number = env.PUBLIC_WHATSAPP || '33623531955';
    const q = msg ? `?text=${encodeURIComponent(msg)}` : '';
    return `https://wa.me/${number}${q}`;
  },
} as const;

export const TRACKING = {
  gtmId: env.PUBLIC_GTM_ID || '',
  ga4Id: env.PUBLIC_GA4_ID || '',
  adsId: env.PUBLIC_ADS_ID || '',
  labelForm: env.PUBLIC_ADS_LABEL_FORM || '',
  labelCall: env.PUBLIC_ADS_LABEL_CALL || '',
  labelWhatsApp: env.PUBLIC_ADS_LABEL_WHATSAPP || '',
} as const;

export const FORM_ENDPOINT: string = env.PUBLIC_FORM_ENDPOINT || '';

export const ROUTES = {
  fr: '/expertise-immobiliere',
  ru: '/ru/property-management',
  home: '/',
} as const;
