---
layout: doc
sidebar: false
aside: false
title: Support the Lab - Main St Audio Labs
---

<div class="rock-container">
<div class="rock-header">
  <div class="rock-title">Support the Lab</div>
  <div class="rock-subtitle">Help us keep developing free, high-quality audio plugins and signal processors</div>
</div>
<div class="support-layout">
  <!-- Ko-fi Section -->
  <div class="support-card fiat-card">
    <div class="support-card-badge">RECOMMENDED</div>
    <div class="support-card-title">Card or PayPal via Ko-fi</div>
    <p class="support-card-desc">The fastest way to support the project. You can pay securely with Credit Card, PayPal, Apple Pay, or Google Pay. No registration required.</p>
    <a href="https://ko-fi.com/mainstaudiolabs" target="_blank" class="rock-btn rock-btn-primary support-kofi-btn">Support on Ko-fi ☕</a>
  </div>
  <!-- Crypto Section -->
  <div class="support-card crypto-card">
    <div class="support-card-title">Cryptocurrency</div>
    <p class="support-card-desc">We accept donations on low-fee networks. Click the button to copy the address or scan the QR code from your wallet.</p>
    <div class="crypto-list">
      <!-- USDT -->
      <div class="crypto-item">
        <div class="crypto-meta">
          <span class="crypto-name">USDT</span>
          <span class="crypto-network-badge">TRON (TRC-20)</span>
        </div>
        <div class="crypto-address-wrapper">
          <span class="crypto-address-text">TAqm2ceZDsxt4GqX6Dq5mgGyi4sVQL9Scn</span>
          <button class="rock-copy-btn compact" @click="copyUsdt">{{ usdtText }}</button>
        </div>
        <div class="crypto-qr-wrapper">
          <img src="/usdt.jpg" alt="USDT TRC20 QR Code" class="crypto-qr-img" />
        </div>
      </div>
      <!-- Bitcoin -->
      <div class="crypto-item">
        <div class="crypto-meta">
          <span class="crypto-name">Bitcoin</span>
          <span class="crypto-network-badge">BTC Native</span>
        </div>
        <div class="crypto-address-wrapper">
          <span class="crypto-address-text">1E4Y3NvzPbTwVjdmJNEEsy4EqEZJAa5PFz</span>
          <button class="rock-copy-btn compact" @click="copyBtc">{{ btcText }}</button>
        </div>
        <div class="crypto-qr-wrapper">
          <img src="/btc.jpg" alt="BTC QR Code" class="crypto-qr-img" />
        </div>
      </div>
      <!-- Solana -->
      <div class="crypto-item">
        <div class="crypto-meta">
          <span class="crypto-name">Solana</span>
          <span class="crypto-network-badge">SOL Network</span>
        </div>
        <div class="crypto-address-wrapper">
          <span class="crypto-address-text">8UAyroeqSJzgqQRHiLqPmSfXNiJmgN7XoDCu9NhiWUSW</span>
          <button class="rock-copy-btn compact" @click="copySol">{{ solText }}</button>
        </div>
        <div class="crypto-qr-wrapper">
          <img src="/sol.jpg" alt="Solana QR Code" class="crypto-qr-img" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<script setup>
import { ref } from 'vue'
const btcText = ref('Copy Address')
const solText = ref('Copy Address')
const usdtText = ref('Copy Address')
function copyBtc() {
  navigator.clipboard.writeText('1E4Y3NvzPbTwVjdmJNEEsy4EqEZJAa5PFz')
  btcText.value = 'Copied!'
  setTimeout(function() { btcText.value = 'Copy Address' }, 2000)
}
function copySol() {
  navigator.clipboard.writeText('8UAyroeqSJzgqQRHiLqPmSfXNiJmgN7XoDCu9NhiWUSW')
  solText.value = 'Copied!'
  setTimeout(function() { solText.value = 'Copy Address' }, 2000)
}
function copyUsdt() {
  navigator.clipboard.writeText('TAqm2ceZDsxt4GqX6Dq5mgGyi4sVQL9Scn')
  usdtText.value = 'Copied!'
  setTimeout(function() { usdtText.value = 'Copy Address' }, 2000)
}
</script>
