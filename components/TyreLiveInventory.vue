<script setup lang="ts">
const props = defineProps<{
  size: string
  make: string
  model: string
}>()

const WA = '6581525875'
const showAll = ref(false)

const { items, loading } = useTyreInventory(computed(() => props.size))

// Reset expanded state when size changes
watch(() => props.size, () => { showAll.value = false })

const tierLabel: Record<string, string> = {
  economy: 'Budget',
  mid: 'Mid-Range',
  premium: 'Premium',
}

// Strip "(Thailand) 0425/1725" type suffixes — just brand + model name
function cleanName(pattern: string): string {
  return pattern.replace(/\s*\([^)]+\).*$/, '').trim()
}

function waLink(item: { brand: string; pattern: string }): string {
  const txt = encodeURIComponent(
    `Hi SGCarPass, I want to order ${props.size} ${item.brand} ${cleanName(item.pattern)} for my ${props.make} ${props.model}.`
  )
  return `https://wa.me/${WA}?text=${txt}`
}

// Items that have a tier classification
const tieredItems = computed(() => items.value.filter(i => i.tier))

// Cheapest item per tier — one row per tier in the summary
const summary = computed(() => {
  return (['economy', 'mid', 'premium'] as const)
    .map(tier => tieredItems.value.find(i => i.tier === tier))
    .filter((i): i is NonNullable<typeof i> => !!i)
})

// All items minus the summary ones (rest go in the collapsed list)
const rest = computed(() => {
  const summarySet = new Set(summary.value.map(i => `${i.brand}||${i.pattern}`))
  return tieredItems.value.filter(i => !summarySet.has(`${i.brand}||${i.pattern}`))
})
</script>

<template>
  <div v-if="loading" class="li-loading">불러오는 중…</div>

  <div v-else-if="summary.length === 0" class="li-empty">
    <p>No live stock for {{ size }} at the moment.</p>
    <a
      :href="`https://wa.me/${WA}?text=${encodeURIComponent(`Hi SGCarPass, I need ${size} tyres for my ${make} ${model}. Please quote.`)}`"
      target="_blank"
      class="li-wa-fallback"
    >WhatsApp for quote →</a>
  </div>

  <div v-else class="live-inventory">
    <div class="li-header">
      <span class="li-live-dot" aria-hidden="true" />
      <span class="li-title">Live Stock · {{ size }}</span>
    </div>

    <!-- Summary: cheapest per tier -->
    <a
      v-for="item in summary"
      :key="item.tier"
      :href="waLink(item)"
      target="_blank"
      class="li-row li-row--summary"
    >
      <span class="li-tier" :class="`li-tier--${item.tier}`">
        {{ tierLabel[item.tier] }}
      </span>
      <span class="li-name">{{ item.brand }} {{ cleanName(item.pattern) }}</span>
      <span v-if="item.isPromo === 1" class="li-promo">PROMO</span>
      <span class="li-from">from</span>
      <span class="li-price">${{ item.price }}</span>
      <span class="li-arrow" aria-hidden="true">→</span>
    </a>

    <!-- Toggle: view all -->
    <button v-if="rest.length > 0" class="li-toggle" @click="showAll = !showAll">
      {{ showAll ? '收起 ▲' : `查看全部 ${tieredItems.length} 个型号 ▼` }}
    </button>

    <!-- Expanded list -->
    <template v-if="showAll">
      <a
        v-for="item in rest"
        :key="`${item.brand}||${item.pattern}`"
        :href="waLink(item)"
        target="_blank"
        class="li-row li-row--detail"
      >
        <span class="li-tier li-tier--sm" :class="`li-tier--${item.tier}`">
          {{ tierLabel[item.tier] }}
        </span>
        <span class="li-name li-name--sm">{{ item.brand }} {{ cleanName(item.pattern) }}</span>
        <span v-if="item.isPromo === 1" class="li-promo">PROMO</span>
        <span class="li-price li-price--sm">${{ item.price }}</span>
        <span class="li-arrow" aria-hidden="true">→</span>
      </a>
    </template>

    <p class="li-note">Price per tyre installed · tap to WhatsApp order</p>
  </div>
