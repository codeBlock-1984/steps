/*
  Write a function sumZero which accepts
  a sorted array of integers.

  The function whould find the first pair
  where the sum is zero.

  Return an array that includes both values
  that sum to zero or undefined if a pair
  does not exist.

  E.g:
  sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
  sumZero([-2,0,1,3]) // undefined
  sumZero([1,2,3]) // undefined
*/

const sumZeroNaive = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

module.exports = sumZeroNaive;
