// Single source of truth for plugin catalog data, used by PluginCard / PluginGrid / ProductHero.
// 12/10/2026: el sitio queda solo en ingles (se sacaron las versiones en castellano y japones).
export const PLUGINS = {
  root: {
    // 03/11/2026: Main St '64 V-Verb (Vibroverb AB763, blackface 1964, 1x15). Licencia en Payhip, US$ 19.
    'main-st-vv64': {
      name: "Main St '64 V-Verb", category: 'amp', shortCode: "V-Verb", modelRef: '1964 Fender Vibroverb (blackface, 1x15)', tagline: 'Blackface 1964 · 40 W · 1x15 · Reverb · Vibrato · Pedalboard',
      img: '/MainStVV64.png', free: false, price: '$19', cardPrice: '$19 (1 month trial)', soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/V-Verb64-v1.0.0', buyUrl: 'https://payhip.com/b/ZG6Ji',
      desc: "The 1964 blackface Vibroverb, rebuilt tube by tube: two channels, a tube-driven spring reverb, the optical vibrato, a pair of 6L6GC, a GZ34 rectifier and a 15\" speaker, all working together as in the real amp. Big, round cleans with a lot of headroom, deep reverb and a throbbing vibrato, and a thick, singing edge when you turn it up. With the '64 Custom switches and a pedalboard in front: a compressor and two overdrives.",
      specs: ["The whole circuit, tube by tube, solved in real time, not sampled", "Two channels, Normal and Vibrato, four input jacks and Bright switches", "Treble, Bass and Volume, with the taper of the original pots", "Tube-driven spring reverb: 12AT7 driver, reverb transformer and a long spring tank", "Optical vibrato: a neon lamp and a photocell, with Speed and Intensity", "Push-pull pair of 6L6GC with negative feedback: about 40 watts of clean headroom", "GZ34 tube rectifier: the sag you feel when you dig in", "'64 Custom switches: STOCK / MOD circuit and TUBE / DIODE rectifier", "Pedalboard included: CS-26 compressor, TS '82 and Dorado '94 overdrives", "15\" ceramic speaker that reacts with the power tubes, six mics", "Presets and a built-in tuner", "30-day full trial, then $19 one-time"],
      notice: {
        title: 'New to the Vibroverb? Read this first',
        intro: "The Vibroverb is a 1960s amp, not a modern one: no master volume, no gain channel, and a few things that work differently. Some things that look like a fault aren't:",
        items: [
          "<b>Speed and Intensity do nothing?</b> The Vibrato starts off. Press VIBRATO on the footswitch (its LED lights up). Fender called it Vibrato, but it's a tremolo: the volume pulses.",
          "<b>Reverb and vibrato are on the Vibrato channel only.</b> The plugin starts with the guitar in Vibrato 1. In the Normal jacks there's no reverb and no vibrato, as on the amp.",
          "<b>Volume is gain.</b> There's no master: turning Volume up means more drive, not just more level. Set the final level with OUTPUT.",
          "<b>Treble and Bass are not a flat EQ.</b> They're a passive tone stack with the mids fixed: they interact with each other and with Volume. Small moves go a long way.",
          "<b>Jack 2 is 6 dB quieter</b>, meant for hot pickups. If it sounds weak, use jack 1.",
          "<b>MOD greys out half the panel.</b> It's the '64 Custom's high-gain mod: the Normal channel and the vibrato are gone, by design. Set CIRCUIT back to STOCK to get them back.",
          "<b>The pedals start off.</b> Open PEDALS on the grille and step on a switch. A pedal that's off uses no CPU.",
          "<b>No sound at all?</b> Check the POWER switch on the right of the panel. When it's off the amp is silent (the tuner still works)."
        ],
        outro: "Players have been finding their sweet spots on this amp for sixty years. Search for <i>Vibroverb settings</i>; since the whole circuit is here, most of them work the same way. Details in <a href=\"#amplifier-controls\">Amplifier Controls</a>."
      },
    },
    // 23/10/2026: Main St PR '64 (Princeton Reverb AA1164, blackface 1964). Licencia en Payhip, US$ 14.
    'main-st-pr64': {
      name: "Main St PR '64", category: 'amp', shortCode: "PR '64", modelRef: '1964 Fender Princeton Reverb (blackface)', tagline: 'Blackface 1964 · Spring Reverb · Bias Tremolo',
      img: '/MainStPR64.png', free: false, price: '$14', cardPrice: '$14 (1 month trial)', soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainStPR64', buyUrl: 'https://payhip.com/b/G9jx3',
      desc: "The 1964 blackface Princeton Reverb, rebuilt tube by tube: the preamp with Treble and Bass, a tube-driven spring reverb, the bias tremolo, a pair of 6V6 and a GZ34 rectifier, all working together as in the real amp. That's why the cleans sparkle and the reverb blooms off your picking, why it gets a warm, singing edge when you turn it up, and why the Vibrato pulses like the real one.",
      specs: ["The whole circuit, tube by tube, solved in real time, not sampled", "Treble, Bass and Volume, with the taper of the original pots", "Tube-driven spring reverb: 12AT7 driver, reverb transformer and a long two-spring tank", "Real bias tremolo (\"Vibrato\"): an oscillator tube moving the power tubes, with Speed and Intensity", "Push-pull pair of 6V6 with negative feedback: sparkling cleans, a warm edge when turned up", "GZ34 tube rectifier: the sag you feel when you dig in", "Cleans up with your guitar's volume knob", "10\" alnico speaker that reacts with the power tubes, four classic mics", "Two-button footswitch (Reverb, Vibrato) and a working POWER switch", "Presets and a built-in tuner", "30-day full trial, then $14 one-time"],
      notice: {
        title: 'New to the Princeton Reverb? Read this first',
        intro: "The Princeton Reverb is a 1960s amp, not a modern one: no master volume, no gain channel, and a few things that work differently. Some things that look like a fault aren't:",
        items: [
          "<b>Speed and Intensity do nothing?</b> The Vibrato starts off. Press VIBRATO on the footswitch (its LED lights up). Fender called it Vibrato, but it's a tremolo: the volume pulses.",
          "<b>Volume is gain.</b> There's no master: turning Volume up means more drive, not just more level. It stays clean in the lower half of the dial and starts to break up past the middle. Set the final level with OUTPUT.",
          "<b>Treble and Bass are not a flat EQ.</b> They're a passive tone stack: they interact with each other and with Volume, and there's a fixed mid scoop no setting removes. Small moves go a long way.",
          "<b>The reverb reacts to your picking.</b> The springs are driven by a tube, so hitting harder splashes more. Turn it off with REVERB on the footswitch.",
          "<b>Input 2 is 6 dB quieter</b>, meant for hot pickups. If it sounds weak, use Input 1.",
          "<b>No sound at all?</b> Check the POWER switch on the right of the panel. When it's off the amp is silent (the tuner still works)."
        ],
        outro: "Players have been finding their sweet spots on this amp for sixty years. Search for <i>Princeton Reverb settings</i>; since the whole circuit is here, most of them work the same way. Details in <a href=\"#amplifier-controls\">Amplifier Controls</a>."
      },
    },
    // 01/11/2026: CS-26, compresor transparente de diseño propio. Gratis, sin clave (TIP JAR en Payhip: 7XO0F).
    // 02/11/2026: 1.0.0 publicado (release CS26-v1.0.0).
    'cs-26': {
      name: 'CS-26', category: 'fx', modelRef: 'Original Main St design', tagline: 'Transparent Compressor · Sustainer · Blend',
      img: '/cs-26.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/CS26-v1.0.0', tipUrl: 'https://payhip.com/b/7XO0F',
      desc: "Our own compressor, designed from scratch for guitar: it evens out your playing and adds sustain without changing your tone. BLEND brings the clean signal back in so your pick attack stays alive, a 100 Hz switch keeps the low strings from pumping, and a row of LEDs shows how hard it's working. Free, with no key and no limits.",
      specs: ["An original circuit, designed from scratch and simulated part by part", "Transparent: your tone stays yours, only the dynamics change", "SUSTAIN, ATTACK, BLEND and VOLUME, like a pedal on your board", "RATIO: 2:1 gentle, 4:1 firm, LIM for limiting", "BASS 100 Hz: low notes stop pumping the compressor", "Six LEDs from 3 to 20 dB, plus a gain reduction meter", "VOLUME at 6.3 matches the bypass level", "Click-free footswitch and a POWER switch for 0% CPU", "Free and complete: no key, no time limit"]
    },
    // 02/11/2026: Dorado '94 (Klon Centaur, 1994) y TS '82 (Ibanez TS9, 1982). Gratis, sin clave (TIP JAR en Payhip: 7XO0F).
    // 27/11/2026: Photocell Vibe (Uni-Vibe / Vibe Bro). Gratis, sin clave (TIP JAR en Payhip: 7XO0F).
    // 27/11/2026: 1.0.0 publicado (release PhotocellVibe-v1.0.0).
    'photocell-vibe': {
      name: "Photocell Vibe", category: 'fx', modelRef: 'Late-1960s Uni-Vibe (Shin-ei / Univox)', tagline: 'Lamp & Photocells · Chorus / Vibrato · Four Phase Stages',
      img: '/photocell-vibe.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/PhotocellVibe-v1.0.0', tipUrl: 'https://payhip.com/b/7XO0F',
      desc: "The late-1960s lamp-and-photocell vibe, rebuilt from its circuit: a real incandescent lamp, driven by the pedal's own oscillator, lights four photocells that move four transistor phase stages. The filament heats up fast and cools down slowly, so the sweep rises quickly and fades lazily: the lopsided, breathing throb no LFO can fake. CHORUS for the classic swirl, VIBRATO for pure pitch wobble.",
      specs: ["The lamp and the four photocells modeled as physics, tuned against measurements of a real unit", "Four transistor phase stages matched to the original circuit, not textbook all-pass filters", "CHORUS (dry + wet) or VIBRATO (wet only), with the red and white key", "VOLUME, INTENSITY and SPEED (0.85 to 7.6 Hz), like the pedal", "A LAMP window that glows with the model's real bulb", "The preamp: clean with a normal guitar, a hard edge with a hot one", "Input calibrated to the voltage of a real guitar", "Very light on CPU", "Free and complete: no key, no time limit"]
    },
    // 02/11/2026: 1.0.0 publicados (releases Dorado94-v1.0.0 y TS82-v1.0.0).
    'dorado-94': {
      name: "Dorado '94", category: 'fx', modelRef: '1994 Klon Centaur overdrive', tagline: 'Transparent Overdrive · Germanium Diodes · Buffered Bypass',
      img: '/dorado-94.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/Dorado94-v1.0.0', tipUrl: 'https://payhip.com/b/7XO0F',
      desc: "The famous 1994 transparent overdrive, rebuilt part by part: the buffer, the gain section with its germanium diodes and the clean signal running alongside, the treble control on its charge-pump rails and the original buffered bypass. That's why it thickens your tone instead of replacing it, works as a clean boost with GAIN low, and pushes an amp into singing overdrive when you turn it up.",
      specs: ["The whole circuit, part by part, solved in real time, not sampled", "The gain section solved as one circuit: clean and clipped paths, the dual-gang GAIN pot, op-amp clipping and germanium diodes", "TREBLE: the active high shelf on the +16 V / -9 V charge-pump rails", "The original buffered bypass, with its little leak of the effect", "Clean boost with GAIN low, full overdrive at the top", "Input calibrated to the voltage of a real guitar", "POWER switch for 0% CPU; silence costs nothing", "Free and complete: no key, no time limit"]
    },
    'ts82': {
      name: "TS '82", category: 'fx', modelRef: '1982 Ibanez TS9 Tube Screamer', tagline: 'Green Overdrive · JRC4558D · Silicon Diodes',
      img: '/ts82.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/TS82-v1.0.0', tipUrl: 'https://payhip.com/b/7XO0F',
      desc: "The 1982 green overdrive, rebuilt part by part: the two transistor buffers, the JRC4558D clipping stage with its silicon diodes, the tone control and the original buffered bypass. That's where the famous mid hump comes from, the tight low end and the smooth clipping that tames your amp, whether you use it for overdrive or as a boost in front of a dirty amp.",
      specs: ["The whole 1982 circuit, part by part, solved in real time, not sampled", "JRC4558D clipping stage with antiparallel silicon diodes in the feedback loop", "The 720 Hz high-pass that gives the mid hump and the tight lows", "DRIVE, TONE and LEVEL, with the taper of the original pots", "The original transistor buffers and the buffered bypass", "Overdrive on its own, or a boost in front of a dirty amp", "Input calibrated to the voltage of a real guitar", "POWER switch for 0% CPU; silence costs nothing", "Free and complete: no key, no time limit"]
    },
    // 24/10/2026: Main St 6V6 Trem 1.0.0, el tremolo del PR '64 hecho pedal. Gratis con tip (como la '63;
    // la clave en Payhip: https://payhip.com/b/ZHv9Y).
    'main-st-6v6-trem': {
      name: 'Main St 6V6 Trem', category: 'fx', modelRef: 'The bias tremolo of the 1964 Princeton Reverb', tagline: 'Tube Bias Tremolo · 2 × 6V6 Push-Pull · Smooth / Deep',
      img: '/MainSt6V6Trem.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt6V6Trem-v1.0.0',
      desc: "The bias tremolo of the 1964 blackface Princeton Reverb, taken out of the amp and built into a pedal, tube by tube: the oscillator tube, the bias supply and a push-pull pair of 6V6 with their output transformer. The power tubes make the tremolo, so the pulse is round and warm, it breathes with your playing and each valley gets a little dirty. SMOOTH is the original circuit; DEEP goes all the way down to silence.",
      specs: ["A real bias tremolo: a 12AX7 oscillator moving the bias of two 6V6 power tubes", "The tubes shape the pulse: their curves bend the wave and it follows your picking", "SMOOTH: the 1964 circuit as it was, a gentle, round sway", "DEEP: colder bias and a wider swing, deep and defined, down to silence", "DRIVE: how hard the tubes are hit, with your level kept steady", "After your amp, on a track or a bus, or straight from the guitar", "Push-pull 6V6 with negative feedback and a GZ34 supply, as in the amp", "Free and complete: nothing locked or time-limited"]
    },
    'main-st-5e3': {
      name: 'Main St 5E3', category: 'amp', shortCode: '5E3', modelRef: 'Fender Tweed Deluxe 5E3 (1955–60)', tagline: 'Tweed 5E3 · Push-Pull 6V6 · Two Channels',
      img: '/MainSt5E3.png', free: false, price: '$9', cardPrice: '$9 (1 month trial)', soon: false, isNew: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/mainSt5e3-v1.0.0', buyUrl: 'https://payhip.com/b/atLR8',
      desc: "The original 5E3 tweed circuit, rebuilt tube by tube: two 12AY7 channels, a 12AX7, a pair of 6V6 power tubes and a 5Y3 rectifier, all working together as in the real amp. That's why it cleans up when you roll back your guitar's volume, sags and compresses when you dig in, and breaks into the famous tweed roar when you crank it.",
      specs: ["The whole circuit, tube by tube, solved in real time, not sampled", "Two 12AY7 channels sharing one cathode: the volumes interact, like the real amp", "Push-pull pair of 6V6: big headroom and low end, a loose roar when cranked", "5Y3 tube rectifier: the sag and bloom you feel under your pick", "Cleans up with your guitar's volume knob", "The classic jumper-cable trick to blend both channels", "12\" alnico speaker that reacts with the power tubes, four classic mics", "Optional mods for tighter lows and more headroom", "Presets and a built-in tuner", "30-day full trial, then $9 one-time"],
      // 12/10/2026: aviso debajo de las especificaciones para quien no conoce el ampli (pedido del usuario)
      notice: {
        title: 'New to the 5E3? Read this first',
        intro: "The 5E3 is a 1950s amp, not a modern one: no channel switch, no master volume, and controls that interact. Some things that look like a fault aren't:",
        items: [
          "<b>No sound after changing jacks?</b> Each jack feeds its own channel, and you hear the volume of the channel you're plugged into. Bright starts at 1, so if you move the guitar to a Bright jack, turn up Bright.",
          "<b>The other volume still matters.</b> The two channels share a tube, so the volume of the channel you're not using changes the gain and the tone of the one you play.",
          "<b>Volume is gain.</b> There's no master: turning a volume up means more drive, not just more level. Set the final level with OUTPUT.",
          "<b>Lo jacks are 6 dB quieter</b>, meant for hot pickups. If it sounds weak, try Hi.",
          "<b>Tone is not just an EQ.</b> It sits where the two channels meet, before the next tube, so it changes how the amp distorts: higher Tone sends more highs into that tube, for more bite and an earlier break-up; lower Tone smooths the sound before it distorts. It also takes its treble from the Bright channel, so with Bright all the way down it brightens less."
        ],
        outro: "Players have been finding tricks on this amp for seventy years: jumpering the channels, cranking one volume and using the other to shape it, and more. Search for <i>5E3 tips</i> or <i>jumpering a 5E3</i>; since the whole circuit is here, most of them work the same way. Details in <a href=\"#amplifier-controls\">Amplifier Controls</a>."
      },
    },
    'main-st-63-spring': {
      name: "Main St '63 Spring", category: 'fx', modelRef: '1963 Fender Reverb Unit (6G15)', tagline: "1963 Spring Reverb Unit · Tube Driven",
      img: '/MainSt63Spring.png', free: true, soon: false, isNew: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0',
      desc: "The original 1963 outboard spring reverb, rebuilt part by part: the tubes that drive the tank, the two springs and the recovery stage. That's where the drip and splash of surf and vintage records come from, and why it gets wetter and wilder as you turn up the Dwell and hit it harder. Use it before your amp like the original, or on a bus with the springs in stereo.",
      specs: ["12AT7 input and 6V6 driver: more Dwell, a wetter and more aggressive splash", "Two dispersive springs, with the classic drip", "Dwell, Mixer, Tone and the reverb switch, like the unit", "DRY off and STEREO springs for buses", "Cable-length setting: darker as the cable gets longer", "Light on CPU"]
    },
    'main-st-5f1': {
      name: 'Main St 5F1', category: 'amp', shortCode: '5F1', modelRef: '1956 Fender Tweed Champ 5F1', tagline: "Tweed 1956 · 5 Watts · Single-Ended",
      img: '/MainSt5F1.png', free: true, soon: false, isNew: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt5F1-v1.0.2',
      desc: "The original 1956 tweed Champ circuit, rebuilt tube by tube: a 12AX7, a single 6V6 and a 5Y3 rectifier, working together as in the real amp. That's why one knob covers it all (sweet cleans down low, warm crunch in the middle, singing overdrive at the top) and why it answers your picking like the real thing.",
      specs: ["12AX7 preamp: chimey cleans that break up when you dig in", "Single-ended 6V6: the sweet, compressed overdrive of small tweed amps", "5Y3 tube rectifier: the sag and bloom you feel under your pick", "Jensen P10R that reacts with the power tube", "Two inputs: Jack 2 is softer and darker, for hot pickups", "SM57 and SM94 cabinet takes, plus Direct", "Built-in tuner"]
    },

    'midnight-rambler': {
      name: 'Midnight Rambler', category: 'amp', modelRef: 'Fender Tweed Deluxe 5E3 · lite', tagline: '5E3 Tweed Tube Simulation',
      img: '/midnightramblerinterface.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/Midnight-Rambler-v1.2.1',
      desc: "The raw, dynamic bite of the Fender Tweed 5E3 behind rock's landmark albums. Organic touch sensitivity, 3 phase-aligned studio mics, and retro tuner.",
      specs: ['5E3 Tweed tube simulation', '3 phase-aligned mic takes', 'Organic pick-dynamics response', 'Built-in retro tuner', 'Ultra-light on CPU']
    },
    'tuner-pedal': {
      name: 'Vintage Tuner Stompbox', category: 'fx', modelRef: 'Chromatic needle tuner', tagline: 'Analog Chromatic Tuner',
      img: '/TunerPedal.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/vintage-tuner-v1.1.0',
      desc: 'Vintage needle tuner powered by dual high-precision DSP engines (MPM & YIN). True 0.0% CPU when GUI is closed for inserting across all session tracks.',
      specs: ['Dual MPM + YIN engines', '0.0% CPU with GUI closed', 'Smooth analog-style needle', 'Adjustable A4 calibration', 'Works on every track']
    }
  }
}

// 01/11/2026: el home se divide en amplificadores y pedales (category); el orden vale dentro de cada grupo.
export const PLUGIN_ORDER = ['main-st-vv64', 'main-st-pr64', 'main-st-5e3', 'main-st-5f1', 'midnight-rambler', 'cs-26', 'dorado-94', 'ts82', 'photocell-vibe', 'main-st-6v6-trem', 'main-st-63-spring', 'tuner-pedal']
