const events = ['pointerdown', 'mousedown', 'click', 'dblclick'];

function stopPropagation(e: Event) {
  e.stopPropagation();
}

export const vClickStop = {
  mounted: (el: HTMLElement) => {
    events.forEach(event => el.addEventListener(event, stopPropagation));
  },
  beforeUnmount: (el: HTMLElement) => {
    events.forEach(event => el.removeEventListener(event, stopPropagation));
  },
};
