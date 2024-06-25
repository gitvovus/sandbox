<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { type ViewState } from '@/modules/view-model';
import { type Gears } from './gears';

const { model } = defineProps<{
  model: Gears;
  state: ViewState;
}>();
const root = ref();

onMounted(() => model.mount(root.value));
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <div class="view">
    <div ref="root" class="paper clip view">
      <ui-item class="clip view" :model="model.root" />
    </div>
    <transition name="delayed">
      <div v-if="state === 'mini'" />
      <div v-else class="view-header">
        <div class="view-title">
          gears
        </div>
        <div class="view-subtitle">
          rotate them!
        </div>
      </div>
    </transition>
    <transition name="delayed">
      <div v-if="state === 'mini'" />
      <div v-else class="tool-box top right col">
        <ui-button class="btn" @click="model.reset()">
          reset
        </ui-button>
        <ui-button class="btn" @click="model.check()">
          check
        </ui-button>
        <ui-button class="btn" @click="model.start()">
          start
        </ui-button>
        <ui-button class="btn" @click="model.stop()">
          stop
        </ui-button>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.shaft-base { fill: #506070; }

.shaft-back {
  &.powered { fill: url(#shaft-back-powered); }
  &.unpowered { fill: url(#shaft-back-unpowered); }
  &.unpowered.destination { fill: url(#shaft-back-unpowered-destination); }
}

.shaft {
  stroke: rgb(0 0 0 / 0.5);
  &.source { fill: #209010; }
  &.mediator { fill: #e0c000; }
  &.destination { fill: #f03020; }
}

.gear,
.stub {
  stroke: rgb(0 0 0 / 0.5);
  transition: stroke 0.15s ease-in-out;
  &.selected { stroke: white; }
}

.fill-0 { fill: #c0a010; }
.fill-1 { fill: #4080a0; }
.fill-2 { fill: #c02030; }
.fill-3 { fill: #30a020; }
.fill-4 { fill: #0060c0; }
.fill-5 { fill: #e06000; }
.fill-6 { fill: #e080b0; }
.fill-7 { fill: #984898; }
</style>
