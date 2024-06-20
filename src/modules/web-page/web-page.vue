<script setup lang="ts">
import { WebPage } from './web-page';

const { model } = defineProps<{ model: WebPage }>();
model.use();
</script>

<template>
  <div class="surface view web-page-container">
    <div :ref="model.root" class="web-page" :class="{ menu : model.menu }">
      <div class="web-aside">
        <div v-for="i in 1" :key="i" class="box-200 m-1" />
      </div>
      <div class="web-main">
        <div class="web-header">
          Header
          <div class="spacer" />
          <ui-button v-model="model.menu" toggle class="flat relative">
            <ui-icon class="menu" />
            <div
              class="absolute f-12 bg-blue centered round bottom right flex p-1"
              :class="{ hidden: !model.menu }"
            >
              <ui-icon class="check" />
            </div>
          </ui-button>
        </div>
        <div class="web-content">
          <h1 class="mirror">
            <clone-item>
              <h1>Welcome</h1>
            </clone-item>
          </h1>
          <div class="flex col gap-2">
            <div v-for="i in 10" :key="i" class="box-200" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="tools top right m-2 p-2">
      {{ model.text || ':' }}
    </div> -->
  </div>
</template>

<style lang="scss">
.web-page {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: min-content 1fr;
  transition: margin-left var(--fast) ease-in-out;
}
.web-header {
  position: sticky;
  top: 0;
  background-color: rgb(0 0 0 / 0.75);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  height: 2.5em;
  padding-inline: 0.5em;
  gap: 0.5em;
  font-size: 20px;
}
.web-main {
  grid-column: 2 / 3;
  position: relative;
  overflow: auto;
}
.web-aside {
  width: 16em;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: rgb(0 0 0 / 0.25);
  z-index: 1;
  transition: transform var(--fast) ease-in-out;
}
.web-content {
  padding-inline: 0.5em;
  overflow: auto;
}
.mirror {
  display: flex;
  flex-direction: column;
  padding-block-start: 0.125em;
  line-height: 1;
  & > * {
    background: darkred;
    background-clip: text;
  }
  & > :last-child {
    color: transparent;
    transform-origin: 50% 40%;
    transform: scaleY(-0.5);
    mask-image: linear-gradient(rgb(255 255 255 / 0.35) 0%, rgb(255 255 255 / 0.7) 100%);
  }
}

.web-page-container {
  container-type: size;
  container-name: web-page;
}

@container web-page (width < 720px) {
  .web-page {
    margin-left: -16em;
    &.menu > .web-aside {
      transform: translateX(100%);
    }
  }
}
</style>
