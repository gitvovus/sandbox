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

    this.print(this.beach);
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

  recalcLeft(node: Node<Segment>, at: number) {
    const value = node.value;
    const border = value.left;
    if (border.y === at) return;

    const prev = value.prev;
    if (!prev) {
      switch (value.type) {
        case Seg.BASE:
          // x doesnt change
          break;
        case Seg.SITE:
          const dx = this.siteDx(value.site, at);
          border.x = Math.max(this.minX, value.site.x - dx);
          break;
      }
    } else {
      switch (value.type) {
        case Seg.BASE:
          // prev must be site
          this.recalcRight(prev, at);
          return;
        case Seg.SITE:
          switch (prev.value.type) {
            case Seg.BASE:
              const dx = this.siteDx(value.site, at);
              border.x = Math.max(this.minX, value.site.x - dx);
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
      switch (value.type) {
        case Seg.BASE:
          break;
        case Seg.SITE:
          const dx = this.siteDx(value.site, at);
          border.x = Math.min(this.maxX, value.site.x + dx);
          break;
      }
    } else {
      switch (value.type) {
        case Seg.BASE:
          // next must be site
          this.recalcLeft(next, at);
          return;
        case Seg.SITE:
          switch (next.value.type) {
            case Seg.BASE:
              const dx = this.siteDx(value.site, at);
              border.x = Math.min(this.maxX, value.site.x + dx);
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

  siteEvent(event: SiteEvent) {
    console.log(`SITE at ${event.at}`);
    const at = event.at;
    const site = event.site;
    this.sites.push(site);
    const candidateNode = this.findSegment(site.x);
    if (!candidateNode) throw 'siteEvent: no candidate found';

    const candidateSegment = candidateNode.value;
    let hitNode = candidateNode;

    // hitNode = this.beach.root!;
    // recalc
    // while (true) {
    //   break;
    // }
    switch (candidateSegment.type) {
      case Seg.BASE:
        // Look if there are sites on both ends of the base.
        // If it is, we need to correct segment borders, because sweep line moved.
        // After these corrections candidate segment can change to left or right one.
        if (candidateSegment.prev) {
          const leftSiteNode = candidateSegment.prev;
          const leftSiteSegment = <SiteSegment>leftSiteNode.value;
          const leftSite = leftSiteSegment.site;
          // recalc
          const d = event.at - this.minY;
          const y = leftSite.y - this.minY;
          const x = leftSite.x + Math.sqrt(d * d - y * y);
          leftSiteSegment.right = candidateSegment.left = v(x, at);

          if (x >= site.x) {
            // we hit left site segment
            hitNode = leftSiteNode;
          }
        }
        // The same should be done for right side.
        if (candidateSegment.next) {
          const rightSiteNode = candidateSegment.next;
          const rightSiteSegment = <SiteSegment>rightSiteNode.value;
          const rightSite = rightSiteSegment.site;
          // recalc
          const d = event.at - this.minY;
          const y = rightSite.y - this.minY;
          const x = rightSite.x - Math.sqrt(d * d - y * y);
          rightSiteSegment.left = candidateSegment.right = v(x, at);

          if (x <= site.x) {
            hitNode = rightSiteNode;
          }
        }
        break;

      case Seg.SITE:
        // TODO
        break;
    }

    // now we have correct hit node
    const hitSegment = hitNode.value;
    switch (hitSegment.type) {
      case Seg.BASE:
        // remove base event that was previously associated with base
        this.events.remove(hitSegment.event);
        const segment: SiteSegment = {
          type: Seg.SITE,
          site,
          left: v(site.x, at),
          right: v(site.x, at),
          prev: hitNode,
        };

        // split base
        const rightSegment: BaseSegment = {
          type: Seg.BASE,
          left: segment.right,
          right: hitSegment.right,
          next: hitSegment.next,
        };
        hitSegment.right = segment.left;
        rightSegment.right.y = at;

        const node = this.beach.insert(segment);
        const rightNode = this.beach.insert(rightSegment);
        segment.next = rightNode;
        hitSegment.next = node;
        rightSegment.prev = node;

        // add base removal events
        this.addBaseEvent(<Node<BaseSegment>>hitNode);
        this.addBaseEvent(<Node<BaseSegment>>rightNode);

        break;
      case Seg.SITE:
        // TODO
        break;
    }
  }

  baseEvent(event: BaseEvent) {
    console.log(`BASE at ${event.at}, x: ${event.node.value.left.x}`);
    const node = <Node<BaseSegment>>event.node;
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

  findSegment(x: number) {
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
      return node;
    }
    return undefined;
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
]);
