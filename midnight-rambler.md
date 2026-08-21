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

<img :src="'/midnight.png'" alt="Midnight Rambler GUI" style="max-height: 280px; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 6px;" />

---

## 1. The Tweed 5E3 Soul: A Studio Legend

The **Fender Tweed Deluxe 5E3** (1950s) is widely regarded by producers and guitarists as the ultimate studio recording amplifier in rock history. Its simple 6V6 tube circuit delivers an unmistakable organic compression, warm harmonics, and touch-sensitive response that larger stadium amps cannot replicate.

From Keith Richards' classic Rolling Stones rhythm crunch (*Sticky Fingers*, *Exile on Main St.*) and Neil Young's roaring grit to Billy Gibbons' Texas blues bite and the legendary guitar tracks on *Hotel California*, the Tweed 5E3 shaped generations of iconic records.

**Midnight Rambler** captures this exact vintage attitude:
* **True Tube Feel:** State-of-the-art Neural Amp Modeler (NAM) engine that cleans up or breaks into crunch with your guitar's volume knob.
* **Ultra-Low CPU:** Engineered for maximum efficiency with 0% idle overhead.
* **Mix-Ready Tone:** Integrated high-pass and low-pass studio filters paired with custom 1971 Oxford 12" cabinet impulse responses (Shure SM57 & Royer R121).

---

## 2. Quick Control Guide

The plugin features 4 intuitive main knobs and 3 rotary switches:

### 🎛️ Main Knobs
* **VOLUME / GAIN (`1.0` to `10.0`):** Controls the input drive feeding the tube engine. Lower settings provide sparkling clean headroom; higher settings deliver thick vintage saturation and singing sustain.
* **BASS (HP Filter · `20 Hz` to `300 Hz`):** Tightens the low-end and eliminates unwanted sub-bass rumble, keeping rhythm tracks punchy.
* **TONE (LP Filter · `1.0 kHz` to `20.0 kHz`):** Controls top-end presence and smooths out harsh frequencies for a warm, woody character.
* **MASTER (`1.0` to `10.0`):** Clean linear output level with up to `+18 dB` of clean boost headroom.

### 🔀 Selectors & Switches
* **CHANNEL (Edge / Cranked):**
  * **EDGE:** Dynamic edge-of-breakup tone with ultra-sensitive pick response.
  * **CRANKED:** Rich, saturated vintage overdrive with thick power-tube compression.
* **MIC / CAB (Speaker Cabinet IR):**
  * **WARM:** Royer R121 ribbon microphone for a smooth, body-rich vintage response.
  * **SHARP:** Shure SM57 dynamic microphone with bite and focused upper-mid punch.
  * **BLEND:** Curated 60/40 studio combination (SM57 + R121) for balanced depth and realism.
* **STANDBY (Play / Mute):** Instantly mutes audio output and drops CPU usage to **0%**.
* **Dynamic Background:** Drag and drop any image file (`.jpg` or `.png`) directly onto the plugin window to change its skin on the fly.

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
* **Operating Systems**:
  * **Windows**: Windows 10 or Windows 11 (64-bit).
  * **macOS**: macOS 10.13 or newer (supports both Intel and Apple Silicon natively).
  * **Linux**: Ubuntu 22.04 or compatible 64-bit distribution.
* **Processor (CPU)**: Must support **AVX2** instruction sets (Intel Core 4th Gen / AMD Ryzen or newer) on Windows and Linux to calculate the mathematical models in real-time. Apple Silicon processors are fully supported natively.
* **RAM**: 4 GB minimum.
* **Audio Card (Standalone mode)**: Audio interface with low-latency drivers (native **ASIO** on Windows; **CoreAudio** on macOS; **JACK** or **ALSA** on Linux).

### 📦 Distribution (All-in-One)
**Midnight Rambler is 100% self-contained.** It does not require loading external models, XML configs, or IR wav files separately:
* All neural amplifier models and cabinet profiles are **embedded internally as binary resources** inside the plugin binary.
* **Windows**: Simply copy the `.vst3` file to your plugin folder (typically `C:\Program Files\Common Files\VST3\`) or run the `.exe` standalone app.
* **macOS**: Copy the `.vst3` or `.component` (AU) to your plugin folder (typically `/Library/Audio/Plug-Ins/VST3/` or `/Library/Audio/Plug-Ins/Components/`) or run the `.app` standalone app.
* **Linux**: Copy the `.vst3` file to your plugin folder (typically `~/.vst3/` or `/usr/lib/vst3/`) or run the standalone binary.

---

## 5. Troubleshooting

### ❌ The VST3 does not appear in the DAW or fails to scan
* **Missing C++ Redistributable (Windows)**: Although the plugin is statically compiled, some Windows installations might miss basic runtime components. Download and install the official [Microsoft Visual C++ Redistributable 2015-2022 (x64)](https://aka.ms/vs/17/release/vc_redist.x64.exe).
* **CPU Compatibility (AVX2)**: Ensure your processor supports **AVX2** instructions (typically Intel Core 4th Gen / AMD Ryzen or newer). The underlying NAM neural engine requires AVX2 to compute neural networks in real-time on Windows and Linux. If your CPU lacks AVX2, the plugin will not load.
* **Scan Path**: Verify that your DAW is scanning the folder where you placed the `.vst3` file (e.g. `C:\Program Files\Common Files\VST3\` on Windows).

### ❌ Standalone App shows "Unidentified Developer" warning (macOS)
* **Explanation**: Because the plugin binaries are built via automated CI and not notarized with a paid Apple Developer Account, macOS may prevent them from launching.
* **Solution**: Go to **System Settings > Privacy & Security**, scroll down to the Security section, and click **Open Anyway** next to the warning for Midnight Rambler. Alternatively, open Terminal and run:
  `xattr -cr /path/to/MidnightRambler.app`

### ❌ Crackling, pops, or high latency in Standalone mode
* **Audio Drivers**: Ensure you are using the native low-latency driver for your audio interface (**ASIO** on Windows, **CoreAudio** on macOS, **JACK** or **ALSA** on Linux).
* **Buffer Size**: A buffer size of **128** or **256 samples** is recommended. Going lower than 64 samples might cause CPU spikes and audio crackle depending on your computer's performance.

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
