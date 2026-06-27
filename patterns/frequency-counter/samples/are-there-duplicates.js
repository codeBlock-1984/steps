/*
  Implement a function called, areThereDuplicates
  which accepts a variable number of arguments,
  and checks whether there are any duplicates
  among the arguments passed in.  You can solve
  this using the frequency counter pattern OR
  the multiple pointers pattern.

  E.g:
  areThereDuplicates(1, 2, 3) // false
  areThereDuplicates(1, 2, 2) // true 
  areThereDuplicates('a', 'b', 'c', 'a') // true 
*/

const areThereDuplicates = (...args) => {
  const frequencyCounter = {};

  for (const element of args) {
    if (frequencyCounter[element]) return true;
    frequencyCounter[element] = 1;
  }

  return false;
};

module.exports = areThereDuplicates;
