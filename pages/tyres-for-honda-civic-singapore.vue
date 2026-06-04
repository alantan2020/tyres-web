<script setup lang="ts">
useSeoMeta({
  title: 'Honda Civic Tyre Size & Best Price Singapore | SGCarPass',
  description: 'Honda Civic uses 215/50R17 or 235/40R18 tyres. Compare Michelin ($175) vs Bridgestone ($145). From $110 installed in Singapore. WhatsApp for a quote.',
  ogTitle: 'Honda Civic Tyre Size & Best Price Singapore | SGCarPass',
  ogDescription: 'Honda Civic uses 215/50R17 or 235/40R18 tyres. Compare Michelin ($175) vs Bridgestone ($145). From $110 installed in Singapore. WhatsApp for a quote.',
  ogUrl: 'https://tyres.sgcarpass.com/tyres-for-honda-civic-singapore/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Honda Civic Tyre Size & Best Price Singapore | SGCarPass',
  twitterDescription: 'Honda Civic uses 215/50R17 or 235/40R18 tyres. Compare Michelin ($175) vs Bridgestone ($145). From $110 installed in Singapore.',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://tyres.sgcarpass.com/tyres-for-honda-civic-singapore/' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tyres.sgcarpass.com/' },
          { '@type': 'ListItem', position: 2, name: 'Honda Civic Tyres Singapore', item: 'https://tyres.sgcarpass.com/tyres-for-honda-civic-singapore/' },
        ],
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
            name: 'What tyre size does the Honda Civic use in Singapore?',
            acceptedAnswer: { '@type': 'Answer', text: 'Honda Civic Gen 11 FE (2022–2026): all variants including the e:HEV hybrid use 235/40R18. Gen 10 FC (2016–2021) 1.5T Turbo: OE size 215/50R17. Gen 10 FC 1.8 i-VTEC: OE size 215/55R16. Gen 10 FC Facelift Sport (2019–2021): 235/40R18. All generations share the 5×114.3 bolt pattern with a 64.1mm centre bore.' },
          },
          {
            '@type': 'Question',
            name: 'What is the bolt pattern of the Honda Civic FC and FE?',
            acceptedAnswer: { '@type': 'Answer', text: 'Both the Gen 10 FC (2016–2021) and Gen 11 FE (2022–2026) use the 5×114.3 bolt pattern (also written as 5×4.5"). Centre bore is 64.1mm, lug nut thread is M12×1.5, torque spec is 108 Nm.' },
          },
          {
            '@type': 'Question',
            name: 'How much does it cost to replace tyres on a Honda Civic in Singapore?',
            acceptedAnswer: { '@type': 'Answer', text: 'For 215/50R17: budget brands from $110–$130 per tyre installed; mid-range $145–$175; premium $175–$220. For 235/40R18: budget from $155; mid-range $195–$230; premium $240–$290. A full set of 4 mid-range tyres with installation for the 1.5T Turbo typically costs $580–$700.' },
          },
          {
            '@type': 'Question',
            name: 'Can I fit 215/55R16 tyres on a Honda Civic 1.5T instead of 215/50R17?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. On the Gen 10 Honda Civic FC 1.5T, fitting 215/55R16 on 16-inch wheels is safe and legal. The overall tyre diameter changes by less than 2%, within Singapore\'s acceptable tolerance. Prices start from $110 vs $120 for 17-inch tyres.' },
          },
          {
            '@type': 'Question',
            name: 'How often should I change tyres on my Honda Civic in Singapore?',
            acceptedAnswer: { '@type': 'Answer', text: 'In Singapore\'s climate, tyres typically last 3–5 years or 40,000–50,000 km, whichever comes first. Singapore law requires minimum 1.6mm tread depth; experts recommend replacing at 3mm for safety in heavy rain. Tyres over 5 years old should be inspected even if tread looks adequate.' },
          },
        ],
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Best Tyres for Honda Civic Singapore',
        itemListElement: [
          {
            '@type': 'ListItem', position: 1,
            item: {
              '@type': 'Product',
              name: 'Hankook Kinergy Eco 2 K435 215/50R17',
              brand: { '@type': 'Brand', name: 'Hankook' },
              offers: { '@type': 'Offer', price: '110', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } },
            },
          },
          {
            '@type': 'ListItem', position: 2,
            item: {
              '@type': 'Product',
              name: 'Bridgestone Ecopia EP300 215/50R17',
              brand: { '@type': 'Brand', name: 'Bridgestone' },
              offers: { '@type': 'Offer', price: '145', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } },
            },
          },
          {
            '@type': 'ListItem', position: 3,
            item: {
              '@type': 'Product',
              name: 'Michelin Primacy 4+ 215/50R17',
              brand: { '@type': 'Brand', name: 'Michelin' },
              offers: { '@type': 'Offer', price: '175', priceCurrency: 'SGD', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31', seller: { '@type': 'Organization', name: 'SGCarPass' } },
            },
          },
        ],
      }),
    },
  ],
})

const activeTab = ref<'R17' | 'R18'>('R17')

const CX = 70, CY = 70, MAX_R = 44, N = 6

function axisAngle(i: number) {
  return (i / N) * 2 * Math.PI - Math.PI / 2
}
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

