// AVL tree
//
// source:
// https://en.wikipedia.org/wiki/AVL_tree
// https://en.wikipedia.org/wiki/Binary_search_tree#Deletion
//
// delete node explanation:
// http://www.cs.emory.edu/~cheung/Courses/253/Syllabus/Trees/AVL-delete.html

export type Node<T> = {
  parent?: Node<T>;
  left?: Node<T>;
  right?: Node<T>;
  balance: number; // left heavy = -1, right heavy = 1
  value: T;
};

export type Tree<T> = {
  less: (a: T, b: T) => boolean;
  root?: Node<T>;
};

export function insert<T>(tree: Tree<T>, value: T) {
  if (!tree.root) {
    tree.root = { parent: undefined, left: undefined, right: undefined, balance: 0, value };
    return tree.root;
  }

  let node = tree.root;
  while (true) {
    if (tree.less(value, node.value)) {
      // go left
      const left = node.left;
      if (left) {
        node = left;
        continue;
      } else {
        node.left = { parent: node, left: undefined, right: undefined, balance: 0, value };
        node = node.left;
        break;
      }
    } else if (tree.less(node.value, value)) {
      // go right
      const right = node.right;
      if (right) {
        node = right;
        continue;
      } else {
        node.right = { parent: node, left: undefined, right: undefined, balance: 0, value };
        node = node.right;
        break;
      }
    } else {
      // value already exists (TODO: add existing value flag?)
      return node;
    }
  }

  const inserted = node;

  // rebalance
  for (let parent = node.parent; parent; parent = node.parent) {
    const grand = parent.parent;
    let subtree: Node<T>;
    if (node === parent.right) {
      // right subtree increases
      if (parent.balance > 0) {
        if (node.balance < 0) {
          subtree = rotateRightLeft(parent, node);
        } else {
          subtree = rotateLeft(parent, node);
        }
      } else {
        if (parent.balance < 0) {
          parent.balance = 0;
          break;
        }
        parent.balance = 1;
        node = parent;
        continue;
      }
    } else {
      // left subtree increases
      if (parent.balance < 0) {
        if (node.balance > 0) {
          subtree = rotateLeftRight(parent, node);
        } else {
          subtree = rotateRight(parent, node);
        }
      } else {
        if (parent.balance > 0) {
          parent.balance = 0;
          break;
        }
        parent.balance = -1;
        node = parent;
        continue;
      }
    }

    subtree.parent = grand;
    if (grand) {
      if (parent === grand.left) {
        grand.left = subtree;
      } else {
        grand.right = subtree;
      }
    } else {
      tree.root = subtree;
    }

    break;
  }

  return inserted;
}

export function remove<T>(tree: Tree<T>, node?: Node<T>) {
  if (!node) return;

  if (!node.left) {
    rebalanceBeforeRemove(tree, node);
    shift(tree, node, node.right);
  } else if (!node.right) {
    rebalanceBeforeRemove(tree, node);
    shift(tree, node, node.left);
  } else {
    // remove successor, replace node value with successor value
    const next = successor(node)!;
    rebalanceBeforeRemove(tree, next);
    shift(tree, next, next.right);
    node.value = next.value;
  }
}

export function find<T>(tree: Tree<T>, value: T): Node<T> | undefined {
  let node = tree.root;
  while (node) {
    if (tree.less(value, node.value)) {
      node = node.left;
    } else if (tree.less(node.value, value)) {
      node = node.right;
    } else {
      return node;
    }
  }
  return undefined;
}

export function traverseInorder<T>(node: Node<T> | undefined, callback: (node: Node<T>) => void) {
  if (node) {
    traverseInorder(node.left, callback);
    callback(node);
    traverseInorder(node.right, callback);
  }
}

export function height<T>(node?: Node<T>): number {
  if (!node) return 0;
  if (node.balance < 0) {
    return 1 + height(node.left);
  } else {
    return 1 + height(node.right);
  }
}

export function printTree<T>(
  prefix: string,
  node: Node<T> | undefined,
  level: number,
  callback: (prefix: string, level: number, node: Node<T>) => void,
) {
  if (node) {
    callback(prefix, level, node);
    printTree('left', node.left, level + 1, callback);
    printTree('right', node.right, level + 1, callback);
  }
}

