export const UI = {
  root: {
    plugins: 'Plugins', about: 'About', support: 'Support', free: 'Free',
    backToPlugins: '← Back to Plugins', otherPlugins: 'Other plugins', specs: 'Specifications',
    download: 'Download', viewManual: 'View full manual', viewDetails: 'View details',
    comingSoon: 'Coming soon', newBadge: 'New',
    soonNotice: '🕓 Still in development — coming soon for download.'
  },
  es: {
    plugins: 'Plugins', about: 'Acerca de', support: 'Apoyar', free: 'Gratis',
    backToPlugins: '← Volver a Plugins', otherPlugins: 'Otros plugins', specs: 'Especificaciones',
    download: 'Descargar', viewManual: 'Ver manual completo', viewDetails: 'Ver detalles',
    comingSoon: 'Próximamente', newBadge: 'Novedad',
    soonNotice: '🕓 Todavía en desarrollo — pronto disponible para descarga.'
  },
  ja: {
    plugins: 'プラグイン', about: '概要', support: 'サポート', free: '無料',
    backToPlugins: '← プラグインに戻る', otherPlugins: '他のプラグイン', specs: '仕様',
    download: 'ダウンロード', viewManual: 'マニュアルを見る', viewDetails: '詳細を見る',
    comingSoon: '近日公開', newBadge: '新着',
    soonNotice: '🕓 開発中 — 近日ダウンロード公開予定。'
  }
}

// slugs that differ per locale (filenames were translated for some pages)
export const MANUALS_PATH = { root: '/manuals', es: '/es/manuales', ja: '/ja/manuals' }

export function localePrefix(localeIndex) {
  return localeIndex === 'root' ? '' : '/' + localeIndex
}

export function t(localeIndex) {
  return UI[localeIndex] || UI.root
}
