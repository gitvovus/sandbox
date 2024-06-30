<script setup lang="ts">
import { computed } from 'vue';
import { type AppModel, Align } from './app-model';
import AppResources from './app-resources.vue';

const { model } = defineProps<{ model: AppModel }>();
const leftAligned = computed(() => model.align === Align.LEFT);
const rightAligned = computed(() => model.align === Align.RIGHT);
</script>

<template>
  <div class="app">
    <app-resources />

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
          <div class="flex ai-center px-2">
            <div class="flex col mb-1">
              <h3>
                resizable space
              </h3>
              <div class="orange tiny">
                for responsive page
              </div>
            </div>
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

    <div :class="['app-bar']">
      <div :class="['app-left', { collapsed: leftAligned }]">
        <ui-button
          v-model="model.align"
          :class="['app-flat', { collapsed: leftAligned }]"
          :toggle="[Align.CENTER, Align.LEFT]"
          :disabled="leftAligned"
        >
          <ui-icon class="lt" />
        </ui-button>
      </div>
      <div v-arrows="{ cycle: true }" :class="['app-buttons', { left: leftAligned, right: rightAligned }]">
        <!-- pages -->
        <component
          :is="model.pages[i - 1].button"
          v-for="i in model.pages.length"
          :key="i"
          v-model="model.index"
          :toggle="[i - 1]"
        />
        <!-- dialog -->
        <component :is="model.webPage.button" v-model="model.showDialog" toggle />
      </div>
      <div :class="['app-right', { collapsed: rightAligned }]">
        <ui-button
          v-model="model.align"
          :class="['app-flat', { collapsed: rightAligned }]"
          :toggle="[Align.CENTER, Align.RIGHT]"
          :disabled="rightAligned"
        >
          <ui-icon class="gt" />
        </ui-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-bar {
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  z-index: var(--z-app);
}

.app-buttons {
  font-size: 32px;
  height: 1.25em;
  display: flex;
  align-items: end;
  background-color: rgb(var(--surface));
  padding-inline: 0.25em;
}

.app-left,
.app-right {
  font-size: 18px;
  background-color: rgb(var(--surface));
  mask-repeat: no-repeat;
  mask-size: 72px 100%;
  display: flex;
  flex-grow: 1;
  transition: flex-grow var(--fast) ease-in-out;
  &.collapsed {
    flex-grow: 0;
  }
}
.app-left {
  justify-content: end;
  mask-position: right;
  mask-image: url(@/assets/app/left.svg);
}
.app-right {
  justify-content: start;
  mask-position: left;
  mask-image: url(@/assets/app/right.svg);
}

.app-flat {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 1em;
  transition: width var(--fast);
  &.collapsed {
    width: 0;
  }
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
