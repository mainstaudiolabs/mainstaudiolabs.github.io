import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue'
import NewsletterSubscribe from './components/NewsletterSubscribe.vue'
import PluginGrid from './components/PluginGrid.vue'
import PluginCard from './components/PluginCard.vue'
import ProductHero from './components/ProductHero.vue'
import ArticleGrid from './components/ArticleGrid.vue'
import ArticleHeader from './components/ArticleHeader.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('NewsletterSubscribe', NewsletterSubscribe)
    app.component('PluginGrid', PluginGrid)
    app.component('PluginCard', PluginCard)
    app.component('ProductHero', ProductHero)
    app.component('ArticleGrid', ArticleGrid)
    app.component('ArticleHeader', ArticleHeader)
  }
}
