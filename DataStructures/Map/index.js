const myMap = new Map();

function kirk() {}

console.log(myMap);
myMap.set(23, 'hey!');
console.log(myMap);
myMap.set(kirk, 'guntha');
console.log(myMap);
console.log(myMap.get(kirk));

for (let item of myMap.keys()) {
  console.log(item, 'item');
}

const obj = { name: 'Orly', age: 34 };
for (let item in obj.entries) {
  console.log(item[1], 'item>>>>>>');
}

console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());
