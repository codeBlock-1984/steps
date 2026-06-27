class HashTableNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this.hash(key);
    const node = new HashTableNode(key, value);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i].key === key) {
          this.keyMap[index][i] = node;
          return;
        }
      }
      this.keyMap[index].push(node);
    } else {
      this.keyMap[index] = [node];
    }
  }

  get(key) {
    const index = this.hash(key);

    if (!this.keyMap[index]) return null;

    const values = this.keyMap[index];
    if (values.length === 1) return values[0].value;
    else {
      for (let i = 0; i < values.length; i++) {
        if (values[i].key === key) return values[i].value;
      }
    }
  }

  keys() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      const values = this.keyMap[i];

      if (!values) continue;

      for (let j = 0; j < values.length; j++) {
        result.push(values[j].key);
      }
    }
    return result;
  }

  values(onlyUnique = false) {
    const result = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const values = this.keyMap[i];

      if (!values) continue;

      for (let j = 0; j < values.length; j++) {
        const value = values[j].value;
        const shouldAdd = onlyUnique ? !result.includes(value) : true;
        if (shouldAdd) {
          result.push(value);
        }
      }
    }
    return result;
  }

  printValues() {
    console.log(JSON.stringify(this.keyMap, null, 2));
  }
}

const ht = new HashTable(17);
ht.set('white', '#ffffff');
// ht.printValues();
ht.set('black', '#000000');
// ht.printValues();
ht.set('red', '#ff0000');
// ht.printValues();
ht.set('green', '#00ff00');
// ht.printValues();
ht.set('blue', '#0000ff');
ht.set('maroon', '#800000');
ht.set('yellow', '#ffff00');
ht.set('yellow2', '#ffff00');
ht.set('white', 'white');
// ht.printValues();
console.log(ht.get('white'));
console.log(ht.get('black'));
console.log(ht.get('red'));
console.log(ht.get('green'));
console.log(ht.get('blue'));
ht.printValues();
console.log(ht.keys());
console.log(ht.values());
console.log(ht.values(true));