</template>

<style scoped>
.li-loading {
  padding: 1.5rem 0;
  color: #9ca3af;
  font-size: 0.875rem;
}

.li-empty {
  margin-top: 1.25rem;
  padding: 1.25rem;
  border: 1px dashed #d1d5db;
  border-radius: 10px;
  text-align: center;
}
.li-empty p { font-size: 0.875rem; color: #6b7280; margin: 0 0 0.75rem; }
.li-wa-fallback {
  display: inline-block;
  background: #25d366; color: white;
  padding: 0.5rem 1.25rem; border-radius: 8px;
  font-size: 0.875rem; font-weight: 700; text-decoration: none;
}

.live-inventory {
  margin-top: 1.25rem;
  border: 1.5px solid rgba(37, 211, 102, 0.3);
  border-radius: 12px;
  overflow: hidden;
  background: #f6fdf8;
}

.li-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: rgba(37, 211, 102, 0.08);
  border-bottom: 1px solid rgba(37, 211, 102, 0.15);
}

.li-live-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #25d366;
  flex-shrink: 0;
  animation: livePulse 2s ease-in-out infinite;
}
@keyframes livePulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.35; }
}

.li-title {
  font-size: 0.6875rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.07em;
  color: #166534;
}

/* ── Rows ── */
.li-row {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid rgba(37, 211, 102, 0.1);
  transition: background 0.12s;
}
.li-row:hover { background: rgba(37, 211, 102, 0.07); }

.li-row--detail {
  padding: 0.5rem 1rem;
  background: white;
}

/* ── Tier badges ── */
.li-tier {
  font-size: 0.5625rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.06em;
  padding: 0.175rem 0.5rem; border-radius: 4px;
  flex-shrink: 0; white-space: nowrap;
}
.li-tier--sm { font-size: 0.5rem; padding: 0.125rem 0.375rem; }
.li-tier--economy { background: #f3f4f6; color: #4b5563; }
.li-tier--mid     { background: #dbeafe; color: #1d4ed8; }
.li-tier--premium { background: #fef3c7; color: #92400e; }

/* ── Name ── */
.li-name {
  flex: 1;
  font-size: 0.9375rem; font-weight: 600; color: #1a1719;
}
.li-name--sm { font-size: 0.8125rem; font-weight: 500; }

/* ── Promo ── */
.li-promo {
  font-size: 0.5rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: #dc2626; background: #fee2e2;
  border-radius: 4px; padding: 0.125rem 0.375rem;
  flex-shrink: 0;
}

/* ── Price ── */
.li-from {
  font-size: 0.6875rem; color: #9ca3af; flex-shrink: 0;
}
.li-price {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.25rem; font-weight: 800; color: #166534;
  flex-shrink: 0;
}
.li-price--sm { font-size: 1rem; }

.li-arrow { color: #25d366; font-weight: 700; flex-shrink: 0; }

/* ── Toggle button ── */
.li-toggle {
  display: block; width: 100%;
  padding: 0.625rem 1rem;
  background: none; border: none;
  border-top: 1px solid rgba(37, 211, 102, 0.15);
  font-family: 'Outfit', sans-serif;
  font-size: 0.8125rem; font-weight: 600;
  color: #166534; cursor: pointer;
  text-align: center;
  transition: background 0.12s;
}
.li-toggle:hover { background: rgba(37, 211, 102, 0.07); }

/* ── Footer note ── */
.li-note {
  font-size: 0.6875rem; color: #6b7280;
  padding: 0.4rem 1rem; margin: 0;
  background: rgba(37, 211, 102, 0.04);
  border-top: 1px solid rgba(37, 211, 102, 0.1);
}
</style>
