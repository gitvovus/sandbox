<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import { type Flowers } from './flowers';
import { type ViewState } from '@/modules/view-model';

const props = defineProps<{
  model: Flowers;
  state: ViewState;
}>();

const root = ref<HTMLElement>(undefined!);
const mini = computed(() => props.state === 'mini');

onMounted(() => props.model.mount(root.value));
onBeforeUnmount(() => props.model.unmount());
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
            generation parameters
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
            :disabled="mini"
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
            :disabled="mini"
          />
          <div class="flex jc-between">
            <span class="muted tiny">petals</span>
            {{ model.petals }}
          </div>
          <ui-range
            v-model="model.petals"
            :min="model.petalsMin"
            :max="model.petalsMax"
            :disabled="mini"
          />

          <div class="section-header flex ai-center gap-2">
            <div
              class="flower-color"
              :style="{ backgroundColor: `rgb(${model.bottom.r} ${model.bottom.g} ${model.bottom.b})` }"
            />
            <span>bottom color</span>
          </div>
          <div class="flex jc-between">
            <span class="muted tiny">r</span>
            {{ model.bottom.r }}
          </div>
          <ui-range v-model="model.bottom.r" :min="0" :max="255" :step="5" :disabled="mini" />
          <div class="flex jc-between">
            <span class="muted tiny">g</span>
            {{ model.bottom.g }}
          </div>
          <ui-range v-model="model.bottom.g" :min="0" :max="255" :step="5" :disabled="mini" />
          <div class="flex jc-between">
            <span class="muted tiny">b</span>
            {{ model.bottom.b }}
          </div>
          <ui-range v-model="model.bottom.b" :min="0" :max="255" :step="5" :disabled="mini" />

          <div class="section-header flex ai-center gap-2">
            <div
              class="flower-color"
              :style="{ backgroundColor: `rgb(${model.middle.r} ${model.middle.g} ${model.middle.b})` }"
            />
            <span>middle color</span>
          </div>
          <div class="flex jc-between">
            <span class="muted tiny">r</span>
            {{ model.middle.r }}
          </div>
          <ui-range v-model="model.middle.r" :min="0" :max="255" :step="5" :disabled="mini" />
          <div class="flex jc-between">
            <span class="muted tiny">g</span>
            {{ model.middle.g }}
          </div>
          <ui-range v-model="model.middle.g" :min="0" :max="255" :step="5" :disabled="mini" />
          <div class="flex jc-between">
            <span class="muted tiny">b</span>
            {{ model.middle.b }}
          </div>
          <ui-range v-model="model.middle.b" :min="0" :max="255" :step="5" :disabled="mini" />

          <div class="section-header flex ai-center gap-2">
            <div
              class="flower-color"
              :style="{ backgroundColor: `rgb(${model.top.r} ${model.top.g} ${model.top.b})` }"
            />
            <span>top color</span>
          </div>
          <div class="flex jc-between">
            <span class="muted tiny">r</span>
            {{ model.top.r }}
          </div>
          <ui-range v-model="model.top.r" :min="0" :max="255" :step="5" :disabled="mini" />
          <div class="flex jc-between">
            <span class="muted tiny">g</span>
            {{ model.top.g }}
          </div>
          <ui-range v-model="model.top.g" :min="0" :max="255" :step="5" :disabled="mini" />
          <div class="flex jc-between">
            <span class="muted tiny">b</span>
            {{ model.top.b }}
          </div>
          <ui-range v-model="model.top.b" :min="0" :max="255" :step="5" :disabled="mini" />

          <ui-button v-if="model.todo === 0" class="btn mt-2" :disabled="mini" @click="model.generate()">
            Generate
          </ui-button>
          <ui-button v-else class="btn mt-2" :disabled="mini" @click="model.stop()">
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
            images
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
            :disabled="mini"
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
            :disabled="mini"
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
            :disabled="mini"
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
            :disabled="mini"
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
$tool-width: 16em;
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

.flower-color {
  width: 1em;
  height: 1em;
  border: 1px solid rgb(var(--border));
  border-radius: var(--radius-small);
}
</style>
