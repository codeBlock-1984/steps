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

const maxSubArraySum = (arr, n) => {
  if (!arr.length) return null;

  let maxSubArraySum = 0;

  for (let i = 0; i < n; i++) {
    maxSubArraySum += arr[i];
  }

  let tempSum = maxSubArraySum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSubArraySum = Math.max(maxSubArraySum, tempSum);
  }
  return maxSubArraySum;
};

const maxSubArraySumVariant = (arr, n) => {
  if (!arr.length) return null;

  let maxSubArraySum = -Infinity;
  let subArraySum = 0;
  let head;

  for (let i = 0; i < arr.length; i++) {
    if (head === undefined) {
      subArraySum += arr[i];
    } else {
      subArraySum -= arr[head];
      subArraySum += arr[i];
      head++;
    }

    if (i === n - 1) {
      head = 0;
    }

    if (subArraySum > maxSubArraySum) {
      maxSubArraySum = subArraySum;
    }
  }

  return maxSubArraySum;
};

module.exports = maxSubArraySum;
