interface RecommendItem {
  brand: string
  productName: string
  price: number
  tier: string | null
  wetGrip: number | null
  dryGrip: number | null
  handling: number | null
  comfort: number | null
  wear: number | null
  buyAgain: number | null
  overallScore: number | null
  weightedScore: number | null
}

interface ApiResponse {
  code: number
  data: RecommendItem[]
}

type Priority = 'wet' | 'comfort' | 'wear' | 'handling' | 'value'

const WEIGHT_MAP: Record<Priority, Record<string, number>> = {
  wet:      { wet: 100 },
  comfort:  { comfort: 100 },
  wear:     { wear: 100 },
  handling: { dry: 50, handling: 50 },
  value:    { value: 100 },
}

export function useTyreRecommend(size: Ref<string>) {
  const selected = ref<Priority[]>([])
  const items = ref<RecommendItem[]>([])
  const loading = ref(false)

  function toggle(p: Priority) {
    const idx = selected.value.indexOf(p)
    if (idx >= 0) {
      selected.value.splice(idx, 1)
    } else {
      if (selected.value.length >= 2) selected.value.shift()
      selected.value.push(p)
    }
  }

  const fetchRecommend = async () => {
    if (!size.value || selected.value.length === 0) {
      items.value = []
      return
    }
    // Aggregate weights across selected priorities
    const weights: Record<string, number> = { wet: 0, dry: 0, handling: 0, comfort: 0, wear: 0, value: 0 }
    for (const p of selected.value) {
      for (const [k, v] of Object.entries(WEIGHT_MAP[p])) {
        weights[k] = (weights[k] ?? 0) + v
      }
    }
    const params = new URLSearchParams({
      size: size.value,
      wet:      String(weights.wet),
      dry:      String(weights.dry),
      handling: String(weights.handling),
      comfort:  String(weights.comfort),
      wear:     String(weights.wear),
      value:    String(weights.value),
    })
    loading.value = true
    try {
      const res = await $fetch<ApiResponse>(
        `https://api.sgcarpass.com/tys/web/tyre/recommend?${params}`
      )
      items.value = res.data ?? []
    } catch {
      items.value = []
    } finally {
      loading.value = false
    }
  }

  watch([size, selected], fetchRecommend, { deep: true })

  return { selected, toggle, items, loading }
}
