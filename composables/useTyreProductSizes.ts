interface ProductSizeItem {
  rawSize: string
  displaySize: string
  minPrice: number
  totalStock: number
}

interface ApiResponse {
  code: number
  data: ProductSizeItem[]
}

export function useTyreProductSizes(patternPrefix: string) {
  const sizes = ref<ProductSizeItem[]>([])
  const loading = ref(false)
  const minPrice = computed(() =>
    sizes.value.length ? Math.min(...sizes.value.map(s => s.minPrice)) : null
  )

  const fetch = async () => {
    if (!patternPrefix) return
    loading.value = true
    try {
      const res = await $fetch<ApiResponse>(
        `https://api.sgcarpass.com/tys/web/tyre/product-sizes?patternPrefix=${encodeURIComponent(patternPrefix)}`
      )
      sizes.value = (res.data ?? []).filter(s => s.totalStock > 0)
    } catch {
      sizes.value = []
    } finally {
      loading.value = false
    }
  }

  onMounted(fetch)

  return { sizes, loading, minPrice }
}
