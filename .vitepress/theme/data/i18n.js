export const UI = {
  root: {
    plugins: 'Plugins', learn: 'Learn', about: 'About', support: 'Support', free: 'Free',
    backToPlugins: '← Back to Plugins', otherPlugins: 'Other plugins', specs: 'Specifications',
    download: 'Download', viewManual: 'View full manual', viewDetails: 'View details',
    comingSoon: 'Coming soon', archive: 'View full archive →', fromLab: 'From the lab notebook',
    soonNotice: '🕓 Still in development — coming soon for download.'
  },
  es: {
    plugins: 'Plugins', learn: 'Aprender', about: 'Acerca de', support: 'Apoyar', free: 'Gratis',
    backToPlugins: '← Volver a Plugins', otherPlugins: 'Otros plugins', specs: 'Especificaciones',
    download: 'Descargar', viewManual: 'Ver manual completo', viewDetails: 'Ver detalles',
    comingSoon: 'Próximamente', archive: 'Ver todo el archivo →', fromLab: 'Del cuaderno de laboratorio',
    soonNotice: '🕓 Todavía en desarrollo — pronto disponible para descarga.'
  },
  ja: {
    plugins: 'プラグイン', learn: 'アーカイブ', about: '概要', support: 'サポート', free: '無料',
    backToPlugins: '← プラグインに戻る', otherPlugins: '他のプラグイン', specs: '仕様',
    download: 'ダウンロード', viewManual: 'マニュアルを見る', viewDetails: '詳細を見る',
    comingSoon: '近日公開', archive: 'すべて見る →', fromLab: 'ラボ・ジャーナルより',
    soonNotice: '🕓 開発中 — 近日ダウンロード公開予定。'
  }
}

// slugs that differ per locale (filenames were translated for some pages)
export const LEARN_PATH = { root: '/audio-and-mixing', es: '/es/audio-y-mezcla', ja: '/ja/audio-and-mixing' }
export const MANUALS_PATH = { root: '/manuals', es: '/es/manuales', ja: '/ja/manuals' }

export function localePrefix(localeIndex) {
  return localeIndex === 'root' ? '' : '/' + localeIndex
}

export function t(localeIndex) {
  return UI[localeIndex] || UI.root
}
