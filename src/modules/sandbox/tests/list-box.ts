import {
  computed,
  defineComponent,
  h,
  ref,
  type PropType,
  type Ref,
  type SlotsType,
  type WritableComputedRef,
} from 'vue';

type ListBoxSlotContent = {
  expanded: Ref<boolean>;
  toggle: () => void;
  selected: WritableComputedRef<any>;
};

export const ListBox = defineComponent(
  (props, { emit, slots }) => {
    const expanded = ref(false);
    const toggle = () => expanded.value = !expanded.value;
    const selected = computed({
      get() {
        return props.modelValue;
      },
      set(value: any) {
        emit('update:modelValue', value);
        expanded.value = false;
      },
    });

    return () => slots.default({ expanded, toggle, selected });
  },

  {
    slots: Object as SlotsType<{
      default: (content: ListBoxSlotContent) => any;
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
      props.as,
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
    const isSelected = computed(() => props.value === props.selectedValue);
    return () => slots.default({ selected: isSelected.value });
  },
  {
    slots: Object as SlotsType<{
      default: ({ selected }: { selected: boolean }) => any;
    }>,
    props: {
      value: {
        type: [Object, String, Number, Boolean] as PropType<any>,
        required: true,
      },
      selectedValue: {
        type: [Object, String, Number, Boolean] as PropType<any>,
        default: undefined,
      },
    },
  },
);
