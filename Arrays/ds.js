function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.first = null;
  this.last = null;
  this.size = 0;
  

  this.add = function (data) {
    const newItem = new Node(data);
    if (this.size === 0) {
      this.first = newItem;
    } else {
      this.last.next = newItem;
    }
    this.last = newItem;
    newItem.next = this.first;
    this.size++;
  };

  this.display = function () {
    const items = [];
    let curr = this.first;
    let count = this.size;
    while (curr && count) {
      items.push(curr);
      curr = curr.next;
      count--;
    }
    return items;
  }
}

const foo = new LinkedList();
foo.add('lorem');
foo.add('ipsum');
foo.add('dolor');
console.log(foo.display(), '>>>>', foo.last, foo.size);
