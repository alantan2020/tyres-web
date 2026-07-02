<script setup lang="ts">
import { TOP_PICKS, getProductBySlug } from '~/data/tyres/products'
import { HOMEPAGE_STATS, TOP_MAKE_TILES } from '~/data/tyres/homepage-stats'

const BASE_URL = 'https://tyres.sgcarpass.com'
const WA = '6581525875'

const { totalModels, totalMakes, priceFrom } = HOMEPAGE_STATS
const makeTiles = TOP_MAKE_TILES

const heroWaHref = `https://wa.me/${WA}?text=${encodeURIComponent('Hi SGCarPass, I need a tyre quote for my car.')}`
const plateWaHref = `https://wa.me/${WA}?text=${encodeURIComponent('Hi SGCarPass, my car plate is ')}`
const bottomWaHref = `https://wa.me/${WA}?text=${encodeURIComponent("Hi SGCarPass, my car isn't listed on your website. Can you give me a tyre quote?")}`

const topPicks = TOP_PICKS.map(s => getProductBySlug(s)).filter(Boolean)
const barColor = (v: number | null) => !v ? '#e5e7eb' : v >= 85 ? '#16a34a' : v >= 70 ? '#ca8a04' : '#dc2626'

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

  <!-- ── HERO ──────────────────────────────────────────────────────────────── -->
  <section class="hero">
    <div class="hero-glow" aria-hidden="true" />

    <div class="container hero-inner">
      <div class="hero-content">
        <div class="hero-eyebrow">Singapore's Tyre Price Guide</div>
        <h1 class="hero-h1">Right Tyre.<br>Right Price.<br><span class="hero-h1-accent">Right Now.</span></h1>
        <p class="hero-sub">
          {{ totalModels }} car models covered. Compare Michelin, Bridgestone, Continental and more.
          WhatsApp us your car plate — quote in minutes.
        </p>

        <div class="hero-trust">
          <span class="trust-pill">✓ From ${{ priceFrom }} installed</span>
          <span class="trust-pill">✓ 9 major brands</span>
          <span class="trust-pill">✓ Reply in minutes</span>
        </div>

        <div class="hero-actions">
          <a :href="heroWaHref" target="_blank" class="btn-wa">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp for Quote
          </a>
          <NuxtLink to="/tyres/" class="btn-outline">Browse by car model →</NuxtLink>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="tyre-photo-frame">
          <img src="/hero/tyre-hero.jpg" alt="" class="tyre-photo" width="1611" height="2133" />
          <div class="tyre-photo-glow"/>
        </div>

        <div class="hero-badge">
          <span class="hero-badge-label">Trusted sizing for</span>
          <span class="hero-badge-num">{{ totalModels }}+</span>
          <span class="hero-badge-label">car models</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ── STAT BAND ─────────────────────────────────────────────────────────── -->
  <section class="stat-band">
    <div class="container stat-grid">
      <div class="stat-item">
        <span class="stat-eyebrow">mapped &amp; verified</span>
        <span class="stat-num">{{ totalModels }}+</span>
        <span class="stat-label">Car Models</span>
      </div>
      <div class="stat-item">
        <span class="stat-eyebrow">every major marque</span>
        <span class="stat-num">{{ totalMakes }}</span>
        <span class="stat-label">Car Makes</span>
      </div>
      <div class="stat-item">
        <span class="stat-eyebrow">real humans, no bots</span>
        <span class="stat-num">&lt;5</span>
        <span class="stat-label">Min. Reply</span>
      </div>
    </div>
  </section>

  <!-- ── HOW IT WORKS ───────────────────────────────────────────────────────── -->
  <section class="how-section">
    <div class="container">
      <h2 class="how-title">How It Works</h2>
      <div class="how-steps">

        <div class="how-step">
          <div class="how-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <h3 class="how-step-title">Find Your Car</h3>
          <p class="how-step-desc">Browse by make and model, or send us your car plate on WhatsApp. We'll look up the correct tyre size instantly.</p>
        </div>

        <div class="how-connector" aria-hidden="true">→</div>

        <div class="how-step">
          <div class="how-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
            </svg>
          </div>
          <h3 class="how-step-title">Compare Tyres</h3>
          <p class="how-step-desc">See independent performance scores for every brand — wet grip, comfort, wear life. Pick what fits your driving style and budget.</p>
        </div>

        <div class="how-connector" aria-hidden="true">→</div>

        <div class="how-step">
          <div class="how-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h3 class="how-step-title">Get Your Quote</h3>
          <p class="how-step-desc">WhatsApp us your choice. We confirm stock, give you today's best price, and arrange same-day fitting if needed.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- ── BROWSE BY CAR ──────────────────────────────────────────────────────── -->
  <section class="browse-section">
    <div class="container">
      <div class="browse-header">
        <h2 class="browse-title">Browse by Car Make</h2>
        <NuxtLink to="/tyres/" class="browse-all-link">All {{ totalModels }} models →</NuxtLink>
      </div>
      <div class="make-grid">
        <NuxtLink
          v-for="make in makeTiles"
          :key="make.slug"
          :to="`/tyres/${make.slug}/`"
          class="make-tile"
        >
          <span class="make-tile-name">{{ make.name }}</span>
          <span class="make-tile-count">{{ make.count }} models</span>
        </NuxtLink>
        <NuxtLink to="/tyres/" class="make-tile make-tile--more">
          <span class="make-tile-name">All Makes</span>
          <span class="make-tile-count">{{ totalMakes }} brands →</span>
        </NuxtLink>
      </div>

      <!-- plate CTA -->
      <div class="plate-bar">
        <div class="plate-bar-text">
          <strong>Don't know your tyre size?</strong>
          <span>Send us your car plate — we'll look it up in under 5 minutes.</span>
        </div>
        <a :href="plateWaHref" target="_blank" class="btn-wa btn-wa--sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Send Car Plate
        </a>
      </div>
    </div>
  </section>

  <!-- ── POPULAR TYRES ──────────────────────────────────────────────────────── -->
  <section class="popular-section">
    <div class="container">
      <div class="popular-header">
        <h2 class="popular-title">Popular Tyres in Singapore</h2>
        <NuxtLink to="/tyres/brands/" class="browse-all-link">All brands →</NuxtLink>
      </div>
      <div class="popular-grid">
        <NuxtLink
          v-for="prod in topPicks"
          :key="prod!.slug"
          :to="`/tyres/brands/${prod!.brandSlug}/${prod!.slug}/`"
          class="popular-card"
        >
          <div class="popular-card-head">
            <div>
              <span class="popular-brand-label">{{ prod!.brand }}</span>
              <h3 class="popular-prod-name">{{ prod!.name }}</h3>
            </div>
            <span class="popular-tier-badge" :class="`ptier--${prod!.tier}`">
              {{ prod!.tier === 'premium' ? 'Premium' : prod!.tier === 'mid' ? 'Mid-Range' : 'Budget' }}
            </span>
          </div>
          <div class="popular-bars">
            <div class="pbar-row">
              <span class="pbar-label">Wet</span>
              <div class="pbar-track"><div class="pbar-fill" :style="{ width: (prod!.scores.wet ?? 0) + '%', background: barColor(prod!.scores.wet) }"/></div>
              <span class="pbar-val">{{ prod!.scores.wet ?? '—' }}</span>
            </div>
            <div class="pbar-row">
              <span class="pbar-label">Comfort</span>
              <div class="pbar-track"><div class="pbar-fill" :style="{ width: (prod!.scores.comfort ?? 0) + '%', background: barColor(prod!.scores.comfort) }"/></div>
              <span class="pbar-val">{{ prod!.scores.comfort ?? '—' }}</span>
            </div>
          </div>
          <span class="popular-cta">Get Quote →</span>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- ── WHY SGCARPASS ──────────────────────────────────────────────────────── -->
  <section class="why-section">
    <div class="container why-grid-outer">
      <ScrollReveal class="why-copy">
        <span class="why-eyebrow">Why SGCarPass</span>
        <h2 class="why-title">Real Prices.<br>No Showroom Games.</h2>
        <ul class="why-checklist">
          <li><span class="why-check">✓</span> {{ totalModels }}+ car models, OEM size confirmed</li>
          <li><span class="why-check">✓</span> Independent scores, not brand marketing</li>
          <li><span class="why-check">✓</span> A real person replies — no call centres</li>
          <li><span class="why-check">✓</span> Quote in minutes, not "we'll call you back"</li>
        </ul>
        <a :href="heroWaHref" target="_blank" class="btn-outline btn-outline--onDark">WhatsApp Us →</a>
      </ScrollReveal>

      <ScrollReveal :delay="150" class="why-visual">
        <div class="chat-mock">
          <div class="chat-bubble chat-bubble--in">Hi, need 215/55R17 for my Camry, best price?</div>
          <div class="chat-bubble chat-bubble--out">Continental UC6 from $118 installed. In stock today 👍</div>
          <div class="chat-timestamp">replied in 2 min</div>
        </div>
      </ScrollReveal>
    </div>
  </section>

  <!-- ── BRANDS ─────────────────────────────────────────────────────────────── -->
  <section class="brands-section">
    <div class="container">
      <p class="brands-label">Brands we carry</p>
      <div class="brands-row">
        <NuxtLink to="/tyres/brands/michelin/"    class="brand-pill">Michelin</NuxtLink>
        <NuxtLink to="/tyres/brands/bridgestone/" class="brand-pill">Bridgestone</NuxtLink>
        <NuxtLink to="/tyres/brands/continental/" class="brand-pill">Continental</NuxtLink>
        <NuxtLink to="/tyres/brands/goodyear/"    class="brand-pill">Goodyear</NuxtLink>
        <NuxtLink to="/tyres/brands/pirelli/"     class="brand-pill">Pirelli</NuxtLink>
        <NuxtLink to="/tyres/brands/yokohama/"    class="brand-pill">Yokohama</NuxtLink>
        <NuxtLink to="/tyres/brands/dunlop/"      class="brand-pill">Dunlop</NuxtLink>
        <NuxtLink to="/tyres/brands/hankook/"     class="brand-pill">Hankook</NuxtLink>
        <NuxtLink to="/tyres/brands/"             class="brand-pill brand-pill--more">+ more →</NuxtLink>
      </div>
    </div>
  </section>

  <!-- ── FAQ ───────────────────────────────────────────────────────────────── -->
  <section class="faq-section">
    <div class="container">
      <h2 class="faq-title">Common Questions</h2>
      <div class="faq-list">
        <details class="faq-item">
          <summary class="faq-q">How do I find the correct tyre size for my car?</summary>
          <p class="faq-a">Check the sticker on the inside of your driver's door — it shows your OEM tyre size (e.g., 205/55R16 91V). Or send us your car plate number on WhatsApp and we'll look it up within 5 minutes, free of charge.</p>
        </details>
        <details class="faq-item">
          <summary class="faq-q">How much does it cost to change tyres in Singapore?</summary>
          <p class="faq-a">A full set of 4 tyres (including installation) typically costs <strong>$350–$700+</strong> depending on your car and brand. Budget options (Kumho, Hankook) from <strong>$88/tyre installed</strong>. Mid-range (Bridgestone, Continental) $118–$165/tyre. Premium (Michelin, Pirelli) from $148–$220/tyre.</p>
        </details>
        <details class="faq-item">
          <summary class="faq-q">What tyre brands do you carry?</summary>
          <p class="faq-a">Michelin, Bridgestone, Continental, Dunlop, Goodyear, Pirelli, Yokohama, Hankook, Kumho, and more. WhatsApp us your car model and budget — we'll recommend the best option for you.</p>
        </details>
      </div>
    </div>
  </section>

  <!-- ── BOTTOM CTA ────────────────────────────────────────────────────────── -->
  <section class="bottom-cta">
    <div class="container bottom-cta-inner">
      <div>
        <span class="bottom-cta-eyebrow">Can't find your car?</span>
        <p class="bottom-cta-title">We still know your tyre size.</p>
        <p class="bottom-cta-sub">We service 100+ models. WhatsApp us your car and we'll get you a quote.</p>
      </div>
      <a :href="bottomWaHref" target="_blank" class="btn-wa btn-wa--lg">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp Us
      </a>
    </div>
  </section>

