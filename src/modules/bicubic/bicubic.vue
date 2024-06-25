<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { type ViewState } from '@/modules/view-model';
import { type Bicubic } from './bicubic';

const { model } = defineProps<{
  model: Bicubic;
  state: ViewState;
}>();

const root = ref();
const canvas = ref();

onMounted(() => model.mount(root.value, canvas.value));
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <div class="view">
    <div ref="root" class="paper clip view" tabindex="0">
      <canvas ref="canvas" />
    </div>

    <transition name="delayed">
      <div v-if="state === 'mini'" />
      <div v-else class="bicubic-tools surface">
        <div class="properties">
          <div class="section">
            <div class="section-header">
              Settings
            </div>
            <div class="flex jc-between">
              <span class="muted tiny">subdiv</span>
              {{ model.demo.subdiv }}
            </div>
            <ui-range
              v-model="model.demo.subdiv"
              :min="2"
              :max="16"
            />
            <div class="flex jc-between">
              <span class="muted tiny">show grid</span>
            </div>
            <ui-button v-model="model.demo.showGrid" class="flex ml-2" toggle>
              <div class="cbx-frame">
                <ui-icon class="check" :class="{ hidden: !model.demo.showGrid }" />
              </div>
            </ui-button>
            <div class="flex jc-between">
              <span class="muted tiny">show low res</span>
            </div>
            <ui-button v-model="model.demo.showLoRes" class="flex ml-2" toggle>
              <div class="cbx-frame">
                <ui-icon class="check" :class="{ hidden: !model.demo.showLoRes }" />
              </div>
            </ui-button>
          </div>
        </div>
      </div>
    </transition>

    <transition name="delayed">
      <div v-if="state === 'mini'" />
      <div v-else class="view-header">
        <div class="view-title">
          bicubic
        </div>
        <div class="view-subtitle">
          interpolation
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.bicubic-tools {
  position: absolute;
  top: 0;
  right: 0;
  width: 16em;
}
</style>
