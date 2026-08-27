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

**Version 1.0.0 · Virtual Amplifier Simulation & Vintage FX Suite**

<img :src="'/tattoo-you.png'" alt="Tattoo You Plugin GUI" style="width: 100%; max-width: 100%; height: auto; display: block; margin: 1.75rem auto; border: 2px solid var(--vp-c-border); border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);" />

> **Built by Stones Fans, for Guitarists:**  
> **Tattoo You** was born from studying every nuance, session tape, and live track of the Rolling Stones' guitar sound in obsessive detail. Created by dedicated Stones fans and seasoned guitarists, it is designed so that you can simply plug in your guitar, turn up, and immediately be immersed in the legendary 1978–1981 tone — with all the touch sensitivity, punch, and swagger of the original records.

---

## 1. Design Philosophy: The 1978–1981 Golden Tube & FX Era

**Tattoo You** captures the definitive late '70s and early '80s studio and stage guitar sound of Keith Richards and the Rolling Stones. This era marked a historic sonic transition: moving from raw vintage Ampeg/Fender breakup to the high-headroom, cascaded-gain architecture of **Mesa/Boogie 6L6 tube circuits** paired with **1x12 Electro-Voice EVM-12L speakers** and front-loaded analog modulation.

### The Historic Timeline: 1978–1981

1. **The Paris Sessions (1978 · *Some Girls* / *Beast of Burden*):**  
   At *Pathé Marconi Studios* in Paris, Keith introduced the iconic combination of compressed tube cleans, the liquid optical sweep of the **Phase '78** (MXR Phase 100 style), and warm analog slapback tape echo — immortalized in the signature guitar textures of *"Beast of Burden"*, *"Miss You"*, and *"Shattered"*.

2. **The Tropical Overdrive Era (1979–1980 · *Emotional Rescue*):**  
   Continuing between Paris and *Compass Point Studios* (Nassau), the rig evolved to handle tight funk-rock dynamics (*"Emotional Rescue"*, *"Dance Part 1"*), biting reggae-rock skanks, and crunchy blues leads with unprecedented pick sensitivity and headroom.

3. **The Masterpiece Riff Power (1981 · *Tattoo You*):**  
   Assembled between Paris and *Atlantic Studios* (NYC), *Tattoo You* represents the zenith of this rig. The unforgettable rhythm crunch on *"Start Me Up"*, the driving punch of *"Little T&A"*, the greasy groove of *"Slave"*, and the roaring aggression of *"Hang Fire"* and *"Neighbours"* stand as benchmark references for rock guitar tone.

👉 [**Read the full story: How the Stones Acquired the Mesa/Boogie Rigs (1978–1981) →**](/history-mesa-stones)

---

## 2. Dual Power Amp Architecture: HEAD vs COMBO

**Tattoo You** features a dedicated power amplifier topology switch on the bottom control panel, capturing the two physical circuit configurations favored on stage and in the studio:

| Power Amp Mode | Circuit Topology | Tonal Character & Dynamics | Ideal Applications |
| :--- | :--- | :--- | :--- |
| **`HEAD`** | **100W 6L6 Power Amp (Quad 6L6)** | Massive dynamic headroom, tight and percussive low-end thump, lightning-fast transient response, and aggressive note attack without premature power-stage sag. | Huge stadium rock riffs (*"Start Me Up"*, *"Little T&A"*, *"Hang Fire"*), heavy chord punch, and high-impact rhythm tracking. |
| **`COMBO`** | **60W 6L6 Power Amp (Dual 6L6)** | Organic power supply sag, natural power-tube compression, blooming midrange harmonics, and a spongier, touch-sensitive breakup when digging in with the pick. | Dynamic soul cleans (*"Beast of Burden"*, *"Tops"*), singing blues leads, funk comps (*"Dance Part 1"*), and intimate studio tracks (*"Waiting on a Friend"*). |

* **Interactive Control:** Toggle between `HEAD` and `COMBO` using the vintage toggle switch or by simply clicking directly on the `HEAD` / `COMBO` text labels.

---

## 3. 3-Channel Neural Amplifier Architecture

