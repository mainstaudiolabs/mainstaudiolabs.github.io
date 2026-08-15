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
