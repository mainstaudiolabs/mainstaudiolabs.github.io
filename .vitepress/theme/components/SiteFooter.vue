<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { t, localePrefix, LEARN_PATH } from '../data/i18n.js'

const { localeIndex } = useData()
const prefix = computed(() => localePrefix(localeIndex.value))
const ui = computed(() => t(localeIndex.value))
const learnPath = computed(() => LEARN_PATH[localeIndex.value] || LEARN_PATH.root)
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <div class="site-footer-brand">
        <a :href="withBase(prefix + '/')" class="site-logo"><b>Main St</b> Audio Labs</a>
        <p>Independent studio audio tools — no bloatware, no subscriptions, no invasive DRM.</p>
      </div>
      <div class="site-footer-links">
        <div class="site-footer-col">
          <h4>Site</h4>
          <a :href="withBase(prefix + '/')">{{ ui.plugins }}</a>
          <a :href="withBase(learnPath)">{{ ui.learn }}</a>
          <a :href="withBase(prefix + '/about')">{{ ui.about }}</a>
        </div>
        <div class="site-footer-col">
          <h4>Contact</h4>
          <a href="mailto:mainstaudiolabs@gmail.com">mainstaudiolabs@gmail.com</a>
          <a href="https://ko-fi.com/mainstaudiolabs" target="_blank" rel="noopener">Ko-fi / Crypto</a>
        </div>
      </div>
    </div>
    <div class="site-footer-bottom">© {{ year }} Main St Audio Labs — Independent Audio Engineering Lab</div>
  </footer>
</template>
