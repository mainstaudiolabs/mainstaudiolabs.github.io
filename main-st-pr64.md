<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>

<ProductHero id="main-st-pr64" />

<div id="manual"></div>

This manual covers how to use the **Main St PR '64** amplifier, how it is designed and its technical specifications.

---

## Welcome

**Main St PR '64** simulates the circuit of the 1964 blackface Princeton Reverb (AA1164) component by component. It is not a static capture and not an impulse-response snapshot.

Every stage of the circuit interacts and is solved in real time with Wave Digital Filters (WDF):
- The **7025 preamp tube** with the **Treble / Bass** tone stack and **Volume**, using the taper of the original pots.
- The **reverb circuit**. A **12AT7** (both halves in parallel) drives the reverb transformer into a long **two-spring tank**. A recovery tube brings the reverb back, and the **Reverb** control blends it with the dry signal.
- The **Vibrato**, which is really a bias tremolo. An oscillator tube moves the bias of the power tubes and is fed by the amp's own half-wave bias supply, exactly as in the original. **Speed** and **Intensity** control it.
- A **cathodyne** phase inverter, solved together with the grids of the power tubes.
- A **push-pull pair of 6V6GT** with fixed bias and negative feedback, driving a modelled output transformer.
- A **GZ34** tube rectifier power supply. Its sag compresses and blooms with your picking.
- A **Jensen P10R** 10" alnico speaker modelled as a reactive electrical load that interacts with the power tubes.
- Our own impulse responses of that speaker in a 1×10 combo cabinet: four microphones, each at four positions.

As a result, the cleans sparkle and the reverb blooms with your picking. The amp cleans up when you roll back your guitar's volume, and it develops a warm, singing edge when you turn it up.

**30-day full trial, then $14 one-time.** During the trial you get everything: no noise bursts, no time-outs and no missing features. After 30 days the amp goes silent until you activate a license. There is no subscription, and once the license is activated you never need the internet again.

---

## System Requirements

| | |
|---|---|
| **Windows** | Windows 10 or later, 64-bit. Nothing else to install: the plugin has no external library dependencies. |
| **macOS** | macOS 10.13 High Sierra or later. Universal binary: runs natively on both Intel and Apple Silicon Macs. |
| **Linux** | x86_64, with glibc 2.35 or later (Ubuntu 22.04 and later, or equivalent distributions). |
| **Formats** | VST3 on all three systems, plus Audio Unit (AU) on macOS for Logic Pro and GarageBand. A standalone application is also included, so you don't need a DAW at all. |
| **CPU** | This is the most demanding plugin in our line: the whole amplifier, including the reverb and the tremolo, is solved sample by sample. A modern computer runs it comfortably at the default oversampling (2×). If you hear dropouts, raise your audio buffer to 256 or 512 samples, or set oversampling to 1×. |

---

## Installation

There is no installer. Copy the files to the folder for your operating system:

