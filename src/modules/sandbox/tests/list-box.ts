import {
  computed,
  defineComponent,
  h,
  inject,
  provide,
  ref,
  resolveComponent,
  type ComputedRef,
  type InjectionKey,
  type PropType,
  type Ref,
  type SlotsType,
  type WritableComputedRef,
} from 'vue';

type ListBoxContext = {
  value: ComputedRef<any>;
  isOpen: Ref<boolean>;
  select: (value: any) => void;
  selected: (value: any) => ComputedRef<boolean>;
  selectedItem: WritableComputedRef<any>;
};

const listBoxContextKey = Symbol() as InjectionKey<ListBoxContext>;

function useListBoxContext() {
  const context = inject(listBoxContextKey);
  if (!context) {
    throw new Error('ListBoxContext is undefined');
  }
  return context;
}

function resolved(component: string | object) {
  const r = typeof component === 'string' && component.startsWith('ui-')
    ? resolveComponent(component)
    : component;
  return r;
}

export const ListBox = defineComponent(
  (props, { emit, slots }) => {
    const context: ListBoxContext = {
      value: computed(() => props.modelValue),
      isOpen: ref(false),
      select(value: any) {
        emit('update:modelValue', value);
      },
      selected: v => computed(() => v === props.modelValue),
      selectedItem: computed({
        get() {
          return props.modelValue;
        },
        set(value: any) {
          emit('update:modelValue', value);
        },
      }),
    };

    provide(listBoxContextKey, context);

    return () => slots.default({
      isOpen: context.isOpen,
      open: () => context.isOpen.value = true,
      value: context.value.value,
    });
  },

  {
    slots: Object as SlotsType<{
      default: ({ isOpen, open, value }: { isOpen: Ref<boolean>; open: () => void; value: any }) => any;
    }>,
    props: {
      modelValue: {
        type: [Object, String, Number, Boolean] as PropType<any>,
        default: undefined,
      },
    },
    emits: {
      'update:modelValue': (value: any) => true,
    },
  },
);

export const ListBoxButton = defineComponent(
  (props, { slots }) => {
    // const context = useListBoxContext();
    return () => slots.default();
  },

  {
    slots: Object as SlotsType<{ default: () => any }>,
    props: {
      as: {
        type: [Object, String] as PropType<object | string>,
        default: 'button',
      },
      modelValue: {
        type: [Object, String, Number, Boolean] as PropType<any>,
        default: undefined,
      },
    },
  },
);

export const ListBoxOptions = defineComponent(
  (props, { slots }) => {
    return () => h(
      resolved(props.as),
      props,
      {
        default: () => slots.default(),
      },
    );
  },

  {
    slots: Object as SlotsType<{ default: () => any }>,
    props: {
      as: {
        type: [Object, String] as PropType<object | string>,
        default: 'div',
      },
    },
  },
);

export const ListBoxOption = defineComponent(
  (props, { slots }) => {
    const context = useListBoxContext();
    const selected = computed(() => props.value === context.value.value);
    const binding = {
      onClick: (e: Event) => {
        context.select(props.value);
      },
    };
    return () => h(resolved(props.as), binding, slots.default({ selected: selected.value }));
  },
  {
    slots: Object as SlotsType<{
      default: ({ selected }: { selected: boolean }) => any;
    }>,
    props: {
      as: {
        type: [Object, String] as PropType<object | string>,
        default: 'div',
      },
      value: {
        type: [Object, String, Number, Boolean] as PropType<any>,
        required: true,
      },
    },
  },
);
