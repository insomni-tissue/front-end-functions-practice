<template>
  <div class="aMap">
    <input id="excel-upload-input" ref="excel-upload-input" type="file" accept="image/*" @change="upload">
  </div>
</template>
<script setup lang="ts">
import { getImageData, downloadImage, downloadImageTwo } from 'front-end-functions';
const upload = (e: any) => {
  getImageData(e).then((res) => {
    console.log('res', res)
  })
}
downloadImage('/src/assets/bg.jpeg', 'test001', 'jpeg')
downloadImageTwo('/src/assets/bg.jpeg', 'test05', 'jpeg')
</script>
<style scoped>
</style>