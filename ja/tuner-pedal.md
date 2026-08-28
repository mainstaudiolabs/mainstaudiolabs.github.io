<script setup>
import { ref } from 'vue'
const btnText = ref('メールアドレスをコピー')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'コピーしました！'
  setTimeout(function() { btnText.value = 'メールアドレスをコピー' }, 2000)
}
</script>

# Vintage Tuner Stompbox: ユーザーマニュアル

**バージョン 1.0.1 · Stompbox シリーズ #02 · ギター＆ベース用アナログ・クロマチックチューナー**  
*開発：Main St Audio Labs · オープンソースDSPエンジン（MITライセンス）*

<img :src="'/TunerPedal.png'" alt="Vintage Tuner Stompbox GUI" style="max-height: 380px; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 8px;" />

<div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin: 1.25rem 0 1.75rem 0;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/vintage-tuner-v1.0.1" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 240px; padding: 0.6rem 1.4rem; text-decoration: none;">プラグインをダウンロード (無料 v1.0.1) ⬇️</a>
  <a href="https://github.com/mainstaudiolabs/pitch-detector-tuner" target="_blank" class="rock-btn rock-btn-secondary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 200px; padding: 0.6rem 1.2rem; text-decoration: none;">GitHubでDSPエンジンを見る (MIT) 🐙</a>
</div>

---

## 1. 🌟 ステージとスタジオのために設計

**Vintage Tuner Stompbox** は、往年のアナログ針式チューナーが持つ視覚的な温かみと滑らかな弾道追従性を、DAWのミックス環境やライブステージへと直接もたらします。

フォトリアリスティックなレトロ筐体と **Main St Audio Labs** が独自に最適化したDSPにより、画面のチラつきや不自然なオクターブ飛び、微細なジッターを徹底的に抑制。ペグを回す手に吸い付くような自然な針の動きを実現し、アコースティックギター、エレキギター、ドロップチューニング、5弦ベースに至るまで確実に対応します。

---

## 2. ⚡ 全トラックに挿せる：真の 0.0% CPU 負荷設計

Vintage Tuner Stompbox の最大の特長は、**True Zero-CPU パススルー構造**です：

* **エディタを閉じると CPU 0.0%:** DAW上でプラグイン画面を閉じるか、`POWER` スイッチをオフにすると、数学的ピッチ解析スレッドが即座に完全休止。オーディオ信号を一切の遅延・劣化なくクリーンにパススルーし、CPUリソースを1サイクルも消費しません。
* **セッションの全トラックに常駐可能:** プロジェクト内の**すべてのギターやベースのトラックに挿しっぱなし**にしておいても、CPUパフォーマンスを圧迫しません。
* **安心のオートアンミュート機能:** `MUTE` 状態でチューニングした後に画面を閉じて演奏やミックスに戻っても、自動的にミュートが解除されるため、うっかり音が出ないトラブルを防ぎます。

---

## 3. 🎯 ギター＆ベース用デュアルピッチDSPエンジン（オープンソース）

