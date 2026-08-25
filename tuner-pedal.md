<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>

# Vintage Tuner Stompbox: User Manual

**Version 1.0.1 · Stompbox Series #02 · Analog Chromatic Tuner for Guitar & Bass**  
*Developed by Main St Audio Labs · Open Source DSP Engine (MIT License)*

<img :src="'/TunerPedal.png'" alt="Vintage Tuner Stompbox GUI" style="max-height: 380px; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 8px;" />

<div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin: 1.25rem 0 1.75rem 0;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/vintage-tuner-v1.0.1" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 240px; padding: 0.6rem 1.4rem; text-decoration: none;">Download Plugin (FREE v1.0.1) ⬇️</a>
  <a href="https://github.com/mainstaudiolabs/pitch-detector-tuner" target="_blank" class="rock-btn rock-btn-secondary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 200px; padding: 0.6rem 1.2rem; text-decoration: none;">View Engine on GitHub (MIT) 🐙</a>
</div>

---

## 1. 🌟 Engineered for Stage and Studio

The **Vintage Tuner Stompbox** brings the visual warmth and ballistic precision of classic analog needle tuners straight to your DAW and live stage setup.

Built with a photorealistic retro chassis and cutting-edge DSP developed by **Main St Audio Labs**, it delivers rock-solid needle response tracking your tuning pegs smoothly without jitter, false octave jumps, or erratic screen flickering — performing effortlessly on acoustic guitars, electric guitars, drop tunings, and 5-string basses.

---

## 2. ⚡ Insert on Every Track: True 0.0% CPU Load

One of the greatest workflow advantages of Vintage Tuner Stompbox is its **True Zero-CPU Passthrough** architecture:

* **0.0% CPU When Window is Closed:** When you close the plugin editor in your DAW or turn the `POWER` switch off, the mathematical analysis engine is immediately suspended and audio passes through cleanly without consuming a single CPU cycle.
* **Keep a Tuner on Every Track:** You can leave the tuner instantiated across **all guitar and bass tracks in your session** ready for instant use without bogging down your CPU or session performance.
* **Safety Auto-Unmute:** Tuned your instrument on `MUTE` and closed the window to start tracking or mixing? The plugin automatically unmutes output so your tracks never stay accidentally silenced.

---

## 3. 🎯 Dual Pitch DSP Engine for Guitar & Bass (Open Source)

