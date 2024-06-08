import { createApp, type App } from 'vue';

// ui componnents
import UiButton from '@/ui/button.vue';
import UiCollapse from '@/ui/collapse.vue';
import UiDetails from '@/ui/details.vue';
import UiIcon from '@/ui/icon.vue';
import UiInput from '@/ui/input.vue';
import UiItem from '@/ui/item.vue';
import UiPopup from '@/ui/popup.vue';
import UiRange from '@/ui/range.vue';
import UiTestItem from '@/ui/test-item.vue';

// directives
import { vClickStop } from '@/ui/directives';

// property editors
import ColorEditor from '@/modules/theme/editors/color.vue';
import TextEditor from '@/modules/theme/editors/text.vue';

// views
import AppView from '@/modules/app/app-view.vue';
import BicubicDemo from '@/modules/bicubic-demo/view.vue';
import Controls from '@/modules/controls/controls.vue';
import SandboxView from '@/modules/sandbox/sandbox-view.vue';
import Dialog from '@/modules/dialog/view.vue';
import GearBox from '@/modules/gear-box/view.vue';
import Logo from '@/modules/logo/view.vue';
import Lorem from '@/modules/lorem/lorem.vue';
import ResponsiveView from '@/modules/responsive/view.vue';
import SvgSandbox from '@/modules/svg-sandbox/view.vue';
import ThemeView from '@/modules/theme/theme-view.vue';
import Worker from '@/modules/worker/view.vue';

import { AppModel } from '@/modules/app/app-model';

import { TestContainer, TestHeader, TestItem } from '@/modules/sandbox/sandbox-model';

export class Application {
  readonly #appModel = new AppModel();
  readonly #vue: App;

  constructor() {
    this.#vue = createApp(AppView, { model: this.#appModel });
    this.#vue
      // ui
      .component('ui-button', UiButton)
      .component('ui-collapse', UiCollapse)
      .component('ui-details', UiDetails)
      .component('ui-icon', UiIcon)
      .component('ui-input', UiInput)
      .component('ui-item', UiItem)
      .component('ui-popup', UiPopup)
      .component('ui-range', UiRange)
      .component('ui-test-item', UiTestItem)
      // directives
      .directive('click-stop', vClickStop)
      // views
      .component('bicubic-demo-view', BicubicDemo)
      .component('controls-view', Controls)
      .component('sandbox-view', SandboxView)
      .component('dialog-view', Dialog)
      .component('gear-box-view', GearBox)
      .component('logo-view', Logo)
      .component('lorem-view', Lorem)
      .component('responsive-view', ResponsiveView)
      .component('svg-sandbox-view', SvgSandbox)
      .component('theme-view', ThemeView)
      .component('worker-view', Worker)
      // properties
      .component('color-editor', ColorEditor)
      .component('text-editor', TextEditor)
      // test
      .component('test-container', TestContainer)
      .component('test-header', TestHeader)
      .component('test-item', TestItem);
  }

  run() {
    this.#vue.mount('body');
  }
}
