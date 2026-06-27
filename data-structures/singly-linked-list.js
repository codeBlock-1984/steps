'use strict';

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  getTail(node) {
    if (!node.next) return node;
    return this.getTail(node.next);
  }

  pop() {
    if (!this.tail) return undefined;

    let current = this.head;
    let newTail = null;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    if (newTail) {
      newTail.next = null;
    } else {
      this.head = null;
    }
    this.length--;

    this.tail = newTail;

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    let newHead = current.next ?? null;
    this.head = newHead;
    if (!this.head) {
      this.tail = null;
      this.length = 0;
    } else {
      this.length--;
    }
    current.next = null;
    return current;
  }

  unshift(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    if (!this.tail) this.tail = newNode;

    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (this.length - 1 < index || index < 0) return undefined;

    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }

    // current.next = null;
    return current;
  }

  set(value, index) {
    const current = this.get(index);
    if (!current) return false;
    current.value = value;
    return true;
  }
}

const n1 = 5;
const ls = new SinglyLinkedList();

const n2 = 50;
const n3 = 4;
ls.push(n1);
ls.push(n2);
ls.push(n3);
console.group(JSON.stringify(ls));
console.log(ls.shift());
console.group(JSON.stringify(ls));
console.log(ls.shift());
console.group(JSON.stringify(ls));
console.log(ls.shift());
console.log(ls.shift());
ls.unshift(n1);
ls.unshift(n2);
console.group(JSON.stringify(ls.unshift(n3)));
console.log(JSON.stringify(ls.get(0)));
console.log(JSON.stringify(ls.get(1)));
console.log(JSON.stringify(ls.get(2)));
console.log(JSON.stringify(ls.get(5)));
console.log(JSON.stringify(ls.set(400, 2)));
console.log(JSON.stringify(ls));
