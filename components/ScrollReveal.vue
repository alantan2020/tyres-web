<script setup lang="ts">
const props = defineProps<{ delay?: number }>()
const el = ref<HTMLElement | null>(null)
// Default to visible so SSR output, no-JS clients, and slow hydration
// never end up with hidden content — the fade-in is an enhancement,
// never a gate on whether the content shows at all.
const visible = ref(true)

onMounted(() => {
  if (!el.value) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return

  const rect = el.value.getBoundingClientRect()
  const alreadyInView = rect.top < window.innerHeight * 1.1
  if (alreadyInView) return // show as-is, no animation needed

  // Genuinely below the fold: hide, then reveal on scroll-into-view.
  visible.value = false
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 },
  )
  observer.observe(el.value)
})
</script>

<template>
  <div
    ref="el"
    class="reveal"
    :class="{ 'reveal--hidden': !visible }"
    :style="props.delay ? { transitionDelay: props.delay + 'ms' } : undefined"
  >
    <slot />
  </div>
</template>

<style scoped>
.reveal { transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal--hidden { opacity: 0; transform: translateY(24px); }
</style>
