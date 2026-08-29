<script setup>
defineProps({
  icon: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  meta: { type: String, default: '' }
})
</script>

<template>
  <div class="article-header">
    <h1><span v-if="icon" class="article-header-icon">{{ icon }}</span>{{ title }}</h1>
    <p v-if="subtitle" class="article-header-sub">{{ subtitle }}</p>
    <p v-if="meta" class="article-header-meta">{{ meta }}</p>
  </div>
</template>
