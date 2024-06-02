<script setup lang="ts">
import { ControlsSandbox } from '@/modules/controls-sandbox/model';

const { model } = defineProps<{ model: ControlsSandbox }>();
</script>

<template>
  <div class="view test-view flex col gap-05">
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
    <!-- buttons -->
    <div class="flex gap-05">
      <ui-button class="btn" @click="model.test()">
        test
      </ui-button>
      <ui-button class="btn" @click="model.start()">
        start
      </ui-button>
      <ui-button class="btn" @click="model.resolve()">
        resolve
      </ui-button>
      <ui-button class="btn" @click="model.reject()">
        reject
      </ui-button>
    </div>
  </div>
</template>

<style lang="scss">
.view.test-view {
  overflow: auto;
  padding: 0.5em;
}

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
</style>
