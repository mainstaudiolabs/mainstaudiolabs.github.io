<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>

<ProductHero id="tattoo-you" />

<!-- ===========================================================================
     SOUND SAMPLES  --  uncomment when the four clips are recorded.
     Put the files in  public/  with exactly these names.
     Nothing sells an amp sim like hearing it: this is the single most
     valuable thing missing from this page.
============================================================================
<div class="section-head"><h2>Hear it</h2></div>

<p>Four takes, one per preset. Nothing but guitar, Tattoo You and the cab.</p>

<figure>
  <figcaption><strong>Riff Power</strong> — Crunch · 100W · SM57 Warm</figcaption>
  <audio controls preload="none" src="/tattoo-you-riff-power.mp3"></audio>
</figure>
<figure>
  <figcaption><strong>Liquid Clean</strong> — Clean · 60W · Phase '78 + Slapback</figcaption>
  <audio controls preload="none" src="/tattoo-you-liquid-clean.mp3"></audio>
</figure>
<figure>
  <figcaption><strong>Funk Groove</strong> — Clean · 60W · tight and dry</figcaption>
  <audio controls preload="none" src="/tattoo-you-funk-groove.mp3"></audio>
</figure>
<figure>
  <figcaption><strong>Singing Lead</strong> — Lead · 100W · Slapback</figcaption>
  <audio controls preload="none" src="/tattoo-you-singing-lead.mp3"></audio>
</figure>
=========================================================================== -->

<div id="manual"></div>

