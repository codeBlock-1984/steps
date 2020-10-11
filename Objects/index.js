// console.log('hello');
// console.log(getDistance(3, 4));

// function getDistance(x, y) {
//   console.log(x, y, 'coor')
//   const distance = Math.sqrt(Math.pow((Math.abs(x)), 2) + Math.pow((Math.abs(y)), 2));
//   console.log(distance, 'dis')
//   return distance;
// }

// function solution(S, X, Y) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const points = X.map((val, index) => {
//     const tag = S[index]
//     const dist = getDistance(val, Y[index])
//     console.log(tag, dist);
//     return {
//       tag,
//       dist
//     };
//   }).sort((a, b) => a.dist - b.dist);
//   console.log(points);
//   let tags = [];
//   let includedPoints = [];

//   for (let point of points) {
//     if (!tags.includes(point.tag)) {
//       tags.push(point.tag);
//       includedPoints.push(point);
//     } else {
//       if (includedPoints[includedPoints.length - 1].dist === point.dist) {
//         includedPoints.pop();
//         break;
//       } else {
//         break;
//       }
//     }
//   }
//   return includedPoints.length;
// }

// const S = "ABDCA";
// const X = [2, -1, -4, -3, 3];
// const Y = [2, -2, 4, 1, -3];

// solution(S, X, Y);
// console.log(solution(S, X, Y))


let s = 'ABCDDDEFGJJ'
// const re = /(.).*\1/g
const re = /([A-Z])\1+/g

const m = s.match(re);
const k = m.map(i => `${i.length}${i[0]}`)
let res = s;

for (const [i, j] of m.entries()) {
  console.log(i, j);
  res = res.replace(j, k[i])
}
console.log(res)
const str = `([A-Z]{${3}})|(\d{1}[A-Z]{${3}})`;
const newRe = new RegExp(str, 'g');  
const lee = res.match(newRe);
console.log(lee);

// function styleHyphenFormat(propertyName) {
//   function upperToHyphenLower(match, offset, string) {
//     console.log(match, offset)
//     return (offset > 0 ? '-' : '') + match.toLowerCase();
//   }
//   return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
// }

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    console.log(match, offset, 'match and offset')
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/([A-Z]){1}[^\1]{2}/g, upperToHyphenLower);
}

const formatted = styleHyphenFormat('AAAAHTGAAAAAAAAAA');
console.log(formatted);

// function brain(msg, ...args) {
//   console.log(arguments);
//   console.log(args);
//   console.log(msg);
//   const res = Array.from(arguments).sort((a, b) => a.localeCompare(b));
//   console.log(res);
// }

// brain('heool', 'hey', 'cochlea');

const baza = 'AAAAHTGAAAAAAAAAAiiiiiiiiiii\
eeeeeeeeeeee';

const foozo = baza.replace(/(\w)\1*/g, (m, o, s) => {
  return m.length > 1 ? `${m.length}${m[0]}` : m;
});

const reg = new RegExp(/([A-Z])\1+/, 'gim');
reg.lastIndex = 0;


console.log(reg[Symbol.match](baza), reg.test(baza));
console.log(baza.match(reg), 'str match');

console.log(foozo, 'foozo');

function Graph() {
  this.edges = [];
}

const g = new Graph();
console.log(g.__proto__.__proto__);
console.log(Object.getPrototypeOf(g));
String.prototype.replace = function () {
  console.log('hey new replace');
}

''.replace();

