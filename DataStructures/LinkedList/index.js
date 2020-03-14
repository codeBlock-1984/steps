class ListItem {
  constructor(element) {
    this.data = element;
    this.next = null;
    return this;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
  }

  add(element) {
    const newItem = new ListItem(element);
    if (this.last) {
      this.last.next = newItem;
    }
    this.last = newItem
    this.setHead(newItem);
    this.increaseSize();
    return newItem;
  }

  setHead(element) {
    this.head = this.head || element;
  }

  increaseSize() {
    this.size++;
  }

  decreaseSize() {
    this.size--;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `${current.data} `;
      current = current.next;
    }
    return result;
  }

  get(index) {
    let count = 0;
    let current = this.head;
    if (index > this.size - 1 || index < 0) return undefined;
    while (current) {
      if (count === index) {
        return current;
      } else {
        current = current.next;
        count++;
      }
    }
  }

  getIndex(element) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (current === element) {
        return count;
      } else {
        current = current.next;
        count++;
      }
    }
    return -1;
  }

  getSize() {
    return this.size;
  }

  prepend(element) {
    let result;
    if (this.head) {
      const newItem = new ListItem(element);
      let current = this.head;
      newItem.next = current;
      this.head = newItem;
      result = newItem;
    } else {
      result = this.add(element);
    }
    this.increaseSize();
    return result;
  }

  insertAt(element, index) {
    let current = this.head;
    let count = 0;
    if (index === 0) return this.prepend(element);
    while ((index > 0 && index < this.size) && current) {
      if (count === index - 1) {
        const newItem = new ListItem(element);
        const currentNext = current.next;
        current.next = newItem;
        newItem.next = currentNext;
        this.increaseSize();
        return newItem;
      } else {
        current = current.next;
        count++;
      }
    }
    return undefined;
  }

  update(element, index) {
    let current = this.head;
    let count = 0;
    while ((index >= 0 && index < this.size) && current) {
      if (count === index) {
        current.data = element;
        return current;
      } else {
        current = current.next;
        count++;
      }
    }
    return undefined;
  }

  delete(index) {
    let current = this.head;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
      this.decreaseSize();
      return current;
    }
    while ((index > 0 && index < this.size) && current) {
      if (count === index - 1) {
        const deletedItem = current.next;
        current.next = deletedItem.next;
        this.decreaseSize();
        return deletedItem;
      } else {
        current = current.next;
        count++;
      }
    }
    return undefined;
  }

}

const myList = new LinkedList();
const res = myList.add(2);
const resu = myList.add(5);
const reso = myList.add(7);
const prep = myList.prepend(9);
console.log(myList.print());
// console.log(myList.getIndex(resu));
// console.log(myList.insertAt(34, 2));
// console.log(myList.update(131, myList.getIndex(resu)));
console.log(myList.delete(0));
console.log(myList);