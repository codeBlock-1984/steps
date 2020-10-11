const foo = Array.from({ length: 100000000 }, (v, k) => k);
const index = 50000000;
console.time('insert: slice');
//const bar = [...foo.slice(0, index), 'd', ...foo.slice(index)];
console.timeEnd('insert: slice');

console.time('insert: loop');
const len = foo.length;
for (let i=len; i>index; i--) {
  foo[i] = foo[i - 1];
}
foo[index] = 'd';
console.timeEnd('insert: loop');

// console.log(bar);
// console.log(foo);
