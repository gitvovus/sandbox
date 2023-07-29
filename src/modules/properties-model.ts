import { ViewModel } from '@/modules/view-model';

export interface Property {
  readonly component: string;
  readonly title: string;
  readonly children: Property[];
}

export class StringProperty implements Property {
  readonly component = 'string-value';
  readonly title: string;
  readonly children: Property[] = [];

  constructor(title: string) {
    this.title = title;
  }
}

export class PropertiesModel extends ViewModel {
  constructor() {
    super('properties-view');
  }
}