The 3-position channel rotary selector covers the complete gain spectrum of the vintage 6L6 tube circuit:

| Channel Mode | Tone Character | Ideal Applications |
| :--- | :--- | :--- |
| **`CLEAN`** | Pristine clean tone with natural tube compression, wide dynamic headroom and smooth, chimey highs. | Rhythm chord balance (*"Beast of Burden"*, *"Tops"*), funk chops, and soul ballads. |
| **`CRUNCH`** | Organic edge-of-breakup with a solid low-end body, punchy mids and immediate tactile response to pick attack. | Iconic classic rock riffs (*"Start Me Up"*, *"Little T&A"*, *"Hang Fire"*), chord crunch, and blues rhythms. |
| **`LEAD`** | Searing high-gain tube saturation with rich harmonic sustain, liquid soloing feel and focused low end. | Singing lead lines, heavy rock riffs, slide guitar (*"Slave"*, *"Neighbours"*), and sustained soloing. |

---

## 4. Signal Flow & Control Guide

```text
[ GUITAR INPUT ]
       │
       ▼
 [ ADAPTIVE NOISE GATE (-58 dB) ]
       │
       ▼
 [ PHASE '78 ]  ───►  [ SLAPBACK DELAY ]
       │
       ▼
 [ INPUT GAIN DRIVE ]
       │
       ▼
 [ ANALOG WAVESHAPER / LIMITER (-0.1 dBFS) ]
       │
       ▼
 [ 6L6 NEURAL PREAMP (Clean / Crunch / Lead) ]
       │
       ▼
 [ POWER AMP TOPOLOGY (Head 100W / Combo 60W) ]
       │
       ▼
 [ 5-BAND GRAPHIC EQ ]  ───►  [ "MICK" EVM-12L CABINET MODULE ]
       │
       ▼
 [ MASTER OUTPUT ]  ───►  [ STEREO OUT ]
```

### 1. Input Stage & Dynamic Protection

* **`ADAPTIVE NOISE GATE`:** Situated at the very start of the pure instrument chain, automatically eliminating background noise, 50/60 Hz electromagnetic hum, and high-gain hiss without clipping long musical sustain (Ultra-fast 1.5ms attack, 35ms hold, 140ms natural release).
* **`ANALOG WAVESHAPER / SOFT CLIPPER (-0.1 dBFS)`:** Smooth hyperbolic tangent saturation placed directly before the NAM neural engine. Guarantees 100% linear transparency for normal playing while musical soft-limiting safeguards against digital overs and neural extrapolation artifacts.

---

### 2. Main Amplifier Controls

* **`GAIN` (Volume / Drive):** Sets input signal drive into the amplifier (`1.0` = -9 dB, `7.0` = 0 dB Unity Gain, `10.0` = +4.5 dB boost).
* **`VOLUME` (Master):** Clean analog output volume (`1.0` = -36 dB bedroom volume, `7.0` = 0 dB Unity Gain, `10.0` = +18 dB boost).
* **`HEAD / COMBO SWITCH`:** Selects between 100W Quad-6L6 Head and 60W Dual-6L6 Combo power section topologies.
* **`CHANNEL SELECTOR`:** 3-position rotary selector switching between `CLEAN`, `CRUNCH`, and `LEAD`.
* **`STANDBY`:** Instant mute toggle for guitar changes and silent pauses.

---

### 3. 5-Band Graphic Equalizer

An authentic recreation of the classic active slider EQ with an independent **`EQ IN`** toggle and status LED:

* **`80 Hz` (±12 dB):** Deep sub-bass thump and cab resonance.
* **`240 Hz` (±12 dB):** Low-mid boxiness control. Cutting clears mud.
* **`750 Hz` (±12 dB):** Midrange punch and vocal bark.
* **`2200 Hz / 2.2 kHz` (±12 dB):** The attack frequency! Delivers pick snap and chord bite.
* **`6600 Hz / 6.6 kHz` (±12 dB):** Smooth air and chime characteristic of the EVM-12L speaker.

---

### 4. Stones '78 Vintage Dual FX Suite

Integrated directly before the preamp stage, replicating the exact pedalboard signal flow used on classic records:

