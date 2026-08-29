# 🎙️ Master Audio Engineering Guide: 1x12 Hardwood Cab Lab & Studio Mic Mixer
### EVM-12L Cone Acoustics, Phase Physics, Dual Miking & The Single-Track Stereo Secret
**TattooYou Vintage Amplifier & Studio Suite | Main St Audio Labs**

---

## 📖 Prologue: The Art of Capturing a Legendary Amplifier

In the landmark recording sessions of the late 1970s and early 1980s, electric guitar tone evolved far beyond placing a single dynamic mic in front of an amplifier. Master recording engineers discovered that the interaction between a **resonant hardwood cabinet**, the **uncompromising fidelity of a high-power driver**, and the **sample-accurate phase alignment of dual microphones** was the true secret behind that massive, three-dimensional guitar wall that leaps from the monitors.

The **1x12 Hardwood Cab Lab** built into **TattooYou** recreates this studio environment with scientific precision. This guide details the cabinet physics, speaker cone frequency dispersion, phase coherence, and how to harness the **dual-convolution engine** for professional mixing.

---

## 🔊 1. EVM-12L Driver & Hardwood Cabinet Physics

### A. Zero Speaker Breakup & Infinite Headroom
Traditional guitar speakers (like classic 25W or 30W British paper cones) exhibit non-linear behavior: when pushed by tube power, the cone flexes and distorts, adding harsh upper-mid grit and compressing low-end punch.

The **EVM-12L** (200W–300W continuous rating, 16 lb ceramic magnet, cast aluminum frame) was engineered for the opposite philosophy:
* **Pristine Fidelity & Pure Tube Dynamics:** The cone does not smear or distort the incoming signal. Every nuance of harmonic texture and saturation comes **directly from the 6L6 power tubes and the '78 Mark I preamp circuit**.
* **Surgical String Separation:** Complex chord voicings and open tunings (such as Keith Richards’ open-G riffing) retain distinct string clarity without turning into muddy sonic sludge.

### B. Solid Hardwood Cabinet with Bass-Reflex Porting
Unlike standard open-back pine combo boxes, this cabinet is crafted from **solid hardwood** with a tuned front bass port:
* **Tight, Punchy Low-End:** The tuned port resonance reinforces frequencies between **80 Hz and 160 Hz** with critical damping, eliminating muddy boominess and delivering instantaneous transient punch.

---

## 🎯 2. Speaker Cone Acoustics: Mic Placement Matrix

A 12-inch guitar cone does not radiate sound uniformly. Moving the capsule from the center dust cap toward the outer surround naturally rolls off high-end presence while enhancing low-mid body:

```text
                  ┌──────────────────────────────────────────────┐
                  │                 SPEAKER CONE                 │
                  │                                              │
                  │      ( -3 )      ( -2 )      ( -1 )   ( 0 )  │
                  │      Outer        Cone      Cap Edge   Center │
                  │     (Dark)       (Warm)     (Sweet)   (Bright)│
                  │                                              │
                  │  [ PORT ]  <─── (Tuned Bass-Reflex Port)     │
                  └──────────────────────────────────────────────┘
```

| Position | Physical Point | Frequency Response | Sonic Character & Ideal Application |
| :---: | :--- | :--- | :--- |
| **`0: Direct`** | **Center / Dust Cap** | Strong boost at **4 kHz – 8 kHz**. | Razor-sharp pick attack, ultra-bright and articulate. Cuts through dense mixes and percussive funk lines. |
| **`+1: Edge`** | **Cap Outer Edge** | Clear presence with smooth high-end roll-off. | Classic rock rhythm bite with punchy definition. |
| **`-1: Sweet`** | **Cap-to-Cone Transition** | Balanced, musical curve (**Studio Sweet Spot**). | **The Studio Benchmark:** Perfect balance of tight lows, rich mids, and silky highs. The recommended starting point for any style. |
| **`-2: Warm`** | **Mid Cone Surface** | Warm midrange, smooth rolloff above 5 kHz. | Off-axis smoothness. Perfect for taming bright bridge single-coils (Telecaster, Stratocaster). |
| **`-3: Dark`** | **Outer Cone Edge** | Deep lows, muted top-end. | Thick, vintage jazz warmth, smoky blues, or heavy downtuned chugging. |
| **`Port: Bass`** | **Bass-Reflex Vent** | Focused energy boost at **80 Hz – 160 Hz**. | Captures frontal air resonance. Adds visceral 4x12-style chest thump. |
| **`Room 3D`** | **Live Room Ambient Pair**| 3D acoustic dimension and natural early reflections. | Spaced studio stereo condenser pair. Removes artificial "dry box" feeling and places the amp in a real physical room. |

---

## 🎧 3. The Physical Asymmetry: Left (L) vs. Right (R) Takes

Every position includes dedicated **`L` (Left)** and **`R` (Right)** takes (e.g., `57 L -1` and `57 R -1`):

### Why do they sound subtly distinct on a circular cone?
1. **Voice-Coil Tinsel Lead Mass:** The flexible braided wires connecting the terminals to the moving coil (*tinsel leads*) are physically soldered to one side of the cone. This microscopic mass difference alters the harmonic vibration between left and right hemispheres.
2. **Hardwood Grain Resonance:** Natural wood grain density and internal air circulation create nuanced acoustic asymmetries that high-end studio microphones capture in detail.

---

## 🔬 4. Phase Physics: Zero Destructive Cancellation

