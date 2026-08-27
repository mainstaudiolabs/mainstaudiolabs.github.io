---
layout: doc
sidebar: false
aside: false
title: Main St Audio Labs - Stompboxes & Virtual Amplifiers
---

<div class="rock-container">
<div class="rock-header">
<div class="rock-title">Main St Audio Labs</div>
<div class="rock-subtitle">Record-Inspired Audio Tools and Signal Processors</div>
</div>

<div class="rock-grid">
<!-- Card 1: Midnight Rambler -->
<div class="rock-card">
<div class="rock-card-image-wrapper">
<img src="/midnightramblerinterface.png" alt="Midnight Rambler Plugin GUI" class="rock-card-image" />
</div>
<div class="rock-card-content">
<h3 class="rock-card-title">Midnight Rambler</h3>
<div class="rock-card-subtitle">5E3 Tweed Tube Amp Simulator</div>
<div class="rock-card-badges">
<span class="rock-card-badge">🪟 Win</span>
<span class="rock-card-badge">🍎 Mac</span>
<span class="rock-card-badge">🐧 Linux</span>
<span class="rock-card-badge">VST3 · AU · App</span>
</div>
<p class="rock-card-desc">The raw, dynamic tube grit of the classic 5E3 Tweed amplifier behind iconic rock records. Organic touch sensitivity, 3 studio mic positions, and built-in chromatic tuner.</p>
<div class="rock-card-footer">
<span class="rock-card-price">FREE</span>
<a href="/midnight-rambler" class="rock-btn rock-btn-primary" style="padding: 0.45rem 1rem; font-size: 0.86rem;">Manual &amp; Download ➔</a>
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
<div class="rock-card-subtitle">Analog Chromatic Tuner</div>
<div class="rock-card-badges">
<span class="rock-card-badge">🪟 Win</span>
<span class="rock-card-badge">🍎 Mac</span>
<span class="rock-card-badge">🐧 Linux</span>
<span class="rock-card-badge">VST3 · AU · App</span>
</div>
<p class="rock-card-desc">Vintage needle chromatic tuner with dual open-source DSP engine (MPM &amp; YIN). True Zero-CPU architecture when closed to instantiate across every track in your session.</p>
<div class="rock-card-footer">
<span class="rock-card-price">FREE</span>
<a href="/tuner-pedal" class="rock-btn rock-btn-primary" style="padding: 0.45rem 1rem; font-size: 0.86rem;">Manual &amp; Download ➔</a>
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
<div class="rock-card-subtitle">Head &amp; Combo + Dual FX '78–'81</div>
<div class="rock-card-badges">
<span class="rock-card-badge">🪟 Win</span>
<span class="rock-card-badge">🍎 Mac</span>
<span class="rock-card-badge">🐧 Linux</span>
<span class="rock-card-badge">VST3 · AU · App</span>
</div>
<p class="rock-card-desc">The articulate 1978–1981 Stones tone: 100W Head &amp; 60W Combo 6L6 power topologies, 3 channels, 5-band active graphic EQ, Phase '78 &amp; Tape Slapback, "MICK" EVM-12L cab with 7 studio mics, and integrated floating chromatic tuner.</p>
<div class="rock-card-footer">
<span class="rock-card-price" style="color: var(--vp-c-text-3);">SOON</span>
<a href="/tattoo-you" class="rock-btn rock-btn-secondary" style="padding: 0.45rem 1rem; font-size: 0.86rem;">View Details ➔</a>
</div>
</div>
</div>
</div>

<!-- Global Community & Support Section -->
<div class="rock-home-banner">
<div style="font-family: 'Special Elite', monospace; font-size: 1.4rem; color: var(--vp-c-brand-1); text-transform: uppercase; margin-bottom: 0.5rem;">
We want to hear your mixes!
</div>
<p style="font-family: 'Courier Prime', monospace; font-size: 1rem; color: var(--vp-c-text-2); max-width: 700px; margin: 0 auto 1.25rem auto;">
Our plugins were calibrated by listening to classic record mixes. Send us your tracks, comments, or inquiries directly at:
</p>
<div class="rock-copy-email-wrapper" style="justify-content: center; margin-bottom: 1.5rem;">
<span class="rock-email-text">mainstaudiolabs@gmail.com</span>
<button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>
<div style="border-top: 1px dashed var(--vp-c-border); padding-top: 1.25rem; margin-top: 1.25rem;">
<a href="/support" class="rock-btn rock-btn-secondary" style="display: inline-block; padding: 0.6rem 1.4rem;">
Support the Lab (Ko-fi / Crypto) ☕
</a>
</div>
</div>
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
