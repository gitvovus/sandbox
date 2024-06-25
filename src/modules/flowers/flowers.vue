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
  <div class="flowers view" :class="{ out: state === 'mini' }">
    <div ref="root" class="relative paper">
      <ui-item class="clip view" :model="model.root" />
    </div>
    <div class="flowers-tools surface">
      <div class="properties">
        <div class="section">
          <div class="section-header">
            Generation parameters
          </div>
          <div class="flex jc-between">
            <span class="muted tiny">count</span>
            {{ model.count }}
          </div>
          <ui-range
            v-model="model.count"
            :min="model.countMin"
            :max="model.countMax"
            :step="model.countStep"
          />
          <div class="flex jc-between">
            <span class="muted tiny">radius</span>
            {{ model.radius }}
          </div>
          <ui-range
            v-model="model.radius"
            :min="model.radiusMin"
            :max="model.radiusMax"
            :step="model.radiusStep"
          />
          <div class="flex jc-between">
            <span class="muted tiny">petals</span>
            {{ model.petals }}
          </div>
          <ui-range
            v-model="model.petals"
            :min="model.petalsMin"
            :max="model.petalsMax"
          />
          <ui-button v-if="model.todo === 0" class="btn mt-2" @click="model.generate()">
            Generate
          </ui-button>
          <ui-button v-else class="btn mt-2" @click="model.stop()">
            Stop
          </ui-button>
          <div class="flex ai-center mt-2">
            <div v-if="model.todo">
              to do: {{ model.todo }}
            </div>
          </div>
        </div>
        <div class="section">
          <div class="section-header">
            Images
          </div>
          <div class="flex jc-between">
            <span class="muted tiny">index</span>
            {{ model.selectedIndex }}
          </div>
          <ui-range
            v-model="model.selectedIndex"
            :min="0"
            :max="Math.max(0, model.images.length - 1)"
            :step="1"
          />
          <div class="flex jc-between">
            <span class="muted tiny">brightness</span>
            {{ model.brightness }}
          </div>
          <ui-range
            v-model="model.brightness"
            :min="0"
            :max="200"
            :step="1"
          />
          <div class="flex jc-between">
            <span class="muted tiny">contrast</span>
            {{ model.contrast }}
          </div>
          <ui-range
            v-model="model.contrast"
            :min="0"
            :max="200"
            :step="1"
          />
          <div class="flex jc-between">
            <span class="muted tiny">grayscale</span>
            {{ model.grayscale }}
          </div>
          <ui-range
            v-model="model.grayscale"
            :min="0"
            :max="100"
            :step="1"
          />
        </div>
      </div>

      <div class="clip">
        <img
          v-if="model.image && model.image.source"
          class="fit-contain"
          :src="model.image.source"
        >
      </div>
    </div>

    <transition name="delayed">
      <div v-if="state === 'mini'" />
      <div v-else class="view-header">
        <div class="view-title">
          flowers
        </div>
        <div class="view-subtitle">
          via web-worker
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
$tool-width: 18em;
.flowers {
  display: grid;
  grid-template-columns: 1fr $tool-width;
  grid-template-rows: 1fr;
  user-select: none;
  transition: right var(--fast) ease-in-out;
  transition-delay: calc(var(--slow) - var(--fast));
  &.out {
    right: -#{$tool-width};
    transition-delay: 0s;
  }
}

.flowers-tools {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(10em, min-content) minmax(10em, 1fr);
  overflow: auto;
}

.flowers-background {
  fill: rgb(0 0 0 / 0.125);
}
</style>
