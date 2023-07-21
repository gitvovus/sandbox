import { Item } from '@/lib/svg';
import { ViewModel } from '@/modules/view-model';

type GearIconOptions = {
  radius: number;
};

class ttt implements GearIconOptions {
  radius = 0;
}

function gearIconShape(options: GearIconOptions) {
  return '';
}

export class SvgModel extends ViewModel {
  root = new Item('svg');
  g1 = new Item('path', gearIconShape({ radius: 2 }));

  constructor() {
    super('svg-view');
  }

  mount(el: HTMLElement) {}

  unmount() {}

  test() {}
}
