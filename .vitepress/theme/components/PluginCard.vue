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
// 01/11/2026: el circuito de referencia (modelRef) va visible debajo del nombre y en el alt de la imagen:
// es lo que la gente busca ("Princeton Reverb plugin"). La tagline queda en la página del plugin.
const alt = computed(() => props.plugin.modelRef ? props.plugin.name + ' – ' + props.plugin.modelRef : props.plugin.name)
</script>

<template>
  <a class="card" :class="'card-' + (plugin.category || 'fx')" :href="withBase(href)">
    <div class="card-img">
      <span v-if="plugin.isNew" class="card-new">{{ ui.newBadge }}</span>
      <img :src="plugin.img" :alt="alt" loading="lazy" />
    </div>
    <div class="card-body">
      <h3>{{ plugin.name }}</h3>
      <div v-if="plugin.modelRef" class="card-model">{{ plugin.modelRef }}</div>
      <p class="card-desc">{{ plugin.desc }}</p>
      <div class="card-foot">
        <span v-if="plugin.soon" class="chip soon">{{ ui.comingSoon }}</span>
        <span v-else-if="plugin.free === false && plugin.price" class="chip free">{{ plugin.price }} · {{ ui.trial }}</span>
        <span v-else class="chip free">{{ ui.free || 'Free' }}</span>
        <span class="btn btn-primary btn-sm">{{ ui.viewDetails }}</span>
      </div>
    </div>
  </a>
</template>
