---
layout: doc
sidebar: false
aside: false
pageClass: rock-home-page
title: Main St Audio Labs - Stompboxes y Amplificadores Virtuales
---

<div class="rock-container">
<div class="rock-header">
<div class="rock-title">Main St Audio Labs</div>
<div class="rock-subtitle">Herramientas de Audio y Procesadores de Señal Inspirados en Grabaciones Clásicas</div>
</div>

<div class="rock-grid">
<!-- Card 1: Midnight Rambler -->
<div class="rock-card">
<div class="rock-card-image-wrapper">
<img src="/midnightramblerinterface.png" alt="Midnight Rambler Plugin GUI" class="rock-card-image" />
</div>
<div class="rock-card-content">
<h3 class="rock-card-title">Midnight Rambler</h3>
<div class="rock-card-subtitle">Simulador Valvular 5E3 Tweed</div>
<div class="rock-card-badges">
<span class="rock-card-badge">🪟 Win</span>
<span class="rock-card-badge">🍎 Mac</span>
<span class="rock-card-badge">🐧 Linux</span>
<span class="rock-card-badge">VST3 · AU · App</span>
</div>
<p class="rock-card-desc">El tono crudo y dinámico del Fender Tweed 5E3 detrás de los discos clásicos de rock. Sensibilidad táctil orgánica, selector de 3 micrófonos y afinador retro integrado.</p>
<div class="rock-card-footer">
<span class="rock-card-price">GRATIS</span>
<a href="/es/midnight-rambler" class="rock-btn rock-btn-primary" style="padding: 0.45rem 1rem; font-size: 0.86rem;">Ver Manual &amp; Descarga ➔</a>
</div>
</div>
</div>

<!-- Card 2: Vintage Tuner Stompbox -->
<div class="rock-card">
<div class="rock-card-image-wrapper">
<img src="/TunerPedal.png" alt="Vintage Tuner Stompbox Plugin GUI" class="rock-card-image" />
</div>
<div class="rock-card-content">
<h3 class="rock-card-title">Vintage Tuner Stompbox</h3>
<div class="rock-card-subtitle">Afinador Cromático Analógico</div>
<div class="rock-card-badges">
<span class="rock-card-badge">🪟 Win</span>
<span class="rock-card-badge">🍎 Mac</span>
<span class="rock-card-badge">🐧 Linux</span>
<span class="rock-card-badge">0.0% CPU · VST3</span>
</div>
<p class="rock-card-desc">Afinador de aguja vintage con doble motor DSP de código abierto (MPM y YIN). Consumo 0.0% de CPU con ventana cerrada para insertar en todas las pistas de tu DAW.</p>
<div class="rock-card-footer">
<span class="rock-card-price">GRATIS</span>
<a href="/es/tuner-pedal" class="rock-btn rock-btn-primary" style="padding: 0.45rem 1rem; font-size: 0.86rem;">Ver Manual &amp; Descarga ➔</a>
</div>
</div>
</div>

<!-- Card 3: Tattoo You -->
<div class="rock-card coming-soon">
<div class="rock-card-image-wrapper">
<img src="/tattoo-you.png" alt="Tattoo You GUI Preview" class="rock-card-image" />
</div>
<div class="rock-card-content">
<h3 class="rock-card-title">Tattoo You</h3>
<div class="rock-card-subtitle">Cabezal Valvular 100W &amp; Dual FX '78–'81</div>
<div class="rock-card-badges">
<span class="rock-card-badge">🪟 Win</span>
<span class="rock-card-badge">🍎 Mac (Pronto)</span>
<span class="rock-card-badge">VST3 · Standalone</span>
</div>
<p class="rock-card-desc">El sonido articulado de los Stones de 1978–1981: cabezal Mesa vintage, caja 1x12 EVM-12L, ecualizador gráfico de 5 bandas, phaser óptico Phase '78 y slapback echo.</p>
<div class="rock-card-footer">
<span class="rock-card-price" style="color: var(--vp-c-text-3);">PRONTO</span>
<a href="/es/tattoo-you" class="rock-btn rock-btn-secondary" style="padding: 0.45rem 1rem; font-size: 0.86rem;">Ver Detalles ➔</a>
</div>
</div>
</div>
</div>

<!-- Global Community & Support Section -->
<div class="rock-home-banner">
<div style="font-family: 'Special Elite', monospace; font-size: 1.4rem; color: var(--vp-c-brand-1); text-transform: uppercase; margin-bottom: 0.5rem;">
¡Queremos escuchar tus producciones!
</div>
<p style="font-family: 'Courier Prime', monospace; font-size: 1rem; color: var(--vp-c-text-2); max-width: 700px; margin: 0 auto 1.25rem auto;">
Nuestros plugins fueron calibrados escuchando discos clásicos. Envíanos tus pistas, comentarios o consultas directamente a nuestro correo:
</p>
<div class="rock-copy-email-wrapper" style="justify-content: center; margin-bottom: 1.5rem;">
<span class="rock-email-text">mainstaudiolabs@gmail.com</span>
<button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>
<div style="border-top: 1px dashed var(--vp-c-border); padding-top: 1.25rem; margin-top: 1.25rem;">
<a href="/es/support" class="rock-btn rock-btn-secondary" style="display: inline-block; padding: 0.6rem 1.4rem;">
Apoya el Laboratorio (Ko-fi / Crypto) ☕
</a>
</div>
</div>
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