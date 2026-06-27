/*
  Write a function called same which
  accepts two arrays.

  The function should return true if
  every value in the array has it's
  corresponding value squared in the
  second array.

  The frequency of values must be the same

  Examples:
  same([1,2,3], [4,1,9]) // true
  same([1,2,3], [1,9]) // false
  same([1,2,1], [4,4,1]) // false (must be the same frequency)
*/

const sameNaive = (array1, array2) => {
  for (const num of array1) {
    const numSquared = num ** 2;
    const numSquaredIndex = array2.indexOf(numSquared);

    if (numSquaredIndex === -1) return false;

    array2.splice(numSquaredIndex, 1);
  }

  return true;
};

module.exports = sameNaive;
