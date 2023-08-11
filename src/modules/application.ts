import { createApp, type App } from 'vue';

import UiAccordion from '@/ui/accordion.vue';
import UiButton from '@/ui/button.vue';
import UiDialog from '@/ui/dialog.vue';
import UiIcon from '@/ui/icon.vue';
import UiItem from '@/ui/item.vue';
import UiPopup from '@/ui/popup.vue';

import AppView from '@/views/app-view.vue';
import ControlsView from '@/views/controls-view.vue';
import GearBoxView from '@/views/gear-box-view.vue';
import InfoView from '@/views/info-view.vue';
import LogoView from '@/views/logo-view.vue';
import LoremView from '@/views/lorem-view.vue';
import SvgTool from '@/views/svg-tool.vue';
import SvgView from '@/views/svg-view.vue';
import ThreeView from '@/views/three-view.vue';
import VoronoiView from '@/views/voronoi-view.vue';

import { AppModel } from '@/modules/app-model';

export class Application {
  readonly #app: App;

  constructor() {
    this.#app = createApp(AppView, { model: new AppModel() });
    this.#app
      // ui
      .component('ui-accordion', UiAccordion)
      .component('ui-button', UiButton)
      .component('ui-dialog', UiDialog)
      .component('ui-icon', UiIcon)
      .component('ui-item', UiItem)
      .component('ui-popup', UiPopup)
      // views
      .component('controls-view', ControlsView)
      .component('gear-box-view', GearBoxView)
      .component('info-view', InfoView)
      .component('logo-view', LogoView)
      .component('lorem-view', LoremView)
      .component('svg-tool', SvgTool)
      .component('svg-view', SvgView)
      .component('three-view', ThreeView)
      .component('voronoi-view', VoronoiView);
  }

  run() {
    this.#app.mount('body');
  }
}