> **The Definitive Tube Tone: The Mark I ('78) Circuit & The Stones Sound**  
> **Tattoo You** was born from obsessive study of the legendary **Mark I ('78)** amplifier and the rig that defined the studio and stage sound of the **Rolling Stones** between 1978 and 1981 (*Some Girls*, *Emotional Rescue*, and *Tattoo You*). Crafted by and for guitarists, it captures the dynamic touch response, cascaded 6L6 tube saturation, and punch of the EVM-12L speaker: simply plug in your guitar, turn up, and immediately dive into the authentic power, bite, and swagger of classic rock.

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

👉 [**"The Stones Don't Pay for Amps": How the Stones Acquired the Mesa/Boogie Rigs (1978–1981) →**](/history-mesa-stones)

---

## 2. Power & Voicing Controls: WATTAGE (100W vs 60W) and BRIGHT

**Tattoo You** features two interactive vintage toggle switches on the bottom control panel, capturing the physical and harmonic response of the '78 Mark I circuit:

| Control | Position | Tonal Character & Dynamics | Ideal Applications |
| :--- | :--- | :--- | :--- |
| **`WATTAGE`** | **`100W`** (Up) | Colossal headroom, tight and percussive low-end thump, lightning-fast transient response, and aggressive note attack without premature power-stage sag. | Huge stadium rock riffs (*"Start Me Up"*, *"Little T&A"*, *"Hang Fire"*), heavy chord punch, and high-impact rhythm tracking. |
| | **`60W`** (Down) | Organic power supply sag, natural power-tube compression, blooming midrange harmonics, and a spongier, touch-sensitive breakup when digging in with the pick. | Dynamic soul cleans (*"Beast of Burden"*, *"Tops"*), singing blues leads, funk comps (*"Dance Part 1"*), and intimate studio tracks (*"Waiting on a Friend"*). |
| **`BRIGHT`** | **`NORMAL`** (Up) | Balanced, full-frequency response with warm midrange and smooth top-end roll-off. | Versatile all-around setting for humbuckers and heavy rock rhythm. |
| | **`BRIGHT`** (Down) | Crystalline upper-treble chime and enhanced pick bite. | Open-G chord clarity, reggae/funk skanks, and darker pickup voicings. |

* **Interactive Control:** Toggle switches using the physical lever or by simply clicking directly on the `100W`/`60W` or `NORMAL`/`BRIGHT` text labels.

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

* **`NOISE GATE`:** Situated at the very start of the pure instrument chain, automatically eliminating background noise, 50/60 Hz electromagnetic hum, and high-gain hiss without clipping long musical sustain (Ultra-fast 1.5ms attack, 35ms hold, 140ms natural release).
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
*Recreates the warm, single-repeat analog tape slapback echo.*
* **`DELAY Toggle & Red LED`:** Activates or bypasses the tape echo.
* **`TIME` (`20 ms` to `300 ms`):** Sets delay time with dynamic millisecond readout. Default: `100 ms`.
* **`REPEATS` (`0%` to `65%`):** Controls tape feedback.
* **`MIX` (`0%` to `50%`):** Controls wet/dry balance.

### 5. "1x12 Hardwood Cab Lab" (Dual-Convolution Mixer & Stereo Spread 3D)

<img :src="'/tattoo-you-cab-lab.png'" alt="Tattoo You 1x12 Hardwood Cab Lab Console" style="max-width: 620px; width: 100%; height: auto; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.40);" />

Tattoo You integrates the **1x12 Hardwood Cab Lab** studio overlay, powered by a parallel dual-convolution engine at zero latency loaded with **24 sample-accurate impulse responses** captured from an authentic **EVM-12L** driver in a ported solid hardwood cabinet:

#### 🎛️ Console Controls & Features:

* **`CAB LAB Button & Front Display`:** Clicking the `CAB LAB` button (in crisp high-contrast white) or the active microphone pill on the front plate opens the floating studio mixing console.
* **`MIC 1 (Direct / Attack)` & `MIC 2 (Body / Room)`:** 
  * Two independent channels with dropdown selection across the **24 official studio takes** (Shure 57, Neumann 87, bottom BassPort, and U87 Room 3D).
  * Individual channel level faders calibrated from **-24 dB to +6 dB**.
  * Phase polarity invert switch ($\varnothing$ 180°) on the secondary channel.
* **`CAB BLEND Knob (% Equal-Power)`:** Smooth continuous crossfader between both microphones governed by an equal-power law (overall sound energy never drops). Accessible inside the Cab Lab or on the amplifier's top front mini-knob.
* **`STEREO SPREAD 3D Switch (Single-Track Stereo Secret)`:**
  * **Mono Sum (Off):** Combines both microphones in phase into the center of the track (ideal for dense rhythm mixes and tight guitar tracks).
  * **Stereo Spread (On):** Routes **Mic 1 100% to the Left channel** and **Mic 2 100% to the Right channel** with automatic +3 dB loudness compensation ($\sqrt{2}$). Creates **colossal 3D analog stereo width on a single DAW track without duplicating tracks** or phase cancellation.
* **6 Calibrated Studio Reference Presets:**
  * 🎸 **Studio Standard:** 57 L Sweet + 87 L Direct *(Blend 30%, Mono)* — Definitive rock tone.
  * 🥊 **Heavy Punch:** 57 L Sweet + 57 L BassPort *(Blend 25%, Mono)* — Razor-sharp attack with 4x12 low-end weight.
  * 🌌 **Live Room 3D:** 57 L Sweet + 87 Room L 3D *(Blend 25%, Stereo)* — Natural live-room amp dimensionality.
  * 🎧 **Wide Double Track:** 57 L Sweet + 57 R Sweet *(Blend 50%, Stereo)* — Massive double-tracked guitar wall on a single track.
  * ⚡ **Solo 57 Classic:** 57 L Sweet *(Mic 2 Off, Mono)* — Raw bite and punchy midrange.
  * ✨ **Solo 87 Hi-Fi:** 87 L Direct *(Mic 2 Off, Mono)* — Studio-grade clarity and high-end air.

::: tip 🎙️ MASTER AUDIO ENGINEERING & MIC PLACEMENT GUIDE
Want to explore the driver acoustics of the EVM-12L, cone frequency dispersion, and sample-accurate phase physics ($t=0$)?  
👉 [**Read the Complete Master Audio Engineering & Mic Placement Guide (1x12 Hardwood Cab Lab) →**](/audio-mics-guide)
:::

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

* **Plugin Formats:** VST3 (64-bit), Standalone Application.
* **Operating Systems:**
  * **Windows:** Windows 10 / Windows 11 (x64).
  * **macOS:** Universal Binary (Apple Silicon & Intel) — AU, VST3, Standalone.
  * **Linux:** Ubuntu / Debian / Arch (VST3, Standalone).
* **Processing Engine:** Neural Amp Modeler (NAM) WaveNet architecture + real-time DSP convolution. The neural stage runs in 64-bit double precision.
* **Session Sample Rate:** the amp was captured at **48 kHz**, and that is the recommended rate. **44.1 kHz** works just as well — the difference is negligible in practice, and between them they cover almost every rock and guitar session. Above 48 kHz the amp's voicing shifts upward and it stops sounding like the Mark I that was captured: at 96 kHz the shift is a full octave. Work at 48 or 44.1.
* **Latency:** zero latency (0 samples) for live tracking and monitoring.

---

<div class="rock-card-contact" style="margin-top: 2.5rem;">
  <div class="rock-card-contact-title">Questions, Feedback &amp; Mix Sharing</div>
  <p class="rock-card-contact-desc">Tattoo You was calibrated by guitarists for guitarists. If you have questions, feedback, or want to share tracks dialed in with Tattoo You, get in touch with us:</p>
  <div class="rock-copy-email-wrapper">
    <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
    <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
  </div>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>Other plugins</h2></div>

<PluginGrid exclude="tattoo-you" />
