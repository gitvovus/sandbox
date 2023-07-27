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
          <div class="icon icon-lt"></div>
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
          <div class="icon icon-gt"></div>
        </ui-button>
      </div>
      <div :class="['spacer', { collapsed: model.toolBarAlignment === ToolBarAlignment.RIGHT }]"></div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/style/icons' as *;
@use '@/style/vars' as *;

.icon {
  background-color: var(--tx);
}

.app-bar {
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  pointer-events: none;
  z-index: $z-app;
}

.app-buttons {
  display: flex;
  align-items: center;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 0 8px rgba(black, 0.5);
  pointer-events: auto;
  background-color: var(--bg);
  padding: 0 0.5em;
  & .v-separator {
    align-self: stretch;
  }
  & .text {
    margin: 0 0.5em;
    padding-bottom: 2px;
  }
  & .button.iconic {
    margin: 0 5px;
  }
}

.spacer {
  flex-grow: 1;
  transition: flex-grow $transition;
  &.collapsed {
    flex-grow: 0;
  }
}

.button.round {
  border-radius: 50vh;
}

.button.iconic {
  width: 24px;
  height: 24px;
  margin: 2px;
  padding: 3px;
  &:hover {
    padding: 1px;
  }
  &:hover:active {
    padding: 2px;
  }
}

.icon {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  mask-position: center;
  mask-repeat: no-repeat;
  transform: rotate(0);
  transition: transform $transition;
}

.icon.rotated {
  transform: rotate(180deg);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity $page-transition;
}
</style>
