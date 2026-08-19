<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>

# Beast of Burden: User Manual

**Version 1.0.0 · Virtual Stompbox & Amplifier Simulation**

This manual provides a detailed description of the design philosophy, signal chain architecture, control parameters, and recommended presets for the **Beast of Burden** amplifier emulation and vintage FX suite.

<img :src="'/bob.png'" alt="Beast of Burden Plugin GUI" style="max-height: 280px; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 4px;" />

---

## 1. Design Philosophy: The Holy Grail of Tube Crunch & Lead

**Beast of Burden** is a dual-engine audio processor pairing an authentic neural emulation of the legendary **Mesa/Boogie Mark IIC+ (100W 6L6)** with the signature **Stones '78 Vintage Dual FX Suite** (Phase '78 optical phaser and analog tape slapback delay) and a studio-captured **Pacific Woodworks 1x12 Thiele ported cabinet loaded with an Electro-Voice EVM-12L speaker**.

### The Sound of Studio & Arena Stones
In the late '70s and 80s (from the Paris *Some Girls* sessions to the explosive 1981 American Tour), Keith Richards and Ron Wood relied on custom Mesa/Boogie 100W cascaded-gain rigs. Beast of Burden captures the best of both worlds:
* **Hyper-Fast Attack & Articulated Punch:** Driven by massive transformers, four 6L6 power tubes, and the ultra-efficient 200W Electro-Voice EVM-12L speaker.
* **Liquid Modulation & Dimension:** Running guitars through vintage optical phasing and tape slapback echo before hitting the tube preamp.
* **The Iconic 5-Band Graphic EQ:** Sculpting mid attack (2.2 kHz) and vocal presence (750 Hz) while cleaning low-mid boxiness (240 Hz).

### Neural Amp Modeler (NAM) Engine
Powered by deep WaveNet neural networks compiled with full AVX/SIMD vectorization, Beast of Burden reproduces every non-linear nuance of tube sag, harmonic saturation, dynamic compression, and touch response with **ultra-low latency (<0.2 ms per block)** and native 0 dB unity gain staging.

---

## 2. Neural Amp Architecture: 3 Direct Amp Channels

Beast of Burden features a streamlined 3-position channel selector covering the entire tonal spectrum:

