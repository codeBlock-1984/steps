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
  args.sort((a, b) => {
    if (typeof a === 'string') return a.localeCompare(b);
    if (typeof a === 'number') return a - b;
  });
  let head = 0;

  for (let i = 1; i < args.length; i++) {
    if (args[head] !== args[i]) head = i;
    else return true;
  }

  return false;
};

const areThereDuplicatesVariant = (...args) => {
  return new Set(args).size !== args.length;
};

module.exports = areThereDuplicates;
