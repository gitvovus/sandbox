<script setup lang="ts">
import { type Theme } from './theme-model';

const { model } = defineProps<{ model: Theme }>();
</script>

<template>
  <div class="view theme-view" :style="model.style">
    <div class="theme-page">
      <div class="theme-content">
        <component :is="`h${i}`" v-for="i in 4" :key="i">
          Header, h{{ i }}
        </component>
        <lorem-view :paragraphs="1" />
        <div v-for="i in [200, 300, 400, 500, 600, 700]" :key="i" :class="['f-36', `fw-${i}`]">
          Lorem ipsum dolor sit amet
        </div>
      </div>
      <div class="theme-tools">
        <div class="theme-editor">
          <component
            :is="model.selectedProperty.component"
            v-if="model.selectedProperty"
            :model="model.selectedProperty"
          />
        </div>
        <div class="theme-list">
          <template
            v-for="item in model.properties"
            :key="item.name"
          >
            <div
              :class="['theme-item', { 'selected': model.selectedProperty === item }]"
              @click="model.selectedProperty = item"
            >
              {{ item.name }}
            </div>
          </template>
        </div>
        <div class="theme-footer">
          <!-- <ui-button class="btn" @click="model.clear()">
            Clear
          </ui-button> -->
          <ui-button class="btn" @click="model.save()">
            Save
          </ui-button>
          <ui-button class="btn" @click="model.load()">
            Load
          </ui-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.theme-page {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  margin: 0.5em;
  gap: 0.5em;
}
.theme-content {
  padding-right: 0.5em;
  border-right: 1px solid var(--bg-lighter);
}
.theme-tools {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
}
.theme-editor {
  position: relative;
  min-height: 10em;
}
.theme-list {
  display: flex;
  flex-direction: column;
}
.theme-item {
  user-select: none;
  &.selected {
    background-color: rgb(128 0 0 / 0.25);
  }
}
.theme-footer {
  display: flex;
  gap: 0.5em;
}
</style>
