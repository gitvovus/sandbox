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
.btn {
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

.btn[disabled] {
  opacity: 0.5;
  pointer-events: none;
}

.btn:focus {
  border-color: rgb(255 255 255 / 0.25);
}

.btn[checked] {
  background-color: rgb(255 255 255 / 0.125);
}

.btn:hover:not([checked]) {
  background-color: rgb(255 255 255 / 0.125);
}

.btn:hover[checked] {
  background-color: rgb(255 255 255 / 0.375);
}

.btn:active:hover {
  background-color: rgb(255 255 255 / 0.625);
}

.btn.round {
  border-radius: 50vh;
}

.btn.iconic {
  width: 24px;
  height: 24px;
  margin: 2px;
  padding: 3px;
  font-size: 16px;
}

.btn.iconic:hover {
  padding: 1px;
  font-size: 20px;
}

.btn.iconic:active:hover {
  padding: 2px;
  font-size: 18px;
}
</style>
