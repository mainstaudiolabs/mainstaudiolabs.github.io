---
layout: doc
sidebar: false
aside: false
title: Main St Audio Labs - Virtual Stompboxes and Amp Sims
---

<div class="rock-container">
<div class="rock-header">
  <div class="rock-title">Main St Audio Labs</div>
  <div class="rock-subtitle">Record-Inspired Audio Tools and Signal Processors</div>
</div>
<div class="rock-grid">
  <!-- Card 1: Midnight Rambler (Active) -->
  <div class="rock-card">
    <div class="rock-card-image-wrapper">
      <div class="vinyl-disc-wrapper">
        <img src="/logo.jpg" alt="Midnight Rambler Label" class="vinyl-disc" />
      </div>
    </div>
    <div class="rock-card-content">
      <div class="rock-card-tag">Stompbox Series #01 <span class="badge-free">FREE</span> <span class="badge-format">VST3 &amp; Standalone</span></div>
      <h3 class="rock-card-title">Midnight Rambler</h3>
      <p class="rock-card-desc">An amplifier simulator in pedal format powered by neural modeling (NAM) and based on the legendary Tweed Deluxe 5E3. Crafted to deliver that raw, touch-sensitive, late '60s and early '70s classic rock tone — from Keith Richards' iconic Stones crunch and the greasy riffs of The Faces (Ron Wood) to Neil Young's roaring Tweed overdrive, Billy Gibbons' Texas bite, and Ed King's legendary intro tone on <em>Sweet Home Alabama</em>. Featuring dual-channel switching (Edge of Breakup &amp; Cranked Overdrive), high-precision mix-ready tone filters, custom cabinet IR profiles, and near-zero latency with ultra-low CPU footprint.</p>
      <div class="rock-card-actions">
        <a href="/midnight-rambler" class="rock-btn rock-btn-secondary" style="flex: 1;">Read Manual (v1.0.0)</a>
        <a href="/midnight-rambler-manual.pdf" download class="rock-btn rock-btn-secondary" style="flex: 1;">Get PDF Manual (v1.0.0)</a>
        <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/latest" target="_blank" class="rock-btn rock-btn-primary" style="width: 100%; margin-top: 0.5rem;">Download Plugin (FREE)</a>
      </div>
      <!-- Contact & Feedback Section integrated in Card -->
      <div class="rock-card-contact">
        <div class="rock-card-contact-title">We want to hear your mixes!</div>
        <p class="rock-card-contact-desc">Midnight Rambler was calibrated by listening to classic record mixes. Now we want to hear how it sounds in yours. Send us your tracks, feedback, or inquiries.</p>
        <div class="rock-copy-email-wrapper card-contact">
          <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
          <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
        </div>
      </div>
      <div style="text-align: center; margin-top: 0.75rem;">
        <a href="/support" style="font-size: 0.85rem; opacity: 0.8; text-decoration: underline; color: var(--vp-c-brand-1);">Support the Lab (Ko-fi / Crypto) ☕</a>
      </div>
    </div>
  </div>

  <!-- Card 2: Tattoo You (Coming Soon) -->
  <div class="rock-card coming-soon">
    <div class="rock-card-image-wrapper">
      <img src="/tattoo-you.png" alt="Tattoo You GUI Preview" class="rock-card-image" style="object-fit: contain; padding: 0.5rem; width: 100%; height: 100%;" />
    </div>
    <div class="rock-card-content">
      <div class="rock-card-tag">Amplifier &amp; FX Series #02 <span class="badge-free">COMING SOON</span> <span class="badge-format">VST3 &amp; Standalone</span></div>
      <h3 class="rock-card-title">Tattoo You</h3>
      <p class="rock-card-desc">The definitive 1978–1981 vintage 100W tube amplifier simulation and Keith Richards signature vintage dual FX suite. Based on the legendary Mesa/Boogie tube head and Pacific Woodworks 1x12 Electro-Voice EVM-12L speaker, Tattoo You captures that iconic, articulate Stones guitar tone — from chimey, dynamic compressed cleans and the legendary 80's open-G crunch (<em>Start Me Up</em>, <em>Little T&A</em>) to singing, mid-forward classic rock lead sustain. Featuring a 3-way channel selector (Clean, Crunch, Lead), authentic 5-Band Graphic Equalizer, Phase '78 optical phaser (MXR Phase 100 style), and 110ms analog tape slapback echo.</p>
      <div class="rock-card-actions">
        <a href="/tattoo-you" class="rock-btn rock-btn-secondary" style="flex: 1;">Read Manual (v1.0.0)</a>
        <button class="rock-btn rock-btn-primary" disabled style="width: 100%; margin-top: 0.5rem; opacity: 0.65; cursor: not-allowed;">Release Coming Soon (FREE)</button>
      </div>
      <!-- Contact & Feedback Section integrated in Card -->
      <div class="rock-card-contact">
        <div class="rock-card-contact-title">Early Access &amp; Inquiries</div>
        <p class="rock-card-contact-desc">Tattoo You is currently in final calibration. Drop us a line with questions or to request beta builds.</p>
        <div class="rock-copy-email-wrapper card-contact">
          <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
          <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
        </div>
      </div>
      <div style="text-align: center; margin-top: 0.75rem;">
        <a href="/support" style="font-size: 0.85rem; opacity: 0.8; text-decoration: underline; color: var(--vp-c-brand-1);">Support the Lab (Ko-fi / Crypto) ☕</a>
      </div>
    </div>
  </div>
</div>
</div>
<!-- redeploy -->

<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>
