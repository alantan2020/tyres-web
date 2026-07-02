<script setup lang="ts">
const BASE_URL = 'https://tyres.sgcarpass.com'

useSeoMeta({
  title: 'Privacy Policy | SGCarPass',
  description: 'How SGCarPass (operated by TYS Auto) collects, uses, and protects your data on our WhatsApp tyre and battery service assistant, in accordance with Singapore PDPA.',
  robots: 'noindex, follow',
  ogUrl: BASE_URL + '/privacy',
})

useHead({
  link: [{ rel: 'canonical', href: BASE_URL + '/privacy' }],
})
</script>

<template>
  <div class="privacy-page">
    <div class="privacy-content">
      <h1>Privacy Policy</h1>
      <p class="meta">SGCarPass &nbsp;|&nbsp; Effective: 1 June 2026 &nbsp;|&nbsp; Last updated: 3 July 2026</p>

      <p>SGCarPass (operated by <strong>TYS Auto</strong>, "we", "us") operates a WhatsApp-based tyre and battery service assistant. This policy explains what personal data we collect, why we collect it, and how we protect it, in accordance with Singapore's <strong>Personal Data Protection Act 2012 (PDPA)</strong>.</p>

      <h2>1. Data We Collect</h2>
      <ul>
        <li><strong>WhatsApp phone number</strong> — provided when you message our bot.</li>
        <li><strong>Vehicle information</strong> — car make / model / year and tyre size you share during a query.</li>
        <li><strong>Conversation context</strong> — a short AI-generated summary of your recent enquiries (stored to help the assistant remember your preferences across sessions).</li>
        <li><strong>Service records</strong> — tyre reservation or battery warranty records if you choose to register them.</li>
      </ul>

      <h2>2. Why We Collect It</h2>
      <ul>
        <li>To answer your tyre and battery enquiries accurately.</li>
        <li>To remember your vehicle preferences so you don't have to repeat them each visit.</li>
        <li>To arrange tyre installation appointments you request.</li>
        <li>To manage battery warranty records linked to your vehicle.</li>
      </ul>
      <p>We do <strong>not</strong> sell your data to third parties. We do <strong>not</strong> use it for unsolicited marketing.</p>

      <h2>3. How Long We Keep It</h2>
      <ul>
        <li>Conversation summaries: cleared after <strong>180 days</strong> of inactivity.</li>
        <li>Raw message logs (used only for internal AI summarisation): deleted after <strong>30 days</strong>.</li>
        <li>Service records (reservations, warranty): retained for the duration of the warranty period plus <strong>1 year</strong> for dispute resolution.</li>
      </ul>

      <h2>4. Your Rights Under PDPA</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access</strong> your personal data we hold.</li>
        <li><strong>Correct</strong> inaccurate data.</li>
        <li><strong>Withdraw consent</strong> at any time — send "stop" to our WhatsApp bot and we will delete your conversation context within 7 business days.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>All data is stored on servers in Singapore. Access is restricted to authorised TYS Auto personnel. We use industry-standard encryption in transit (TLS) and at rest.</p>

      <h2>6. Third-Party Services</h2>
      <p>We use <strong>Meta (WhatsApp Business API)</strong> to deliver messages. Messages sent via WhatsApp are also subject to <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener">Meta's Privacy Policy</a>. We may use an AI language model (e.g. DeepSeek or similar) to generate responses — only your query text and anonymised vehicle info is sent; no personally identifiable information beyond what you voluntarily share in the message.</p>

      <h2>7. Contact Us</h2>
      <p>For any data enquiries or requests, WhatsApp us directly or email: <a href="mailto:privacy@sgcarpass.com">privacy@sgcarpass.com</a></p>

      <p class="footer-note">SGCarPass · Operated by TYS Auto · Singapore · UEN available on request</p>
    </div>
  </div>
</template>

<style scoped>
.privacy-page { max-width: 720px; margin: 0 auto; padding: 2rem 1rem 4rem; }
.privacy-content h1 { font-size: 1.6rem; margin-bottom: 0.25rem; }
.privacy-content .meta { color: #666; font-size: 0.9rem; margin-bottom: 2rem; }
.privacy-content h2 { font-size: 1.1rem; margin-top: 2rem; margin-bottom: 0.5rem; }
.privacy-content p,
.privacy-content li { font-size: 0.97rem; line-height: 1.7; }
.privacy-content ul { padding-left: 1.25rem; }
.privacy-content a { color: #0066cc; }
.footer-note { margin-top: 2.5rem; color: #888; font-size: 0.85rem; }
</style>