</template>

<style scoped>
/* ── HERO ───────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  background: var(--ink);
  color: #fff;
  padding: 4.5rem 0 4rem;
  overflow: hidden;
}
.hero-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 800px 500px at 78% 45%, rgba(227,24,55,0.16), transparent 70%);
  pointer-events: none;
}
.hero-inner {
  position: relative; z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}
@media (min-width: 900px) {
  .hero-inner { grid-template-columns: 1.1fr 0.9fr; }
  .container.hero-inner { max-width: 1080px; }
}
.hero-content { max-width: 560px; }

.hero-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--red);
  margin-bottom: 1rem;
}
.hero-h1 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(2.8rem, 8vw, 4.5rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.01em;
  margin: 0 0 1.25rem;
  text-transform: uppercase;
}
.hero-h1-accent { color: var(--red); }

.hero-sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.6;
  margin: 0 0 1.5rem;
  max-width: 460px;
}

.hero-trust {
  display: flex; flex-wrap: wrap; gap: 0.5rem;
  margin-bottom: 2rem;
}
.trust-pill {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50px;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.7);
}

.hero-actions {
  display: flex; align-items: center; flex-wrap: wrap; gap: 1rem;
}

/* Hero tyre illustration */
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tyre-photo-frame {
  position: relative;
  width: 100%; max-width: 360px;
  aspect-ratio: 3 / 4;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 70px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06);
}
.tyre-photo {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.9) contrast(1.08);
}
.tyre-photo-glow {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 65% 25%, rgba(227,24,55,0.55), transparent 62%);
  mix-blend-mode: screen;
  pointer-events: none;
}
.hero-badge {
  position: absolute;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);
  display: flex; align-items: baseline; gap: 0.35rem;
  background: rgba(20,16,14,0.85);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(6px);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  white-space: nowrap;
}
.hero-badge-num { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1.15rem; color: var(--red); }
.hero-badge-label { font-size: 0.72rem; color: rgba(255,255,255,0.6); }
@media (max-width: 899px) {
  .hero-visual { max-width: 280px; margin: 0 auto; }
}

