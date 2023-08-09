import { ref } from 'vue';

import { Disposable, onElementEvent } from '@/lib/std';

interface Handler {
  element: HTMLElement;
  pick: (e: PointerEvent) => void;
  drag: (e: PointerEvent) => void;
  drop: (e: PointerEvent) => void;
}

export class Controller {
  #mounted = new Disposable();

  #l = ref(0);
  #t = ref(0);
  #w = ref(800);
  #h = ref(500);
  #mw = ref(400);
  #mh = ref(250);

  #cc!: Handler;
  #nw!: Handler;
  #nn!: Handler;
  #ne!: Handler;
  #ww!: Handler;
  #ee!: Handler;
  #sw!: Handler;
  #ss!: Handler;
  #se!: Handler;
  #captured = { x: 0, y: 0 };

  // -----------------------------------------------------------
  get left() {
    return this.#l.value;
  }

  set left(value) {
    this.#l.value = value;
  }

  get top() {
    return this.#t.value;
  }

  set top(value) {
    this.#t.value = value;
  }

  get width() {
    return this.#w.value;
  }

  set width(value) {
    this.#w.value = value;
  }

  get height() {
    return this.#h.value;
  }

  set height(value) {
    this.#h.value = value;
  }

  get minWidth() {
    return this.#mw.value;
  }

  set minWidth(value) {
    this.#mw.value = value;
  }

  get minHeight() {
    return this.#mh.value;
  }

  set minHeight(value) {
    this.#mh.value = value;
  }

