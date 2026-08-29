<script setup>
import { ref, computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { t, localePrefix, LEARN_PATH } from '../data/i18n.js'

const { localeIndex, isDark, site } = useData()
const route = useRoute()
const menuOpen = ref(false)

const prefix = computed(() => localePrefix(localeIndex.value))
const ui = computed(() => t(localeIndex.value))
const learnPath = computed(() => LEARN_PATH[localeIndex.value] || LEARN_PATH.root)

const navItems = computed(() => ([
  { label: ui.value.plugins, href: prefix.value + '/' },
  { label: ui.value.learn, href: learnPath.value },
  { label: ui.value.about, href: prefix.value + '/about' },
  { label: ui.value.support, href: prefix.value + '/support' }
]))

const LANG_ABBR = { root: 'EN', es: 'ES', ja: 'JA' }

const languages = computed(() => {
  const locales = site.value.locales
  return Object.keys(locales).map((key) => ({
    key,
    label: locales[key].label,
    abbr: LANG_ABBR[key] || locales[key].label.slice(0, 2).toUpperCase(),
    link: locales[key].link || (key === 'root' ? '/' : '/' + key + '/')
  }))
})

function normalize(p) {
  return (p || '').replace(/\.html$/, '').replace(/\/index$/, '/').replace(/\/$/, '') || '/'
}

function isActive(href) {
  const current = normalize(route.path)
  const target = normalize(href)
  if (target === prefix.value + '' || target === '/') {
    return current === (prefix.value || '/')
  }
  return current === target
}

function toggleTheme() {
  isDark.value = !isDark.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="site-header-inner">
      <a :href="withBase(prefix + '/')" class="site-logo"><b>Main St</b> Audio Labs</a>

      <nav class="site-nav">
        <a v-for="item in navItems" :key="item.href" :href="withBase(item.href)"
           :class="{ active: isActive(item.href) }">{{ item.label }}</a>
      </nav>

      <div class="site-header-tools">
        <div class="site-lang">
          <a v-for="l in languages" :key="l.key" :href="l.link"
             :class="{ active: l.key === localeIndex }">{{ l.abbr }}</a>
        </div>
        <button class="theme-toggle-btn" @click="toggleTheme" aria-label="Toggle theme">◐</button>
        <button class="site-burger" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen" aria-label="Menu">
          <span></span>
        </button>
      </div>
    </div>

    <div class="site-mobile-panel" :class="{ open: menuOpen }">
      <nav>
        <a v-for="item in navItems" :key="item.href" :href="withBase(item.href)" @click="closeMenu">{{ item.label }}</a>
      </nav>
    </div>
  </header>
</template>
