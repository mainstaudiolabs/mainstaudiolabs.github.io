<script setup>
import { ref } from 'vue'
const btnText = ref('メールアドレスをコピー')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'コピーしました！'
  setTimeout(function() { btnText.value = 'メールアドレスをコピー' }, 2000)
}
</script>

<ProductHero id="midnight-rambler" />

<div id="manual"></div>

本マニュアルは、伝説のTweed 5E3アンプ・エミュレーション・ストンプボックスプラグイン **Midnight Rambler** の使用方法、設計思想、および技術仕様について詳しく解説します。

<div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin: 1.25rem 0 1.75rem 0;">
  <a href="/midnight-rambler-manual.pdf" download class="rock-btn rock-btn-secondary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 180px; padding: 0.6rem 1.2rem; text-decoration: none;">PDFマニュアルを入手 (v1.2.0) 📄</a>
</div>

---

## 1.2.0 の新機能

* **2チャンネルから3チャンネルへ。** CLEAN、EDGE、CRANKED は3台の別々のアンプではなく、同じアンプのインストゥルメント・ボリュームを段階的に上げたものです。3つとも実信号で測定してレベルを揃えてあるため、スイッチは音量ではなく音色を変えます。
* **新しいアンプ・キャプチャー。** 1957年 Tweed Deluxe ハンドワイヤード・リイシューを Daniel Nguyen がキャプチャーしました。
* **新しいキャビネット。** オリジナルの Oxford 12T6-10 を搭載した1971年 Fender Twin Reverb を、Nathaniel Dahman が自身のアンプからキャプチャー。Royer R-121 と Shure SM57 をキャップ中央に設置しています。BLEND は位相を揃えた 70/30 ミックスで、他の2つのちょうど中間に位置します。
* **セレクターの操作が簡単に。** 選びたいポジションの文字をクリックすると直接そこへ移動します。中間を経由する必要はありません。レバーのドラッグやマウスホイールにも対応しています。
* **INFO パネル** — バージョン、セッションのサンプルレートとバッファサイズ、コンテンツのクレジットを表示します。
* **1.1.0 より CPU 負荷が軽く** なりました。チャンネルが増えたにもかかわらず、インパルス・レスポンスを実際にエネルギーが終わる位置まで切り詰めたためです。
* 1.1.0 で保存したプロジェクトは自動的に移行されます。EDGE のままだったものは EDGE で開きます。
* **macOS では初回のみ**、プラグインを右クリックして *開く* を選択してください。Apple の署名はありません — これは無料のソフトウェアであり、署名には年間費用がかかるため、その負担を誰にも転嫁しないことにしました。
## 1. Tweed 5E3 の魂：スタジオレコーディングの生ける伝説

1950年代の **Fender Tweed Deluxe 5E3** は、ロック史において最も優れたスタジオ録音用アンプとして、多くのプロデューサーやギタリストから絶大な信頼を寄せられています。極めてシンプルな6V6真空管回路は、大型スタジアムアンプでは決して得られない独特のオーガニックなコンプレッション感、豊かな倍音、そして弾き手のタッチに追従するダイナミクスを生み出します。

ローリング・ストーンズのキース・リチャーズによる伝説的リズムギター（『*Sticky Fingers*』『*Exile on Main St.*』）やニール・ヤングの轟くクランチ、ビリー・ギボンズのテキサス・ブルース・バイト、イーグルス『*Hotel California*』の名演に至るまで、Tweed 5E3 は数え切れないほどの名盤を彩ってきました。

### Midnight Rambler が目指した新基準

平坦で無機質なデジタルモデリングや静的なIRローダーとは異なり、Midnight Rambler はブティック・キャリブレーションされた実機の息づかいとアコースティックな響きをそのまま捉えています：

* **リアル・ニューラル・ダイナミクス:** 最先端の Neural Amp Modeler (NAM) ディープニューラルネットワークを採用。ギター側のボリュームノブの絞りや、ピッキングの強弱に忠実に追従します。
* **入力保護＆インテリジェント・ノイズ抑制:** 入力段に適応型ノイズゲート（-58 dBFS）とアナログ・ソフトクリッパー（-0.1 dBFS）を内蔵。余計なヒスノイズを排除し、デジタルクリップを音楽的に防ぎます。
* **ミックスに即馴染むスタジオ仕様:** State-Variable TPTフィルター（Bass HP & Tone LP）と、1971年製 Oxford 12インチ・スタジオキャビネットのゼロレイテンシー畳み込み（Royer R121リボン＆Shure SM57）を搭載。
* **高精度クロマチックチューナー内蔵:** レトロな発光VUメーターとデュアル検出アルゴリズム（YIN / MPM）を備えた高精度チューナーを搭載。
* **ゼロレイテンシー＆完全フリー:** アカウント登録不要、ドングル不要、超低CPU負荷。立ち上げてノブを回すだけで、即座に名盤のトーンが得られます。

---

## 2. コントロール・ガイド

