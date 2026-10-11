// Single source of truth for plugin catalog data, used by PluginCard / PluginGrid / ProductHero.
// NOTE: Japanese copy is a best-effort translation reusing existing site strings where possible —
// worth a native-speaker pass before shipping.
export const PLUGINS = {
  root: {
    'main-st-5e3': {
      name: 'Main St 5E3', tagline: 'Tweed 5E3 · Push-Pull 6V6 · Two Channels',
      img: '/MainSt5E3.png', free: false, price: '$9', soon: true, isNew: false, downloadUrl: '',
      desc: "The original 5E3 tweed circuit, rebuilt tube by tube: two 12AY7 channels, a 12AX7, a pair of 6V6 power tubes and a 5Y3 rectifier, all working together as in the real amp. That's why it cleans up when you roll back your guitar's volume, sags and compresses when you dig in, and breaks into the famous tweed roar when you crank it.",
      specs: ["The whole circuit, tube by tube, solved in real time, not sampled", "Two 12AY7 channels sharing one cathode: the volumes interact, like the real amp", "Push-pull pair of 6V6: big headroom and low end, a loose roar when cranked", "5Y3 tube rectifier: the sag and bloom you feel under your pick", "Cleans up with your guitar's volume knob", "The classic jumper-cable trick to blend both channels", "12\" alnico speaker that reacts with the power tubes, four classic mics", "Optional mods for tighter lows and more headroom", "Presets and a built-in tuner", "30-day full trial, then $9 one-time"]
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
  },
  es: {
    'main-st-5e3': {
      name: 'Main St 5E3', tagline: 'Tweed 5E3 · push-pull 6V6 · dos canales',
      img: '/MainSt5E3.png', free: false, price: 'US$ 9', soon: true, isNew: false, downloadUrl: '',
      desc: "El circuito tweed 5E3 original, reconstruido válvula por válvula: dos canales 12AY7, una 12AX7, un par de 6V6 de potencia y una rectificadora 5Y3, trabajando juntos como en el ampli real. Por eso se limpia cuando bajás el volumen de la guitarra, se comprime y respira cuando atacás fuerte, y estalla en el famoso rugido tweed cuando lo llevás al máximo.",
      specs: ["Todo el circuito, válvula por válvula, resuelto en tiempo real, sin muestras", "Dos canales 12AY7 que comparten un cátodo: los volúmenes interactúan, como en el ampli real", "Par push-pull de 6V6: mucho margen y graves, un rugido suelto al máximo", "Rectificadora 5Y3 a válvula: el sag y la respiración que sentís en la púa", "Se limpia con el volumen de tu guitarra", "El truco clásico del cable puente para mezclar los dos canales", "Parlante de 12\" alnico que interactúa con las válvulas de potencia, cuatro micrófonos clásicos", "Mods opcionales para graves más firmes y más margen", "Presets y afinador integrado", "Prueba completa de 30 días, después US$ 9 pago único"]
    },
    'main-st-63-spring': {
      name: "Main St '63 Spring", tagline: 'Unidad de reverb de 1963 · a válvulas',
      img: '/MainSt63Spring.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0',
      desc: "La unidad de reverb de resorte externa original de 1963, reconstruida pieza por pieza: las válvulas que excitan el tanque, los dos resortes y la etapa de recuperación. De ahí salen el drip y el splash de los discos de surf y de época, y por eso se vuelve más húmeda y salvaje a medida que subís el Dwell y atacás más fuerte. Usala antes del ampli como la original, o en un bus con los resortes en estéreo.",
      specs: ["Entrada 12AT7 y driver 6V6: más Dwell, un splash más húmedo y agresivo", "Dos resortes dispersivos, con el drip clásico", "Dwell, Mixer, Tone y la tecla de la reverb, como en la unidad", "DRY off y resortes en STEREO para buses", "Largo del cable: más oscuro cuanto más largo", "Liviana de CPU"]
    },
    'main-st-5f1': {
      name: 'Main St 5F1', tagline: 'Tweed 1956 · 5 watts · single-ended',
      img: '/MainSt5F1.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt5F1-v1.0.2',
      desc: "El circuito original del Champ tweed de 1956, reconstruido válvula por válvula: una 12AX7, una sola 6V6 y una rectificadora 5Y3, trabajando juntas como en el ampli real. Por eso una sola perilla alcanza para todo (limpios dulces abajo, crunch cálido en el medio, saturación que canta arriba) y responde a tu púa como el original.",
      specs: ["Previo 12AX7: limpios cristalinos que rompen cuando atacás fuerte", "6V6 single-ended: la saturación dulce y comprimida de los tweed chicos", "Rectificadora 5Y3 a válvula: el sag y la respiración que sentís en la púa", "Jensen P10R que interactúa con la válvula de potencia", "Dos entradas: el Jack 2 es más suave y oscuro, para micrófonos calientes", "Tomas de gabinete SM57 y SM94, más Direct", "Afinador integrado"]
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
    'main-st-5e3': {
      name: 'Main St 5E3', tagline: 'Tweed 5E3 · プッシュプル 6V6 · 2チャンネル',
      img: '/MainSt5E3.png', free: false, price: '$9', soon: true, isNew: false, downloadUrl: '',
      desc: "オリジナルの 5E3 ツイード回路を真空管ひとつずつ再構築。12AY7 の2チャンネル、12AX7、6V6 パワー管のペア、5Y3 整流管が、実機と同じように連動します。だからギターのボリュームを絞ればクリーンになり、強く弾けばサグとコンプレッションがかかり、フルアップで有名なツイードの咆哮へ。",
      specs: ["回路全体を真空管ひとつずつリアルタイムで解析（サンプリングではありません）", "カソードを共有する 12AY7 の2チャンネル：実機同様ボリュームが相互に作用", "6V6 のプッシュプル・ペア：大きなヘッドルームと低域、フルアップでルーズな咆哮", "5Y3 整流管：ピックで感じるサグと膨らみ", "ギターのボリュームでクリーンに", "両チャンネルをブレンドする定番のジャンパー・ケーブル", "パワー管と相互作用する12インチ・アルニコ・スピーカー、定番マイク4本", "低域を締めヘッドルームを増やすオプションの改造", "プリセットとチューナー内蔵", "30日間のフル試用、その後9ドルの買い切り"]
    },
    'main-st-63-spring': {
      name: "Main St '63 Spring", tagline: '1963年スプリング・リバーブ・ユニット · 真空管駆動',
      img: '/MainSt63Spring.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0',
      desc: "1963年のオリジナル外付けスプリング・リバーブをパーツごとに再構築。タンクを駆動する真空管、2本のスプリング、リカバリー段。サーフやヴィンテージ録音のドリップとスプラッシュはここから生まれ、Dwell を上げて強く弾くほどウェットでワイルドに。オリジナル同様アンプの前に、またはスプリングをステレオに分けてバスで。",
      specs: ["12AT7 入力と 6V6 ドライバー：Dwell を上げるほどウェットで攻撃的なスプラッシュ", "定番のドリップを再現する2本の分散性スプリング", "ユニットと同じ Dwell、Mixer、Tone とリバーブ・スイッチ", "バス用の DRY off と STEREO スプリング", "ケーブル長の設定：長いほど暗く", "CPU負荷が軽い"]
    },
    'main-st-5f1': {
      name: 'Main St 5F1', tagline: 'Tweed 1956 · 5ワット · シングルエンド',
      img: '/MainSt5F1.png', free: true, soon: false, isNew: true, downloadUrl: 'https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt5F1-v1.0.2',
      desc: "1956年製ツイード Champ のオリジナル回路を真空管ひとつずつ再構築。12AX7、1本の 6V6、5Y3 整流管が実機と同じように連動します。だからノブ1つですべてをカバー（低い位置では甘いクリーン、中間で温かいクランチ、上げれば歌うようなオーバードライブ）、ピッキングにも実機のように応えます。",
      specs: ["12AX7 プリアンプ：強く弾くと歪み始めるきらびやかなクリーン", "シングルエンドの 6V6：小型ツイードならではの甘く圧縮されたオーバードライブ", "5Y3 整流管：ピックで感じるサグと膨らみ", "パワー管と相互作用する Jensen P10R", "2系統の入力：Jack 2 はより柔らかく暗めで、ハイ出力ピックアップ向け", "SM57・SM94 のキャビネットテイクと Direct", "チューナー内蔵"]
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

export const PLUGIN_ORDER = ['main-st-5e3', 'main-st-63-spring', 'main-st-5f1', 'midnight-rambler', 'tuner-pedal']
