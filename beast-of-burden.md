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

## 1. Design Philosophy: The 1978 King of Crunch & Stones Mojo

**Beast of Burden** is a dual-engine audio processor pairing an authentic emulation of the legendary **1977–1978 Mesa/Boogie Mark I (100W 6L6 with Electro-Voice EVM-12L speaker)** with the signature **Stones '78 Vintage Dual FX Suite** (Phase '78 optical phaser and analog tape slapback delay).

### The Sound of *Some Girls* (1978)
In late 1977, during the legendary Paris sessions at Pathé Marconi Studios and the explosive 1978 US Tour, Keith Richards and Ron Wood armed themselves with custom Mesa/Boogie Mark I 100W combos. Moving away from the dense low-mid wall of the early '70s, the Mark I brought:
* **Hyper-Fast Attack & Punch:** Driven by massive transformers, four 6L6 power tubes, and the ultra-efficient 200W Electro-Voice EVM-12L speaker.
* **Liquid Modulation & Dimension:** Running the guitars through an MXR Phase 100 pedal and short tape slapback echo before hitting the cascaded tube preamps.
* **The Iconic 5-Band Graphic EQ "V-Curve":** Sculpting the aggressive upper-mid bite (2.2 kHz) and vocal presence (750 Hz) while cleaning up low-mid mud (240 Hz).

### Neural Amp Modeler (NAM) Engine
Powered by deep WaveNet neural networks compiled with full AVX/SIMD vectorization, Beast of Burden reproduces every non-linear nuance of tube sag, harmonic saturation, dynamic compression, and touch response with **ultra-low latency (<0.2 ms per block)** and minimal CPU consumption.

---

## 2. Neural Amp Architecture & 3-Channel Matrix

Beast of Burden features a flexible 3-channel matrix with an independent **BRIGHT** switch, covering the full sonic spectrum from pristine vintage Tweed cleans to roaring high-gain lead sustain:

| Channel Mode | Preamp Configuration | Tone Profile & Applications | Perceived Gain Leveling |
| :--- | :--- | :--- | :---: |
| **`IN 2 (Rhythm)`** | Single-stage Tweed / Blackface clean preamp | Broad dynamic headroom, sparkling top end, and transparent touch response. The ultimate choice for open-G chord work, funk chops, and dynamic rhythm playing. | **+14.5 dB** (Post-Amp Leveling) |
| **`IN 1 (Crunch - Vol 5)`** | Cascaded dual-triode preamp (Volume 1 @ 5) | Organic edge-of-breakup into dynamic crunch. Responds dynamically to pick attack: cleans up with a light touch and growls when digging in. | **+4.5 dB** (Post-Amp Leveling) |
| **`IN 1 (Lead 10)`** | Cascaded dual-triode preamp (Volume 1 @ 10) | Searing full tube saturation, dense harmonic compression, singing sustain, and smoothed top end. Perfect for screaming solos, slide, and taming bright single-coil guitars. | **0.0 dB** (Nominal RMS) |

> [!TIP]
> **Intelligent Perceived Loudness Leveling:** Because uncompressed clean channels naturally have lower RMS volume than heavily clipped lead channels, Beast of Burden automatically levels the post-amp output stage. Switching between `IN 2`, `IN 1 Crunch`, and `Lead 10` maintains consistent perceived volume across your mix.

---

## 3. Complete Control Guide

```
[ INPUT SIGNAL ]
       │
       ▼
 [ PHASE '78 ]  ───►  [ SLAPBACK DELAY ]
       │
       ▼
 [ INPUT GAIN ] ───►  [ NAM 100W 6L6 TUBE ENGINE ]
       │
       ▼
 [ TONE STACK ] ───►  [ 5-BAND GRAPHIC EQ ]
       │
       ▼
 [ EVM-12L IR CONVOLVER ]  ───►  [ MASTER OUTPUT GAIN ]  ───►  [ STEREO OUT ]
```

### 🎛️ 1. Main Amplifier Controls

