import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Main St Audio Labs",
  description: "Record-Inspired Audio Tools and Signal Processors",
  head: [
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['script', {}, `
      (function() {
        var savedLang = localStorage.getItem('mainst_user_lang');
        var currentPath = window.location.pathname;
        
        // Auto-redirect on root visit if user hasn't explicitly chosen a language
        if (!savedLang && (currentPath === '/' || currentPath === '/index.html')) {
          var userLangs = navigator.languages || [navigator.language || ''];
          var isJapanese = userLangs.some(function(l) { return l && l.toLowerCase().startsWith('ja'); });
          var isSpanish = userLangs.some(function(l) { return l && l.toLowerCase().startsWith('es'); });
          
          if (isJapanese) {
            window.location.replace('/ja/');
          } else if (isSpanish) {
            window.location.replace('/es/');
          }
        }
      })();
    `]
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
          { text: 'The Lab Journal', link: '/journal' },
          { text: 'About', link: '/about' },
          { text: 'Support the Lab', link: '/support' }
        ],
        sidebar: [
          {
            text: 'Plugins Manuals',
            items: [
              { text: 'Tattoo You (Studio Workstation)', link: '/tattoo-you' },
              { text: 'Midnight Rambler (5E3 Tweed)', link: '/midnight-rambler' },
              { text: 'Vintage Tuner Stompbox (Tuner)', link: '/tuner-pedal' }
            ]
          },
          {
            text: 'The Lab Journal: Engineering & Mix',
            items: [
              { text: '1x12 Hardwood Cab & Mics Guide', link: '/audio-mics-guide' }
            ]
          },
          {
            text: 'The Lab Journal: Tone History',
            items: [
              { text: 'The Indestructible EVM-12L', link: '/electro-voice-evm12l' },
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
          { text: 'Cuadernos de Estudio', link: '/es/cuadernos' },
          { text: 'Acerca de', link: '/es/about' },
          { text: 'Apoya el Lab', link: '/es/support' }
        ],
        sidebar: [
          {
            text: 'Manuales de Plugins',
            items: [
              { text: 'Tattoo You (Estación de Estudio)', link: '/es/tattoo-you' },
              { text: 'Midnight Rambler (5E3 Tweed)', link: '/es/midnight-rambler' },
              { text: 'Vintage Tuner Stompbox (Afinador)', link: '/es/tuner-pedal' }
            ]
          },
          {
            text: 'Cuadernos: Ingeniería & Mezcla',
            items: [
              { text: 'Guía Maestra: Micrófonos y Tomas', link: '/es/guia-microfonos-tomas' }
            ]
          },
          {
            text: 'Cuadernos: Historia del Tono',
            items: [
              { text: 'El Rey Indestructible: EVM-12L', link: '/es/electro-voice-evm12l' },
              { text: 'Los Stones y Mesa/Boogie (1978–1981)', link: '/es/history-mesa-stones' }
            ]
          }
        ]
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'スタジオ・ジャーナル', link: '/ja/journal' },
          { text: '概要', link: '/ja/about' },
          { text: '開発支援', link: '/ja/support' }
        ],
        sidebar: [
          {
            text: 'プラグイン・マニュアル',
            items: [
              { text: 'Tattoo You (スタジオ・ワークステーション)', link: '/ja/tattoo-you' },
              { text: 'Midnight Rambler (5E3 Tweed)', link: '/ja/midnight-rambler' },
              { text: 'Vintage Tuner Stompbox (チューナー)', link: '/ja/tuner-pedal' }
            ]
          },
          {
            text: '音響工学＆ミキシング',
            items: [
              { text: '1x12 Hardwood キャビ＆マイクガイド', link: '/ja/audio-mics-guide' }
            ]
          },
          {
            text: 'トーン・ヒストリー',
            items: [
              { text: '不滅のトーン：Electro-Voice EVM-12L', link: '/ja/electro-voice-evm12l' },
              { text: 'ストーンズとMesa/Boogieの軌跡', link: '/ja/history-mesa-stones' }
            ]
          }
        ]
      }
    }
  }
})