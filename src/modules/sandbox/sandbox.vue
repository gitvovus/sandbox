<script setup lang="ts">
import { ref } from 'vue';
import { Sandbox } from './sandbox';
import { useResizer } from '@/lib/use';

const { model } = defineProps<{ model: Sandbox }>();

const echo = ref<HTMLElement>();
const text = ref<HTMLElement>();

const w = ref(0);
const h = ref(0);

useResizer(text, (width, height) => {
  w.value = width;
  h.value = height;
});
</script>

<template>
  <div class="scrollable surface view flex col gap-2 p-2">
    <!-- grid -->
    <div class="test-grid">
      <div class="test-items-grid">
        <template
          v-for="item in model.single.items"
          :key="item.key"
        >
          <div class="test-grid-cell">
            {{ item === model.single.selectedItem ? '+' : ' ' }}
          </div>
          <div
            class="test-grid-cell"
            @click="model.single.selectedItem = item"
          >
            {{ item.name }}
          </div>
        </template>
      </div>
      <div class="test-grid-cell">
        <test-container v-model="model.single.selectedItem">
          <test-header v-slot="{ selected }">
            {{ selected?.name || '-' }}
          </test-header>
          <test-item
            v-for="item in model.single.items"
            :key="item.key"
            v-slot="{ selected }"
            :value="item"
          >
            <div :class="{ 'test-selected': selected }">
              {{ item.name }} {{ selected ? '+' : '-' }}
            </div>
          </test-item>
        </test-container>
      </div>
    </div>

    <!-- ExplicitPromise test -->
    <div class="flex gap-2">
      <ui-button class="btn" @click="model.test()">
        test
      </ui-button>
      <ui-button class="btn" @click="model.start()">
        start
      </ui-button>
      <ui-button class="btn" @click="model.resolve()">
        resolve
      </ui-button>
      <ui-button class="btn" @click="model.reject()">
        reject
      </ui-button>
    </div>

    <!-- textarea test -->
    <div class="test-host">
      <div ref="echo" class="test-echo" :style="{ width: `${w}px`, height: `${h}px` }">
        <template v-for="(line, i) in model.parsed" :key="i">
          <span v-if="line !== '\n'">{{ line }}</span>
          <br v-else>
        </template>
      </div>
      <textarea ref="text" v-model="model.text" type="text" class="test-text" />
    </div>

    <!-- parser test -->
    <div class="flex gap-4 ai-center">
      <input v-model="model.parser.text" :style="{ width: '20em' }">
      <ui-button class="btn" @click="model.parser.parseShadow()">
        parse shadow
      </ui-button>
      <ui-button class="btn" @click="model.parser.parseLength()">
        parse length
      </ui-button>
      <span>{{ model.parser.parsed }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.test-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25em;
}
.test-items-grid {
  display: grid;
  grid-template-columns: 2em 1fr;
  gap: 0.25em;
}
.test-grid-cell {
  background-color: rgba(0 0 0 /0.25);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
}
.test-selected {
  background-color: rgba(0 0 0 / 0.25);
}
.test-host {
  position: relative;
  max-height: 100vh;
}
.test-echo {
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.5em;
  overflow: hidden;
  overflow-wrap: break-word;
  word-break: normal;
  word-spacing: 0;
}
.test-highlight {
  background-color: darkred;
}
.test-text {
  position: relative;
  resize: both;
  background: transparent;
  color: transparent;
  caret-color: rgb(var(--text));
  padding: 0.5em;
  margin: 0;
  font: unset;
}
</style>