ピッチ検出のコアエンジンは、GitHub上に **MITライセンス** で一般公開されている当ラボの数学的ライブラリ（[pitch-detector-tuner](https://github.com/mainstaudiolabs/pitch-detector-tuner)）によって駆動されています：

### 🔀 リアルタイムで切り替え可能な2つのモード：
* **MPM モード (McLeod Pitch Method):** エレキギターおよびアコースティックギターに最適化。ピッキング直後のアタック音を瞬時に捉え、素早い単音弾きやコードストローク後の判定も高速です。
* **YIN モード (De Cheveigné & Kawahara):** エレキベース（4弦・5弦）、7/8弦ギター、およびドロップチューニング（*Drop D, Drop C 等*）に特化。**$B_0$ (ローB / 30.87 Hz・25 Hz)** の超低域まで揺るぎない安定感でトラッキングします。

### 🛡️ 滑らかで音楽的な弾道制御：
* **アンチジッター指数平滑化:** 独自調整されたセンター不感帯（$\pm 0.6\text{ セント}$）と指数平滑化フィルターにより、目障りな微細な針の震えを排除。
* **ディケイ・ホールド機能 (~0.6秒):** 弦の振動が減衰しても、直前の測定値を一時保持してからゆっくりと中央へ戻るため、視認性が抜群です。
* **ダイナミックAGC (+41 dB ブースト):** 出力の弱いヴィンテージのシングルコイルや減衰しかけたロングトーンも最大 $+41\text{ dB}$（約120倍）まで自動増幅して確実に捉えます。
* **インテリジェント Mono-to-Stereo ルーティング:** オーディオインターフェースの Input 1（モノラル）からの入力を、ヘッドフォンやモニターの左右両チャンネルへ自動分配します。

---

## 4. 🎛️ コントロール・ガイド

```
+-------------------------------------------------------------+
|                      [ ANALOG VU METER ]                    |
|                 b FLAT     [-50 .. 0 .. +50]     SHARP #    |
|                                                             |
|   [ MODE ]               [ NOTE DISPLAY ]         [ A4 REF ]|
|   MPM / YIN                E2 · 82.4 Hz           440 Hz    |
|                            -0.5 cents                       |
|                                                             |
|   [ MUTE ]                                        [ POWER ] |
|   ON / OFF                                        ON / OFF  |
+-------------------------------------------------------------+
```

* **NEEDLE VU METER:** `-50` から `+50 セント` の偏差を高精度に表示。合致ゾーン（$\pm 3\text{ セント}$）に収まると中央が鮮やかなライムグリーンに点灯します。
* **MODE (MPM / YIN):** ギター向け（MPM）とベース／ドロップ向け（YIN）をワンクリックで切り替えます。
* **A4 REFERENCE (432 Hz 〜 448 Hz):** 基準ピッチを設定。**ダブルクリック**で標準の **440.0 Hz** にリセットされます。
* **MUTE (サイレントチューニング):** 出力を完全ミュートし、ステージやレコーディング中に無音でチューニングできます。
* **POWER:** マスター電源スイッチ。OFF時は針が休止し、ピュアなバイパス状態になります（CPU 0%）。
* **カスタムスキンドラッグ＆ドロップ:** 任意の `.png` または `.jpg` 画像をプラグイン上にドラッグ＆ドロップして外観をカスタマイズできます。

---

## 5. 💡 おすすめの配置とプロのスタジオTips

### 🥇 プラグインチェーンの必ず「スロット #01（最前段）」に配置
* **原音そのままのピュア信号を入力:** ピッチ検出には、エフェクトを通る前のインターフェース直結のクリーンなDI信号が必要です。
* **避けるべき前段エフェクト:**
  * **歪み・ファズ:** 倍音が増えすぎて基音がマスキングされます。
  * **コーラス・フェイザー・ビブラート:** ピッチが揺れるため、針がLFOに合わせて振れてしまいます。
  * **ディレイ・リバーブ:** 前の音の残響と現在の音が混ざってしまいます。
* **クリーンなステージミュート:** 最前段で `MUTE` することで、後段のハイゲインアンプにノイズが送られず、曲間を完全な静寂に保てます。

### 🎸 高速で正確に合わせるための演奏テクニック：
* **フロント（ネック）ピックアップを使用:** リアに比べて基音エネルギーが強く、倍音のギラつきが少ないため、アルゴリズムが瞬時にロックします。トーンノブを少し絞るのも効果的です。
* **一定の力で優しくピッキング:** 弦を強く叩きつけると、弦の瞬間的な張力増加によりピッチが一時的にシャープ（高め）に振れてしまいます。12フレット付近を親指またはピックで優しく弾くのがベストです。
* **5弦ベース（Low-B）の場合:** **YIN** モードを選択してください。12フレットのナチュラルハーモニクスを弾くことで、さらに一瞬で針を安定させることができます。

---

## 6. 🔬 技術仕様＆DSP設計

C++ / JUCE を用いて、妥協のないリアルタイム性能基準で開発されています：

* **非同期オーディオ構造:** リアルタイムオーディオ処理は `<0.5 マイクロ秒` で完了し、ロックフリーのリングバッファ（16,384サンプル）へ転送。重い自己相関演算は10msごと（約100 FPS）に別スレッドで非同期実行されるため、**音切れやクリックノイズが絶対に発生しません**。
* **動的メモリ確保（Heap Allocation）ゼロ:** すべてのバッファメモリは `prepareToPlay()` で事前確保されます。
* **デノーマル数対策 (`ScopedNoDenormals`):** 無音時のCPUスパイクを防止。
* **オープンソースリポジトリ:**  
  👉 [https://github.com/mainstaudiolabs/pitch-detector-tuner](https://github.com/mainstaudiolabs/pitch-detector-tuner)

---

## 7. 💻 対応環境＆ダウンロード

| OS | フォーマット | 要件 |
| :--- | :--- | :--- |
| **Windows** | VST3 (64-bit), Standalone (`.exe`) | Windows 10 / 11 (64-bit) |
| **macOS** | VST3, AU (`.component`), Standalone (`.app`) | macOS 10.13+ (Universal: M1/M2/M3/M4 & Intel) |
| **Linux** | VST3 (64-bit), Standalone binary | Ubuntu 22.04+ または互換 64-bit ディストリビューション |

<div style="margin: 1.5rem 0; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/vintage-tuner-v1.0.1" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Vintage Tuner Stompbox をダウンロード (無料) ⬇️</a>
</div>

---

## 8. 📄 ライセンス

* **Vintage Tuner Stompbox** はフリーウェアとして配布されており、商用・非商用問わず自由にご利用いただけます。
* DSPコアは **MITライセンス** のオープンソースです。
