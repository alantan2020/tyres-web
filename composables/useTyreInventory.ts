interface TyreItem {
  brand: string
  pattern: string
  tier: string
  price: number
  isPromo: number
  promoNote: string
  stockTotal: number
  mfgWeekYear: string
}

interface ApiResponse {
  code: number
  data: TyreItem[]
}

export function useTyreInventory(size: Ref<string>) {
  const items = ref<TyreItem[]>([])
  const loading = ref(false)

  const fetchInventory = async () => {
    const s = size.value
    if (!s) { items.value = []; return }
    loading.value = true
    try {
      const res = await $fetch<ApiResponse>(
        `/api/tys/web/tyre/by-size?size=${encodeURIComponent(s)}`
      )
      items.value = res.data ?? []
    } catch {
      items.value = []
    } finally {
      loading.value = false
    }
  }

  watch(size, fetchInventory, { immediate: true })

  return { items, loading }
}
