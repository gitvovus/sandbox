<script setup lang="ts">
import { type ControlsModel } from '@/modules/controls-model';
defineProps<{ model: ControlsModel }>();
</script>

<template>
  <div class="view cv-grid">
    <div class="flex col j-c a-c">
      <div class="wire">
        <ui-button class="cv-button">test</ui-button>
        <ui-button class="cv-button">test</ui-button>
        <ui-button class="cv-button">test</ui-button>
        <ui-button class="cv-button">test</ui-button>
        <ui-button class="cv-button">test</ui-button>
      </div>
    </div>
    <div>
      <ui-button class="button">test</ui-button>
    </div>
  </div>
</template>

<style lang="scss">
.wire {
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(white, 0.05);
  height: 1px;
  justify-content: center;
  align-items: flex-end;
}

.cv-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.cv-button {
  width: 6em;
  height: 6em;
  border-radius: 50vh;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  outline: none;
  user-select: none;
  box-shadow: 0 0 1em inset rgba(black, 0.5);
  text-shadow: 0 0 5px black;
  transform-origin: (50% 100%);
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
  &:hover {
    // margin: 0 1em;
    z-index: 1;
    transform: scale(125%);
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
