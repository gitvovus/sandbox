<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { type Worker } from './worker';

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
  <div class="view paper">
    <div ref="root" class="overlay">
      <ui-item class="overlay" :model="model.root" />
    </div>

    <div class="tools left top flex col m-05 p-05">
      count: {{ model.count }}
      <ui-range
        v-model="model.count"
        class="images-h-range"
        :min="model.imagesMin"
        :max="model.imagesMax"
      />
      radius: {{ model.radius }}
      <ui-range
        v-model="model.radius"
        class="images-h-range"
        :min="model.radiusMin"
        :max="model.radiusMax"
        :step="model.radiusStep"
      />
      petals: {{ model.petals }}
      <ui-range
        v-model="model.petals"
        class="images-h-range"
        :min="model.petalsMin"
        :max="model.petalsMax"
      />
      <ui-button class="btn" @click="model.generate()">
        Generate images
      </ui-button>
    </div>

    <div class="tools bottom right flex m-05 p-05">
      <ui-range
        v-model="model.selectedIndex"
        class="images-v-range"
        :min="0"
        :max="Math.max(0, model.images.length - 1)"
        :step="1"
      />
      <ui-range
        v-model="model.brightness"
        class="images-v-range"
        :min="0"
        :max="200"
        :step="1"
      />
      <ui-range
        v-model="model.contrast"
        class="images-v-range"
        :min="0"
        :max="200"
        :step="1"
      />
      <ui-range
        v-model="model.grayscale"
        class="images-v-range"
        :min="0"
        :max="100"
        :step="1"
      />
    </div>
  </div>
</template>

<style lang="scss">
$large: 10em;
$small: 2em;

.images-h-range {
  width: $large;
  height: $small;
}

.images-v-range {
  width: $small;
  height: $large;
}
</style>
