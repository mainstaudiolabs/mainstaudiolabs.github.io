// Single source of truth for plugin catalog data, used by PluginCard / PluginGrid / ProductHero.
// NOTE: Japanese copy is a best-effort translation reusing existing site strings where possible —
// worth a native-speaker pass before shipping.
export const PLUGINS = {
  root: {
    'tattoo-you': {
      name: 'Tattoo You', tagline: "Studio Guitar Workstation '78–'81",
      img: '/tattoo-you.png', free: true, soon: true,
      desc: "'78 Mark I circuit with 12 neural models (100W/60W, Normal/Bright), 1x12 Hardwood Cab Lab with 24 takes, single-track Stereo Spread 3D, Phase '78, Delay, and rack tuner. Free and 100% functional under a pay-what-you-want model (REAPER-style): with no license, it just adds a 6-second wait when opening the plugin.",
      specs: ["12 neural 6L6 models (Clean / Crunch / Lead)", "1x12 Hardwood Cab Lab console (24 EVM-12L takes & dual blend)", "Single-track Stereo Spread 3D", "Phase '78 + Slapback Delay", "5-band graphic EQ", "Built-in chromatic tuner", "Pay-what-you-want: 6s wait without a license"]
    },
    'midnight-rambler': {
      name: 'Midnight Rambler', tagline: '5E3 Tweed Tube Simulation',
      img: '/midnightramblerinterface.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/midnight-rambler-v1.1.0',
      desc: "The raw, dynamic bite of the Fender Tweed 5E3 behind rock's landmark albums. Organic touch sensitivity, 3 phase-aligned studio mics, and retro tuner.",
      specs: ['5E3 Tweed tube simulation', '3 phase-aligned mic takes', 'Organic pick-dynamics response', 'Built-in retro tuner', 'Ultra-light on CPU']
    },
    'tuner-pedal': {
      name: 'Vintage Tuner Stompbox', tagline: 'Analog Chromatic Tuner',
      img: '/TunerPedal.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/vintage-tuner-v1.1.0',
      desc: 'Vintage needle tuner powered by dual high-precision DSP engines (MPM & YIN). True 0.0% CPU when GUI is closed for inserting across all session tracks.',
      specs: ['Dual MPM + YIN engines', '0.0% CPU with GUI closed', 'Smooth analog-style needle', 'Adjustable A4 calibration', 'Works on every track']
    }
  },
  es: {
    'tattoo-you': {
      name: 'Tattoo You', tagline: "Estación de Estudio '78–'81",
      img: '/tattoo-you.png', free: true, soon: true,
      desc: "Circuito Mark I ('78) con 12 modelos neuronales (100W/60W, Normal/Bright), consola 1x12 Hardwood Cab Lab con 24 tomas y mezcla dual, Stereo Spread 3D en 1 sola pista, Phase '78, Delay y afinador de rack. Gratis y 100% funcional bajo un modelo a voluntad (estilo REAPER): sin licencia activa, solo agrega una espera de 6 segundos al abrir el plugin.",
      specs: ['12 modelos neurales 6L6 (Clean / Crunch / Lead)', 'Consola 1x12 Hardwood Cab Lab (24 tomas EVM-12L y mezcla dual)', 'Stereo Spread 3D en una sola pista', "Phase '78 + Slapback Delay", 'Ecualizador gráfico de 5 bandas', 'Afinador cromático integrado', 'Modelo a voluntad: espera de 6s sin licencia']
    },
    'midnight-rambler': {
      name: 'Midnight Rambler', tagline: 'Valvular 5E3 Tweed',
      img: '/midnightramblerinterface.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/midnight-rambler-v1.1.0',
      desc: 'El tono crudo y dinámico del Fender Tweed 5E3 detrás de los discos clásicos de rock. Sensibilidad táctil orgánica, selector de 3 micrófonos coherentes de fase y afinador integrado.',
      specs: ['Simulación de tubos 5E3 Tweed', '3 tomas de micrófono con fase alineada', 'Respuesta dinámica orgánica a la púa', 'Afinador retro incorporado', 'CPU ultra liviana']
    },
    'tuner-pedal': {
      name: 'Vintage Tuner Stompbox', tagline: 'Afinador Cromático',
      img: '/TunerPedal.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/vintage-tuner-v1.1.0',
      desc: 'Afinador de aguja vintage con doble motor DSP de alta precisión (MPM y YIN). Consumo real 0.0% de CPU con ventana cerrada para insertar en todas las pistas de tu proyecto.',
      specs: ['Motores duales MPM + YIN', '0.0% CPU con GUI cerrada', 'Aguja analógica de respuesta suave', 'Calibración A4 ajustable', 'Compatible con todas las pistas']
    }
  },
  ja: {
    'tattoo-you': {
      name: 'Tattoo You', tagline: "スタジオ・ワークステーション '78–'81",
      img: '/tattoo-you.png', free: true, soon: true,
      desc: "12種類のニューラルモデル（100W/60W, Normal/Bright）、24テイクの1x12 Hardwood Cab Lab、1トラック完結のStereo Spread 3D、Phase '78、ディレイ、ラックチューナーを完全統合。ライセンス未登録でも全機能を無料で100%利用可能（REAPER方式）。起動時に6秒の待機画面が表示されるのみです。",
      specs: ['6L6ニューラルモデル12種（Clean / Crunch / Lead）', '1x12 Hardwood Cab Lab コンソール（24テイクEVM-12L＆デュアルミックス）', '1トラック完結のStereo Spread 3D', "Phase '78 + スラップバックディレイ", '5バンド・グラフィックEQ', 'クロマチックチューナー内蔵', '寄付制モデル：ライセンス未登録時は起動時に6秒待機']
    },
    'midnight-rambler': {
      name: 'Midnight Rambler', tagline: '5E3 Tweed 真空管シミュレーション',
      img: '/midnightramblerinterface.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/midnight-rambler-v1.1.0',
      desc: 'ロック名盤を彩ったFender Tweed 5E3の生々しいダイナミクス。有機的なピッキングレスポンス、完全位相整合の3マイク選択、レトロチューナーを搭載。',
      specs: ['5E3 Tweed 真空管シミュレーション', '完全位相整合の3マイクテイク', '有機的なピッキングダイナミクス', 'レトロチューナー内蔵', '超軽量CPU']
    },
    'tuner-pedal': {
      name: 'Vintage Tuner Stompbox', tagline: 'アナログ・クロマチックチューナー',
      img: '/TunerPedal.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/vintage-tuner-v1.1.0',
      desc: '高精度デュアルDSPエンジン（MPM＆YIN）搭載のヴィンテージ針式チューナー。GUIを閉じればCPU消費0.0%となり全トラックへのインサートに最適。',
      specs: ['MPM + YINデュアルエンジン', 'GUIを閉じるとCPU消費0.0%', 'なめらかなアナログ針表示', 'A4キャリブレーション調整可能', '全トラックで使用可能']
    }
  }
}

export const PLUGIN_ORDER = ['tattoo-you', 'midnight-rambler', 'tuner-pedal']
