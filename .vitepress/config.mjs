import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Main St Audio Labs",
  description: "Record-Inspired Audio Tools and Signal Processors",
  head: [
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  
  themeConfig: {
    docFooter: {
      prev: false,
      next: false
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
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
              { text: 'Vintage Tuner Stompbox (Tuner)', link: '/tuner-pedal' },
              { text: 'Tattoo You (1978–1981 Tube & FX)', link: '/tattoo-you' }
            ]
          },
          {
            text: 'Studio Archives',
            items: [
              { text: 'How the Stones Met Mesa (1978–1981)', link: '/history-mesa-stones' }
            ]
          }
        ]
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Acerca de', link: '/es/about' },
          { text: 'Apoya el Lab', link: '/es/support' }
        ],
        sidebar: [
          {
            text: 'Manuales de Plugins',
            items: [
              { text: 'Midnight Rambler (5E3 Tweed)', link: '/es/midnight-rambler' },
              { text: 'Vintage Tuner Stompbox (Afinador)', link: '/es/tuner-pedal' },
              { text: 'Tattoo You (Amplis & FX 1978–1981)', link: '/es/tattoo-you' }
            ]
          },
          {
            text: 'Archivos de Estudio',
            items: [
              { text: 'Los Stones y Mesa/Boogie (1978–1981)', link: '/es/history-mesa-stones' }
            ]
          }
        ]
      }
    }
  }
})