// node is right child
function rotateLeft<T>(parent: Node<T>, node: Node<T>) {
  const middle = node.left;

  parent.right = middle;
  if (middle) {
    middle.parent = parent;
  }

  node.left = parent;
  parent.parent = node;

  if (node.balance === 0) {
    parent.balance = 1;
    node.balance = -1;
  } else {
    parent.balance = 0;
    node.balance = 0;
  }

  return node;
}

// node is left child
function rotateRight<T>(parent: Node<T>, node: Node<T>) {
  const middle = node.right;

  parent.left = middle;
  if (middle) {
    middle.parent = parent;
  }

  node.right = parent;
  parent.parent = node;

  if (node.balance === 0) {
    parent.balance = -1;
    node.balance = 1;
  } else {
    parent.balance = 0;
    node.balance = 0;
  }

  return node;
}

// node is left child
function rotateLeftRight<T>(parent: Node<T>, node: Node<T>) {
  const middle = node.right!;
  const left = middle.left;
  const right = middle.right;

  node.right = left;
  if (left) {
    left.parent = node;
  }

  middle.left = node;
  node.parent = middle;

  parent.left = right;
  if (right) {
    right.parent = parent;
  }

  middle.right = parent;
  parent.parent = middle;

  if (middle.balance === 0) {
    parent.balance = 0;
    node.balance = 0;
  } else {
    if (middle.balance < 0) {
      parent.balance = 1;
      node.balance = 0;
    } else {
      parent.balance = 0;
      node.balance = -1;
    }
    middle.balance = 0;
  }

  return middle;
}

// node is right child
function rotateRightLeft<T>(parent: Node<T>, node: Node<T>) {
  const middle = node.left!;
  const left = middle.left;
  const right = middle.right;

  node.left = right;
  if (right) {
    right.parent = node;
  }

  middle.right = node;
  node.parent = middle;

  parent.right = left;
  if (left) {
    left.parent = parent;
  }

  middle.left = parent;
  parent.parent = middle;

  if (middle.balance === 0) {
    parent.balance = 0;
    node.balance = 0;
  } else {
    if (middle.balance > 0) {
      parent.balance = -1;
      node.balance = 0;
    } else {
      parent.balance = 0;
      node.balance = 1;
    }
    middle.balance = 0;
  }

  return middle;
}

function rebalanceBeforeRemove<T>(tree: Tree<T>, node: Node<T>) {
  let grand: Node<T> | undefined;

  for (let parent = node.parent; parent; parent = grand) {
    grand = parent.parent;
    let balance: number;

    if (node === parent.left) {
      // left subtree decreases
      if (parent.balance > 0) {
        const right = parent.right!;
        balance = right.balance;
        if (right.balance < 0) {
          node = rotateRightLeft(parent, right);
        } else {
          node = rotateLeft(parent, right);
        }
      } else {
        if (parent.balance === 0) {
          parent.balance = 1;
          break;
        }
        node = parent;
        node.balance = 0;
        continue;
      }
    } else {
      // right subtree decreases
      if (parent.balance < 0) {
        const left = parent.left!;
        balance = left.balance;
        if (left.balance > 0) {
          node = rotateLeftRight(parent, left);
        } else {
          node = rotateRight(parent, left);
        }
      } else {
        if (parent.balance === 0) {
          parent.balance = -1;
          break;
        }
        node = parent;
        node.balance = 0;
        continue;
      }
    }

    node.parent = grand;
    if (grand) {
      if (parent === grand.left) {
        grand.left = node;
      } else {
        grand.right = node;
      }
    } else {
      tree.root = node;
    }

    if (balance === 0) break;
  }
}

function shift<T>(tree: Tree<T>, remove: Node<T>, replace?: Node<T>) {
  if (!remove.parent) {
    tree.root = replace;
  } else if (remove === remove.parent.left) {
    remove.parent.left = replace;
  } else {
    remove.parent.right = replace;
  }
  if (replace) {
    replace.parent = remove.parent;
  }
}

function minimum<T>(node: Node<T>) {
  while (node.left) {
    node = node.left;
  }
  return node;
}

function maximum<T>(node: Node<T>) {
  while (node.right) {
    node = node.right;
  }
  return node;
}

function predecessor<T>(node: Node<T>) {
  if (node.left) {
    return maximum(node.left);
  }
  let next = node.parent;
  while (next && node === next.left) {
    node = next;
    next = next.parent;
  }
  return next;
}

function successor<T>(node: Node<T>) {
  if (node.right) {
    return minimum(node.right);
  }
  let next = node.parent;
  while (next && node === next.right) {
    node = next;
    next = next.parent;
  }
  return next;
}
