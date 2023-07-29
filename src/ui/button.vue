<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  modelValue?: any;
  toggle?: undefined | '' | [any] | [any, any];
  noFocus?: undefined | '';
}

const prop = defineProps<Props>();

const emit = defineEmits(['click', 'update:modelValue']);

const root = ref<HTMLElement | null>(null);

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
    if (e.relatedTarget && (e.relatedTarget as any).focus) {
      (e.relatedTarget as any).focus();
    }
  }
}
</script>

<template>
  <button ref="root" :checked="checked" @pointerdown.stop @click="click" @focus="focus">
    <slot />
  </button>
</template>

<style lang="scss">
@use '@/style/theme' as *;
@use '@/style/vars' as *;

@mixin tint($tint) {
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
  &:focus {
    border-color: rgba($tint, 0.25);
  }
  &[checked] {
    background-color: rgba($tint, 0.125);
  }
  &:hover:not([checked]) {
    background-color: rgba($tint, 0.125);
  }
  &:hover[checked] {
    background-color: rgba($tint, 0.375);
  }
  &:active:hover {
    background-color: rgba($tint, 0.625);
  }
}

@mixin pretty(
  $primary,
  $alpha-border-focus-checked,
  $alpha-bg-hover-checked,
  $alpha-border-hover-checked,
  $alpha-bg-active,
  $alpha-border-active
) {
  color: $primary;
  $inverse: invert($primary);
  &:focus {
    border-color: rgba($primary, 0.125);
  }
  &[checked] {
    background-color: rgba(white, 0.25);
    border-color: rgba($inverse, 0.125);
    box-shadow: inset 0 0 5px -1px rgba(black, 0.5);
    text-shadow: 0 0 3px $inverse;
  }
  &:focus[checked] {
    border-color: rgba(white, $alpha-border-focus-checked);
  }
  &:hover:not([checked]) {
    background-color: rgba($primary, 0.0625);
    border-color: rgba($primary, 0.125);
  }
  &:hover[checked] {
    background-color: rgba(white, $alpha-bg-hover-checked);
    border-color: rgba(white, $alpha-border-hover-checked);
  }
  &:active:hover {
    background-color: rgba($primary, $alpha-bg-active);
    border-color: rgba(white, $alpha-border-active);
    box-shadow: inset 0 0 5px -1px rgba(black, 0.5);
    color: $inverse;
    text-shadow: 0 0 3px $primary;
  }
}

.button {
  background: rgba(white, 0.0625);
  border: 1px solid transparent;
  border-radius: 0.25em;
  color: inherit;
  outline: none;
  user-select: none;
  margin: 0.375em;
  padding: 0.5em 0.75em;
  transition: background-color $transition, border-color $transition, box-shadow $transition, text-shadow $transition;

  @include tint(white);

  &.pretty {
    @include pretty(
      $primary: map-get($dark, tx),
      $alpha-border-focus-checked: 0.25,
      $alpha-bg-hover-checked: 0.125,
      $alpha-border-hover-checked: 0.125,
      $alpha-bg-active: 0.125,
      $alpha-border-active: 0.25
    );
  }

  &.round {
    border-radius: 50vh;
  }

  &.iconic {
    width: 24px;
    height: 24px;
    margin: 2px;
    padding: 3px;
    &:hover {
      padding: 1px;
    }
    &:active:hover {
      padding: 2px;
    }
  }
}
</style>
