---
title: Main St Audio Labs - Vintage Stompboxes, Amplifiers & Studio Tools
---

<div class="hero">
  <p class="eyebrow">Independent Audio Lab</p>
  <div class="brand-mark">Main St Audio Labs</div>
  <p class="brand-tagline">Audio Tools, Signal Processors &amp; Engineering Notebooks Inspired by Classic Recordings</p>
</div>

<div class="section-head"><h2>Plugin Catalog</h2></div>

<PluginGrid />

<div class="section-head"><h2>From the Lab Notebook</h2><a href="/audio-and-mixing">View full archive →</a></div>

<ArticleGrid :limit="3" />

<div class="rock-home-banner" style="margin-top: 1.5rem;">
  <div class="eyebrow" style="font-size: 1.1rem;">Independent Audio Engineering Lab</div>
  <p style="max-width: 600px; margin: 0.75rem auto 1rem; color: var(--vp-c-text-2);">We craft precision studio audio software with zero bloatware, no recurring subscriptions, and no invasive DRM. Reach out:</p>
  <div class="rock-copy-email-wrapper" style="justify-content: center; margin-bottom: 1rem;">
    <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
    <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
  </div>
  <a href="/support" class="btn btn-ghost">Support the Lab (Ko-fi / Crypto) ☕</a>
</div>

<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>
