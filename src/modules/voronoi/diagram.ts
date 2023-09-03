import { Vec } from '@/lib/bi';
import { type Node, Tree, successor, traverseInorder, minimum } from '@/lib/tree';

export class PriorityQueue<T> {
  #tree: Tree<T>;
  #min?: Node<T>;

  constructor(less: (a: T, b: T) => boolean) {
    this.#tree = new Tree<T>(less);
  }

  empty() {
    return this.#tree.empty();
  }

  clear() {
    this.#tree.clear();
    this.#min = undefined;
  }

  peek() {
    if (!this.#min) throw 'peek: empty queue';
    return this.#min.value;
  }

  push(value: T) {
    const node = this.#tree.insert(value);
    if (!this.#min || this.#tree.less(value, this.#min.value)) {
      this.#min = node;
    }
    return node;
  }

  pop() {
    if (!this.#min) throw 'pop: empty queue';
    const node = this.#min;
    this.#min = successor(this.#min);
    this.#tree.remove(node);
    return node.value;
  }

  remove(node?: Node<T>) {
    if (!node) {
      return;
    }
    if (node === this.#min) {
      this.#min = successor(this.#min);
    }
    this.#tree.remove(node);
  }
}

const enum Evt {
  BASE,
  SITE,
}

const evtTypes = new Map([
  [Evt.BASE, 'BASE'],
  [Evt.SITE, 'SITE'],
]);
function evtType(evt: Evt) {
  return evtTypes.get(evt);
}

export const enum Seg {
  BASE,
  SITE,
}

const segTypes = new Map([
  [Seg.BASE, 'BASE'],
  [Seg.SITE, 'SITE'],
]);
function segType(seg: Seg) {
  return segTypes.get(seg);
}

export type CoreSegment = {
  left: Vec;
  right: Vec;
  prev?: Node<Segment>;
  next?: Node<Segment>;
};

export type BaseSegment = CoreSegment & {
  type: Seg.BASE;
  event?: Node<BaseEvent>;
};

export type SiteSegment = CoreSegment & {
  type: Seg.SITE;
  site: Vec;
};

export type Segment = BaseSegment | SiteSegment;

type CoreEvent = {
  at: number;
};

type BaseEvent = CoreEvent & {
  type: Evt.BASE;
  node: Node<BaseSegment>;
};

type SiteEvent = CoreEvent & {
  type: Evt.SITE;
  site: Vec;
};

type Event = BaseEvent | SiteEvent;

type Edge = {
  sites: [Vec, Vec];
  points: [Vec, Vec];
};

const v = (x: number = 0, y: number = 0) => new Vec(x, y);

const vectorLess = (a: Vec, b: Vec) => a.y < b.y || (a.y === b.y && a.x < b.x);

const eventLess = (a: Event, b: Event) => {
  if (a.at !== b.at) {
    return a.at < b.at;
  }
  if (a.type !== b.type) {
    return a.type < b.type;
  }
  if (a.type === Evt.BASE) {
    return a.node.value.left.x < (<BaseEvent>b).node.value.left.x;
  }
  if (a.type === Evt.SITE) {
    return a.site.x < (<SiteEvent>b).site.x;
  }
  debugger;
  throw 'eventLess: not implemented';
};

const segmentLess = (a: Segment, b: Segment) => {
  if (a.left.x !== b.left.x) {
    return a.left.x < b.left.x;
  }
  if (a.right.x !== b.right.x) {
    return a.right.x < b.right.x;
  }
  return a.type < b.type;
};

type Beach = Tree<Segment>;

type StepCallback = (at: number) => Promise<void>;

export class Diagram {
  readonly minX = -10;
  readonly maxX = 10;
  readonly minY = -10;
  readonly maxY = 10;

  readonly points: Vec[] = [];
  readonly sites: Vec[] = [];
  readonly edges: Edge[] = [];

  readonly events = new PriorityQueue<Event>(eventLess);
  readonly baseSet = new Set<Node<Segment>>();
  readonly beach = new Tree(segmentLess);

  constructor(points: Vec[] = []) {
    this.set(points);
  }

  set(points: Vec[]) {
    this.points.length = 0;
    this.points.push(...points);
  }

  async solve(stepCallback: StepCallback) {
    this.beach.clear();
    this.events.clear();
    this.points.forEach((point) => this.events.push({ type: Evt.SITE, at: point.y, site: point }));

    this.beach.insert({
      type: Seg.BASE,
      left: v(this.minX, this.minY),
      right: v(this.maxX, this.minY),
    });

    let at = this.minY;
    this.print(this.beach);
    await stepCallback(at);
    while (!this.events.empty()) {
      const event = this.events.pop();
      at = event.at;
      switch (event.type) {
        case Evt.SITE:
          this.siteEvent(event);
          break;
        case Evt.BASE:
          this.baseEvent(event);
          break;
      }
      this.print(this.beach);
      await stepCallback(at);
    }

    console.log('done');
  }

  siteDx(site: Vec, at: number) {
    const dy = at - this.minY;
    const sy = site.y - this.minY;
    return Math.sqrt(dy * dy - sy * sy);
  }

  sitesX(left: Vec, right: Vec, at: number) {
    // intersection of two parabolas, equations:
    // (x - site.x)^2 + (y - site.y)^2 = (y - at)^2
    //
    // there are two intersections, we need one that is between sites

    const x1 = left.x;
    const x2 = right.x;
    const y1 = left.y;
    const y2 = right.y;

    const c1 = y1 * y1 - at * at;
    const c2 = y2 * y2 - at * at;
    const d1 = 2 * (y1 - at);
    const d2 = 2 * (y2 - at);

    const a = d2 - d1;
    const b = 2 * (d1 * x2 - d2 * x1);
    const c = d2 * x1 * x1 - d1 * x2 * x2 + c1 * d2 - c2 * d1;
    const d = Math.sqrt(b * b - 4 * a * c);

    const x = a === 0 ? -c / b : -(b + d) / (2 * a);
    // console.log(`at: ${at}, x1: ${x1}, x2: ${x2}, a: ${a}, b: ${b}, c: ${c}, x: ${x}`);

    if (x < x1 || x > x2) throw 'sitesX: undexpected x';
    return x;
  }

  siteY(site: Vec, newSite: Vec, at: number) {
    const dy = site.y - at;
    const dx = newSite.x - site.x;
    const y = at - Math.sqrt(dx * dx + dy * dy);
    return y;
  }

  recalcLeft(node: Node<Segment>, at: number) {
    const value = node.value;
    const border = value.left;
    if (border.y === at) return;

    const prev = value.prev;
    if (!prev) {
      // left-most segment, x should became = minX
      border.x = this.minX;
    } else {
      switch (value.type) {
        case Seg.BASE:
          // prev must be site
          this.recalcRight(prev, at);
          return;
        case Seg.SITE:
          switch (prev.value.type) {
            case Seg.BASE:
              {
                const dx = this.siteDx(value.site, at);
                border.x = Math.max(this.minX, value.site.x - dx);
              }
              break;
            case Seg.SITE:
              border.x = this.sitesX(prev.value.site, value.site, at);
              break;
          }
          break;
      }
    }
    border.y = at;
  }

  recalcRight(node: Node<Segment>, at: number) {
    const value = node.value;
    const border = value.right;
    if (border.y === at) return;

    const next = value.next;
    if (!next) {
      // right-most segment, x should became = maxX
      border.x = this.maxX;
    } else {
      switch (value.type) {
        case Seg.BASE:
          // next must be site
          this.recalcLeft(next, at);
          return;
        case Seg.SITE:
          switch (next.value.type) {
            case Seg.BASE:
              {
                const dx = this.siteDx(value.site, at);
                border.x = Math.min(this.maxX, value.site.x + dx);
              }
              break;
            case Seg.SITE:
              border.x = this.sitesX(value.site, next.value.site, at);
              break;
          }
          break;
      }
    }
    border.y = at;
  }

  recalcAll(at: number) {
    let node = minimum(this.beach.root);
    if (!node) return;
    this.recalcLeft(node, at);
    while (node) {
      this.recalcRight(node, at);
      node = node.value.next;
    }
  }

  findNode(at: number, x: number) {
    let node = this.beach.root;
    while (node) {
      if (x < node.value.left.x) {
        node = node.left;
        continue;
      }
      if (x > node.value.right.x) {
        node = node.right;
        continue;
      }
      break;
    }

    if (!node) throw 'findNode: not found';

    let result: Node<Segment> | undefined;
    this.recalcLeft(node, at);
    this.recalcRight(node, at);
    if (node.value.left.x <= x && node.value.right.x >= x) {
      result = node;
    }
    // TODO:
    while (node.value.prev) {
      node = node.value.prev;
      if (node.value.left.x >= node.value.right.x) {
        this.recalcLeft(node, at);
        if (!result && node.value.left.x <= x && node.value.right.x >= x) {
          result = node;
        }
      } else {
        break;
      }
    }
    while (node.value.next) {
      node = node.value.next;
      if (node.value.left.x >= node.value.right.x) {
        this.recalcRight(node, at);
        if (!result && node.value.left.x <= x && node.value.right.x >= x) {
          result = node;
        }
      } else {
        break;
      }
    }

    if (!result) throw 'findNode: not found after recalc';
    return result;
  }

  siteEvent(event: SiteEvent) {
    const at = event.at;
    const site = event.site;
    console.log(`SITE at ${at}: (${site.x}, ${site.y})`);
    this.sites.push(site);

    const leftNode = this.findNode(at, site.x);

    const leftSegment = leftNode.value;
    switch (leftSegment.type) {
      case Seg.BASE:
        this.splitBase(<Node<BaseSegment>>leftNode, site, at);
        break;
      case Seg.SITE:
        this.splitSite(<Node<SiteSegment>>leftNode, site, at);
        break;
    }
  }

  splitSite(siteNode: Node<SiteSegment>, site: Vec, at: number) {
    const siteSegment = siteNode.value;
    const oldSite = siteSegment.site;
    const y = this.siteY(oldSite, site, at);
    const edge: Edge = { sites: [oldSite, site], points: [v(site.x, y), v(site.x, y)] };
    this.edges.push(edge);
    // split
    const newSegment: SiteSegment = {
      type: Seg.SITE,
      site,
      left: v(site.x, at),
      right: v(site.x, at),
      prev: siteNode,
    };

    const rightSegment: SiteSegment = {
      type: Seg.SITE,
      site: oldSite,
      left: newSegment.right,
      right: siteSegment.right,
      next: siteSegment.next,
    };

    siteSegment.right = newSegment.left;
    rightSegment.right.y = at; // TODO: remove?

    const newNode = this.beach.insert(newSegment);
    const rightNode = this.beach.insert(rightSegment);
    siteSegment.next = rightSegment.prev = newNode;
    newSegment.next = rightNode;

    // TODO: circle event
  }

  splitBase(baseNode: Node<BaseSegment>, site: Vec, at: number) {
    const baseSegment = baseNode.value;
    this.events.remove(baseSegment.event);

    const siteSegment: SiteSegment = {
      type: Seg.SITE,
      site,
      left: v(site.x, at),
      right: v(site.x, at),
      prev: baseNode,
    };

    const rightSegment: BaseSegment = {
      type: Seg.BASE,
      left: siteSegment.right,
      right: baseSegment.right,
      next: baseSegment.next,
    };

    baseSegment.right = siteSegment.left;
    rightSegment.right.y = at; // TODO: remove?

    const siteNode = this.beach.insert(siteSegment);
    const rightNode = <Node<BaseSegment>>this.beach.insert(rightSegment);
    baseSegment.next = rightSegment.prev = siteNode;
    siteSegment.next = rightNode;

    // add base removal events
    this.addBaseEvent(baseNode);
    this.addBaseEvent(rightNode);
  }

  baseEvent(event: BaseEvent) {
    const node = <Node<BaseSegment>>event.node;
    console.log(`BASE at ${event.at}: [ ${node.value.left.x} ${node.value.right.x} ]`);
    this.beach.remove(node);

    const leftNode = node.value.prev;
    const rightNode = node.value.next;

    if (leftNode) {
      leftNode.value.next = rightNode;
      if (rightNode) {
        rightNode.value.prev = leftNode;
        rightNode.value.left = leftNode.value.right;
      }
      this.recalcRight(leftNode, event.at);
    } else if (rightNode) {
      rightNode.value.prev = undefined;
      this.recalcLeft(rightNode, event.at);
    }

    if (leftNode && rightNode) {
      // TODO: edge
    }
  }

  addBaseEvent(node: Node<BaseSegment>) {
    const segment = node.value;
    if (segment.prev && segment.next) {
      const leftSite = (<SiteSegment>segment.prev.value).site;
      const rightSite = (<SiteSegment>segment.next.value).site;
      const x0 = leftSite.x;
      const y0 = leftSite.y - this.minY;
      const x1 = rightSite.x;
      const y1 = rightSite.y - this.minY;
      const dx = x1 - x0;

      const d = (dx * dx + y1 * y1 - y0 * y0) / (2 * dx);
      const at = this.minY + Math.sqrt(d * d + y0 * y0);
      const event: BaseEvent = { type: Evt.BASE, at, node };
      segment.event = <Node<BaseEvent>>this.events.push(event);
      return;
    }
    if (segment.prev) {
      const site = (<SiteSegment>segment.prev.value).site;
      const x = segment.right.x - site.x;
      const y = site.y - this.minY;
      const at = this.minY + Math.sqrt(x * x + y * y);
      const event: BaseEvent = { type: Evt.BASE, at, node };
      segment.event = <Node<BaseEvent>>this.events.push(event);
      return;
    }
    if (segment.next) {
      const site = (<SiteSegment>segment.next.value).site;
      const x = site.x - segment.left.x;
      const y = site.y - this.minY;
      const at = this.minY + Math.sqrt(x * x + y * y);
      const event: BaseEvent = { type: Evt.BASE, at, node };
      segment.event = <Node<BaseEvent>>this.events.push(event);
      return;
    }
  }

  print(beach: Beach) {
    const text: string[] = [];
    traverseInorder(beach.root, (node) => {
      const segment = node.value;
      text.push(`${segType(segment.type)} ${segment.left.x} ${segment.right.x}`);
    });
    console.log(text.join(' | '));
  }
}

export const testDiagram = new Diagram([
  //
  v(-4, -7),
  v(4, -7),
  v(-6, -5),
]);
