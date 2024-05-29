import { createApp, type App as VueApp } from 'vue';

// ui componnents
import UiButton from '@/ui/button.vue';
import UiCollapse from '@/ui/collapse.vue';
import UiIcon from '@/ui/icon.vue';
import UiItem from '@/ui/item.vue';
import UiPopup from '@/ui/popup.vue';
import UiRange from '@/ui/range.vue';
import UiTestItem from '@/ui/test-item.vue';

// property editors
import ColorEditor from '@/modules/theme/editors/color.vue';

// views
import AppView from '@/modules/app/view.vue';
import BicubicDemo from '@/modules/bicubic-demo/view.vue';
import Controls from '@/modules/controls/controls.vue';
import ControlsSandbox from '@/modules/controls-sandbox/view.vue';
import Dialog from '@/modules/dialog/view.vue';
import GearBox from '@/modules/gear-box/view.vue';
import Logo from '@/modules/logo/view.vue';
import Lorem from '@/modules/lorem/view.vue';
import ResponsiveView from '@/modules/responsive/view.vue';
import SvgSandbox from '@/modules/svg-sandbox/view.vue';
import ThemeView from '@/modules/theme/view.vue';
import Worker from '@/modules/worker/view.vue';

import { App } from '@/modules/app/model';

import { TestContainer, TestHeader, TestItem } from '@/modules/controls-sandbox/model';

export class Application {
  readonly #app: VueApp;

  constructor() {
    this.#app = createApp(AppView, { model: new App() });
    this.#app
      // ui
      .component('ui-button', UiButton)
      .component('ui-collapse', UiCollapse)
      .component('ui-icon', UiIcon)
      .component('ui-item', UiItem)
      .component('ui-popup', UiPopup)
      .component('ui-range', UiRange)
      .component('ui-test-item', UiTestItem)
      // properties
      .component('color-editor', ColorEditor)
      // views
      .component('bicubic-demo-view', BicubicDemo)
      .component('controls-view', Controls)
      .component('controls-sandbox-view', ControlsSandbox)
      .component('dialog-view', Dialog)
      .component('gear-box-view', GearBox)
      .component('logo-view', Logo)
      .component('lorem-view', Lorem)
      .component('responsive-view', ResponsiveView)
      .component('svg-sandbox-view', SvgSandbox)
      .component('theme-view', ThemeView)
      .component('worker-view', Worker)
      // test
      .component('test-container', TestContainer)
      .component('test-header', TestHeader)
      .component('test-item', TestItem);
  }

  run() {
    this.#app.mount('body');
  }
}
