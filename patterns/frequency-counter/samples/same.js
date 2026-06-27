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

const same = (array1, array2) => {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  if (array1.length !== array2.length) return false;

  for (const num of array1) {
    let numValue = frequencyCounter1[num] || 0;
    frequencyCounter1[num] = numValue + 1;
  }

  for (const num of array2) {
    let numValue = frequencyCounter2[num] || 0;
    frequencyCounter2[num] = numValue + 1;
  }

  for (const key in frequencyCounter1) {
    const numSquared = Number(key) ** 2;

    if (!(numSquared in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[key] !== frequencyCounter2[numSquared]) {
      return false;
    }
  }

  return true;
};

module.exports = same;