* **`GAIN` (Volume / Drive):** Sets input signal drive into the neural engine (`1.0` = -18 dB clean to `10.0` = 0 dB unattenuated).
* **`TREBLE`:** Passive high-frequency tone control (`4 kHz` to `20 kHz`).
* **`BASS`:** Passive low-frequency tone control (`20 Hz` to `120 Hz`). Keep at lower settings (`3.0 – 4.5`) to keep 100W 6L6 low-end tight and punchy.
* **`MIDDLE`:** Passive midrange tone control shaping body and vocal roar.
* **`PRESENCE`:** Active power-amp feedback control adding top-end sparkle and bite.
* **`MASTER`:** Linear analog output volume (`1.0` = -36 dB bedroom volume, `7.0` = 0 dB Unity Gain, `10.0` = +18 dB boost).
* **`BRIGHT SWITCH`:** Adds a high-frequency shelf bypass across the volume pot, delivering extra chime and clarity for humbucker neck pickups.
* **`CHANNEL MODE`:** 3-position rotary selector switching between `IN 2 (Rhythm)`, `IN 1 (Crunch)`, and `IN 1 (Lead 10)`.

---

### 🎚️ 2. 5-Band Graphic Equalizer

An authentic recreation of the classic Mesa/Boogie active slider EQ with an independent **`EQ IN`** toggle and status LED:

* **`80 Hz` (±12 dB):** Controls deep sub-bass thump. Keep between `0 dB` and `+2 dB` for tight, focused low end.
* **`240 Hz` (±12 dB):** Controls low-mid boxiness. Cutting `-2 dB` to `-4 dB` instantly clears mud and opens up clarity.
* **`750 Hz` (±12 dB):** Midrange punch. Boosting `+2 dB` to `+4 dB` brings out the signature Stones guitar bark.
* **`2200 Hz / 2.2 kHz` (±12 dB):** The attack frequency! Boosting `+3 dB` to `+5 dB` delivers the unmistakable pick snap of *Beast of Burden* and *Start Me Up*.
* **`6600 Hz / 6.6 kHz` (±12 dB):** Smooth air and chime characteristic of the Electro-Voice EVM-12L speaker.

---

### 🌀 3. Stones '78 Vintage Dual FX Suite

Integrated directly before the preamp stage, replicating the exact pedalboard signal flow used on classic records:

#### **Phase '78 (MXR Phase 100 Style Optical Phaser)**
* **`PHASE '78 Toggle & Amber LED`:** Activates or bypasses the phaser.
* **`SPEED` (`0.1 Hz` to `5.0 Hz`):** Controls the LFO modulation rate. Displayed dynamically in real time.
* **`INTENS` (`0%` to `100%`):** Controls sweep depth and vocal resonance.

#### **Slapback Delay (Analog Tape Echo)**
* **`SLAPBACK Toggle & Red LED`:** Activates or bypasses the tape echo.
* **`TIME` (`20 ms` to `400 ms`):** Sets delay time with dynamic millisecond readout. Default: `110 ms` (the classic slapback sweet spot).
* **`REPEATS` (`0%` to `80%`):** Controls tape feedback. Set to `15% – 20%` for a single clean bounce.
* **`MIX` (`0%` to `100%`):** Controls wet/dry balance.

---

### 🔊 4. Electro-Voice EVM-12L Cabinet Convolution

The Electro-Voice EVM-12L 200W speaker is renowned for its neutral response, massive power handling, and punchy definition. The **`CABINET`** selector provides 5 studio-captured impulse responses plus a bypass mode:

1. **`441 Center`:** Sennheiser MD441 dynamic mic on center cap — tight, bright, and aggressive.
2. **`441 Edge`:** Sennheiser MD441 on cone edge — warm, smooth, and balanced.
3. **`4050 On-Ax`:** Audio-Technica AT4050 large condenser — full frequency spectrum with three-dimensional depth.
4. **`4x12 Close`:** 4x12 EVM-12L closed-back cab close mic'd — massive punch and low-end impact.
5. **`4x12 Big`:** 4x12 EVM-12L cab with room air — spacious, expansive rock tone.
6. **`Bypass IR`:** Disables internal convolution for pairing with external third-party IR loaders.

---

### 🖼️ 5. Standby & Custom Tolex Skinning

* **`STANDBY`:** Mutes audio output and reduces neural CPU processing to **0%** immediately.
* **Drag-and-Drop Backgrounds:** Drag any `.jpg`, `.jpeg`, or `.png` image directly onto the plugin window from your file manager to customize its visual skin in real time.

---

## 4. Recommended Track Presets & Dial-In Guides

Here are studio-tested dial-in settings for iconic Rolling Stones guitar tones:

