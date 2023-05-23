<template>
  <div class="aMap"></div>
</template>
<script setup lang="ts">
  import { downloadFile } from 'front-end-functions';
  // import { downExcel } from '@/server/file/index'
  // downExcel.then((data) => {
  //   console.log('data', data)
  // })
  downloadFile('/down-excel')
</script>
<style scoped>
  .aMap{
    width: 100px;
    height: 100px;
    font-size: 26px;
    background: red;
  }
</style>