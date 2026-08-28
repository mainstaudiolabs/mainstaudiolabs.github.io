---
layout: doc
sidebar: false
aside: false
title: 開発支援 - Main St Audio Labs
---

<div class="rock-container">
<div class="rock-header">
  <div class="rock-title">ラボの開発を支援する</div>
  <div class="rock-subtitle">高品質で使いやすいフリープラグインとシグナルプロセッサーの継続的な開発をサポートしてください</div>
</div>
<div class="support-layout">
  <!-- Ko-fi Section -->
  <div class="support-card fiat-card">
    <div class="support-card-badge">おすすめ</div>
    <div class="support-card-title">クレジットカード / PayPal（Ko-fi）</div>
    <p class="support-card-desc">最も手軽でスピーディーな支援方法です。クレジットカード、PayPal、Apple Pay、Google Pay で安全にお支払いいただけます（会員登録不要）。</p>
    <a href="https://ko-fi.com/mainstaudiolabs" target="_blank" class="rock-btn rock-btn-primary support-kofi-btn">Ko-fi で支援する ☕</a>
  </div>
  <!-- Crypto Section -->
  <div class="support-card crypto-card">
    <div class="support-card-title">仮想通貨（暗号資産）</div>
    <p class="support-card-desc">手数料の低いネットワークでの寄付を受け付けています。ボタンをクリックしてアドレスをコピーするか、ウォレットからQRコードをスキャンしてください。</p>
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
          <img src="/usdtQR.jpg" alt="USDT TRC20 QRコード" class="crypto-qr-img" />
        </div>
      </div>
      <!-- Bitcoin -->
      <div class="crypto-item">
        <div class="crypto-meta">
          <span class="crypto-name">Bitcoin</span>
          <span class="crypto-network-badge">BTC ネイティブ</span>
        </div>
        <div class="crypto-address-wrapper">
          <span class="crypto-address-text">1E4Y3NvzPbTwVjdmJNEEsy4EqEZJAa5PFz</span>
          <button class="rock-copy-btn compact" @click="copyBtc">{{ btcText }}</button>
        </div>
        <div class="crypto-qr-wrapper">
          <img src="/btcQR.jpg" alt="Bitcoin QRコード" class="crypto-qr-img" />
        </div>
      </div>
      <!-- Solana -->
      <div class="crypto-item">
        <div class="crypto-meta">
          <span class="crypto-name">Solana</span>
          <span class="crypto-network-badge">SOL ネットワーク</span>
        </div>
        <div class="crypto-address-wrapper">
          <span class="crypto-address-text">8UAyroeqSJzgqQRHiLqPmSfXNiJmgN7XoDCu9NhiWUSW</span>
          <button class="rock-copy-btn compact" @click="copySol">{{ solText }}</button>
        </div>
        <div class="crypto-qr-wrapper">
          <img src="/solQR.jpg" alt="Solana QRコード" class="crypto-qr-img" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<script setup>
import { ref } from 'vue'
const btcText = ref('アドレスをコピー')
const solText = ref('アドレスをコピー')
const usdtText = ref('アドレスをコピー')
function copyBtc() {
  navigator.clipboard.writeText('1E4Y3NvzPbTwVjdmJNEEsy4EqEZJAa5PFz')
  btcText.value = 'コピーしました！'
  setTimeout(function() { btcText.value = 'アドレスをコピー' }, 2000)
}
function copySol() {
  navigator.clipboard.writeText('8UAyroeqSJzgqQRHiLqPmSfXNiJmgN7XoDCu9NhiWUSW')
  solText.value = 'コピーしました！'
  setTimeout(function() { solText.value = 'アドレスをコピー' }, 2000)
}
function copyUsdt() {
  navigator.clipboard.writeText('TAqm2ceZDsxt4GqX6Dq5mgGyi4sVQL9Scn')
  usdtText.value = 'コピーしました！'
  setTimeout(function() { usdtText.value = 'アドレスをコピー' }, 2000)
}
</script>
