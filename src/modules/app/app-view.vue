<script setup lang="ts">
import { type AppModel, Align } from './app-model';

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
          <div class="fs-18 flex p-2 ai-center">
            <div class="spacer" />
            <ui-button class="fs-24 flat mouse" @click="model.dialog.closeAsync('transform')">
              <ui-icon class="close" />
            </ui-button>
          </div>
          <div class="dlg-content">
            <component
              :is="model.dialogContent.component"
              :model="model.dialogContent"
            />
          </div>
        </div>
      </ui-dialog>
    </teleport>

    <div class="app-bar">
      <div :class="['animated spacer', { collapsed: model.align === Align.LEFT }]" />
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
        <span class="vertical separator" />
        <div v-for="i in 1" :key="i" class="pic">
          <img src="@/assets/pics/pic.svg">
        </div>
        <span class="vertical separator" />
        <ui-button
          v-for="i in model.pages.length"
          :key="i"
          v-model="model.index"
          class="btn round"
          :toggle="[i - 1]"
        >
          {{ i - 1 }}
        </ui-button>
        <span class="vertical separator" />
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
      <div :class="['animated spacer', { collapsed: model.align === Align.RIGHT }]" />
    </div>
  </div>
</template>

<style lang="scss">
$pic: 48px;
.pic {
  width: $pic;
  height: $pic;
}
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
  border-radius: var(--radius-large);
  border: 1px solid rgb(var(--border));
  background-color: rgb(var(--surface));
  box-shadow: var(--shadow-large);
  overflow: hidden;
}

.dlg-content {
  position: relative;
  flex: 1 1 auto;
  pointer-events: auto;
  overflow: hidden;
}

.spacer.animated {
  transition: flex-grow var(--fast);
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

.delayed-enter-from,
.delayed-leave-to {
  opacity: 0;
}
.delayed-enter-active {
  transition: opacity var(--fast) calc(var(--slow) - var(--fast));
}
.delayed-leave-active {
  transition: opacity var(--fast);
}
</style>
