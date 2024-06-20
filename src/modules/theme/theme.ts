import { computed, reactive, type CSSProperties } from 'vue';
import { SingleSelection } from '@/lib/ui-models';
import { ViewModel } from '@/modules/view-model';
import { type Property } from './properties/property';
import { Color } from './properties/color';
import { Shadow } from './properties/shadow';
// import { Text } from './properties/text';
import { Var } from './properties/var';

export class Section implements Property {
  readonly key = Symbol();
  readonly component = 'section-editor';
  readonly name: string;

  readonly #properties = new SingleSelection<Property>([]);

  constructor(name: string) {
    this.name = name;
  }

  get children() {
    return this.#properties.items;
  }

  toCss() {
    return 'section';
  }

  save() {}
  load() {}
};

// TODO: add sections
export class Theme extends ViewModel {
  readonly #dark: Property[] = [
    // new Color('--back', 9, 30, 51, 0.75),
    new Var('--surface', '24 28 36'),
    // new Var('background-color', 'rgb(var(--surface))'),
    // new Color('--paper', 48, 60, 74),
    // new Color('--glass', 0, 0, 0, 0.5),
    // new Color('--text', 164, 172, 190),
    // new Color('--border', 82, 88, 108, 0.35),
    // new Color('--line', 82, 88, 108, 0.35),
    // new Color('--shadow', 0, 0, 0, 0.5),
    // new Color('--scroll-track', 29, 36, 43),
    // new Color('--scroll-thumb', 42, 53, 63),
  ];

  readonly #properties = new SingleSelection<Property>([
    ...this.#dark,
    new Color('background-color', 24, 28, 36),
    new Color('border-color', 82, 88, 108, 0.5),
    new Color('color', 164, 172, 190),
    new Shadow('box-shadow', '0 0 20px 10px rgb(82 88 108 / 0.5)'),
  ]);

  readonly style = reactive({}) as CSSProperties;

  constructor() {
    super('theme-view');
    this.properties.forEach((item) => {
      (this.style as any)[item.name] = computed(() => item.toCss());
    });
    this.load();
    this.selectedProperty = this.#properties.items[0];
  }

  get properties() {
    return this.#properties.items;
  }
  get selectedProperty() {
    return this.#properties.selectedItem;
  }
  set selectedProperty(value) {
    this.#properties.selectedItem = value;
  }

  property(name: string) {
    return this.properties.find(item => (item.name === name))!;
  }

  css(name: string) {
    return this.property(name).toCss();
  }

  clear() {
    localStorage.clear();
  }

  save() {
    this.properties.forEach(item => item.save());
  }

  load() {
    this.properties.forEach(item => item.load());
  }
}
