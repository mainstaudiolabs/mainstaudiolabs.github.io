---
title: "Main St '63 Spring – Free 1963 Fender Spring Reverb Unit (6G15) Plugin"
description: "Free VST3 and AU plugin that models the 1963 Fender outboard spring reverb unit (6G15) as a real circuit: 12AT7 input, 6V6 driver, two-spring tank and 12AX7 recovery. Windows, macOS and Linux."
---

<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>

<ProductHero id="main-st-63-spring" />

<div id="manual"></div>

This manual describes the use, the design and the technical specifications of the **Main St '63 Spring** reverb.

<div style="margin: 1.25rem 0 1.75rem; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Download Main St '63 Spring v1.0.0 (FREE) ⬇️</a>
</div>

---

## Welcome

**Main St '63 Spring** simulates the whole 1963 Fender outboard spring reverb unit (the 6G15) — the box with its own tubes and tank that players put between the guitar and the amp. It is not an impulse response and not a generic spring algorithm: the circuit is solved sample by sample.

- **Input stage:** a **12AT7** (V1A and V1B) with the **Dwell** control, which sets how hard the tank is driven.
- **Driver:** a **6V6** feeding the tank's input coil through its transformer, loaded by the coil itself. Push the Dwell and the driver and the transducer start to compress, just like the real unit.
- **Tank:** two dispersive springs (a short one and a long one), with the chirps, the "drip" and the decay of a real tank.
- **Recovery and mix:** the **12AX7** recovery stage, the **Tone** control, and the **Mixer**, which blends the reverb with the dry signal that runs through a cathode follower (V3B), as in the original.

**Fully functional and completely free.** All features are available without time limits or functional restrictions. An optional license key is available to support development and remove the brief welcome window.

---

## System Requirements

| | |
|---|---|
| **Windows** | 10 or later, 64-bit. Nothing else to install. |
| **macOS** | 10.13 High Sierra or later. Universal binary: runs natively on both Intel and Apple Silicon Macs. |
| **Linux** | x86_64, with glibc 2.35 or later (Ubuntu 22.04 and equivalents onward). |
| **Formats** | VST3 on all three systems; Audio Unit (AU) on macOS for Logic Pro and GarageBand. It is an effect for your DAW: there is no standalone application. |
| **CPU** | Light: about 4–5% of one core at 48 kHz with oversampling at 1× (STEREO adds about 7%). |

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

Once copied, run a plugin rescan in your DAW. You will find it listed as **Main St '63 Spring** by Main St Audio Labs.

---

![Main Interface](/MainSt63Spring.png)

## Two Ways to Use It

### 1. Like the real unit: on the guitar track, before the amp

This is how the '63 was used: guitar → reverb unit → amplifier. Insert **Main St '63 Spring** on your guitar track **before** your amp simulator (or send its output to a real amp). Leave **DRY on** and **STEREO off**: the unit passes the dry signal through its own tubes and blends the reverb with the **Mixer**, exactly like the original. Then the amp colors both together — that is the surf and classic rock sound.

The output uses the same voltage scale as the input, so it chains directly into the Main St 5F1 without changing levels.

### 2. As a studio reverb: on a send / bus

Put it on an aux / bus track and send guitars, drums or anything else to it:

1. Set **DRY** to **off**: the plugin then returns only the reverb, and the **Mixer** becomes the reverb level. The tank's return is quiet on the real unit, so with DRY off the plugin adds **+12 dB** of make-up: with Output at 0 and the Mixer at 10, the reverb comes back close to the level you send it. Fine-tune it with **Output**.
2. Turn **STEREO** on for width: the tank's short spring goes to the left and the long spring to the right.
3. Set **Input** to taste: line-level mixes are much hotter than a guitar, so the higher you go, the more the 12AT7 and the 6V6 compress — that is the tube grit. Lower it for a cleaner, more open reverb.

> **Why does the dry signal not disappear with the Mixer at 10?**  
> Because on the real unit it doesn't either: the Mixer is a 250 k pot between the reverb and the dry signal, and at 10 the dry still leaks through (we measured it at only about 5 dB below its maximum). That is part of the sound when the unit sits before an amp — and exactly why the plugin adds the **DRY** switch for bus use.

---

## Controls

