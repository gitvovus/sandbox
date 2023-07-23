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
    <div class="anchor top left flex">
      <ui-button class="button" @click.stop="model.check()">check</ui-button>
      <ui-button class="button" @click.stop="model.startRotation()">animate</ui-button>
      <ui-button class="button" @click.stop="model.stopRotation()">stop</ui-button>
    </div>
    <!-- <info-view class="debug anchor bottom left" :model="model.info" /> -->
    <slot />
  </div>
</template>

<style lang="scss">
.flex-col {
  display: flex;
  flex-direction: column;
}

.debug {
  background: rgba(black, 0.1);
  border-radius: 0.5em;
  margin: 0.25em;
  padding: 0.5em;
}

$shape-shadow: drop-shadow(0 0 0.04px rgba(black, 0.5));
$shaft-shadow: drop-shadow(0 0 0.1px black);
$gear-selected: drop-shadow(0 0 0.1px rgba(black, 1));

.shaft-base {
  fill: #506070;
  filter: $shape-shadow;
  &.powered {
    filter: drop-shadow(0 0 1px #40ff00) $shape-shadow;
  }
  &.unpowered {
    filter: drop-shadow(0 0 1px rgba(white, 0.75)) $shape-shadow;
  }
  &.unpowered.destination {
    filter: drop-shadow(0 0 1px #ff3000) $shape-shadow;
  }
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
</style>
