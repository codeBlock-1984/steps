/*
  Given a sorted array of integers, write a function
  called search that accepts a value and returns the
  index where the value is located.

  If the value is not found return -1.
*/
const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

module.exports = linearSearch;
