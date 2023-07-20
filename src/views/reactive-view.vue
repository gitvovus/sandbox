<script setup lang="ts">
import { type ReactiveModel } from '@/modules/reactive-model';

defineProps<{ model: ReactiveModel }>();
</script>

<template>
  <div class="view">
    <div class="table">
      <div class="column">
        <div>
          <ui-button @click="model.addItem()">+</ui-button>
        </div>
        <div class="h-separator"></div>
        <div class="row" v-for="item in model.items" :key="item.key">
          <div>title: {{ item.title }}, count: {{ item.count }}</div>
          <div>
            <ui-button @click="model.deleteItem(item)">x</ui-button>
            <ui-button @click="model.replaceItem(item)">/</ui-button>
          </div>
        </div>
      </div>
      <div class="column">
        <div>
          <ui-button @click="model.addWord()">+</ui-button>
        </div>
        <div class="h-separator"></div>
        <div class="row" v-for="item in model.words" :key="item">
          <div>
            {{ item }}
          </div>
          <div>
            <ui-button @click="model.deleteWord(item)">x</ui-button>
            <ui-button @click="model.replaceWord(item)">/</ui-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.table {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
}
.column {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