/* ── BUTTONS ─────────────────────────────────────────────────────────────── */
.btn-wa {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: #25D366; color: #fff;
  padding: 0.85rem 1.6rem; border-radius: 50px;
  font-weight: 700; font-size: 0.95rem;
  text-decoration: none; transition: transform .15s, box-shadow .15s;
  white-space: nowrap;
  box-shadow: 0 6px 20px rgba(37,211,102,0.25);
}
.btn-wa:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(37,211,102,0.35); }
.btn-wa--sm { padding: 0.6rem 1.2rem; font-size: 0.85rem; }
.btn-wa--lg { padding: 1rem 2rem; font-size: 1rem; }

.btn-outline {
  display: inline-flex; align-items: center;
  padding: 0.85rem 1.6rem; border-radius: 50px;
  border: 1.5px solid rgba(255,255,255,0.25);
  font-size: 0.9rem; font-weight: 700;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: border-color .15s, color .15s;
}
.btn-outline:hover { border-color: var(--red); color: #fff; }
.btn-outline--onDark { border-color: rgba(255,255,255,0.2); color: rgba(255,255,255,0.85); }
.btn-outline--onDark:hover { border-color: var(--red); }

/* ── STAT BAND (signature) ──────────────────────────────────────────────── */
.stat-band {
  background: linear-gradient(115deg, var(--red-deep) 0%, var(--ink) 65%);
  padding: 2.25rem 0;
}
.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  text-align: center;
}
.stat-item { display: flex; flex-direction: column; align-items: center; }
.stat-eyebrow {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.55);
  margin-bottom: 0.35rem;
}
.stat-num {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 900;
  font-size: clamp(2.2rem, 6vw, 3rem);
  color: #fff;
  line-height: 1;
}
.stat-label {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.6);
  margin-top: 0.35rem;
}
@media (max-width: 560px) {
  .stat-grid { gap: 0.75rem; }
  .stat-eyebrow { display: none; }
}

