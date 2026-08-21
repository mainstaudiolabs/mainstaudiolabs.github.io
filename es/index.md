---
layout: doc
sidebar: false
aside: false
title: Main St Audio Labs - Stompboxes y Amplificadores Virtuales
---

<div class="rock-container">
<div class="rock-header">
  <div class="rock-title">Main St Audio Labs</div>
  <div class="rock-subtitle">Herramientas de Audio y Procesadores de Señal Inspirados en Grabaciones Clásicas</div>
</div>
<div class="rock-grid">
  <!-- Card 1: Midnight Rambler (Active) -->
  <div class="rock-card">
    <div class="rock-card-image-wrapper">
      <img src="/midnight.png" alt="Midnight Rambler Plugin GUI" class="rock-card-image" style="object-fit: contain; padding: 0.5rem; width: 100%; height: 100%;" />
    </div>
    <div class="rock-card-content">
      <div class="rock-card-tag">Stompbox Series #01 <span class="badge-free">GRATIS</span> <span class="badge-format">VST3 &amp; Standalone · Windows, macOS y Linux</span></div>
      <h3 class="rock-card-title">Midnight Rambler</h3>
      <p class="rock-card-desc">El Fender Tweed Deluxe 5E3 es el Santo Grial de los amplificadores de grabación en la historia del rock: la columna vertebral cruda y dinámica detrás de Keith Richards (<em>Sticky Fingers</em>, <em>Exile on Main St.</em>), la furia de Neil Young, Billy Gibbons y <em>Hotel California</em>. Aunque existen muchas emulaciones de este legendario circuito, <strong>Midnight Rambler</strong> es algo que definitivamente debes probar: su sensibilidad táctil inmediata, compresión valvular orgánica y su consumo de CPU ultra bajo te permiten conectar tu guitarra, subir el volumen y sumergirte en el sonido de un disco clásico al instante.</p>
      <div class="rock-card-actions">
        <a href="/es/midnight-rambler" class="rock-btn rock-btn-secondary" style="flex: 1; min-width: 170px;">Leer Manual (v1.0.0)</a>
        <a href="/midnight-rambler-manual.pdf" download class="rock-btn rock-btn-secondary" style="flex: 1; min-width: 170px;">Descargar PDF (v1.0.0)</a>
        <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/latest" target="_blank" class="rock-btn rock-btn-primary" style="flex: 2; min-width: 240px;">Descargar Plugin (GRATIS)</a>
      </div>
      <!-- Contact & Feedback Section integrated in Card -->
      <div class="rock-card-contact">
        <div class="rock-card-contact-title">¡Queremos escuchar tus mezclas!</div>
        <p class="rock-card-contact-desc">Midnight Rambler fue calibrado escuchando mezclas de discos clásicos. Ahora queremos escuchar cómo suena en los tuyos. Envíanos tus pistas, comentarios o consultas.</p>
        <div class="rock-copy-email-wrapper card-contact">
          <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
          <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
        </div>
      </div>
      <div style="text-align: center; margin-top: 0.75rem;">
        <a href="/es/support" style="font-size: 0.85rem; opacity: 0.8; text-decoration: underline; color: var(--vp-c-brand-1);">Apoya el Laboratorio (Ko-fi / Crypto) ☕</a>
      </div>
    </div>
  </div>

  <!-- Card 2: Tattoo You (Coming Soon) -->
  <div class="rock-card coming-soon">
    <div class="rock-card-image-wrapper">
      <img src="/tattoo-you.png" alt="Tattoo You GUI Preview" class="rock-card-image" style="object-fit: contain; padding: 0.5rem; width: 100%; height: 100%;" />
    </div>
    <div class="rock-card-content">
      <div class="rock-card-tag">Amplifier &amp; FX Series #02 <span class="badge-free">PRÓXIMAMENTE</span> <span class="badge-format">Windows · macOS &amp; Linux Próximamente</span></div>
      <h3 class="rock-card-title">Tattoo You</h3>
      <p class="rock-card-desc">La simulación definitiva del amplificador de bulbos vintage de 100W de 1978–1981 y la icónica suite dual de efectos vintage de Keith Richards. Basado en el legendario cabezal Mesa/Boogie y el altavoz 1x12 Electro-Voice EVM-12L, Tattoo You captura ese tono de guitarra articulado e icónico de los Stones: desde los limpios campanilleantes y dinámicamente comprimidos y el legendario crujido de los 80 (Start Me Up, Little T&amp;A) hasta el sustain de los solos de rock clásico. Cuenta con Noise Gate adaptativo en la entrada, limitador analógico Waveshaper (-0.1 dBFS), selector de 3 canales (Clean, Crunch, Lead), ecualizador gráfico de 5 bandas auténtico, phaser óptico Phase '78 y eco de cinta analógica slapback de 110ms.</p>
      <div class="rock-card-actions">
        <a href="/es/tattoo-you" class="rock-btn rock-btn-secondary" style="flex: 1; min-width: 170px;">Leer Manual (v1.0.0)</a>
        <a href="/es/history-mesa-stones" class="rock-btn rock-btn-secondary" style="flex: 1; min-width: 170px;">La Historia '78–'81 📖</a>
        <button class="rock-btn rock-btn-primary" disabled style="flex: 2; min-width: 240px; opacity: 0.65; cursor: not-allowed;">Lanzamiento Próximamente (GRATIS)</button>
      </div>
      <!-- Contact & Feedback Section integrated in Card -->
      <div class="rock-card-contact">
        <div class="rock-card-contact-title">Acceso Anticipado &amp; Consultas</div>
        <p class="rock-card-contact-desc">Tattoo You se encuentra actualmente en calibración final. Escríbenos si tienes preguntas o deseas solicitar versiones beta.</p>
        <div class="rock-copy-email-wrapper card-contact">
          <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
          <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
        </div>
      </div>
      <div style="text-align: center; margin-top: 0.75rem;">
        <a href="/es/support" style="font-size: 0.85rem; opacity: 0.8; text-decoration: underline; color: var(--vp-c-brand-1);">Apoya el Laboratorio (Ko-fi / Crypto) ☕</a>
      </div>
    </div>
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