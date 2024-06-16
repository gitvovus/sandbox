<script setup lang="ts">
import { Var } from '../properties/var';

const { model } = defineProps<{ model: Var }>();
</script>

<template>
  <div class="var-editor">
    Edit as:
    <ui-select v-model="model.type">
      <template #button="{ expanded, toggle }">
        <ui-button :class="['slct', { 'no-mouse': expanded }]" @click="toggle()">
          {{ model.type.type }}
          <div class="spacer" />
          <ui-icon :class="['down', { r180: expanded }]" />
        </ui-button>
      </template>
      <template #popup="{ select, selected }">
        <div class="property-list">
          <div
            v-for="(item, i) in model.types"
            :key="i"
            :class="['property-item', { selected: selected(item) }]"
            tabindex="0"
            @click="select(item)"
          >
            <ui-icon :class="['check', { hidden: !selected(item) }]" />
            {{ item.type }}
          </div>
        </div>
      </template>
    </ui-select>
  </div>
</template>

<style lang="scss">
.var-editor {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.25em;
  gap: 0.25em;
}
.var-popup {
  display: flex;
  flex-direction: column;
  margin: 0.25em;
}

</style>
