const range = (start, stop, step) => Array.from({ length: ((stop - start) / step) + 1 }, (_, i) => start + (i * step));

const rangeLen = (length) => Array.from({ length }, (_, i) => ++i);

const foo = range(0, 5, 1);
const bar = range(1, 20, 1);
const baz = rangeLen(100);

const alphabetor = () => range('a'.charCodeAt(0), 'z'.charCodeAt(0), 1).map(i => String.fromCharCode(i));

// console.log(foo, bar, baz);
//console.log(baz);
// console.log(alphabetor());
// console.log(Array.from({ length: 10 }).map((i, j) => ++j))
const hey = new Array(10);
const ir = hey.map((i, j) => ++j);
// console.log(ir);
const it = ['a', 'b', 'c'].entries();

for (let [index, value] of it) {
  console.log(index, value);
}

// console.log([1, 3, 'e', 5, 8].every(i => typeof i === 'number'));
hey.fill('0');
console.log((new Array(4)).fill(3));
console.log(Array.from(hey.keys()), 'hey keys');
console.log(Array.from(hey.values()), 'hey values');
console.log(Array.from(it));

console.log(Array.prototype.pop.call(Array.from('start')));
console.log([1, 3, 'r'].some(i => typeof i === 'string'));

