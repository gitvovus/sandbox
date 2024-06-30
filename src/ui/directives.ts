import { focusNextChild, focusPrevChild, type FocusOptions } from '@/lib/dom';

const clickEvents = ['pointerdown', 'mousedown', 'click', 'dblclick'];

function stopPropagation(e: Event) {
  e.stopPropagation();
}

export const vClickStop = {
  mounted: (el: HTMLElement) => {
    clickEvents.forEach(event => el.addEventListener(event, stopPropagation));
  },
  beforeUnmount: (el: HTMLElement) => {
    clickEvents.forEach(event => el.removeEventListener(event, stopPropagation));
  },
};

// arrow navigation
const arrowsState = new WeakMap<HTMLElement, (e: KeyboardEvent) => void>();

function handleArrows(el: HTMLElement, e: KeyboardEvent, options: FocusOptions) {
  switch (e.key) {
    case 'ArrowUp':
    case 'ArrowLeft':
      focusPrevChild(el, options);
      break;
    case 'ArrowDown':
    case 'ArrowRight':
      focusNextChild(el, options);
      break;
    default:
      return;
  }
  e.stopPropagation();
  e.preventDefault();
}

export const vArrows = {
  mounted: (el: HTMLElement, binding: { value: object }) => {
    const handler = (e: KeyboardEvent) => handleArrows(el, e, binding.value as FocusOptions);
    arrowsState.set(el, handler);
    el.addEventListener('keydown', handler);
  },
  beforeUnmount: (el: HTMLElement) => {
    const handler = arrowsState.get(el);
    handler && el.removeEventListener('keydown', handler);
    arrowsState.delete(el);
  },
};
