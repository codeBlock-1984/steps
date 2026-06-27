class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);

    if (!this.first) {
      this.first = newNode;
    }

    if (!this.last) {
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    const first = this.first;
    this.first = this.first.next ?? null;

    if (!this.first) this.last = null;

    --this.size;

    return first.value;
  }
}

const q = new Queue();
console.log(q.enqueue('first'));
console.log(q.enqueue('second'));
console.log(q.enqueue('third'));

console.log(JSON.stringify(q));
console.log(q.dequeue());
// console.log(JSON.stringify(q));
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

console.log(q.size);
