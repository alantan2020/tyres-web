<script setup lang="ts">
import { getBrand } from '~/data/tyres/brands'
import { getBrandProducts } from '~/data/tyres/products'

const route = useRoute()
const brandSlug = route.params.brand as string
const brand = getBrand(brandSlug)
const prods = getBrandProducts(brandSlug)

if (!brand || !prods.length) {
  throw createError({ statusCode: 404, message: 'Brand not found' })
}

const BASE = 'https://tyres.sgcarpass.com'
const canonicalUrl = `${BASE}/tyres/brands/${brandSlug}/`

useSeoMeta({
  title: `${brand.name} Tyres Singapore — All Models & Prices | SGCarPass`,
  description: `Browse all ${brand.name} tyres available in Singapore. ${prods.length} models stocked — from ${brand.tagline}. Compare performance scores and WhatsApp for today's price.`,
  ogTitle: `${brand.name} Tyres Singapore | SGCarPass`,
  ogUrl: canonicalUrl,
  ogType: 'website',
})
useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${brand.name} Tyres Singapore`,
      url: canonicalUrl,
      description: brand.description,
    }),
  }],
})

const tierLabel = (t: string | null) => t === 'economy' ? 'Budget' : t === 'mid' ? 'Mid-Range' : t === 'premium' ? 'Premium' : ''
const barColor = (s: number | null) => !s ? '#e5e7eb' : s >= 85 ? '#16a34a' : s >= 70 ? '#ca8a04' : '#dc2626'
const WA = '6581525875'
const waHref = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi SGCarPass, I'm looking for a ${brand.name} tyre quote for my car. Can you advise?`)}`
</script>

<template>
  <div class="container brand-page">
    <nav class="breadcrumb">
      <NuxtLink to="/">Home</NuxtLink> /
      <NuxtLink to="/tyres/brands/">Brands</NuxtLink> /
      <span>{{ brand.name }}</span>
    </nav>

    <header class="brand-header">
      <div>
        <h1 class="brand-title">{{ brand.name }} Tyres in Singapore</h1>
        <p class="brand-origin-tag">{{ brand.origin }} · {{ brand.tier === 'premium' ? 'Premium' : brand.tier === 'mid' ? 'Mid-Range' : 'Budget' }} Brand</p>
      </div>
      <a :href="waHref" target="_blank" class="wa-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Get Quote
      </a>
    </header>

    <p class="brand-desc">{{ brand.description }}</p>

    <h2 class="section-heading">{{ prods.length }} Models Available in Singapore</h2>

    <div class="products-grid">
      <NuxtLink
        v-for="p in prods"
        :key="p.slug"
        :to="`/tyres/brands/${p.brandSlug}/${p.slug}/`"
        class="product-card"
      >
        <div class="pc-top">
          <div>
            <span class="pc-category">{{ p.category }}</span>
            <h3 class="pc-name">{{ p.name }}</h3>
          </div>
          <span class="pc-tier" :class="`pc-tier--${p.tier}`">{{ tierLabel(p.tier) }}</span>
        </div>

        <div class="pc-scores">
          <div class="pc-score-row">
            <span class="pc-score-label">Wet</span>
            <div class="pc-bar-track"><div class="pc-bar-fill" :style="{ width: (p.scores.wet ?? 0) + '%', background: barColor(p.scores.wet) }" /></div>
            <span class="pc-score-val">{{ p.scores.wet ?? '—' }}</span>
          </div>
          <div class="pc-score-row">
            <span class="pc-score-label">Dry</span>
            <div class="pc-bar-track"><div class="pc-bar-fill" :style="{ width: (p.scores.dry ?? 0) + '%', background: barColor(p.scores.dry) }" /></div>
            <span class="pc-score-val">{{ p.scores.dry ?? '—' }}</span>
          </div>
          <div class="pc-score-row">
            <span class="pc-score-label">Comfort</span>
            <div class="pc-bar-track"><div class="pc-bar-fill" :style="{ width: (p.scores.comfort ?? 0) + '%', background: barColor(p.scores.comfort) }" /></div>
            <span class="pc-score-val">{{ p.scores.comfort ?? '—' }}</span>
          </div>
          <div class="pc-score-row">
            <span class="pc-score-label">Wear</span>
            <div class="pc-bar-track"><div class="pc-bar-fill" :style="{ width: (p.scores.wear ?? 0) + '%', background: barColor(p.scores.wear) }" /></div>
            <span class="pc-score-val">{{ p.scores.wear ?? '—' }}</span>
          </div>
        </div>

        <div class="pc-footer">
          <span v-if="p.scores.overall" class="pc-overall">{{ p.scores.overall }}/10 TyreReviews</span>
          <span class="pc-cta">View & Quote →</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.brand-page { padding: 1.5rem 0 3rem; }
.breadcrumb { font-size: 0.82rem; color: var(--muted); margin-bottom: 1.5rem; }
.breadcrumb a { color: var(--red); text-decoration: none; }

.brand-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
.brand-title { font-size: 1.65rem; font-weight: 900; margin: 0 0 0.25rem; }
.brand-origin-tag { font-size: 0.82rem; color: var(--muted); margin: 0; }

.wa-btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  background: #25D366; color: #fff; padding: 0.6rem 1.2rem;
  border-radius: 6px; font-weight: 700; font-size: 0.875rem;
  text-decoration: none; white-space: nowrap; flex-shrink: 0;
}
.wa-btn:hover { opacity: 0.88; }

.brand-desc { color: var(--muted); font-size: 0.95rem; line-height: 1.65; margin: 0 0 2rem; max-width: 680px; }
.section-heading { font-size: 1.15rem; font-weight: 800; margin: 0 0 1rem; }

.products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }

.product-card {
  background: #fff; border: 1.5px solid var(--border);
  border-radius: 12px; padding: 1.25rem;
  text-decoration: none; color: var(--ink);
  display: flex; flex-direction: column; gap: 0.85rem;
  transition: border-color .15s, box-shadow .15s;
}
.product-card:hover { border-color: var(--red); box-shadow: 0 4px 16px rgba(227,24,55,.1); }

.pc-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; }
.pc-category { font-size: 0.7rem; text-transform: uppercase; letter-spacing: .05em; color: var(--muted); display: block; margin-bottom: 0.2rem; }
.pc-name { font-size: 1.05rem; font-weight: 800; margin: 0; }

.pc-tier { font-size: 0.62rem; font-weight: 800; text-transform: uppercase; padding: 0.15rem 0.45rem; border-radius: 4px; flex-shrink: 0; margin-top: 0.2rem; }
.pc-tier--premium { background: #fef3c7; color: #92400e; }
.pc-tier--mid { background: #dbeafe; color: #1d4ed8; }
.pc-tier--economy { background: #f3f4f6; color: #4b5563; }

.pc-scores { display: flex; flex-direction: column; gap: 0.3rem; }
.pc-score-row { display: flex; align-items: center; gap: 0.5rem; }
.pc-score-label { font-size: 0.68rem; color: var(--muted); width: 3.5rem; flex-shrink: 0; }
.pc-bar-track { flex: 1; height: 5px; background: #f3f4f6; border-radius: 3px; overflow: hidden; }
.pc-bar-fill { height: 100%; border-radius: 3px; }
.pc-score-val { font-size: 0.68rem; font-weight: 700; color: var(--ink); width: 1.5rem; text-align: right; }

.pc-footer { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
.pc-overall { font-size: 0.75rem; color: var(--muted); }
.pc-cta { font-size: 0.8rem; font-weight: 700; color: var(--red); }
</style>
