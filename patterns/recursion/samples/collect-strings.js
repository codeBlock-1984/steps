/*
  Write a function called collectStrings
  which accepts an object and returns an 
  array of all the values in the object 
  that have a typeof string
*/
function collectStrings(obj) {
  const result = [];

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === 'string') {
      result.push(value);
    }
    if (typeof value === 'object') {
      const res = collectStrings(value);
      result.push(...res);
    }
  }

  return result;
}

exports.collectStrings = collectStrings;
