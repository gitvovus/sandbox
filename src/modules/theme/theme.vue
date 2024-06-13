<script setup lang="ts">
import { Theme } from './theme';

const { model } = defineProps<{ model: Theme }>();
</script>

<template>
  <div class="theme view" :style="model.style">
    <div class="theme-content">
      <component :is="`h${i}`" v-for="i in 4" :key="i">
        Header, h{{ i }}
      </component>
      <lorem-view :paragraphs="1" />
      <div v-for="i in [200, 300, 400, 500, 600, 700]" :key="i" :class="['f-36', `fw-${i}`]">
        Lorem ipsum
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
        <template v-for="item in model.properties" :key="item.name">
          <div
            :class="['theme-item', { 'selected': model.selectedProperty === item }]"
            @click="model.selectedProperty = item"
          >
            {{ item.name }}
          </div>
        </template>
      </div>
      <div class="flex m-05 gap-05">
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
</template>

<style lang="scss">
.theme {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  border-width: 1px;
  border-style: solid;
  border-radius: var(--radius-medium);
  overflow: hidden;
}
.theme-content {
  padding: 0.5em;
  border-right: 1px solid rgb(var(--line));
  overflow: auto;
}
.theme-tools {
  display: grid;
  grid-template-columns: 1fr;
  overflow: auto;
  grid-template-rows: min-content minmax(0, 1fr) min-content;
}
.theme-editor {
  position: relative;
  min-height: 10em;
}
.theme-list {
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.theme-item {
  user-select: none;
  padding: 0 0.5em;
  line-height: 1.5;
  &.selected {
    background-color: rgb(128 0 0 / 0.25);
  }
}
</style>
