---
layout: doc
sidebar: false
aside: false
title: 概要 - Main St Audio Labs
---

<script setup>
import { ref } from 'vue'
const btnText = ref('メールアドレスをコピー')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'コピーしました！'
  setTimeout(function() { btnText.value = 'メールアドレスをコピー' }, 2000)
}
</script>

# Main St Audio Labs について

Main St Audio Labs は、ヴィンテージ・ロックンロールへの情熱、アナログモデリング技術、そしてソフトウェアエンジニアリングが交差する場所から生まれた個人開発プロジェクトです。

---

## 開発の背景とストーリー

Main St Audio Labs は、1960年代後半から1970年代初頭の生々しくダイナミックでタッチセンシティブなギタートーンに魅了されたギタリスト兼ソフトウェア開発者、**Emiliano Tegli** によって設立されました。

ラボの名前は、ローリング・ストーンズの名盤『*Exile on Main St.*（メイン・ストリートのならず者）』の伝説的な地下スタジオ・セッションに由来しています。真空管が限界までドライブされ、ロックの歴史を決定づけた立体的で温かみのあるトーンへのオマージュです。

---

## なぜ Main St Audio Labs なのか？

現代のオーディオプラグインは非常に高機能になりましたが、時に「音楽を作ること」そのものの妨げになってしまうことがあります。無限のパラメーター、複雑なルーティング、膨大なプリセットの海、そしてCPUを過剰に消費する重厚なUIに悩まされることも少なくありません。

私たちは異なるアプローチを信じています：**「シンプルであることのマニフェスト」**。

### 📻 1. 名盤のサウンドを忠実に再現（Mix-Ready）
未処理の生々しいエミュレーションをそのまま提供し、ユーザーに過度なポストEQの負担を強いることはありません。各プラグインは、数々のクラシックアルバムや伝説的なライブ音源で聴かれるギター、シンセ、ダイナミクスレスポンスを綿密に分析・キャリブレーションして設計されており、DAWのミックスへ即座に馴染みます。

### ⚡ 2. 徹底的な軽量設計＆超低CPU負荷
PCの計算リソースは、重いグラフィック処理や非効率なDSPループではなく、あなたの音楽制作そのものに注がれるべきです。当ラボのすべてのツールは高度に最適化されたオーディオエンジンと無駄のないC++ DSPコードで構築されており、多数のトラックにインサートしてもストレスなく動作します。

---

## 私たちのミッション

生々しく響き、オーガニックな弾き心地を持ち、プレイヤーのインスピレーションを決して妨げないバーチャル・ブティックオーディオツールを作ること。

ユーザー登録の壁や不要な常駐ソフトはありません。プラグインを立ち上げ、ノブを回せば、すぐに演奏を始められます。

---

## 🤝 友人・コラボレーターへの感謝

Main St Audio Labs の研究開発は、情熱的なミュージシャンやトーンチェイサーの仲間たちのサポートによって支えられています：

* **Claudio Crespino** &mdash; 数々のオーディオプロジェクトにおける貴重なテスト、フィードバック、継続的なサポートに心から感謝します。

<NewsletterSubscribe />

---

## お問い合わせ＆フィードバック

皆さまからのご意見・ご感想をいつでもお待ちしております。改善の提案、プラグインを使用して作成した音源、またはカスタムキャビネットのリクエストなどがございましたら、お気軽に下記までご連絡ください：

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<p style="margin-top: 2rem; margin-bottom: 1rem;">当ラボの独立した研究開発を支援し、プラグインの無料提供をサポートしていただける場合は、クレジットカード、PayPal、または仮想通貨でのご支援を受け付けております：</p>

<div>
  <a href="/ja/support" class="rock-btn rock-btn-primary" style="display: inline-block; text-align: center;">ラボの開発を支援する（Ko-fi / 仮想通貨） ☕</a>
</div>
