class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new StackNode(val);

    if (!this.last) {
      this.last = newNode;
    }

    if (!this.first) {
      this.first = newNode;
    } else {
      const first = this.first;
      this.first = newNode;
      this.first.next = first;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    const first = this.first;

    this.first = this.first.next ?? null;
    if (!this.first) this.last = null;

    this.size--;

    return first.value;
  }
}

const q = new Stack();
console.log(q.push('first'));
console.log(q.push('second'));
console.log(q.push('third'));

console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());

console.log(q.size);
