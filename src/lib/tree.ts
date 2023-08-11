export type Node<T> = {
  left?: Node<T>;
  right?: Node<T>;
  balance: number;
  value: T;
};

export type Tree<T> = {
  compare: (a: T, b: T) => boolean;
  root?: Node<T>;
};

export function insert<T>(tree: Tree<T>, value: T) {
  if (!tree.root) {
    tree.root = { left: undefined, right: undefined, balance: 0, value };
    return;
  }
}

export function traverse<T>(node: Node<T> | undefined, callback: (value: T) => void) {
  if (node) {
    traverse(node.left, callback);
    callback(node.value);
    traverse(node.right, callback);
  }
}

const less = (a: number, b: number) => a < b;

const test = () => {
  const tree: Tree<number> = { compare: less };
  insert(tree, 5);
};
