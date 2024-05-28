import { computed, reactive, type CSSProperties } from 'vue';
import { ViewModel } from '@/modules/view-model';
import { SingleSelection } from '@/lib/ui-models';
import { Color } from '@/modules/theme/properties/color';

export class Theme extends ViewModel {
  readonly #colors = new SingleSelection([
    new Color('background-color', 0, 0, 0),
    new Color('border-color', 128, 0, 0),
    new Color('color', 255, 255, 255),
  ]);

  readonly style = reactive({}) as CSSProperties;

  constructor() {
    super('theme-view');
    this.colors.forEach((item) => {
      (this.style as any)[item.name] = computed(() => item.toCss());
    });
  }

  get colors() {
    return this.#colors.items;
  }
  get selectedColor() {
    return this.#colors.selectedItem;
  }
  set selectedColor(value) {
    this.#colors.selectedItem = value;
  }

  color(name: string) {
    return this.colors.find(item => (item.name === name))!;
  }

  save() {
    this.colors.forEach(item => item.save());
  }

  load() {
    this.colors.forEach(item => item.load());
  }
}
