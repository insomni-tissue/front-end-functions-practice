<template>
  <div class="aMap"></div>
</template>
<script setup lang="ts">
import { PinYinInteractor } from 'front-end-functions';
const value = '宝贝你好饕荑';
const onUpdatePinyin = async (value: string) => {
  /** 中文转拼音处理 */
  let newPinYin = '';
  let newPinYin_ = {};
  if (value) {
    newPinYin = await PinYinInteractor.getPinyin(value);
    newPinYin_ = await PinYinInteractor.getFormatedPinyin(value);
  }
  return {
    a: newPinYin?.toUpperCase(),
    b: newPinYin_
  };
};
const getPinyin = async (value: string) => {
  const pinYin = await onUpdatePinyin(value);
  console.log(pinYin);
}
getPinyin(value);
</script>
<style scoped>
.aMap {
  width: 100px;
  height: 100px;
  font-size: 26px;
  background: red;
}
</style>