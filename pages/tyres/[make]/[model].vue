<script setup lang="ts">
import type { CarData } from '~/data/cars/types'

const route = useRoute()
const makeSlug = route.params.make as string
const modelSlug = route.params.model as string

// Load all car data files at build time, pick the right one
const allCars = import.meta.glob<{ default: CarData }>('/data/cars/*.ts', { eager: true })
const car = allCars[`/data/cars/${makeSlug}-${modelSlug}.ts`]?.default

if (!car) {
  throw createError({ statusCode: 404, statusMessage: 'Car model not found' })
}

// ── SEO ──────────────────────────────────────────────────────────────
const { canonicalUrl } = useCarModelSeo(car, makeSlug, modelSlug)

// ── Generation selector ──────────────────────────────────────────────
const selectedGenKey = ref(car.defaultGen)
const currentGen = computed(() => car.generations.find(g => g.key === selectedGenKey.value)!)

// ── Price tab ────────────────────────────────────────────────────────
const activeTab = ref(car.priceTabs[0].size)

// ── WA links ─────────────────────────────────────────────────────────
const WA = '6581525875'

const heroWaHref = computed(() => {
  const g = currentGen.value
  const txt = encodeURIComponent(`Hi SGCarPass, I have a ${g.years} ${car.make} ${car.model} (${g.label}) and need a tyre quote.`)
  return `https://wa.me/${WA}?text=${txt}`
})

const genericWaHref = computed(() => {
  const txt = encodeURIComponent(`Hi SGCarPass, I have a ${car.make} ${car.model} and need a tyre quote.`)
  return `https://wa.me/${WA}?text=${txt}`
})

const upgradeWaHref = computed(() => {
  const g = currentGen.value
  if (!g.upgrade) return ''
  const txt = encodeURIComponent(`Hi SGCarPass, I want to upgrade my ${g.years} ${car.make} ${car.model} to ${g.upgrade.size} on ${g.upgrade.rimInch}" rims. Please quote rim + tyre package.`)
  return `https://wa.me/${WA}?text=${txt}`
})

function waForSize(size: string): string {
  const g = currentGen.value
  const txt = encodeURIComponent(`Hi SGCarPass, ${car.make} ${car.model} ${g.years} (${g.label}) ${size} tyre quote please.`)
  return `https://wa.me/${WA}?text=${txt}`
}

function uniqueSizes(gen: typeof currentGen.value): string[] {
  const seen = new Set<string>()
  gen.variants.forEach(v => v.sizes.forEach(s => seen.add(s.size)))
  return [...seen]
}

// ── Radar chart math ─────────────────────────────────────────────────
const CX = 70, CY = 70, MAX_R = 44, N = 6
const LABELS = ['Wet', 'Dry', 'Wear', 'NVH', 'Fuel', 'Value']
const GRID_RINGS = [0.25, 0.5, 0.75, 1]

