---
title: Main St Audio Labs – Tube Amp Plugins (Princeton Reverb, Tweed Deluxe 5E3, Champ 5F1) & Guitar Pedal Plugins
description: "Guitar amp and pedal plugins rebuilt part by part from the real circuits: the 1964 Fender Princeton Reverb, the Tweed Deluxe 5E3 and the Tweed Champ 5F1, plus the CS-26 compressor, a bias tremolo, a 1963 spring reverb and a tuner. VST3 and AU for Windows, macOS and Linux."
---

<!-- 01/11/2026: el home se divide en amplificadores y pedales. Las dos secciones van en el HTML (sin pestañas)
     para que los buscadores lean los nombres de los amplis; arriba, dos "puertas" que llevan a cada una. -->

<div class="hero">
  <p class="eyebrow">Independent Audio Lab</p>
  <div class="brand-mark">Main St Audio Labs</div>
  <p class="brand-tagline">Audio Tools, Signal Processors &amp; Engineering Notebooks Inspired by Classic Recordings</p>
  <div class="hero-meta"><span class="chip">VST3 · AU</span><span class="chip">Windows · macOS · Linux</span></div>
</div>

<div class="catalog-doors">
  <a class="door door-amp" href="#amplifiers">
    <span class="door-kicker">Tube amplifiers</span>
    <span class="door-title">Amplifiers</span>
    <span class="door-list">Princeton Reverb '64 · Tweed Deluxe 5E3 · Tweed Champ 5F1</span>
    <span class="door-go">See the amps ↓</span>
  </a>
  <a class="door door-fx" href="#pedals">
    <span class="door-kicker">Stompboxes &amp; studio effects</span>
    <span class="door-title">Pedals &amp; Effects</span>
    <span class="door-list">Compressor · Bias tremolo · Spring reverb · Tuner</span>
    <span class="door-go">See the pedals ↓</span>
  </a>
</div>

<section id="amplifiers" class="catalog-section">
  <div class="catalog-head">
    <p class="eyebrow">Tube by tube</p>
    <h2>Tube Amp Plugins</h2>
    <p class="catalog-intro">Classic Fender® circuits rebuilt tube by tube and solved in real time, not sampled: the 1964 blackface <b>Princeton Reverb</b>, the 1950s tweed <b>Deluxe 5E3</b> and the 1956 tweed <b>Champ 5F1</b>. They clean up with your guitar's volume, sag when you dig in and break up like the real amps.</p>
  </div>

<PluginGrid category="amp" />

</section>

<section id="pedals" class="catalog-section">
  <div class="catalog-head">
    <p class="eyebrow">Part by part</p>
    <h2>Pedals &amp; Effects</h2>
    <p class="catalog-intro">Stompboxes and outboard effects for your guitar track or your mix: the <b>CS-26</b> transparent compressor, our own design; the bias tremolo of the 1964 Princeton Reverb as a pedal; the 1963 outboard spring reverb; and a needle tuner that costs no CPU.</p>
  </div>

<PluginGrid category="fx" />

</section>

<NewsletterSubscribe />

<div class="rock-home-banner" style="margin-top: 1.5rem;">
  <div class="eyebrow" style="font-size: 1.1rem;">Independent Audio Engineering Lab</div>
  <p style="max-width: 600px; margin: 0.75rem auto 1rem; color: var(--vp-c-text-2);">We craft precision studio audio software with zero bloatware, no recurring subscriptions, and no invasive DRM. Reach out:</p>
  <div class="rock-copy-email-wrapper" style="justify-content: center; margin-bottom: 1rem;">
    <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
    <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
  </div>
  <a href="/support" class="btn btn-ghost">Support the Lab (Ko-fi) ☕</a>
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