| Channel Mode | Tone Profile & Applications | NAM Direct Capture | Perceived Output Leveling |
| :--- | :--- | :--- | :---: |
| **`CLEAN`** | Pure crystal clean with natural tube compression, wide headroom and smooth highs. Perfect for open-G chord balance, funk chops and dynamic fingerpicking. | `Mesa Boogie Mark IIC+ Compressed Clean` | **+14.5 dB** (Post-Amp Leveling) |
| **`CRUNCH`** | Organic 80's *edge-of-breakup* with solid body, woody mids and immediate tactile response to pick attack. Cleans up with a light touch, growls when digging in. | `Mesa Boogie Mark IIC+ 80's Clean` | **+4.5 dB** (Post-Amp Leveling) |
| **`LEAD`** | Classic rock gain, screaming tube saturation, singing harmonic sustain, and tight low-end focus without harshness. | `Mesa Boogie Mark IIC+ Rock` | **0.0 dB** (Nominal RMS) |

> [!TIP]
> **Intelligent Perceived Loudness Leveling:** Because uncompressed clean channels naturally have lower RMS volume than heavily clipped lead channels, Beast of Burden automatically levels the post-amp output stage. Switching between `CLEAN`, `CRUNCH`, and `LEAD` maintains consistent perceived volume across your mix.

---

## 3. Complete Control Guide

```
[ INPUT SIGNAL (Auto 0dB) ]
            │
            ▼
    [ PHASE '78 ]  ───►  [ SLAPBACK DELAY ]
            │
            ▼
   [ INPUT GAIN (Unity 7.0) ] ───►  [ NAM 100W 6L6 TUBE ENGINE ]
            │
            ▼
 [ 5-BAND GRAPHIC EQ (Bypass) ]  ───►  [ EVM-12L PURE PHASE IR CONVOLVER ]
            │
            ▼
 [ MASTER OUTPUT GAIN ]  ───►  [ STEREO OUT ]
```

### 🎛️ 1. Main Amplifier Controls

* **`GAIN` (Volume / Drive):** Sets input signal drive into the neural engine (`1.0` = -9 dB, `7.0` = 0 dB Unity Gain, `10.0` = +4.5 dB boost).
* **`TREBLE`:** Passive high-frequency tone control.
* **`BASS`:** Passive low-frequency tone control.
* **`MIDDLE`:** Passive midrange tone control shaping body and vocal roar.
* **`PRESENCE`:** Active power-amp feedback control adding top-end sparkle and bite.
* **`MASTER`:** Linear analog output volume (`1.0` = -36 dB bedroom volume, `7.0` = 0 dB Unity Gain, `10.0` = +18 dB boost).
* **`CHANNEL SELECTOR`:** 3-position rotary selector switching between `CLEAN`, `CRUNCH`, and `LEAD`.

---

### 🎚️ 2. 5-Band Graphic Equalizer

An authentic recreation of the classic Mesa/Boogie active slider EQ with an independent **`EQ IN`** toggle and status LED:

* **`80 Hz` (±12 dB):** Deep sub-bass thump and cab resonance.
* **`240 Hz` (±12 dB):** Low-mid boxiness control. Cutting clears mud.
* **`750 Hz` (±12 dB):** Midrange punch and vocal bark.
* **`2200 Hz / 2.2 kHz` (±12 dB):** The attack frequency! Delivers pick snap and chord bite.
* **`6600 Hz / 6.6 kHz` (±12 dB):** Smooth air and chime characteristic of the EVM-12L speaker.

---

### 🌀 3. Stones '78 Vintage Dual FX Suite

Integrated directly before the preamp stage, replicating the exact pedalboard signal flow used on classic records:

#### **Phase '78 (MXR Phase 100 Style Optical Phaser)**
* **`PHASE '78 Toggle & Amber LED`:** Activates or bypasses the phaser with 0% CPU consumption.
* **`SPEED` (`0.10 Hz` to `8.00 Hz`):** Controls the LFO modulation rate with live dynamic numerical display.
* **`INTENS` (`0%` to `100%`):** Controls sweep depth and vocal resonance.

#### **Slapback Delay (Analog Tape Echo)**
* **`DELAY Toggle & Red LED`:** Activates or bypasses the tape echo.
* **`TIME` (`20 ms` to `300 ms`):** Sets delay time with dynamic millisecond readout. Default: `110 ms` (Keith's classic slapback sweet spot).
* **`REPEATS` (`0%` to `65%`):** Controls tape feedback.
* **`MIX` (`0%` to `50%`):** Controls wet/dry balance.

---

### 🔊 4. Pacific Woodworks 1x12 EVM-12L Cabinet Convolution (Pure Phase)

The Pacific Woodworks 1x12 (Thiele ported) cabinet loaded with an Electro-Voice EVM-12L 200W speaker delivers massive power handling, transparent mids, and tight bass. The **`CABINET`** selector provides 6 pure-phase single-mic captures (48 kHz / 24-bit) with zero comb-filtering:

1. **`SM57 SweetSpot` (`-1`):** Shure SM57 on cap-edge — balanced attack, rich mids and solid punch.
2. **`SM57 Warm` (`-2`):** Shure SM57 on outer cone — deep lows, smooth highs and creamy textures.
3. **`SM57 Direct` (`0`):** Shure SM57 dead-center — razor-sharp articulation and immediate bite.
4. **`SM57 BassPort` (`Port`):** Shure SM57 in front of the Thiele port — massive sub-bass thump (80–100 Hz).
5. **`U87 Studio` (`0`):** Neumann U87Ai large condenser — pristine high fidelity, extended dynamic range and 3D air.
6. **`U87 Warm` (`-2`):** Neumann U87Ai in warm zone — dense harmonic body without harshness.
7. **`Bypass IR`:** Disables internal convolution for pairing with external third-party IR loaders.

---

### 🖼️ 5. Standby & Custom Tolex Skinning

* **`STANDBY`:** Mutes audio output and reduces neural CPU processing to **0%** immediately.
* **Drag-and-Drop Backgrounds:** Drag any `.jpg`, `.jpeg`, or `.png` image directly onto the plugin window from your file manager to customize its visual skin in real time.

---

## 4. Recommended Track Presets & Dial-In Guides

Here are studio-tested dial-in settings for iconic guitar tones:

### 🌟 Preset 1: "Beast of Burden" (The Signature Liquid Phase Tone)
* **Channel:** `CLEAN`
* **Amp Tone Stack:** Gain: `7.0` | Treble: `7.5` | Bass: `4.0` | Middle: `6.5` | Presence: `5.5` | Master: `7.0`
* **5-Band Graphic EQ:** `80Hz: 0dB` | `240Hz: -2.0dB` | `750Hz: +2.0dB` | `2.2kHz: +3.0dB` | `6.6kHz: +1.5dB`
* **Phase '78:** `ON` | Speed: `0.80 Hz` | Intensity: `60%`
* **Slapback Delay:** `ON` | Time: `110 ms` | Repeats: `20%` | Mix: `25%`
* **Cabinet:** `SM57 SweetSpot` (or `SM57 Warm`)

### ⚡ Preset 2: "Start Me Up" / "Tattoo You Crunch" (Open-G Riff Power)
* **Channel:** `CRUNCH`
* **Amp Tone Stack:** Gain: `7.5` | Treble: `7.5` | Bass: `4.0` | Middle: `7.5` | Presence: `6.0` | Master: `7.5`
* **Phase '78:** `OFF`
* **Slapback Delay:** `OFF` (or `ON` with Mix @ `12%` for studio depth)
* **Cabinet:** `SM57 Warm`

### 👑 Preset 3: "Classic Rock Lead & Solo" (Singing Tube Sustain)
* **Channel:** `LEAD`
* **Amp Tone Stack:** Gain: `8.0` | Treble: `7.0` | Bass: `4.5` | Middle: `7.5` | Presence: `6.5` | Master: `7.0`
* **Slapback Delay:** `ON` | Time: `140 ms` | Repeats: `30%` | Mix: `25%`
* **Cabinet:** `SM57 Direct` (or `U87 Studio`)

---

## 5. Standalone Audio Configuration

When running Beast of Burden as a standalone application on Windows:

1. **Audio Device Type:** Select **ASIO** (essential for ultra-low latency).
2. **Device:** Choose your audio interface's native ASIO driver.
3. **Smart Input Detection:** Beast of Burden automatically senses your active guitar input (Input 1 or Input 2) and sends 100% full-level mono audio to both stereo outputs without signal loss.
4. **Sample Rate:** Set to **48000 Hz** (48 kHz) for optimal neural inference.
5. **Buffer Size:** Set to **128 samples** (2.7 ms) or **256 samples** (5.3 ms) for seamless real-time monitoring.

---

## 6. Technical Specifications

* **Formats:** VST3 (64-bit) and Standalone Windows Executable (.exe).
* **Sample Rates:** 44.1 kHz, 48 kHz, 88.2 kHz, 96 kHz (Internal neural engine handles multi-rate inference).
* **DSP Framework:** JUCE 9 + Eigen + Neural Amp Modeler (NAM) C++ Core.
* **Instruction Set:** Full SIMD AVX/AVX2 Vectorization.
* **Developer:** Main St Audio Labs.

---

<div class="rock-card-contact" style="max-width: 600px; margin: 3rem auto 1rem auto;">
  <div class="rock-card-contact-title">Questions or Early Access Inquiries?</div>
  <p class="rock-card-contact-desc">We love hearing from guitarists and mixing engineers. Send us your questions or suggestions.</p>
  <div class="rock-copy-email-wrapper card-contact">
    <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
    <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
  </div>
</div>
