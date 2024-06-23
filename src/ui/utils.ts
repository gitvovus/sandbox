import { Fragment, defineComponent, h, type SlotsType } from 'vue';

export const CloneItem = defineComponent(
  (props, { slots }) => {
    return () => h(Fragment, undefined, [slots.default(), slots.default()]);
  },
  {
    slots: Object as SlotsType<{
      default(): any;
    }>,
  },
);
