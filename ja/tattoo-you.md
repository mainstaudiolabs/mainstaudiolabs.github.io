<script setup>
import { ref } from 'vue'
const btnText = ref('メールアドレスをコピー')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'コピーしました！'
  setTimeout(function() { btnText.value = 'メールアドレスをコピー' }, 2000)
}
</script>

# Tattoo You: ユーザーマニュアル

**バージョン 1.0.0 · バーチャルアンプ・シミュレーション＆ヴィンテージFXスイート**

<img :src="'/tattoo-you.png'" alt="Tattoo You Plugin GUI" style="width: 100%; max-width: 100%; height: auto; display: block; margin: 1.75rem auto; border: 2px solid var(--vp-c-border); border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);" />

> **ストーンズ・ファンがギタリストのために捧げるプラグイン：**  
> **Tattoo You** は、ローリング・ストーンズのギターサウンドを構成するセッションテープ、ライブ音源、そして機材の細部に至るまでを執念深く研究して開発されました。熱狂的なストーンズファンであり熟練のギタリストでもある開発陣が、ギターを繋いでノブを回すだけで、1978–1981年の伝説的トーン――あの唯一無二のタッチレスポンス、パンチ、そしてグルーヴ――に即座に没入できるよう設計しました。

---

## 1. 設計思想：1978–1981 真空管＆FXの黄金期

**Tattoo You** は、キース・リチャーズとローリング・ストーンズが1970年代後半から1980年代初頭のスタジオおよびライブステージで確立した決定的なギタートーンを再現します。この時代は、初期の粗削りなAmpegやFenderのクランチから、**6L6真空管を搭載したMesa/Boogie回路**、高耐入力な**Electro-Voice EVM-12L 1x12スピーカー**、そして前段に配置されたアナログモジュレーションエフェクトという、高いヘッドルームと多段ゲイン構成への歴史的な転換期でした。

### 歴史的タイムライン：1978–1981

1. **パリ・セッション（1978年 · 『*Some Girls（女たち）*』/『*Beast of Burden*』）：**  
   パリの *Pathé Marconi Studios* において、キースは自然な真空管クリーンに **Phase '78**（MXR Phase 100 スタイル）のリキッドなオプティカル・モジュレーションと、温かみのあるアナログ・テープエコー（スラップバック）を組み合わせた象徴的なサウンドを確立しました。これは *"Beast of Burden"*、*"Miss You"*、*"Shattered"* などのギターテクスチャーとして不朽の名作に刻まれています。

2. **トロピカル・オーバードライブ期（1979–1980年 · 『*Emotional Rescue*』）：**  
   パリとバハマの *Compass Point Studios* で行われたレコーディングでは、タイトなファンクロックのダイナミクス（*"Emotional Rescue"*、*"Dance Part 1"*）、切れ味鋭いレゲエ／スカのカッティング、そしてピッキングの強弱に追従する粘りのあるブルース・リードに対応するため、機材のヘッドルームとタッチレスポンスがさらに洗練されました。

3. **名盤のリフ・パワー（1981年 · 『*Tattoo You（刺青の男）*』）：**  
   パリとニューヨークの *Atlantic Studios* で完成された『*Tattoo You*』は、このギターリグの頂点を示しています。*"Start Me Up"* の忘れられないリズムクランチ、*"Little T&A"* のドライビングなパンチ、*"Slave"* の粘りあるグルーヴ、そして *"Hang Fire"* や *"Neighbours"* の獰猛なロックサウンドは、今なおロックギタートーンの最高峰のリファレンスです。

👉 [**「ストーンズはアンプに金を払わない」：ストーンズがMesa/Boogieを手に入れた歴史的ストーリー（1978–1981） →**](/ja/history-mesa-stones)

---

## 2. デュアル・パワーアンプ構造：HEAD vs COMBO

**Tattoo You** は、コントロールパネル下部にパワーアンプの回路トポロジー切り替えスイッチを搭載しています。ステージとスタジオで使い分けられていた2種類の実機構成を切り替え可能です：

