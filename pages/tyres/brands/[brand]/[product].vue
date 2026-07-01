<script setup lang="ts">
import { getProduct, getProductBySlug } from '~/data/tyres/products'
import { carSizeMap } from '~/data/tyres/car-size-map'

const route = useRoute()
const brandSlug = route.params.brand as string
const productSlug = route.params.product as string

const p = getProduct(brandSlug, productSlug)
if (!p) throw createError({ statusCode: 404, message: 'Product not found' })

const BASE = 'https://tyres.sgcarpass.com'
const WA = '6581525875'
const canonicalUrl = `${BASE}/tyres/brands/${brandSlug}/${productSlug}/`

// Live sizes from API (client-side only)
const { sizes, loading: sizesLoading, minPrice } = useTyreProductSizes(p.patternPrefix)

// Compatible cars — from pre-computed size→cars map (avoids bundling 141 car files)
const compatibleCars = computed(() => {
  const sizeSet = new Set(sizes.value.map(s => s.displaySize))
  const seen = new Set<string>()
  const matches: { make: string; model: string; makeSlug: string; modelSlug: string; sizes: string[] }[] = []
  for (const sz of sizeSet) {
    for (const car of (carSizeMap[sz] ?? [])) {
      const key = `${car.makeSlug}/${car.modelSlug}`
      if (!seen.has(key)) {
        seen.add(key)
        const carSizes = [...sizeSet].filter(s => carSizeMap[s]?.some(c => c.makeSlug === car.makeSlug && c.modelSlug === car.modelSlug))
        matches.push({ ...car, sizes: carSizes })
      }
    }
  }
  return matches.slice(0, 12)
})

// Compare products
const compareItems = computed(() => p.compare.map(slug => getProductBySlug(slug)).filter(Boolean))

// Brand family links
const brandFamilyItems = computed(() =>
  p.brandFamily.map(slug => getProduct(p.brandSlug, slug)).filter(Boolean)
)

// WA links
const waQuoteHref = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi SGCarPass, I'm interested in the ${p.brand} ${p.name}. Please advise on available sizes and today's price.`)}`

