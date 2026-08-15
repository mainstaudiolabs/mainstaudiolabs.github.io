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
      <p class="rock-card-desc">An amp simulator in pedal format born from a deep study of Keith Richards' legendary guitar tone. Midnight Rambler is not just another generic simulation; it is a sound meticulously calibrated and adapted to fit immediately into the mix. The dynamic saturation behavior and frequency response have been optimized specifically to prevent muddy low-end and harsh high-end. All of this runs on an ultra-low CPU consumption engine, delivering that raw and indomitable classic record character instantly.</p>
      <div class="rock-card-actions">
        <a href="/midnight-rambler" class="rock-btn rock-btn-secondary" style="flex: 1;">Read Manual</a>
        <a href="/midnight-rambler-manual.pdf" download class="rock-btn rock-btn-secondary" style="flex: 1;">Get PDF Manual</a>
        <a href="https://github.com/mainstaudiolabs/Midnight-Rambler/releases" target="_blank" class="rock-btn rock-btn-primary" style="width: 100%; margin-top: 0.5rem;">Download Plugin (FREE)</a>
      </div>
      <!-- Contact & Feedback Section integrated in Card -->
      <div class="rock-card-contact">
        <div class="rock-card-contact-title">We want to hear your mixes!</div>
        <p class="rock-card-contact-desc">Midnight Rambler was calibrated by listening to classic record mixes. Now we want to hear how it sounds in yours. Send us your tracks, feedback, or inquiries.</p>
        <div class="rock-copy-email-wrapper card-contact">
          <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
          <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
        </div>
        <div style="margin-top: 1rem;">
          <a href="/support" class="rock-btn rock-btn-primary" style="display: block; text-align: center; width: 100%; box-sizing: border-box;">Support the Lab (Ko-fi / Crypto) ☕</a>
        </div>
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
