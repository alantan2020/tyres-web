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

function waLink(brand: string, pattern: string): string {
  const txt = encodeURIComponent(
    `Hi SGCarPass, I want to order ${props.size} ${brand} ${pattern} for my ${props.make} ${props.model}.`
  )
  return `https://wa.me/${WA}?text=${txt}`
}
</script>

<template>
  <Transition name="li-fade">
    <div v-if="!loading && items.length > 0" class="live-inventory">
      <div class="li-header">
        <span class="li-live-dot" aria-hidden="true" />
        <span class="li-title">Live Stock · {{ size }}</span>
      </div>
      <div class="li-rows">
        <a
          v-for="item in items"
          :key="`${item.brand}-${item.pattern}`"
          :href="waLink(item.brand, item.pattern)"
          target="_blank"
          class="li-row"
        >
          <span class="li-tier" :class="`li-tier--${item.tier}`">
            {{ tierLabel[item.tier] ?? item.tier }}
          </span>
          <span class="li-name">{{ item.brand }} {{ item.pattern }}</span>
          <span v-if="item.isPromo === 1" class="li-promo">PROMO</span>
          <span class="li-price">${{ item.price }}</span>
          <span class="li-arrow" aria-hidden="true">→</span>
        </a>
      </div>
      <p class="li-note">Price per tyre · tap to WhatsApp order</p>
    </div>
  </Transition>
</template>

<style scoped>
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
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #25d366;
  flex-shrink: 0;
  animation: livePulse 2s ease-in-out infinite;
}

@keyframes livePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.li-title {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #166534;
}

.li-rows {
  display: flex;
  flex-direction: column;
}

.li-row {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 1rem;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid rgba(37, 211, 102, 0.1);
  transition: background 0.12s;
}

.li-row:last-child { border-bottom: none; }
.li-row:hover { background: rgba(37, 211, 102, 0.07); }

.li-tier {
  font-size: 0.5625rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  flex-shrink: 0;
}

.li-tier--economy { background: #f3f4f6; color: #4b5563; }
.li-tier--mid     { background: #dbeafe; color: #1d4ed8; }
.li-tier--premium { background: #fef3c7; color: #92400e; }

.li-name {
  flex: 1;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1719;
}

.li-promo {
  font-size: 0.5625rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #dc2626;
  background: #fee2e2;
  border-radius: 4px;
  padding: 0.15rem 0.4rem;
  flex-shrink: 0;
}

.li-price {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.125rem;
  font-weight: 800;
  color: #166534;
  flex-shrink: 0;
}

.li-arrow {
  color: #25d366;
  font-weight: 700;
  flex-shrink: 0;
}

.li-note {
  font-size: 0.6875rem;
  color: #6b7280;
  padding: 0.4rem 1rem;
  margin: 0;
  background: rgba(37, 211, 102, 0.04);
  border-top: 1px solid rgba(37, 211, 102, 0.1);
}

.li-fade-enter-active,
.li-fade-leave-active { transition: opacity 0.2s; }
.li-fade-enter-from,
.li-fade-leave-to { opacity: 0; }
</style>