const LABELS = ['Wet', 'Dry', 'Wear', 'NVH', 'Fuel', 'Value']
const GRID_RINGS = [0.25, 0.5, 0.75, 1]
</script>

<template>
  <!-- ── HERO ─────────────────────────────────────────────────────────────── -->
  <section class="hero">
    <div class="hero-stripes" aria-hidden="true" />
    <div class="hero-bg-word" aria-hidden="true">CIVIC</div>
    <div class="hero-red-line" aria-hidden="true" />
    <div class="container hero-content">
      <nav aria-label="breadcrumb" class="breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span class="bc-sep">/</span>
        <span>Honda Civic Tyres</span>
      </nav>

      <div class="hero-badges">
        <span class="badge badge-green">✓ Updated May 2026</span>
        <span class="badge badge-red">Gen 10 + Gen 11</span>
      </div>

      <h1 class="hero-title">
        <span class="hero-make">HONDA</span>
        <em class="hero-model">CIVIC</em>
        <span class="hero-guide">TYRE GUIDE</span>
      </h1>
      <p class="hero-eyebrow">Singapore · OEM Sizes · Price Comparison · Rim Fitment</p>

      <div class="spec-chips">
        <div class="spec-chip">
          <span class="chip-label">Gen 11 FE (2022–)</span>
          <span class="chip-value">235/40R18</span>
        </div>
        <div class="spec-chip">
          <span class="chip-label">Gen 10 FC 1.5T</span>
          <span class="chip-value">215/50R17</span>
        </div>
        <div class="spec-chip">
          <span class="chip-label">Gen 10 FC 1.8</span>
          <span class="chip-value">215/55R16</span>
        </div>
        <div class="spec-chip spec-chip--green">
          <span class="chip-label">From installed</span>
          <span class="chip-value chip-green">$110</span>
        </div>
      </div>

      <a
        href="https://wa.me/6581525875?text=Hi%20SGCarPass%2C%20I%20have%20a%20Honda%20Civic%20and%20need%20a%20tyre%20quote."
        target="_blank"
        class="wa-btn"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp for Tyre Quote
      </a>
    </div>
  </section>

  <!-- ── SECTION NAV ────────────────────────────────────────────────────── -->
  <div class="section-nav">
    <div class="container section-nav-inner">
      <a href="#sizes">Tyre Sizes</a>
      <a href="#rims-spec">Rim Specs</a>
      <a href="#prices">Prices</a>
      <a href="#brands">Brands</a>
      <a href="#faq">FAQ</a>
    </div>
  </div>

  <!-- ── MAIN ──────────────────────────────────────────────────────────── -->
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
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Year / Variant</th>
              <th>Type</th>
              <th>Tyre Size</th>
              <th class="text-right">From (installed)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="row-label">2022–2026 · Gen 11 FE · All variants</td>
              <td><span class="tag tag-oe">OE</span></td>
              <td class="mono-bold">235/40R18</td>
              <td class="price-cell">from $155</td>
            </tr>
            <tr>
              <td class="row-label muted">2022–2026 · Gen 11 FE · e:HEV Hybrid</td>
              <td><span class="tag tag-oe">OE</span></td>
              <td class="mono-bold">235/40R18</td>
              <td class="price-cell">from $155</td>
            </tr>
            <tr>
              <td class="row-label">2016–2021 · Gen 10 FC · 1.5 VTEC Turbo</td>
              <td><span class="tag tag-oe">OE</span></td>
              <td class="mono-bold">215/50R17</td>
              <td class="price-cell">from $120</td>
            </tr>
            <tr>
              <td class="row-label muted">2016–2021 · Gen 10 FC · 1.5 VTEC Turbo</td>
              <td><span class="tag tag-alt">Alt</span></td>
              <td class="mono-alt">215/55R16</td>
              <td class="price-cell muted">from $110</td>
            </tr>
            <tr>
              <td class="row-label">2016–2021 · Gen 10 FC · 1.8 i-VTEC</td>
              <td><span class="tag tag-oe">OE</span></td>
              <td class="mono-bold">215/55R16</td>
              <td class="price-cell">from $110</td>
            </tr>
            <tr>
              <td class="row-label">2019–2021 · Gen 10 FC · Facelift Sport</td>
              <td><span class="tag tag-oe">OE</span></td>
              <td class="mono-bold">235/40R18</td>
              <td class="price-cell">from $155</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="table-note">Prices are market reference estimates inclusive of installation. Last updated May 2026.</p>
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
            <tr>
              <td class="row-label">2022–2026 · Gen 11 FE</td>
              <td class="mono-bold">8J</td>
              <td class="mono-alt">18"</td>
              <td class="mono-alt">ET50</td>
              <td class="mono-bold" style="color: var(--red);">5×114.3</td>
            </tr>
            <tr>
              <td class="row-label">2016–2021 · Gen 10 FC · 1.5T (17")</td>
              <td class="mono-bold">7J</td>
              <td class="mono-alt">17"</td>
              <td class="mono-alt">ET45</td>
              <td class="mono-bold" style="color: var(--red);">5×114.3</td>
            </tr>
            <tr>
              <td class="row-label">2016–2021 · Gen 10 FC · 1.8 (16" base)</td>
              <td class="mono-bold">7J</td>
              <td class="mono-alt">16"</td>
              <td class="mono-alt">ET45</td>
              <td class="mono-bold" style="color: var(--red);">5×114.3</td>
            </tr>
            <tr>
              <td class="row-label">2019–2021 · Gen 10 FC · Facelift Sport</td>
              <td class="mono-bold">8J</td>
              <td class="mono-alt">18"</td>
              <td class="mono-alt">ET50</td>
              <td class="mono-bold" style="color: var(--red);">5×114.3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="spec-pills-bar">
        <span><strong>Centre bore:</strong> 64.1mm</span>
        <span class="pill-divider">·</span>
        <span><strong>Stud:</strong> M12×1.5</span>
        <span class="pill-divider">·</span>
        <span><strong>Torque:</strong> 108 Nm</span>
        <span class="pill-divider">·</span>
        <span>Hub rings needed if aftermarket bore differs</span>
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
        <button class="tab-btn" :class="{ active: activeTab === 'R17' }" @click="activeTab = 'R17'">
          215/50R17 · Gen 10 1.5T
        </button>
        <button class="tab-btn" :class="{ active: activeTab === 'R18' }" @click="activeTab = 'R18'">
          235/40R18 · Gen 11 / Sport
        </button>
      </div>

      <template v-if="activeTab === 'R17'">
        <div class="price-grid">
          <div class="price-card">
            <span class="tier">Budget</span>
            <p class="tyre-name">Hankook Kinergy Eco 2 K435</p>
            <p class="tyre-desc">Long mileage · quiet highway · Wet grip: B</p>
            <p class="price-big">$110</p>
            <p class="price-unit">per tyre installed</p>
            <p class="also">Also: Kumho Ecsta HS51, Maxxis MAP5</p>
            <a href="https://wa.me/6581525875?text=Hi%20SGCarPass%2C%20I'd%20like%20a%20budget%20tyre%20quote%20for%20Honda%20Civic%20215%2F50R17%20(Hankook%20Kinergy%20or%20similar)." target="_blank" class="quote-link">Get quote →</a>
          </div>
          <div class="price-card price-card--popular">
            <span class="tier tier--mid">Mid-Range ⭐ Popular</span>
            <p class="tyre-name">Bridgestone Ecopia EP300</p>
            <p class="tyre-desc">Fuel efficient · excellent wet grip · Wet grip: A</p>
            <p class="price-big price-big--mid">$145</p>
            <p class="price-unit">per tyre installed</p>
            <p class="also">Also: Continental CC6, Dunlop SP Sport</p>
            <a href="https://wa.me/6581525875?text=Hi%20SGCarPass%2C%20I'd%20like%20a%20mid-range%20tyre%20quote%20for%20Honda%20Civic%20215%2F50R17%20(Bridgestone%20Ecopia%20EP300%20or%20similar)." target="_blank" class="quote-link">Get quote →</a>
          </div>
          <div class="price-card price-card--premium">
            <span class="tier tier--premium">Premium</span>
            <p class="tyre-name">Michelin Primacy 4+</p>
            <p class="tyre-desc">Best wet braking · 5-yr warranty · Wet grip: A</p>
            <p class="price-big price-big--premium">$175</p>
            <p class="price-unit">per tyre installed</p>
            <p class="also">Also: Pirelli Cinturato P7, Goodyear EfficientGrip</p>
            <a href="https://wa.me/6581525875?text=Hi%20SGCarPass%2C%20I'd%20like%20a%20premium%20tyre%20quote%20for%20Honda%20Civic%20215%2F50R17%20(Michelin%20Primacy%204%2B)." target="_blank" class="quote-link">Get quote →</a>
          </div>
        </div>
        <div class="set-estimate">
          <strong>Full set of 4 tyres + installation:</strong>
          Budget $440–$500 · Mid-range $580–$700 · Premium $700–$880
        </div>
      </template>

      <template v-else>
        <div class="price-grid">
          <div class="price-card">
            <span class="tier">Budget</span>
            <p class="tyre-name">Kumho Ecsta PS71</p>
            <p class="tyre-desc">Daily driver · decent wet performance</p>
            <p class="price-big">$155</p>
            <p class="price-unit">per tyre installed</p>
            <p class="also">Also: Maxxis Victra Sport 5, Nankang NS-25</p>
            <a href="https://wa.me/6581525875?text=Hi%20SGCarPass%2C%20I'd%20like%20a%20budget%20tyre%20quote%20for%20Honda%20Civic%20235%2F40R18." target="_blank" class="quote-link">Get quote →</a>
          </div>
          <div class="price-card price-card--popular">
            <span class="tier tier--mid">Mid-Range ⭐ Popular</span>
            <p class="tyre-name">Bridgestone Turanza T005</p>
            <p class="tyre-desc">Quiet, comfortable, A-rated wet grip</p>
            <p class="price-big price-big--mid">$195</p>
            <p class="price-unit">per tyre installed</p>
            <p class="also">Also: Continental SportContact 6, Dunlop SP Sport Maxx</p>
            <a href="https://wa.me/6581525875?text=Hi%20SGCarPass%2C%20I'd%20like%20a%20mid-range%20tyre%20quote%20for%20Honda%20Civic%20235%2F40R18%20(Bridgestone%20Turanza%20or%20similar)." target="_blank" class="quote-link">Get quote →</a>
          </div>
          <div class="price-card price-card--premium">
            <span class="tier tier--premium">Premium</span>
            <p class="tyre-name">Michelin Pilot Sport 4</p>
            <p class="tyre-desc">Top handling + wet braking · Wet grip: A</p>
            <p class="price-big price-big--premium">$240</p>
            <p class="price-unit">per tyre installed</p>
            <p class="also">Also: Pirelli P Zero, Goodyear Eagle F1</p>
            <a href="https://wa.me/6581525875?text=Hi%20SGCarPass%2C%20I'd%20like%20a%20premium%20tyre%20quote%20for%20Honda%20Civic%20235%2F40R18%20(Michelin%20Pilot%20Sport%204)." target="_blank" class="quote-link">Get quote →</a>
          </div>
        </div>
        <div class="set-estimate">
          <strong>Full set of 4 tyres + installation:</strong>
          Budget $620–$700 · Mid-range $780–$920 · Premium $960–$1,160
        </div>
      </template>
    </section>

    <!-- 04 BRAND RATINGS -->
    <section id="brands" class="card">
      <div class="section-head">
        <span class="section-num">04</span>
        <div>
          <h2>Singapore Tyre Ratings <span style="font-family:'Outfit',sans-serif;font-weight:400;font-size:0.9rem;color:var(--muted);">新加坡评分</span></h2>
          <p>Real performance scores from user reviews · 215/50R17 size</p>
        </div>
      </div>
      <p class="radar-source">
        Hankook (20 reviews) · Bridgestone (17 reviews) · Michelin (34 reviews).
        Source: <a href="https://www.tyrereviews.com" target="_blank" rel="nofollow noopener">TyreReviews.com</a>.
        Fuel Efficiency estimated from EU tyre label.
      </p>

      <div class="radar-grid">
        <div
          v-for="(radar, idx) in [
            { label: 'Budget', labelClass: 'tier', score: '7.1', scores: [65,77,68,64,74,75], stroke: '#6b7280', fill: 'rgba(107,114,128,0.12)', name: 'Hankook\nKinergy Eco 2', stats: [{k:'Wet',v:'65',hi:false},{k:'Dry',v:'77',hi:true},{k:'Wear',v:'68',hi:false},{k:'Value',v:'75',hi:false}] },
            { label: 'Mid ⭐', labelClass: 'tier tier--mid', score: '8.0', scores: [76,83,84,77,82,76], stroke: '#1a56db', fill: 'rgba(26,86,219,0.12)', name: 'Bridgestone\nEcopia EP300', stats: [{k:'Wet',v:'76',hi:false},{k:'Dry',v:'83',hi:true},{k:'Wear',v:'84',hi:true},{k:'Fuel',v:'82',hi:true}] },
            { label: 'Premium', labelClass: 'tier tier--premium', score: '8.3', scores: [84,87,82,85,83,77], stroke: '#C9962A', fill: 'rgba(201,150,42,0.12)', name: 'Michelin\nPrimacy 4+', stats: [{k:'Wet',v:'84',hi:true},{k:'Dry',v:'87',hi:true},{k:'NVH',v:'85',hi:true},{k:'Value',v:'77',hi:false}] },
          ]"
          :key="idx"
          class="radar-col"
          :class="{ 'radar-col--mid': idx === 1 }"
        >
          <span :class="radar.labelClass">{{ radar.label }}</span>
          <p class="radar-name">{{ radar.name }}</p>

          <div class="radar-svg-wrap"
               :style="{ transformOrigin: idx === 0 ? '25% center' : idx === 2 ? '75% center' : 'center' }">
            <svg width="100%" viewBox="0 0 140 140" class="radar-svg">
              <polygon v-for="s in GRID_RINGS" :key="s"
                       :points="hexPoints(s)"
                       fill="none"
                       :stroke="s === 1 ? '#d1d5db' : '#f0f0ee'"
                       :stroke-width="s === 1 ? '1.5' : '1'" />
              <line v-for="i in 6" :key="i"
                    :x1="CX" :y1="CY"
                    :x2="axisEnd(i-1).x" :y2="axisEnd(i-1).y"
                    stroke="#ece9e1" stroke-width="1" />
              <polygon :points="scorePoints(radar.scores)"
                       :fill="radar.fill"
                       :stroke="radar.stroke"
                       stroke-width="2" stroke-linejoin="round" />
              <circle v-for="(s, i) in radar.scores" :key="i"
                      :cx="(CX + (s/100)*MAX_R*Math.cos(axisAngle(i))).toFixed(1)"
                      :cy="(CY + (s/100)*MAX_R*Math.sin(axisAngle(i))).toFixed(1)"
                      r="2.5" :fill="radar.stroke" />
              <text v-for="(lbl, i) in LABELS" :key="lbl"
                    :x="labelPos(i).x" :y="labelPos(i).y"
                    font-size="8" fill="#9ca3af"
                    text-anchor="middle" dominant-baseline="middle"
                    font-family="Outfit,system-ui,sans-serif">{{ lbl }}</text>
            </svg>
          </div>

          <p class="radar-score">{{ radar.score }}</p>
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

    <!-- CTA BLOCK -->
    <div class="cta-block">
      <div class="cta-inner">
        <div>
          <h2>Get a Tyre Quote</h2>
          <p>Tell us your year and variant — we'll get you installation price within the hour.</p>
        </div>
        <a
          href="https://wa.me/6581525875?text=Hi%20SGCarPass%2C%20I%20have%20a%20Honda%20Civic%20and%20need%20a%20tyre%20quote."
          target="_blank"
          class="cta-wa-btn"
        >
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
          <p>Which tyre is right for your Civic?</p>
        </div>
      </div>
      <div class="guide-items">
        <div class="guide-item guide-item--red">
          <h3>Gen 11 FE (2022–2026) owners</h3>
          <p>All FE variants use <strong>235/40R18</strong>, a performance-oriented low-profile size. For Singapore's wet roads, prioritise a tyre with <strong>A-rated wet grip</strong>. The Michelin Pilot Sport 4 and Continental SportContact 7 are top picks if you value handling; the Bridgestone Turanza T005 is quieter and longer-lasting.</p>
        </div>
        <div class="guide-item guide-item--blue">
          <h3>Gen 10 FC (2016–2021) 1.5T owners</h3>
          <p>OE size <strong>215/50R17</strong> offers the best balance of ride and handling. Want to save money? The alternative <strong>215/55R16</strong> is fully compatible and typically $10–$20 cheaper per tyre. Bridgestone Ecopia EP300 is our top recommendation — excellent wet grip and fuel efficiency for Singapore commuting.</p>
        </div>
        <div class="guide-item guide-item--red">
          <h3>Gen 10 FC 1.8 i-VTEC owners</h3>
          <p>The 1.8 base model uses <strong>215/55R16</strong> — one of the most common sizes in Singapore, so you'll have the widest selection and lowest prices. Budget tyres like Hankook Kinergy Eco 2 or Maxxis MAP5 are perfectly adequate and popular among private hire drivers for their mileage value.</p>
        </div>
      </div>
    </section>

    <!-- 06 FAQ -->
    <section id="faq" class="faq-section">
      <div style="display:flex;align-items:baseline;gap:0.75rem;margin-bottom:1.25rem">
        <span class="section-num">06</span>
        <h2 class="rims-title">Frequently Asked Questions</h2>
      </div>

      <details class="faq-item" open>
        <summary>
          <h3>What tyre size does the Honda Civic use in Singapore?</h3>
          <span class="faq-chevron">▾</span>
        </summary>
        <div class="faq-body">
          <p>It depends on the generation and variant:</p>
          <ul>
            <li><strong>Gen 11 FE (2022–2026):</strong> all variants including the e:HEV hybrid use <strong>235/40R18</strong></li>
            <li><strong>Gen 10 FC (2016–2021) 1.5T Turbo:</strong> OE size <strong>215/50R17</strong> (can also fit 215/55R16)</li>
            <li><strong>Gen 10 FC (2016–2021) 1.8 i-VTEC:</strong> OE size <strong>215/55R16</strong></li>
            <li><strong>Gen 10 FC Facelift Sport (2019–2021):</strong> <strong>235/40R18</strong></li>
          </ul>
          <p>All generations use the <strong>5×114.3 bolt pattern</strong> with a 64.1mm centre bore.</p>
        </div>
      </details>

      <details class="faq-item">
        <summary>
          <h3>What is the bolt pattern of the Honda Civic FC and FE?</h3>
          <span class="faq-chevron">▾</span>
        </summary>
        <div class="faq-body">
          Both the <strong>Gen 10 FC (2016–2021)</strong> and <strong>Gen 11 FE (2022–2026)</strong> use the <strong>5×114.3</strong> bolt pattern — the most common in Singapore, shared by most Honda, Toyota, Mazda, Hyundai, and Kia models. Centre bore is <strong>64.1mm</strong>, lug nut thread is <strong>M12×1.5</strong>, torque spec is <strong>108 Nm</strong>.
        </div>
      </details>

      <details class="faq-item">
        <summary>
          <h3>How much does it cost to replace tyres on a Honda Civic in Singapore?</h3>
          <span class="faq-chevron">▾</span>
        </summary>
        <div class="faq-body">
          For <strong>215/50R17</strong>: budget from <strong>$110–$130</strong> installed; mid-range $145–$175; premium $175–$220.<br><br>
          For <strong>235/40R18</strong>: budget from <strong>$155</strong>; mid-range $195–$230; premium $240–$290.<br><br>
          A full set of 4 mid-range tyres with installation for the 1.5T Turbo typically costs <strong>$580–$700 all-in</strong>.
        </div>
      </details>

      <details class="faq-item">
        <summary>
          <h3>Can I fit 215/55R16 tyres on a Honda Civic 1.5T instead of 215/50R17?</h3>
          <span class="faq-chevron">▾</span>
        </summary>
        <div class="faq-body">
          Yes. On the Gen 10 Honda Civic FC 1.5T, fitting <strong>215/55R16</strong> on 16-inch wheels is safe and legal. The overall diameter changes by less than 2% — within Singapore's acceptable tolerance. You get a softer ride and lower tyre cost (from $110 vs $120 for 17"). Note: you'll need 16-inch wheels.
        </div>
      </details>

      <details class="faq-item">
        <summary>
          <h3>How often should I change tyres on my Honda Civic in Singapore?</h3>
          <span class="faq-chevron">▾</span>
        </summary>
        <div class="faq-body">
          In Singapore's climate, tyres typically last <strong>3–5 years</strong> or <strong>40,000–50,000 km</strong>, whichever comes first. Singapore law requires a minimum <strong>1.6mm tread depth</strong>; experts recommend replacing at <strong>3mm</strong> for safety in heavy rain. Tyres over <strong>5 years old</strong> should be inspected and likely replaced.
        </div>
      </details>
    </section>

  </main>
</template>

<style scoped>
.main-content { padding: 2rem 0 3rem; }

/* ── Animations ──────────────────────────────────────────────────────────── */
@keyframes heroIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes pulseWa {
  0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.4); }
  50%       { box-shadow: 0 0 0 10px rgba(37,211,102,0); }
}

