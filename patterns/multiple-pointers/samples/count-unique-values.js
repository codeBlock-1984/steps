/*
  Implement a function called countUniqueValues
  which accepts a sorted array and counts the 
  unique values in the array.

  There can be negative values in the array
  but it will always be sorted.

  E.g:
  countUniqueValues([1,1,1,1,1,2]) // 2
  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
  countUniqueValues([]) // 0
  countUniqueValues([-2,-1,-1,0,1]) // 4
*/

const countUniqueValues = (arr) => {
  if (!arr.length) return 0;

  let count = 1;
  let ref = 0;
  let scout = 0;
  while (scout < arr.length) {
    if (arr[ref] !== arr[scout]) {
      ref = scout;
      count++;
    }
    scout++;
  }

  return count;
};

module.exports = countUniqueValues;
