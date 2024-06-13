<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { type Flowers } from './flowers';
import { type ViewState } from '@/modules/view-model';

const { model, state } = defineProps<{
  model: Flowers;
  state: ViewState;
}>();
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
    <div ref="root" class="paper clip view">
      <ui-item class="clip view" :model="model.root" />
    </div>

    <transition name="fast">
      <div v-if="state === 'mini'" />
      <div v-else>
        <div class="tools left top col">
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

        <div class="tools top right">
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
    </transition>
  </div>
</template>

<style lang="scss">
$large: 10em;
$small: 1.5em;

.images-h-range {
  width: $large;
  height: $small;
}

.images-v-range {
  width: $small;
  height: $large;
}
</style>