| パワーアンプ・モード | 回路トポロジー | 音響特性＆ダイナミクス | 最適なサウンド |
| :--- | :--- | :--- | :--- |
| **`HEAD`** | **100W 6L6 パワーアンプ (Quad 6L6)** | 圧倒的なダイナミック・ヘッドルーム、タイトで打撃感のある低域、電光石火のトランジェント・レスポンス。パワー段の不要なタレ（サグ）のないアグレッシブなノートアタック。 | スタジアム級のロックリフ（*"Start Me Up"*, *"Little T&A"*, *"Hang Fire"*）、重厚なコードバッキング、高インパクトなリズムトラッキング。 |
| **`COMBO`** | **60W 6L6 パワーアンプ (Dual 6L6)** | 有機的な電源サグ、ナチュラルなパワー管コンプレッション、芳醇な中域倍音。ピッキングを強く押し込んだ際の吸い付くようなバイト感と粘り。 | ダイナミックなソウル・クリーン（*"Beast of Burden"*, *"Tops"*）、歌うようなブルース・リード、ファンク・カッティング（*"Dance Part 1"*）、親密なスタジオトラック（*"Waiting on a Friend"*）。 |

* **インタラクティブな切り替え:** トグルスイッチを操作するか、`HEAD` / `COMBO` のテキストラベルを直接クリックすることでも切り替えられます。

---

## 3. 3チャンネル・ニューラルアンプ構成

3ポジションのロータリーセレクターにより、ヴィンテージ6L6回路のゲインレンジを網羅します：

| チャンネル | トーンキャラクター | 最適な用途 |
| :--- | :--- | :--- |
| **`CLEAN`** | 自然な真空管コンプレッション、広いヘッドルーム、そして艶やかな高域を持つリッチなクリーントーン。 | リズムコードの分離感（*"Beast of Burden"*, *"Tops"*）、ファンク・カッティング、ソウル・バラード。 |
| **`CRUNCH`** | 太いボディ感、パンチのある中域、そしてピッキングのタッチに即座に反応する、歪み始め（Edge-of-breakup）のトーン。 | 伝説のクラシック・ロックリフ（*"Start Me Up"*, *"Little T&A"*, *"Hang Fire"*）、コードクランチ、ブルースリズム。 |
| **`LEAD`** | 芳醇な倍音サステイン、滑らかなソロの弾き心地、そして引き締まった低域を持つハイゲイン・サチュレーション。 | 伸びやかなリードギター、ヘヴィなリフ、スライドギター（*"Slave"*, *"Neighbours"*）。 |

---

## 4. シグナルフロー＆コントロール・ガイド

```text
[ ギター入力 ]
      │
      ▼
 [ 適応型ノイズゲート (-58 dB) ]
      │
      ▼
 [ PHASE '78 ]  ───►  [ SLAPBACK DELAY ]
      │
      ▼
 [ 入力ゲイン・ドライブ ]
      │
      ▼
 [ アナログ・ソフトクリッパー (-0.1 dBFS) ]
      │
      ▼
 [ 6L6 ニューラルプリアンプ (Clean / Crunch / Lead) ]
      │
      ▼
 [ パワーアンプ・トポロジー (Head 100W / Combo 60W) ]
      │
      ▼
 [ 5バンド・グラフィックEQ ]  ───►  [ 「MICK」EVM-12L キャビネット ]
      │
      ▼
 [ マスター出力 ]  ───►  [ ステレオ出力 ]
```

### 1. 入力段＆ダイナミック保護
* **`ADAPTIVE NOISE GATE`:** 入力直後に配置され、ギター演奏の長い自然なサステインを損なうことなく、50/60Hzの電磁ハムノイズやハイゲイン時のヒスノイズを自動除去します（アタック 1.5ms、ホールド 35ms、ナチュラルリリース 140ms）。
* **`ANALOG WAVESHAPER / SOFT CLIPPER (-0.1 dBFS)`:** NAMニューラルエンジンの直前に配置された双曲線正接（tanh）サチュレーション。通常の演奏では100%リニアな透明性を保ちつつ、突発的なピークによるデジタルクリップを音楽的に保護します。

### 2. メインアンプ・コントロール
* **`GAIN` (Volume / Drive):** アンプに入力されるシグナルドライブ量を設定します（`1.0` = -9 dB, `7.0` = 0 dB ユニティゲイン, `10.0` = +4.5 dB ブースト）。
* **`VOLUME` (Master):** 出力マスターボリューム（`1.0` = -36 dB の小音量, `7.0` = 0 dB ユニティゲイン, `10.0` = +18 dB ブースト）。
* **`HEAD / COMBO SWITCH`:** 100W Quad-6L6 Head と 60W Dual-6L6 Combo のパワー回路トポロジーを切り替えます。
* **`CHANNEL SELECTOR`:** `CLEAN`、`CRUNCH`、`LEAD` の3チャンネルを選択。
* **`STANDBY`:** ギターの持ち替えや曲間のための即時ミュートトグル。