#### **Phase '78 (MXR Phase 100 Style Optical Phaser)**
*Recreates the signature optical modulation heard on "Beast of Burden", "Shattered", and "Slave" — providing a thick, hypnotic sweep that cut through the dual-guitar attack of Richards and Ronnie Wood.*
* **`PHASE '78 Toggle & Amber LED`:** Activates or bypasses the phaser with 0% CPU consumption.
* **`SPEED` (`0.10 Hz` to `8.00 Hz`):** Controls the LFO modulation rate with live dynamic numerical display.
* **`INTENS` (`0%` to `100%`):** Controls sweep depth and vocal resonance.

#### **Slapback Delay (Analog Tape Echo)**
*Recreates the warm, single-repeat analog tape slapback echo set in the classic 110ms sweet spot.*
* **`DELAY Toggle & Red LED`:** Activates or bypasses the tape echo.
* **`TIME` (`20 ms` to `300 ms`):** Sets delay time with dynamic millisecond readout. Default: `110 ms` (Keith's classic slapback sweet spot).
* **`REPEATS` (`0%` to `65%`):** Controls tape feedback.
* **`MIX` (`0%` to `50%`):** Controls wet/dry balance.

---

### 5. "MICK" Cabinet Module (1x12 EVM-12L & Arrow Selector)

The **`MICK`** section (a deliberate homage to Mick Jagger and studio microphone capture) pairs the 1x12 ported cabinet loaded with an authentic Electro-Voice EVM-12L 200W speaker. Equipped with dual green navigation arrows (`<` and `>`) and direct text click, you can smoothly cycle through 7 phase-coherent microphone placements:

1. **`SM57 SweetSpot`:** Shure SM57 on cap-edge — balanced attack, rich mids and solid punch.
2. **`SM57 Warm`:** Shure SM57 on outer cone — deep lows, smooth highs and warm textures.
3. **`SM57 Direct`:** Shure SM57 on center — razor-sharp articulation and immediate bite.
4. **`SM57 BassPort`:** Shure SM57 on the front port — extended low-end thump (80–100 Hz).
5. **`U87 Studio`:** Neumann U87Ai large diaphragm condenser — high fidelity, wide dynamic range and open 3D air.
6. **`U87 Warm`:** Neumann U87Ai in warm zone — dense harmonic body without top-end harshness.
7. **`Bypass IR`:** Disables internal cabinet simulation for pairing with external third-party IR loaders.

---

## 5. Integrated Studio Rack Tuner

<img :src="'/tattoo-you-tuner.png'" alt="Tattoo You Integrated Studio Tuner" style="max-width: 320px; width: 100%; height: auto; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 8px; box-shadow: 0 6px 18px rgba(0,0,0,0.30);" />

Accessible via the compact **`TUNER`** button in the lower right corner, Tattoo You includes a full-featured studio chromatic tuner floating rack overlay:

* **High-Precision Vintage VU Meter:** Dual-illuminated analog meter needle with a ±50 cent sweep range and a bright green center in-tune zone (±3 cents).
* **Digital Display Center:** High-contrast pitch readout featuring note name with musical octave, pitch stability filtering, exact detected frequency in Hz, and cent deviation.
* **Dual Detection Algorithms (`MPM` / `YIN` Switch):**
  * **`MPM` (McLeod Pitch Method):** Ultra-fast tracking ideal for rapid stage tuning and live performance.
  * **`YIN`:** High-precision autocorrelation algorithm optimized for low registers and studio intonation setups.
* **`MUTE` Switch:** Silences audio output for silent on-stage tuning.
* **`REF A4` Calibration:** Adjustable from 432 Hz to 448 Hz (double-click to reset to standard 440 Hz).
* **True 0.0% CPU Standby & Click-to-Close:** Closes instantly via the `CLOSE TUNER` button or by simply clicking anywhere on the dimmed amplifier backdrop, automatically deactivating all DSP routines.

---

## 6. Recommended Track Presets & Dial-In Guides

### Preset 1: "Start Me Up" / "Tattoo You Crunch" (Riff Power)
* **Power Amp:** `HEAD` (100W)
* **Channel:** `CRUNCH`
* **Gain:** `7.5` | **Volume:** `7.5`
* **5-Band Graphic EQ:** `80Hz: +1.5dB` | `240Hz: -3.0dB` | `750Hz: +2.5dB` | `2.2kHz: +4.0dB` | `6.6kHz: +2.0dB`
* **Phase '78:** `OFF`
* **Slapback Delay:** `OFF` (or `ON` with Mix @ `12%` for subtle studio room depth)
* **MICK:** `SM57 Warm` (or `SM57 SweetSpot`)

### Preset 2: "Beast of Burden" / "Shattered" (The Signature Liquid Phase Clean)
* **Power Amp:** `COMBO` (60W)
* **Channel:** `CLEAN`
* **Gain:** `7.0` | **Volume:** `7.0`
* **5-Band Graphic EQ:** `80Hz: 0dB` | `240Hz: -2.0dB` | `750Hz: +2.0dB` | `2.2kHz: +3.0dB` | `6.6kHz: +1.5dB`
* **Phase '78:** `ON` | Speed: `0.80 Hz` | Intensity: `60%`
* **Slapback Delay:** `ON` | Time: `110 ms` | Repeats: `20%` | Mix: `25%`
* **MICK:** `SM57 SweetSpot` (or `U87 Studio`)

### Preset 3: "Emotional Rescue" / "Dance Part 1" (Funk-Rock & Tight Groove)
* **Power Amp:** `COMBO` (60W)
* **Channel:** `CLEAN`
* **Gain:** `6.5` | **Volume:** `8.0`
* **5-Band Graphic EQ:** `80Hz: -1.0dB` | `240Hz: -4.0dB` | `750Hz: +1.0dB` | `2.2kHz: +3.5dB` | `6.6kHz: +3.0dB`
* **Phase '78:** `ON` | Speed: `1.20 Hz` | Intensity: `40%`
* **Slapback Delay:** `OFF`
* **MICK:** `SM57 Direct`

### Preset 4: "Slave" / "Neighbours" (Singing Tube Lead & Solo)
* **Power Amp:** `HEAD` (100W)
* **Channel:** `LEAD`
* **Gain:** `8.0` | **Volume:** `7.0`
* **5-Band Graphic EQ:** `80Hz: +2.0dB` | `240Hz: -1.5dB` | `750Hz: +3.5dB` | `2.2kHz: +3.0dB` | `6.6kHz: +2.0dB`
* **Slapback Delay:** `ON` | Time: `140 ms` | Repeats: `30%` | Mix: `25%`
* **MICK:** `SM57 Direct` (or `U87 Studio`)

---

## 7. Technical Specifications & Platform Support

* **Plugin Formats:** VST3 (64-bit), Standalone Application (.exe).
* **Operating Systems:**
  * **Windows:** Windows 10 / Windows 11 (x64) — *Available Now*.
  * **macOS:** Universal Binary (Apple Silicon M1/M2/M3/M4 & Intel x64) / AU, VST3, Standalone — *Coming Soon* (Compatible with High Sierra 10.13 through macOS Sonoma/Sequoia).
  * **Linux:** Ubuntu / Debian / Arch (VST3, Standalone) — *Coming Soon*.
* **Processing Engine:** Neural Amp Modeler (NAM) WaveNet Architecture + DSP Real-time Convolution.
* **Internal Audio Resolution:** 64-bit double precision floating point processing.
* **Sample Rates Supported:** 44.1 kHz, 48 kHz, 88.2 kHz, 96 kHz, 176.4 kHz, 192 kHz.
* **Latency:** Zero latency (0 samples) for live tracking and monitoring.

---

<div class="rock-card-contact" style="margin-top: 2.5rem;">
  <div class="rock-card-contact-title">Questions, Feedback &amp; Mix Sharing</div>
  <p class="rock-card-contact-desc">Tattoo You was calibrated by guitarists for guitarists. If you have questions, feedback, or want to share tracks dialed in with Tattoo You, get in touch with us:</p>
  <div class="rock-copy-email-wrapper">
    <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
    <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
  </div>
</div>