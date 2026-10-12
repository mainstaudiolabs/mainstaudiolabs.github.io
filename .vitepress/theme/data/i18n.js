export const UI = {
  root: {
    plugins: 'Plugins', about: 'About', support: 'Support', free: 'Free',
    backToPlugins: '← Back to Plugins', otherPlugins: 'Other plugins', specs: 'Specifications',
    download: 'Download', viewManual: 'View full manual', viewDetails: 'View details',
    comingSoon: 'Coming soon', newBadge: 'New',
    soonNotice: '🕓 Still in development — coming soon for download.'
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
