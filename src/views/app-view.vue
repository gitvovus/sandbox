<script setup lang="ts">
import { type AppModel, ToolBarAlignment } from '@/modules/app-model';

defineProps<{ model: AppModel }>();
</script>

<template>
  <div class="app">
    <transition>
      <component
        v-if="model.activePage !== undefined"
        :is="model.activePage.component"
        :model="model.activePage"
      />
    </transition>

    <teleport to="body">
      <ui-dialog class="effect" :model="model.dialog" :width="600" :height="720">
        <div class="dlg-panel">
          <div class="dlg-header">Draggable/resizable</div>
          <div class="dlg-content">
            <lorem-view />
          </div>
          <div class="dlg-footer">
            <ui-button class="btn mouse" @click="model.dialog.state = 0">Close</ui-button>
          </div>
        </div>
      </ui-dialog>
    </teleport>

    <div class="app-bar">
      <div
        :class="['spacer', { collapsed: model.toolBarAlignment === ToolBarAlignment.LEFT }]"
      ></div>
      <div class="app-buttons">
        <ui-button
          no-focus
          tabindex="-1"
          class="btn round iconic"
          v-model="model.toolBarAlignment"
          :toggle="[ToolBarAlignment.LEFT, ToolBarAlignment.CENTER]"
        >
          <ui-icon class="icon-lt" />
        </ui-button>
        <ui-button class="btn round" :toggle="[0, 1]" v-model="model.dialog.state">S</ui-button>
        <ui-button class="btn round" :toggle="[0, 2]" v-model="model.dialog.state">M</ui-button>
        <span class="v-separator" />
        <ui-button
          class="btn round"
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
          class="btn round iconic"
          v-model="model.toolBarAlignment"
          :toggle="[ToolBarAlignment.RIGHT, ToolBarAlignment.CENTER]"
        >
          <ui-icon class="icon-gt" />
        </ui-button>
      </div>
      <div
        :class="['spacer', { collapsed: model.toolBarAlignment === ToolBarAlignment.RIGHT }]"
      ></div>
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
  box-shadow: var(--shadow);
  pointer-events: auto;
  background-color: var(--bg);
  padding: 0.33em 0.5em;
  gap: 0.5em;
}

.app-buttons .btn {
  margin: 0;
}

.dlg-panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  background-color: var(--view-bg);
  border: 1px solid var(--view-border);
}

.dlg-header,
.dlg-footer {
  display: flex;
  margin: var(--dlg-margin);
  align-items: center;
  justify-content: center;
}

.dlg-content {
  position: relative;
  flex: 1 1 auto;
  overflow: auto;
  pointer-events: auto;
  padding: 0 var(--dlg-margin);
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
