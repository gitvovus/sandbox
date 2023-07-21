import { ref, shallowReactive } from 'vue';
import * as std from '@/lib/std';

export type Attributes = {
  id?: string;
  href?: string;
  class?: string;
  [key: string]: string | number | undefined;
};

export type ViewBox = { left: number; top: number; width: number; height: number };

export class Item {
  readonly key = Symbol();
  readonly tag: string;
  readonly attributes = shallowReactive<Attributes>({});
  readonly items = shallowReactive<Item[]>([]);

  readonly #text = ref<string | undefined>();
  readonly #events = new Map<keyof SVGElementEventMap, ((this: SVGElement, e: any) => void)[]>();

  #element?: SVGElement;
  #parent?: Item;

  constructor(tag: string, data?: Attributes | string) {
    this.tag = tag;
    if (data) {
      if (typeof data === 'string') {
        this.text = data;
      } else {
        Object.assign(this.attributes, data);
      }
    }
  }

  get text() {
    return this.#text.value;
  }

  set text(value) {
    this.#text.value = value;
  }

  get parent() {
    return this.#parent;
  }

  get element() {
    return this.#element;
  }

  get index() {
    return this.parent ? this.parent.items.indexOf(this) : 0;
  }

  set index(toIndex: number) {
    if (this.parent) {
      this.parent.move(this, toIndex);
    }
  }

  clear() {
    this.items.forEach((item) => (item.#parent = undefined));
    this.items.length = 0;
  }

  add(...items: Item[]) {
    items.forEach((item) => {
      item.#parent = this;
      this.items.push(item);
    });
  }

  remove(item: Item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    item.#parent = undefined;
  }

  move(item: Item, toIndex: number) {
    const index = this.items.indexOf(item);
    if (index === -1) {
      return;
    }
    if (toIndex < 0) {
      toIndex += this.items.length;
    }
    toIndex = std.clamp(toIndex, 0, this.items.length - 1);
    if (index !== toIndex) {
      this.items.splice(index, 1);
      this.items.splice(toIndex, 0, item);
    }
  }

  find(id: string): Item | undefined {
    if (this.attributes.id === id) {
      return this;
    }
    for (const item of this.items) {
      const result = item.find(id);
      if (result) {
        return result;
      }
    }
    return undefined;
  }

  findByClass(name: string): Item | undefined {
    if (
      this.attributes.class !== undefined &&
      (this.attributes.class as string).split(' ').includes(name)
    ) {
      return this;
    }
    for (const item of this.items) {
      const result = item.findByClass(name);
      if (result) {
        return result;
      }
    }
    return undefined;
  }

  // TODO: add event listener options
  on<EventType extends keyof SVGElementEventMap>(
    event: EventType,
    listener: (this: SVGElement, e: SVGElementEventMap[EventType]) => void
  ) {
    if (!this.#events.has(event)) {
      this.#events.set(event, []);
    }
    const listeners = this.#events.get(event)!;
    if (listeners.includes(listener)) {
      return;
    }
    listeners.push(listener);
    if (this.#element) {
      this.#element.addEventListener(event, listener, { passive: false });
    }
  }

  off<EventType extends keyof SVGElementEventMap>(
    event?: EventType,
    listener?: (this: SVGElement, e: SVGElementEventMap[EventType]) => void
  ) {
    if (!event) {
      if (this.#element) {
        this.#events.forEach((listeners, event) =>
          listeners.forEach((listener) => this.#element!.removeEventListener(event, listener))
        );
      }
      this.#events.clear();
      return;
    }
    if (!this.#events.has(event)) {
      return;
    }
    const listeners = this.#events.get(event)!;
    if (!listener) {
      if (this.#element) {
        listeners.forEach((listener) => this.#element!.removeEventListener(event, listener));
      }
      this.#events.delete(event);
    } else {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        if (this.#element) {
          this.#element.removeEventListener(event, listener);
        }
        listeners.splice(index, 1);
      }
    }
  }

  mount(el: SVGElement) {
    this.unmount();
    this.#element = el;
    if (this.#element) {
      this.#events.forEach((listeners, event) =>
        listeners.forEach((listener) =>
          this.#element!.addEventListener(event, listener, { passive: false })
        )
      );
    }
  }

  unmount() {
    if (this.#element) {
      this.#events.forEach((listeners, event) =>
        listeners.forEach((listener) => this.#element!.removeEventListener(event, listener))
      );
      this.#element = undefined;
    }
  }
}

export function fromElement(node: Node) {
  if (node.nodeType === node.TEXT_NODE) {
    const text = (node.nodeValue || '').trim();
    return text.length > 0 ? new Item(node.nodeName, text) : undefined;
  } else if (node instanceof Element) {
    const attributes: Attributes = {};
    for (const attr of node.attributes) {
      attributes[attr.name] = attr.value;
    }
    const item = new Item(node.nodeName, attributes);
    for (const child of node.childNodes) {
      const childItem = fromElement(child);
      if (childItem) {
        item.add(childItem);
      }
    }
    return item;
  }

  return undefined;
}

export function fromSource(text: string) {
  const parser = new DOMParser();
  const document = parser.parseFromString(text, 'image/svg+xml');
  return fromElement(document.documentElement);
}

export function toTransform(matrix: std.Matrix2x3) {
  return `matrix(${matrix.elements.join(' ')})`;
}

export function toViewBox({ left, top, width, height }: ViewBox) {
  return `${left} ${top} ${width} ${height}`;
}
