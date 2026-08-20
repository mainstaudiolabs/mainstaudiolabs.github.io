<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>

# Tattoo You: User Manual

**Version 1.0.0 Â· Virtual Stompbox & Amplifier Simulation**

This manual provides a detailed description of the design philosophy, signal chain architecture, control parameters, and recommended presets for the **Tattoo You** amplifier emulation and vintage FX suite.

<img :src="'/tattoo-you.png'" alt="Tattoo You Plugin GUI" style="max-height: 280px; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 4px;" />

---

## 1. Design Philosophy: The 100W Tube Crunch & Lead Beast

**Tattoo You** is a dedicated amplifier simulation and vintage effects suite pairing an authentic 100W 6L6 tube amplifier architecture with the signature **Stones '78 Vintage Dual FX Suite** (Phase '78 optical phaser and analog tape slapback delay) and a studio-recorded **Pacific Woodworks 1x12 Thiele cabinet with an Electro-Voice EVM-12L speaker**.

### The Sound of Studio & Stage
Inspired by the high-headroom, cascaded-gain rigs that defined legendary late '70s and early '80s rock records:
* **Hyper-Fast Attack & Punch:** Massive power supply headroom, four 6L6 power tubes, and the ultra-efficient 200W Electro-Voice EVM-12L speaker.
* **Liquid Modulation & Dimension:** Running guitars through vintage optical phasing and tape slapback echo before hitting the tube preamp.
* **The Iconic 5-Band Graphic EQ:** Sculpting mid attack (2.2 kHz) and vocal presence (750 Hz) while clearing low-mid mud (240 Hz).

---

## 2. 3-Channel Amplifier Architecture

Tattoo You features a straightforward 3-way channel selector covering the entire tonal spectrum:

| Channel Mode | Tone Character | Ideal Applications |
| :--- | :--- | :--- |
| **`CLEAN`** | Pristine clean tone with natural tube compression, wide dynamic headroom and smooth, chimey highs. | Open-G chord balance, funk chops, soul ballads and dynamic fingerpicking. |
| **`CRUNCH`** | Organic edge-of-breakup with a solid low-end body, punchy mids and immediate tactile response to pick attack. | Rhythmic rock riffs, classic Stones overdrive, blues solos and chord crunch. |
| **`LEAD`** | Searing high-gain tube saturation with rich harmonic sustain, liquid soloing feel and focused low end. | Singing lead lines, heavy riffs, slide guitar and sustained soloing. |

---

## 3. Complete Control Guide

```
[ GUITAR INPUT ]
       â”‚
       â–¼
 [ PHASE '78 ]  â”€â”€â”€â–º  [ SLAPBACK DELAY ]
       â”‚
       â–¼
 [ 100W 6L6 TUBE PREAMP (Clean / Crunch / Lead) ]
       â”‚
       â–¼
 [ 5-BAND GRAPHIC EQ ]  â”€â”€â”€â–º  [ EVM-12L CABINET SIMULATION ]
       â”‚
       â–¼
 [ MASTER OUTPUT ]  â”€â”€â”€â–º  [ STEREO OUT ]
```

### ðŸŽ›ï¸ 1. Main Amplifier Controls

* **`GAIN` (Volume / Drive):** Sets input signal drive into the amplifier (`1.0` = -9 dB, `7.0` = 0 dB Unity Gain, `10.0` = +4.5 dB boost).
* **`MASTER`:** Clean analog output volume (`1.0` = -36 dB bedroom volume, `7.0` = 0 dB Unity Gain, `10.0` = +18 dB boost).
* **`CHANNEL SELECTOR`:** 3-position rotary selector switching between `CLEAN`, `CRUNCH`, and `LEAD`.

---

### ðŸŽšï¸ 2. 5-Band Graphic Equalizer

An authentic recreation of the classic Mesa/Boogie active slider EQ with an independent **`EQ IN`** toggle and status LED:

* **`80 Hz` (Â±12 dB):** Deep sub-bass thump and cab resonance.
* **`240 Hz` (Â±12 dB):** Low-mid boxiness control. Cutting clears mud.
* **`750 Hz` (Â±12 dB):** Midrange punch and vocal bark.
* **`2200 Hz / 2.2 kHz` (Â±12 dB):** The attack frequency! Delivers pick snap and chord bite.
* **`6600 Hz / 6.6 kHz` (Â±12 dB):** Smooth air and chime characteristic of the EVM-12L speaker.

