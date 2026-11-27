---
title: "Photocell Vibe – Free Uni-Vibe Plugin (Lamp & Photocell Chorus / Vibrato, VST3 / AU)"
description: "Photocell Vibe is a free vibe plugin that models the late-1960s Uni-Vibe as a real circuit: four phase stages driven by an incandescent lamp and four photocells, the preamp, the chorus and vibrato mixer and the lamp driver. VST3 and AU for Windows, macOS and Linux."
---

<!-- 27/11/2026: página de Photocell Vibe (Uni-Vibe / Vibe Bro). Los nombres de marcas solo como descripción, con el aviso. -->

<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>

<ProductHero id="photocell-vibe" />

<div id="manual"></div>

This manual describes how to use **Photocell Vibe** and what each control does.

<div style="margin: 1.25rem 0 1.75rem; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/PhotocellVibe-v1.0.0" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Download Photocell Vibe v1.0.0 (FREE) ⬇️</a>
</div>

---

## Welcome

**Photocell Vibe** is the late-1960s Uni-Vibe, the lamp-and-photocell "vibe" behind the swirl of countless records, rebuilt from its circuit. It is not a phaser with a vibe preset: what makes the original unique is modeled as physics, and the rest is matched to the real circuit.

- **The lamp:** a small incandescent bulb, driven by the pedal's own oscillator and lamp driver. Its filament heats up fast and cools down slowly, so the light rises quickly and fades lazily: the famous lopsided throb.
- **The four photocells:** each one sees the lamp a little differently and lags behind it in its own way. They move the four phase stages.
- **The four phase stages:** not textbook all-pass filters but the real transistor stages, matched to an analysis of the original circuit, each with its own capacitor, so the notches sweep unevenly across the spectrum.
- **The preamp and the mixer:** clean with a normal guitar, with a hard, asymmetric edge when you hit it with a hot signal; **CHORUS** blends the dry and the shifted signal, **VIBRATO** keeps only the shifted one.

The lamp and the cells were tuned against published measurements of a real unit, so the sweep, its speed and its shape follow the pedal rather than a math function.

