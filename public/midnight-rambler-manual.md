<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>

# Midnight Rambler: User Manual

**Version 1.0.0**

This manual provides a detailed description of the usage, design philosophy, and technical specifications for the **Midnight Rambler** amplifier emulation stompbox plugin.

<img :src="'/mr.png'" alt="Midnight Rambler GUI" style="max-height: 240px; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border);" />

---

## 1. Design Philosophy: The Simplicity Manifesto

**Midnight Rambler** is built upon a clear philosophy: **deliver the bare minimum interface to maximize the sonic experience and touch-sensitive dynamics.**

Unlike conventional digital plugins that clutter the interface with endless options and nested menus, this pedal focuses on a single, meticulously calibrated tone that performs instantly.

### A Sound Designed for the Mix
The pedal is designed based on a deep study of Keith Richards' legendary guitar tone. The virtual circuit has been optimized and adapted specifically to sit perfectly in the mix without requiring complex external EQ adjustments, shaving off muddy low-end and controlling harsh high-end.

### Ultra-Low CPU Consumption
Thanks to a highly optimized audio processing engine, the pedal delivers near-zero latency and extremely low CPU usage, guaranteeing an immediate and organic response to your playing dynamics.

---

## 2. Control Guide

The pedal features simple yet high-precision controls to shape your tone:

### 🎛️ 1. GAIN (Gain Boost)
* **Function:** Controls the input gain before the saturation stage.
* **Range:** `-12.0 dB` to `+15.0 dB`.
* **Usage:**
  * **Low Values (-12 dB to 0 dB):** Cleans up the signal, ideal for dynamic, clean-to-edge-of-breakup tones, especially with high-output humbucker pickups.
  * **High Values (0 dB to +15 dB):** Pushes the virtual circuits into saturation, delivering a rich harmonic distortion, natural compression, and increased sustain.

### 🎛️ 2. BASS (Bass Cut - HP Filter)
* **Function:** A post-saturation High-Pass Filter designed to sculpt the low-end.
* **Range:** `20.0 Hz` to `300.0 Hz` (logarithmic scale for finer control).
* **Usage:** Shaves off muddy low-end frequencies to keep the mix tight, without altering the natural breakup of the virtual valves. At its minimum value (20 Hz), the filter is fully open.

### 🎛️ 3. TONE (Tone Cut - LP Filter)
* **Function:** A post-saturation Low-Pass Filter designed to control treble presence.
* **Range:** `1.0 kHz` to `20.0 kHz`.
* **Usage:** Tames harshness and digital sibilance. Higher values deliver a modern, glassy bite, while lower values roll off the highs for a warm, dark, and rounded vintage tone.

### 🎛️ 4. MASTER (Master Volume)
* **Function:** Adjusts the final output level of the plugin.
* **Range:** `-60.0 dB` to `+6.0 dB`.
* **Usage:** Compensates the output level when raising the GAIN knob, protecting your monitors and controlling the signal level sent to your DAW track.

### 📻 5. MIC / CAB MODE (Microphone & Cabinet Selector)
Allows switching between three different cabinet acoustic profiles using real-time audio convolution:
1. **WARM:** A thick, full-bodied response with pronounced low-end and warm mids, ideal for greasy and fat rhythm playing.
2. **SHARP:** Emulates a dynamic mic capsule with emphasized upper-mids and a natural low-end roll-off, providing a sharp attack that cuts cleanly through any mix.
3. **BLEND:** A custom combined response (60% Shure SM57 and 40% Royer R121), delivering the perfect balance of dynamic bite and ribbon warmth for all-around playability.

### 🎛️ 6. STANDBY (Mute / Safe Switch)
* **Function:** Emulates the standby switch found on physical tube amplifiers, acting as a total mute switch.
* **Usage:** Silences the plugin's output. When active, it triggers an early return in the processing loop, dropping the plugin's CPU usage to **0%** instantly.

---

## 3. Audio Configuration (Standalone)

When running the pedal as a standalone application, configure your audio settings as follows for optimal performance:

1. **Audio Device Type:** Always select **ASIO** on Windows to avoid latency and digital distortion.
2. **Device:** Select the native ASIO driver of your audio interface (e.g., *Focusrite USB ASIO*).
3. **Sample Rate:** Set it to **48000 Hz** (48 kHz).
4. **Buffer Size:** Set the buffer size to **128 samples** (2.3 ms) or **256 samples** (5.3 ms).

#### 💡 The Buffer Phenomenon: Why 256 samples (5.3 ms) might sound better than 128 samples (2.3 ms)
Many guitarists experience a sweeter, more fluid tone at 256 samples. This is due to two factors:
* **Processor Stability:** At 256 samples, the CPU processes audio chunks with more headroom, preventing micro-jitters that can introduce subtle treble harshness.
* **Acoustic Duplication Effect:** The tiny 5.3 ms delay, combined with the physical acoustic sound of your unplugged electric strings vibrating in the room, creates an organic doubling effect that adds tridimensional depth, thickness, and a natural room reverb feel to your playing.

---

## 4. System Requirements & Distribution

### 🖥️ System Requirements
* **Operating System:** Windows 10 or Windows 11 (64-bit).
* **Processor (CPU):** Must support **AVX2** instruction sets (Intel Core 4th Gen / AMD Ryzen or newer) to calculate the mathematical models in real-time.
* **RAM:** 4 GB minimum.
* **Audio Card:** Audio interface with native **ASIO** drivers.

### 📦 Distribution (All-in-One)
**Midnight Rambler is 100% self-contained.** It does not require loading external models, XML configs, or IR wav files separately:
* All neural amplifier models and cabinet profiles are **embedded internally as binary resources** inside the plugin binary.
* Simply copy the `.vst3` file to your plugin folder or run the `.exe` standalone app to start playing.

---

### We Want to Hear Your Mixes!
Midnight Rambler's dynamic behavior was calibrated directly from classic record listening tests. If you've recorded a song or mixed a track using this stompbox, we want to hear it!

Copy our contact email to share your links or feedback:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<p style="margin-top: 2rem; margin-bottom: 1rem;">If you would like to support our independent research and help us keep our plugins free, you can support us with Card, PayPal, or Cryptocurrency:</p>

<div>
  <a href="/support" class="rock-btn rock-btn-primary" style="display: inline-block; text-align: center;">Support the Lab (Ko-fi / Crypto) ☕</a>
</div>

<div class="print-footer">
  Official Website &amp; Manual: <a href="https://mainstaudiolabs.github.io/midnight-rambler.html" target="_blank">https://mainstaudiolabs.github.io/midnight-rambler.html</a>
</div>
