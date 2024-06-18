import { ref } from 'vue';
import { Color } from './color';
import { Length } from './length';
import { PropertyBase } from './property';

export class Shadow extends PropertyBase {
  readonly dx = new Length('');
  readonly dy = new Length('');
  readonly blur = new Length('');
  readonly spread = new Length('');
  readonly color = new Color('');
  readonly #inset = ref('');

  constructor(name: string, value: string) {
    super('shadow-editor', name);
    this.set(value);
  }

  get inset() {
    return this.#inset.value;
  }

  set inset(value) {
    this.#inset.value = value;
  }

  set(value: string) {
    // split
    const splitRegex = /((?:\S|(?<=\([^)]*)\s(?=[^(]*\)))*)/g;
    const split = [...value.matchAll(splitRegex)];
    const values = split.filter(item => item[0]).map(item => item[0]);

    // get lengths
    const ls: { value: number; unit: string }[] = [];
    for (const v of values) {
      const match = v.match(/(-?\d+\.?\d*|-?\.\d+)($|px$|em$|rem$)/);
      if (!match || match.length !== 3) continue;
      console.log(match);
      ls.push({ value: Number(match[1]), unit: match[2] });
      if (ls.length === 4) break;
    }

    [this.dx, this.dy, this.blur, this.spread].forEach((item, i) => {
      if (ls.length > i) {
        item.value = ls[i].value;
        item.unit = ls[i].unit || 'px';
      }
    });

    // get color
    for (const v of values) {
      const rgb = v.match(/(rgb\((.*)\)$)/);
      if (rgb?.length !== 3) continue;

      const content = rgb[2];
      const ns = content.match(/(\d+)\s+(\d+)\s+(\d+)\s*\/\s*(\d+\.?\d*|\.\d+)/);
      if (!ns || ns.length < 4) continue;

      this.color.r = Number(ns[1]);
      this.color.g = Number(ns[2]);
      this.color.b = Number(ns[3]);
      if (ns.length > 4) {
        this.color.a = Number(ns[4]);
      }
    }
  }

  toCss() {
    const [dx, dy, blur, spread, color]
      = [this.dx, this.dy, this.blur, this.spread, this.color].map(value => value.toCss());
    let s = `${dx} ${dy}`;
    if (this.blur.value || this.spread.value) {
      s += ` ${blur}`;
    }
    if (this.spread.value) {
      s += ` ${spread}`;
    }
    s += ` ${color}`;
    if (this.inset) {
      s += ` ${this.inset}`;
    }
    return s;
  }
}
