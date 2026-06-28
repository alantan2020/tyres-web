<script setup lang="ts">
import type { CarData } from '~/data/cars/types'

const BASE_URL = 'https://tyres.sgcarpass.com'
const WA = '6581525875'

const allCars = import.meta.glob<{ default: CarData }>('/data/cars/*.ts', { eager: true })

const byMake = new Map<string, CarData[]>()
for (const [path, mod] of Object.entries(allCars)) {
  if (path.endsWith('types.ts')) continue
  const car = mod.default
  const list = byMake.get(car.makeSlug) ?? []
  list.push(car)
  byMake.set(car.makeSlug, list)
}
for (const [, cars] of byMake) cars.sort((a, b) => a.model.localeCompare(b.model))
const makes = [...byMake.entries()].sort(([a], [b]) => a.localeCompare(b))
const totalModels = makes.reduce((n, [, cars]) => n + cars.length, 0)
const priceFrom = Math.min(...[...byMake.values()].flat().map(c => c.seo.priceFrom))

const heroWaHref = `https://wa.me/${WA}?text=${encodeURIComponent('Hi SGCarPass, I need a tyre quote for my car.')}`
const plateWaHref = `https://wa.me/${WA}?text=${encodeURIComponent('Hi SGCarPass, my car plate is ')}`
const bottomWaHref = `https://wa.me/${WA}?text=${encodeURIComponent("Hi SGCarPass, my car isn't listed on your website. Can you give me a tyre quote?")}`

const QUICK_LINK_ORDER = ['toyota', 'honda', 'nissan', 'hyundai', 'mazda']
const makeQuickLinks = QUICK_LINK_ORDER
  .map(slug => makes.find(([s]) => s === slug))
  .filter(Boolean) as typeof makes

