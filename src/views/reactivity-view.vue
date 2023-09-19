<script setup lang="ts">
import { ReactivityModel } from '@/modules/reactivity-model';

const { model } = defineProps<{ model: ReactivityModel }>();
</script>

<template>
  <div class="view p-1">
    <div class="header">flatArray</div>
    <div class="array">
      <div class="item" v-for="item in model.flatArray" :key="item.key">
        <div>name</div>
        <div>{{ item.name }}</div>
        <div>count</div>
        <div>{{ item.count }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  margin-bottom: 0.5em;
}
.array {
  /* max-height: 10em; */
  overflow-y: auto;
}

.item {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: min-content auto;
  column-gap: 1em;
  padding-left: 1em;
}

.item:nth-child(odd) {
  background-color: rgb(0 0 0 / 0.1);
}
</style>