/* ── HOW IT WORKS ────────────────────────────────────────────────────────── */
.how-section {
  padding: 3.5rem 0;
  background: #fff;
  border-bottom: 1px solid var(--border);
}
.how-title {
  font-size: 1.5rem; font-weight: 900;
  margin: 0 0 2.5rem; text-align: center;
}
.how-steps {
  display: flex;
  align-items: flex-start;
  gap: 0;
}
.how-step {
  flex: 1;
  padding: 0 1.5rem;
  text-align: center;
}
.how-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 56px; height: 56px;
  border: 1.5px solid var(--border);
  border-radius: 50%;
  color: var(--red);
  margin-bottom: 0.85rem;
}
.how-step-title {
  font-size: 1rem; font-weight: 800;
  margin: 0 0 0.5rem;
}
.how-step-desc {
  font-size: 0.875rem; color: var(--muted);
  line-height: 1.6; margin: 0;
}
.how-connector {
  font-size: 1.5rem; color: var(--border);
  padding-top: 1rem; flex-shrink: 0;
  align-self: flex-start;
}
@media (max-width: 600px) {
  .how-steps { flex-direction: column; gap: 2rem; }
  .how-connector { display: none; }
  .how-step { padding: 0; text-align: left; display: flex; gap: 1rem; align-items: flex-start; }
  .how-icon { flex-shrink: 0; }
  .how-step > div { text-align: left; }
}