useSeoMeta({
  title: 'Tyre Size & Price Guide for Singapore Cars | SGCarPass',
  description: `Find the correct tyre size and best price for your car in Singapore. ${totalModels} car models covered — Toyota, Honda and more. Compare Michelin vs Bridgestone. From $${priceFrom} installed. WhatsApp for a quote.`,
  ogTitle: 'Tyre Size & Price Guide for Singapore Cars | SGCarPass',
  ogDescription: `${totalModels} car models covered. Compare tyre brands and prices. From $${priceFrom} installed. WhatsApp for a quote in minutes.`,
  ogUrl: BASE_URL + '/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: BASE_URL + '/' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SGCarPass Tyres',
        url: BASE_URL,
        description: `Singapore's most complete car tyre size and price guide. ${totalModels} models covered.`,
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/tyres/{make}/{model}/` },
          'query-input': 'required name=make,model',
        },
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I find out the correct tyre size for my car in Singapore?',
            acceptedAnswer: { '@type': 'Answer', text: 'The easiest way is to check the sticker on the inside of your driver\'s door — it shows the OEM tyre size (e.g., 205/55R16). Alternatively, send us your car plate number on WhatsApp and we\'ll look it up for you within 5 minutes.' },
          },
          {
            '@type': 'Question',
            name: 'How much does it cost to change tyres in Singapore?',
            acceptedAnswer: { '@type': 'Answer', text: 'A full set of 4 tyres (installed) typically costs $350–$700+ depending on your car and tyre brand. Budget options start from $88 per tyre installed; mid-range (Bridgestone, Continental) from $118–$165; premium (Michelin, Pirelli) from $148–$220. Use our car model pages for exact price estimates.' },
          },
          {
            '@type': 'Question',
            name: 'Which tyre brands do SGCarPass carry?',
            acceptedAnswer: { '@type': 'Answer', text: 'We carry all major brands available in Singapore: Michelin, Bridgestone, Continental, Dunlop, Goodyear, Pirelli, Yokohama, Hankook, Kumho, and more. WhatsApp us your car model and budget — we\'ll recommend the best option for you.' },
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <!-- ── HERO ──────────────────────────────────────────────────────────── -->
  <section class="home-hero">
    <div class="home-hero-line" aria-hidden="true" />
    <div class="container home-hero-inner">

      <div class="home-hero-text">
        <h1 class="home-h1">
          <span class="home-h1-main">你的车该换什么轮胎？</span>
          <span class="home-h1-sub">Singapore's most complete car tyre guide</span>
        </h1>

        <div class="trust-bar">
          <span class="trust-item">✓ {{ totalModels }} car models</span>
          <span class="trust-sep">·</span>
          <span class="trust-item">✓ From ${{ priceFrom }} installed</span>
          <span class="trust-sep">·</span>
          <span class="trust-item">✓ WhatsApp reply in minutes</span>
        </div>

        <div class="hero-ctas">
          <a :href="heroWaHref" target="_blank" class="wa-btn wa-btn--lg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp for Tyre Quote
          </a>
          <span class="hero-or">or browse by car</span>
          <div class="make-pills">
            <NuxtLink
              v-for="[makeSlug, cars] in makeQuickLinks"
              :key="makeSlug"
              :to="`/tyres/${makeSlug}/`"
              class="make-pill"
            >{{ cars[0].make }}</NuxtLink>
            <NuxtLink to="/tyres/" class="make-pill make-pill--more">All →</NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ── CAR MODEL MATRIX ───────────────────────────────────────────────── -->
  <section class="home-models">
    <div class="container">
      <h2 class="section-title">Browse by Car Model</h2>
      <div
        v-for="[makeSlug, cars] in makes"
        :key="makeSlug"
        class="make-group"
      >
        <div class="make-group-header">
          <span class="make-group-name">{{ cars[0].make }}</span>
          <NuxtLink :to="`/tyres/${makeSlug}/`" class="make-group-link">All {{ cars[0].make }} →</NuxtLink>
        </div>
        <div class="model-grid">
          <NuxtLink
            v-for="car in cars"
            :key="car.modelSlug"
            :to="`/tyres/${car.makeSlug}/${car.modelSlug}/`"
            class="model-card"
          >
            <div class="model-card-size">{{ car.seo.oeSize }}</div>
            <div class="model-card-name">{{ car.model }}</div>
            <div class="model-card-gens">{{ car.generations.length }} generations covered</div>
            <div class="model-card-price">From <strong>${{ car.seo.priceFrom }}</strong> installed</div>
            <div class="model-card-arrow">View guide →</div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- ── PLATE HOOK ─────────────────────────────────────────────────────── -->
  <section class="home-plate">
    <div class="container home-plate-inner">
      <div class="home-plate-text">
        <h2 class="home-plate-title">不知道你的轮胎尺码？</h2>
        <p class="home-plate-desc">
          Send us your car plate number — we'll look up your OEM tyre size and
          give you a quote within 5 minutes.
        </p>
      </div>
      <a :href="plateWaHref" target="_blank" class="wa-btn wa-btn--outline">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Send My Car Plate
      </a>
    </div>
  </section>

  <!-- ── BRAND ROW ──────────────────────────────────────────────────────── -->
  <section class="home-brands">
    <div class="container">
      <p class="home-brands-label">Brands we carry</p>
      <div class="brand-row">
        <span class="brand-name">Michelin</span>
        <span class="brand-sep">·</span>
        <span class="brand-name">Bridgestone</span>
        <span class="brand-sep">·</span>
        <span class="brand-name">Continental</span>
        <span class="brand-sep">·</span>
        <span class="brand-name">Dunlop</span>
        <span class="brand-sep">·</span>
        <span class="brand-name">Goodyear</span>
        <span class="brand-sep">·</span>
        <span class="brand-name">Pirelli</span>
      </div>
    </div>
  </section>

  <!-- ── FAQ ───────────────────────────────────────────────────────────── -->
  <section class="home-faq">
    <div class="container">
      <h2 class="section-title">Common Questions</h2>
      <div class="faq-list">

        <details class="faq-item">
          <summary class="faq-q">How do I find the correct tyre size for my car?</summary>
          <p class="faq-a">
            Check the sticker on the inside of your driver's door — it shows your OEM tyre size
            (e.g., 205/55R16 91V). Or send us your car plate number on WhatsApp and we'll look
            it up for you within 5 minutes, free of charge.
          </p>
        </details>

        <details class="faq-item">
          <summary class="faq-q">How much does it cost to change tyres in Singapore?</summary>
          <p class="faq-a">
            A full set of 4 tyres (including installation) typically costs <strong>$350–$700+</strong>
            depending on your car and brand. Budget options (Kumho, Hankook) start from
            <strong>$88/tyre installed</strong>. Mid-range (Bridgestone, Continental) run
            $118–$165/tyre. Premium (Michelin, Pirelli) from $148–$220/tyre.
            Browse your car model page for exact price estimates.
          </p>
        </details>

        <details class="faq-item">
          <summary class="faq-q">What tyre brands do you carry?</summary>
          <p class="faq-a">
            We carry all major brands available in Singapore: Michelin, Bridgestone, Continental,
            Dunlop, Goodyear, Pirelli, Yokohama, Hankook, Kumho, and more. WhatsApp us your
            car model and budget — we'll recommend the best option for you.
          </p>
        </details>

      </div>
    </div>
  </section>

  <!-- ── BOTTOM CTA ─────────────────────────────────────────────────────── -->
  <section class="home-bottom-cta">
    <div class="container home-bottom-inner">
      <div>
        <p class="home-bottom-title">Don't see your car model?</p>
        <p class="home-bottom-desc">We service 100+ models — WhatsApp us your car and we'll get you a quote.</p>
      </div>
      <a :href="bottomWaHref" target="_blank" class="wa-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp Us
      </a>
    </div>
  </section>
</template>

<style scoped>
/* ── Hero ──────────────────────────────────────────────── */
.home-hero {
  position: relative;
  background: var(--ink);
  color: #fff;
  padding: 3rem 0 2.5rem;
}
.home-hero-line {
  position: absolute; top: 0; left: 0; right: 0;
  height: 4px; background: var(--red);
}
.home-hero-inner { position: relative; }

.home-h1 { margin: 0 0 1.25rem; line-height: 1.1; }
.home-h1-main {
  display: block;
  font-size: clamp(1.75rem, 6vw, 2.75rem);
  font-weight: 900;
  letter-spacing: -0.02em;
}
.home-h1-sub {
  display: block;
  font-size: 0.95rem;
  color: rgba(255,255,255,0.55);
  font-weight: 400;
  margin-top: 0.35rem;
  letter-spacing: 0.02em;
}

.trust-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.5rem;
  margin-bottom: 1.75rem;
  font-size: 0.85rem;
}
.trust-item { color: rgba(255,255,255,0.75); }
.trust-sep  { color: rgba(255,255,255,0.25); }

.hero-ctas { display: flex; flex-direction: column; align-items: flex-start; gap: 0.85rem; }
.hero-or { font-size: 0.8rem; color: rgba(255,255,255,0.4); }

.make-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.make-pill {
  display: inline-block;
  padding: 0.4rem 0.9rem;
  border: 1.5px solid rgba(255,255,255,0.2);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: border-color .15s, color .15s;
}
.make-pill:hover { border-color: var(--red); color: #fff; }
.make-pill--more { border-color: rgba(255,255,255,0.1); color: rgba(255,255,255,0.45); }
.make-pill--more:hover { border-color: var(--red); color: #fff; }

/* ── WA buttons ────────────────────────────────────────── */
.wa-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: #25D366; color: #fff;
  padding: 0.75rem 1.4rem; border-radius: 6px;
  font-weight: 700; font-size: 0.95rem;
  text-decoration: none; transition: opacity .15s;
  white-space: nowrap;
}
.wa-btn:hover { opacity: 0.88; }
.wa-btn--lg { padding: 0.85rem 1.6rem; font-size: 1rem; }
.wa-btn--outline {
  background: transparent;
  border: 2px solid var(--red);
  color: var(--red);
}
.wa-btn--outline:hover { background: var(--red); color: #fff; opacity: 1; }

/* ── Model section ─────────────────────────────────────── */
.home-models { padding: 3rem 0; }

.section-title { font-size: 1.4rem; font-weight: 800; margin: 0 0 1.5rem; }

.make-group { margin-bottom: 2rem; }
.make-group-header {
  display: flex; align-items: baseline; justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--border);
  margin-bottom: 0.9rem;
}
.make-group-name { font-size: 1.1rem; font-weight: 800; }
.make-group-link { font-size: 0.82rem; font-weight: 700; color: var(--red); text-decoration: none; }
.make-group-link:hover { text-decoration: underline; }

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
  padding: 1.1rem;
  text-decoration: none;
  color: var(--ink);
  transition: border-color .15s, box-shadow .15s;
}
.model-card:hover { border-color: var(--red); box-shadow: 0 4px 16px rgba(227,24,55,0.1); }
.model-card-size {
  display: inline-block;
  background: var(--cream); color: var(--muted);
  font-size: 0.72rem; font-weight: 700;
  padding: 0.18rem 0.55rem; border-radius: 4px;
  margin-bottom: 0.6rem; letter-spacing: 0.04em;
}
.model-card-name { font-size: 1.05rem; font-weight: 800; margin-bottom: 0.2rem; }
.model-card-gens { font-size: 0.78rem; color: var(--muted); margin-bottom: 0.5rem; }
.model-card-price { font-size: 0.85rem; margin-bottom: 0.5rem; }
.model-card-price strong { color: var(--red); }
.model-card-arrow { font-size: 0.82rem; font-weight: 700; color: var(--red); }

/* ── Plate hook ────────────────────────────────────────── */
.home-plate {
  background: var(--ink);
  color: #fff;
  padding: 2.5rem 0;
}
.home-plate-inner {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
}
.home-plate-title { font-size: 1.2rem; font-weight: 800; margin: 0 0 0.4rem; }
.home-plate-desc { margin: 0; color: rgba(255,255,255,0.65); font-size: 0.95rem; max-width: 420px; }

@media (min-width: 600px) {
  .home-plate-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

/* ── Brand row ─────────────────────────────────────────── */
.home-brands {
  background: var(--cream);
  padding: 1.75rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.home-brands-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.75rem;
}
.brand-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem 0.6rem; }
.brand-name { font-size: 1rem; font-weight: 700; color: var(--ink); }
.brand-sep { color: var(--muted); opacity: 0.4; }

/* ── FAQ ───────────────────────────────────────────────── */
.home-faq { padding: 3rem 0; }

.faq-list { display: flex; flex-direction: column; gap: 0; }
.faq-item {
  border-bottom: 1px solid var(--border);
}
.faq-item:first-child { border-top: 1px solid var(--border); }
.faq-q {
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.faq-q::-webkit-details-marker { display: none; }
.faq-q::after {
  content: '+';
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--muted);
  flex-shrink: 0;
  transition: transform .2s;
}
details[open] .faq-q::after { transform: rotate(45deg); }
.faq-a {
  margin: 0 0 1rem;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* ── Bottom CTA ────────────────────────────────────────── */
.home-bottom-cta { background: var(--ink); color: #fff; padding: 2.5rem 0; }
.home-bottom-inner {
  display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;
}
.home-bottom-title { font-size: 1.1rem; font-weight: 800; margin: 0 0 0.25rem; }
.home-bottom-desc { margin: 0; color: rgba(255,255,255,0.6); font-size: 0.9rem; }
@media (min-width: 600px) {
  .home-bottom-inner { flex-direction: row; align-items: center; justify-content: space-between; }
}
</style>