function axisAngle(i: number) { return (i / N) * 2 * Math.PI - Math.PI / 2 }
function hexPoints(scale: number) {
  return Array.from({ length: N }, (_, i) => {
    const a = axisAngle(i)
    return `${(CX + scale * MAX_R * Math.cos(a)).toFixed(1)},${(CY + scale * MAX_R * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}
function scorePoints(scores: number[]) {
  return scores.map((s, i) => {
    const a = axisAngle(i)
    const r = (s / 100) * MAX_R
    return `${(CX + r * Math.cos(a)).toFixed(1)},${(CY + r * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}
function axisEnd(i: number) {
  const a = axisAngle(i)
  return { x: (CX + MAX_R * Math.cos(a)).toFixed(1), y: (CY + MAX_R * Math.sin(a)).toFixed(1) }
}
function labelPos(i: number) {
  const a = axisAngle(i)
  const r = MAX_R + 13
  return { x: (CX + r * Math.cos(a)).toFixed(1), y: (CY + r * Math.sin(a)).toFixed(1) }
}

// ── Buying guide filter ──────────────────────────────────────────────
const visibleGuide = computed(() =>
  car.buyingGuide.filter(item => !item.genKey || item.genKey === selectedGenKey.value)
)

// ── Year Size Finder ─────────────────────────────────────────────────
const yearToGen = computed(() => {
  const map = new Map<number, (typeof car.generations)[0]>()
  car.generations.forEach(gen => {
    const [startStr, endStr] = gen.years.split('–')
    const start = parseInt(startStr)
    const end = parseInt(endStr) || start
    for (let y = start; y <= end; y++) map.set(y, gen)
  })
  return map
})

const finderYears = computed(() =>
  [...yearToGen.value.keys()].sort((a, b) => b - a)
)

const finderYear = ref<number | ''>('')

const finderResult = computed(() => {
  if (finderYear.value === '') return null
  return yearToGen.value.get(Number(finderYear.value)) ?? null
})

function waForFinderYear(size: string): string {
  const txt = encodeURIComponent(`Hi SGCarPass, ${finderYear.value} ${car.make} ${car.model} ${size} tyre quote please.`)
  return `https://wa.me/${WA}?text=${txt}`
}

const allBoltPatterns = computed(() => {
  const seen = new Set<string>()
  car.rimSpecs.forEach(r => seen.add(r.boltPattern))
  return [...seen]
})
</script>

<template>
  <!-- ── HERO ─────────────────────────────────────────────────────── -->
  <section class="hero">
    <div class="hero-stripes" aria-hidden="true" />
    <div class="hero-bg-word" aria-hidden="true">{{ car.bgWord }}</div>
    <div class="hero-red-line" aria-hidden="true" />
    <div class="container hero-content">

      <nav aria-label="breadcrumb" class="breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span class="bc-sep">/</span>
        <span>{{ car.make }} {{ car.model }} Tyres</span>
      </nav>

      <div class="hero-badges">
        <span class="badge badge-green">✓ Updated Jun 2026</span>
        <span class="badge badge-red">{{ car.generations.map(g => g.label).join(' · ') }}</span>
      </div>

      <h1 class="hero-title">
        <span class="hero-make">{{ car.make.toUpperCase() }}</span>
        <em class="hero-model">{{ car.model.toUpperCase() }}</em>
        <span class="hero-guide">TYRE GUIDE · SINGAPORE</span>
      </h1>

      <p class="hero-trust">
        Singapore's most complete {{ car.make }} {{ car.model }} tyre guide —
        select your generation below to find your exact size.
      </p>

      <a :href="genericWaHref" target="_blank" class="wa-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp for Tyre Quote
      </a>
    </div>
  </section>

  <!-- ── WHY US BAR ──────────────────────────────────────────────── -->
  <div class="why-us-bar">
    <div class="why-us-inner">
      <div class="why-us-item">
        <span class="why-us-check">✓</span>
        <span>2,400+ {{ car.make }}s fitted in Singapore</span>
      </div>
      <div class="why-us-item">
        <span class="why-us-check">✓</span>
        <span>Rim upgrade packages available</span>
      </div>
      <div class="why-us-item">
        <span class="why-us-check">✓</span>
        <span>Full-set quote within the hour</span>
      </div>
    </div>
  </div>

  <!-- ── SECTION NAV ──────────────────────────────────────────────── -->
  <div class="section-nav">
    <div class="container section-nav-inner">
      <a href="#sizes">Tyre Sizes</a>
      <a href="#rims-spec">Rim Specs</a>
      <a href="#prices">Prices</a>
      <a href="#brands">Brands</a>
      <a href="#faq">FAQ</a>
      <a href="#size-finder">Size Finder</a>
    </div>
  </div>

  <!-- ── MAIN ─────────────────────────────────────────────────────── -->
  <main class="container main-content">

    <!-- 01 OEM TYRE SIZES -->
    <section id="sizes" class="card">
      <div class="section-head">
        <span class="section-num">01</span>
        <div>
          <h2>OEM Tyre Sizes</h2>
          <p>Factory-fitted sizes · verified against LTA-registered specs</p>
        </div>
      </div>

      <!-- Generation selector -->
      <div class="gen-tabs-wrap">
        <span class="gen-tabs-label">Select your generation:</span>
        <div class="gen-tabs">
          <button
            v-for="gen in car.generations"
            :key="gen.key"
            class="gen-tab-btn"
            :class="{ active: selectedGenKey === gen.key }"
            @click="selectedGenKey = gen.key"
          >
            {{ gen.label }}<span class="gen-tab-years">{{ gen.years }}</span>
          </button>
        </div>
      </div>

      <Transition name="note-fade">
        <p v-if="currentGen.note" class="gen-note">{{ currentGen.note }}</p>
      </Transition>

      <!-- v-show keeps all gen blocks in DOM so Google indexes full data -->
      <div
        v-for="gen in car.generations"
        :key="gen.key"
        v-show="selectedGenKey === gen.key"
        class="year-result"
      >
        <div class="yr-header">
          <span class="yr-car">🚗 {{ car.make }} {{ car.model }}</span>
          <span class="yr-gen">{{ gen.label }} · {{ gen.years }}</span>
        </div>
        <div class="variant-list">
          <div v-for="v in gen.variants" :key="v.name" class="variant-block">
            <div class="variant-name">{{ v.name }}</div>
            <div v-for="s in v.sizes" :key="s.size" class="size-row">
              <span class="size-tag" :class="s.tag === 'OE' ? 'stag-oe' : 'stag-alt'">{{ s.tag === 'OE' ? '原厂' : '可换' }}</span>
              <span class="size-val">{{ s.size }}</span>
              <span v-if="s.note" class="size-note">{{ s.note }}</span>
            </div>
          </div>
        </div>
        <div class="price-query">
          <p class="pq-label">查今日价格 👇</p>
          <div class="pq-links">
            <a
              v-for="(sz, i) in uniqueSizes(gen)"
              :key="sz"
              :href="waForSize(sz)"
              target="_blank"
              class="pq-link"
            >
              <span class="pq-num">{{ i + 1 }}</span>
              <span class="pq-size">{{ sz }}</span>
              <span class="pq-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <p class="table-note">Sizes verified against LTA-registered specs. Last updated Jun 2026.</p>
    </section>

    <!-- 02 RIM SPECS -->
    <section id="rims-spec" class="card">
      <div class="section-head">
        <span class="section-num">02</span>
        <div>
          <h2>Rim &amp; Wheel Specs</h2>
          <p>OEM factory specifications · verify with your dealer before buying aftermarket wheels</p>
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Year / Variant</th>
              <th>Width</th>
              <th>Diameter</th>
              <th>Offset</th>
              <th>Bolt Pattern</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rim in car.rimSpecs" :key="rim.label">
              <td class="row-label">{{ rim.label }}</td>
              <td class="mono-bold">{{ rim.width }}</td>
              <td class="mono-alt">{{ rim.diameter }}</td>
              <td class="mono-alt">{{ rim.offset }}</td>
              <td class="mono-bold bolt-red">{{ rim.boltPattern }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="spec-pills-bar">
        <span><strong>Centre bore:</strong> {{ car.rimCommon.centreBore }}</span>
        <span class="pill-divider">·</span>
        <span><strong>Stud:</strong> {{ car.rimCommon.stud }}</span>
        <span class="pill-divider">·</span>
        <span><strong>Torque:</strong> {{ car.rimCommon.torque }}</span>
        <template v-if="car.rimCommon.notes">
          <span class="pill-divider">·</span>
          <span>{{ car.rimCommon.notes }}</span>
        </template>
        <template v-if="car.rimCommon.warning">
          <span class="pill-divider">·</span>
          <span>{{ car.rimCommon.warning }}</span>
        </template>
      </div>
    </section>

    <!-- 03 PRICES -->
    <section id="prices" class="card">
      <div class="section-head">
        <span class="section-num">03</span>
        <div>
          <h2>Best Tyres by Budget</h2>
          <p>Select your tyre size below</p>
        </div>
      </div>

      <div class="tab-row">
        <button
          v-for="tab in car.priceTabs"
          :key="tab.size"
          class="tab-btn"
          :class="{ active: activeTab === tab.size }"
          @click="activeTab = tab.size"
        >
          {{ tab.tabLabel }}
        </button>
      </div>

      <template v-for="tab in car.priceTabs" :key="tab.size">
        <template v-if="activeTab === tab.size">
          <div class="price-grid">
            <div class="price-card">
              <span class="tier">Budget</span>
              <p class="tyre-name">{{ tab.budget.name }}</p>
              <p class="tyre-desc">{{ tab.budget.desc }}</p>
              <p class="price-big">${{ tab.budget.price }}</p>
              <p class="price-unit">per tyre installed</p>
              <p class="also">{{ tab.budget.also }}</p>
              <a :href="`https://wa.me/${WA}?text=Hi%20SGCarPass%2C%20${tab.budget.waText}.`" target="_blank" class="quote-link">Get quote →</a>
            </div>
            <div class="price-card" :class="tab.mid.popular ? 'price-card--popular' : ''">
              <div v-if="tab.mid.popular" class="popular-bar">Most Popular</div>
              <span class="tier tier--mid">Mid-Range</span>
              <p class="tyre-name">{{ tab.mid.name }}</p>
              <p class="tyre-desc">{{ tab.mid.desc }}</p>
              <p class="price-big price-big--mid">${{ tab.mid.price }}</p>
              <p class="price-unit">per tyre installed</p>
              <p class="also">{{ tab.mid.also }}</p>
              <a :href="`https://wa.me/${WA}?text=Hi%20SGCarPass%2C%20${tab.mid.waText}.`" target="_blank" class="quote-link quote-link--mid">Get quote →</a>
            </div>
            <div class="price-card price-card--premium">
              <span class="tier tier--premium">Premium</span>
              <p class="tyre-name">{{ tab.premium.name }}</p>
              <p class="tyre-desc">{{ tab.premium.desc }}</p>
              <p class="price-big price-big--premium">${{ tab.premium.price }}</p>
              <p class="price-unit">per tyre installed</p>
              <p class="also">{{ tab.premium.also }}</p>
              <a :href="`https://wa.me/${WA}?text=Hi%20SGCarPass%2C%20${tab.premium.waText}.`" target="_blank" class="quote-link quote-link--premium">Get quote →</a>
            </div>
          </div>
          <div class="set-estimate">
            <strong>Full set of 4 tyres + installation:</strong> {{ tab.setEstimate }}
          </div>
        </template>
      </template>
    </section>

    <!-- 04 BRAND RATINGS -->
    <section id="brands" class="card">
      <div class="section-head">
        <span class="section-num">04</span>
        <div>
          <h2>Singapore Tyre Ratings</h2>
          <p>Real performance scores from user reviews · {{ car.radarSize }} size</p>
        </div>
      </div>
      <p class="radar-source">
        {{ car.radarSource.split('Source:')[0] }}Source:
        <a href="https://www.tyrereviews.com" target="_blank" rel="nofollow noopener">TyreReviews.com</a>.
        {{ car.radarSource.split('Source:')[1]?.replace(/TyreReviews\.com\.\s*/, '') }}
      </p>
      <div class="radar-grid">
        <div
          v-for="(radar, idx) in car.radarBrands"
          :key="idx"
          class="radar-col"
          :class="{ 'radar-col--mid': idx === 1 }"
        >
          <span :class="radar.labelClass">{{ radar.label }}</span>
          <p class="radar-name">{{ radar.name }}</p>
          <div class="radar-svg-wrap" :style="{ transformOrigin: idx === 0 ? '25% center' : idx === 2 ? '75% center' : 'center' }">
            <svg width="100%" viewBox="0 0 140 140" class="radar-svg">
              <polygon v-for="s in GRID_RINGS" :key="s" :points="hexPoints(s)" fill="none" :stroke="s === 1 ? '#d1d5db' : '#f0f0ee'" :stroke-width="s === 1 ? '1.5' : '1'" />
              <line v-for="i in 6" :key="i" :x1="CX" :y1="CY" :x2="axisEnd(i-1).x" :y2="axisEnd(i-1).y" stroke="#ece9e1" stroke-width="1" />
              <polygon :points="scorePoints(radar.scores)" :fill="radar.fill" :stroke="radar.stroke" stroke-width="2" stroke-linejoin="round" />
              <circle v-for="(s, i) in radar.scores" :key="i" :cx="(CX + (s/100)*MAX_R*Math.cos(axisAngle(i))).toFixed(1)" :cy="(CY + (s/100)*MAX_R*Math.sin(axisAngle(i))).toFixed(1)" r="2.5" :fill="radar.stroke" />
              <text v-for="(lbl, i) in LABELS" :key="lbl" :x="labelPos(i).x" :y="labelPos(i).y" font-size="8" fill="#9ca3af" text-anchor="middle" dominant-baseline="middle" font-family="Outfit,system-ui,sans-serif">{{ lbl }}</text>
            </svg>
          </div>
          <p class="radar-score" :style="{ color: radar.stroke }">{{ radar.score }}</p>
          <p class="radar-score-label">SG Score / 10</p>
          <div class="radar-stats">
            <div v-for="stat in radar.stats" :key="stat.k" class="radar-stat-row">
              <span>{{ stat.k }}</span>
              <span :class="['radar-stat-val', stat.hi ? 'hi' : '']">{{ stat.v }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- UPGRADE PATH — appears after user has seen tyre options; conditional on gen data -->
    <Transition name="note-fade">
      <section v-if="currentGen.upgrade" :key="selectedGenKey" class="card upgrade-card">
        <div class="section-head">
          <div>
            <h2>Already decided on tyres? One step further.</h2>
            <p>What Singapore {{ car.make }} {{ car.model }} owners do after picking their tyre</p>
          </div>
        </div>
        <div class="upgrade-showcase">
          <div class="upgrade-col upgrade-col--stock">
            <div class="upgrade-col-label">Your Factory Size</div>
            <div class="upgrade-col-size">{{ uniqueSizes(currentGen).join(' · ') }}</div>
            <div class="upgrade-col-sub">OEM · stock 17&quot; / 16&quot; rims</div>
          </div>
          <div class="upgrade-divider" aria-hidden="true">
            <span class="upgrade-arrow-icon">→</span>
            <span class="upgrade-arrow-label">Popular<br>upgrade</span>
          </div>
          <div class="upgrade-col upgrade-col--new">
            <div class="upgrade-hot-badge">🔥 Most common in SG</div>
            <div class="upgrade-col-size upgrade-col-size--highlight">{{ currentGen.upgrade.size }}</div>
            <div class="upgrade-col-sub">on {{ currentGen.upgrade.rimInch }}&quot; aftermarket rims</div>
            <p class="upgrade-note-text">{{ currentGen.upgrade.note }}</p>
            <a :href="upgradeWaHref" target="_blank" class="upgrade-wa-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Ask for Rim + Tyre Package
            </a>
          </div>
        </div>
      </section>
    </Transition>

    <!-- CTA BLOCK -->
    <div class="cta-block">
      <div class="cta-inner">
        <div>
          <h2>Get a Tyre Quote</h2>
          <p>Tell us your generation and variant — we'll confirm size and price within the hour.</p>
        </div>
        <a :href="heroWaHref" target="_blank" class="cta-wa-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp Tyre Price
        </a>
      </div>
    </div>

    <!-- 05 BUYING GUIDE -->
    <section class="card">
      <div class="section-head">
        <span class="section-num">05</span>
        <div>
          <h2>Buying Guide</h2>
          <p>Which tyre is right for your {{ car.model }}?</p>
        </div>
      </div>
      <div class="guide-items">
        <div
          v-for="item in visibleGuide"
          :key="item.title"
          class="guide-item"
          :class="`guide-item--${item.color}`"
        >
          <h3>{{ item.title }}</h3>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="item.body" />
        </div>
      </div>
    </section>

    <!-- 06 FAQ -->
    <section id="faq" class="faq-section">
      <div class="faq-title-row">
        <span class="section-num">06</span>
        <h2 class="rims-title">Frequently Asked Questions</h2>
      </div>
      <details v-for="(item, i) in car.faq" :key="i" class="faq-item" :open="i === 0">
        <summary>
          <h3>{{ item.q }}</h3>
          <svg class="faq-chevron-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="faq-body"><p>{{ item.a }}</p></div>
      </details>
    </section>

    <!-- 07 TYRE SIZE FINDER -->
    <section id="size-finder" class="card sf-card">
      <div class="section-head">
        <span class="section-num">07</span>
        <div>
          <h2>Tyre Size Finder</h2>
          <p>Quick lookup for mechanics — select registration year, get exact size + bolt pattern</p>
        </div>
      </div>

      <div class="sf-tool">
        <div class="sf-select-row">
          <label for="sf-year" class="sf-label">Registration Year</label>
          <select id="sf-year" v-model="finderYear" class="sf-select">
            <option value="">-- Select year --</option>
            <option v-for="y in finderYears" :key="y" :value="y">{{ y }}</option>
          </select>
        </div>

        <div v-if="finderYear === ''" class="sf-empty">
          Select a year above to instantly see tyre sizes and bolt pattern.
        </div>

        <Transition name="note-fade">
          <div v-if="finderResult" class="sf-result">
            <div class="sf-gen-badge">{{ finderResult.label }} · {{ finderResult.years }}</div>

            <div class="sf-variant-table">
              <div v-for="v in finderResult.variants" :key="v.name" class="sf-variant-row">
                <span class="sf-variant-name">{{ v.name }}</span>
                <div class="sf-size-chips">
                  <span
                    v-for="s in v.sizes"
                    :key="s.size"
                    class="sf-size-chip"
                    :class="s.tag === 'OE' ? 'sf-chip-oe' : 'sf-chip-alt'"
                  >
                    {{ s.size }}<small>{{ s.tag === 'OE' ? ' OE' : ' Alt' }}</small>
                  </span>
                </div>
              </div>
            </div>

            <div class="sf-specs-bar">
              <span>Bolt pattern: <strong>{{ allBoltPatterns.join(' / ') }}</strong></span>
              <span class="pill-divider">·</span>
              <span>Centre bore: <strong>{{ car.rimCommon.centreBore }}</strong></span>
              <span class="pill-divider">·</span>
              <span>Torque: <strong>{{ car.rimCommon.torque }}</strong></span>
            </div>

            <div class="sf-wa-row">
              <a
                v-for="sz in uniqueSizes(finderResult)"
                :key="sz"
                :href="waForFinderYear(sz)"
                target="_blank"
                class="pq-link sf-wa-link"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp quote for {{ sz }}
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </section>

  </main>
</template>

<style scoped>
@import '~/assets/css/tyre-landing.css';

/* ── Hero trust text ─────────────────────────────────────────────── */
.hero-trust {
  font-size: 0.9375rem; line-height: 1.6;
  color: rgba(255,255,255,0.45);
  max-width: 520px; margin: 0.75rem 0 1.75rem;
}

/* ── Why-us bar (between hero and section nav) ───────────────────── */
.why-us-bar {
  background: #0F0F12;
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  padding: 0.875rem 1.25rem;
}
.why-us-inner {
  max-width: 780px; margin: 0 auto;
  display: flex; flex-wrap: wrap; gap: 0.5rem 2.5rem;
  justify-content: center;
}
.why-us-item {
  display: flex; align-items: center; gap: 0.4rem;
  font-size: 0.8125rem; font-weight: 500; color: rgba(255,255,255,0.55);
}
.why-us-check { color: #22c55e; font-weight: 700; }

/* ── Generation tabs (in card — light background) ────────────────── */
.gen-tabs-wrap { margin-bottom: 1rem; }
.gen-tabs-label {
  font-size: 0.625rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--muted);
  display: block; margin-bottom: 0.5rem;
}
.gen-tabs { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.gen-tab-btn {
  display: flex; flex-direction: column; align-items: center;
  padding: 0.5rem 1rem; border-radius: 8px;
  border: 1px solid var(--border); background: transparent;
  font-family: 'Outfit', sans-serif; font-size: 0.875rem; font-weight: 700;
  color: var(--muted); cursor: pointer; transition: all 0.15s; line-height: 1.3;
}
.gen-tab-btn:hover { border-color: rgba(26,23,25,0.3); color: var(--ink); background: rgba(26,23,25,0.03); }
.gen-tab-btn.active { background: var(--accent); border-color: var(--accent); color: white; box-shadow: 0 4px 14px var(--accent-glow); }
.gen-tab-years { font-size: 0.625rem; font-weight: 500; opacity: 0.7; }
.gen-tab-btn.active .gen-tab-years { opacity: 0.9; }

.gen-note {
  background: var(--cream); border: 1px solid var(--border);
  border-radius: 8px; padding: 0.625rem 0.875rem;
  font-size: 0.8125rem; color: var(--muted); line-height: 1.5;
  margin-top: 0.75rem; margin-bottom: 0;
}
.note-fade-enter-active, .note-fade-leave-active { transition: opacity 0.2s, transform 0.2s; }
.note-fade-enter-from, .note-fade-leave-to { opacity: 0; transform: translateY(-4px); }

/* ── Upgrade showcase ────────────────────────────────────────────── */
.upgrade-showcase {
  display: flex; align-items: center; gap: 0;
  margin: 1.25rem 0 1.5rem;
  border: 1px solid var(--border); border-radius: 12px;
  overflow: hidden; background: white;
}
.upgrade-col {
  padding: 1.25rem 1.5rem; flex: 1;
}
.upgrade-col--stock {
  background: var(--cream);
  border-right: 1px solid var(--border);
}
.upgrade-col--new {
  background: white;
}
.upgrade-col-label {
  font-size: 0.625rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--muted); margin-bottom: 0.4rem;
}
.upgrade-col-size {
  font-size: 1.375rem; font-weight: 800; color: var(--muted); line-height: 1.1;
  margin-bottom: 0.25rem;
}
.upgrade-col-size--highlight {
  color: var(--ink);
}
.upgrade-col-sub {
  font-size: 0.75rem; color: var(--muted); margin-bottom: 0;
}
.upgrade-divider {
  display: flex; flex-direction: column; align-items: center;
  padding: 0 0.875rem; flex-shrink: 0;
  color: var(--muted);
}
.upgrade-arrow-icon { font-size: 1.25rem; line-height: 1; color: var(--accent); }
.upgrade-arrow-label { font-size: 0.5625rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; text-align: center; color: var(--muted); margin-top: 0.2rem; }
.upgrade-hot-badge {
  display: inline-block; font-size: 0.6875rem; font-weight: 700;
  color: #c05621; background: #fff7ed; border: 1px solid #fed7aa;
  border-radius: 20px; padding: 0.15rem 0.6rem;
  margin-bottom: 0.5rem;
}
.upgrade-note-text {
  font-size: 0.8125rem; color: var(--muted); line-height: 1.5;
  margin: 0.5rem 0 0.875rem;
}
.upgrade-wa-btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  background: #25d366; color: white;
  font-family: 'Outfit', sans-serif; font-size: 0.8125rem; font-weight: 700;
  padding: 0.5rem 1rem; border-radius: 8px;
  text-decoration: none; transition: background 0.15s;
}
.upgrade-wa-btn:hover { background: #1ebe5d; }
@media (max-width: 600px) {
  .upgrade-showcase { flex-direction: column; }
  .upgrade-col--stock { border-right: none; border-bottom: 1px solid var(--border); }
  .upgrade-divider { flex-direction: row; padding: 0.5rem 1.5rem; gap: 0.5rem; }
  .upgrade-arrow-icon { font-size: 1rem; }
}

/* ── OEM sizes — variant list ────────────────────────────────────── */
.yr-header {
  display: flex; align-items: center; flex-wrap: wrap; gap: 0.625rem;
  margin-bottom: 1.25rem; padding-bottom: 0.875rem;
  border-bottom: 1px solid var(--border);
}
.yr-car { font-size: 1rem; font-weight: 700; color: var(--ink); }
.yr-gen {
  font-size: 0.625rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.07em; color: var(--muted);
  background: rgba(26,23,25,0.05); border: 1px solid var(--border);
  border-radius: 999px; padding: 0.175rem 0.625rem;
}
.variant-list {
  display: flex; flex-direction: column; gap: 0; margin-bottom: 1.25rem;
  border: 1px solid var(--border); border-radius: 10px; overflow: hidden;
}
.variant-block {
  padding: 0.875rem 1.125rem; border-bottom: 1px solid rgba(26,23,25,0.06);
  background: white;
}
.variant-block:last-child { border-bottom: none; }
.variant-name {
  font-size: 0.6875rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.07em; color: var(--muted); margin-bottom: 0.5rem;
}
.size-row { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem; }
.size-row:last-child { margin-bottom: 0; }
.stag-oe {
  font-size: 0.5625rem; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase;
  color: white; background: var(--red); border-radius: 3px;
  padding: 0.125rem 0.375rem; flex-shrink: 0;
}
.stag-alt {
  font-size: 0.5625rem; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--muted); background: rgba(26,23,25,0.05);
  border: 1px solid var(--border); border-radius: 3px;
  padding: 0.125rem 0.375rem; flex-shrink: 0;
}
.size-val {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.25rem; font-weight: 800; color: var(--ink); letter-spacing: 0.02em;
}
.size-note { font-size: 0.6875rem; color: var(--muted); }

/* ── Price query (WA green links) ────────────────────────────────── */
.price-query {
  background: var(--cream); border: 1px solid var(--border);
  border-radius: 12px; padding: 1.125rem 1.25rem;
}
.pq-label {
  font-size: 0.625rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--muted); margin: 0 0 0.75rem;
}
.pq-links { display: flex; flex-direction: column; gap: 0.5rem; }
.pq-link {
  display: flex; align-items: center; gap: 0.75rem;
  text-decoration: none; color: white;
  padding: 0.625rem 1rem; border-radius: 9px;
  background: #25D366; font-weight: 700;
  transition: background 0.15s, transform 0.12s;
}
.pq-link:hover { background: #20bd5a; transform: translateX(3px); }
.pq-num {
  display: inline-flex; align-items: center; justify-content: center;
  width: 1.5rem; height: 1.5rem; border-radius: 50%;
  background: rgba(0,0,0,0.18); color: white;
  font-size: 0.6875rem; font-weight: 800; flex-shrink: 0;
}
.pq-size {
  flex: 1; font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.125rem; font-weight: 800; letter-spacing: 0.02em;
}
.pq-arrow { opacity: 0.7; flex-shrink: 0; }

/* ── Upgrade card (standalone, after brand ratings) ─────────────── */
.upgrade-card { border-top: 3px solid var(--accent, #E31837); }

/* ── Size Finder (Section 07) ────────────────────────────────────── */
.sf-card { background: #f9f8f5; }
.sf-tool { max-width: 640px; }
.sf-select-row {
  display: flex; align-items: center; gap: 1rem;
  margin-bottom: 1.25rem; flex-wrap: wrap;
}
.sf-label {
  font-size: 0.8125rem; font-weight: 700; color: var(--ink);
  white-space: nowrap;
}
.sf-select {
  padding: 0.5rem 1rem; border-radius: 8px;
  border: 1.5px solid var(--border); background: white;
  font-family: 'Outfit', sans-serif; font-size: 0.9375rem; font-weight: 600;
  color: var(--ink); cursor: pointer; min-width: 180px;
  appearance: auto;
}
.sf-select:focus { outline: 2px solid var(--accent, #E31837); border-color: transparent; }
.sf-empty {
  font-size: 0.875rem; color: var(--muted);
  padding: 1rem 0; font-style: italic;
}
.sf-result { padding-top: 0.25rem; }
.sf-gen-badge {
  display: inline-block;
  font-size: 0.6875rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.07em; color: var(--muted);
  background: rgba(26,23,25,0.05); border: 1px solid var(--border);
  border-radius: 999px; padding: 0.2rem 0.75rem;
  margin-bottom: 1rem;
}
.sf-variant-table {
  border: 1px solid var(--border); border-radius: 10px;
  overflow: hidden; margin-bottom: 1rem;
}
.sf-variant-row {
  display: flex; align-items: center; flex-wrap: wrap; gap: 0.75rem;
  padding: 0.75rem 1rem; background: white;
  border-bottom: 1px solid rgba(26,23,25,0.06);
}
.sf-variant-row:last-child { border-bottom: none; }
.sf-variant-name {
  font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.06em; color: var(--muted);
  min-width: 130px;
}
.sf-size-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.sf-size-chip {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.0625rem; font-weight: 800; letter-spacing: 0.02em;
  padding: 0.2rem 0.625rem; border-radius: 6px;
}
.sf-size-chip small {
  font-family: 'Outfit', sans-serif;
  font-size: 0.5625rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.06em; vertical-align: middle; margin-left: 0.2rem;
}
.sf-chip-oe {
  background: var(--red, #E31837); color: white;
}
.sf-chip-alt {
  background: rgba(26,23,25,0.06); color: var(--muted);
  border: 1px solid var(--border);
}
.sf-specs-bar {
  display: flex; flex-wrap: wrap; gap: 0.4rem 0.75rem;
  align-items: center;
  font-size: 0.8125rem; color: var(--muted);
  padding: 0.75rem 1rem;
  background: var(--cream); border: 1px solid var(--border);
  border-radius: 8px; margin-bottom: 1rem;
}
.sf-wa-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.sf-wa-link { flex: 1; min-width: 200px; }
@media (max-width: 540px) {
  .sf-variant-row { flex-direction: column; align-items: flex-start; }
  .sf-variant-name { min-width: unset; }
}

/* ── FAQ ─────────────────────────────────────────────────────────── */
.faq-title-row {
  display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1.25rem;
}
.faq-chevron-svg { color: var(--muted); flex-shrink: 0; transition: transform 0.2s; }
.faq-item[open] .faq-chevron-svg { transform: rotate(180deg); }
</style>
