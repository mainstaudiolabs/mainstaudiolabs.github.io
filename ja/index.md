---
layout: doc
sidebar: false
aside: false
title: Main St Audio Labs - ストンプボックス＆バーチャルアンプ
---

<div class="rock-container">
<div class="rock-header">
<div class="rock-title">Main St Audio Labs</div>
<div class="rock-subtitle">名盤のサウンドにインスパイアされたオーディオツール＆シグナルプロセッサー</div>
</div>

<div class="rock-grid">
<!-- Card 1: Midnight Rambler -->
<div class="rock-card">
<div class="rock-card-image-wrapper">
<img src="/midnightramblerinterface.png" alt="Midnight Rambler Plugin GUI" class="rock-card-image" />
</div>
<div class="rock-card-content">
<h3 class="rock-card-title">Midnight Rambler</h3>
<div class="rock-card-subtitle">5E3 Tweed チューブアンプ・シミュレーター</div>
<div class="rock-card-badges">
<span class="rock-card-badge">🪟 Win</span>
<span class="rock-card-badge">🍎 Mac</span>
<span class="rock-card-badge">🐧 Linux</span>
<span class="rock-card-badge">VST3 · AU · App</span>
</div>
<p class="rock-card-desc">名盤の数々を支えた伝説の5E3 Tweedアンプが持つ生々しくダイナミックなドライブ感を再現。ピッキングのニュアンスに追従するオーガニックなレスポンス、3種類のスタジオマイクポジション、高精度クロマチックチューナーを内蔵。</p>
<div class="rock-card-footer">
<span class="rock-card-price">FREE</span>
<a href="/ja/midnight-rambler" class="rock-btn rock-btn-primary" style="padding: 0.45rem 1rem; font-size: 0.86rem;">マニュアル＆ダウンロード ➔</a>
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
<div class="rock-card-subtitle">アナログ・クロマチックチューナー</div>
<div class="rock-card-badges">
<span class="rock-card-badge">🪟 Win</span>
<span class="rock-card-badge">🍎 Mac</span>
<span class="rock-card-badge">🐧 Linux</span>
<span class="rock-card-badge">VST3 · AU · App</span>
</div>
<p class="rock-card-desc">アナログメーターの滑らかな針の動きを再現したクロマチックチューナー。オープンソースのデュアルDSPエンジン（MPM＆YIN）を搭載。画面を閉じるとCPU消費ゼロ（0.0%）になるため、プロジェクトの全トラックにインサート可能です。</p>
<div class="rock-card-footer">
<span class="rock-card-price">FREE</span>
<a href="/ja/tuner-pedal" class="rock-btn rock-btn-primary" style="padding: 0.45rem 1rem; font-size: 0.86rem;">マニュアル＆ダウンロード ➔</a>
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
<div class="rock-card-subtitle">Head &amp; Combo + デュアルFX '78–'81</div>
<div class="rock-card-badges">
<span class="rock-card-badge">🪟 Win</span>
<span class="rock-card-badge">🍎 Mac</span>
<span class="rock-card-badge">🐧 Linux</span>
<span class="rock-card-badge">VST3 · AU · App</span>
</div>
<p class="rock-card-desc">1978–1981年のストーンズ黄金期トーンを完全再現：100W Head＆60W Comboの6L6パワーアンプ切替、3チャンネル構成、5バンド・アクティブEQ、Phase '78＆テープ・スラップバック、7種類のマイクを備えた「MICK」EVM-12Lキャビネット、フローティング・クロマチックチューナーを搭載。</p>
<div class="rock-card-footer">
<span class="rock-card-price" style="color: var(--vp-c-text-3);">SOON</span>
<a href="/ja/tattoo-you" class="rock-btn rock-btn-secondary" style="padding: 0.45rem 1rem; font-size: 0.86rem;">詳細を見る ➔</a>
</div>
</div>
</div>
</div>

<NewsletterSubscribe />

<!-- Global Community & Support Section -->
<div class="rock-home-banner">
<div style="font-family: 'Special Elite', monospace; font-size: 1.4rem; color: var(--vp-c-brand-1); text-transform: uppercase; margin-bottom: 0.5rem;">
あなたのミックスをぜひお聴かせください！
</div>
<p style="font-family: 'Courier Prime', monospace; font-size: 1rem; color: var(--vp-c-text-2); max-width: 700px; margin: 0 auto 1.25rem auto;">
当ラボのプラグインは、数々の名盤のミックスを徹底的に分析・キャリブレーションして開発されています。ご感想、トラックの共有、ご質問などはお気軽に下記までお送りください：
</p>
<div class="rock-copy-email-wrapper" style="justify-content: center; margin-bottom: 1.5rem;">
<span class="rock-email-text">mainstaudiolabs@gmail.com</span>
<button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>
<div style="border-top: 1px dashed var(--vp-c-border); padding-top: 1.25rem; margin-top: 1.25rem;">
<a href="/ja/support" class="rock-btn rock-btn-secondary" style="display: inline-block; padding: 0.6rem 1.4rem;">
ラボの開発を支援する（Ko-fi / 仮想通貨） ☕
</a>
</div>
</div>
</div>

<script setup>
import { ref } from 'vue'
const btnText = ref('メールアドレスをコピー')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'コピーしました！'
  setTimeout(function() { btnText.value = 'メールアドレスをコピー' }, 2000)
}
</script>
