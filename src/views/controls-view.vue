<script setup lang="ts">
import { type ControlsModel } from '@/modules/controls-model';
defineProps<{ model: ControlsModel }>();
</script>

<template>
  <div class="view">
    <div>
      <div>Radio (index): {{ model.radioIndex }}</div>
      <ui-button
        v-for="(item, i) in model.radioItems"
        class="round"
        :toggle="[i]"
        v-model="model.radioIndex"
      >
        {{ item.name }}
      </ui-button>
    </div>
  </div>
</template>
