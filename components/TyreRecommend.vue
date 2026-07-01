<script setup lang="ts">
const props = defineProps<{
  size: string
  make: string
  model: string
}>()

const WA = '6581525875'

const { selected, toggle, items, loading } = useTyreRecommend(computed(() => props.size))

type Priority = 'wet' | 'comfort' | 'wear' | 'handling' | 'value'

const priorities: { key: Priority; label: string; icon: string; desc: string }[] = [
  { key: 'wet',      icon: '🌧️', label: 'Wet Safety',    desc: 'Rain braking & aquaplaning' },
  { key: 'comfort',  icon: '🔇', label: 'Quiet & Comfy', desc: 'Road noise & ride softness' },
  { key: 'wear',     icon: '⏳', label: 'Long-lasting',  desc: 'Tread life & durability' },
  { key: 'handling', icon: '🏎️', label: 'Performance',   desc: 'Dry grip & sharp steering' },
  { key: 'value',    icon: '💰', label: 'Best Value',     desc: 'Price vs performance' },
]

function waLink(item: { brand: string; productName: string }): string {
  const txt = encodeURIComponent(
    `Hi SGCarPass, I'm interested in the ${item.brand} ${item.productName} for my ${props.make} ${props.model}, size ${props.size}. Please quote.`
  )
  return `https://wa.me/${WA}?text=${txt}`
}

function tierClass(tier: string | null) {
  if (tier === 'economy') return 'rc-tier--economy'
  if (tier === 'mid')     return 'rc-tier--mid'
  if (tier === 'premium') return 'rc-tier--premium'
  return 'rc-tier--economy'
}

function tierLabel(tier: string | null) {
  if (tier === 'economy') return 'Budget'
  if (tier === 'mid')     return 'Mid-Range'
  if (tier === 'premium') return 'Premium'
  return ''
}

function barColor(score: number | null) {
  if (!score) return '#e5e7eb'
  if (score >= 85) return '#16a34a'
  if (score >= 70) return '#ca8a04'
  return '#dc2626'
}
</script>

<template>
  <div class="rc-wrap">
    <!-- Priority picker -->
    <p class="rc-prompt">What matters most to you? <span class="rc-hint">Pick up to 2</span></p>
    <div class="rc-chips">
      <button
        v-for="p in priorities"
        :key="p.key"
        class="rc-chip"
        :class="{ 'rc-chip--on': selected.includes(p.key) }"
        @click="toggle(p.key)"
      >
        <span class="rc-chip-icon">{{ p.icon }}</span>
        <span class="rc-chip-label">{{ p.label }}</span>
      </button>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="rc-loading">Analysing…</div>

    <!-- No selection yet -->
    <div v-else-if="selected.length === 0" class="rc-idle">
      Select your priorities above to get personalised recommendations.
    </div>

    <!-- Results -->
    <div v-else-if="items.length > 0" class="rc-results">
      <a
        v-for="(item, idx) in items"
        :key="item.brand + item.productName"
        :href="waLink(item)"
        target="_blank"
        class="rc-card"
      >
        <div class="rc-rank">{{ idx + 1 }}</div>
        <div class="rc-card-body">
          <div class="rc-card-top">
            <div>
              <span class="rc-brand">{{ item.brand }}</span>
              <span class="rc-product">{{ item.productName }}</span>
            </div>
            <div class="rc-right">
              <span v-if="item.tier" class="rc-tier" :class="tierClass(item.tier)">{{ tierLabel(item.tier) }}</span>
              <span class="rc-price">from ${{ item.price }}</span>
            </div>
          </div>

          <!-- Mini score bars for the selected priorities -->
          <div class="rc-bars">
            <div v-if="selected.includes('wet') && item.wetGrip" class="rc-bar-row">
              <span class="rc-bar-label">Wet</span>
              <div class="rc-bar-track">
                <div class="rc-bar-fill" :style="{ width: item.wetGrip + '%', background: barColor(item.wetGrip) }" />
              </div>
              <span class="rc-bar-val">{{ item.wetGrip }}</span>
            </div>
            <div v-if="selected.includes('comfort') && item.comfort" class="rc-bar-row">
              <span class="rc-bar-label">Comfort</span>
              <div class="rc-bar-track">
                <div class="rc-bar-fill" :style="{ width: item.comfort + '%', background: barColor(item.comfort) }" />
              </div>
              <span class="rc-bar-val">{{ item.comfort }}</span>
            </div>
            <div v-if="selected.includes('wear') && item.wear" class="rc-bar-row">
              <span class="rc-bar-label">Durability</span>
              <div class="rc-bar-track">
                <div class="rc-bar-fill" :style="{ width: item.wear + '%', background: barColor(item.wear) }" />
              </div>
              <span class="rc-bar-val">{{ item.wear }}</span>
            </div>
            <div v-if="selected.includes('handling') && item.dryGrip" class="rc-bar-row">
              <span class="rc-bar-label">Dry Grip</span>
              <div class="rc-bar-track">
                <div class="rc-bar-fill" :style="{ width: item.dryGrip + '%', background: barColor(item.dryGrip) }" />
              </div>
              <span class="rc-bar-val">{{ item.dryGrip }}</span>
            </div>
            <div v-if="selected.includes('value') && item.buyAgain" class="rc-bar-row">
              <span class="rc-bar-label">Value</span>
              <div class="rc-bar-track">
                <div class="rc-bar-fill" :style="{ width: item.buyAgain + '%', background: barColor(item.buyAgain) }" />
              </div>
              <span class="rc-bar-val">{{ item.buyAgain }}</span>
            </div>
          </div>
        </div>
        <span class="rc-arrow">→</span>
      </a>
      <p class="rc-footer">Tap any result to WhatsApp us for today's exact quote</p>
    </div>

    <!-- No results -->
    <div v-else class="rc-idle">No profiled tyres in stock for this size right now.</div>
  </div>
