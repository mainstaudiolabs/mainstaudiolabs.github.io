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
          { text: 'Manuals', link: '/manuals' },
          { text: 'Audio & Mixing', link: '/audio-and-mixing' },
          { text: 'Backstage', link: '/backstage' },
          { text: 'About', link: '/about' },
          { text: 'Support', link: '/support' }
        ],
        sidebar: [
          {
            text: 'SECTIONS',
            items: [
              { text: '📁 Plugins Manuals', link: '/manuals' },
              { text: '🎛️ Audio & Mixing', link: '/audio-and-mixing' },
              { text: '🎸 Backstage', link: '/backstage' }
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
          { text: 'Manuales', link: '/es/manuales' },
          { text: 'Audio y Mezcla', link: '/es/audio-y-mezcla' },
          { text: 'Backstage', link: '/es/backstage' },
          { text: 'Acerca de', link: '/es/about' },
          { text: 'Apoyo', link: '/es/support' }
        ],
        sidebar: [
          {
            text: 'SECCIONES',
            items: [
              { text: '📁 Manuales de Plugins', link: '/es/manuales' },
              { text: '🎛️ Audio y Mezcla', link: '/es/audio-y-mezcla' },
              { text: '🎸 Backstage', link: '/es/backstage' }
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
          { text: 'マニュアル', link: '/ja/manuals' },
          { text: 'オーディオ＆ミックス', link: '/ja/audio-and-mixing' },
          { text: 'バックステージ', link: '/ja/backstage' },
          { text: '概要', link: '/ja/about' },
          { text: '開発支援', link: '/ja/support' }
        ],
        sidebar: [
          {
            text: 'ナビゲーション',
            items: [
              { text: '📁 プラグイン・マニュアル', link: '/ja/manuals' },
              { text: '🎛️ オーディオ＆ミックス', link: '/ja/audio-and-mixing' },
              { text: '🎸 バックステージ', link: '/ja/backstage' }
            ]
          }
        ]
      }
    }
  }
})