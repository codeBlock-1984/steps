class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  printTree(node = this.root, prefix = '', isLeft = true) {
    if (node === null) return;

    // Print the right child first
    if (node.right) {
      this.printTree(
        node.right,
        prefix + (isLeft ? '│   ' : '    '),
        false
      );
    }

    // Print the current node
    console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.value);

    // Print the left child
    if (node.left) {
      this.printTree(
        node.left,
        prefix + (isLeft ? '    ' : '│   '),
        true
      );
    }
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let curr = this.root;

      while (curr) {
        if (curr.value === val) {
          break;
        } else if (curr.value > val) {
          if (!curr.left) {
            curr.left = newNode;
            break;
          }
          curr = curr.left;
        } else if (curr.value < val) {
          if (!curr.right) {
            curr.right = newNode;
            break;
          }
          curr = curr.right;
        }
      }
    }
    return this;
  }

  dfsSearch(val) {
    if (!this.root) {
      return false;
    }
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const curr = queue.pop();
      if (curr.value === val) return true;
      else {
        if (curr.right) queue.push(curr.right);
        if (curr.left) queue.push(curr.left);
      }
    }

    return false;
  }

  dfsIterative() {
    if (!this.root) {
      return null;
    }
    const result = [];
    const stack = [];
    stack.push(this.root);

    while (stack.length) {
      const curr = stack.pop();
      result.push(curr.value);

      if (curr.right) stack.push(curr.right);
      if (curr.left) stack.push(curr.left);
    }

    return result;
  }

  dfsRecursivePreOrder(node = this.root, result = []) {
    if (!node) return;

    result.push(node.value);
    this.dfsRecursivePreOrder(node.left, result);
    this.dfsRecursivePreOrder(node.right, result);

    return result;
  }

  dfsRecursiveInOrder(node = this.root, result = []) {
    if (!node) return;

    this.dfsRecursiveInOrder(node.left, result);
    result.push(node.value);
    this.dfsRecursiveInOrder(node.right, result);

    return result;
  }

  dfsRecursivePostOrder(node = this.root, result = []) {
    if (!node) return;

    this.dfsRecursivePostOrder(node.left, result);
    this.dfsRecursivePostOrder(node.right, result);
    result.push(node.value);

    return result;
  }

  bfs() {
    if (!this.root) return null;
    const result = [];
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const curr = queue.shift();
      result.push(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    return result;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

// console.log(JSON.stringify(tree.insert(7), null, 2));
tree.printTree();
// console.log(tree.dfs(8));
console.log(tree.dfsIterative());
console.log(tree.dfsRecursiveInOrder());
console.log(tree.dfsRecursivePreOrder());
console.log(tree.dfsRecursivePostOrder());
// console.log(tree.bfs());
