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
      <ui-button class="button" @click.stop="model.check()">check</ui-button>
      <ui-button class="button" @click.stop="model.startRotation()">animate</ui-button>
      <ui-button class="button" @click.stop="model.stopRotation()">stop</ui-button>
    </div>
    <!-- <info-view class="debug anchor bottom left m-05" :model="model.info" /> -->
    <slot />
  </div>
</template>

<style lang="scss">
$shape-shadow: drop-shadow(0 0 0.04px rgba(black, 0.5));
$shaft-shadow: drop-shadow(0 0 0.1px black);
$gear-selected: drop-shadow(0 0 0.1px rgba(black, 1));

.shaft-back {
  &.powered {
    fill: url(#shaft-back-powered);
  }
  &.unpowered {
    fill: url(#shaft-back-unpowered);
  }
  &.unpowered.destination {
    fill: url(#shaft-back-unpowered-destination);
  }
}

.shaft-base {
  fill: #506070;
  filter: $shape-shadow;
}

.shaft {
  filter: $shaft-shadow;
  &.source {
    fill: #209010;
  }
  &.mediator {
    fill: #e0c000;
  }
  &.destination {
    fill: #f03020;
  }
}

.gear,
.stub {
  filter: $shape-shadow;
  &.selected {
    opacity: 0.6;
    filter: $gear-selected;
  }
  transition: all 0.15s ease-in-out;
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
  fill: #0050f0;
}
.fill-5 {
  fill: #e06000;
}
.fill-6 {
  fill: #e080b0;
}
</style>
