// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Static MPA: each route is a separate HTML page (no client-side router / View Transitions).
// Update `site` to your production domain before deploy (used for canonical + OG URLs + sitemap).
export default defineConfig({
  site: 'https://blackwhitepdf.com',
  output: 'static',
  trailingSlash: 'always',
  // Full document navigations only — do not prefetch like an SPA.
  prefetch: false,
  // English at `/`; the other 11 languages live under `/{lang}/` subpaths.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'fr', 'de', 'hi', 'id', 'ja', 'it', 'ru', 'tr', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Adds xhtml:link hreflang alternates in the sitemap for multilingual pages.
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          pt: 'pt-BR',
          fr: 'fr-FR',
          de: 'de-DE',
          hi: 'hi-IN',
          id: 'id-ID',
          ja: 'ja-JP',
          it: 'it-IT',
          ru: 'ru-RU',
          tr: 'tr-TR',
          ar: 'ar',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
