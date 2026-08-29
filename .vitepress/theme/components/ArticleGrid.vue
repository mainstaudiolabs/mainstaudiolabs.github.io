<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { ARTICLES } from '../data/articles.js'

const props = defineProps({
  limit: { type: Number, default: 0 }
})

const { localeIndex } = useData()

const items = computed(() => {
  const list = ARTICLES[localeIndex.value] || ARTICLES.root
  return props.limit ? list.slice(0, props.limit) : list
})
</script>

<template>
  <div class="article-grid">
    <a v-for="a in items" :key="a.id" class="article-card" :href="withBase(a.link)">
      <div v-if="a.diagram" class="article-thumb diagram">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="20" width="30" height="38" rx="2" stroke="#8C6A1E" stroke-width="1.4"/>
          <circle cx="52" cy="30" r="11" stroke="#C31E27" stroke-width="1.4"/>
          <line x1="52" y1="41" x2="52" y2="58" stroke="#C31E27" stroke-width="1.4"/>
          <line x1="38" y1="34" x2="46" y2="31" stroke="#8C6A1E" stroke-width="1.2" stroke-dasharray="2 2"/>
        </svg>
      </div>
      <div v-else class="article-thumb"><img :src="a.img" alt="" /></div>
      <div class="article-body">
        <div class="eyebrow" style="color:var(--vp-c-text-3);">{{ a.cat }}</div>
        <h3>{{ a.title }}</h3>
        <p>{{ a.excerpt }}</p>
      </div>
    </a>
  </div>
</template>
