<script setup>
// 01/11/2026: sin pestañas. El home arma dos secciones (amplificadores y pedales) con category="amp" / "fx";
// así las dos quedan en el HTML que leen los buscadores. Sin category, todos (amplis primero, como PLUGIN_ORDER).
import { computed } from 'vue'
import { useData } from 'vitepress'
import { PLUGINS, PLUGIN_ORDER } from '../data/plugins.js'
import PluginCard from './PluginCard.vue'

const props = defineProps({
  exclude: { type: String, default: '' },
  category: { type: String, default: '' }
})

const { localeIndex } = useData()

const items = computed(() => {
  const data = PLUGINS[localeIndex.value] || PLUGINS.root
  return PLUGIN_ORDER
    .filter((id) => id !== props.exclude && data[id])
    .filter((id) => !props.category || data[id].category === props.category)
    .map((id) => ({ id, plugin: data[id] }))
})
</script>

<template>
  <div class="grid">
    <PluginCard v-for="item in items" :key="item.id" :id="item.id" :plugin="item.plugin" />
  </div>
</template>
