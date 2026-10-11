---
title: "Main St '63 Spring – 1963年 Fender スプリング・リバーブ・ユニット（6G15）無料プラグイン"
description: "1963年のFender外付けスプリング・リバーブ・ユニット（6G15）を実回路としてモデリングした無料のVST3／AUプラグイン。12AT7入力段、6V6ドライバー、2本スプリングのタンク、12AX7リカバリー段。Windows・macOS・Linux対応。"
---

<script setup>
import { ref } from 'vue'
const btnText = ref('メールをコピー')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'コピーしました！'
  setTimeout(function() { btnText.value = 'メールをコピー' }, 2000)
}
</script>

<ProductHero id="main-st-63-spring" />

<div id="manual"></div>

本マニュアルでは、リバーブ **Main St '63 Spring** の使い方、設計、および技術仕様について説明します。

<div style="margin: 1.25rem 0 1.75rem; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Main St '63 Spring v1.0.0 をダウンロード（無料）⬇️</a>
</div>

---

## はじめに

**Main St '63 Spring** は、1963年のFender外付けスプリング・リバーブ・ユニット（6G15）全体をシミュレートします。独自の真空管とタンクを備え、ギターとアンプの間に置いて使われたあの箱です。インパルス・レスポンスや汎用のスプリング・アルゴリズムではなく、回路を1サンプルずつ解いています。

- **入力段：** **12AT7**（V1A・V1B）と、タンクをどれだけ強くドライブするかを決める **Dwell** コントロール。
- **ドライバー：** **6V6** がトランスを介してタンクの入力コイルを駆動し、そのコイル自体が負荷になります。Dwellを上げるとドライバーとトランスデューサーが実機と同じようにコンプレッションを始めます。
- **タンク：** 長さの異なる2本の分散性スプリング。本物のタンクらしいチャープ、「ドリップ」、減衰を再現します。
- **リカバリーとミックス：** **12AX7** のリカバリー段、**Tone** コントロール、そしてオリジナル同様カソード・フォロワー（V3B）を通るドライ信号とリバーブを混ぜる **Mixer**。

**全機能を完全無料で利用できます。** 期間や機能の制限はありません。開発を支援し、起動時の短いウェルカム画面を消すためのライセンスキーを任意でご用意しています。

---

## 動作環境

| | |
|---|---|
| **Windows** | 10以降、64ビット。追加のインストールは不要です。 |
| **macOS** | 10.13 High Sierra以降。ユニバーサル・バイナリ：IntelとApple SiliconのどちらのMacでもネイティブ動作します。 |
| **Linux** | x86_64、glibc 2.35以降（Ubuntu 22.04相当以降）。 |
| **フォーマット** | 3つのOSすべてでVST3、macOSではLogic ProとGarageBand用のAudio Unit（AU）。DAW用のエフェクトのため、スタンドアロン版はありません。 |
| **CPU** | 軽量：48 kHz、オーバーサンプリング1×で1コアの約4〜5%（STEREOで約7%増）。 |

---

## インストール

お使いのOSに対応するフォルダへファイルをコピーしてください：

