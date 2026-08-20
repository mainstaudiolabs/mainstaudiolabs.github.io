---
layout: doc
sidebar: false
aside: false
title: Apoya el Laboratorio - Main St Audio Labs
---

<div class="rock-container">
<div class="rock-header">
  <div class="rock-title">Apoya el Laboratorio</div>
  <div class="rock-subtitle">Ayúdanos a seguir desarrollando plugins de audio y procesadores de señal gratuitos y de alta calidad</div>
</div>
<div class="support-layout">
  <!-- Ko-fi Section -->
  <div class="support-card fiat-card">
    <div class="support-card-badge">RECOMENDADO</div>
    <div class="support-card-title">Tarjeta o PayPal vía Ko-fi</div>
    <p class="support-card-desc">La forma más rápida de apoyar el proyecto. Puedes pagar de forma segura con Tarjeta de Crédito, PayPal, Apple Pay o Google Pay. No es necesario registrarse.</p>
    <a href="https://ko-fi.com/mainstaudiolabs" target="_blank" class="rock-btn rock-btn-primary support-kofi-btn">Apoyar en Ko-fi ☕</a>
  </div>
  <!-- Crypto Section -->
  <div class="support-card crypto-card">
    <div class="support-card-title">Criptomonedas</div>
    <p class="support-card-desc">Aceptamos donaciones en redes de bajas comisiones. Haz clic en el botón para copiar la dirección o escanea el código QR desde tu billetera.</p>
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
          <img src="/usdtQR.jpg" alt="USDT TRC20 QR Code" class="crypto-qr-img" />
        </div>
      </div>
      <!-- Bitcoin -->
      <div class="crypto-item">
        <div class="crypto-meta">
          <span class="crypto-name">Bitcoin</span>
          <span class="crypto-network-badge">BTC Nativa</span>
        </div>
        <div class="crypto-address-wrapper">
          <span class="crypto-address-text">1E4Y3NvzPbTwVjdmJNEEsy4EqEZJAa5PFz</span>
          <button class="rock-copy-btn compact" @click="copyBtc">{{ btcText }}</button>
        </div>
        <div class="crypto-qr-wrapper">
          <img src="/btcQR.jpg" alt="BTC QR Code" class="crypto-qr-img" />
        </div>
      </div>
      <!-- Solana -->
      <div class="crypto-item">
        <div class="crypto-meta">
          <span class="crypto-name">Solana</span>
          <span class="crypto-network-badge">Red SOL</span>
        </div>
        <div class="crypto-address-wrapper">
          <span class="crypto-address-text">8UAyroeqSJzgqQRHiLqPmSfXNiJmgN7XoDCu9NhiWUSW</span>
          <button class="rock-copy-btn compact" @click="copySol">{{ solText }}</button>
        </div>
        <div class="crypto-qr-wrapper">
          <img src="/solQR.jpg" alt="Solana QR Code" class="crypto-qr-img" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<script setup>
import { ref } from 'vue'
const btcText = ref('Copiar Dirección')
const solText = ref('Copiar Dirección')
const usdtText = ref('Copiar Dirección')
function copyBtc() {
  navigator.clipboard.writeText('1E4Y3NvzPbTwVjdmJNEEsy4EqEZJAa5PFz')
  btcText.value = '¡Copiado!'
  setTimeout(function() { btcText.value = 'Copiar Dirección' }, 2000)
}
function copySol() {
  navigator.clipboard.writeText('8UAyroeqSJzgqQRHiLqPmSfXNiJmgN7XoDCu9NhiWUSW')
  solText.value = '¡Copiado!'
  setTimeout(function() { solText.value = 'Copiar Dirección' }, 2000)
}
function copyUsdt() {
  navigator.clipboard.writeText('TAqm2ceZDsxt4GqX6Dq5mgGyi4sVQL9Scn')
  usdtText.value = '¡Copiado!'
  setTimeout(function() { usdtText.value = 'Copiar Dirección' }, 2000)
}
</script>