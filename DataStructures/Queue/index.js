class Queue {
  constructor() {
    this.items = [[]];
    this.size = 1;
  }
  
  enqueue(item) {
    const lastItemArray = this.items[(this.items.length - 1)];
    if (lastItemArray.length < 5) {
      lastItemArray.push(item);
    } else {
      this.items.push([item]);
    }
    this.updateSize();
  }

  dequeue() {
    const firstItem = this.items[0];
    if (firstItem.length < 1) return null;
    else {
      if (firstItem.length === 1) {
        return this.items.shift()[0];
      } else {
        return firstItem.shift();
      }
    }
  }

  updateSize() {
    this.size = this.items.length;
  }
}

const myQ = new Queue();
myQ.enqueue(2);
myQ.enqueue(3);
myQ.enqueue(2);
myQ.enqueue(3);
myQ.enqueue(3);
myQ.enqueue(3);
myQ.enqueue(3);
myQ.enqueue(3);
myQ.enqueue(3);
myQ.enqueue(3);
myQ.enqueue(3);
console.log(myQ);
console.log(myQ.dequeue());
console.log(myQ);
console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log(myQ);
// myQ.enqueue(6);
// console.log(myQ);