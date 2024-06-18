<script setup lang="ts">
import { WebPage } from './web-page';

const { model } = defineProps<{ model: WebPage }>();

model.use();
</script>

<template>
  <div class="view">
    <div :ref="model.root" class="web-page">
      <h1>Web page</h1>
      <h2>Web page</h2>
      <h3>Web page</h3>
      <h4>Web page</h4>
      <h5>Web page</h5>
      <h6>Web page</h6>
      <div class="flex col gap-2">
        <div v-for="i in 10" :key="i" class="high paper" />
      </div>
    </div>
    <div class="glass tools top right m-2 p-2">
      {{ model.text || ':' }}
    </div>
  </div>
</template>

<style lang="scss">
.web-page {
  position: absolute;
  inset: 0;
  padding: 0.5em;
  overflow: auto;
}
.high {
  flex-shrink: 0;
  height: 200px;
}
</style>
