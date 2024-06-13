<script setup lang="ts">
import { type AppModel, Align } from '@/modules/app/app-model';

const { model } = defineProps<{ model: AppModel }>();
</script>

<template>
  <div class="app">
    <transition name="slow">
      <component
        :is="model.page.component"
        :key="model.page.key"
        :model="model.page"
        :state="'full'"
      />
    </transition>

    <teleport to="body">
      <ui-dialog :model="model.dialog">
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
      </ui-dialog>
    </teleport>

    <div class="app-bar">
      <div :class="['spacer', { collapsed: model.align === Align.LEFT }]" />
      <div class="app-buttons">
        <ui-button
          v-model="model.align"
          no-focus
          tabindex="-1"
          class="btn round iconic"
          :toggle="[Align.LEFT, Align.CENTER]"
        >
          <ui-icon class="lt" />
        </ui-button>
        <ui-button class="btn round" @click="model.dialog.show()">
          S
        </ui-button>
        <ui-button class="btn round" @click="model.dialog.showModal()">
          M
        </ui-button>
        <span class="v-separator as-stretch" />
        <ui-button
          v-for="i in model.pages.length"
          :key="i"
          v-model="model.index"
          class="btn round"
          :toggle="[i - 1]"
        >
          {{ i - 1 }}
        </ui-button>
        <span class="v-separator as-stretch" />
        <ui-button
          v-model="model.align"
          no-focus
          tabindex="-1"
          class="btn round iconic"
          :toggle="[Align.RIGHT, Align.CENTER]"
        >
          <ui-icon class="gt" />
        </ui-button>
      </div>
      <div :class="['spacer', { collapsed: model.align === Align.RIGHT }]" />
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
  border-radius: var(--radius-small) var(--radius-small) 0 0;
  box-shadow: var(--shadow-small);
  pointer-events: auto;
  background-color: rgb(var(--surface));
  padding: 0.33em 0.5em;
  gap: 0.5em;
}

.border {
  border: 1px solid rgb(var(--border));
}
.card {
  margin: 7vh 7vw 9vh;
  border-radius: var(--radius-medium);
}
.shadow {
  box-shadow: var(--shadow-large);
}
.margin {
  margin: 3em 3em 4em;
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
  pointer-events: auto;
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

.slow-enter-from,
.slow-leave-to {
  opacity: 0;
}
.slow-enter-active,
.slow-leave-active {
  transition: opacity var(--slow);
}

.fast-enter-from,
.fast-leave-to {
  opacity: 0;
}
.fast-enter-active,
.fast-leave-active {
  transition: opacity var(--fast);
}
</style>
