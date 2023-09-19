<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: number;
  min: number;
  max: number;
  step?: number;
}

const prop = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const percents = computed(() => (100 * (prop.modelValue - prop.min)) / (prop.max - prop.min));
</script>

<template>
  <ui-range
    v-bind="{ ...prop, indent: 32 }"
    @update:modelValue="(value: number) => emit('update:modelValue', value)"
  >
    <template v-slot="events">
      <div class="range" v-on="events" tabindex="0">
        <div class="range-track">
          <div class="range-track-body"></div>
          <div
            class="range-fill"
            :style="{
              width: `calc(${percents}% + 1em)`,
            }"
          ></div>
          <div
            class="range-thumb"
            :style="{
              left: `${percents}%`,
            }"
          ></div>
        </div>
      </div>
    </template>
  </ui-range>
</template>

<style>
.range {
  display: inline flow-root;
  position: relative;
  width: 400px;
  height: 4em;
  background-color: rgb(0 0 0 / 0.1);
  border: 1px solid transparent;
  border-radius: 0.5em;
  user-select: none;
  transition: border-color var(--transition);
}

.range:focus-within {
  border-color: rgb(255 255 255 / 0.25);
}

.range-track {
  position: absolute;
  left: 32px;
  top: 50%;
  right: 32px;
}

.range-track-body {
  position: absolute;
  height: 1em;
  left: -0.5em;
  top: -0.5em;
  right: -0.5em;
  border-radius: 0.5em;
  box-shadow: 0 0 0.4em black inset;
}

.range-fill {
  position: absolute;
  height: 1em;
  left: -0.5em;
  top: -0.5em;
  border-radius: 0.5em;
  background-color: rgb(255 0 0 / 0.25);
  transition: background-color var(--transition);
}

.range:hover .range-fill,
.range:focus-within .range-fill {
  background-color: rgb(255 0 0 / 0.3125);
}

.range-thumb {
  position: absolute;
  width: 3em;
  height: 3em;
  top: -1.5em;
  margin-left: -1.5em;
  border-radius: 1.5em;
  border: 2px solid orange;
  filter: drop-shadow(0 0 3px rgb(0 0 0 / 0.5));
}
</style>