  // -----------------------------------------------------------
  mount(element: HTMLElement) {
    const grid = element.firstChild as HTMLElement;
    this.#cc = {
      element: grid.children[4] as HTMLElement,
      pick: this.#ccPick,
      drag: this.#ccDrag,
      drop: this.#ccDrop,
    };
    this.#nw = {
      element: grid.children[0] as HTMLElement,
      pick: this.#nwPick,
      drag: this.#nwDrag,
      drop: this.#nwDrop,
    };
    this.#nn = {
      element: grid.children[1] as HTMLElement,
      pick: this.#nnPick,
      drag: this.#nnDrag,
      drop: this.#nnDrop,
    };
    this.#ne = {
      element: grid.children[2] as HTMLElement,
      pick: this.#nePick,
      drag: this.#neDrag,
      drop: this.#neDrop,
    };
    this.#ww = {
      element: grid.children[3] as HTMLElement,
      pick: this.#wwPick,
      drag: this.#wwDrag,
      drop: this.#wwDrop,
    };
    this.#ee = {
      element: grid.children[5] as HTMLElement,
      pick: this.#eePick,
      drag: this.#eeDrag,
      drop: this.#eeDrop,
    };
    this.#sw = {
      element: grid.children[6] as HTMLElement,
      pick: this.#swPick,
      drag: this.#swDrag,
      drop: this.#swDrop,
    };
    this.#ss = {
      element: grid.children[7] as HTMLElement,
      pick: this.#ssPick,
      drag: this.#ssDrag,
      drop: this.#ssDrop,
    };
    this.#se = {
      element: grid.children[8] as HTMLElement,
      pick: this.#sePick,
      drag: this.#seDrag,
      drop: this.#seDrop,
    };

    this.#mounted.add(onElementEvent(this.#cc.element, 'dblclick', this.#dblClick));

    [
      this.#nw,
      this.#nn,
      this.#ne,
      this.#ww,
      this.#cc,
      this.#ee,
      this.#sw,
      this.#ss,
      this.#se,
    ].forEach((item) => this.#mounted.add(onElementEvent(item.element, 'pointerdown', item.pick)));

    this.center();
  }

  unmount() {
    this.#mounted.dispose();
  }

  center() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.left = Math.floor(0.5 * (width - this.width));
    this.top = Math.floor(0.5 * (height - this.height));
  }

  fit() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (this.width > w) this.width = w;
    if (this.height > h) this.height = h;
    if (this.left < 0) this.left = 0;
    if (this.top < 0) this.top = 0;
    if (this.left + this.width > w) this.left = (w - this.width) / 2;
    if (this.top + this.height > h) this.top = (h - this.height) / 2;
  }

  #capture(h: Handler, e: PointerEvent) {
    h.element.addEventListener('pointermove', h.drag);
    h.element.addEventListener('pointerup', h.drop);
    h.element.setPointerCapture(e.pointerId);
  }

  #release(h: Handler, e: PointerEvent) {
    h.element.removeEventListener('pointermove', h.drag);
    h.element.removeEventListener('pointerup', h.drop);
    h.element.releasePointerCapture(e.pointerId);
  }

  #dblClick = (e: Event) => {
    if (e.target === this.#cc.element) {
      this.center();
    }
  };

  // -----------------------------------------------------------
  #ccPick = (e: PointerEvent) => {
    if (e.target === this.#cc.element && e.buttons & 1) {
      this.#captured.x = e.screenX - this.left;
      this.#captured.y = e.screenY - this.top;
      this.#capture(this.#cc, e);
      e.stopPropagation();
      e.preventDefault();
    }
  };

  #ccDrag = (e: PointerEvent) => {
    this.left = e.screenX - this.#captured.x;
    this.top = e.screenY - this.#captured.y;
  };

  #ccDrop = (e: PointerEvent) => {
    if (!(e.buttons & 1)) {
      this.#release(this.#cc, e);
    }
  };

  // -----------------------------------------------------------
  #nwPick = (e: PointerEvent) => {
    if (e.buttons & 1) {
      this.#captured.x = e.screenX - this.left;
      this.#captured.y = e.screenY - this.top;
      this.#capture(this.#nw, e);
    }
  };

  #nwDrag = (e: PointerEvent) => {
    const left = e.screenX - this.#captured.x;
    const top = e.screenY - this.#captured.y;
    const width = Math.max(this.minWidth, this.left + this.width - left);
    const height = Math.max(this.minHeight, this.top + this.height - top);

    this.left = this.left + this.width - width;
    this.top = this.top + this.height - height;
    this.width = width;
    this.height = height;
  };

  #nwDrop = (e: PointerEvent) => {
    if (!(e.buttons & 1)) {
      this.#release(this.#nw, e);
    }
  };

  // -----------------------------------------------------------
  #nnPick = (e: PointerEvent) => {
    if (e.buttons & 1) {
      this.#captured.y = e.screenY - this.top;
      this.#capture(this.#nn, e);
    }
  };

  #nnDrag = (e: PointerEvent) => {
    const top = e.screenY - this.#captured.y;
    const height = Math.max(this.minHeight, this.top + this.height - top);

    this.top = this.top + this.height - height;
    this.height = height;
  };

  #nnDrop = (e: PointerEvent) => {
    if (!(e.buttons & 1)) {
      this.#release(this.#nn, e);
    }
  };

  // -----------------------------------------------------------
  #nePick = (e: PointerEvent) => {
    if (e.buttons & 1) {
      this.#captured.x = e.screenX - this.width;
      this.#captured.y = e.screenY - this.top;
      this.#capture(this.#ne, e);
    }
  };

  #neDrag = (e: PointerEvent) => {
    const top = e.screenY - this.#captured.y;
    const height = Math.max(this.minHeight, this.top + this.height - top);

    this.width = Math.max(this.minWidth, e.screenX - this.#captured.x);
    this.top = this.top + this.height - height;
    this.height = height;
  };

  #neDrop = (e: PointerEvent) => {
    if (!(e.buttons & 1)) {
      this.#release(this.#ne, e);
    }
  };

  // -----------------------------------------------------------
  #wwPick = (e: PointerEvent) => {
    if (e.buttons & 1) {
      this.#captured.x = e.screenX - this.left;
      this.#capture(this.#ww, e);
    }
  };

  #wwDrag = (e: PointerEvent) => {
    const left = e.screenX - this.#captured.x;
    const width = Math.max(this.minWidth, this.left + this.width - left);

    this.left = this.left + this.width - width;
    this.width = width;
  };

  #wwDrop = (e: PointerEvent) => {
    if (!(e.buttons & 1)) {
      this.#release(this.#ww, e);
    }
  };

  // -----------------------------------------------------------
  #eePick = (e: PointerEvent) => {
    if (e.buttons & 1) {
      this.#captured.x = e.screenX - this.width;
      this.#capture(this.#ee, e);
    }
  };

  #eeDrag = (e: PointerEvent) => {
    this.width = Math.max(this.minWidth, e.screenX - this.#captured.x);
  };

  #eeDrop = (e: PointerEvent) => {
    if (!(e.buttons & 1)) {
      this.#release(this.#ee, e);
    }
  };

  // -----------------------------------------------------------
  #swPick = (e: PointerEvent) => {
    if (e.buttons & 1) {
      this.#captured.x = e.screenX - this.left;
      this.#captured.y = e.screenY - this.height;
      this.#capture(this.#sw, e);
    }
  };

  #swDrag = (e: PointerEvent) => {
    const left = e.screenX - this.#captured.x;
    const width = Math.max(this.minWidth, this.left + this.width - left);

    this.left = this.left + this.width - width;
    this.width = width;
    this.height = Math.max(this.minHeight, e.screenY - this.#captured.y);
  };

  #swDrop = (e: PointerEvent) => {
    if (!(e.buttons & 1)) {
      this.#release(this.#sw, e);
    }
  };

  // -----------------------------------------------------------
  #ssPick = (e: PointerEvent) => {
    if (e.buttons & 1) {
      this.#captured.y = e.screenY - this.height;
      this.#capture(this.#ss, e);
    }
  };

  #ssDrag = (e: PointerEvent) => {
    this.height = Math.max(this.minHeight, e.screenY - this.#captured.y);
  };

  #ssDrop = (e: PointerEvent) => {
    if (!(e.buttons & 1)) {
      this.#release(this.#ss, e);
    }
  };

  // -----------------------------------------------------------
  #sePick = (e: PointerEvent) => {
    if (e.buttons & 1) {
      this.#captured.x = e.screenX - this.width;
      this.#captured.y = e.screenY - this.height;
      this.#capture(this.#se, e);
    }
  };

  #seDrag = (e: PointerEvent) => {
    this.width = Math.max(this.minWidth, e.screenX - this.#captured.x);
    this.height = Math.max(this.minHeight, e.screenY - this.#captured.y);
  };

  #seDrop = (e: PointerEvent) => {
    if (!(e.buttons & 1)) {
      this.#release(this.#se, e);
    }
  };
}
