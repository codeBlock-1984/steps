/*
  Given a sorted array of integers, write a function
  called search that accepts a value and returns the
  index where the value is located.

  If the value is not found return -1.
*/
const binarySearch = (arr, value) => {
  let right = 0;
  let left = arr.length - 1;

  while (right <= left) {
    const mid = Math.floor((right + left) / 2);
    const midValue = arr[mid];

    if (midValue === value) return mid;
    else if (midValue < value) {
      right = mid + 1;
    } else {
      left = mid - 1;
    }
  }
  return -1;
};

module.exports = binarySearch;