The core pitch detection engine is powered by our in-house mathematical library, released as open-source under the **MIT License** on GitHub ([pitch-detector-tuner](https://github.com/mainstaudiolabs/pitch-detector-tuner)):

### 🔀 Two Real-Time Selectable Modes:
* **MPM Mode (McLeod Pitch Method):** Tailored for electric and acoustic guitars. Instantly captures initial pick transients and responds with lightning speed to open chords and fast single-note runs.
* **YIN Mode (De Cheveigné & Kawahara):** Optimized for electric bass (4 and 5 strings), 7/8-string guitars, and dropped tunings (*Drop D, Drop C, etc.*). Tracks fundamental frequencies down to **$B_0$ (Low B at 30.87 Hz / 25 Hz)** with rock-solid stability.

### 🛡️ Smooth, Accurate, and Musical Ballistics:
* **Anti-Jitter Exponential Smoothing:** Direct first-order exponential smoothing with a calibrated center deadzone ($\pm 0.6\text{ cents}$) gives you clear, unambiguous tuning direction without distracting twitching.
* **Decay Hold Window (~0.6 s):** When a plucked string fades out, the needle holds its last measured pitch position and glides gently back to center instead of snapping to zero abruptly.
* **Dynamic AGC (+41 dB Boost):** Amplifies weak vintage single-coil pickups and decaying notes up to $+41\text{ dB}$ ($120\times$) without clipping.
* **Intelligent Mono-to-Stereo Routing:** Automatically mirrors single-channel audio interface inputs (Input 1) across both Left and Right headphone/monitor channels.

---

## 4. 🎛️ Quick Control Guide

```
+-------------------------------------------------------------+
|                      [ ANALOG VU METER ]                    |
|                 b FLAT     [-50 .. 0 .. +50]     SHARP #    |
|                                                             |
|   [ MODE ]               [ NOTE DISPLAY ]         [ A4 REF ]|
|   MPM / YIN                E2 · 82.4 Hz           440 Hz    |
|                            -0.5 cents                       |
|                                                             |
|   [ MUTE ]                                        [ POWER ] |
|   ON / OFF                                        ON / OFF  |
+-------------------------------------------------------------+
```

* **NEEDLE VU METER:** Displays precise cents deviation (`-50` to `+50 cents`). The center target band ($\pm 3\text{ cents}$) glows bright lime green when locked in tune.
* **MODE (MPM / YIN):** Toggles between guitar-focused (MPM) and bass/low-register (YIN) algorithms.
* **A4 REFERENCE (432 Hz - 448 Hz):** Calibrates standard concert pitch. **Double-click** to reset instantly to **440.0 Hz**.
* **MUTE (Silent Tuning):** Cuts audio passthrough to monitors/amps for silent stage and studio tuning.
* **POWER:** Master on/off switch. In OFF mode, the needle rests and audio passes in pure bypass (0% CPU).
* **Custom Skins (Drag & Drop):** Drag and drop any `.png` or `.jpg` image directly onto the pedal to customize the enclosure or meter faceplate.

---

## 5. 💡 Best Practices: Signal Chain Placement & Pro Studio Tips

To get the most rock-solid tuning accuracy from **Vintage Tuner Stompbox**, keep these tracking and recording guidelines in mind:

### 🥇 Always Place in Slot #01 (First in Your FX Chain)
* **Direct & Pure Signal (Clean DI):** The tuner needs the unadulterated raw instrument signal directly from your interface or pickups before any other processor.
* **Avoid Preceding Effects:**
  * **Distortion, Overdrive, and Fuzz** add harmonic saturation that masks the fundamental pitch.
  * **Chorus, Phasers, Flangers, and Vibrato** modulate pitch over time, causing the needle to sway as it tracks the effect's modulation LFO.
  * **Delays and Reverbs** superimpose echoes and acoustic decay of previous notes onto the note you are currently tuning.
* **Clean Stage Mute:** By placing the stompbox first, toggling `MUTE` silences the signal before high-gain amplifiers, providing true dead-quiet silence between songs without amplifier hum.

### 🎸 Playing Techniques for Surgical Pitch Tracking:
* **Use the Neck Pickup:** The neck pickup captures more fundamental energy and fewer harsh bridge harmonics. Rolling off the instrument's tone knob slightly creates a pure, sinusoidal wave that lets the algorithm lock in instantly.
* **Gentle, Consistent Attack:** Avoid striking the string violently with the pick, as intense transient string tension creates temporary pitch drift (sharp initial spike). Pluck gently near the 12th fret with your thumb or a smooth pick stroke.
* **For 5-String Bass ($B_0$ @ 25 Hz):** Ensure **YIN** mode is active for authoritative sub-bass fundamental tracking. You can also tune using the 12th-fret natural harmonic for instantaneous needle stabilization.

---

## 6. ⚙️ Recommended Buffer Settings

* **Live Tracking & Stage:**
  * Set your interface buffer to **128 samples @ 48 kHz (~2.6 ms)** using native ASIO (Windows) or CoreAudio (macOS) drivers for immediate, zero-latency monitoring.
* **Mixing Sessions:**
  * Buffer sizes of **256 to 512 samples** provide silky playback in heavy plugin chains without sacrificing tracking accuracy.

---

## 7. 🔬 Under the Hood: DSP Engineering & Real-Time Safety

For audio engineers and DSP developers, the plugin was developed in **Modern C++ / JUCE** following *Main St Audio Labs Golden Standards*:

* **Asynchronous Audio Architecture:** The real-time audio thread executes in `<0.5 microseconds`, pushing samples into a lock-free circular ring buffer (16,384 samples). The mathematical autocorrelation analysis runs asynchronously in a dedicated worker thread every 10 ms (~100 FPS), ensuring **zero audio dropouts or clicks**.
* **Zero Dynamic Heap Allocations:** All DSP memory and analysis buffers are strictly pre-allocated in `prepareToPlay()`.
* **Denormal Number Protection (`ScopedNoDenormals`):** Eliminates CPU spikes during acoustic silence.
* **100% Autonomous Portability with `BinaryData`:** All high-definition textures and assets are compiled directly into the plugin binary.
* **Open Source Repository:** The underlying mathematical pitch detection algorithms are hosted on GitHub under the MIT License:  
  👉 [https://github.com/mainstaudiolabs/pitch-detector-tuner](https://github.com/mainstaudiolabs/pitch-detector-tuner)

---

## 8. 💻 Compatibility & Downloads

| Operating System | Formats | Requirements |
| :--- | :--- | :--- |
| **Windows** | VST3 (64-bit), Standalone (`.exe`) | Windows 10 / 11 (64-bit) |
| **macOS** | VST3, AU (`.component`), Standalone (`.app`) | macOS 10.13+ (Universal: Apple Silicon M1/M2/M3 & Intel) |
| **Linux** | VST3 (64-bit), Standalone binary | Ubuntu 22.04+ or compatible 64-bit distribution |

* **Installation:** Extract the downloaded archive and place the `.vst3` bundle into your default plugin folder (e.g. `C:\Program Files\Common Files\VST3\` on Windows).

<div style="margin: 1.5rem 0; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/vintage-tuner-v1.0.1" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Download Vintage Tuner Stompbox (FREE) ⬇️</a>
</div>

---

## 9. 📄 License & Terms

* **Vintage Tuner Stompbox** is distributed as **Freeware** under the Main St Audio Labs EULA for personal and commercial musical productions.
* The DSP core is **Open Source (MIT License)** available at [pitch-detector-tuner](https://github.com/mainstaudiolabs/pitch-detector-tuner).

---

### We want to hear your feedback!
Send us your thoughts, questions, or ideas at:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<p style="margin-top: 2rem; margin-bottom: 1rem;">If you wish to support our independent research and help keep our tools free, you can support us via Card, PayPal, or Crypto:</p>

<div>
  <a href="/support" class="rock-btn rock-btn-primary" style="display: inline-block; text-align: center;">Support the Lab (Ko-fi / Crypto) ☕</a>
</div>
