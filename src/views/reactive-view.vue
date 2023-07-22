<script setup lang="ts">
import { type ReactiveModel } from '@/modules/reactive-model';

defineProps<{ model: ReactiveModel }>();
</script>

<template>
  <div class="view p-1">
    <div class="grid-1">
      <div class="cell-header">
        <ui-button class="button" @click="model.addItem()">+</ui-button>
      </div>
      <div class="cell-header">
        <ui-button class="button" @click="model.addWord()">+</ui-button>
      </div>
      <div class="cell-content">
        <div class="flex a-c" v-for="item in model.items" :key="item.key">
          <div>
            <ui-button class="button" @click="model.deleteItem(item)">x</ui-button>
            <ui-button class="button" @click="model.replaceItem(item)">/</ui-button>
          </div>
          <div>title: {{ item.title }}, count: {{ item.count }}</div>
        </div>
      </div>
      <div class="cell-content">
        <div class="flex a-c" v-for="item in model.words" :key="item">
          <div>
            <ui-button class="button" @click="model.deleteWord(item)">x</ui-button>
            <ui-button class="button" @click="model.replaceWord(item)">/</ui-button>
          </div>
          <div>{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="h-separator"></div>
    <div>
      <div>Radio (index): {{ model.radioIndex }}</div>
      <ui-button v-for="(item, i) in model.radioItems" class="button round" :toggle="[i]" v-model="model.radioIndex">
        {{ item.name }}
      </ui-button>
    </div>
  </div>
</template>

<style lang="scss">
.grid-1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  height: 60%;
}

.cell-header {
  background-color: var(--bg);
}

.cell-content {
  overflow: auto;
}

.row-content {
  margin: 0;
}
</style>
