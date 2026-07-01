<script setup lang="ts">
import { brands } from '~/data/tyres/brands'
import { getBrandProducts } from '~/data/tyres/products'

const BASE = 'https://tyres.sgcarpass.com'

useSeoMeta({
  title: 'Tyre Brands Available in Singapore | SGCarPass',
  description: 'Browse Michelin, Bridgestone, Continental, Goodyear, Pirelli, Yokohama, Dunlop, Hankook and Kumho tyres available in Singapore. Compare performance scores, prices and find the right tyre for your car.',
  ogTitle: 'Tyre Brands Available in Singapore | SGCarPass',
  ogUrl: BASE + '/tyres/brands/',
  ogType: 'website',
})
useHead({
  link: [{ rel: 'canonical', href: BASE + '/tyres/brands/' }],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Tyre Brands Available in Singapore',
      url: BASE + '/tyres/brands/',
      description: 'Complete list of tyre brands available in Singapore from SGCarPass.',
    }),
  }],
})

const tierLabel = (t: string) => t === 'premium' ? 'Premium' : t === 'mid' ? 'Mid-Range' : 'Budget'
const tierClass = (t: string) => `brand-tier--${t}`
</script>

<template>
  <div class="container brands-page">
    <nav class="breadcrumb">
      <NuxtLink to="/">Home</NuxtLink> /
      <span>Tyre Brands</span>
    </nav>

    <h1 class="page-title">Tyre Brands in Singapore</h1>
    <p class="page-desc">We carry 9 major tyre brands in Singapore — from premium European and Japanese manufacturers to value-focused Korean brands. All products include performance scores from independent reviews and live Singapore pricing.</p>

    <div class="brands-grid">
      <NuxtLink
        v-for="brand in brands"
        :key="brand.slug"
        :to="`/tyres/brands/${brand.slug}/`"
        class="brand-card"
      >
        <div class="brand-card-top">
          <span class="brand-name">{{ brand.name }}</span>
          <span class="brand-tier" :class="tierClass(brand.tier)">{{ tierLabel(brand.tier) }}</span>
        </div>
        <p class="brand-origin">{{ brand.origin }}</p>
        <p class="brand-tagline">{{ brand.tagline }}</p>
        <p class="brand-count">{{ getBrandProducts(brand.slug).length }} products stocked</p>
        <span class="brand-arrow">Browse →</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.brands-page { padding: 1.5rem 0 3rem; }
.breadcrumb { font-size: 0.82rem; color: var(--muted); margin-bottom: 1.5rem; }
.breadcrumb a { color: var(--red); text-decoration: none; }

.page-title { font-size: 1.75rem; font-weight: 900; margin: 0 0 0.75rem; }
.page-desc { color: var(--muted); font-size: 0.95rem; line-height: 1.6; margin: 0 0 2rem; max-width: 640px; }

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}
.brand-card {
  display: flex; flex-direction: column; gap: 0.4rem;
  background: #fff; border: 1.5px solid var(--border);
  border-radius: 12px; padding: 1.25rem;
  text-decoration: none; color: var(--ink);
  transition: border-color .15s, box-shadow .15s;
}
.brand-card:hover { border-color: var(--red); box-shadow: 0 4px 16px rgba(227,24,55,.1); }

.brand-card-top { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.25rem; }
.brand-name { font-size: 1.2rem; font-weight: 900; }
.brand-tier { font-size: 0.65rem; font-weight: 800; text-transform: uppercase; padding: 0.15rem 0.5rem; border-radius: 4px; }
.brand-tier--premium { background: #fef3c7; color: #92400e; }
.brand-tier--mid { background: #dbeafe; color: #1d4ed8; }
.brand-tier--economy { background: #f3f4f6; color: #4b5563; }

.brand-origin { font-size: 0.75rem; color: var(--muted); margin: 0; }
.brand-tagline { font-size: 0.875rem; font-weight: 600; color: var(--ink); margin: 0; line-height: 1.4; }
.brand-count { font-size: 0.8rem; color: var(--muted); margin: 0; }
.brand-arrow { font-size: 0.85rem; font-weight: 700; color: var(--red); margin-top: auto; padding-top: 0.5rem; }
</style>
