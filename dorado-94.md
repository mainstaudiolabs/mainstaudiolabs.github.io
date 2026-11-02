---
title: "Dorado '94 – Free Klon Centaur Overdrive Plugin (1994 Transparent Overdrive, VST3 / AU)"
description: "Dorado '94 is a free overdrive plugin that models the 1994 Klon Centaur as a real circuit, part by part: the input buffer, the gain section with germanium diodes and the clean blend, the treble control on charge-pump rails and the buffered bypass. VST3 and AU for Windows, macOS and Linux."
---

<!-- 02/11/2026: página del Dorado '94 (Klon Centaur). Los nombres de marcas solo como descripción, con el aviso.
     Mientras soon: true en plugins.js no hay botones de descarga; al publicar, agregarlos como en las otras páginas. -->

<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>

<ProductHero id="dorado-94" />

<div id="manual"></div>

This manual describes how to use **Dorado '94** and what each control does.

---

## Welcome

**Dorado '94** is the famous 1994 "transparent" overdrive, the Klon Centaur, rebuilt part by part. It is not a sample or a profile: the whole circuit is solved in real time, with the same parts doing the same work.

- **The input buffer:** a TL072 running on 9 V, always on, as in the pedal.
- **The gain section, solved as one circuit:** a clean path and a clipped path running side by side, the dual-gang GAIN pot that turns one down as it turns the other up, the op-amp clipping on its rails and the pair of **germanium diodes**.
- **The output:** the summing amp and the active **TREBLE** shelf, on the **+16 V / −9 V** rails of the pedal's charge pump, so the output stage has plenty of headroom.
- **The bypass:** the original buffered bypass, where a little of the effect leaks through, just like the real one.

The clean path running alongside the clipping is why it "thickens" your tone instead of replacing it: your guitar and your amp are still there, with more push and more mids. With GAIN low it's a clean boost; turned up, it pushes an amp into a thick, singing overdrive.

**Free, forever.** No license key, no time limit and nothing locked. If Dorado '94 earns a place on your board, the [tip jar](https://payhip.com/b/7XO0F) keeps the lights on.

---

## System Requirements

| | |
|---|---|
| **Windows** | 10 or later, 64-bit. Nothing else to install. |
| **macOS** | 10.13 High Sierra or later. Universal binary: runs natively on both Intel and Apple Silicon Macs. |
| **Linux** | x86_64, with glibc 2.35 or later (Ubuntu 22.04 and equivalents onward). |
| **Formats** | VST3 on all three systems; Audio Unit (AU) on macOS for Logic Pro and GarageBand. It is an effect for your DAW: there is no standalone application. |
| **CPU** | Moderate: on our test machine, about 13% of one core at 48 kHz at the default 4× oversampling (about 4% at 1×). When the track is silent or POWER is off, practically nothing. |

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

Once copied, run a plugin rescan in your DAW. You will find it listed as **Dorado '94** by Main St Audio Labs.

---

## Where to Put It

### 1. In front of your amp (the default)

Put **Dorado '94** first on the guitar track, before your amp simulator (or before the amp you re-amp through). The input is calibrated like our amps, to the voltage of a real guitar, so the clipping reacts to your picking like the pedal.

- **Clean boost:** GAIN low, OUTPUT up. The amp gets hit harder, with a touch more mids.
- **Overdrive:** GAIN from the middle up, OUTPUT to taste.
- **Into an already dirty amp:** GAIN low to medium and OUTPUT up: it tightens the low end and makes the amp sing.

### 2. Stacked with another drive

It works before or after another overdrive. Before, it feeds it with more level and mids; after, it acts as a boost for solos.

---

## Controls

- **GAIN (0–10):** From a clean boost to full overdrive. Turning it up raises the drive and, at the same time, turns down the clean path that runs alongside the clipping, exactly as the dual-gang pot does in the pedal.
- **TREBLE (0–10):** An active high shelf: from darker to brighter, without touching the lows and mids.
- **OUTPUT (0–10):** The output level. The pedal has plenty of level on tap, so it also works as a boost.
- **The footswitch:** Turns the effect on and off. Off, the signal goes through the pedal's original buffered bypass, with the tiny leak of the effect the real one has. The **LED** shows when it's on; it glows brighter when the germanium diodes are clipping.
- **POWER ON:** Turns the whole plugin off. The signal passes untouched and the plugin uses **0% CPU**. It's different from the footswitch: the footswitch is the pedal's bypass, POWER switches the plugin off.

