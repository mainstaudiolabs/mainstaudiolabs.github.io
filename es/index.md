---
title: Main St Audio Labs - Stompboxes, Amplificadores y Audio de Estudio
---

<div class="hero">
  <p class="eyebrow">Laboratorio de Audio Independiente</p>
  <div class="brand-mark">Main St Audio Labs</div>
  <p class="brand-tagline">Herramientas de Audio, Procesadores de Señal y Cuadernos de Ingeniería Inspirados en Grabaciones Clásicas</p>
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
