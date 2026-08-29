<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { t, localePrefix } from '../data/i18n.js'

const props = defineProps({
  id: { type: String, required: true },
  plugin: { type: Object, required: true }
})

const { localeIndex } = useData()
const ui = computed(() => t(localeIndex.value))
const href = computed(() => localePrefix(localeIndex.value) + '/' + props.id)
</script>

<template>
  <a class="card" :href="withBase(href)">
    <div class="card-img"><img :src="plugin.img" :alt="plugin.name" /></div>
    <div class="card-body">
      <h3>{{ plugin.name }}</h3>
      <div class="card-tag">{{ plugin.tagline }}</div>
      <div class="card-badges">
        <span class="chip">🪟 Win</span><span class="chip">🍎 Mac</span><span class="chip">🐧 Linux</span>
      </div>
      <p class="card-desc">{{ plugin.desc }}</p>
      <div class="card-foot">
        <span v-if="plugin.soon" class="chip soon">{{ ui.comingSoon }}</span>
        <span v-else class="chip free">{{ ui.free || 'Free' }}</span>
        <span class="btn btn-primary btn-sm">{{ ui.viewDetails }}</span>
      </div>
    </div>
  </a>
</template>
