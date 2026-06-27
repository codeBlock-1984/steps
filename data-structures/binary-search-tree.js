class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  addRecursive(nodeToAdd, node) {
    if (nodeToAdd.value < node.value) {
      if (!node.left) {
        node.left = nodeToAdd;
        return;
      } else {
        return this.addRecursive(nodeToAdd, node.left);
      }
    } else if (nodeToAdd.value > node.value) {
      if (!node.right) {
        node.right = nodeToAdd;
        return;
      } else {
        return this.addRecursive(nodeToAdd, node.right);
      }
    }
  }

  addIterative(nodeToAdd, node) {
    let currentNode = node;

    while (currentNode) {
      if (nodeToAdd.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = nodeToAdd;
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else if (nodeToAdd.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = nodeToAdd;
          return;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        break;
      }
    }
  }

  insert(value) {
    const newNode = new BSTNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.addRecursive(newNode, this.root);
    }

    return this;
  }

  search(value, node) {
    if (!node) return null;
    if (value === node.value) return node;
    else if (value > node.value)
      return this.search(value, node.right);
    else return this.search(value, node.left);
  }

  find(value) {
    return this.search(value, this.root);
  }

  visit(node) {
    console.log(node?.value ?? null);
    if (node?.left) this.visit(node.left);
    if (node?.right) this.visit(node.right);
  }

  bfs() {
    const result = [];
    const queue = [this.root];

    while (queue.length) {
      const current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      result.push(current.value);
    }
    return result;
  }

  dfsPreOrder(node = this.root, result = []) {
    if (!node) return;

    result.push(node.value);
    this.dfsPreOrder(node.left, result);
    this.dfsPreOrder(node.right, result);

    return result;
  }

  dfsPostOrder(node = this.root, result = []) {
    if (!node) return;

    this.dfsPostOrder(node.left, result);
    this.dfsPostOrder(node.right, result);

    result.push(node.value);

    return result;
  }

  dfsInOrder(node = this.root, result = []) {
    if (!node) return;

    this.dfsInOrder(node.left, result);
    result.push(node.value);
    this.dfsInOrder(node.right, result);

    return result;
  }

  traverse() {
    // this.visit(this.root);
    // return this.bfs();
    return this.dfsPreOrder();
  }
}

const tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
console.log(JSON.stringify(tree.insert(20), null, 2));
// console.log(tree.find(50));
// console.log(tree.find(11));
// console.log(tree.find(101));
// console.log(tree.find(121));
console.log(tree.bfs()); // [ 10, 6, 15, 3, 8, 20 ]
console.log(tree.dfsPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.dfsPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.dfsInOrder()); // [ 3, 6, 8, 10, 15, 20 ]
