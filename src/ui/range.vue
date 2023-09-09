<script setup lang="ts">
import { clamp, mix, Mouse } from '@/lib/std';

interface Props {
  modelValue: number;
  min: number;
  max: number;
  step?: number;
  indent?: number;
}

const prop = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

function getValue(e: PointerEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  const indent = prop.indent || 0;
  const x = clamp((e.clientX - rect.left - indent) / (rect.width - 2 * indent), 0, 1);
  let value = mix(prop.min, prop.max, x);
  if (prop.step !== undefined) {
    const steps = Math.round((value - prop.min) / prop.step);
    value = clamp(prop.min + steps * prop.step, prop.min, prop.max);
  }
  return value;
}

function update(e: PointerEvent) {
  const value = getValue(e);
  if (value !== prop.modelValue) {
    emit('update:modelValue', value);
  }
}

const events = {
  click: (e: PointerEvent) => {
    update(e);
  },

  pointerdown: (e: PointerEvent) => {
    if (e.button !== Mouse.LEFT) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    update(e);
  },

  pointermove: (e: PointerEvent) => {
    if ((e.currentTarget as HTMLElement).hasPointerCapture(e.pointerId)) {
      update(e);
    }
  },

  keydown: (e: KeyboardEvent) => {
    const step = prop.step || 1;
    let value: number;
    switch (e.code) {
      case 'ArrowLeft':
      case 'ArrowDown':
        value = Math.max(prop.min, prop.modelValue - step);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        value = Math.min(prop.max, prop.modelValue + step);
        break;
      default:
        return;
    }
    if (value !== prop.modelValue) {
      emit('update:modelValue', value);
    }
  },
};
</script>

<template>
  <slot v-bind="events" />
</template>
