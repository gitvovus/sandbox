<script setup lang="ts">
import { WebPage } from './web-page';

const { model } = defineProps<{ model: WebPage }>();

model.use();
</script>

<template>
  <div class="surface view">
    <div :ref="model.root" class="web-page">
      <div class="web-aside">
        <div v-for="i in 1" :key="i" class="box-200 m-1" />
      </div>
      <div class="web-main">
        <div class="web-header">
          header
        </div>
        <div class="web-content">
          <h1>Welcome</h1>
          <div class="flex col gap-2">
            <div v-for="i in 10" :key="i" class="box-200" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="tools top right m-2 p-2">
      {{ model.text || ':' }}
    </div> -->
  </div>
</template>

<style lang="scss">
.web-page {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: min-content 1fr;
}
.web-header {
  position: sticky;
  top: 0;
  background-color: rgb(0 0 0 / 0.75);
  backdrop-filter: blur(5px);
  display: flex;
  padding: 1em;
}
.web-main {
  position: relative;
  overflow: auto;
  // display: grid;
  // grid-template-rows: 1fr;
  // grid-template-columns: min-content 1fr;
}
.web-aside {
  width: 16em;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.web-content {
  overflow: auto;
}
</style>
