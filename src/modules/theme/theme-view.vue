<script setup lang="ts">
import { type Theme } from './theme-model';

const { model } = defineProps<{ model: Theme }>();
</script>

<template>
  <div class="view theme-view">
    <div class="theme-grid">
      <div class="theme-editor">
        <component
          :is="model.selectedProperty.component"
          v-if="model.selectedProperty"
          :model="model.selectedProperty"
        />
      </div>
      <div class="theme-list">
        <template
          v-for="item in model.colors"
          :key="item.name"
        >
          <div
            :class="['theme-item', {'selected': model.selectedProperty === item}]"
            @click="model.selectedProperty = item"
          >
            {{ item.name }}
          </div>
        </template>
      </div>
      <div class="theme-playground" :style="{ backgroundColor: model.property('background-color').toCss() }">
        <div
          class="theme-control"
          :style="model.style"
        >
          text
        </div>
      </div>
      <div class="theme-footer">
        <ui-button class="btn" @click="model.clear()">
          Clear
        </ui-button>
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
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--view-border);
}
.theme-list {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--view-border);
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.theme-control {
  width: 50%;
  height: 50%;
  margin: 1em;
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
  gap: 0.5em;
}
</style>
