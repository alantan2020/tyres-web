<script setup lang="ts">
import type { CarData } from '~/data/cars/types'

const BASE_URL = 'https://tyres.sgcarpass.com'

const allCars = import.meta.glob<{ default: CarData }>('/data/cars/*.ts', { eager: true })

// Group by make, skip types.ts
const byMake = new Map<string, CarData[]>()
for (const [path, mod] of Object.entries(allCars)) {
  if (path.endsWith('types.ts')) continue
  const car = mod.default
  const list = byMake.get(car.makeSlug) ?? []
  list.push(car)
  byMake.set(car.makeSlug, list)
}
// Sort models within each make
for (const [, cars] of byMake) {
  cars.sort((a, b) => a.model.localeCompare(b.model))
}
// Sort makes alphabetically
const makes = [...byMake.entries()].sort(([a], [b]) => a.localeCompare(b))

const totalModels = makes.reduce((n, [, cars]) => n + cars.length, 0)

useSeoMeta({
  title: 'All Car Tyres Singapore | Size & Price Guide | SGCarPass',
  description: `Tyre size and price guides for ${totalModels} car models in Singapore. Toyota, Honda, BMW, Mercedes and more. Compare brands and WhatsApp for a quote.`,
  ogTitle: 'All Car Tyres Singapore | SGCarPass',
  ogUrl: `${BASE_URL}/tyres/`,
  ogType: 'website',
})

useHead({
  link: [{ rel: 'canonical', href: `${BASE_URL}/tyres/` }],
})

const WA = '6581525875'
const waHref = `https://wa.me/${WA}?text=${encodeURIComponent('Hi SGCarPass, I need a tyre quote for my car.')}`
</script>

<template>
  <!-- ── HEADER ──────────────────────────────────────────────────────── -->
  <section class="idx-header">
    <div class="idx-header-line" aria-hidden="true" />
    <div class="container idx-header-content">
      <nav aria-label="breadcrumb" class="breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span class="bc-sep">/</span>
        <span>All Tyres</span>
      </nav>
      <h1 class="idx-title">Tyres for Your Car · Singapore</h1>
      <p class="idx-desc">
        {{ totalModels }} car model guide{{ totalModels > 1 ? 's' : '' }} — correct size, bolt pattern, and best price, all in one place.
      </p>
    </div>
  </section>

  <!-- ── MAKES LIST ──────────────────────────────────────────────────── -->
  <div class="idx-body">
    <div class="container">
      <section
        v-for="[makeSlug, cars] in makes"
        :key="makeSlug"
        class="make-section"
      >
        <div class="make-header">
          <h2 class="make-name">{{ cars[0].make }}</h2>
          <NuxtLink :to="`/tyres/${makeSlug}/`" class="make-hub-link">
            All {{ cars[0].make }} models →
          </NuxtLink>
        </div>

        <div class="model-grid">
          <NuxtLink
            v-for="car in cars"
            :key="car.modelSlug"
            :to="`/tyres/${car.makeSlug}/${car.modelSlug}/`"
            class="model-card"
          >
            <div class="model-card-badge">{{ car.seo.oeSize }}</div>
            <div class="model-card-name">{{ car.model }}</div>
            <div class="model-card-gens">{{ car.generations.length }} gen · {{ car.generations[car.generations.length - 1].years.split('–')[0] }}–present</div>
            <div class="model-card-price">From <strong>${{ car.seo.priceFrom }}</strong></div>
            <div class="model-card-cta">View guide →</div>
          </NuxtLink>
        </div>
      </section>

      <!-- WhatsApp fallback if model not listed -->
      <div class="idx-no-model">
        <p>Don't see your car? Send us a WhatsApp — we cover 100+ models.</p>
        <a :href="waHref" target="_blank" class="wa-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp Us
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ── Header ─────────────────────────────────────────── */
.idx-header {
  position: relative;
  background: var(--ink);
  color: #fff;
  padding: 3rem 0 2rem;
}
.idx-header-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: var(--red);
}
.breadcrumb {
  font-size: 0.8rem; color: rgba(255,255,255,0.5);
  margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.4rem;
}
.breadcrumb a { color: rgba(255,255,255,0.5); text-decoration: none; }
.breadcrumb a:hover { color: #fff; }
.bc-sep { opacity: 0.4; }
.idx-title {
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  font-weight: 900; margin: 0 0 0.75rem;
}
.idx-desc { color: rgba(255,255,255,0.65); margin: 0; font-size: 1rem; }

/* ── Body ───────────────────────────────────────────── */
.idx-body { padding: 2.5rem 0 3rem; }

/* ── Make section ───────────────────────────────────── */
.make-section { margin-bottom: 2.5rem; }
.make-header {
  display: flex; align-items: baseline; justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--border);
  padding-bottom: 0.5rem;
}
.make-name { font-size: 1.25rem; font-weight: 900; margin: 0; }
.make-hub-link {
  font-size: 0.82rem; font-weight: 700;
  color: var(--red); text-decoration: none;
}
.make-hub-link:hover { text-decoration: underline; }

/* ── Model cards ────────────────────────────────────── */
.model-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.85rem;
}
.model-card {
  display: block;
  background: #fff;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  padding: 1.1rem 1.1rem 0.9rem;
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
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.18rem 0.55rem;
  border-radius: 4px;
  margin-bottom: 0.6rem;
  letter-spacing: 0.04em;
}
.model-card-name { font-size: 1.05rem; font-weight: 800; margin-bottom: 0.2rem; }
.model-card-gens { font-size: 0.78rem; color: var(--muted); margin-bottom: 0.55rem; }
.model-card-price { font-size: 0.85rem; margin-bottom: 0.55rem; }
.model-card-price strong { color: var(--red); }
.model-card-cta { font-size: 0.82rem; font-weight: 700; color: var(--red); }

/* ── Bottom CTA ─────────────────────────────────────── */
.idx-no-model {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fff;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}
.idx-no-model p { margin: 0; color: var(--muted); font-size: 0.95rem; }

.wa-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: #25D366; color: #fff;
  padding: 0.65rem 1.25rem; border-radius: 6px;
  font-weight: 700; font-size: 0.9rem;
  text-decoration: none; transition: opacity .15s;
}
.wa-btn:hover { opacity: 0.88; }

@media (min-width: 560px) {
  .idx-no-model { flex-direction: row; align-items: center; justify-content: space-between; }
}
</style>