**Free, forever.** No license key, no time limit and nothing locked. If Photocell Vibe earns a place on your board, the [tip jar](https://payhip.com/b/7XO0F) keeps the lights on.

---

## System Requirements

| | |
|---|---|
| **Windows** | 10 or later, 64-bit. Nothing else to install. |
| **macOS** | 10.13 High Sierra or later. Universal binary: runs natively on both Intel and Apple Silicon Macs. |
| **Linux** | x86_64, with glibc 2.35 or later (Ubuntu 22.04 and equivalents onward). |
| **Formats** | VST3 on all three systems; Audio Unit (AU) on macOS for Logic Pro and GarageBand. It is an effect for your DAW: there is no standalone application. |
| **CPU** | Very light: on our test machine, about 0.5% of one core at 48 kHz at the default 2× oversampling (0.3% at 1×, 1.3% at 4×). |

---

## Installation

Copy the files to the appropriate folder for your operating system:

| Operating System | VST3 Format | AU (Audio Unit) Format |
|---|---|---|
| **Windows** | `C:\Program Files\Common Files\VST3\` | — |
| **macOS** | `~/Library/Audio/Plug-Ins/VST3/` | `~/Library/Audio/Plug-Ins/Components/` |
| **Linux** | `~/.vst3/` | — |

> **Note for macOS users:**  
> Because this is an independent project distributed without an Apple commercial developer certificate, macOS Gatekeeper may say the plugin is damaged or from an unidentified developer. It is neither: you will find two simple Terminal commands in the included `INSTALL.txt` file to authorize it in seconds.

Once copied, run a plugin rescan in your DAW. You will find it listed as **Photocell Vibe** by Main St Audio Labs.

---

## Where to Put It

### 1. In front of your amp (the default)

Put **Photocell Vibe** on the guitar track, before your amp simulator (or before the amp you re-amp through). The input is calibrated like our amps, to the voltage of a real guitar, so the preamp reacts to your picking like the pedal.

- **The classic swirl:** CHORUS, INTENSITY around 7, SPEED slow to medium.
- **Pitch wobble:** VIBRATO, INTENSITY up, SPEED to taste.
- **Into a dirty amp:** a vibe in front of a cranked amp is the classic pairing; VOLUME up pushes the amp a little harder.

### 2. After a drive

Like the pedal, it also sounds great after a fuzz or an overdrive. A hot signal from a fuzz drives the vibe's preamp into its own hard, asymmetric clipping, as on the real unit.

---

## Controls

- **VOLUME (0–10):** The level of the effect, like the pedal's volume pot. At the default settings the effect sits close to the bypass level.
- **CHORUS / VIBRATO:** The red and white key. **CHORUS** mixes the dry and the phase-shifted signal: the notches sweep and you get the classic swirl. **VIBRATO** keeps only the shifted signal: a pure pitch wobble.
- **INTENSITY (0–10):** How deep the lamp sweeps. Low, a gentle shimmer; high, the lamp swings from dark to bright and the cells sweep wide.
- **SPEED (0–10):** From 0.85 to 7.6 Hz, shown under the knob. On the real unit it lives on a foot pedal: automate it in your DAW to play it the same way. As in the pedal, the oscillator gets stronger as it gets faster, so slow speeds sweep a little less.
- **LAMP:** A window onto the real lamp of the model: it glows and fades with the bulb, the quick rise and the slow fade included. It goes dark when the effect is off.
- **I / O:** Turns the effect on and off, with a short fade so it never clicks.

Double-click a knob to return it to its default.

---

## The Bottom Panel

- **INPUT (−24 to +24 dB):** How hard the signal hits the pedal.
- **OUTPUT (−36 to +24 dB):** The final level.
- **LEVEL BOOST (0 to +18 dB):** Extra level for the effect only; the bypass is untouched. The original has no gain after its volume pot, so it starts at 0 dB.
- **WET BALANCE (0.30–1.00):** The chorus mix. **1.00** is the circuit as designed; lower values make the notches wider and shallower. It only acts in CHORUS.
- **OVERSAMPLING (1×, 2×, 4×):** **2×** is the default and plenty at 48 kHz; 4× is there for very hot signals. 2× and 4× add 3 and 4 samples of latency, reported to your DAW. Switching it while playing may click.
- **INFO:** What the controls do, the version, the website and the tip jar.

You can resize the window from its corner; it keeps its size with your project.

---

## Setting INPUT

The pedal responds to the **actual voltage** at its input jack, like our amps. `0 dBFS` corresponds to **4.62 V peak** at the jack (a Focusrite Scarlett 3rd gen at minimum gain, INST input). The vibe's preamp stays clean with a normal guitar and starts to clip at about **1.15 V peak** at the jack: hot humbuckers, active pickups or a booster in front push it there, just like the real pedal.

| Pickup type | Normal playing | Hard strum |
|---|---|---|
| **Vintage single coil** (Strat, Tele) | 0.05 – 0.10 V | **0.3 – 0.5 V** |
| **Hot single coil, P-90** | 0.10 – 0.20 V | **0.5 – 0.8 V** |
| **Humbucker** (PAF style) | 0.10 – 0.25 V | **0.6 – 1.0 V** |
| **Hot humbucker** | 0.20 – 0.40 V | **1.0 – 1.5 V** |
| **Active pickups** | 0.30 – 0.60 V | **1.5 – 2.5 V** |

If your interface gives you a hotter or quieter signal, use INPUT to bring it into that range, and OUTPUT to set the final level.

---

![Info Panel](/photocell-vibe-info.png)

## Info

Click **INFO** to open the info panel: what each control does, the version, the website and the tip jar. Click **BACK**, or anywhere outside the card, to close it.

---

## Frequently Asked Questions

**Is it a chorus or a vibrato?**  
Both, like the original. CHORUS mixes in the dry signal, so the sweeping notches give the swirl; VIBRATO is only the shifted signal, a pitch wobble. Neither is a modern chorus: there is no delay line, only four phase stages moved by light.

**Why doesn't the sweep sound perfectly even?**  
Because the lamp heats up faster than it cools down, and each photocell lags behind it in its own way. That uneven, breathing sweep is the sound of the original.

**Why is it mono?**  
Like the pedal, it is mono. A stereo input is summed to mono, and both outputs carry the same signal.

**Is it really free?**  
Yes. No key, no time limit, nothing locked. The tip jar is there if you want to support the lab.

---

## Credits & Trademarks

- An original model of the circuit by Main St Audio Labs, matched to a nodal analysis of the original phase stages and to published measurements of a real unit (Darabundit, Wedelich and Bischoff, DAFx-19).
- Typefaces: Oswald, Barlow Condensed and IBM Plex Mono (SIL Open Font License 1.1); Yellowtail (Apache License 2.0).
- Developed with the JUCE framework.

*All product names, trademarks, and registered trademarks mentioned (including Uni-Vibe, Univox, Shin-ei and Focusrite) are property of their respective owners and are referenced solely for historical context and descriptive identification of the modeled analog equipment. Main St Audio Labs is an independent developer and has no affiliation, endorsement, or commercial sponsorship from these companies.*

<div style="margin: 1.75rem 0; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/PhotocellVibe-v1.0.0" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Download Photocell Vibe v1.0.0 (FREE) ⬇️</a>
</div>

If you record something with Photocell Vibe, we want to hear it. Copy our email to send us the link:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<div class="print-footer">
  Official website &amp; manual: <a href="https://mainstaudiolabs.github.io/photocell-vibe.html" target="_blank">https://mainstaudiolabs.github.io/photocell-vibe.html</a>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>Other plugins</h2></div>

<PluginGrid exclude="photocell-vibe" />
