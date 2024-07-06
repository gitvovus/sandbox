<script setup lang="ts">
import { WebPage } from './web-page';

const { model } = defineProps<{ model: WebPage }>();
model.use();
</script>

<template>
  <div class="surface view web-page-container">
    <div :ref="model.root" class="web-page" :class="{ menu : model.menu }">
      <div class="web-aside">
        <div class="web-aside-content" tabindex="0">
          <div v-for="i in 6" :key="i" class="box-200 border m-2" />
        </div>
      </div>
      <div class="web-main">
        <div class="web-header">
          Header
          <div class="spacer" />
          <ui-button v-model="model.menu" toggle class="flat relative">
            <ui-icon class="menu" />
            <div
              class="absolute fs-12 bg-blue centered round bottom right flex p-1"
              :class="{ hidden: !model.menu }"
            >
              <ui-icon class="check" />
            </div>
          </ui-button>
        </div>
        <div class="web-content">
          <div class="mirror">
            <clone-item>
              <h1>Welcome!</h1>
            </clone-item>
          </div>
          <div v-for="i in 6" :key="i" class="box-200 border m-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$aside-width: 16em;

.web-page-container {
  container-type: size;
  container-name: web-page;
}

.web-page {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: $aside-width 1fr;
  transition:
    grid-template-columns var(--fast) ease-in-out;
}

.web-aside {
  position: relative;
  width: $aside-width;
  display: flex;
  flex-direction: column;
  overflow: visible;
  z-index: 10;
  transition: width var(--fast) ease-in-out;
}

.web-aside-content {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  transition: right var(--fast) ease-in-out;
  width: $aside-width;
  overflow: auto;
  background-color: rgb(0 0 0 / 0.5);
  backdrop-filter: blur(2px);
  scrollbar-width: none;
}

@container web-page (width < 760px) {
  .web-aside {
    width: 0;
  }
  .web-page {
    grid-template-columns: 0 1fr;
    &.menu > .web-aside > .web-aside-content {
      right: -#{$aside-width};
    }
  }
}

.web-header {
  position: sticky;
  top: 0;
  background-color: rgb(0 0 0 / 0.75);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  height: 2.5em;
  padding-inline: 0.5em;
  gap: 0.5em;
  font-size: 20px;
  z-index: 5;
}

.web-main {
  position: relative;
  overflow: auto;
}

.web-content {
  padding-inline: 0.5em;
  overflow: auto;
}

.mirror {
  padding-top: 0.125em;
  line-height: 1;
  & > :last-child {
    position: relative;
    transform-origin: 50% 40%;
    transform: translateY(-10%) scaleY(-0.5);
    margin-bottom: -0.5em;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: linear-gradient(rgb(var(--surface) / 1) 25%, rgb(var(--surface) / 0.75) 100%);
    }
  }
}
</style>