プラグインは4つのメインノブ、3つのロータリースイッチ、そして内蔵クロマチックチューナーで直感的に操作できます：

### 🎛️ メインノブ
* **VOLUME / GAIN (`1.0` 〜 `10.0`):** 真空管エンジンへの入力ゲインを調整します。低めの設定ではクリスタルなクリーン、高く設定するにつれて太いヴィンテージ・サチュレーションと歌うようなサステインが得られます。
* **BASS (HP Filter · `20 Hz` 〜 `300 Hz`):** 不要な超低域の濁り（ランブル）をカットし、タイトでパンチのある低域に引き締めます。
* **TONE (LP Filter · `1.0 kHz` 〜 `20.0 kHz`):** 高域の抜けと存在感を調整し、耳障りな成分を抑えてウッディで温かみのあるトーンに整えます。
* **MASTER (`1.0` 〜 `10.0`):** クリーンなリニア出力音量。最大 `+18 dB` のクリーンブーストが可能です。

### 🔀 セレクター＆スイッチ
* **CHANNEL (Edge / Cranked):**
  * **EDGE:** 繊細なピッキングニュアンスに反応する、歪み始め（Edge-of-breakup）のダイナミックなトーン。
  * **CRANKED:** パワー管が程よくサチュレートした、太くリッチなヴィンテージ・オーバードライブ。
