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

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
};

module.exports = sumZero;
