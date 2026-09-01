// Para la tarjeta de 'open-low-e' falta la foto de la Stratocaster: cuando este,
// poner la imagen en public/ y cambiar  diagram: true  por  img: '/tu-foto.jpg'
// en las tres listas. Mientras tanto usa el icono generico para no dejar una
// imagen rota.
export const ARTICLES = {
  root: [
    { id: 'open-low-e', cat: 'Instrument Physics', title: 'The Note That Breaks the Amp: the Open Low E', excerpt: 'Why a Strat neck pickup on the open sixth string sounds broken instead of saturated -- the missing fourth harmonic, magnet pull, and the screwdriver that fixes it.', link: '/open-low-e-strat', diagram: true },
    { id: 'mics-guide', cat: 'Audio Engineering & Mixing', title: 'Master Guide: 1x12 Hardwood Cab, Mics & Phase', excerpt: 'EVM-12L driver physics, sample-accurate alignment at t=0, L/R takes, and single-track 3D stereo width.', link: '/audio-mics-guide', diagram: true },
    { id: 'evm12l', cat: 'Loudspeaker Physics', title: 'The Indestructible King: Electro-Voice EVM-12L', excerpt: 'The 300-Watt driver that defied fragile British paper cones. Why Keith Richards, SRV and Bonamassa swore by it.', link: '/electro-voice-evm12l', img: '/KEITH_RICHARDS_MESA_03.webp' },
    { id: 'stones-mesa', cat: 'Backstage & Chronicles', title: "The Stones Don't Pay for Amps (1978–1981)", excerpt: 'How Keith Richards adopted Mark I & II amps during the Paris sessions for Some Girls and Tattoo You.', link: '/history-mesa-stones', img: '/exile-on-main-st.webp' }
  ],
  es: [
    { id: 'open-low-e', cat: 'Física del Instrumento', title: 'La nota que rompe el amplificador: el Mi grave al aire', excerpt: 'Por qué el micrófono del mango de una Strat en la sexta al aire suena roto y no saturado: el cuarto armónico que falta, el tirón del imán, y el destornillador que lo arregla.', link: '/es/mi-al-aire-strat', diagram: true },
    { id: 'mics-guide', cat: 'Ingeniería & Mezcla', title: 'Guía Maestra: Micrófonos y Tomas (1x12 Hardwood)', excerpt: 'Física del altavoz EVM-12L, alineación a muestra cero (t=0), tomas L/R y el truco para lograr estéreo gigante en 1 sola pista.', link: '/es/guia-microfonos-tomas', diagram: true },
    { id: 'evm12l', cat: 'Física del Altavoz', title: 'El Rey Indestructible: Electro-Voice EVM-12L', excerpt: 'El altavoz de 300 Watts que desafió a los conos británicos. Por qué Keith Richards, SRV y Bonamassa lo eligieron.', link: '/es/electro-voice-evm12l', img: '/KEITH_RICHARDS_MESA_03.webp' },
    { id: 'stones-mesa', cat: 'Backstage & Crónicas', title: 'Los Stones no pagan por amplificadores (1978–1981)', excerpt: 'Cómo Keith Richards adoptó los amplificadores Mark I y II durante las sesiones de París para Some Girls y Tattoo You.', link: '/es/history-mesa-stones', img: '/exile-on-main-st.webp' }
  ],
  ja: [
    { id: 'open-low-e', cat: '楽器の物理学', title: 'アンプを壊す音：開放6弦E', excerpt: 'ストラトのフロントピックアップで開放6弦を弾くと、なぜ歪みではなく壊れた音になるのか。消える第4倍音、磁石の引力、そしてそれを直すドライバー。', link: '/ja/open-low-e-strat', diagram: true },
    { id: 'mics-guide', cat: '音響工学＆ミキシング', title: '完全ガイド：1x12 Hardwood キャビ＆マイク収録', excerpt: 'EVM-12Lのコーン音響物理、サンプル精度アライメント（t=0）、左右テイクの差異、1トラック完結のステレオ録音技術。', link: '/ja/audio-mics-guide', diagram: true },
    { id: 'evm12l', cat: '機材ヒストリー', title: '不滅のトーン・キング：Electro-Voice EVM-12L', excerpt: '薄型ペーパーコーンの常識を覆した300Wスピーカー。キース、SRV、ザック、ボナマッサが信頼した理由。', link: '/ja/electro-voice-evm12l', img: '/KEITH_RICHARDS_MESA_03.webp' },
    { id: 'stones-mesa', cat: 'バックステージ＆年代記', title: 'ストーンズとMesa/Boogie（1978–1981）', excerpt: '『Some Girls』『Tattoo You』のパリセッションにおいて、キース・リチャーズがいかにしてMark I/IIを導入したのか。', link: '/ja/history-mesa-stones', img: '/exile-on-main-st.webp' }
  ]
}