/* ── Hero ────────────────────────────────────────────────────────────────── */
.hero {
  background: var(--dark);
  padding: 2.75rem 0 3.75rem;
  position: relative; overflow: hidden;
  animation: heroIn 0.65s cubic-bezier(0.22,1,0.36,1) both;
}
.hero-stripes {
  position: absolute; inset: 0; pointer-events: none;
  background-image: repeating-linear-gradient(
    -58deg,
    transparent 0px, transparent 18px,
    rgba(255,255,255,0.016) 18px, rgba(255,255,255,0.016) 19px
  );
}
.hero-bg-word {
  position: absolute; right: -1.5rem; bottom: -2rem;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 700; font-style: italic;
  font-size: clamp(6rem, 22vw, 16rem);
  color: rgba(255,255,255,0.022);
  line-height: 1; pointer-events: none; user-select: none;
  letter-spacing: -0.04em;
}
.hero-red-line {
  position: absolute; left: 0; top: 0; bottom: 0;
  width: 3px; background: var(--red);
}
.hero-content { position: relative; }

.breadcrumb {
  font-size: 0.6875rem; color: rgba(255,255,255,0.28);
  margin-bottom: 1.375rem;
  display: flex; flex-wrap: wrap; align-items: center; gap: 0.375rem;
}
.breadcrumb a { color: rgba(255,255,255,0.3); text-decoration: none; transition: color 0.15s; }
.breadcrumb a:hover { color: rgba(255,255,255,0.6); }
.bc-sep { opacity: 0.3; }