| OS | VST3 | AU（Audio Unit） |
|---|---|---|
| **Windows** | `C:\Program Files\Common Files\VST3\` | — |
| **macOS** | `~/Library/Audio/Plug-Ins/VST3/` | `~/Library/Audio/Plug-Ins/Components/` |
| **Linux** | `~/.vst3/` | — |

> **macOSをお使いの方へ：**  
> 本プラグインはAppleの商用開発者証明書なしで配布されている独立プロジェクトのため、Gatekeeperが「壊れている」または「開発元が未確認」と表示することがあります。どちらでもありません。同梱の `INSTALL.txt` に記載された2つのターミナル・コマンドで、数秒で許可できます。

コピー後、DAWでプラグインを再スキャンしてください。Main St Audio Labs の **Main St '63 Spring** として表示されます。

---

![メイン画面](/MainSt63Spring.png)

## 2つの使い方

### 1. 実機と同じように：ギタートラックでアンプの前に

'63はこう使われていました：ギター → リバーブ・ユニット → アンプ。ギタートラックでアンプ・シミュレーターの**前**に **Main St '63 Spring** を挿してください（または出力を実機のアンプへ）。**DRYはon**、**STEREOはoff**のままにします。ユニットはドライ信号を自身の真空管に通し、オリジナルと同じように **Mixer** でリバーブと混ぜます。そのあとアンプが両方をまとめて色付けする――それがサーフやクラシック・ロックのサウンドです。

出力は入力と同じ電圧スケールなので、レベルを変えずにそのまま Main St 5F1 につなげられます。

### 2. スタジオ・リバーブとして：センド／バスで

AUX／バス・トラックに挿し、ギター、ドラムなど何でも送ってください：

1. **DRY** を **off** にします。リバーブだけが返り、**Mixer** はリバーブのレベルになります。実機ではタンクからのリターンが小さいため、DRYがoffのときプラグインは **+12 dB** を補正します。Outputが0、Mixerが10のとき、リバーブは送った信号に近いレベルで返ってきます。微調整は **Output** で。
2. 広がりが欲しければ **STEREO** をonに。タンクの短いスプリングが左、長いスプリングが右に出ます。
3. **Input** はお好みで。ラインレベルのミックスはギターよりはるかに大きいため、上げるほど12AT7と6V6のコンプレッションが強まります――それが真空管らしいざらつきです。よりクリーンで開放的なリバーブにしたいときは下げてください。

> **なぜMixerを10にしてもドライ音が消えないのですか？**  
> 実機でも消えないからです。Mixerはリバーブとドライ信号の間にある250 kのポットで、10でもドライ音が漏れます（最大値より約5 dB低いだけと測定しました）。アンプの前に置く使い方ではそれもサウンドの一部であり、だからこそバス用に **DRY** スイッチを追加しています。

---

## コントロール

- **Dwell（1〜10）：** 入力段と6V6がタンクをどれだけ強くドライブするか。低い設定では軽くクリーンな響き、8前後からはドライバーとトランスデューサーがコンプレッションし、リバーブが太く攻撃的になります。
- **Mixer（1〜10）：** ドライとリバーブのバランス（DRYがoffのときはリバーブのレベル）。
- **Tone（1〜10）：** リバーブ・リターンの高域。暗い音から、明るくはじけるサーフ・トーンまで。
- **REVERBスイッチ：** ユニットのフットスイッチのようにリバーブをオン／オフします。DRYがonのとき、ドライ信号はユニットを通り続けます。クリックを防ぐため、リバーブは数ミリ秒でフェードします。アンバーのパイロットランプが状態を示します（オリジナルにはありません）。
- **CABLE（off、330 pF、680 pF、2.2 nF）：** ユニットからアンプまでのケーブルの容量とアンプ入力。長いケーブルほど出力の高域が落ちます。初期値は330 pF（約3 m）、2.2 nFは非常に長い、または重いケーブルです。
- **DRY（on／off）：** onは実機どおり。offはリバーブのみ（センドやバス用）で、リターンに+12 dBの補正が加わります。
- **STEREO（off／on）：** offは実機どおりのモノラル（左右同じ信号）。onでは2本のスプリングを分け、短いほうを左、長いほうを右に出します。入力は実機と同様に常にモノラルにまとめられるため、リバーブはパンニングに追従しません。左右それぞれがモノラル時と同じレベルになるよう調整されています。

ノブをダブルクリックすると5に戻ります。**Shift**を押しながらドラッグすると微調整できます。CABLEやSTEREOを変更すると回路が組み直されるため、鳴っていたテールは途切れます。

---

## 下部バー

- **Input / Output：** dB単位のデジタル調整。Inputはユニットに入る信号の大きさ（下記のキャリブレーション参照）、Outputは最終レベルです。
- **メーターと表示：** `in` はユニットに入るピーク電圧（V pk）、`out` は出力レベル（dBFS）を表示します。
- **Oversampling（1×、2×、4×）：** 入力段とドライバーを強くドライブしたときのエイリアシングを抑えます。タンクは常に独自の内部レートで動作します。1×が初期値で、モデルの検証もこの設定で行いました。2×と4×ではそれぞれ3サンプルと4サンプルのレイテンシーが加わり、DAWに通知されます。
- **INFO：** バージョン、仕組み、Webサイト、ライセンスキー。

### 入力キャリブレーション

アンプと同様に、このリバーブは入力ジャックの**実際の電圧**に反応します。ハイ出力のハムバッカーは、ヴィンテージのシングルコイルより6V6を強くドライブします。`0 dBFS` はジャックでの **4.62 Vピーク** に相当します（Focusrite Scarlett 第3世代、ゲイン最小、INST入力）。強くストロークし、`in` の表示がお使いのピックアップの範囲に入るよう **Input** を調整してください：

| ピックアップの種類 | 強いストロークでの推奨ピーク |
|---|---|
| **ヴィンテージ・シングルコイル** | **0.4 – 1.0 V** |
| **ハイ出力シングルコイル** | **0.8 – 1.8 V** |
| **ヴィンテージ・ハムバッカー** | **1.0 – 1.8 V** |
| **ハイ出力ハムバッカー** | **2.0 – 3.5 V** |
| **アクティブ・ピックアップ** | **1.5 – 2.5 V** |

---

## よくある質問

**なぜ入力はモノラルなのですか？**  
オリジナルのユニットはモノラルです：入力1系統、タンク1つ。ステレオ入力はモノラルにまとめられます。広がりが欲しいときは、タンクの2本のスプリングを分けるSTEREOを使ってください。

**なぜプリディレイがないのですか？**  
実機にもありません。最初の反射はスプリングが届けたときに届きます。バスでリバーブの前に間を空けたいときは、同じバスでリバーブの前にディレイを挿してください。

**CABLE、STEREO、OVERSAMPLINGを変えるとなぜテールが途切れるのですか？**  
これらの設定はシミュレートしている回路の構造を変えるため、プラグインが新しい回路を組み、それに切り替えるからです。

**ライセンスキーを入力したのに、ウェルカム画面がまだ表示されます。**  
表示されるのは1セッションにつき最大1回、キーがない場合だけです。キーを保存したあとも表示され続ける場合は、メールでご連絡ください。

---

## クレジットと商標

- スプリング・モデル：Välimäki, Parker & Abel（JAES 2010）、Parker（EURASIP 2011）、Gamper, Parker & Välimäki（DAFx 2011）に基づく。
- 真空管数学モデル：Norman Koren (1996)、グリッド電流解析式：Dempwolf & Zölzer (DAFx 2011)。
- ウェーブ・デジタル・フィルター（WDF）：Jatin Chowdhury氏による `chowdsp_wdf` ライブラリ（BSD-3ライセンス）。
- 本ソフトウェアはJUCEフレームワークを使用して開発されています。
- 使用フォント：Montserrat, IBM Plex Mono（SIL Open Font License 1.1）。

*本文中に記載されているすべての製品名、商標、モデル名（Fender、Focusriteなど）は各所有者の商標または登録商標であり、モデリング元のビンテージ機器を歴史的・技術的に説明する目的でのみ使用しています。Main St Audio Labsは独立した開発者であり、これらの企業との提携、承認、スポンサーシップ関係はありません。*

<div style="margin: 1.75rem 0; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Main St '63 Spring v1.0.0 をダウンロード（無料）⬇️</a>
</div>

このリバーブで録音した作品があれば、ぜひ聴かせてください。下のメールアドレスをコピーしてリンクをお送りください：

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<div class="print-footer">
  公式サイトとマニュアル: <a href="https://mainstaudiolabs.github.io/ja/main-st-63-spring.html" target="_blank">https://mainstaudiolabs.github.io/ja/main-st-63-spring.html</a>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>他のプラグイン</h2></div>

<PluginGrid exclude="main-st-63-spring" />
