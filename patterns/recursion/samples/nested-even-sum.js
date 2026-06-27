/*
  Write a recursive function called nestedEvenSum.
  Return the sum of all even numbers in an object
  which may contain nested objects.
*/

function nestedEvenSum(obj) {
  let result = 0;

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === 'number' && value % 2 === 0) {
      result += value;
    }

    if (typeof value === 'object') {
      result += nestedEvenSum(value);
    }
  }

  return result;
}

exports.nestedEvenSum = nestedEvenSum;
