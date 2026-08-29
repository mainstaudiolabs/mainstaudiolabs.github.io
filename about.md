---
layout: doc
sidebar: false
aside: false
title: About - Main St Audio Labs
---

<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>

# About Main St Audio Labs

Main St Audio Labs is a personal project born at the intersection of vintage rock 'n' roll passion, analog modeling, and software engineering.

---

## The Story Behind the Labs

Main St Audio Labs was founded by **Emiliano Tegli**, an independent audio developer, guitarist, and tone enthusiast obsessed with the raw, dynamic, and touch-sensitive guitar sounds of the late 1960s and early 1970s. 

The name is a direct tribute to the legendary basement sessions of the Rolling Stones' *Exile on Main St.*—an era where records were greasy, valves were pushed to their melting point, and guitar tones had a tridimensional, organic warmth that defined rock music.

---

## Why Main St Audio Labs?

Modern audio plugins have become incredibly powerful, but they often get in the way of making music. Musicians and producers are frequently forced to navigate infinite parameters, coordinate complex routings, scroll through hundreds of presets, and deal with bloated setups that drain CPU resources.

We believe in a different approach: **The Simplicity Manifesto.**

### 📻 1. Calibrated to the Records (Mix-Ready)
Instead of giving you raw, unpolished emulations and leaving you to struggle with post-equalization, we do the heavy lifting beforehand. Each plugin is meticulously tuned and calibrated by studying the exact guitar, synth, and dynamic responses heard on classic studio albums and live records, ensuring they fit immediately into your mix.

### ⚡ 2. Ultra-Low CPU & Maximum Performance
We believe your computer should focus on your music, not on running heavy graphics or inefficient DSP loops. All of our tools are built using highly optimized audio engines and lightweight DSP code that deliver maximum performance with an extremely low CPU footprint, letting you run multiple instances without breaking a sweat.

---

## Our Mission

To build virtual boutique audio tools that sound raw, feel organic, and get completely out of the way of your inspiration.

No registration walls, no bloated setups—just plug in, turn the knobs, and play.

---

## 🤝 Friends &amp; Collaborators

Main St Audio Labs is supported by passionate musicians, tone chasers, and friends who contribute their ears, feedback, and expertise to our research:

* **Claudio Crespino** &mdash; Special thanks for his invaluable collaboration, testing, and continuous support across our audio projects.

<NewsletterSubscribe />

---

## Contact &amp; Feedback

We are always listening. If you have any suggestions, audio tracks you want to share, or custom cabinet requests, feel free to copy our email below:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<p style="margin-top: 2rem; margin-bottom: 1rem;">If you would like to support our independent research and help us keep our plugins free, you can support us with Card, PayPal, or Cryptocurrency:</p>

<div>
  <a href="/support" class="rock-btn rock-btn-primary" style="display: inline-block; text-align: center;">Support the Lab (Ko-fi / Crypto) ☕</a>
</div>
