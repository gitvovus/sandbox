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
    <ui-svg-element class="overlay" :model="model.root" />
    <div class="top-left">
      <ui-button @click.stop="model.check()">check</ui-button>
      <ui-button @click.stop="model.startRotation()">animate</ui-button>
      <ui-button @click.stop="model.stopRotation()">stop</ui-button>
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
.shaft {
  filter: drop-shadow(0 0 0.1px rgba(black, 0.5));
  &.powered {
    filter: drop-shadow(0 0 0.3px #30c000);
  }
  &.unpowered {
    filter: drop-shadow(0 0 0.3px #ff3000);
  }
}

$shadow: drop-shadow(0 0 0.04px rgba(black, 0.5));

.shaft-base {
  fill: #304050;
  filter: $shadow;
}

.no-mouse {
  pointer-events: none;
}

.gear,
.stub {
  filter: $shadow;
}

.fill-0 {
  fill: #ff3020;
}
.fill-1 {
  fill: #4070a0;
}
.fill-2 {
  fill: #c01028;
}
.fill-3 {
  fill: #209000;
}
.fill-4 {
  fill: #0050e0;
}
.fill-5 {
  fill: #c06000;
}
</style>
