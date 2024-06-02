<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  modelValue?: any;
  toggle?: undefined | '' | [any] | [any, any];
  noFocus?: undefined | '';
}>();

const emit = defineEmits<{
  'click': [Event];
  'update:modelValue': [any];
}>();

const root = ref<HTMLElement>();

const checked = computed(() => {
  if (props.toggle === undefined) {
    return undefined;
  }
  else {
    if (props.toggle === '') {
      return props.modelValue ? 'checked' : undefined;
    }
    else {
      return props.modelValue === props.toggle[0] ? 'checked' : undefined;
    }
  }
});

function click(e: Event) {
  if (props.toggle === undefined) {
    emit('click', e);
  }
  else if (props.toggle === '') {
    emit('update:modelValue', !props.modelValue);
  }
  else if (props.toggle.length === 1) {
    if (props.modelValue !== props.toggle[0]) {
      emit('update:modelValue', props.toggle[0]);
    }
  }
  else if (props.toggle.length === 2) {
    emit('update:modelValue', props.modelValue === props.toggle[0] ? props.toggle[1] : props.toggle[0]);
  }
}

function focus(e: FocusEvent) {
  if (props.noFocus !== undefined) {
    e.preventDefault();
    root.value?.blur();
    (e.relatedTarget as HTMLElement)?.focus?.();
  }
}
</script>

<template>
  <button
    ref="root"
    :checked="checked"
    @pointerdown.stop
    @click="click"
    @focus="focus"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.btn {
  background: rgb(255 255 255 / 0.0625);
  border: 1px solid transparent;
  border-radius: 0.25em;
  color: inherit;
  outline: none;
  user-select: none;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 1em;
  padding: unset;
}

.btn.iconic:hover {
  font-size: 1.25em;
}

.btn.iconic:active:hover {
  font-size: 1.125em;
}
</style>
