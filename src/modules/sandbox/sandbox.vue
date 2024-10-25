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
    </div>
    <div class="flex">
      <ui-button class="btn" @click="model.single.selectedItem = undefined">
        &times;
      </ui-button>
    </div>
    <div class="m-4">
      <list-box v-slot="{ expanded, toggle, selected }" v-model="model.single.selectedItem">
        <div class="list-box">
          <ui-button :class="['slct', { 'no-mouse': expanded.value }]" @click="toggle()">
            {{ selected.value?.name || '-' }}
          </ui-button>
          <ui-dropdown v-model="expanded.value" class="list-box-dropdown">
            <div class="list-box-options">
              <ui-button
                v-for="(item, i) in model.single.items"
                :key="i"
                :class="['property-item', { selected: item === selected.value }]"
                @click="selected.value = item"
              >
                {{ item.name }}
              </ui-button>
            </div>
          </ui-dropdown>
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

.list-box {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 12em;
}

.list-box-dropdown {
  left: 0;
  right: 0;
  top: 100%;
  margin-top: 2px;
  background-color: rgb(var(--surface));
  box-shadow: var(--shadow-small);
}

.list-box-options {
  display: flex;
  flex-direction: column;
}
</style>
