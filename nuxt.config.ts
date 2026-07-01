// https://nuxt.com/docs/api/configuration/nuxt-config
const backendUrl = process.env.BACKEND_URL ?? 'https://api.sgcarpass.com'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-30',
  devtools: { enabled: true },
  devServer: { host: '0.0.0.0' },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  css: ['~/assets/css/tokens.css'],

  // Cloudflare Pages — only applied during build, not dev
  ...(process.env.NODE_ENV === 'production' && {
    nitro: { preset: 'cloudflare-pages' },
  }),

  // TypeScript strict mode
  typescript: {
    strict: true,
  },

  // Backend API proxy — /api/** → Spring Boot
  // Dev: set BACKEND_URL=http://localhost:8080 in .env.local
  // Prod (Cloudflare): defaults to 47.82.1.87:8080
  routeRules: {
    '/api/**': { proxy: `${backendUrl}/**` },
  },

  // App-level head defaults (per-page SEO set via useSeoMeta / useHead)
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'geo.region', content: 'SG' },
        { name: 'geo.placename', content: 'Singapore' },
      ],
    },
  },
})
