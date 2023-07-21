<script setup lang="ts">
import { type ControlsModel } from '@/modules/controls-model';
defineProps<{ model: ControlsModel }>();
</script>

<template>
  <div class="view cv-grid">
    <div class="flex j-c a-c">
      <ui-button class="cv-button">test</ui-button>
    </div>
    <div>
      <ui-button class="button">test</ui-button>
    </div>
  </div>
</template>

<style lang="scss">
.cv-grid {
  display: grid;
  grid-template-columns: 50% 50%;
}

.cv-button {
  width: 100px;
  height: 100px;
  border-radius: 50vh;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  outline: none;
  user-select: none;
  box-shadow: 0 0 1em inset rgba(black, 0.5);
  text-shadow: 0 0 5px black;
  transform: translate(-50% -50%);
  transition: all 0.2s ease-in-out;

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
  &:focus {
    border-color: rgba(white, 0.25);
  }
  &[checked] {
    background-color: rgba(white, 0.125);
  }
  &:hover:not([checked]) {
    background-color: rgba(white, 0.0625);
  }
  &:hover[checked] {
    background-color: rgba(white, 0.375);
  }
  &:active:hover {
    background-color: rgba(white, 0.625);
  }
}
</style>
