<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { PLUGINS, PLUGIN_ORDER } from '../data/plugins.js'
import PluginCard from './PluginCard.vue'

const props = defineProps({
  exclude: { type: String, default: '' }
})

const { localeIndex } = useData()

const items = computed(() => {
  const data = PLUGINS[localeIndex.value] || PLUGINS.root
  return PLUGIN_ORDER.filter((id) => id !== props.exclude).map((id) => ({ id, plugin: data[id] }))
})
</script>

<template>
  <div class="grid">
    <PluginCard v-for="item in items" :key="item.id" :id="item.id" :plugin="item.plugin" />
  </div>
</template>
