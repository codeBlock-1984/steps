class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(item) {
    if (!item) return undefined;
    this.items.push(item);
    this.updateSize();
    return this.items;
  }

  pop() {
    this.updateSize();
    if (this.size) {
      this.size--;
      return this.items.pop();
    } else {
      return null;
    }
  }

  updateSize() {
    this.size = this.items.length;
  }

  peek() {
    this.updateSize();
    return this.items[this.size - 1] || null;
  }

  isEmpty() {
    this.updateSize();
    return this.size < 1;
  }

  print() {
    let result = '';
    this.updateSize();
    if (this.size < 1) return result;
    for (let i = 0; i < this.size; i++) {
      result += this.items[i];
    }
    return result;
  }
}


const myStack = new Stack();
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.isEmpty());
console.log(myStack.push(5));
// console.log(myStack.pop());
console.log(myStack.push(5));
console.log(myStack.peek());
console.log(myStack.isEmpty());
