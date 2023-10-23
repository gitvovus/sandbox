<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { type GearBoxModel } from '@/modules/gear-box-model';

const props = defineProps<{ model: GearBoxModel }>();
const root = ref();

onMounted(() => {
  props.model.mount(root.value);
});

onBeforeUnmount(() => {
  props.model.unmount();
});
</script>

<template>
  <div class="view" ref="root">
    <ui-item class="overlay" :model="model.root" />
    <div class="anchor top right flex">
      <ui-button class="button" @click.stop="model.test()">test</ui-button>
      <ui-button class="button" @click.stop="model.reset()">reset</ui-button>
      <ui-button class="button" @click.stop="model.check()">check</ui-button>
      <ui-button class="button" @click.stop="model.start()">start</ui-button>
      <ui-button class="button" @click.stop="model.stop()">stop</ui-button>
    </div>
    <slot />
  </div>
</template>

<style>
.shaft-back.powered {
  fill: url(#shaft-back-powered);
}

.shaft-back.unpowered {
  fill: url(#shaft-back-unpowered);
}

.shaft-back.unpowered.destination {
  fill: url(#shaft-back-unpowered-destination);
}

.shaft-base {
  fill: #506070;
}

.shaft {
  filter: var(--shaft-shadow);
}

.shaft.source {
  fill: #209010;
}

.shaft.mediator {
  fill: #e0c000;
}

.shaft.destination {
  fill: #f03020;
}

.gear,
.stub {
  transition: all 0.15s ease-in-out;
  stroke: rgb(0 0 0 / 0.5);
}
.gear.selected,
.stub.selected {
  stroke: white;
}

.fill-0 {
  fill: #c0a010;
}

.fill-1 {
  fill: #4080a0;
}

.fill-2 {
  fill: #c02030;
}

.fill-3 {
  fill: #30a020;
}

.fill-4 {
  fill: #0060c0;
}

.fill-5 {
  fill: #e06000;
}

.fill-6 {
  fill: #e080b0;
}

.fill-7 {
  fill: #984898;
}
</style>
