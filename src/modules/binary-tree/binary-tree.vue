<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { type ViewState } from '@/modules/view-model';
import { BinaryTree } from './binary-tree';

const { model, state } = defineProps<{
  model: BinaryTree;
  state: ViewState;
}>();

const root = ref();

onMounted(() => model.mount(root.value));
onBeforeUnmount(() => model.unmount());

function keydown(e: KeyboardEvent) {
  switch (e.key) {
    case 'Enter':
    case 'Insert':
      model.add();
      break;
    case 'Delete':
      model.remove();
      break;
    default:
      return;
  }
  e.preventDefault();
}
</script>

<template>
  <div class="view">
    <div ref="root" class="paper clip view">
      <ui-item class="clip view" :model="model.root" />
    </div>

    <transition name="delayed">
      <div v-if="state === 'mini'" />
      <div v-else class="tool-box top right col ai-center">
        Add/remove numbers
        <div class="flex gap-2">
          <input v-model="model.text" type="text" class="tree-input" @keydown="keydown">
          <ui-button class="btn" no-focus tabindex="-1" @click="model.add()">
            <span>+</span>
            <ui-hotkey>Ins</ui-hotkey>
          </ui-button>
          <ui-button class="btn" no-focus tabindex="-1" @click="model.remove()">
            <span>&times; </span>
            <ui-hotkey>Del</ui-hotkey>
          </ui-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.tree-text {
  fill: white;
  font-size: 0.025em; // TODO: change to px
}
.tree-input {
  width: 4em;
  align-self: stretch;
  flex-grow: 1;
  background-color: rgb(0 0 0 / 0.25);
}
.tree-node {
  fill: rgb(var(--blue));
  stroke: rgb(var(--orange));
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}
.tree-line {
  stroke: rgb(0 0 0 / 0.5);
  stroke-width: 0.2px;
}
.tree-comb {
  fill: rgb(0 0 0 / 0.125);
  stroke: rgb(255 255 255 / 0.125);
  vector-effect: non-scaling-stroke;
}
</style>
