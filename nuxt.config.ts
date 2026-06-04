// https://nuxt.com/docs/api/configuration/nuxt-config
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
