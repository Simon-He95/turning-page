<script setup lang="ts">
defineProps<{ images: string[] }>()
</script>

<template>
  <ul relative w-70 h-100 list-none ma transform-preserve-3d perspective-900px hover:translate-x-150px transition-1500>
    <li
      v-for="src, i in images" :key="src" absolute origin-left rotate-y="[--un-rotate-y]" bg="[url(--un-url)]"
      :style="{ '--un-url': `url(${src})`, '--un-rotate-y': `${i * 2 - 26}deg`, 'transition': `${2000 - i * 300}ms`, '--un-hover-transition': `${i * 0.6 + 1.4}s` }"
      w-full h-full bg-contain shadow="[1px_4px_5px_rgba(0,0,0,0.2)]"
    />
  </ul>
</template>

<style scoped>
ul:hover>li:not(:last-child) {
  transform: rotateY(-180deg);
  transition: var(--un-hover-transition) !important;
}
</style>
