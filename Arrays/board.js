const first = 'A';
const last = 'z';
const firstCode = first.charCodeAt(0);
const lastCode = last.charCodeAt(0);
const alpahbetCodes = Array.from({ length: (lastCode - firstCode) + 1 }, (_, i) => firstCode + i);
const alpahbets = alpahbetCodes.map(i => String.fromCharCode(i));

const cp = alpahbets.slice();
const foo = [];
foo[10] = 'f';
foo.fill('e');
alpahbets.splice(26, 6);
console.log(alpahbets.every(i => typeof i === 'string'));
console.log(alpahbets.some(i => typeof i === 'number'));
const ents = Array.from(foo.entries());
const vals = Array.from(foo.values());
const keys = Array.from(foo.keys());
// const entObj = Object.fromEntries(ents);
const res = [];
for (let i of keys) {
  res.push(i);
}
const f = () => {};
const bar = { a: 'b' };
const baz = ['h', 'e', 'e', 'h', 'a', 'w'];
console.log(baz.copyWithin(0, 3, 5));
// console.log(ents, vals, keys);
console.log(entObj);
console.log(typeof f, typeof foo, typeof bar);
