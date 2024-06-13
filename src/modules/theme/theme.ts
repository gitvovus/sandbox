import { computed, reactive, type CSSProperties } from 'vue';
import { SingleSelection } from '@/lib/ui-models';
import { ViewModel } from '@/modules/view-model';
import { type PropertyBase } from '@/modules/theme/properties/base';
import { Color } from './properties/color';
import { Text } from './properties/text';

export class Theme extends ViewModel {
  readonly #properties = new SingleSelection<PropertyBase>([
    new Color('background-color', 0, 0, 0),
    new Color('border-color', 128, 0, 0),
    new Color('color', 255, 255, 255),
    new Text('box-shadow', '0 0 10px 10px rgb(255 255 255 / 0.25)'),
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
