<script setup>
import { ref } from 'vue'
const btnText = ref('メールアドレスをコピー')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'コピーしました！'
  setTimeout(function() { btnText.value = 'メールアドレスをコピー' }, 2000)
}
</script>

<ProductHero id="tattoo-you" />

<!-- ===========================================================================
     サウンドサンプル  --  4つのクリップを録音したらコメントを外してください。
     ファイルは public/ に、以下のファイル名で置いてください。
============================================================================
<div class="section-head"><h2>試聴</h2></div>

<p>プリセットごとに1テイク、計4テイク。ギターと Tattoo You とキャビネットだけです。</p>

<figure>
  <figcaption><strong>Riff Power</strong> — Crunch · 100W · SM57 Warm</figcaption>
  <audio controls preload="none" src="/tattoo-you-riff-power.mp3"></audio>
</figure>
<figure>
  <figcaption><strong>Liquid Clean</strong> — Clean · 60W · Phase '78 + Slapback</figcaption>
  <audio controls preload="none" src="/tattoo-you-liquid-clean.mp3"></audio>
</figure>
<figure>
  <figcaption><strong>Funk Groove</strong> — Clean · 60W</figcaption>
  <audio controls preload="none" src="/tattoo-you-funk-groove.mp3"></audio>
</figure>
<figure>
  <figcaption><strong>Singing Lead</strong> — Lead · 100W · Slapback</figcaption>
  <audio controls preload="none" src="/tattoo-you-singing-lead.mp3"></audio>
</figure>
=========================================================================== -->

<div id="manual"></div>

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

## 2. トポロジー＆ボイシング制御：WATTAGE (100W vs 60W) と BRIGHT

**Tattoo You** は、フロントパネル下部に2系統のヴィンテージ・トグルスイッチを搭載し、'78 Mark I 回路の物理的・倍音的挙動を忠実に再現します：

| コントロール | ポジション | 音響特性＆ダイナミクス | 最適な用途 |
| :--- | :--- | :--- | :--- |
| **`WATTAGE`** | **`100W`** (上) | 圧倒的なヘッドルーム、タイトで打撃感のある低域、電光石火のトランジェント・レスポンス。 | スタジアム級のロックリフ（*"Start Me Up"*, *"Little T&A"*, *"Hang Fire"*）、重厚なコードバッキング。 |
| | **`60W`** (下) | 有機的な電源サグ、ナチュラルなパワー管コンプレッション、芳醇な中域倍音と吸い付くようなバイト感。 | ダイナミックなソウル・クリーン（*"Beast of Burden"*, *"Tops"*）、ブルース・リード、ファンク。 |
| **`BRIGHT`** | **`NORMAL`** (上) | フラットでバランスの取れたレスポンス、温かみのある中域と滑らかな高域。 | ハムバッカー搭載ギターや王道のロックリズムに最適。 |
| | **`BRIGHT`** (下) | 鈴鳴り感のあるクリスタルな超高域ブーストと鋭いピッキングアタック。 | オープンGコードの抜け、レゲエ/ファンクのカッティング、ダークなピックアップに最適。 |

* **インタラクティブな切り替え:** トグルスイッチを操作するか、`100W`/`60W` または `NORMAL`/`BRIGHT` のテキストラベルを直接クリックして切り替え可能です。

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

### 5. 「1x12 Hardwood Cab Lab」コンソール (デュアル・コンボリューション＆ステレオ・スプレッド 3D)

<img :src="'/tattoo-you-cab-lab.png'" alt="Tattoo You 1x12 Hardwood Cab Lab Console" style="max-width: 620px; width: 100%; height: auto; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.40);" />

Tattoo You は、実機の **EVM-12L** ドライバーを搭載したポート付き無垢材キャビネットから収録された24種類のサンプル精度インパルス・レスポンス（IR）と、ゼロレイテンシー・デュアル・コンボリューションエンジンを搭載したスタジオ・オーバーレイを備えています：

* **`CAB LAB ボタン＆ディスプレイ`:** アンプ前面の `CAB LAB` ボタンまたはマイク表示部をクリックすると、全画面のスタジオミキシングコンソールが開きます。
* **`MIC 1 (ダイレクト)` ＆ `MIC 2 (ブレンド/ルーム)`:** 24種類の公式スタジオテイク（Shure 57、Neumann 87、BassPort、Room 3D）を独立選択可能。各チャンネルの音量フェーダー（-24 dB〜+6 dB）と極性反転スイッチ（$\varnothing$ 180°）を完備。
* **`CAB BLEND ノブ (% / 等電力)`:** 音量を一定に保ちながら2本のマイクのバランスを調整。アンプ前面右上のミニノブからも即座にアクセス可能。
* **`STEREO SPREAD 3D スイッチ (1トラック完結のステレオ録音)`:**
  * **Mono Sum (OFF):** 2本のマイクをセンターに加算（密集したロックミックスに最適）。
  * **Stereo Spread (ON):** Mic 1を左チャンネル、Mic 2を右チャンネルに自動音量補正（+3 dB）を伴って割り当て、**トラックを複製することなく、1本のDAWトラックだけで広大なアナログステレオ空間**を作り出します。
* **6種類のスタジオ・リファレンス・プリセット:** 代表的なマイキング（*Studio Standard*, *Heavy Punch*, *Live Room 3D*, *Wide Double Track* 等）を1クリックで呼び出し可能。

::: tip 🎙️ 音響物理・マイキング・ミックス完全ガイド
EVM-12Lのコーン音響物理、サンプル精度の位相科学、そして1本のDAWトラックで巨大なステレオサウンドを作るテクニックを詳しく知りたい方はこちら：
👉 [**1x12 Hardwood Cab Lab キャビネット＆マイキング完全ガイドを読む →**](/ja/audio-mics-guide)
:::

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

* **プラグインフォーマット:** VST3 (64-bit), Standalone アプリケーション。
* **対応OS:**
  * **Windows:** Windows 10 / Windows 11 (x64)。
  * **macOS:** Universal Binary (Apple Silicon & Intel) — AU, VST3, Standalone。
  * **Linux:** Ubuntu / Debian / Arch (VST3, Standalone)。
* **プロセッシングエンジン:** Neural Amp Modeler (NAM) WaveNet アーキテクチャ + リアルタイム畳み込みDSP。ニューラル段は64ビット倍精度で動作します。
* **セッションのサンプルレート:** アンプは **48 kHz** でキャプチャされており、48 kHz が推奨レートです。**44.1 kHz** でも同様に問題なく、実用上の差はごくわずかです。48 kHz を超えるとアンプのボイシングが上方向にずれ、キャプチャした Mark I の鳴りではなくなります（96 kHz では1オクターブ分ずれます）。48 kHz または 44.1 kHz でお使いください。
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

<div class="section-head" style="margin-top:3rem;"><h2>他のプラグイン</h2></div>

<PluginGrid exclude="tattoo-you" />
