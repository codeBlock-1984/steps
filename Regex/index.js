let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

const fruitStr = fruits.join(' ');
let res = fruitStr.match(/\b[^A[a-z]*]\b/g);
res = fruitStr.match(/\bA[a-z]*\b/g);

let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];
let str = fruitsWithDescription.join(' ');
res = str.match(/\b[a-z]*\b(en|ed)\b/);







console.log(res);