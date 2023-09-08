<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  modelValue?: any;
  toggle?: undefined | '' | [any] | [any, any];
  noFocus?: undefined | '';
}

const prop = defineProps<Props>();
const emit = defineEmits(['click', 'update:modelValue']);
const root = ref<HTMLElement>();

const checked = computed(() => {
  if (prop.toggle === undefined) {
    return undefined;
  } else {
    if (prop.toggle === '') {
      return prop.modelValue ? 'checked' : undefined;
    } else {
      return prop.modelValue === prop.toggle[0] ? 'checked' : undefined;
    }
  }
});

function click(e: Event) {
  if (prop.toggle === undefined) {
    emit('click', e);
  } else if (prop.toggle === '') {
    emit('update:modelValue', prop.modelValue ? false : true);
  } else if (prop.toggle.length === 1) {
    if (prop.modelValue !== prop.toggle[0]) {
      emit('update:modelValue', prop.toggle[0]);
    }
  } else if (prop.toggle.length === 2) {
    emit('update:modelValue', prop.modelValue === prop.toggle[0] ? prop.toggle[1] : prop.toggle[0]);
  }
}

function focus(e: FocusEvent) {
  if (prop.noFocus !== undefined) {
    e.preventDefault();
    root.value?.blur();
    (e.relatedTarget as HTMLElement)?.focus?.();
  }
}
</script>

<template>
  <button ref="root" :checked="checked" @pointerdown.stop @click="click" @focus="focus">
    <slot />
  </button>
</template>

<style>
.button {
  background: rgb(255 255 255 / 0.0625);
  border: 1px solid transparent;
  border-radius: 0.25em;
  color: inherit;
  outline: none;
  user-select: none;
  margin: 0.375em;
  padding: 0.5em 0.75em;
  transition:
    background-color var(--transition),
    border-color var(--transition),
    box-shadow var(--transition),
    text-shadow var(--transition);
}

.button[disabled] {
  opacity: 0.5;
  pointer-events: none;
}

.button:focus {
  border-color: rgb(255 255 255 / 0.25);
}

.button[checked] {
  background-color: rgb(255 255 255 / 0.125);
}

.button:hover:not([checked]) {
  background-color: rgb(255 255 255 / 0.125);
}

.button:hover[checked] {
  background-color: rgb(255 255 255 / 0.375);
}

.button:active:hover {
  background-color: rgb(255 255 255 / 0.625);
}

.button.round {
  border-radius: 50vh;
}

.button.iconic {
  width: 24px;
  height: 24px;
  margin: 2px;
  padding: 3px;
  font-size: 16px;
}

.button.iconic:hover {
  padding: 1px;
  font-size: 20px;
}

.button.iconic:active:hover {
  padding: 2px;
  font-size: 18px;
}
</style>
