// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.PUBLIC_SITE_URL || 'https://landing.azur-life.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  prefetch: { prefetchAll: false },
  build: {
    inlineStylesheets: 'auto',
    assets: '_a',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Bodoni Moda',
      cssVariable: '--font-display',
      subsets: ['latin'],
      weights: [400, 700, 900],
      styles: ['normal', 'italic'],
      display: 'swap',
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'PT Serif',
      cssVariable: '--font-serif-alt',
      subsets: ['latin', 'cyrillic'],
      weights: [400, 700],
      styles: ['normal', 'italic'],
      display: 'swap',
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-body',
      subsets: ['latin', 'cyrillic'],
      weights: [400, 500, 600],
      styles: ['normal'],
      display: 'swap',
      fallbacks: ['system-ui', 'Segoe UI', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      subsets: ['latin'],
      weights: [400, 500],
      styles: ['normal'],
      display: 'swap',
      fallbacks: ['ui-monospace', 'Menlo', 'monospace'],
    },
  ],
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', ru: 'ru-RU' },
      },
    }),
  ],
});
