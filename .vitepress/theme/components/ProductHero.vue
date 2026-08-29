<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { PLUGINS } from '../data/plugins.js'
import { t, localePrefix } from '../data/i18n.js'

const props = defineProps({
  id: { type: String, required: true }
})

const { localeIndex } = useData()
const ui = computed(() => t(localeIndex.value))
const plugin = computed(() => (PLUGINS[localeIndex.value] || PLUGINS.root)[props.id])
const prefix = computed(() => localePrefix(localeIndex.value))
</script>

<template>
  <div v-if="plugin">
    <a class="back-link" :href="withBase(prefix + '/')">{{ ui.backToPlugins }}</a>

    <div class="product-hero">
      <div class="product-shot"><img :src="plugin.img" :alt="plugin.name" /></div>
      <div class="product-info">
        <h1>{{ plugin.name }}</h1>
        <span class="card-tag">{{ plugin.tagline }}</span>
        <div class="card-badges" style="margin-top:.6rem;">
          <span class="chip">🪟 Win</span><span class="chip">🍎 Mac</span><span class="chip">🐧 Linux</span>
        </div>
        <p class="desc">{{ plugin.desc }}</p>

        <div v-if="plugin.soon" class="callout">{{ ui.soonNotice }}</div>

        <div class="product-cta-row">
          <span v-if="plugin.soon" class="chip soon" style="font-size:1.05rem;">{{ ui.comingSoon }}</span>
          <span v-else class="chip free" style="font-size:1.05rem;">{{ ui.free }}</span>
          <a v-if="!plugin.soon" class="btn btn-primary" :href="plugin.downloadUrl || '#'" target="_blank" rel="noopener">{{ ui.download }}</a>
          <a class="btn btn-ghost" href="#manual">{{ ui.viewManual }} ↓</a>
        </div>

        <div class="spec-block">
          <div class="eyebrow">{{ ui.specs }}</div>
          <ul class="spec-list">
            <li v-for="(s, i) in plugin.specs" :key="i">{{ s }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
