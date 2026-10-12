import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Main St Audio Labs",
  description: "Record-Inspired Audio Tools and Signal Processors",
  head: [
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],

  themeConfig: {
    aside: false,
    docFooter: {
      prev: false,
      next: false
    }
  },

  // 12/10/2026: solo ingles (se sacaron castellano y japones)
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    }
  }
})
