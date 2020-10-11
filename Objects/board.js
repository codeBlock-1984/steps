'use strict';
const foo = { a: 'lorem', b: 'ipsum', c: 'dolor' };

const ents = Object.entries(foo);
const vals = Object.values(foo);
const keys = Object.keys(foo);

console.log(ents, vals, keys);

Object.freeze(foo);
const bar = { ...foo };
const baz = foo;
console.log(Object.is(foo, baz));
console.log(Object.is(foo, bar));
console.log(foo == bar);
console.log(foo === bar);