/* ── BROWSE BY CAR ───────────────────────────────────────────────────────── */
.browse-section { padding: 3rem 0; }
.browse-header {
  display: flex; align-items: baseline; justify-content: space-between;
  margin-bottom: 1.25rem;
}
.browse-title { font-size: 1.4rem; font-weight: 900; margin: 0; }
.browse-all-link {
  font-size: 0.85rem; font-weight: 700;
  color: var(--red); text-decoration: none;
}
.browse-all-link:hover { text-decoration: underline; }

.make-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
@media (min-width: 500px) { .make-grid { grid-template-columns: repeat(3, 1fr); } }

.make-tile {
  display: flex; flex-direction: column; gap: 0.2rem;
  padding: 1rem 1.1rem;
  background: #fff; border: 1.5px solid var(--border); border-radius: 10px;
  text-decoration: none; color: var(--ink);
  transition: border-color .15s, box-shadow .15s, transform .15s;
}
.make-tile:hover { border-color: var(--red); box-shadow: 0 4px 16px rgba(227,24,55,.08); transform: translateY(-2px); }
.make-tile--more { background: var(--cream); }
.make-tile-name { font-size: 0.95rem; font-weight: 800; }
.make-tile-count { font-size: 0.75rem; color: var(--muted); }

/* Plate bar */
.plate-bar {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 1rem;
  background: var(--ink); color: #fff;
  padding: 1.25rem 1.5rem; border-radius: 16px;
}
.plate-bar-text { display: flex; flex-direction: column; gap: 0.15rem; }
.plate-bar-text strong { font-size: 0.95rem; }
.plate-bar-text span { font-size: 0.82rem; color: rgba(255,255,255,0.6); }

/* ── POPULAR TYRES ───────────────────────────────────────────────────────── */
.popular-section { padding: 3rem 0; background: var(--cream); }
.popular-header {
  display: flex; align-items: baseline; justify-content: space-between;
  margin-bottom: 1.25rem;
}
.popular-title { font-size: 1.4rem; font-weight: 900; margin: 0; }

