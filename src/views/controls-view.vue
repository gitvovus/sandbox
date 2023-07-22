<script setup lang="ts">
import { type ControlsModel } from '@/modules/controls-model';
defineProps<{ model: ControlsModel }>();

const colors = [
  'c-001',
  'c-010',
  'c-011',
  'c-100',
  'c-101',
  'c-110',
]; 
</script>

<template>
  <div class="view cv-grid">
    <div class="flex-col j-c a-c">
      <ui-button class="cv-button">test</ui-button>
      <div class="palette">
        <div v-for="c in colors" :key="c" :class="['paint', c]"></div>
      </div>
    </div>
    <div>
      <ui-button class="button">test</ui-button>
    </div>
  </div>
</template>

<style lang="scss">
.palette {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

$s: 120px;

.paint {
  width: $s;
  height: $s;
  filter: drop-shadow(0 0 2px rgba(black, 0.5));
  margin: 5px;
}

.c-001 {
  background-color: #0060e0;
}
.c-010 {
  background-color: #00ff00;
}
.c-011 {
  background-color: #00ffff;
}
.c-100 {
  background-color: #ff0000;
}
.c-101 {
  background-color: #ff00ff;
}
.c-110 {
  background-color: #ffff00;
}


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
