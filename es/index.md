---
title: Main St Audio Labs - Stompboxes, Amplificadores y Audio de Estudio
---

<div class="hero">
  <p class="eyebrow">Laboratorio de Audio Independiente</p>
  <div class="brand-mark">Main St Audio Labs</div>
  <p class="brand-tagline">Procesadores de guitarra y herramientas de señal inspirados en discos clásicos</p>
  <p class="lead">Plugins VST3/AU calibrados a mano sobre grabaciones icónicas — sin presets infinitos, sin CPU desperdiciada, sin suscripciones.</p>
  <div class="hero-meta">
    <span class="chip">VST3 · AU · Standalone</span>
    <span class="chip">Win · Mac · Linux</span>
    <span class="chip">64-bit</span>
  </div>
</div>

<div class="section-head"><h2>Catálogo de Plugins</h2></div>

<PluginGrid />

<div class="section-head"><h2>Del Cuaderno de Laboratorio</h2><a href="/es/audio-y-mezcla">Ver todo el archivo →</a></div>

<ArticleGrid :limit="3" />

<div class="rock-home-banner" style="margin-top: 1.5rem;">
  <div class="eyebrow" style="font-size: 1.1rem;">Laboratorio Independiente de Ingeniería de Audio</div>
  <p style="max-width: 600px; margin: 0.75rem auto 1rem; color: var(--vp-c-text-2);">Desarrollamos software de audio de estudio de alta precisión, sin bloatware, sin suscripciones recurrentes y sin DRM invasivo. Contáctanos:</p>
  <div class="rock-copy-email-wrapper" style="justify-content: center; margin-bottom: 1rem;">
    <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
    <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
  </div>
  <a href="/es/support" class="btn btn-ghost">Apoya el Laboratorio (Ko-fi / Crypto) ☕</a>
</div>

<script setup>
import { ref } from 'vue'
const btnText = ref('Copiar Correo')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = '¡Copiado!'
  setTimeout(function() { btnText.value = 'Copiar Correo' }, 2000)
}
</script>
