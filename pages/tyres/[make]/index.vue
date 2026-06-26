<script setup lang="ts">
import type { CarData } from '~/data/cars/types'

const route = useRoute()
const makeSlug = route.params.make as string

const allCars = import.meta.glob<{ default: CarData }>('/data/cars/*.ts', { eager: true })

const makeCars = Object.entries(allCars)
  .filter(([path]) => path.startsWith(`/data/cars/${makeSlug}-`) && !path.endsWith('types.ts'))
  .map(([_, mod]) => mod.default)
  .sort((a, b) => a.model.localeCompare(b.model))

if (makeCars.length === 0) {
  throw createError({ statusCode: 404, statusMessage: 'Make not found' })
}

const makeName = makeCars[0].make
const BASE_URL = 'https://tyres.sgcarpass.com'
const canonicalUrl = `${BASE_URL}/tyres/${makeSlug}/`

const modelNames = makeCars.map(c => c.model).join(', ')
const priceFrom = Math.min(...makeCars.map(c => c.seo.priceFrom))

useSeoMeta({
  title: `${makeName} Tyres Singapore | ${modelNames} | SGCarPass`,
  description: `Find the right tyre for your ${makeName} in Singapore. ${makeCars.map(c => `${c.model} from $${c.seo.priceFrom}`).join(' · ')}. Compare brands and get a WhatsApp quote.`,
  ogTitle: `${makeName} Tyres Singapore | SGCarPass`,
  ogDescription: `Tyre size guide and prices for ${makeName} ${modelNames}. From $${priceFrom} installed in Singapore.`,
  ogUrl: canonicalUrl,
  ogType: 'website',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: `${makeName} Tyres Singapore`, item: canonicalUrl },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `${makeName} Tyre Pages`,
        itemListElement: makeCars.map((car, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `${car.make} ${car.model} Tyre Size & Price Singapore`,
          url: `${BASE_URL}/tyres/${car.makeSlug}/${car.modelSlug}/`,
        })),
      }),
    },
  ],
})

const WA = '6581525875'
const waHref = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi SGCarPass, I drive a ${makeName} and need a tyre quote.`)}`
</script>

<template>
  <!-- ── HERO ──────────────────────────────────────────────────────── -->
  <section class="hub-hero">
    <div class="hub-hero-bg" aria-hidden="true">{{ makeName.toUpperCase() }}</div>
    <div class="hub-hero-line" aria-hidden="true" />
    <div class="container hub-hero-content">
      <nav aria-label="breadcrumb" class="breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span class="bc-sep">/</span>
        <span>{{ makeName }} Tyres</span>
      </nav>
      <h1 class="hub-title">
        <span class="hub-make">{{ makeName.toUpperCase() }}</span>
        <span class="hub-sub">TYRE GUIDE · SINGAPORE</span>
      </h1>
      <p class="hub-desc">
        Find the correct tyre size and best price for your {{ makeName }} in Singapore.
        {{ makeCars.length }} model{{ makeCars.length > 1 ? 's' : '' }} covered — select below.
      </p>
      <a :href="waHref" target="_blank" class="wa-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp for Tyre Quote
      </a>
    </div>
  </section>

  <!-- ── MODEL CARDS ────────────────────────────────────────────────── -->
  <section class="hub-models">
    <div class="container">
      <h2 class="hub-models-title">{{ makeName }} Models Available</h2>
      <div class="model-grid">
        <NuxtLink
          v-for="car in makeCars"
          :key="car.modelSlug"
          :to="`/tyres/${car.makeSlug}/${car.modelSlug}/`"
          class="model-card"
        >
          <div class="model-card-badge">{{ car.seo.oeSize }}</div>
          <div class="model-card-name">{{ car.make }} {{ car.model }}</div>
          <div class="model-card-gens">{{ car.generations.length }} generation{{ car.generations.length > 1 ? 's' : '' }} covered</div>
          <div class="model-card-price">From <strong>${{ car.seo.priceFrom }}</strong> installed</div>
          <div class="model-card-cta">View tyre guide →</div>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- ── FOOTER CTA ─────────────────────────────────────────────────── -->
  <section class="hub-footer-cta">
    <div class="container hub-footer-inner">
      <p>Not sure which tyre fits your {{ makeName }}? Send us your car plate — we'll check for you.</p>
      <a :href="waHref" target="_blank" class="wa-btn wa-btn--outline">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp Us
      </a>
    </div>
  </section>
