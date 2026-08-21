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

## 1. The Legend of the Tweed 5E3: The Holy Grail of Studio Recording

The **Fender Tweed Deluxe 5E3** (introduced in the 1950s) is universally revered by producers, engineers, and guitarists as the ultimate studio recording amplifier in the history of rock and roll. Its minimalist dual-6V6 tube circuit, paired with tube rectification and interactive controls, yields an organic, elastic compression and unparalleled touch sensitivity that larger stadium stacks simply cannot replicate.

### The Historic Footprint: Tones That Defined Rock History
The Tweed 5E3 is the secret weapon behind many of the most celebrated guitar tracks ever recorded:
* **The Rolling Stones (Golden Era):** Keith Richards' signature rhythmic crunch, open-G chime, and punchy overdrive on masterpieces like *Sticky Fingers* and *Exile on Main St.*.
* **Neil Young & Crazy Horse:** The roaring, explosive, harmonic-rich overdrive and endless feedback sustain that defined grunge and raw garage rock.
* **Eagles (*Hotel California*):** The iconic intertwined guitar duel and biting lead tones crafted by Don Felder and Joe Walsh in Criteria Studios.
* **Billy Gibbons (ZZ Top):** The greasy, harmonically saturated Texas crunch and pinch-harmonic snap that powered classic 70s boogie-rock.
* **The Faces & Ronnie Wood:** Fat, woody slide guitar and aggressive rhythm chords with immediate pick attack.
* **Larry Carlton & Mike Campbell (Tom Petty):** Crystalline edge-of-breakup and singing studio solos that sit effortlessly in any mix.

### Why Midnight Rambler Sets a New Standard
Unlike static impulse responses or generic digital modeling plugins that feel stiff and sterile, **Midnight Rambler** captures the living, breathing acoustic soul of a boutique-calibrated Tweed 5E3:
* **True Neural Dynamics:** Powered by cutting-edge Neural Amp Modeler (NAM) deep neural networks, responding seamlessly to your guitar's volume knob and picking dynamics.
* **Intelligent Input Protection & Noise Suppression:** Built-in adaptive Noise Gate (-58 dBFS) and pre-NAM -0.1 dBFS analog waveshaper limiter ensure pristine signal integrity with zero background hiss.
* **Mix-Ready Studio Suite:** Independent post-amp State-Variable TPT filters (Bass HP & Tone LP) combined with zero-latency 1971 Oxford 12" studio cabinet convolution (Royer R121 ribbon and Shure SM57).
* **Zero Latency & 100% Free:** No accounts, no dongles, ultra-low CPU consumption. Plug in, turn up, and sound like a classic record immediately.

---

## 2. Signal Flow & Audio Architecture

```text
[ GUITAR INPUT (Mono / Stereo) ]
       │
       ▼
 [ INTELLIGENT STEREO-TO-MONO SUMMING (Normalized Gain) ]
       │
       ▼
 [ ADAPTIVE NOISE GATE (1.5ms Attack · 35ms Hold · 140ms Release) ]
       │
       ▼
 [ INPUT GAIN DRIVE (Scale 1.0 to 10.0 -> -18 dB to 0 dB) ]
       │
       ▼
 [ ANALOG WAVESHAPER LIMITER (-0.1 dBFS Hyperbolic Tangent) ]
       │
       ▼
 [ 5E3 NEURAL TUBE PREAMP (Dual Channel: EDGE / CRANKED) ]
       │
       ▼
 [ STATE-VARIABLE TPT FILTERS (BASS HP 20-300Hz · TONE LP 1k-20kHz) ]
       │
       ▼
 [ ZERO-LATENCY CABINET CONVOLUTION (1971 Oxford 12": WARM / SHARP / BLEND) ]
       │
       ▼
 [ MASTER GAIN (+18 dB Clean Output Boost) ]
       │
       ▼
 [ STEREO OUTPUT ]
```

---

## 3. Control Guide & Parameter Specifications

The pedal features intuitive, analog-calibrated controls designed to feel like operating vintage physical gear:

### 🎛️ 1. VOLUME / GAIN (Input Drive)
* **Function:** Controls input level fed into the neural tube modeling stage.
* **Range:** Calibrated analog scale from `1.0` to `10.0` (Default: `7.0`).
* **Response Curve:**
  * **`1.0` (-18.0 dB):** Crystal clean tone with massive dynamic headroom.
  * **`5.0` (-10.0 dB):** Warm clean tone that breaks up organically on strong pick attack.
  * **`7.0` (-6.0 dB):** The dynamic sweet spot — crunchy rhythmic chords and blues bite.
  * **`10.0` (0.0 dB):** Nominal capture level delivering lush power-tube compression without digital harshness.

### 🎛️ 2. BASS (HP Filter · 20 Hz to 300 Hz)
* **Function:** A post-amp State-Variable TPT High-Pass Filter designed to eliminate low-end muddiness and tighten rhythm tracks.
* **Range:** `20.0 Hz` to `300.0 Hz` (Logarithmic taper). At 20 Hz the filter is wide open.

### 🎛️ 3. TONE (LP Filter · 1 kHz to 20 kHz)
* **Function:** A post-amp State-Variable TPT Low-Pass Filter designed to tame high-end fizz and control top-end presence.
* **Range:** `1.0 kHz` to `20.0 kHz`. Rolling it back delivers a warm, woody, mid-rich vintage character.

### 🎛️ 4. MASTER (Master Volume)
* **Function:** Clean, linear output level control.
* **Range:** Analog scale from `1.0` to `10.0` (Default: `7.0` = `0.0 dB` Unity Gain, Max: `10.0` = `+18.0 dB`).
* **Response (Continuous Real-Amp Taper):**
  * **`1.0` (-36.0 dB):** Soft bedroom practice level, audible immediately without dead zones.
  * **`7.0` (0.0 dB):** Standard nominal unity gain.
  * **`10.0` (+18.0 dB):** Massive clean volume boost for low-output vintage single-coil pickups or pushing downstream effects.

### 🔀 5. CHANNEL (Dual Amp Mode Selector)
Switches between two distinct, high-resolution boutique neural captures:
1. **EDGE (Breakup):** Captures the magical threshold of tube breakup with hyper-dynamic touch response. Responds instantly to guitar volume pot adjustments and picking intensity. Includes an internal +2.0 dB output level compensation to match perceived loudness with the cranked mode.
2. **CRANKED (Rock 'N' Roll):** Maximum volume Tweed saturation with lush power-tube compression, creamy harmonics, and singing sustain.

### 📻 6. MIC / CAB (Cabinet Impulse Convolution)
Switches between three curated 1971 Oxford 12" speaker responses using real-time zero-latency convolution:
1. **WARM (Royer R121 Ribbon):** Thick, full-bodied tone with smooth top-end and rich low-mids, ideal for greasy rhythms and slide guitar.
2. **SHARP (Shure SM57 Dynamic):** Classic rock bite with focused upper-mid punch that cuts effortlessly through dense mixes.
3. **BLEND (60/40 Custom Mix):** The ultimate studio pairing (60% SM57 + 40% R121) delivering balanced bite, depth, and three-dimensional realism.

### 🎛️ 7. STANDBY (Mute / 0% CPU Switch)
* **Function:** Replicates a physical amplifier standby switch, completely muting the audio path and reducing CPU consumption to **0%** immediately.

### 🖼️ 8. Dynamic Background Skin (Drag & Drop)
* Drag and drop any image file (`.jpg`, `.jpeg`, or `.png`) directly from your file explorer onto the plugin interface to customize its visual appearance in real time.

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