### A. The Comb Filtering Trap
In a physical tracking room, placing two mics in front of a speaker with a minor distance discrepancy of just 1 to 2 millimeters causes arrival time delays:
* Frequencies whose wavelength matches that micro-delay collide at $180^\circ$ out of phase and **destructively cancel**.
* **The sonic result:** The guitar loses low-end weight and collapses into a thin, hollow, nasal tone.

### B. Sample-Accurate Phase Alignment
In **TattooYou**, all cabinet impulse responses underwent **Minimum Phase Transform**:
1. Every mic capture starts precisely at **sample zero ($t = 0$)**.
2. **Positive Phase Correlation ($> +0.92$):** Low and midrange fundamentals (80 Hz to 3 kHz) correlate at nearly $+1.0$. **Low frequencies sum constructively with maximum punch**.
3. **High-Frequency Phase Texture (> 4 kHz):** Subtle high-frequency micro-variations provide natural analog smoothing without comb filtering.

---

## 🎛️ 5. Dual-Convolution Engine: MONO SUM vs. STEREO SPREAD

TattooYou runs two parallel zero-latency convolution engines (`cab1Convolution` and `cab2Convolution`) with an equal-power blend law:

```text
                                  PREAMP & 6L6 POWER AMP SIGNAL
                                                │
                       ┌────────────────────────┴────────────────────────┐
                       ▼                                                 ▼
             [ CONVOLUTION MIC 1 ]                             [ CONVOLUTION MIC 2 ]
             Take: 57 L (-1) Sweet                             Take: 87 L (0) Direct (or 57 R)
             Fader: -24 dB to +6 dB                            Fader: -24 dB to +6 dB
             Weight: w1                                        Phase: Normal / Invert (Ø)
                       │                                       Weight: w2
                       │                                                 │
                       └────────────────────────┬────────────────────────┘
                                                ▼
                                   CAB LAB MASTER SECTION
                                (Equal-Power BLEND Control)
                                                │
                        ┌───────────────────────┴───────────────────────┐
                        ▼                                               ▼
               MONO SUM MODE                                  STEREO SPREAD 3D MODE
          Center-summed composite:                       Left Channel  = Mic 1 * (w1 * √2)
          Out = (Mic1 * w1) + (Mic2 * w2)                Right Channel = Mic 2 * (w2 * √2)
```

---

## ⚖️ 6. How to Apply Blend: Production Applications

### A. MONO SUM (Stereo Spread Disabled)
Both microphones process the signal and sum directly into the center of the track.

* **Cone Averaging (L + R Sum of the SAME Mic):**
  * Mic 1: `57 L (-1) Sweet` + Mic 2: `57 R (-1) Sweet` with **Blend at 50%**.
  * **Result:** High-frequency resonant peaks average out, yielding a thick, organic midrange and naturally rounded top-end without reaching for an EQ.
* **Dynamic + Condenser Synergy:**
  * **70% Mic 1 (57 Sweet) + 30% Mic 2 (87 Direct):** 57 delivers pick bite and aggression; 87 infuses deep lows and hi-fi air.
* **Sub-Low Injection:**
  * **75% Mic 1 (57 Sweet) + 25% Mic 2 (57 BassPort):** Preserves pick articulation while adding heavy 4x12-style low-end weight.

---

### B. STEREO SPREAD 3D (Stereo Spread Enabled)
Mic 1 routes to the Left channel and Mic 2 routes to the Right channel with automatic **+3 dB ($\sqrt{2}$)** loudness compensation.

* **🚀 The Single-Track Stereo Double Trick:**
  * Record **one single stereo track** in your DAW.
  * Mic 1: `57 L (-1) Sweet` + Mic 2: `57 R (-1) Sweet` with **Blend at 50%**.
  * **Result:** Instant, expansive analog stereo guitar width **without duplicating tracks or cluttering your DAW session**.
* **Studio Live Room 3D:**
  * Mic 1: `57 L (-1) Sweet` (Direct front tone) + Mic 2: `87 Room L 3D` (Live room reflections).
  * **Result:** Natural studio depth that eliminates headphone listening fatigue.

---

## 🏆 7. Studio Reference Presets

| Preset | Mic 1 / Mic 2 Setup | Blend | Mode | Sonic Profile & Use Case |
| :--- | :--- | :---: | :---: | :--- |
| **🎸 Studio Standard** | `57 L -1 Sweet` + `87 L 0 Direct` | 30% | Mono | **The Modern Rock Gold Standard:** Dynamic bite meets condenser hi-fi depth. |
| **🥊 Heavy Punch** | `57 L -1 Sweet` + `57 L Port Bass` | 25% | Mono | **Visceral Low-End Wall:** Tight chords with 4x12-style sub-bass punch. |
| **🌌 Live Room 3D** | `57 L -1 Sweet` + `87 Room L 3D` | 25% | Stereo | **Live Studio Ambience:** Direct clarity with immersive 3D room reflections. |
| **🎧 Wide Double Track**| `57 L -1 Sweet` + `57 R -1 Sweet` | 50% | Stereo | **Single-Track Stereo Double:** Massive left/right width on one track without cloning. |
| **⚡ Solo 57 Classic** | `57 L -1 Sweet` *(Mic 2 Off)* | 0% | Mono | Pure, direct, punchy dynamic tone with razor-sharp pick attack. |
| **✨ Solo 87 Hi-Fi** | `87 L 0 Direct` *(Mic 2 Off)* | 0% | Mono | Ultra-linear, crystal-clear, audiophile-grade studio tone. |
