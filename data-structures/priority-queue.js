class PriorityQueueNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  get lastIndex() {
    return this.size - 1;
  }

  get size() {
    return this.values.length;
  }

  getNodeAt(index) {
    return this.values[index];
  }

  isIndexOutOfBounds(index) {
    return index >= this.values.length;
  }

  tryGetNodeAt(index) {
    if (this.isIndexOutOfBounds(index)) return null;
    return this.getNodeAt(index);
  }

  getLeftIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  swap(i, j, arr = this.values) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  bubbleUpRecursive(index = this.lastIndex) {
    if (index === 0) return;

    const parentIndex = this.getParentIndex(index);
    const parent = this.getNodeAt(parentIndex);
    const child = this.getNodeAt(index);

    if (parent.priority > child.priority) {
      this.swap(index, parentIndex);
      this.bubbleUpRecursive(parentIndex);
    }
  }

  formatChildToSwap(value, index) {
    return { value, index };
  }

  getGreaterChild(parentIndex) {
    const leftChildIndex = this.getLeftIndex(parentIndex);
    const rightChildIndex = this.getRightIndex(parentIndex);
    const left = this.tryGetNodeAt(leftChildIndex);
    const right = this.tryGetNodeAt(rightChildIndex);

    if (left && right) {
      return left.priority <= right.priority
        ? this.formatChildToSwap(left, leftChildIndex)
        : this.formatChildToSwap(right, rightChildIndex);
    } else if (left) {
      return this.formatChildToSwap(left, leftChildIndex);
    } else if (right) {
      return this.formatChildToSwap(right, rightChildIndex);
    } else {
      return null;
    }
  }

  bubbleDownRecursive(index = 0) {
    const childToSwap = this.getGreaterChild(index);
    if (!childToSwap) return;
    const parent = this.getNodeAt(index);

    if (childToSwap.value.priority < parent.priority) {
      this.swap(index, childToSwap.index);
      this.bubbleDownRecursive(childToSwap.index);
    }
  }

  enqueue(value, priority) {
    const node = new PriorityQueueNode(value, priority);
    this.values.push(node);
    this.bubbleUpRecursive();
    return this.values;
  }

  dequeue() {
    if (this.size === 1) return this.values.pop();

    this.swap(0, this.lastIndex);
    const root = this.values.pop();
    this.bubbleDownRecursive();

    return root;
  }

  printValues() {
    console.log(JSON.stringify(this.values, null, 2));
  }
}

const er = new PriorityQueue(); // emergency room

console.log(er.enqueue('common cold', 5));
console.log(er.enqueue('gunshot wound', 1));
console.log(er.enqueue('high fever', 4));
console.log(er.enqueue('broken arm', 2));
console.log(er.enqueue('glass in foot', 3));
console.log(er.dequeue());
er.printValues();
console.log(er.dequeue());
er.printValues();
console.log(er.dequeue());
er.printValues();
console.log(er.dequeue());
er.printValues();
console.log(er.dequeue());
er.printValues();