// SEO
const priceText = minPrice.value ? `from S$${minPrice.value}` : 'available in Singapore'
useSeoMeta({
  title: `${p.brand} ${p.name} Price Singapore ${new Date().getFullYear()} | SGCarPass`,
  description: `${p.brand} ${p.name} ${priceText}. Wet grip ${p.scores.wet}/100, Comfort ${p.scores.comfort}/100. Independent performance scores + live Singapore pricing. WhatsApp for a quote.`,
  ogTitle: `${p.brand} ${p.name} Singapore | SGCarPass`,
  ogUrl: canonicalUrl,
  ogType: 'product',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${p.brand} ${p.name}`,
        brand: { '@type': 'Brand', name: p.brand },
        category: 'Tyre',
        description: p.whoIsItFor,
        url: canonicalUrl,
        ...(p.scores.overall ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: String(p.scores.overall),
            bestRating: '10',
            reviewCount: '25',
          },
        } : {}),
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: p.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }),
    },
  ],
})

// Helpers
const tierLabel = (t: string) => t === 'economy' ? 'Budget' : t === 'mid' ? 'Mid-Range' : 'Premium'
const tierClass = (t: string) => `tier--${t}`
const barColor = (s: number | null) => !s ? '#e5e7eb' : s >= 85 ? '#16a34a' : s >= 70 ? '#ca8a04' : '#dc2626'
const scoreRows = [
  { key: 'wet', label: 'Wet Grip', value: p.scores.wet },
  { key: 'dry', label: 'Dry Grip', value: p.scores.dry },
  { key: 'handling', label: 'Handling', value: p.scores.handling },
  { key: 'comfort', label: 'Comfort', value: p.scores.comfort },
  { key: 'wear', label: 'Wear Life', value: p.scores.wear },
  { key: 'buyAgain', label: 'Buy Again', value: p.scores.buyAgain },
]
</script>

<template>
  <div class="container product-page">

    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <NuxtLink to="/">Home</NuxtLink> /
      <NuxtLink to="/tyres/brands/">Brands</NuxtLink> /
      <NuxtLink :to="`/tyres/brands/${p.brandSlug}/`">{{ p.brand }}</NuxtLink> /
      <span>{{ p.name }}</span>
    </nav>

    <!-- ① HERO -->
    <section class="hero">
      <div class="hero-left">
        <span class="hero-brand">{{ p.brand }}</span>
        <h1 class="hero-name">{{ p.name }}</h1>
        <div class="hero-meta">
          <span class="tier-badge" :class="tierClass(p.tier)">{{ tierLabel(p.tier) }}</span>
          <span class="hero-category">{{ p.category }}</span>
        </div>
        <div class="hero-price">
          <template v-if="sizesLoading">
            <span class="price-loading">Loading price…</span>
          </template>
          <template v-else-if="minPrice">
            <span class="price-from">from</span>
            <span class="price-amount">${{ minPrice }}</span>
            <span class="price-note">installed · Singapore</span>
          </template>
          <template v-else>
            <span class="price-na">Contact us for pricing</span>
          </template>
        </div>
      </div>
      <a :href="waQuoteHref" target="_blank" class="wa-btn wa-btn--hero">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp for Quote
      </a>
    </section>

    <!-- ② SIX-DIMENSION SCORES -->
    <section class="section scores-section">
      <h2 class="section-title">Performance Scores</h2>
      <div class="scores-grid">
        <div v-for="row in scoreRows" :key="row.key" class="score-row">
          <span class="score-label">{{ row.label }}</span>
          <div class="score-track">
            <div class="score-fill" :style="{ width: (row.value ?? 0) + '%', background: barColor(row.value) }" />
          </div>
          <span class="score-val" :style="{ color: barColor(row.value) }">{{ row.value ?? '—' }}</span>
        </div>
      </div>
      <p class="score-overall" v-if="p.scores.overall">
        Overall TyreReviews Score: <strong>{{ p.scores.overall }}/10</strong>
      </p>
      <p class="score-source">Source: <a href="https://www.tyrereviews.com" target="_blank" rel="nofollow noopener">TyreReviews.com</a> — independent user reviews</p>
    </section>

    <!-- ③ AVAILABLE SIZES + PRICE -->
    <section class="section">
      <h2 class="section-title">Available Sizes in Singapore</h2>
      <div v-if="sizesLoading" class="loading-msg">Loading live prices…</div>
      <div v-else-if="sizes.length" class="sizes-table">
        <div class="sizes-header">
          <span>Size</span><span>From</span><span>Stock</span>
        </div>
        <a
          v-for="s in sizes"
          :key="s.rawSize"
          :href="`https://wa.me/${WA}?text=${encodeURIComponent(`Hi SGCarPass, I'd like a quote for ${p.brand} ${p.name} size ${s.displaySize}. Please advise.`)}`"
          target="_blank"
          class="size-row"
        >
          <span class="size-label">{{ s.displaySize }}</span>
          <span class="size-price">${{ s.minPrice }}</span>
          <span class="size-stock">{{ s.totalStock > 10 ? 'In Stock' : `${s.totalStock} left` }}</span>
        </a>
      </div>
      <div v-else class="loading-msg">No sizes in stock — <a :href="waQuoteHref" target="_blank">WhatsApp us</a> for availability.</div>
      <p class="live-note">Prices updated daily · Click any size to WhatsApp for today's exact quote</p>
    </section>

    <!-- ④ COMPATIBLE CARS -->
    <section class="section" v-if="compatibleCars.length">
      <h2 class="section-title">Compatible Cars</h2>
      <p class="section-sub">Singapore car models that use the same tyre sizes available for this product</p>
      <div class="cars-grid">
        <NuxtLink
          v-for="car in compatibleCars"
          :key="car.modelSlug"
          :to="`/tyres/${car.makeSlug}/${car.modelSlug}/`"
          class="car-chip"
        >
          <span class="car-make">{{ car.make }}</span>
          <span class="car-model">{{ car.model }}</span>
          <span class="car-sizes">{{ car.sizes.join(', ') }}</span>
        </NuxtLink>
      </div>
    </section>

    <!-- ⑤ COMPARE -->
    <section class="section" v-if="compareItems.length">
      <h2 class="section-title">Compare with Alternatives</h2>
      <div class="compare-table">
        <div class="compare-header">
          <span>Tyre</span><span>Wet</span><span>Dry</span><span>Comfort</span><span>Wear</span>
        </div>
        <!-- current product row -->
        <div class="compare-row compare-row--current">
          <span class="compare-name">{{ p.brand }} {{ p.name }} <em>(this tyre)</em></span>
          <span class="compare-score" :style="{ color: barColor(p.scores.wet) }">{{ p.scores.wet ?? '—' }}</span>
          <span class="compare-score" :style="{ color: barColor(p.scores.dry) }">{{ p.scores.dry ?? '—' }}</span>
          <span class="compare-score" :style="{ color: barColor(p.scores.comfort) }">{{ p.scores.comfort ?? '—' }}</span>
          <span class="compare-score" :style="{ color: barColor(p.scores.wear) }">{{ p.scores.wear ?? '—' }}</span>
        </div>
        <NuxtLink
          v-for="alt in compareItems"
          :key="alt!.slug"
          :to="`/tyres/brands/${alt!.brandSlug}/${alt!.slug}/`"
          class="compare-row compare-row--link"
        >
          <span class="compare-name">{{ alt!.brand }} {{ alt!.name }}</span>
          <span class="compare-score" :style="{ color: barColor(alt!.scores.wet) }">{{ alt!.scores.wet ?? '—' }}</span>
          <span class="compare-score" :style="{ color: barColor(alt!.scores.dry) }">{{ alt!.scores.dry ?? '—' }}</span>
          <span class="compare-score" :style="{ color: barColor(alt!.scores.comfort) }">{{ alt!.scores.comfort ?? '—' }}</span>
          <span class="compare-score" :style="{ color: barColor(alt!.scores.wear) }">{{ alt!.scores.wear ?? '—' }}</span>
        </NuxtLink>
      </div>
    </section>

    <!-- ⑥ WHO IS IT FOR -->
    <section class="section">
      <h2 class="section-title">Who Is This Tyre For?</h2>
      <p class="who-text">{{ p.whoIsItFor }}</p>
    </section>

    <!-- ⑦ FAQ -->
    <section class="section faq-section">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="faq-list">
        <details v-for="faq in p.faqs" :key="faq.q" class="faq-item">
          <summary class="faq-q">{{ faq.q }}</summary>
          <p class="faq-a">{{ faq.a }}</p>
        </details>
      </div>
    </section>

    <!-- ⑧ BRAND FAMILY -->
    <section class="section" v-if="brandFamilyItems.length">
      <h2 class="section-title">Other {{ p.brand }} Tyres</h2>
      <div class="family-grid">
        <NuxtLink
          v-for="fam in brandFamilyItems"
          :key="fam!.slug"
          :to="`/tyres/brands/${fam!.brandSlug}/${fam!.slug}/`"
          class="family-chip"
        >
          <span class="family-name">{{ fam!.name }}</span>
          <span class="family-cat">{{ fam!.category }}</span>
          <span class="family-scores">Wet {{ fam!.scores.wet ?? '—' }} · Dry {{ fam!.scores.dry ?? '—' }}</span>
        </NuxtLink>
      </div>
    </section>

    <!-- ⑨ FOOTER CTA -->
    <section class="section footer-cta">
      <h2 class="footer-cta-title">Get today's exact quote for {{ p.name }}</h2>
      <p class="footer-cta-sub">WhatsApp us your car model — we'll confirm the exact size, check stock, and reply within minutes.</p>
      <a :href="waQuoteHref" target="_blank" class="wa-btn wa-btn--lg">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp for {{ p.brand }} {{ p.name }} Quote
      </a>
    </section>

  </div>
</template>

<style scoped>
.product-page { padding: 1.5rem 0 3rem; max-width: 780px; }
.breadcrumb { font-size: 0.82rem; color: var(--muted); margin-bottom: 1.5rem; }
.breadcrumb a { color: var(--red); text-decoration: none; }

/* Hero */
.hero {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 1.25rem; flex-wrap: wrap; margin-bottom: 2rem;
  padding-bottom: 1.5rem; border-bottom: 2px solid var(--border);
}
.hero-brand { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); }
.hero-name { font-size: 2rem; font-weight: 900; letter-spacing: -0.02em; margin: 0.2rem 0 0.6rem; line-height: 1.1; }
.hero-meta { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1rem; flex-wrap: wrap; }
.hero-category { font-size: 0.82rem; color: var(--muted); }

.tier-badge { font-size: 0.65rem; font-weight: 800; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: 4px; }
.tier--premium { background: #fef3c7; color: #92400e; }
.tier--mid { background: #dbeafe; color: #1d4ed8; }
.tier--economy { background: #f3f4f6; color: #4b5563; }

.hero-price { display: flex; align-items: baseline; gap: 0.4rem; flex-wrap: wrap; }
.price-from { font-size: 0.9rem; color: var(--muted); }
.price-amount { font-size: 2rem; font-weight: 900; color: var(--green, #15803d); font-family: 'Barlow Condensed', sans-serif; }
.price-note { font-size: 0.8rem; color: var(--muted); }
.price-loading, .price-na { font-size: 0.9rem; color: var(--muted); font-style: italic; }

.wa-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: #25D366; color: #fff; padding: 0.7rem 1.4rem;
  border-radius: 6px; font-weight: 700; font-size: 0.9rem;
  text-decoration: none; white-space: nowrap; flex-shrink: 0;
}
.wa-btn:hover { opacity: 0.88; }
.wa-btn--hero { align-self: flex-start; margin-top: 0.75rem; }
.wa-btn--lg { padding: 0.85rem 1.6rem; font-size: 1rem; }

/* Sections */
.section { margin-bottom: 2.25rem; }
.section-title { font-size: 1.15rem; font-weight: 800; margin: 0 0 1rem; }
.section-sub { font-size: 0.85rem; color: var(--muted); margin: -0.5rem 0 0.75rem; }

/* Scores */
.scores-section { background: #f9fafb; border-radius: 12px; padding: 1.25rem 1.5rem; }
.scores-grid { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.75rem; }
.score-row { display: flex; align-items: center; gap: 0.75rem; }
.score-label { font-size: 0.8rem; color: var(--muted); width: 5rem; flex-shrink: 0; }
.score-track { flex: 1; height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden; }
.score-fill { height: 100%; border-radius: 4px; transition: width 0.4s; }
.score-val { font-size: 0.85rem; font-weight: 800; width: 2.5rem; text-align: right; flex-shrink: 0; }
.score-overall { font-size: 0.9rem; color: var(--muted); margin: 0 0 0.25rem; }
.score-overall strong { color: var(--ink); }
.score-source { font-size: 0.75rem; color: var(--muted); margin: 0; }
.score-source a { color: var(--muted); }

/* Sizes */
.loading-msg { font-size: 0.9rem; color: var(--muted); font-style: italic; }
.loading-msg a { color: var(--red); }
.sizes-table { border: 1.5px solid var(--border); border-radius: 10px; overflow: hidden; margin-bottom: 0.5rem; }
.sizes-header {
  display: grid; grid-template-columns: 1fr auto auto;
  gap: 1rem; padding: 0.6rem 1rem;
  background: #f9fafb; font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .05em; color: var(--muted);
}
.size-row {
  display: grid; grid-template-columns: 1fr auto auto;
  gap: 1rem; padding: 0.75rem 1rem;
  border-top: 1px solid var(--border);
  text-decoration: none; color: var(--ink);
  transition: background .12s;
}
.size-row:hover { background: #f0fdf4; }
.size-label { font-weight: 700; font-size: 0.95rem; }
.size-price { font-weight: 800; color: #15803d; font-size: 1rem; }
.size-stock { font-size: 0.8rem; color: var(--muted); white-space: nowrap; }
.live-note { font-size: 0.75rem; color: var(--muted); margin: 0; }

/* Compatible cars */
.cars-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.car-chip {
  display: flex; flex-direction: column; gap: 0.15rem;
  border: 1.5px solid var(--border); border-radius: 8px;
  padding: 0.6rem 0.9rem; text-decoration: none; color: var(--ink);
  transition: border-color .12s;
}
.car-chip:hover { border-color: var(--red); }
.car-make { font-size: 0.68rem; text-transform: uppercase; letter-spacing: .05em; color: var(--muted); }
.car-model { font-size: 0.9rem; font-weight: 800; }
.car-sizes { font-size: 0.72rem; color: var(--muted); }

/* Compare */
.compare-table { border: 1.5px solid var(--border); border-radius: 10px; overflow-x: auto; }
.compare-header, .compare-row {
  display: grid; grid-template-columns: 1fr repeat(4, 3.5rem);
  gap: 0.5rem; padding: 0.65rem 1rem; align-items: center;
}
.compare-header { background: #f9fafb; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--muted); }
.compare-row { border-top: 1px solid var(--border); }
.compare-row--current { background: #f0fdf4; }
.compare-row--link { text-decoration: none; color: var(--ink); transition: background .12s; }
.compare-row--link:hover { background: #fff7f7; }
.compare-name { font-size: 0.875rem; font-weight: 600; }
.compare-name em { font-size: 0.75rem; color: var(--muted); font-style: normal; }
.compare-score { font-size: 0.875rem; font-weight: 800; text-align: center; }

/* Who is it for */
.who-text { font-size: 0.95rem; line-height: 1.75; color: var(--ink); max-width: 640px; }

/* FAQ */
.faq-list { display: flex; flex-direction: column; }
.faq-item { border-bottom: 1px solid var(--border); }
.faq-item:first-child { border-top: 1px solid var(--border); }
.faq-q {
  padding: 0.9rem 0; font-size: 0.95rem; font-weight: 700;
  cursor: pointer; list-style: none;
  display: flex; justify-content: space-between; align-items: center; gap: 1rem;
}
.faq-q::-webkit-details-marker { display: none; }
.faq-q::after { content: '+'; font-size: 1.1rem; font-weight: 400; color: var(--muted); flex-shrink: 0; }
details[open] .faq-q::after { content: '−'; }
.faq-a { margin: 0 0 1rem; font-size: 0.9rem; line-height: 1.7; color: var(--muted); }

/* Brand family */
.family-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.family-chip {
  display: flex; flex-direction: column; gap: 0.1rem;
  border: 1.5px solid var(--border); border-radius: 8px;
  padding: 0.5rem 0.85rem; text-decoration: none; color: var(--ink);
  transition: border-color .12s;
}
.family-chip:hover { border-color: var(--red); }
.family-name { font-size: 0.875rem; font-weight: 700; }
.family-cat { font-size: 0.68rem; color: var(--muted); }
.family-scores { font-size: 0.7rem; color: var(--muted); }

/* Footer CTA */
.footer-cta {
  background: var(--ink); color: #fff;
  border-radius: 14px; padding: 1.75rem;
  display: flex; flex-direction: column; gap: 0.75rem;
}
.footer-cta-title { font-size: 1.15rem; font-weight: 800; margin: 0; }
.footer-cta-sub { margin: 0; color: rgba(255,255,255,.6); font-size: 0.9rem; }
</style>