---

### ðŸŒ€ 3. Stones '78 Vintage Dual FX Suite

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

### ðŸ”Š 4. Pacific Woodworks 1x12 EVM-12L Cabinet Simulation

The Pacific Woodworks 1x12 (Thiele ported) cabinet loaded with an Electro-Voice EVM-12L 200W speaker delivers massive power handling, transparent mids, and punchy, tight bass. The **`CABINET`** selector offers 6 studio microphone placements plus a bypass option:

1. **`SM57 SweetSpot`:** Shure SM57 on cap-edge â€” balanced attack, rich mids and solid punch.
2. **`SM57 Warm`:** Shure SM57 on outer cone â€” deep lows, smooth highs and warm textures.
3. **`SM57 Direct`:** Shure SM57 on center â€” razor-sharp articulation and immediate bite.
4. **`SM57 BassPort`:** Shure SM57 on the Thiele port â€” extended low-end thump (80â€“100 Hz).
5. **`U87 Studio`:** Neumann U87Ai large diaphragm condenser â€” high fidelity, wide dynamic range and open 3D air.
6. **`U87 Warm`:** Neumann U87Ai in warm zone â€” dense harmonic body without top-end harshness.
7. **`Bypass IR`:** Disables internal cabinet simulation for pairing with external third-party IR loaders.

---

### ðŸ–¼ï¸ 5. Standby & Custom Tolex Skinning

* **`STANDBY`:** Mutes audio output and reduces neural CPU processing to **0%** immediately.
* **Drag-and-Drop Backgrounds:** Drag any `.jpg`, `.jpeg`, or `.png` image directly onto the plugin window from your file manager to customize its visual skin in real time.

---

## 4. Recommended Track Presets & Dial-In Guides

Here are studio-tested dial-in settings for iconic guitar tones:

### ðŸŒŸ Preset 1: "Tattoo You" (The Signature Liquid Phase Tone)
* **Channel:** `CLEAN`
* **Gain:** `7.0` | **Master:** `7.0`
* **5-Band Graphic EQ:** `80Hz: 0dB` | `240Hz: -2.0dB` | `750Hz: +2.0dB` | `2.2kHz: +3.0dB` | `6.6kHz: +1.5dB`
* **Phase '78:** `ON` | Speed: `0.80 Hz` | Intensity: `60%`
* **Slapback Delay:** `ON` | Time: `110 ms` | Repeats: `20%` | Mix: `25%`
* **Cabinet:** `SM57 SweetSpot` (or `SM57 Warm`)

### âš¡ Preset 2: "Start Me Up" / "Tattoo You Crunch" (Open-G Riff Power)
* **Channel:** `CRUNCH`
* **Gain:** `7.5` | **Master:** `7.5`
* **5-Band Graphic EQ:** `80Hz: +1.5dB` | `240Hz: -3.0dB` | `750Hz: +2.5dB` | `2.2kHz: +4.0dB` | `6.6kHz: +2.0dB`
* **Phase '78:** `OFF`
* **Slapback Delay:** `OFF` (or `ON` with Mix @ `12%` for studio depth)
* **Cabinet:** `SM57 Warm`

### ðŸ‘‘ Preset 3: "Classic Rock Lead & Solo" (Singing Tube Sustain)
* **Channel:** `LEAD`
* **Gain:** `8.0` | **Master:** `7.0`
* **5-Band Graphic EQ:** `80Hz: +2.0dB` | `240Hz: -1.5dB` | `750Hz: +3.5dB` | `2.2kHz: +3.0dB` | `6.6kHz: +2.0dB`
* **Slapback Delay:** `ON` | Time: `140 ms` | Repeats: `30%` | Mix: `25%`
* **Cabinet:** `SM57 Direct` (or `U87 Studio`)

---

## 5. Standalone Audio Configuration

When running Tattoo You as a standalone application on Windows:

1. **Audio Device Type:** Select **ASIO** (essential for ultra-low latency).
2. **Device:** Choose your audio interface's native ASIO driver.
3. **Smart Input Detection:** Tattoo You automatically senses your active guitar input (Input 1 or Input 2) and sends 100% full-level mono audio to both stereo outputs without signal loss.
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

