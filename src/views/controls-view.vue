<script setup lang="ts">
import { type ControlsModel } from '@/modules/controls-model';
defineProps<{ model: ControlsModel }>();
</script>

<template>
  <div class="view controls-view">
    <!-- popup -->
    <div>
      <ui-button class="button" :disabled="model.popup" toggle v-model="model.popup">Popup</ui-button>
      <div class="popup-anchor">
        <ui-popup class="popup-content" v-model="model.popup">
          <p>
            Popup is persistent until it loses focus. If you want popup to be closed when some element inside is clicked, add
            'action' class to this element, like it is done for these buttons:
          </p>
          <div>
            <ui-button class="button action round" @click="model.click('ok')">Ok</ui-button>
            <ui-button class="button action round" @click="model.click('cancel')">Cancel</ui-button>
          </div>
          <div class="h-separator"></div>
          <div class="expand-header">
            <input type="text" v-model="model.text" />
            <ui-button
              v-for="(item, i) in model.paragraphs"
              :key="i"
              class="button round"
              :toggle="[item]"
              v-model="model.lorem.paragraphs"
            >
              {{ item }}
            </ui-button>
          </div>
          <lorem-view :model="model.lorem" />
        </ui-popup>
      </div>
    </div>
    <!-- buttons -->
    <div>
      <div class="expand-header">
        Buttons:
        <div class="flex-right">
          <ui-button class="button round iconic" @click="model.buttons = !model.buttons">
            <ui-icon :class="['icon-gt', model.buttons ? 'r90' : '']" />
          </ui-button>
        </div>
      </div>
      <ui-accordion :expanded="model.buttons">
        <div class="m-1">
          <input type="text" value="text" style="width: 100px" />
          <ui-button class="button">focusable</ui-button>
          <ui-button class="button" no-focus tabindex="-1">non-focusable</ui-button>
          <ui-button class="button">focusable</ui-button>
        </div>
        <div class="m-1">
          <div>Radio (index): {{ model.index }}</div>
          <ui-button
            v-for="(item, i) in model.group"
            :key="`index[${i}]`"
            class="button round"
            :toggle="[i]"
            v-model="model.index"
          >
            {{ `#${i}` }}
          </ui-button>
        </div>
        <div class="m-1">
          <div>Radio (object): { name: {{ model.selectedItem.name }}, value: {{ model.selectedItem.value }} }</div>
          <ui-button
            v-for="(item, i) in model.items"
            :key="`object[${i}]`"
            class="button round"
            :toggle="[model.items[i]]"
            v-model="model.selectedItem"
          >
            {{ `#${i}` }}
          </ui-button>
        </div>
        <div class="m-1">
          <div>
            Checkbox: [&nbsp;<span v-for="(item, i) in model.group" :key="i + 300">{{ item }}&nbsp;</span>]
          </div>
          <ui-button
            v-for="(item, i) in model.group"
            :key="`checkbox[${i}]`"
            class="button round"
            toggle
            v-model="model.group[i]"
          >
            {{ `#${i}` }}
          </ui-button>
        </div>
        <div class="m-1">
          <div>Push: {{ model.message }}</div>
          <ui-button @click="model.click('unstyled')">Unstyled</ui-button>
          <ui-button class="button" @click="model.click('ok')">Ok</ui-button>
          <ui-button class="button" @click="model.click('cancel')">Cancel</ui-button>
          <ui-button class="button" @click="model.click('disabled')" disabled>Disabled</ui-button>
          <ui-button class="button" :toggle="[model.items[0]]" v-model="model.selectedItem" disabled>Disabled</ui-button>
        </div>
      </ui-accordion>
    </div>
    <!-- accordions -->
    <div>
      <div class="expand-header">
        <div>
          Expand, paragraphs:
          <ui-button
            v-for="(item, i) in model.paragraphs"
            :key="i"
            class="button round"
            :toggle="[item]"
            v-model="model.lorem.paragraphs"
          >
            {{ item }}
          </ui-button>
        </div>
        <div class="flex-right">
          <ui-button class="button round iconic" @click="model.expanded = !model.expanded">
            <ui-icon :class="['icon-gt', model.expanded ? 'r90' : '']" />
          </ui-button>
        </div>
      </div>
      <ui-accordion :expanded="model.expanded">
        <lorem-view :model="model.lorem" class="content" />
      </ui-accordion>
      <template v-for="(item, i) in 3" :key="`lorem[${i}]`">
        <div class="expand-header">
          <div>Expand (radio #{{ i }}):</div>
          <div class="flex-right">
            <ui-button class="button round iconic" :toggle="[i, undefined]" v-model="model.expandedGroup">
              <ui-icon :class="['icon-gt', model.expandedGroup === i ? 'r90' : '']" />
            </ui-button>
          </div>
        </div>
        <ui-accordion :expanded="model.expandedGroup === i">
          <lorem-view :paragraphs="1" class="content" />
        </ui-accordion>
      </template>
    </div>
    <!-- icons -->
    <div class="icons">
      <div v-for="item in ['down', 'gt', 'lt', 'up']" :key="item" class="icon-content">
        <ui-icon :class="`icon-${item}`" />
      </div>
    </div>
  </div>
</template>

<style>
.view.controls-view {
  overflow: auto;
  border-radius: 0;
}

.expand-header {
  display: flex;
  align-items: center;
  padding: 2px 2px 2px 0.5em;
  background-color: var(--bg);
}

.popup-anchor {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
}

.popup-content {
  max-width: 25em;
  max-height: 30em;
  padding: 0 0.5em;
}

.content {
  padding: 0 0.5em;
}

.icons {
  display: flex;
  justify-content: center;
  border: 1px solid rgb(255 255 255 / 0.0625);
  border-radius: 0.25rem;
  margin: 1em;
  padding: 1em;
}

.icon-content {
  width: 64px;
  height: 64px;
  margin: 0.25rem;
  color: green;
  background-color: rgb(0 0 0 / 0.25);
  border-radius: 0.25rem;
}

.icon-content:hover {
  color: red;
}
</style>
