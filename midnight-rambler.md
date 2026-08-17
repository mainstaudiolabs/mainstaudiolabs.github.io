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

## 1. Design Philosophy: The Tweed 5E3 Soul in a Pedal

**Midnight Rambler** is an amplifier simulation in virtual stompbox format, powered by state-of-the-art Neural Amp Modeler (NAM) technology and modeled after the iconic **Tweed Deluxe 5E3** — the legendary circuit that defined the raw, gritty guitar sound of the late '60s and early '70s.

### The Sound of an Era
This pedal captures that unmistakable vintage Tweed attitude:
* **The Rolling Stones (Late '60s / Early '70s):** Keith Richards' open-G chime and gritty rhythm breakup (*Sticky Fingers*, *Exile on Main St.*).
* **The Faces / Ronnie Wood:** The greasy, fat, mid-forward slide and chord work.
* **Neil Young:** That raging, explosive Tweed harmonic overdrive and rich sustain.
* **Billy Gibbons (ZZ Top):** Texas grease, harmonic pinch bite, and tight low-end snap.
* **Ed King (Lynyrd Skynyrd):** The crystalline out-of-phase Stratocaster Tweed tone on the timeless intro of *Sweet Home Alabama*.

### Mix-Ready Dynamic Calibration
Unlike raw generic models that can sound either too boomy or harsh, Midnight Rambler features meticulously tuned post-amp state-variable TPT filters (Bass & Tone cut) and calibrated gain staging. It sits instantly in a multi-track production without fighting the bass guitar or cymbals.

### Ultra-Low CPU Consumption
Featuring 0% idle overhead and near-zero latency, only one neural engine instance is active at any time, allowing multiple instances across your session without straining your CPU.

---

## 2. Control Guide

The pedal features intuitive, analog-calibrated controls designed to feel like operating vintage physical gear:

### 🎛️ 1. VOLUME / GAIN (Gain / Drive)
* **Function:** Sets the input drive sent into the neural tube modeling stage.
* **Range:** Calibrated analog scale from `1.0` to `10.0` (Default: `7.0`).
* **Response:**
  * **`1.0` (-18.0 dB):** Crystal clean tone with massive dynamic headroom.
  * **`5.0` (-10.0 dB):** Warm clean tone that breaks up organically when picking hard.
  * **`7.0` (-6.0 dB):** The dynamic sweet spot — crunchy rhythmic chords and blues bite.
  * **`10.0` (0.0 dB):** Maximum unboosted capture level, delivering rich tube saturation and sustain without digital harshness.

### 🎛️ 2. BASS (Bass Cut - HP Filter)
* **Function:** A post-amp State-Variable TPT High-Pass Filter designed to tighten low-end response.
* **Range:** `20.0 Hz` to `300.0 Hz` (Logarithmic taper).
* **Usage:** Shaves off unnecessary sub-bass rumble to keep the rhythm tracks tight and punchy. At 20 Hz the filter is wide open.

### 🎛️ 3. TONE (Tone Cut - LP Filter)
* **Function:** A post-amp State-Variable TPT Low-Pass Filter designed to control top-end presence.
* **Range:** `1.0 kHz` to `20.0 kHz`.
* **Usage:** Tames digital fizz and harsh high frequencies. Higher values deliver glassy clarity, while rolling it back provides warm, woody, mid-rich vintage character.

### 🎛️ 4. MASTER (Master Volume)
* **Function:** Clean, linear output level control.
* **Range:** Analog scale from `1.0` to `10.0` (Default: `7.0` = `0.0 dB` Unity Gain, Max: `10.0` = `+18.0 dB`).
* **Response (Continuous Real-Amp Taper):**
  * Each step increases level by a uniform `+6.0 dB`.
  * **`1.0` (-36.0 dB):** Soft bedroom practice level, immediately audible without dead zones.
  * **`7.0` (0.0 dB):** Standard nominal unity gain.
  * **`10.0` (+18.0 dB):** Massive clean volume boost for low-output vintage single-coil pickups or pushing downstream effects.

### 🔀 5. CHANNEL (Dual Amp Mode Selector)
Switches between two distinct, high-resolution boutique neural captures:
1. **EDGE (Breakup):** Umbral breakup capture with hyper-dynamic touch response. Responds instantly to guitar volume pot adjustments and picking intensity. Includes an internal +2.0 dB output level compensation to match perceived loudness with the cranked mode.
2. **CRANKED (Rock 'N' Roll):** Maximum volume Tweed saturation with lush power-tube compression, creamy harmonics, and singing sustain.

### 📻 6. MIC / CAB (Cabinet Impulse Convolution)
Switches between three curated speaker cabinet responses using real-time zero-latency convolution:
1. **WARM (Royer R121 Ribbon):** Thick, full-bodied tone with smooth top-end and rich low-mids, ideal for greasy rhythms and slide guitar.
2. **SHARP (Shure SM57 Dynamic):** Classic rock bite with focused upper-mid punch that cuts effortlessly through dense mixes.
3. **BLEND (60/40 Custom Mix):** The ultimate studio pairing (60% SM57 + 40% R121) delivering balanced bite, depth, and three-dimensional realism.

### 🎛️ 7. STANDBY (Mute / 0% CPU Switch)
* **Function:** Replicates a physical amplifier standby switch, completely muting the audio path and reducing CPU consumption to **0%** immediately.

### 🖼️ 8. Dynamic Background Skin (Drag & Drop)
* You can drag and drop any image file (`.jpg`, `.jpeg`, or `.png`) directly from your file explorer onto the plugin interface to customize its visual appearance in real time.

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