</template>

<style scoped>
/* ── Hero ──────────────────────────────────────────── */
.hub-hero {
  position: relative;
  background: var(--ink);
  color: #fff;
  padding: 3.5rem 0 2.5rem;
  overflow: hidden;
}
.hub-hero-bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(5rem, 18vw, 11rem);
  font-weight: 900;
  color: rgba(255,255,255,0.04);
  letter-spacing: 0.04em;
  pointer-events: none;
  user-select: none;
}
.hub-hero-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: var(--red);
}
.hub-hero-content { position: relative; }
.breadcrumb { font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.4rem; }
.breadcrumb a { color: rgba(255,255,255,0.5); text-decoration: none; }
.breadcrumb a:hover { color: #fff; }
.bc-sep { opacity: 0.4; }
.hub-title { margin: 0 0 1rem; line-height: 1.1; }
.hub-make { display: block; font-size: clamp(2rem, 7vw, 3.5rem); font-weight: 900; letter-spacing: -0.02em; }
.hub-sub { display: block; font-size: 0.9rem; color: var(--red); letter-spacing: 0.15em; margin-top: 0.25rem; font-weight: 600; }
.hub-desc { color: rgba(255,255,255,0.7); margin: 0 0 1.75rem; font-size: 1rem; max-width: 520px; }

/* ── WA button (shared with model pages) ────────────── */
.wa-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: #25D366; color: #fff;
  padding: 0.75rem 1.5rem; border-radius: 6px;
  font-weight: 700; font-size: 0.95rem;
  text-decoration: none; transition: opacity .15s;
}
.wa-btn:hover { opacity: 0.88; }
.wa-btn--outline {
  background: transparent;
  border: 2px solid var(--red);
  color: var(--red);
}
.wa-btn--outline:hover { background: var(--red); color: #fff; opacity: 1; }

/* ── Model cards ────────────────────────────────────── */
.hub-models { padding: 3rem 0; }
.hub-models-title { font-size: 1.4rem; font-weight: 800; margin: 0 0 1.5rem; }
.model-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
.model-card {
  display: block;
  background: #fff;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  padding: 1.25rem 1.25rem 1rem;
  text-decoration: none;
  color: var(--ink);
  transition: border-color .15s, box-shadow .15s;
}
.model-card:hover {
  border-color: var(--red);
  box-shadow: 0 4px 16px rgba(227,24,55,0.1);
}
.model-card-badge {
  display: inline-block;
  background: var(--cream);
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  margin-bottom: 0.75rem;
  letter-spacing: 0.04em;
}
.model-card-name {
  font-size: 1.15rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}
.model-card-gens {
  font-size: 0.8rem;
  color: var(--muted);
  margin-bottom: 0.75rem;
}
.model-card-price {
  font-size: 0.9rem;
  color: var(--ink);
  margin-bottom: 0.75rem;
}
.model-card-price strong { color: var(--red); }
.model-card-cta {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--red);
}

/* ── Footer CTA ─────────────────────────────────────── */
.hub-footer-cta {
  background: var(--ink);
  color: #fff;
  padding: 2.5rem 0;
}
.hub-footer-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}
.hub-footer-inner p {
  margin: 0;
  font-size: 1rem;
  color: rgba(255,255,255,0.75);
  max-width: 480px;
}
@media (min-width: 560px) {
  .hub-footer-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