| Operating System | VST3 Format | AU (Audio Unit) Format | Standalone Application |
|---|---|---|---|
| **Windows** | `C:\Program Files\Common Files\VST3\` | — | Any folder of your choice |
| **macOS** | `~/Library/Audio/Plug-Ins/VST3/` | `~/Library/Audio/Plug-Ins/Components/` | `/Applications/` |
| **Linux** | `~/.vst3/` | — | Any folder of your choice |

> **Note for macOS users:**  
> The plugin is not signed with a paid Apple developer certificate, so macOS Gatekeeper may show a security warning the first time it loads. The plugin is safe. The included `INSTALL.txt` has three lines to copy and paste into Terminal that authorize it in seconds.

Once the files are copied, rescan plugins in your DAW. The plugin appears as **Main St PR '64**: VST3 on all systems, and also Audio Unit (AU) on macOS for Logic Pro and GarageBand.

---

## Trial and License

- **30 days, complete.** The days left are shown at the top of the window (**TRIAL · 23 DAYS LEFT**). The label turns red during the last five days.
- **Buy whenever you want.** A license is **$14, one-time**, from the **Buy license** button on this page. You can activate it at any moment during the trial: click the **TRIAL** label at the top (or the **`i`** button → **LICENSE** → **OPEN**), paste the key you received and click **activate**.
- **Internet once.** Activation checks your key with the store once. After that the plugin works offline for good.
- **When the trial ends,** the amp goes silent and the license panel opens on its own, with the key field and the **BUY A LICENSE · $14** button.
- **macOS:** GarageBand and Logic Pro (on Apple Silicon) run plugins in a sandbox, and each of those apps keeps its own trial and license. Paste your key once in each of them.
- **Can't activate?** If a firewall, your computer or your host can't reach the internet, write to us with your key. We'll send you an **unlock code** (it starts with `MSAL1-`) that activates the plugin without a connection. Paste it in the same field.

---

## Getting Started

- **Standalone Application:**  
  The first time you launch it, the audio settings window opens on its own. Select your audio interface and, most importantly, **the input channel your guitar is plugged into**. You can reopen it at any time with the **AUDIO** button in the bottom bar.

- **In your DAW:**  
  Insert the plugin on your guitar track. The amplifier circuit is mono, so the plugin takes **a single mono input**: put it on a mono audio track. The output can be mono or stereo (the cabinet can pan its two microphones), so most DAWs also let you load it as a Mono→Stereo effect.

Before you start playing, set the input level with the guide below. It takes a few seconds, and it makes the amplifier respond the way it should.

---

![Main Interface](/MainStPR64.png)

## Setting the Input Level

A real tube amp doesn't respond to digital decibels. It responds to **the actual voltage the guitar puts into the input jack**. That voltage decides how hard the preamp tube is driven, when the amp starts to break up and how much the reverb and the power stage compress. Your audio interface changes that level (through its gain knob and its design), so the first step is to set **INPUT** so the amp receives what a guitar would send it.

In the bottom bar, under the **INPUT** meter, the plugin shows the **peak voltage reaching the amp** (after INPUT). The reading holds each peak for about 1.5 seconds.

1. Set the gain on your interface as you normally would: no clipping, with its own meter well below the top.
2. Strum hard with your usual pickup.
3. Turn **INPUT** until the reading under the input meter shows roughly the "hard strum" value for your pickup type:

| Pickup type | Normal playing | Hard strum |
|---|---|---|
| **Vintage single coil** (Strat, Tele) | 0.05 – 0.10 V | **0.3 – 0.5 V** |
| **Hot single coil, P-90** | 0.10 – 0.20 V | **0.5 – 0.8 V** |
| **Humbucker** (PAF style) | 0.10 – 0.25 V | **0.6 – 1.0 V** |
| **Hot humbucker** | 0.20 – 0.40 V | **1.0 – 1.5 V** |
| **Active pickups** | 0.30 – 0.60 V | **1.5 – 2.5 V** |

These values are approximate starting points, since pickups vary a lot. From there, trust your ears: less INPUT behaves like a weaker pickup (cleaner, more headroom), more INPUT like a hotter one.

> **That is what the Input control is for.** It is not a tone control. It matches the level your gear delivers to the level the circuit expects. Set it again whenever your signal path changes: a different interface, a different input on it, a different gain setting, or moving between the standalone and your DAW.

*Reference: with a Focusrite Scarlett (3rd gen) at minimum gain in INST mode, the plugin reads the real voltage at the jack (0 dBFS = 4.62 V peak), so INPUT at 0 dB is already right for that interface.*

---

## Amplifier Controls

The amp face follows the original panel. The knobs are skirted like the real ones: **the value is the number at the top**, under the small marker, and the exact value is shown below each knob. Double-click a knob to return it to its default.

- **Input Jacks:** Click the jack your guitar goes into.
  - **1:** Full sensitivity.
  - **2:** −6 dB, smoother, for hot pickups.
- **Volume (1 to 10):** There is no master volume, so Volume is also the gain. The amp stays clean in the lower half of the dial and starts to break up past the middle (earlier with hot pickups or a hard attack). Set your final level with **OUTPUT** in the bottom bar.
- **Treble and Bass (1 to 10):** A passive tone stack, as in the original. The two controls interact with each other and with Volume, and there is a fixed mid scoop that no setting removes. Small moves go a long way.
- **Reverb (1 to 10):** The amount of spring reverb blended with the dry signal. The springs are driven by a tube, so the reverb also reacts to how hard you play: dig in and it splashes more.
- **Vibrato · Speed (1 to 10):** The rate of the tremolo, from a slow pulse to a fast shimmer.
- **Vibrato · Intensity (1 to 10):** The depth of the tremolo. It works by moving the bias of the power tubes, so it pulses with the warmth of the real thing rather than as a plain volume chop.
- **POWER:** The rocker switch on the right of the panel. When it is off, the amp goes silent and uses no CPU, while the tuner keeps working. The POWER setting isn't saved in presets.

---

## The Footswitch

The original Princeton Reverb came with a two-button footswitch, and it is on the grille here. Each button has its LED:

- **REVERB:** Turns the reverb on and off (on by default).
- **VIBRATO:** Turns the tremolo on and off. **It starts off**: if Speed and Intensity seem to do nothing, press VIBRATO.

---

![Cabinet](/MainStPR64mics.png)

## The Cabinet

Click the small cabinet on the grille to open the cabinet view. The impulse responses are our own, recorded from a model of a **Jensen P10R** 10" alnico speaker in a **1×10** combo cabinet.

- **One or two microphones:** **SM57**, **SM94**, **R121** and **C414**. The second microphone can be set to **NONE**.
- **Placement on the speaker:** Click (or drag) on the drawing of the speaker where you want each microphone: the centre of the cap, the edge of the cap, the cone, or the edge of the cone. Hovering lights up the ring with its name.
- **BLEND** between the two microphones, **pan** for each one (the output becomes stereo) and **Ø phase** on the second.
- **Classic pairs** in one click: 57 + 121, 57 + 414, 94 + 121 and a wide stereo pair.
- **DIRECT · NO CAB:** Bypasses the cabinet, so you can use your own impulse responses or speaker plugins.

---

## Presets

The preset pill at the top steps through presets (previous / next) and shows a red dot when you have changed something.

- **Factory:** *default* (the plugin as it opens). The sweet spots are yours to find.
- **Mine:** **save** stores your own. The menu also has **SAVE AS NEW**, **RENAME**, **DELETE**, **IMPORT** and **OPEN FOLDER**.
- A preset stores the amplifier, the footswitch and the cabinet (knobs, input jack, reverb and vibrato on/off, microphones). It doesn't store Input, Output, oversampling, the POWER switch or the tuner.

---

## The Bottom Bar

- **Input / Output:** Digital gain trims (in dB) with their meters. Below them are the peak voltage reaching the amp (see *Setting the Input Level*) and the output level in dBFS.
- **Oversampling (1×, 2×, 4×, 8×):**
  - **1× / 2×:** For tracking and playing live, with lower CPU use and lower latency. 2× is the default.
  - **4× / 8×:** For mixing and rendering, with even cleaner harmonics. CPU use rises in proportion: on modest systems, use them only for the final export.
- **AUDIO (Standalone):** Opens the audio settings (interface, input channel, sample rate, buffer).

---

![Integrated Tuner](/MainStPR64tuner.png)

## Built-In Tuner

Click the tuning fork icon at the top right to show the tuner.

- **Needle display (±50 cents)** with the detected note. The needle turns **green** when you are in tune.
- **Clean tap:** The tuner listens to the guitar before the amplifier, so distortion, reverb and tremolo never confuse it.
- **Silent while tuning:** Optionally mutes the amp while you tune. The sound always comes back when you leave the tuner.
- **Reference pitch (A4):** From 430 Hz to 450 Hz (440 Hz by default).
- **No CPU when hidden:** The tuner only runs while its view is open.

---

## Info and Settings

Click the **`i`** icon at the top right. It shows how the amplifier is made, the version, and the settings:
- the presets folder;
- the default window size;
- your **LICENSE** status, with the button that opens the license panel.

You can resize the window freely, from 960×540 up to 4K, and it keeps its size with your project.

---

## Frequently Asked Questions

**Why is the tremolo called "Vibrato"?**  
That's what it says on the original panel. Technically it is a tremolo, a pulsing volume, and the plugin keeps the original name.

**How is it different from the Main St 5E3?**  
The 5E3 is a 1950s tweed with two interacting channels and a single tone knob. It breaks up early, into a loose, compressed roar. The PR '64 is a 1960s blackface: more headroom and sparkle, Treble and Bass controls, negative feedback for a tighter sound, a 10" speaker, and the reverb and the tremolo built in.

**Can I use only the reverb?**  
The reverb is part of the amp circuit, so it comes with the amp. If you want a standalone spring reverb to put in front of any amp, try our free **Main St '63 Spring**.

**Can I activate the license before the trial ends?**  
Yes, at any moment. Once you activate, the trial no longer counts.

**Do I need internet to play?**  
Only once, to activate. If you can't activate online, write to us and we'll send you an unlock code that works offline.

**Why is the processing engine mono?**  
The original circuit is mono. Stereo comes from the cabinet, if you pan its two microphones.

**I hear dropouts or crackles.**  
The whole circuit is solved sample by sample, which takes more CPU than a typical amp plugin. Raise your audio buffer to 256 or 512 samples, and keep oversampling at **1× or 2×** while you play. Switch to 4× or 8× only for the final export.

**No audio is heard.**  
Check the **POWER** switch on the panel. In the Standalone, open **AUDIO** in the bottom bar and check that your interface and the right input channel are selected. If the trial has ended, the amp stays silent until you activate a license.

---

## Credits & Trademarks

- Spring model after Välimäki, Parker and Abel (JAES 2010), Parker (EURASIP 2011) and Gamper, Parker and Välimäki (DAFx 2011).
- Tube models: Norman Koren (1996); grid current: Dempwolf and Zölzer (DAFx 2011).
- Wave Digital Filters (WDF): `chowdsp_wdf` library by Jatin Chowdhury (BSD-3 License).
- Cabinet impulse responses made with Caja Sintética, our physical cabinet model.
- Unlock-code verification: Monocypher (BSD-2 / CC0).
- Developed with the JUCE framework.
- Typefaces: Barlow Condensed and IBM Plex Mono (SIL Open Font License 1.1), Yellowtail (Apache License 2.0).

*All product names, trademarks and registered trademarks mentioned (including Fender, Princeton Reverb, Jensen, Shure, Royer, AKG and Focusrite) belong to their respective owners. They are referenced only for historical context and to identify the analog equipment that was modelled. Main St Audio Labs is an independent developer and is not affiliated with, endorsed by or sponsored by these companies.*

Questions, problems, or something you recorded with it? Copy our email and write to us:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<div class="print-footer">
  Official website &amp; manual: <a href="https://mainstaudiolabs.github.io/main-st-pr64.html" target="_blank">https://mainstaudiolabs.github.io/main-st-pr64.html</a>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>Other plugins</h2></div>

<PluginGrid exclude="main-st-pr64" />
