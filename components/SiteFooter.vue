<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <p class="footer-brand">SGCarPass Tyres</p>
          <p class="footer-desc">Singapore's tyre comparison platform. Find the right tyre for every car model.</p>
        </div>
        <div>
          <p class="footer-heading">Popular Cars</p>
          <NuxtLink to="/tyres-for-honda-civic-singapore/">Honda Civic</NuxtLink>
        </div>
        <div>
          <p class="footer-heading">Contact</p>
          <a href="https://wa.me/6581525875">+65 8152 5875</a>
          <p class="footer-desc" style="margin-top:0.25rem">WhatsApp for quotes</p>
          <p class="footer-desc" style="margin-top:0.5rem">tyres.sgcarpass.com</p>
        </div>
      </div>
      <div class="footer-bottom">
        © 2026 SGCarPass · Prices are market references inclusive of installation
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { background: var(--dark); color: rgba(255,255,255,0.4); padding: 2.5rem 0; }
.footer-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; margin-bottom: 2rem; }
@media (min-width: 640px) { .footer-grid { grid-template-columns: repeat(3,1fr); } }
.footer-brand { color: white; font-weight: 700; font-size: 0.9375rem; margin-bottom: 0.5rem; }
.footer-heading { color: white; font-weight: 700; font-size: 0.875rem; margin-bottom: 0.625rem; }
.footer-desc { font-size: 0.8125rem; line-height: 1.5; margin: 0; }
.site-footer a { color: rgba(255,255,255,0.4); text-decoration: none; font-size: 0.8125rem; display: block; margin-bottom: 0.375rem; }
.site-footer a:hover { color: white; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.07); padding-top: 1rem; font-size: 0.75rem; text-align: center; }
</style>