### 🌟 Preset 1: "Beast of Burden" (The Signature Liquid Phase Tone)
* **Channel Mode:** `IN 2 (Rhythm)`
* **Bright Switch:** `ON`
* **Amp Tone Stack:** Gain: `7.0` | Treble: `7.5` | Bass: `3.5` | Middle: `7.0` | Presence: `5.5` | Master: `7.0`
* **5-Band Graphic EQ:** `80Hz: 0dB` | `240Hz: -2.5dB` | `750Hz: +2.5dB` | `2.2kHz: +3.5dB` | `6.6kHz: +1.5dB`
* **Phase '78:** `ON` | Speed: `0.8 Hz` (9:30 o'clock) | Intensity: `60%`
* **Slapback Delay:** `ON` | Time: `110 ms` | Repeats: `18%` | Mix: `22%`
* **Cabinet:** `441 Center`

### ⚡ Preset 2: "Shattered" (New York Disco-Punk Crunch)
* **Channel Mode:** `IN 1 (Crunch)`
* **Bright Switch:** `ON`
* **Amp Tone Stack:** Gain: `6.5` | Treble: `8.0` | Bass: `3.0` | Middle: `7.5` | Presence: `6.5` | Master: `7.5`
* **Phase '78:** `ON` | Speed: `1.4 Hz` (11:00 o'clock) | Intensity: `70%`
* **Slapback Delay:** `ON` | Time: `95 ms` | Repeats: `25%` | Mix: `30%`
* **Cabinet:** `4050 On-Ax`

### 🕺 Preset 3: "Miss You" (Tight Funk-Rock Chops)
* **Channel Mode:** `IN 2 (Rhythm)`
* **Bright Switch:** `OFF`
* **Amp Tone Stack:** Gain: `5.5` | Treble: `7.0` | Bass: `4.0` | Middle: `6.5` | Presence: `5.0` | Master: `7.0`
* **5-Band Graphic EQ:** `80Hz: +1dB` | `240Hz: -3.0dB` | `750Hz: +1.5dB` | `2.2kHz: +4.0dB` | `6.6kHz: +1.0dB`
* **Phase '78:** `OFF`
* **Slapback Delay:** `ON` | Time: `120 ms` | Repeats: `15%` | Mix: `18%`
* **Cabinet:** `441 Edge`

### 🎸 Preset 4: "Start Me Up" (The Definitive Open-G Riff Crunch)
* **Channel Mode:** `IN 1 (Crunch)`
* **Bright Switch:** `ON`
* **Amp Tone Stack:** Gain: `7.5` | Treble: `7.5` | Bass: `3.0` | Middle: `8.0` | Presence: `6.0` | Master: `8.0`
* **5-Band Graphic EQ:** `80Hz: +1.5dB` | `240Hz: -3.5dB` | `750Hz: +3.0dB` | `2.2kHz: +4.5dB` | `6.6kHz: +2.0dB`
* **Phase '78:** `OFF`
* **Slapback Delay:** `OFF` (or `ON` with Mix @ `12%` for studio space)
* **Cabinet:** `4x12 Close`

### 🚀 Preset 5: "Respectable" & "When The Whip Comes Down" (Raw Punk Overdrive)
* **Channel Mode:** `IN 1 (Crunch)`
* **Bright Switch:** `ON`
* **Amp Tone Stack:** Gain: `8.5` | Treble: `8.0` | Bass: `4.0` | Middle: `8.0` | Presence: `7.0` | Master: `7.5`
* **Cabinet:** `4x12 Big`

### 👑 Preset 6: "Some Girls Solo / Tattoo You Leads" (Singing Tube Sustain)
* **Channel Mode:** `IN 1 (Lead 10)`
* **Bright Switch:** `ON`
* **Amp Tone Stack:** Gain: `9.0` | Treble: `7.0` | Bass: `4.5` | Middle: `7.5` | Presence: `6.5` | Master: `7.0`
* **5-Band Graphic EQ:** `80Hz: +2dB` | `240Hz: -1.5dB` | `750Hz: +4dB` | `2.2kHz: +3dB` | `6.6kHz: +2dB`
* **Slapback Delay:** `ON` | Time: `160 ms` | Repeats: `35%` | Mix: `28%`
* **Cabinet:** `441 Center`

---

## 5. Standalone Audio Configuration

When running Beast of Burden as a standalone application on Windows:

1. **Audio Device Type:** Select **ASIO** (essential for ultra-low latency).
2. **Device:** Choose your audio interface's native ASIO driver (e.g., *Focusrite USB ASIO*, *Universal Audio Thunderbolt ASIO*).
3. **Sample Rate:** Set to **48000 Hz** (48 kHz) for optimal neural inference.
4. **Buffer Size:** Set to **128 samples** (2.7 ms) or **256 samples** (5.3 ms) for seamless real-time monitoring.

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
