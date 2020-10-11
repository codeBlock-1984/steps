const obj = { foo: 'tea', bar: 'bread', baz: 'butter' };
const iter = Object.entries(obj);
let job = {};

for (let [index, value] of iter) {
  job[index] = value;
}
const stuntDouble = obj;

console.log(job);

// Object.fromEntries not supported. Check node version
// const crater = Object.fromEntries(iter);
// console.log(crater);
const isSameObj = Object.is(obj, stuntDouble);
const isSame = Object.is(obj, job);
console.log(isSameObj);
console.log(isSame);
console.log(Object.isExtensible(obj), Object.isFrozen(obj), Object.isSealed(job));
Object.freeze(obj);
console.log(Object.isFrozen(obj), 'is frozen');
Object.seal(job);
console.log(Object.isSealed(job), 'is sealed');
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj), 'is not extensible');

const myPro = {
  speak: (name='world') => {
    console.log(`Hello ${name}!`)
  }
}

const jay = Object.create(myPro);
jay.speak();
jay.speak('Nesha');
