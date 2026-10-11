// Single source of truth for plugin catalog data, used by PluginCard / PluginGrid / ProductHero.
// NOTE: Japanese copy is a best-effort translation reusing existing site strings where possible —
// worth a native-speaker pass before shipping.
export const PLUGINS = {
  root: {
    'main-st-63-spring': {
      name: "Main St '63 Spring", tagline: "1963 Spring Reverb Unit · Tube Driven",
      img: '/MainSt63Spring.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0',
      desc: "The whole 1963 outboard spring reverb unit, solved as a real circuit: the 12AT7 input and Dwell, the 6V6 driving the tank's coil, two dispersive springs and the 12AX7 recovery with Tone and Mixer. Use it before your amp like the original, or on a bus with the dry off and the two springs split in stereo.",
      specs: ['The complete unit, solved sample by sample', '12AT7 input, 6V6 driver, 12AX7 recovery', 'Two dispersive springs, with the drip', 'Dwell, Mixer, Tone and the reverb switch', 'DRY off and STEREO (springs L/R) for buses', 'Output cable capacitance (off to 2.2 nF)', 'Light on CPU']
    },
    'main-st-5f1': {
      name: 'Main St 5F1', tagline: "Tweed 1956 · 5 Watts · Single-Ended",
      img: '/MainSt5F1.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt5F1-v1.0.2',
      desc: "Component-level physical modelling of the 1956 tweed Champ: wave digital filters solve the real circuit sample by sample, so the 12AX7, the 6V6 and the 5Y3 rectifier's sag react to your picking the way the valves do. One knob, two inputs, and a Jensen P10R cabinet.",
      specs: ['Wave digital filters: the circuit solved sample by sample', '12AX7 preamp and single-ended class-A 6V6', '5Y3GT rectifier with real supply sag', 'Jensen P10R modelled as a reactive load', 'Two inputs: Jack 1 and Jack 2 (\u22126 dB, 136 k\u03a9)', 'SM57 and SM94 cabinet takes, plus Direct', 'Built-in tuner with adjustable A4', 'Lighter on CPU than a commercial amp sim']
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
  },
  es: {
    'main-st-63-spring': {
      name: "Main St '63 Spring", tagline: 'Unidad de reverb de 1963 · a válvulas',
      img: '/MainSt63Spring.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0',
      desc: 'La unidad de reverb de resorte externa de 1963 completa, resuelta como un circuito real: la entrada 12AT7 y el Dwell, la 6V6 que excita la bobina del tanque, dos resortes dispersivos y la recuperación 12AX7 con Tone y Mixer. Usala antes del ampli como la original, o en un bus con el seco apagado y los dos resortes separados en estéreo.',
      specs: ['La unidad completa, resuelta muestra por muestra', 'Entrada 12AT7, driver 6V6, recuperación 12AX7', 'Dos resortes dispersivos, con el drip', 'Dwell, Mixer, Tone y la tecla de la reverb', 'DRY off y STEREO (resortes izq./der.) para buses', 'Capacidad del cable de salida (off a 2,2 nF)', 'Liviana de CPU']
    },
    'main-st-5f1': {
      name: 'Main St 5F1', tagline: 'Tweed 1956 · 5 watts · single-ended',
      img: '/MainSt5F1.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt5F1-v1.0.2',
      desc: 'Modelado f\u00edsico a nivel de componentes del Champ tweed de 1956: los filtros de onda digital resuelven el circuito real muestra por muestra, as\u00ed que la 12AX7, la 6V6 y la ca\u00edda de tensi\u00f3n de la rectificadora 5Y3 responden a tu p\u00faa como responden las v\u00e1lvulas. Una perilla, dos entradas y un gabinete con Jensen P10R.',
      specs: ['Filtros de onda digital: el circuito resuelto muestra por muestra', 'Previo 12AX7 y 6V6 en clase A single-ended', 'Rectificadora 5Y3GT con sag real de la fuente', 'Jensen P10R modelado como carga reactiva', 'Dos entradas: Jack 1 y Jack 2 (\u22126 dB, 136 k\u03a9)', 'Tomas de gabinete SM57 y SM94, m\u00e1s Direct', 'Afinador integrado con A4 ajustable', 'M\u00e1s liviano de CPU que un simulador comercial']
    },

    'midnight-rambler': {
      name: 'Midnight Rambler', tagline: 'Valvular 5E3 Tweed',
      img: '/midnightramblerinterface.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/Midnight-Rambler-v1.2.1',
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
    'main-st-63-spring': {
      name: "Main St '63 Spring", tagline: '1963年スプリング・リバーブ・ユニット · 真空管駆動',
      img: '/MainSt63Spring.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0',
      desc: '1963年の外付けスプリング・リバーブ・ユニット全体を実際の回路として解析。12AT7の入力段とDwell、タンクのコイルを駆動する6V6、2本の分散性スプリング、ToneとMixerを備えた12AX7のリカバリー段。オリジナル同様アンプの前に、またはドライをoffにし2本のスプリングをステレオに分けてバスで。',
      specs: ['ユニット全体を1サンプルずつ解析', '12AT7入力、6V6ドライバー、12AX7リカバリー', 'ドリップを再現する2本の分散性スプリング', 'Dwell、Mixer、Toneとリバーブ・スイッチ', 'バス用のDRY offとSTEREO（スプリング左右）', '出力ケーブル容量（off〜2.2 nF）', 'CPU負荷が軽い']
    },
    'main-st-5f1': {
      name: 'Main St 5F1', tagline: 'Tweed 1956 · 5ワット · シングルエンド',
      img: '/MainSt5F1.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt5F1-v1.0.2',
      desc: '1956年製ツイードChampをコンポーネント単位で物理モデリング。ウェーブ・デジタル・フィルタが実際の回路を1サンプルずつ解くため、12AX7も6V6も、そして5Y3整流管による電源のサグも、本物の真空管と同じようにピッキングへ反応します。ノブ1つ、入力2系統、Jensen P10R搭載キャビネット。',
      specs: ['ウェーブ・デジタル・フィルタで回路を1サンプルずつ解析', '12AX7プリアンプとシングルエンド・クラスA 6V6', '5Y3GT整流管による本物の電源サグ', 'Jensen P10Rをリアクティブ負荷としてモデリング', '2系統の入力：Jack 1とJack 2（\u22126 dB、136 kΩ）', 'SM57・SM94のキャビネットテイクとDirect', 'A4調整可能なチューナー内蔵', '市販アンプシミュレーターより軽いCPU負荷']
    },

    'midnight-rambler': {
      name: 'Midnight Rambler', tagline: '5E3 Tweed 真空管シミュレーション',
      img: '/midnightramblerinterface.png', free: true, soon: false, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/Midnight-Rambler-v1.2.1',
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

export const PLUGIN_ORDER = ['main-st-63-spring', 'main-st-5f1', 'midnight-rambler', 'tuner-pedal']