### 3. 5バンド・グラフィック・イコライザー
独立した **`EQ IN`** トグルスイッチとステータスLEDを備えた、アクティブ・スライダーEQの精密な再現です：
* **`80 Hz` (±12 dB):** 重低音の打撃感とキャビネットの箱鳴り感を調整。
* **`240 Hz` (±12 dB):** ローミッドの濁り（ボックス感）をコントロール。カットすることでクリアさが増します。
* **`750 Hz` (±12 dB):** 中音域のパンチとバイト感を決定づける帯域。
* **`2200 Hz / 2.2 kHz` (±12 dB):** アタック周波数！ ピックのアタック音とコードのエッジを生み出します。
* **`6600 Hz / 6.6 kHz` (±12 dB):** EVM-12Lスピーカー特有の開放的なプレゼンスと空気感を付加。

### 4. Stones '78 ヴィンテージ・デュアルFXスイート
実機ペダルボードと同様に、プリアンプの直前段に直結されています：

#### **Phase '78 (MXR Phase 100 スタイル・オプティカル・フェイザー)**
*「Beast of Burden」「Shattered」「Slave」で聴かれる象徴的なモジュレーション。リチャーズとロニーのツインギターアンサンブルの中でも埋もれない、太く立体的なうねりを生み出します。*
* **`PHASE '78 スイッチ＆アンバーLED`:** フェイザーのON/OFFを切り替えます（バイパス時はCPU 0%）。
* **`SPEED` (`0.10 Hz` 〜 `8.00 Hz`):** モジュレーション周期を数値表示付きで精密調整。
* **`INTENS` (`0%` 〜 `100%`):** スイープの深さとレゾナンスの深さをコントロール。

#### **Slapback Delay (アナログ・テープエコー)**
*名盤で多用された110ms付近のスイートスポットを再現した温かみのあるアナログ・テープディレイ。*
* **`DELAY スイッチ＆レッドLED`:** テープエコーのON/OFFを切り替えます。
* **`TIME` (`20 ms` 〜 `300 ms`):** ディレイタイムを設定（デフォルトはキースの定番である `110 ms`）。
* **`REPEATS` (`0%` 〜 `65%`):** テープフィードバック量を調整。
* **`MIX` (`0%` 〜 `50%`):** エフェクト音の混ざり具合を調整。

### 5. 「MICK」キャビネット・モジュール (1x12 EVM-12L)
実機の Electro-Voice EVM-12L (200W) を搭載した 1x12 ポート付きキャビネットと、位相が完全に揃えられた7種類のスタジオマイク配置を、左右の矢印ボタン（`<` と `>`）またはテキストクリックでスムーズに切り替えられます：

1. **`SM57 SweetSpot`:** Shure SM57 をキャップエッジに配置。バランスの良いアタック、太い中域、ソリッドなパンチ。
2. **`SM57 Warm`:** Shure SM57 をアウターコーンに配置。豊かな低域と滑らかな高域を持つ温かみのあるトーン。
3. **`SM57 Direct`:** Shure SM57 をコーン中心に直射。切れ味鋭い輪郭とアタック感。
4. **`SM57 BassPort`:** Shure SM57 をフロントポートに配置。80–100 Hz の豊かな低域の鳴りを強調。
5. **`U87 Studio`:** Neumann U87Ai ラージダイアフラム・コンデンサーマイク。高い解像度、ワイドなレンジ、立体的な空気感。
6. **`U87 Warm`:** Neumann U87Ai をウォームゾーンに配置。耳に痛くない高域と濃密な中低域。
7. **`Bypass IR`:** 内部キャビネットシミュレーションを無効化し、お好みのサードパーティ製IRローダーと組み合わせ可能。

---

## 5. 内蔵スタジオ・ラックチューナー

<img :src="'/tattoo-you-tuner.png'" alt="Tattoo You Integrated Studio Tuner" style="max-width: 320px; width: 100%; height: auto; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 8px; box-shadow: 0 6px 18px rgba(0,0,0,0.30);" />

右下の **`TUNER`** ボタンをクリックすると、アンプ上にフローティング・スタジオチューナーが表示されます：

* **高精度アナログVUメーター:** ±50セントの振れ幅を持ち、チューニングが合うと中央が鮮やかなグリーン（±3セント）に点灯。
* **デジタルディスプレイ:** 音名、オクターブ、検出周波数（Hz）、セント偏差をクリアに表示。
* **デュアルアルゴリズム (`MPM` / `YIN`):** 高速なギタートラッキング（MPM）と低音域・ベースの精密測定（YIN）に対応。
* **MUTE機能:** ステージ上での無音チューニングが可能。
* **A4基準ピッチ調整:** 432 Hz 〜 448 Hz（ダブルクリックで 440 Hz に即座にリセット）。
* **完全CPU 0.0%休止:** `CLOSE TUNER` ボタンを押すか、背面の暗転したアンプ部分をクリックするだけで即座に閉じ、解析処理を完全停止します。