</template>

<style scoped>
.rc-wrap { margin-top: 1.25rem; }

.rc-prompt {
  font-size: 0.875rem; font-weight: 700; color: #111827; margin: 0 0 0.625rem;
}
.rc-hint { font-weight: 400; color: #6b7280; font-size: 0.8125rem; }

.rc-chips {
  display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;
}
.rc-chip {
  display: flex; align-items: center; gap: 0.375rem;
  padding: 0.375rem 0.75rem; border-radius: 999px;
  border: 1.5px solid #d1d5db; background: #fff;
  cursor: pointer; font-size: 0.8125rem; font-weight: 600; color: #374151;
  transition: all 0.12s;
}
.rc-chip:hover { border-color: #6b7280; }
.rc-chip--on  { border-color: #16a34a; background: #f0fdf4; color: #166534; }
.rc-chip-icon { font-size: 1rem; }

.rc-loading, .rc-idle {
  padding: 1.25rem; text-align: center;
  font-size: 0.875rem; color: #6b7280;
  border: 1px dashed #e5e7eb; border-radius: 10px;
}

.rc-results { display: flex; flex-direction: column; gap: 0.625rem; }

.rc-card {
  display: flex; align-items: stretch; gap: 0.75rem;
  padding: 0.875rem 1rem;
  border: 1.5px solid #e5e7eb; border-radius: 12px;
  text-decoration: none; color: inherit;
  background: #fff; transition: border-color 0.12s, box-shadow 0.12s;
}
.rc-card:hover { border-color: #25d366; box-shadow: 0 2px 8px rgba(37,211,102,.12); }

.rc-rank {
  width: 1.75rem; height: 1.75rem; border-radius: 50%;
  background: #f3f4f6; display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 800; color: #374151; flex-shrink: 0;
}
.rc-card:first-child .rc-rank { background: #fef3c7; color: #92400e; }

.rc-card-body { flex: 1; min-width: 0; }

.rc-card-top {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 0.5rem; margin-bottom: 0.5rem;
}
.rc-brand {
  display: block; font-size: 0.75rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280;
}
.rc-product { display: block; font-size: 0.9375rem; font-weight: 700; color: #111827; }

.rc-right { display: flex; flex-direction: column; align-items: flex-end; gap: 0.25rem; flex-shrink: 0; }
.rc-tier {
  font-size: 0.625rem; font-weight: 800; text-transform: uppercase;
  padding: 0.15rem 0.45rem; border-radius: 4px;
}
.rc-tier--economy { background: #f3f4f6; color: #4b5563; }
.rc-tier--mid     { background: #dbeafe; color: #1d4ed8; }
.rc-tier--premium { background: #fef3c7; color: #92400e; }

.rc-price { font-family: 'Barlow Condensed', sans-serif; font-size: 1.1rem; font-weight: 800; color: #166534; }

.rc-bars { display: flex; flex-direction: column; gap: 0.3rem; }
.rc-bar-row { display: flex; align-items: center; gap: 0.5rem; }
.rc-bar-label { font-size: 0.6875rem; color: #6b7280; width: 4.5rem; flex-shrink: 0; }
.rc-bar-track { flex: 1; height: 5px; background: #f3f4f6; border-radius: 3px; overflow: hidden; }
.rc-bar-fill  { height: 100%; border-radius: 3px; transition: width 0.3s; }
.rc-bar-val   { font-size: 0.6875rem; font-weight: 700; color: #374151; width: 1.75rem; text-align: right; }

.rc-arrow { color: #25d366; font-weight: 700; align-self: center; flex-shrink: 0; }

.rc-footer {
  font-size: 0.6875rem; color: #9ca3af; text-align: center; margin: 0.25rem 0 0;
}
</style>
