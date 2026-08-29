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

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/'
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/'
    }
  }
})
