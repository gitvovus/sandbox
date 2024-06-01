<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { type Worker } from './model';

const { model } = defineProps<{ model: Worker }>();
const root = ref();

onMounted(() => {
  model.mount(root.value);
});

onBeforeUnmount(() => {
  model.unmount();
});
</script>

<template>
  <div class="view">
    <div
      ref="root"
      class="overlay"
    >
      <ui-item
        class="overlay"
        :model="model.root"
      />
    </div>
    <div class="images-toolbox anchor top right flex">
      <ui-range
        v-model="model.selectedIndex"
        class="images-range"
        :min="0"
        :max="model.images.length - 1"
        :step="1"
      />
      <ui-range
        v-model="model.brightness"
        class="images-range"
        :min="0"
        :max="200"
        :step="1"
      />
      <ui-range
        v-model="model.contrast"
        class="images-range"
        :min="0"
        :max="200"
        :step="1"
      />
      <ui-range
        v-model="model.grayscale"
        class="images-range"
        :min="0"
        :max="100"
        :step="1"
      />
    </div>
  </div>
</template>

<style lang="scss">
.images-range {
  width: 2em;
  height: 10em;
}
</style>
