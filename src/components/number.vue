<template>
  <div class="aMap"></div>
</template>
<script setup lang="ts">
  import { numberUtils } from 'front-end-functions';
  const a = 10;
  const b = 10.029;
  const precision = 4;
  console.log('加', numberUtils.add(a, b, precision));
  console.log('减', numberUtils.sub(a, b, precision));
  console.log('乘', numberUtils.mul(a, b, precision));
  console.log('除', numberUtils.div(a, b, precision));
  console.log('百分比', numberUtils.toPercent(a));
</script>
<style scoped>
  .aMap{
    width: 100px;
    height: 100px;
    font-size: 26px;
    background: red;
  }
</style>