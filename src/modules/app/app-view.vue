<script setup lang="ts">
import { type AppModel, Align } from '@/modules/app/app-model';

const { model } = defineProps<{ model: AppModel }>();
</script>

<template>
  <div class="app">
    <transition>
      <component
        :is="model.activePage.component"
        v-if="model.activePage !== undefined"
        :model="model.activePage"
      />
    </transition>

    <teleport to="body">
      <dialog-view class="effect" :model="model.dialog">
        <div class="dlg-panel">
          <div class="dlg-header">
            Draggable/resizable
          </div>
          <div class="dlg-content">
            <responsive-view :model="model.layout" />
          </div>
          <div class="dlg-footer">
            <ui-button
              class="btn mouse"
              autofocus
              @click="model.dialog.closeAsync('transform')"
            >
              Close
            </ui-button>
          </div>
        </div>
      </dialog-view>
    </teleport>

    <div class="app-bar">
      <div :class="['spacer', { collapsed: model.toolBarAlign === Align.LEFT }]" />
      <div class="app-buttons">
        <ui-button
          v-model="model.toolBarAlign"
          no-focus
          tabindex="-1"
          class="btn round iconic"
          :toggle="[Align.LEFT, Align.CENTER]"
        >
          <ui-icon class="lt" />
        </ui-button>
        <ui-button
          class="btn round"
          @click="model.dialog.show()"
        >
          S
        </ui-button>
        <ui-button
          class="btn round"
          @click="model.dialog.showModal()"
        >
          M
        </ui-button>
        <span class="v-separator as-stretch" />
        <ui-button
          v-for="(dummy, i) in model.pages"
          :key="i"
          v-model="model.pageIndex"
          class="btn round"
          :toggle="[i]"
        >
          {{ i }}
        </ui-button>
        <span class="v-separator as-stretch" />
        <ui-button
          v-model="model.toolBarAlign"
          no-focus
          tabindex="-1"
          class="btn round iconic"
          :toggle="[Align.RIGHT, Align.CENTER]"
        >
          <ui-icon class="gt" />
        </ui-button>
      </div>
      <div :class="['spacer', { collapsed: model.toolBarAlign === Align.RIGHT }]" />
    </div>
  </div>
</template>

<style lang="scss">
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
  box-shadow: var(--shadow-small);
  pointer-events: auto;
  background-color: rgb(var(--surface));
  padding: 0.33em 0.5em;
  gap: 0.5em;
}

.dlg-panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  background-color: rgb(var(--surface));
}

.dlg-header,
.dlg-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.dlg-header {
  margin: 1em;
}
.dlg-footer {
  margin: 0.5em;
}

.dlg-content {
  position: relative;
  flex: 1 1 auto;
  overflow: auto;
  // pointer-events: auto;
  padding: 0 1em;
}

// TODO: move
.spacer {
  flex-grow: 1;
  transition: flex-grow var(--fast);
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
  transition: opacity var(--slow);
}
</style>
