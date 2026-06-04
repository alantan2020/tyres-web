<template>
  <header class="site-header">
    <div class="container header-inner">
      <a href="/" class="logo">
        <span class="logo-mark">S</span>
        <span class="logo-text">SGCarPass <strong>Tyres</strong></span>
      </a>
      <nav class="site-nav">
        <NuxtLink to="/">Models</NuxtLink>
        <a
          href="https://wa.me/6581525875?text=Hi%20SGCarPass%2C%20I%20need%20a%20tyre%20quote."
          target="_blank"
          class="nav-cta"
        >WhatsApp Quote</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background: rgba(15,15,18,0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  position: sticky; top: 0; z-index: 50;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.header-inner {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 0.875rem; padding-bottom: 0.875rem;
}
.logo { display: flex; align-items: center; gap: 0.625rem; text-decoration: none; }
.logo-mark {
  width: 30px; height: 30px; background: var(--red); color: white;
  font-family: 'Chakra Petch', sans-serif; font-weight: 700; font-size: 0.9375rem;
  display: flex; align-items: center; justify-content: center; border-radius: 6px;
}
.logo-text { color: rgba(255,255,255,0.88); font-weight: 600; font-size: 0.9375rem; }
.logo-text strong { color: var(--red); }
.site-nav { display: flex; align-items: center; gap: 1.5rem; }
.site-nav a { color: rgba(255,255,255,0.4); text-decoration: none; font-size: 0.875rem; transition: color 0.15s; }
.site-nav a:hover { color: white; }
.nav-cta { background: var(--red) !important; color: white !important; padding: 0.375rem 0.875rem; border-radius: 6px; font-weight: 600; transition: opacity 0.15s !important; }
.nav-cta:hover { opacity: 0.88; }
@media (max-width: 600px) { .site-nav { display: none; } }
</style>
