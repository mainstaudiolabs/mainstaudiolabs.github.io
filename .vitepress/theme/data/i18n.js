export const UI = {
  root: {
    plugins: 'Plugins', about: 'About', support: 'Support', free: 'Free',
    backToPlugins: '← Back to Plugins', otherPlugins: 'Other plugins', specs: 'Specifications',
    download: 'Download', downloadTrial: 'Download free trial', buy: 'Buy license', viewManual: 'View full manual', viewDetails: 'View details',
    comingSoon: 'Coming soon', newBadge: 'New',
    soonNotice: '🕓 Still in development — coming soon for download.',
    tipJar: 'Tip jar', trial: 'trial',
    trademarkDisclaimer: 'All product names, trademarks and registered trademarks mentioned (including Fender®, Princeton Reverb®, Deluxe®, Champ®, Ibanez®, Tube Screamer®, Klon® and Uni-Vibe®) belong to their respective owners and are used solely for historical context and to identify the analog circuits modeled. Main St Audio Labs is an independent developer and is not affiliated with, endorsed by or sponsored by Fender Musical Instruments Corporation, Hoshino Gakki (Ibanez), Klon LLC or Dunlop Manufacturing (Uni-Vibe).'
  }
}

// slugs that differ per locale (filenames were translated for some pages)
export const MANUALS_PATH = { root: '/manuals' }

export function localePrefix(localeIndex) {
  return localeIndex === 'root' ? '' : '/' + localeIndex
}

export function t(localeIndex) {
  return UI[localeIndex] || UI.root
}
