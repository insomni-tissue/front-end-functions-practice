<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router'
const docEl = ref<HTMLElement>(document.documentElement);

const setRemUnit = function () {
  const clientWidth = docEl.value.clientWidth > 768 ? 768 : docEl.value.clientWidth;
  const rem = clientWidth / 7.68;
  docEl.value.style.fontSize = rem + 'px';
};
setRemUnit();
</script>
<template>
  <RouterView />
</template>
<style scoped>
</style>
