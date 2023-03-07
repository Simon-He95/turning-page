<script setup lang="ts">
const images = [
  new URL('../../public/1.jpg', import.meta.url).href,
  new URL('../../public/2.jpg', import.meta.url).href,
  new URL('../../public/3.jpg', import.meta.url).href,
  new URL('../../public/4.jpg', import.meta.url).href,
  new URL('../../public/5.jpg', import.meta.url).href,
]
</script>

<template>
  <div py4>
    <Turning :images="images" />
  </div>
</template>

<style scoped>
ul:hover > li:not(:last-child){
  transform: rotateY(-180deg);
  transition: var(--un-hover-transition) !important;
}
</style>
