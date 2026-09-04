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

**Version 1.2.0**

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
Featuring 0% idle overhead and zero added latency, only one neural engine instance is active at any time, allowing multiple instances across your session without straining your CPU.

Version 1.1.0 went further: the cabinet convolution now does half the work for a
result that is identical sample for sample, its impulse responses were trimmed of
inaudible tail, and the built-in tuner uses a small fraction of the CPU it used
to while reacting in half the time.

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

### 🔀 5. CHANNEL (Three Positions — new in 1.2.0)

The three positions are the **same amplifier** with the instrument volume
progressively further up — not three different amps.

1. **CLEAN:** The 5E3 with the unused channel wide open, the classic trick for the
   tightest clean this circuit gives. Stays clear, and only starts to grit when you
   dig in.
2. **EDGE (Breakup):** The threshold of breakup, with hyper-dynamic touch response.
   Reacts instantly to your guitar's volume pot and to picking intensity.
3. **CRANKED (Rock 'N' Roll):** Instrument volume all the way up, with power-tube
   compression, creamy harmonics and singing sustain.

> **Three ways to switch.** The most direct is to **click the label** of the
> position you want — it goes straight there, without passing through the ones in
> between. You can also **drag the lever** or use the **mouse wheel** over it. A
> plain click on the lever advances one position.

> **Level matching.** The three channels are trimmed to the same measured level,
> using real signal rather than the loudness figure declared in the model files —
> which, measured, turned out to be inverted. The match cannot be perfect: a valve
> stage compresses differently depending on how hard you hit it, so around a
> decibel of difference remains depending on how you play. CLEAN will sound a
> little smaller than the other two, exactly as it does on a real amplifier.

### 📻 6. MIC / CAB (Cabinet Impulse Convolution)

A **1971 Fender Twin Reverb with its original Oxford 12T6-10 speakers**, captured
by Nathaniel Dahman from his own amplifier, with both microphones at the centre of
the cap. Real-time, zero-latency convolution.

1. **WARM (Royer R-121 ribbon):** Full-bodied, with a smooth top end and rich
   low-mids. Ideal for greasy rhythm work and slide.
2. **BLEND (70/30):** 70 % R-121 + 30 % SM57, phase-aligned before summing. It
   lands exactly between the other two, so the selector reads as a single ladder
   from dark to bright.
3. **SHARP (Shure SM57 dynamic):** Classic bite, with focused upper-mid punch that
   cuts through a dense mix.

> The two microphones sit a few samples apart, because a ribbon capsule is deeper
> in the body than a dynamic. Summing them as they came would have dropped a comb
> notch right in the cabinet's bite, so the blend is aligned first. The selector
> is operated the same three ways as CHANNEL.

### ℹ️ 7. INFO (Credits Panel — new in 1.2.0)
* The **INFO** button, top left, opens a panel with the plugin version, the
  session's sample rate and buffer size, and the credits for the content. Click
  anywhere on the panel to close it.

### 🎛️ 8. STANDBY (Mute / 0% CPU Switch)
* **Function:** Replicates a physical amplifier standby switch, completely muting the audio path and reducing CPU consumption to **0%** immediately.

### 🖼️ 9. Dynamic Background Skin (Drag & Drop)
* You can drag and drop any image file (`.jpg`, `.jpeg`, or `.png`) directly from your file explorer onto the plugin interface to customize its visual appearance in real time.

### 📊 10. INPUT Meter
This is an amplifier: its entire character comes from how hard you drive it. Two
decibels more isn't "louder" — it's *more compression and more harmonics*.

The bar at the bottom left shows what actually reaches the neural stage, measured
after the GAIN control:

* **Green** — you're below the range where the amp starts working. Common with a
  guitar plugged straight into a typical interface. Raise your interface's input
  gain before reaching for GAIN.
* **Gold** — the working range. This is where a 5E3 blooms.
* **Red** — near the ceiling. Fine for maximum saturation, but there's nothing
  above it.

The thin mark on the scale sits at −18 dBFS, roughly where the amp starts to
respond in earnest.

> It reads **peak**, not average level: what pushes an amp into compression are
> the transients of your pick attack, not the sustained energy. A track sitting
> at −20 dBFS average with −3 dBFS peaks is already working hard.

### 🔍 11. Resizable Window
Drag any corner to resize, or **right-click** the background for preset sizes
between 75% and 200%. The proportions stay locked. Your choice is saved with the
project, and the plugin reopens the way you left it.

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

### 🎚️ Session Sample Rate

The amplifier was captured at **48 kHz**, and that is the recommended rate.
**44.1 kHz** works just as well — the difference is negligible in practice, and
between them they cover almost every rock and guitar session.

Above 48 kHz it's a different story. The neural model's response is defined in
samples, not in seconds, so it scales with the sample rate: at 96 kHz the amp's
entire voicing shifts up by a full octave and stops sounding like the 5E3 that
was captured. The plugin will tell you — a small warning appears next to the
INPUT meter showing how far off you are, in semitones.

Work at 48 or 44.1 kHz.

---

## 4. System Requirements & Distribution

### 🖥️ System Requirements
* **Operating Systems**:
  * **Windows**: Windows 10 or Windows 11 (64-bit).
  * **macOS**: macOS 10.13 or newer (supports both Intel and Apple Silicon natively).
  * **Linux**: Ubuntu 22.04 or compatible 64-bit distribution.
* **Processor (CPU)**: Any 64-bit x86 processor. Midnight Rambler is built for the baseline instruction set and does **not** require AVX or AVX2, so it runs on older machines that some neural amp plugins refuse to load on. Apple Silicon is supported natively.
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
* **CPU Compatibility**: Not an issue here — the plugin is built for the baseline 64-bit instruction set and does not require AVX2. If it fails to scan, the cause is elsewhere on this list.
* **Scan Path**: Verify that your DAW is scanning the folder where you placed the `.vst3` file (e.g. `C:\Program Files\Common Files\VST3\` on Windows).

### ❌ Standalone App shows "Unidentified Developer" warning (macOS)
* **Explanation**: Because the plugin binaries are built via automated CI and not notarized with a paid Apple Developer Account, macOS may prevent them from launching.
* **Solution**: Go to **System Settings > Privacy & Security**, scroll down to the Security section, and click **Open Anyway** next to the warning for Midnight Rambler. Alternatively, open Terminal and run:
  `xattr -cr /path/to/MidnightRambler.app`

### ❌ Crackling, pops, or high latency in Standalone mode
* **Audio Drivers**: Ensure you are using the native low-latency driver for your audio interface (**ASIO** on Windows, **CoreAudio** on macOS, **JACK** or **ALSA** on Linux).
* **Buffer Size**: A buffer size of **128** or **256 samples** is recommended. Going lower than 64 samples might cause CPU spikes and audio crackle depending on your computer's performance.

---

### Credits

* **Amp models** — Daniel Nguyen ([tone3000.com/danielnguyen](https://www.tone3000.com/danielnguyen)). Captures of a 1957 Tweed Deluxe hand-wired reissue, used with permission.
* **Cabinet IRs** — Nathaniel Dahman ([DahmanMusic.com](https://www.dahmanmusic.com/)). Captures of his own 1971 Twin Reverb, used with permission.
* **Testing & tone** — Claudio Crespino. Testing on real hardware, and the long arguments about tone.

Model and IR authors provided the captures. All selection, voicing and
level-matching decisions are Main St Audio Labs'.

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
