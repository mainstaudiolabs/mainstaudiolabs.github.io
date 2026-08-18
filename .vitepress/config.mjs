import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Main St Audio Labs",
  description: "Record-Inspired Audio Tools and Signal Processors",
  head: [
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Support the Lab', link: '/support' }
    ],

    sidebar: [
      {
        text: 'Plugins Manuals',
        items: [
          { text: 'Midnight Rambler (5E3 Tweed)', link: '/midnight-rambler' },
          { text: 'Beast of Burden (Mark I & FX)', link: '/beast-of-burden' }
        ]
      }
    ],

    docFooter: {
      prev: false,
      next: false
    }
  }
})
