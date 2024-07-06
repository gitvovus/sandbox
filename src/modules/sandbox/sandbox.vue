<script setup lang="ts">
import { Sandbox } from './sandbox';

const { model } = defineProps<{ model: Sandbox }>();

</script>

<template>
  <div class="scrollable surface view flex col gap-2 p-2">
    <!-- grid -->
    <div class="test-grid">
      <div class="test-items-grid">
        <template
          v-for="item in model.single.items"
          :key="item.key"
        >
          <div class="test-grid-cell">
            {{ item === model.single.selectedItem ? '+' : ' ' }}
          </div>
          <div
            class="test-grid-cell"
            @click="model.single.selectedItem = item"
          >
            {{ item.name }}
          </div>
        </template>
      </div>
      <div class="test-grid-cell">
        <test-container v-model="model.single.selectedItem">
          <test-header v-slot="{ selected }">
            {{ selected?.name || '-' }}
          </test-header>
          <test-item
            v-for="item in model.single.items"
            :key="item.key"
            v-slot="{ selected }"
            :value="item"
          >
            <div :class="{ 'test-selected': selected }">
              {{ item.name }} {{ selected ? '+' : '-' }}
            </div>
          </test-item>
        </test-container>
      </div>
    </div>
    <div class="flex">
      <ui-button class="btn" @click="model.single.selectedItem = undefined">
        &times;
      </ui-button>
    </div>
    <div class="m-4">
      <list-box v-slot="{ isOpen, open, value }" v-model="model.single.selectedItem">
        <div class="list-box">
          <ui-button :class="['btn', { 'no-mouse': isOpen.value }]" @click="open()">
            {{ value?.name || '-' }}
          </ui-button>
          <list-box-options v-model="isOpen.value" as="ui-dropdown" class="list-box-options">
            <list-box-option
              v-for="item in model.single.items"
              :key="item.key"
              v-slot="{ selected }"
              :value="item"
            >
              <div :class="['list-box-option', { selected }]">
                {{ item.name }}
              </div>
            </list-box-option>
          </list-box-options>
        </div>
      </list-box>
    </div>
  </div>
</template>

<style lang="scss">
.test-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25em;
}
.test-items-grid {
  display: grid;
  grid-template-columns: 2em 1fr;
  gap: 0.25em;
}
.test-grid-cell {
  background-color: rgba(0 0 0 /0.25);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
}
.test-selected {
  background-color: rgba(0 0 0 / 0.25);
}

.list-box {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 12em;
}

.list-box-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  background-color: rgb(255 255 255 / 0.1);
  border-radius: 4px;
  &:focus {
    outline: 2px solid rgb(var(--border));
    outline-offset: 2px;
  }
}

.list-box-options {
  left: 0;
  right: 0;
  top: 100%;
  margin-top: 2px;
  background-color: rgb(var(--paper));
  box-shadow: var(--shadow-small);
}

.list-box-option {
  &.selected {
    background-color: rgb(0 0 0 / 0.25);
  }
}
</style>
