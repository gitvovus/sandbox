<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { type Gears } from './gears';

const { model } = defineProps<{ model: Gears }>();
const root = ref();

onMounted(() => {
  model.mount(root.value);
});

onBeforeUnmount(() => {
  model.unmount();
});
</script>

<template>
  <div ref="root" class="view paper">
    <ui-item class="overlay" :model="model.root" />
    <div class="anchor top right flex gap-05 p-05">
      <ui-button v-click-stop class="btn" @click="model.reset()">
        reset
      </ui-button>
      <ui-button v-click-stop class="btn" @click="model.check()">
        check
      </ui-button>
      <ui-button v-click-stop class="btn" @click="model.start()">
        start
      </ui-button>
      <ui-button v-click-stop class="btn" @click="model.stop()">
        stop
      </ui-button>
    </div>
    <slot />
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
  filter: drop-shadow(0 0 0.1px black);
  &.source { fill: #209010; }
  &.mediator { fill: #e0c000; }
  &.destination { fill: #f03020; }
}

.gear,
.stub {
  transition: stroke 0.15s ease-in-out;
  stroke: rgb(0 0 0 / 0.5);
  filter: drop-shadow(0 0 0.25px rgb(0 0 0 / 0.75));
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