.hero-badges { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.125rem; }
.badge { font-size: 0.625rem; font-weight: 700; padding: 0.25rem 0.6875rem; border-radius: 999px; letter-spacing: 0.04em; }
.badge-green { background: rgba(34,197,94,0.1); color: #4ade80; border: 1px solid rgba(74,222,128,0.2); }
.badge-red   { background: rgba(227,24,55,0.12); color: #ff7285; border: 1px solid rgba(232,25,44,0.22); }

.hero-title {
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 700; line-height: 0.9;
  text-transform: uppercase; margin-bottom: 0.75rem;
  display: flex; flex-direction: column;
}
.hero-make { font-size: clamp(1rem, 3vw, 1.375rem); color: rgba(255,255,255,0.35); letter-spacing: 0.2em; }
.hero-model { font-size: clamp(3.5rem, 12vw, 6.5rem); color: white; font-style: italic; letter-spacing: -0.02em; line-height: 0.88; }
.hero-guide { font-size: clamp(0.875rem, 2.5vw, 1.125rem); color: var(--red); letter-spacing: 0.15em; font-style: normal; margin-top: 0.5rem; }
.hero-eyebrow { font-size: 0.6875rem; font-weight: 600; color: rgba(255,255,255,0.28); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.75rem; }

.spec-chips { display: flex; flex-wrap: wrap; gap: 0.625rem; margin-bottom: 2rem; }
.spec-chip {
  display: flex; flex-direction: column; gap: 0.25rem;
  background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px; padding: 0.75rem 1.125rem; min-width: 115px;
  transition: border-color 0.2s, background 0.2s;
}
.spec-chip:hover { border-color: rgba(227,24,55,0.28); background: rgba(227,24,55,0.04); }
.spec-chip--green { border-color: rgba(34,197,94,0.2); background: rgba(34,197,94,0.06); }
.chip-label { font-size: 0.5875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.28); }
.chip-value { font-family: 'Chakra Petch', sans-serif; font-size: 1.125rem; font-weight: 700; color: white; }
.chip-green { color: #22c55e; }

.wa-btn {
  display: inline-flex; align-items: center; gap: 0.625rem;
  background: #25D366; color: white; font-weight: 700; font-size: 0.9375rem;
  padding: 0.875rem 1.625rem; border-radius: 10px; text-decoration: none;
  animation: pulseWa 2.5s ease-in-out 1.2s infinite;
  transition: background 0.15s, transform 0.1s;
}
.wa-btn:hover { background: #20bd5a; transform: translateY(-2px); animation: none; box-shadow: 0 6px 28px rgba(37,211,102,0.35); }

/* ── Section Nav ─────────────────────────────────────────────────────────── */
.section-nav {
  background: rgba(15,15,18,0.96); backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  position: sticky; top: 52px; z-index: 40;
}
.section-nav-inner {
  max-width: 780px; margin: 0 auto; padding: 0 1.25rem;
  display: flex; overflow-x: auto; scrollbar-width: none;
}
.section-nav-inner::-webkit-scrollbar { display: none; }
.section-nav a {
  padding: 0.6875rem 1rem; font-size: 0.8125rem; font-weight: 600;
  color: rgba(255,255,255,0.35); text-decoration: none;
  white-space: nowrap; letter-spacing: 0.02em;
  border-bottom: 2px solid transparent; transition: color 0.15s, border-color 0.15s;
}
.section-nav a:hover { color: white; border-color: var(--red); }

/* ── Cards ───────────────────────────────────────────────────────────────── */
.card { background: white; border-radius: 16px; padding: 1.75rem; margin-bottom: 1.25rem; border: 1px solid var(--border); transition: box-shadow 0.2s; }
.card:hover { box-shadow: 0 4px 32px rgba(0,0,0,0.07); }

.section-head { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border); }
.section-num { font-family: 'Barlow Condensed', sans-serif; font-size: 2.25rem; font-weight: 900; color: var(--red); line-height: 1; min-width: 2.5rem; flex-shrink: 0; }
.section-head h2 { font-family: 'Barlow Condensed', sans-serif; font-size: 1.4375rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em; color: var(--ink); margin: 0 0 0.25rem; }
.section-head p { font-size: 0.75rem; color: var(--muted); margin: 0; }

/* ── Tables ──────────────────────────────────────────────────────────────── */
.table-wrap { overflow-x: auto; }
.data-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
.data-table th { text-align: left; font-size: 0.6875rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; padding: 0 0.75rem 0.625rem 0; border-bottom: 1px solid var(--border); }
.data-table th:last-child { text-align: right; padding-right: 0; }
.data-table td { padding: 0.6875rem 0.75rem 0.6875rem 0; border-bottom: 1px solid rgba(26,23,25,0.05); vertical-align: middle; }
.data-table tr:last-child td { border-bottom: none; }
.data-table td:last-child { text-align: right; padding-right: 0; }
.row-label { font-size: 0.8125rem; color: var(--ink); }
.row-label.muted { color: var(--muted); }
.mono-bold { font-family: 'Barlow Condensed', sans-serif; font-size: 1.0625rem; font-weight: 800; color: var(--ink); letter-spacing: 0.01em; }
.mono-alt  { font-family: 'Barlow Condensed', sans-serif; font-size: 1.0625rem; font-weight: 600; color: var(--muted); }
.price-cell { color: var(--green); font-weight: 700; font-size: 0.875rem; }
.price-cell.muted { color: var(--muted); font-weight: 500; }
.table-note { font-size: 0.75rem; color: var(--muted); margin-top: 0.875rem; }
.text-right { text-align: right !important; }

.tag { display: inline-block; font-size: 0.625rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; }
.tag-oe  { background: #dbeafe; color: #1e40af; }
.tag-alt { background: #f3f4f6; color: #6b7280; }

.spec-pills-bar { margin-top: 1rem; padding: 0.75rem 1rem; background: #eff6ff; border-radius: 8px; font-size: 0.8125rem; color: #1e40af; font-weight: 500; display: flex; flex-wrap: wrap; gap: 0.25rem 0.625rem; }
.pill-divider { color: #93c5fd; }

/* ── Tabs ────────────────────────────────────────────────────────────────── */
.tab-row { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
.tab-btn { padding: 0.5rem 1.125rem; border-radius: 8px; border: 1px solid var(--border); background: transparent; font-family: 'Outfit', sans-serif; font-size: 0.8125rem; font-weight: 600; color: var(--muted); cursor: pointer; transition: all 0.15s; }
.tab-btn.active { background: var(--ink); color: white; border-color: var(--ink); }
.tab-btn:hover:not(.active) { border-color: var(--ink); color: var(--ink); }

/* ── Price Grid ──────────────────────────────────────────────────────────── */
.price-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0.875rem; margin-bottom: 1rem; }
@media (max-width: 560px) { .price-grid { grid-template-columns: 1fr; } }

.price-card { border: 1px solid var(--border); border-radius: 12px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.375rem; }
.price-card--popular { border-color: var(--blue); background: #eff6ff; }
.price-card--premium { border-color: var(--gold); background: #fffbeb; }

.tier { font-size: 0.625rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); }
.tier--mid     { color: var(--blue); }
.tier--premium { color: var(--gold); }

.tyre-name { font-size: 0.9375rem; font-weight: 700; color: var(--ink); line-height: 1.3; margin: 0; }
.tyre-desc { font-size: 0.75rem; color: var(--muted); margin: 0; line-height: 1.4; }

.price-big { font-family: 'Barlow Condensed', sans-serif; font-size: 3rem; font-weight: 900; line-height: 1; color: var(--green); margin: 0.375rem 0 0; }
.price-big--mid     { color: var(--blue); }
.price-big--premium { color: var(--gold); }

.price-unit { font-size: 0.6875rem; color: var(--muted); font-weight: 500; margin: 0; }
.also { font-size: 0.6875rem; color: var(--muted); margin: 0.25rem 0 0; line-height: 1.4; }
.quote-link { font-size: 0.8125rem; font-weight: 700; color: var(--blue); text-decoration: none; margin-top: auto; padding-top: 0.5rem; }
.quote-link:hover { text-decoration: underline; }

.set-estimate { background: var(--cream); border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.8125rem; color: var(--muted); }
.set-estimate strong { color: var(--ink); }

/* ── Radar ───────────────────────────────────────────────────────────────── */
.radar-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0; overflow: visible; }
@media (max-width: 480px) { .radar-grid { grid-template-columns: 1fr; } }

.radar-col { text-align: center; padding: 1rem 0.75rem; }
.radar-col--mid { border-left: 1px solid var(--border); border-right: 1px solid var(--border); }

.radar-source { font-size: 0.75rem; color: var(--muted); margin-bottom: 1.25rem; line-height: 1.5; }
.radar-source a { color: var(--blue); }
.radar-name { font-size: 0.8125rem; font-weight: 600; color: var(--ink); margin: 0.375rem 0 0.5rem; white-space: pre-line; line-height: 1.3; }

.radar-svg-wrap {
  max-width: 130px; margin: 0 auto; border-radius: 10px; padding: 5px;
  position: relative; z-index: 1; cursor: zoom-in;
  transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s, background 0.2s;
}
.radar-svg-wrap:hover { transform: scale(2.3); background: white; box-shadow: 0 8px 32px rgba(0,0,0,0.18); z-index: 100; }
.radar-svg { display: block; max-width: 100%; }

.radar-score { font-family: 'Barlow Condensed', sans-serif; font-size: 2.25rem; font-weight: 900; color: var(--ink); margin: 0.5rem 0 0; line-height: 1; }
.radar-score-label { font-size: 0.6875rem; color: var(--muted); margin: 0 0 0.5rem; }
.radar-stats { text-align: left; font-size: 0.75rem; color: var(--muted); }
.radar-stat-row { display: flex; justify-content: space-between; padding: 0.125rem 0; }
.radar-stat-val { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.875rem; }
.radar-stat-val.hi { color: var(--green); }

/* ── CTA Block ───────────────────────────────────────────────────────────── */
.cta-block { background: var(--dark); border-radius: 16px; padding: 2rem 1.75rem; margin-bottom: 1.25rem; }
.cta-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.25rem; }
.cta-block h2 { font-family: 'Barlow Condensed', sans-serif; font-size: 1.625rem; font-weight: 800; text-transform: uppercase; color: white; margin: 0 0 0.375rem; }
.cta-block p { color: rgba(255,255,255,0.45); font-size: 0.9rem; margin: 0; max-width: 38ch; }
.cta-wa-btn { display: inline-flex; align-items: center; gap: 0.625rem; background: #25D366; color: white; font-weight: 700; font-size: 0.9375rem; padding: 0.875rem 1.375rem; border-radius: 10px; text-decoration: none; white-space: nowrap; flex-shrink: 0; transition: background 0.15s, transform 0.1s; }
.cta-wa-btn:hover { background: #20bd5a; transform: translateY(-1px); }

/* ── Buying Guide ────────────────────────────────────────────────────────── */
.guide-items { display: flex; flex-direction: column; gap: 0; }
.guide-item { padding: 1.25rem 1.25rem 1.25rem 1.5rem; border-left: 3px solid var(--border); margin-bottom: 0.75rem; border-radius: 0 8px 8px 0; background: var(--cream); }
.guide-item--red  { border-left-color: var(--red); }
.guide-item--blue { border-left-color: var(--blue); }
.guide-item h3 { font-family: 'Barlow Condensed', sans-serif; font-size: 1.125rem; font-weight: 800; text-transform: uppercase; color: var(--ink); margin: 0 0 0.5rem; }
.guide-item p { font-size: 0.875rem; color: var(--muted); line-height: 1.7; margin: 0; }
.guide-item p strong { color: var(--ink); }

/* ── FAQ ─────────────────────────────────────────────────────────────────── */
.faq-section { margin-bottom: 2.5rem; }
.rims-title { font-family: 'Barlow Condensed', sans-serif; font-size: 1.4375rem; font-weight: 800; text-transform: uppercase; color: var(--ink); margin: 0; }
.faq-item { background: white; border-radius: 10px; border: 1px solid var(--border); padding: 1rem 1.25rem; margin-bottom: 0.5rem; transition: border-color 0.15s; }
.faq-item[open] { border-color: rgba(26,23,25,0.18); }
.faq-item summary { cursor: pointer; display: flex; align-items: center; justify-content: space-between; list-style: none; gap: 0.75rem; }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary h3 { font-family: 'Barlow Condensed', sans-serif; font-size: 1.0625rem; font-weight: 700; color: var(--ink); margin: 0; }
.faq-chevron { color: var(--muted); flex-shrink: 0; transition: transform 0.2s; }
.faq-item[open] .faq-chevron { transform: rotate(180deg); }
.faq-body { margin-top: 0.75rem; font-size: 0.875rem; color: var(--muted); line-height: 1.7; }
.faq-body ul { margin: 0.5rem 0; padding-left: 1.25rem; }
.faq-body li { margin-bottom: 0.25rem; }
.faq-body strong { color: var(--ink); }
</style>
