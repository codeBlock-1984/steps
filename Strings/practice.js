const str = ['foo', 'bar', 'baz', 'cam', 'zozo', 'lorem', 'dolor', 'frion?', 'tion!', 'mention?'];

const sorted = str.sort((a, b) => b.localeCompare(a));
const padded = sorted.map(i => i.padEnd(7, ' ')).map(i => i.padStart(10, ' '));
const shons = str.filter(i => i.endsWith('ion', --i.length));
const shims = str.filter(i => i.match(/\Bo\w+\B/));

// console.assert(padded === null);
// console.log(sorted, padded, shons, shims, '>>>>>>');

const bar = 'the big brown fox chased the small fox across the field until it ran to mama fox';
let indices = [];
let nextfind = 0;

while (nextfind !== -1 && nextfind < bar.length) {
  const res = bar.indexOf('fox', nextfind);
  console.log(res, 'res>>>>');
  if (res !== -1) indices.push(res);
  nextfind = res === -1 ? res : res + 1;
}

// console.log(indices);

function templater(str, arr) {
  const strArr = str.split('$');
  console.log(strArr);
  //if (strArr.length) 
  return String.raw({
    raw: strArr
  }, ...arr);
}

let baz = 'foo is $, bar is $, baz is $', arr = ['cool', 'funky', 'snazzy'];
const parsedStr = templater(baz, arr);
console.log(parsedStr, 'parsed>>');

