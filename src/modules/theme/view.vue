<script setup lang="ts">
import { type Theme } from '@/modules/theme/model';

const { model } = defineProps<{ model: Theme }>();
</script>

<template>
  <div class="view theme-view">
    <div class="theme-grid">
      <div class="theme-editor">
        <div v-if="model.selectedColor" class="theme-ranges">
          <ui-range v-model="model.selectedColor.r" class="theme-range" :min="0" :max="255" />
          <ui-range v-model="model.selectedColor.g" class="theme-range" :min="0" :max="255" />
          <ui-range v-model="model.selectedColor.b" class="theme-range" :min="0" :max="255" />
          <ui-range v-model="model.selectedColor.a" class="theme-range" :min="0" :max="1" :step="0.01" />
          <div>{{ model.selectedColor.toRgb() }}</div>
          <div>{{ model.selectedColor.toHex() }}</div>
        </div>
      </div>
      <div class="theme-list">
        <template
          v-for="item in model.colors"
          :key="item.name"
        >
          <div
            :class="['theme-item', {'selected': model.selectedColor === item}]"
            @click="model.selectedColor = item"
          >
            {{ item.name }}
          </div>
        </template>
      </div>
      <div class="theme-playground">
        <div
          class="theme-control"
          :style="model.style"
        >
          text
        </div>
      </div>
      <div class="theme-footer">
        <ui-button class="btn" @click="model.save()">
          Save
        </ui-button>
        <ui-button class="btn" @click="model.load()">
          Load
        </ui-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.theme-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 1fr 20em;
  grid-template-rows: 1fr 1fr auto;
  margin: 0.5em;
  gap: 0.5em;
}
.theme-editor {
  margin: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid orange;
}
.theme-ranges {
  display: flex;
  flex-direction: column;
  padding: 0.25em;
  gap: 0.125em;
}
.theme-range {
  width: 12em;
  height: 2em;
}
.theme-list {
  display: flex;
  flex-direction: column;
  border: 1px solid orange;
}
.theme-item {
  user-select: none;
  background-color: rgb(0 0 0 / 0.1);
  &.selected {
    background-color: rgb(128 0 0 / 0.25);
  }
}
.theme-playground {
  grid-column: 1 / 3;
  border: 1px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
}
.theme-control {
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  border-width: 1px;
  border-style: solid;
}
.theme-footer {
  grid-column: 1 / 3;
  display: flex;
  gap: 0.25em;
}
</style>
