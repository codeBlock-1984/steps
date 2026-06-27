class MaxBinaryHeap {
  constructor() {
    this.values = [];
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

  swap(i, j, arr) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  bubbleUpRecursion(index = this.values.length - 1) {
    if (index === 0) return;

    const parentIndex = this.getParentIndex(index);
    const parent = this.values[parentIndex];
    const child = this.values[index];
    if (parent < child) {
      this.swap(index, parentIndex, this.values);
      this.bubbleUpRecursion(parentIndex);
    } else {
      return;
    }
  }

  bubbleUpIterative() {
    let index = this.values.length - 1;
    if (index === 0) return;

    while (index) {
      const parentIndex = this.getParentIndex(index);
      const parent = this.values[parentIndex];
      const child = this.values[index];

      if (parent < child) {
        this.swap(index, parentIndex, this.values);
        index = parentIndex;
      } else {
        return;
      }
    }
  }

  insert(val) {
    this.values.push(val);
    // this.bubbleUpRecursion();
    this.bubbleUpIterative();
    return this.values;
  }

  isIndexOutOfBounds(index) {
    return index >= this.values.length;
  }

  tryGetElement(index) {
    if (this.isIndexOutOfBounds(index)) return null;
    return this.values[index];
  }

  formatChildToSwap(value, index) {
    return { value, index };
  }

  getGreaterChild(parentIndex) {
    const leftChildIndex = this.getLeftIndex(parentIndex);
    const rightChildIndex = this.getRightIndex(parentIndex);
    const left = this.tryGetElement(leftChildIndex);
    const right = this.tryGetElement(rightChildIndex);

    if (left && right) {
      return left >= right
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
    const parent = this.values[index];

    if (childToSwap.value > parent) {
      this.swap(index, childToSwap.index, this.values);
      this.bubbleDownRecursive(childToSwap.index);
    }
  }

  bubbleDownIterative() {
    let index = 0;

    while (true) {
      const childToSwap = this.getGreaterChild(index);
      if (!childToSwap) return;
      const parent = this.values[index];

      if (childToSwap.value > parent) {
        this.swap(index, childToSwap.index, this.values);
        index = childToSwap.index;
      } else {
        return;
      }
    }
  }

  extractMax() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();

    const lastIndex = this.values.length - 1;
    this.swap(0, lastIndex, this.values);
    const root = this.values.pop();
    this.bubbleDownRecursive();
    this.bubbleDownIterative();

    return root;
  }
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(41));

// console.log(heap.extractMax());
// console.log(heap.values);

console.log(heap.insert(39));
console.log(heap.insert(33));
console.log(heap.insert(18));
console.log(heap.insert(27));
console.log(heap.insert(12));
console.log(heap.insert(55));
console.log(heap.extractMax());
console.log(heap.values); // [41, 39, 33, 18, 27, 12]
console.log(heap.extractMax());
console.log(heap.values); // [39, 27, 33, 18, 12]