- **Dwell (1–10):** How hard the input stage and the 6V6 drive the tank. Low settings give a light, clean wash; from about 8 up the driver and the transducer compress and the reverb gets thicker and more aggressive.
- **Mixer (1–10):** The blend between dry and reverb (with DRY off, the reverb level).
- **Tone (1–10):** The treble of the reverb return, from dark to the bright, splashy surf tone.
- **REVERB switch:** Turns the reverb on and off, like the unit's footswitch. With DRY on, the dry signal keeps passing through the unit. The reverb fades in and out over a few milliseconds to avoid clicks. The amber pilot light shows the state (the original has none).
- **CABLE (off, 330 pF, 680 pF, 2.2 nF):** The capacitance of the cable from the unit to the amp, plus the amp input. Longer cables take some brightness off the output. 330 pF (about 3 m) is the default; 2.2 nF is a very long or heavy cable.
- **DRY (on / off):** On, like the unit. Off, reverb only (for sends and buses), with +12 dB of make-up on the return.
- **STEREO (off / on):** Off, mono like the unit (the same signal on both sides). On, the two springs are split: the short one on the left, the long one on the right. The input is always summed to mono, as in the unit, so the reverb does not follow panning. Each side is level-matched to the mono unit.

Double-click a knob to return it to 5. Hold **Shift** while dragging for fine adjustment. Changing CABLE or STEREO rebuilds the circuit, so the tail that was sounding is cut.

---

## The Bottom Bar

- **Input / Output:** Digital trims in dB. Input sets how hot the signal enters the unit (see calibration below); Output is the final level.
- **Meters and readings:** `in` shows the peak voltage entering the unit (V pk); `out` shows the output level in dBFS.
- **Oversampling (1×, 2×, 4×):** Reduces aliasing in the input stage and the driver when they are driven hard. The tank always runs at its own internal rate. 1× is the default and what the model was validated at; 2× and 4× add 3 and 4 samples of latency, reported to your DAW.
- **INFO:** Version, how it's made, the website and your license key.

### Input calibration

The reverb responds to the **actual voltage** at its input jack, just like the amps: a hot humbucker drives the 6V6 harder than a vintage single coil. `0 dBFS` corresponds to **4.62 V peak** at the jack (a Focusrite Scarlett 3rd gen at minimum gain, INST input). Strum hard and adjust **Input** so the `in` reading lands in the range of your pickups:

| Pickup Type | Suggested Peak on Hard Strum |
|---|---|
| **Vintage Single-Coil** | **0.4 – 1.0 V** |
| **Hot Single-Coil** | **0.8 – 1.8 V** |
| **Vintage Humbucker** | **1.0 – 1.8 V** |
| **Hot / High-Output Humbucker** | **2.0 – 3.5 V** |
| **Active Pickups** | **1.5 – 2.5 V** |

---

## Frequently Asked Questions

**Why is the input mono?**  
The original unit is mono: one input, one tank. A stereo input is summed to mono. For width, use STEREO, which splits the tank's two springs.

**Why is there no pre-delay?**  
The real unit has none: the first reflection arrives when the springs deliver it. If you want a gap before the reverb on a bus, a delay plugin before it on the bus does the job.

**Why is the tail cut when I change CABLE, STEREO or OVERSAMPLING?**  
Those settings change the structure of the simulated circuit, so the plugin builds a new one and switches to it.

**I entered my license key, but the welcome window still appears.**  
It appears at most once per session and only without a key. If it keeps appearing after you saved your key, write to us and we will help.

---

## Credits & Trademarks

- Spring model after Välimäki, Parker and Abel (JAES 2010), Parker (EURASIP 2011) and Gamper, Parker and Välimäki (DAFx 2011).
- Tube mathematical models: Norman Koren (1996); grid current formulation: Dempwolf and Zölzer (DAFx 2011).
- Wave Digital Filters (WDF): `chowdsp_wdf` library by Jatin Chowdhury (BSD-3 License).
- Developed with the JUCE framework.
- Typefaces: Montserrat and IBM Plex Mono (SIL Open Font License 1.1).

*All product names, trademarks, and registered trademarks mentioned (including Fender and Focusrite) are property of their respective owners and are referenced solely for historical context and descriptive identification of the modeled analog equipment. Main St Audio Labs is an independent developer and has no affiliation, endorsement, or commercial sponsorship from these companies.*

<div style="margin: 1.75rem 0; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Download Main St '63 Spring v1.0.0 (FREE) ⬇️</a>
</div>

If you record something with this reverb, we want to hear it. Copy our email to send us the link:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<div class="print-footer">
  Official website &amp; manual: <a href="https://mainstaudiolabs.github.io/main-st-63-spring.html" target="_blank">https://mainstaudiolabs.github.io/main-st-63-spring.html</a>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>Other plugins</h2></div>

<PluginGrid exclude="main-st-63-spring" />