Double-click a knob to return it to its default.

---

## The Bottom Panel

- **INPUT (−24 to +24 dB):** How hard the signal hits the pedal. Below its meter, the peak voltage reaching the pedal (V pk).
- **OUT TRIM (−36 to +24 dB):** The final level. Below its meter, the output level in dBFS.
- **INFO:** What the controls do, the version, the website and the tip jar.
- **OVERSAMPLING (1×, 2×, 4×):** Reduces aliasing when the pedal clips. **4×** is the default, because high gain on high notes needs it; 1× and 2× use a quarter and half of the CPU. 2× and 4× add 3 and 4 samples of latency, reported to your DAW. Oversampling counts from 48 kHz: at 96 kHz each setting runs one step lower and costs the same.

You can resize the window from its corner; it keeps its size with your project.

**Silence costs nothing.** After a moment of digital silence on the track (gaps between regions, a stopped transport) the pedal rests and the CPU drops to almost zero. The first note wakes it up instantly, right where it left off.

---

## Setting INPUT

The pedal responds to the **actual voltage** at its input jack, like our amps. `0 dBFS` corresponds to **4.62 V peak** at the jack (a Focusrite Scarlett 3rd gen at minimum gain, INST input). Strum hard and adjust INPUT until the reading under the input meter lands in the range of your pickups:

| Pickup type | Normal playing | Hard strum |
|---|---|---|
| **Vintage single coil** (Strat, Tele) | 0.05 – 0.10 V | **0.3 – 0.5 V** |
| **Hot single coil, P-90** | 0.10 – 0.20 V | **0.5 – 0.8 V** |
| **Humbucker** (PAF style) | 0.10 – 0.25 V | **0.6 – 1.0 V** |
| **Hot humbucker** | 0.20 – 0.40 V | **1.0 – 1.5 V** |
| **Active pickups** | 0.30 – 0.60 V | **1.5 – 2.5 V** |

That matters for an overdrive: the clipping depends on how hard you hit it, just like the real pedal.

---

![Info Panel](/dorado-94-info.png)

## Info

Click **INFO** to open the info panel: what each control does, the version, the website and the tip jar. Click **BACK**, or anywhere outside the card, to close it.

---

## Frequently Asked Questions

**Why does the sound change a little with the effect off?**  
Because, like the pedal, the bypass is buffered and a tiny bit of the effect leaks through. It's part of the sound of the original.

**Why does it sound "transparent"?**  
The clean signal runs alongside the clipping and is mixed back in at the output. At low and medium GAIN your guitar is still there, with more level and mids, instead of being replaced by the distortion.

**Why is it mono?**  
Like a pedal, it is mono. A stereo input is summed to mono, and both outputs carry the same signal.

**Is it really free?**  
Yes. No key, no time limit, nothing locked. The tip jar is there if you want to support the lab.

---

## Credits & Trademarks

- An original model of the circuit by Main St Audio Labs, validated against a nodal analysis of the pedal.
- Typefaces: Barlow Condensed, Cormorant Garamond and IBM Plex Mono (SIL Open Font License 1.1).
- Developed with the JUCE framework.

*All product names, trademarks, and registered trademarks mentioned (including Klon, Centaur and Focusrite) are property of their respective owners and are referenced solely for historical context and descriptive identification of the modeled analog equipment. Main St Audio Labs is an independent developer and has no affiliation, endorsement, or commercial sponsorship from these companies.*

If you record something with Dorado '94, we want to hear it. Copy our email to send us the link:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<div class="print-footer">
  Official website &amp; manual: <a href="https://mainstaudiolabs.github.io/dorado-94.html" target="_blank">https://mainstaudiolabs.github.io/dorado-94.html</a>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>Other plugins</h2></div>

<PluginGrid exclude="dorado-94" />
