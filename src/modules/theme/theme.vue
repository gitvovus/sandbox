<script setup lang="ts">
import { shallowReactive, shallowRef } from 'vue';
import { Theme } from './theme';

const { model } = defineProps<{ model: Theme }>();

const items = shallowReactive([
  'apple',
  'banana',
  'grape',
  'tomato',
  'kiwi',
]);
const selectedItem = shallowRef(items[0]);
</script>

<template>
  <div class="theme view" :style="model.style">
    <div class="theme-content">
      <!-- <div class="flex col gap-2">
        <div v-for="i in 8" :key="i" class="b-200" />
      </div> -->
      <!-- content -->
      <div class="flex p-4">
        <ui-select v-model="selectedItem" :style="{ minWidth: '8em' }">
          <template #button="{ expanded, toggle }">
            <ui-button :class="['slct', { 'no-mouse': expanded }]" @click="toggle()">
              {{ selectedItem }}
              <div class="spacer" />
              <ui-icon :class="['gt', { r90: expanded }]" />
            </ui-button>
          </template>
          <template #popup="{ select, selected }">
            <div class="dropdown-list">
              <ui-button
                v-for="(item, i) in items"
                :key="i"
                :class="['property-item', { selected: selected(item) }]"
                tabindex="0"
                @click="select(item)"
              >
                <ui-icon :class="['check', { hidden: !selected(item) }]" />
                {{ item }}
              </ui-button>
            </div>
          </template>
        </ui-select>
      </div>
      <!-- <div class="flex col gap-2">
        <div v-for="i in 2" :key="i" class="box-200 paper" />
      </div> -->
    </div>
    <div class="theme-tools">
      <div class="theme-editor">
        <component
          :is="model.selectedProperty.component"
          v-if="model.selectedProperty"
          :model="model.selectedProperty"
        />
      </div>
      <code class="p-1">
        {{ model.selectedProperty?.toCss() }}
      </code>
      <div v-arrows="{ cycle: true }" class="property-list">
        <ui-button
          v-for="item in model.properties" :key="item.name"
          :class="['property-item', { 'selected': model.selectedProperty === item }]"
          @click="model.selectedProperty = item"
        >
          {{ item.name }}
        </ui-button>
      </div>
      <div class="flex m-2 gap-2">
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
  grid-template-columns: 1fr 16em;
  grid-template-rows: 1fr;
  border-width: 1px;
  border-style: solid;
  border-radius: var(--radius-medium);
}
.theme-content {
  padding: 0.5em;
  border-right: 1px solid rgb(var(--line));
  overflow: auto;
}
.theme-tools {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15em 3em minmax(0, 1fr) min-content;
  overflow: auto;
}
.theme-editor {
  position: relative;
  padding: 0.5em;
  border-bottom: 1px solid rgb(var(--line));
}
.property-list {
  border-top: 1px solid rgb(var(--line));
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.property-item {
  user-select: none;
  padding: 0 0.5em;
  line-height: 1.5;
  text-align: unset;
  &:hover,
  &:focus {
    background-color: rgb(var(--btn-bg) / 0.0625);
  }
  &.selected {
    background-color: rgb(128 0 0 / 0.25);
  }
}
.dropdown-list {
  display: flex;
  flex-direction: column;
  // max-height: 8em;
  overflow: auto;
}

// TODO: organize
.slct {
  height: 2.25em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  background: rgb(var(--btn-bg) / 0.0625);
  border: 1px solid transparent;
  border-radius: var(--radius-small);
  user-select: none;
  padding-inline: 0.5em;
  transition:
    background-color var(--fast),
    border-color var(--fast),
    color var(--fast);
}

.slct[disabled] {
  opacity: 0.5;
  pointer-events: none;
}

.slct:focus {
  border-color: rgb(var(--btn-bg) / 0.25);
}

.slct[checked] {
  background-color: rgb(var(--btn-bg) / 0.125);
}

.slct:hover:not([checked]) {
  background-color: rgb(var(--btn-bg) / 0.125);
}

.slct:hover[checked] {
  background-color: rgb(var(--btn-bg) / 0.25);
}

.slct.round {
  border-radius: 50vh;
}
</style>
