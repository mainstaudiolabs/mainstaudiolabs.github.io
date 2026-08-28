import DefaultTheme from 'vitepress/theme'
import './custom.css'
import NewsletterSubscribe from './components/NewsletterSubscribe.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NewsletterSubscribe', NewsletterSubscribe)
  }
}
