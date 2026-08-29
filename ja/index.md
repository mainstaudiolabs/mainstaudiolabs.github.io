---
title: Main St Audio Labs - ヴィンテージ・アンプ＆スタジオ・プロセッサー
---

<div class="hero">
  <p class="eyebrow">独立系オーディオ・ラボ</p>
  <div class="brand-mark">Main St Audio Labs</div>
  <p class="brand-tagline">名盤に着想を得たギター・プロセッサー＆シグナル・ツール</p>
  <p class="lead">名盤の録音を基に手作業で調整されたVST3/AUプラグイン — 無限のプリセットも、無駄なCPU消費も、サブスクリプションもありません。</p>
  <div class="hero-meta">
    <span class="chip">VST3 · AU · Standalone</span>
    <span class="chip">Win · Mac · Linux</span>
    <span class="chip">64-bit</span>
  </div>
</div>

<div class="section-head"><h2>プラグイン・カタログ</h2></div>

<PluginGrid />

<div class="section-head"><h2>ラボ・ジャーナルより</h2><a href="/ja/audio-and-mixing">すべて見る →</a></div>

<ArticleGrid :limit="3" />

<div class="rock-home-banner" style="margin-top: 1.5rem;">
  <div class="eyebrow" style="font-size: 1.1rem;">独立系オーディオ・エンジニアリング・ラボ</div>
  <p style="max-width: 600px; margin: 0.75rem auto 1rem; color: var(--vp-c-text-2);">不要なブロートウェア、サブスクリプション、侵略的DRMを排除した高精度スタジオ・ソフトウェアを開発しています。お問い合わせ：</p>
  <div class="rock-copy-email-wrapper" style="justify-content: center; margin-bottom: 1rem;">
    <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
    <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
  </div>
  <a href="/ja/support" class="btn btn-ghost">開発者を支援する (Ko-fi / Crypto) ☕</a>
</div>

<script setup>
import { ref } from 'vue'
const btnText = ref('メールアドレスをコピー')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'コピー完了!'
  setTimeout(function() { btnText.value = 'メールアドレスをコピー' }, 2000)
}
</script>
