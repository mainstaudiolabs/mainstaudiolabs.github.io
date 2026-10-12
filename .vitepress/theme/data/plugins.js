// Single source of truth for plugin catalog data, used by PluginCard / PluginGrid / ProductHero.
// 12/10/2026: el sitio queda solo en ingles (se sacaron las versiones en castellano y japones).
export const PLUGINS = {
  root: {
    'main-st-5e3': {
      name: 'Main St 5E3', tagline: 'Tweed 5E3 · Push-Pull 6V6 · Two Channels',
      img: '/MainSt5E3.png', free: false, price: '$9', cardPrice: '$9 (1 month trial)', soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/mainSt5e3-v1.0.0', buyUrl: 'https://payhip.com/b/atLR8',
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
      name: "Main St '63 Spring", tagline: "1963 Spring Reverb Unit · Tube Driven",
      img: '/MainSt63Spring.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0',
      desc: "The original 1963 outboard spring reverb, rebuilt part by part: the tubes that drive the tank, the two springs and the recovery stage. That's where the drip and splash of surf and vintage records come from, and why it gets wetter and wilder as you turn up the Dwell and hit it harder. Use it before your amp like the original, or on a bus with the springs in stereo.",
      specs: ["12AT7 input and 6V6 driver: more Dwell, a wetter and more aggressive splash", "Two dispersive springs, with the classic drip", "Dwell, Mixer, Tone and the reverb switch, like the unit", "DRY off and STEREO springs for buses", "Cable-length setting: darker as the cable gets longer", "Light on CPU"]
    },
    'main-st-5f1': {
      name: 'Main St 5F1', tagline: "Tweed 1956 · 5 Watts · Single-Ended",
      img: '/MainSt5F1.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt5F1-v1.0.2',
      desc: "The original 1956 tweed Champ circuit, rebuilt tube by tube: a 12AX7, a single 6V6 and a 5Y3 rectifier, working together as in the real amp. That's why one knob covers it all (sweet cleans down low, warm crunch in the middle, singing overdrive at the top) and why it answers your picking like the real thing.",
      specs: ["12AX7 preamp: chimey cleans that break up when you dig in", "Single-ended 6V6: the sweet, compressed overdrive of small tweed amps", "5Y3 tube rectifier: the sag and bloom you feel under your pick", "Jensen P10R that reacts with the power tube", "Two inputs: Jack 2 is softer and darker, for hot pickups", "SM57 and SM94 cabinet takes, plus Direct", "Built-in tuner"]
    },

    'midnight-rambler': {
      name: 'Midnight Rambler', tagline: '5E3 Tweed Tube Simulation',
      img: '/midnightramblerinterface.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/Midnight-Rambler-v1.2.1',
      desc: "The raw, dynamic bite of the Fender Tweed 5E3 behind rock's landmark albums. Organic touch sensitivity, 3 phase-aligned studio mics, and retro tuner.",
      specs: ['5E3 Tweed tube simulation', '3 phase-aligned mic takes', 'Organic pick-dynamics response', 'Built-in retro tuner', 'Ultra-light on CPU']
    },
    'tuner-pedal': {
      name: 'Vintage Tuner Stompbox', tagline: 'Analog Chromatic Tuner',
      img: '/TunerPedal.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/vintage-tuner-v1.1.0',
      desc: 'Vintage needle tuner powered by dual high-precision DSP engines (MPM & YIN). True 0.0% CPU when GUI is closed for inserting across all session tracks.',
      specs: ['Dual MPM + YIN engines', '0.0% CPU with GUI closed', 'Smooth analog-style needle', 'Adjustable A4 calibration', 'Works on every track']
    }
  }
}

export const PLUGIN_ORDER = ['main-st-5e3', 'main-st-63-spring', 'main-st-5f1', 'midnight-rambler', 'tuner-pedal']
