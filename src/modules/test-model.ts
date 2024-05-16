import {
  computed,
  defineComponent,
  h,
  inject,
  isReactive,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  shallowReactive,
  shallowRef,
  watch,
  watchEffect,
  type InjectionKey,
  type PropType,
  type Ref,
  type ShallowReactive,
  type SlotsType,
} from 'vue';

import { ViewModel } from '@/modules/view-model';
import { Disposable } from '@/lib/std';

export class SingleSelection<T> {
  readonly #data: T[];
  readonly items: ShallowReactive<T[]>;
  readonly #selectedItem = shallowRef<T | undefined>();

  constructor(data: T[]) {
    this.#data = data;
    this.items = shallowReactive(this.#data);
  }

  get selectedItem() {
    return this.#selectedItem.value;
  }

  set selectedItem(value) {
    if (value !== undefined && !this.items.includes(value)) {
      return;
    }
    this.#selectedItem.value = value;
  }
}

export class TestData {
  readonly key = Symbol();
  #name: Ref<string>;
  #value: Ref<number>;

  constructor(name: string, value: number) {
    this.#name = ref(name);
    this.#value = ref(value);
  }

  get name() {
    return this.#name.value;
  }

  set name(value) {
    this.#name.value = value;
  }

  get value() {
    return this.#value.value;
  }

  set value(value) {
    this.#value.value = value;
  }
}

export class TestModel extends ViewModel {
  readonly #data = [new TestData('one', 1), new TestData('two', 2), new TestData('three', 3)];
  readonly single = new SingleSelection(this.#data);

  constructor() {
    super('test-view');
  }

  test() {
    this.single.selectedItem = undefined;
  }
}

type ContainerContext = {
  modelValue: Ref<any>;
  select: (item: any) => void;
};
const key = Symbol() as InjectionKey<ContainerContext>;

export const TestContainer = defineComponent(
  (props, { emit, slots }) => {
    const context: ContainerContext = {
      modelValue: shallowRef(props.modelValue),
      select(item: any) {
        emit('update:modelValue', item);
      },
    };
    provide(key, context);
    const mounted = new Disposable();

    onMounted(() => {
      mounted.add(watchEffect(() => (context.modelValue.value = props.modelValue)));
    });

    onBeforeUnmount(() => mounted.dispose());

    return () => h(props.as, undefined, slots.default());
  },
  {
    props: {
      as: { type: [Object, String], default: 'div' },
      modelValue: {
        type: [Object, String, Number] as PropType<object | string | number | undefined>,
      },
    },
    emits: {
      'update:modelValue': (value: any) => true,
    },
    slots: Object as SlotsType<{
      default(): any;
    }>,
    inheritAttrs: false,
  },
);

export const TestHeader = defineComponent(
  (props, { slots }) => {
    const context = inject(key);
    const selected = computed(() => context?.modelValue.value);
    return () => h('div', props, slots.default({ selected: selected.value }));
  },
  {
    slots: Object as SlotsType<{
      default({ selected }: { selected: any }): any;
    }>,
  },
);

export const TestItem = defineComponent(
  (props, { slots }) => {
    const context = inject(key);
    const selected = computed(() => context?.modelValue.value === props.value);
    return () =>
      h(
        'div',
        { onClick: () => context?.select(props.value) },
        slots.default({ selected: selected.value }),
      );
  },
  {
    props: {
      value: { type: [Object, String, Number] as PropType<object | string | number | undefined> },
    },
    slots: Object as SlotsType<{
      default({ selected }: { selected: boolean }): any;
    }>,
  },
);
