class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  prepend(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  remove() {
    // const
  }

  printValues() {
    let curr = this.head;
    const values = [];
    while (curr) {
      values.push(curr.value);
      curr = curr.next;
    }
    return values;
  }

  // 1->2->3->4
  // currNext = null
  // curr = 1;
  // next = curr.next
  // temp = next.next (3->4)
  // next.next = 1 (2->1)
  // curr = 2
  // next = temp

  reverse() {
    if (!this.head.next) return;

    const oldTail = this.tail;
    const oldHead = this.head;

    let first = this.head;
    let second = first.next;
    first.next = null;

    while (second) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    this.head = oldTail;
    this.tail = oldHead;
  }

  reverse() {
    if (!this.head.next) return;

    const oldHead = this.head;
    const oldTail = this.tail;

    let first = this.head;
    let second = this.head.next;
    first.next = null;

    while (second) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }

    this.head = oldTail;
    this.tail = oldHead;
  }

  reverse() {
    if (!this.head.next) return;

    const oldHead = this.head;
    const oldTail = this.tail;

    let first = this.head;
    let second = first.next;
    first.next = null;

    while (second) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }

    this.head = oldTail;
    this.tail = oldHead;
  }
}

const ls = new SinglyLinkedList();
ls.append(3);
ls.append(4);
ls.append(5);
ls.prepend(2);
ls.prepend(1);
console.log(ls.printValues());
ls.reverse();
console.log(ls.printValues());
console.log(JSON.stringify(ls, null, 2));
