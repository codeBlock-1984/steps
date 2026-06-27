/*
  Write a function called maxSubArraySum
  which accepts an array of integers and
  a number n.
  
  The function should calculate the maximum
  sum of n consecutive elements in the array.

  E.g:
  maxSubArraySum([1,2,5,2,8,1,5], 2) // 10
  maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
  maxSubArraySum([4,2,1,6], 1) // 6
  maxSubArraySum([4,2,1,6,2], 4) // 13
  maxSubArraySum([], 4) // null
*/

const maxSubArraySumNaive = (arr, n) => {
  if (!arr.length) return null;

  let maxSubArraySum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let subArraySum = arr[i];
    for (let j = i + 1; j < i + n; j++) {
      subArraySum += arr[j] ?? 0;
    }
    if (subArraySum > maxSubArraySum) maxSubArraySum = subArraySum;
  }
  return maxSubArraySum;
};

const maxSubArraySumNaiveVariant = (arr, n) => {
  if (!arr.length) return null;

  let maxSubArraySum = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let subArraySum = 0;
    for (let j = 0; j < n; j++) {
      subArraySum += arr[i + j] ?? 0;
    }
    if (subArraySum > maxSubArraySum) maxSubArraySum = subArraySum;
  }
  return maxSubArraySum;
};

module.exports = maxSubArraySumNaiveVariant;