.popular-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 0.85rem;
}
.popular-card {
  background: #fff; border: 1.5px solid var(--border); border-radius: 14px;
  padding: 1.25rem; text-decoration: none; color: var(--ink);
  display: flex; flex-direction: column; gap: 0.75rem;
  transition: border-color .15s, box-shadow .15s, transform .15s;
}
.popular-card:hover { border-color: var(--red); box-shadow: 0 8px 20px rgba(227,24,55,.12); transform: translateY(-3px); }
.popular-card-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; }
.popular-brand-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; color: var(--muted); display: block; margin-bottom: 0.2rem; }
.popular-prod-name { font-size: 1.05rem; font-weight: 800; margin: 0; line-height: 1.2; }
.popular-tier-badge { font-size: 0.6rem; font-weight: 800; text-transform: uppercase; padding: 0.15rem 0.45rem; border-radius: 4px; flex-shrink: 0; margin-top: 0.2rem; }
.ptier--premium { background: #fef3c7; color: #92400e; }
.ptier--mid     { background: #dbeafe; color: #1d4ed8; }
.ptier--economy { background: #f3f4f6; color: #4b5563; }

.popular-bars { display: flex; flex-direction: column; gap: 0.3rem; }
.pbar-row { display: flex; align-items: center; gap: 0.5rem; }
.pbar-label { font-size: 0.68rem; color: var(--muted); width: 3.5rem; flex-shrink: 0; }
.pbar-track { flex: 1; height: 5px; background: #f3f4f6; border-radius: 3px; overflow: hidden; }
.pbar-fill { height: 100%; border-radius: 3px; }
.pbar-val { font-size: 0.68rem; font-weight: 700; width: 1.5rem; text-align: right; }
.popular-cta {
  font-size: 0.78rem; font-weight: 800; color: #fff;
  margin-top: auto; background: var(--red);
  padding: 0.5rem 0.9rem; border-radius: 50px;
  text-align: center; width: fit-content;
}

/* ── WHY SGCARPASS ───────────────────────────────────────────────────────── */
.why-section { padding: 4rem 0; background: var(--ink); color: #fff; }
.why-grid-outer {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}
@media (min-width: 860px) { .why-grid-outer { grid-template-columns: 1.1fr 0.9fr; } }
.why-eyebrow {
  font-family: 'Fraunces', serif; font-style: italic;
  font-size: 0.95rem; color: var(--red);
}
.why-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(1.9rem, 5vw, 2.6rem);
  font-weight: 900; text-transform: uppercase; line-height: 1.05;
  margin: 0.5rem 0 1.5rem;
}
.why-checklist { list-style: none; padding: 0; margin: 0 0 2rem; display: flex; flex-direction: column; gap: 0.85rem; }
.why-checklist li { display: flex; align-items: center; gap: 0.7rem; font-size: 0.95rem; color: rgba(255,255,255,0.82); }
.why-check {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%;
  background: rgba(227,24,55,0.15); color: var(--red);
  font-size: 0.8rem; font-weight: 800; flex-shrink: 0;
}

.why-visual { display: flex; justify-content: center; }
.chat-mock {
  background: #0f0d0c;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 1.5rem;
  width: 100%; max-width: 340px;
  display: flex; flex-direction: column; gap: 0.6rem;
}
.chat-bubble {
  padding: 0.65rem 0.9rem; border-radius: 14px;
  font-size: 0.85rem; line-height: 1.4; max-width: 85%;
}
.chat-bubble--in { background: #26211f; color: rgba(255,255,255,0.85); align-self: flex-start; border-bottom-left-radius: 4px; }
.chat-bubble--out { background: #1f6b3a; color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; }
.chat-timestamp { font-size: 0.7rem; color: rgba(255,255,255,0.35); text-align: right; margin-top: 0.2rem; }

/* ── BRANDS ──────────────────────────────────────────────────────────────── */
.brands-section {
  padding: 2rem 0;
  background: var(--cream);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.brands-label {
  font-size: 0.7rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.12em;
  color: var(--muted); margin: 0 0 0.85rem;
}
.brands-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; }
.brand-pill {
  font-size: 0.85rem; font-weight: 700; color: var(--ink);
  text-decoration: none; padding: 0.45rem 0.95rem;
  border: 1.5px solid var(--border); border-radius: 50px;
  background: #fff;
  transition: border-color .15s, color .15s;
}
.brand-pill:hover { border-color: var(--red); color: var(--red); }
.brand-pill--more { color: var(--muted); border-style: dashed; }

/* ── FAQ ─────────────────────────────────────────────────────────────────── */
.faq-section { padding: 3rem 0; }
.faq-title { font-size: 1.4rem; font-weight: 900; margin: 0 0 1.5rem; }
.faq-list { display: flex; flex-direction: column; }
.faq-item { border-bottom: 1px solid var(--border); }
.faq-item:first-child { border-top: 1px solid var(--border); }
.faq-q {
  padding: 1rem 0; font-size: 0.95rem; font-weight: 700;
  cursor: pointer; list-style: none;
  display: flex; justify-content: space-between; align-items: center; gap: 1rem;
}
.faq-q::-webkit-details-marker { display: none; }
.faq-q::after { content: '+'; font-size: 1.1rem; font-weight: 400; color: var(--muted); flex-shrink: 0; transition: transform .2s; }
details[open] .faq-q::after { transform: rotate(45deg); }
.faq-a { margin: 0 0 1rem; color: var(--muted); font-size: 0.9rem; line-height: 1.65; }

/* ── BOTTOM CTA ──────────────────────────────────────────────────────────── */
.bottom-cta {
  background: linear-gradient(115deg, var(--ink) 0%, var(--red-deep) 100%);
  color: #fff; padding: 3rem 0;
}
.bottom-cta-inner { display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-start; }
.bottom-cta-eyebrow {
  font-family: 'Fraunces', serif; font-style: italic;
  font-size: 0.95rem; color: rgba(255,255,255,0.6);
}
.bottom-cta-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(1.6rem, 4vw, 2.1rem); font-weight: 900;
  text-transform: uppercase; margin: 0.3rem 0 0.4rem;
}
.bottom-cta-sub { margin: 0; color: rgba(255,255,255,0.55); font-size: 0.875rem; }
@media (min-width: 700px) {
  .bottom-cta-inner { flex-direction: row; align-items: center; justify-content: space-between; }
}
</style>