---

## 6. おすすめトラックプリセット＆セッティング例

### プリセット 1: "Start Me Up" / "Tattoo You Crunch" (王道リフ・パワー)
* **Power Amp:** `HEAD` (100W)
* **Channel:** `CRUNCH`
* **Gain:** `7.5` | **Volume:** `7.5`
* **5-Band Graphic EQ:** `80Hz: +1.5dB` | `240Hz: -3.0dB` | `750Hz: +2.5dB` | `2.2kHz: +4.0dB` | `6.6kHz: +2.0dB`
* **Phase '78:** `OFF`
* **Slapback Delay:** `OFF` (または Mix `12%` でわずかに部屋鳴り感を付加)
* **MICK:** `SM57 Warm` (または `SM57 SweetSpot`)

### プリセット 2: "Beast of Burden" / "Shattered" (オプティカル・フェイズ・クリーン)
* **Power Amp:** `COMBO` (60W)
* **Channel:** `CLEAN`
* **Gain:** `7.0` | **Volume:** `7.0`
* **5-Band Graphic EQ:** `80Hz: 0dB` | `240Hz: -2.0dB` | `750Hz: +2.0dB` | `2.2kHz: +3.0dB` | `6.6kHz: +1.5dB`
* **Phase '78:** `ON` | Speed: `0.80 Hz` | Intensity: `60%`
* **Slapback Delay:** `ON` | Time: `110 ms` | Repeats: `20%` | Mix: `25%`
* **MICK:** `SM57 SweetSpot` (または `U87 Studio`)

### プリセット 3: "Emotional Rescue" / "Dance Part 1" (ファンクロック＆タイトグルーヴ)
* **Power Amp:** `COMBO` (60W)
* **Channel:** `CLEAN`
* **Gain:** `6.5` | **Volume:** `8.0`
* **5-Band Graphic EQ:** `80Hz: -1.0dB` | `240Hz: -4.0dB` | `750Hz: +1.0dB` | `2.2kHz: +3.5dB` | `6.6kHz: +3.0dB`
* **Phase '78:** `ON` | Speed: `1.20 Hz` | Intensity: `40%`
* **Slapback Delay:** `OFF`
* **MICK:** `SM57 Direct`

### プリセット 4: "Slave" / "Neighbours" (歌うようなチューブ・リード＆ソロ)
* **Power Amp:** `HEAD` (100W)
* **Channel:** `LEAD`
* **Gain:** `8.0` | **Volume:** `7.0`
* **5-Band Graphic EQ:** `80Hz: +2.0dB` | `240Hz: -1.5dB` | `750Hz: +3.5dB` | `2.2kHz: +3.0dB` | `6.6kHz: +2.0dB`
* **Slapback Delay:** `ON` | Time: `140 ms` | Repeats: `30%` | Mix: `25%`
* **MICK:** `SM57 Direct` (または `U87 Studio`)

---

## 7. 技術仕様＆対応環境

* **プラグインフォーマット:** VST3 (64-bit), Standalone アプリケーション (.exe)。
* **対応OS:**
  * **Windows:** Windows 10 / Windows 11 (x64) — *現在利用可能*。
  * **macOS:** Universal Binary (Apple Silicon M1/M2/M3/M4 & Intel x64) / AU, VST3, Standalone — *近日公開*。
  * **Linux:** Ubuntu / Debian / Arch (VST3, Standalone) — *近日公開*。
* **プロセッシングエンジン:** Neural Amp Modeler (NAM) WaveNet アーキテクチャ + 高速リアルタイム畳み込みDSP。
* **内部オーディオ解像度:** 64-bit 浮動小数点倍精度処理。
* **対応サンプルレート:** 44.1 kHz, 48 kHz, 88.2 kHz, 96 kHz, 176.4 kHz, 192 kHz。
* **レイテンシー:** ゼロレイテンシー（0 samples）によるリアルタイムトラッキング対応。

---

<div class="rock-card-contact" style="margin-top: 2.5rem;">
  <div class="rock-card-contact-title">ご質問・フィードバック・音源の共有</div>
  <p class="rock-card-contact-desc">Tattoo You はギタリストがギタリストのために開発したプラグインです。ご質問、ご感想、Tattoo You で作った音源の共有などはお気軽にお寄せください：</p>
  <div class="rock-copy-email-wrapper">
    <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
    <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
  </div>
</div>
