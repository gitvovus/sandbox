<script setup lang="ts">
import { type AppModel, ToolBarAlignment } from '@/modules/app-model';

defineProps<{ model: AppModel }>();
</script>

<template>
  <div class="app">
    <transition>
      <component v-if="model.activePage !== undefined" :is="model.activePage.component" :model="model.activePage" />
    </transition>
    <ui-dialog :class="['effect', { show: model.showDialog }]" :width="600" :height="720">
      <div class="w-panel">
        <div class="w-header">Header</div>
        <div class="w-content">
          <lorem-view />
        </div>
        <div class="w-footer">
          <ui-button class="button mouse" @click="model.showDialog = false">Close</ui-button>
        </div>
      </div>
    </ui-dialog>
    <div class="app-bar">
      <div :class="['spacer', { collapsed: model.toolBarAlignment === ToolBarAlignment.LEFT }]"></div>
      <div class="app-buttons">
        <ui-button
          no-focus
          tabindex="-1"
          class="button round iconic"
          v-model="model.toolBarAlignment"
          :toggle="[ToolBarAlignment.LEFT, ToolBarAlignment.CENTER]"
        >
          <ui-icon class="icon-lt" />
        </ui-button>
        <ui-button class="button round pretty" toggle v-model="model.showDialog">D</ui-button>
        <span class="v-separator" />
        <ui-button
          class="button round pretty"
          v-for="(dummy, i) in model.pages"
          :key="i"
          v-model="model.pageIndex"
          :toggle="[i]"
        >
          {{ i }}
        </ui-button>
        <span class="v-separator" />
        <ui-button
          no-focus
          tabindex="-1"
          class="button round iconic"
          v-model="model.toolBarAlignment"
          :toggle="[ToolBarAlignment.RIGHT, ToolBarAlignment.CENTER]"
        >
          <ui-icon class="icon-gt" />
        </ui-button>
      </div>
      <div :class="['spacer', { collapsed: model.toolBarAlignment === ToolBarAlignment.RIGHT }]"></div>
    </div>
  </div>
</template>

<style>
.app-bar {
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  pointer-events: none;
  z-index: var(--z-app);
}

.app-buttons {
  display: flex;
  align-items: center;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
  background-color: var(--bg);
  padding: 0 0.5em;
}

.app-buttons .v-separator {
  align-self: stretch;
}

.app-buttons .text {
  margin: 0 0.5em;
  padding-bottom: 2px;
}

.app-buttons .button.iconic {
  margin: 0 5px;
}

.spacer {
  flex-grow: 1;
  transition: flex-grow var(--transition);
}

.spacer.collapsed {
  flex-grow: 0;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity var(--page-transition);
}
</style>
