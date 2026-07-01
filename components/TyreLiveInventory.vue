<script setup lang="ts">
const props = defineProps<{
  size: string
  make: string
  model: string
}>()

const WA = '6581525875'

const { items, loading } = useTyreInventory(computed(() => props.size))

const tierLabel: Record<string, string> = {
  economy: 'Budget',
  mid: 'Mid-Range',
  premium: 'Premium',
}

// Cheapest item per tier
const summary = computed(() =>
  (['economy', 'mid', 'premium'] as const)
    .map(tier => items.value.find(i => i.tier === tier))
    .filter((i): i is NonNullable<typeof i> => !!i)
)

function waLink(tier: string): string {
  const label = tierLabel[tier] ?? tier
  const txt = encodeURIComponent(
    `Hi SGCarPass, I need a ${label} tyre for my ${props.make} ${props.model}, size ${props.size}. Please quote.`
  )
  return `https://wa.me/${WA}?text=${txt}`
}
</script>

<template>
  <div v-if="loading" class="li-loading">Loading…</div>

  <div v-else-if="summary.length === 0" class="li-empty">
    <p>No live stock for {{ size }} right now.</p>
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

    <a
      v-for="item in summary"
      :key="item.tier"
      :href="waLink(item.tier)"
      target="_blank"
      class="li-row"
    >
      <span class="li-tier" :class="`li-tier--${item.tier}`">
        {{ tierLabel[item.tier] }}
      </span>
      <span class="li-in-stock">In Stock</span>
      <span class="li-spacer" />
      <span class="li-from">from</span>
      <span class="li-price">${{ item.price }}</span>
      <span class="li-arrow" aria-hidden="true">→</span>
    </a>

    <p class="li-note">WhatsApp us for today's exact quote</p>
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
  border-radius: 50%; background: #25d366;
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

.li-row {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.875rem 1rem;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid rgba(37, 211, 102, 0.1);
  transition: background 0.12s;
}
.li-row:last-of-type { border-bottom: none; }
.li-row:hover { background: rgba(37, 211, 102, 0.07); }

.li-tier {
  font-size: 0.6875rem; font-weight: 800;
  text-transform: uppercase; letter-spacing: 0.06em;
  padding: 0.2rem 0.6rem; border-radius: 5px;
  flex-shrink: 0;
}
.li-tier--economy { background: #f3f4f6; color: #4b5563; }
.li-tier--mid     { background: #dbeafe; color: #1d4ed8; }
.li-tier--premium { background: #fef3c7; color: #92400e; }

.li-in-stock {
  font-size: 0.75rem; font-weight: 600; color: #16a34a;
}

.li-spacer { flex: 1; }

.li-from {
  font-size: 0.75rem; color: #9ca3af;
}

.li-price {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.375rem; font-weight: 800; color: #166534;
}

.li-arrow { color: #25d366; font-weight: 700; flex-shrink: 0; }

.li-note {
  font-size: 0.6875rem; color: #6b7280;
  padding: 0.5rem 1rem; margin: 0;
  text-align: center;
  background: rgba(37, 211, 102, 0.04);
  border-top: 1px solid rgba(37, 211, 102, 0.1);
}
</style>