* **MIC / CAB (3ポジション・ロータリースイッチ · 1971 Oxford 12" Studio Cabinet):**
  * **WARM (9時方向):** Royer R121 リボンマイク。中低域が太く滑らかで温かみのあるヴィンテージトーン。
  * **SHARP (6時方向):** Shure SM57 ダイナミックマイク。アタック感と中高域のバイト感が際立つ抜けの良いトーン。
  * **BLEND (3時方向):** SM57とR121を 60/40 でブレンドした、奥行きとリアリズムあふれるスタジオ定番セッティング。
* **STANDBY (Play / Mute):** 出力を瞬時にミュートし、CPU使用率を **0.0%** に下げます。
* **TUNER ボタン (右上):** 内蔵の高精度クロマチックチューナー画面を開きます。
* **ダイナミックスキン変更:** プラグインウィンドウ上に任意の画像ファイル（`.jpg` または `.png`）をドラッグ＆ドロップするだけで、外観をカスタマイズできます。

### 📟 高精度クロマチック・VUメーターチューナー

<img :src="'/midnightramblertuner.png'" alt="Midnight Rambler Chromatic Tuner" style="max-height: 250px; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 6px;" />

* **発光アナログVUメーター:** `-50` から `+50 セント` の偏差を滑らかな針の動きで表示。チューニングが合うと中央の `0` マークが鮮やかなグリーンに点灯します。
* **デュアルピッチ検出エンジン:**
  * **MPM (McLeod Pitch Method):** 倍音成分の多いギター信号に強く、素早い音程追従が可能です。
  * **YIN:** 業界標準の高精度自己相関アルゴリズムで、基音を正確にトラッキングします。
* **周波数＆ノート表示:** 検出されたノート名（例: `E2`, `A2`, `D3`, `G3`, `B3`, `E4`）と周波数（Hz、$A4 = 440\text{ Hz}$）を表示。
* **Zero-CPU スリープ構造:** チューナー画面を閉じると内部スレッドが完全に休止し、**CPU負荷 0%** を保証します。

---

## 3. オーディオ設定（スタンドアロン起動時）

スタンドアロン（単体アプリ）として起動する場合、最適なパフォーマンスを得るために以下の設定を推奨します：

1. **Audio Device Type:** Windowsではレイテンシーとノイズを防ぐため、必ず **ASIO** を選択してください。
2. **Device:** お使いのオーディオインターフェースの専用ASIOドライバー（例: *Focusrite USB ASIO* など）を選択します。
3. **Sample Rate:** **48000 Hz** (48 kHz) を推奨します。
4. **Buffer Size:** **128 samples** (約2.3 ms) または **256 samples** (約5.3 ms) に設定します。

#### 💡 バッファサイズの秘密：なぜ 256 samples (5.3 ms) の方が心地よく聴こえるのか？
多くのギタリストが、128 samplesよりも256 samplesの方が「音が太く、滑らかに聴こえる」と感じます。これには2つの理由があります：
* **プロセッサの安定性:** 256 samplesに設定するとCPU処理にゆとりが生まれ、ごく僅かなマイクロジッターによる高域のチリつきが抑えられます。
* **アコースティック・ダブリング効果:** わずか 5.3 ms の遅延は、部屋で生鳴りしているギターの生弦の音とスピーカーからの出音との間で自然な「ダブリング効果」を生み出し、適度な奥行きと立体感をもたらします。

---

## 4. システム要件＆インストール

### 🖥️ システム要件
* **対応OS**:
  * **Windows**: Windows 10 / Windows 11 (64-bit)。
  * **macOS**: macOS 10.13 以降（Intel および Apple Silicon M1/M2/M3/M4 ネイティブ対応）。
  * **Linux**: Ubuntu 22.04 以降または互換性のある 64-bit ディストリビューション。
* **CPU**: WindowsおよびLinuxでは、ニューラルネットワーク演算をリアルタイム処理するために **AVX2** 命令セットをサポートするプロセッサ（Intel 第4世代Core / AMD Ryzen以降）が必要です。Apple Silicon Macはネイティブで完全対応しています。
* **メモリ (RAM)**: 最低 4 GB。
* **オーディオインターフェース**: 低レイテンシードライバー（Windows: **ASIO**、macOS: **CoreAudio**、Linux: **JACK** / **ALSA**）。

### 📦 オールインワン設計
**Midnight Rambler は完全自己完結型です。** 外部のモデルファイルやIR wavファイルを個別に読み込む必要はありません：
* すべてのニューラルアンプモデルとキャビネットIRは、プラグインバイナリ内部に**バイナリリソースとして内蔵**されています。
* **Windows**: `.vst3` ファイルをご使用のVST3フォルダ（通常は `C:\Program Files\Common Files\VST3\`）にコピーするか、スタンドアロンの `.exe` を実行してください。
* **macOS**: `.vst3` または `.component` (AU) をプラグインフォルダ（`/Library/Audio/Plug-Ins/VST3/` または `/Library/Audio/Plug-Ins/Components/`）にコピーするか、スタンドアロンの `.app` を実行してください。
* **Linux**: `.vst3` をプラグインフォルダ（`~/.vst3/` または `/usr/lib/vst3/`）に配置してください。
* **直接ダウンロード**: [GitHub Releases](https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/midnight-rambler-v1.2.0) から最新のマルチプラットフォーム・バンドルを入手できます。

<div style="margin: 1.25rem 0; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/midnight-rambler-v1.2.0" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Midnight Rambler v1.2.0 をダウンロード (無料) ⬇️</a>
</div>

---

## 5. トラブルシューティング

### ❌ DAWでVST3が認識されない・スキャンに失敗する
* **Microsoft Visual C++ 再頒布可能パッケージ (Windows)**: プラグインはスタティックリンクされていますが、環境によっては基本的なランタイムが必要な場合があります。公式の [Visual C++ Redistributable 2015-2022 (x64)](https://aka.ms/vs/17/release/vc_redist.x64.exe) をインストールしてください。
* **CPUのAVX2対応**: お使いのCPUが **AVX2** に対応しているか確認してください。AVX2非対応の古いCPUではNAMニューラルエンジンが動作しません。
* **プラグイン配置パス**: DAWのプラグインスキャン対象フォルダに `.vst3` が正しく配置されているかご確認ください。

### ❌ macOSで「開発元を検証できないため開けません」と表示される
* **原因**: 自動ビルドCIで生成されたバイナリのため、Appleの有料公認証明書による公証（Notarization）が行われていない場合に表示されます。
* **解決策**: **システム設定 > プライバシーとセキュリティ** を開き、セキュリティ項目で Midnight Rambler の「**このまま開く**」をクリックしてください。またはターミナルで以下を実行します：
  `xattr -cr /path/to/MidnightRambler.app`

### ❌ プチプチとノイズが入る、またはレイテンシーが大きい
* **オーディオドライバー**: 必ずオーディオインターフェース専用の低レイテンシードライバー（Windows: ASIO）を使用してください。
* **バッファサイズ**: **128** または **256 samples** を推奨します。64 samples以下に設定すると、PCスペックによってCPUスパイクや音切れが発生する場合があります。

---

## 6. ライセンス＆利用規約

**Midnight Rambler** は [Main St Audio Labs End User License Agreement (EULA)](/LICENSE.txt) のもとで **フリーウェア（クローズドソース）** として配布されています：
* **自由な利用:** 個人利用、教育目的、商業音楽制作、レコーディング、ライブ演奏などにおいて、ロイヤリティや使用料なしで完全無料でご利用いただけます。
* **権利の保護:** リバースエンジニアリング、逆コンパイル、バイナリの再販や有料での再配布は固く禁じられています。
* **免責事項:** 本ソフトウェアは現状有姿（AS IS）で提供されます。記載されている第三者のブランド名（*Fender*, *Tweed Deluxe*, *5E3* 等）は、歴史的トーンの識別のためにのみ言及されています。

---

### あなたのミックスをお待ちしています！
Midnight Rambler で録音・ミックスした楽曲がございましたら、ぜひお気軽にお聴かせください：

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<p style="margin-top: 2rem; margin-bottom: 1rem;">当ラボの独立開発を応援していただける場合は、Ko-fiまたは仮想通貨でのサポートをお待ちしております：</p>

<div>
  <a href="/ja/support" class="rock-btn rock-btn-primary" style="display: inline-block; text-align: center;">ラボの開発を支援する（Ko-fi / 仮想通貨） ☕</a>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>他のプラグイン</h2></div>

<PluginGrid exclude="midnight-rambler" />
