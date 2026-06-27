/*
  Write a function called stringifyNumbers 
  which takes in an object and finds all of 
  the values which are numbers and converts 
  them to strings. 
  
  Recursion would be a great way to solve this!
  
  The exercise intends for you to create a new 
  object with the numbers converted to strings, 
  and not modify the original. 
  
  Keep the original object unchanged.
*/

function stringifyNumbers(obj) {
  const result = {};

  for (const key in obj) {
    let value = obj[key];

    if (typeof value === 'number') {
      value = value.toString();
    }

    if (typeof value === 'object' && !Array.isArray(value)) {
      value = stringifyNumbers(value);
    }

    result[key] = value;
  }

  return result;
}

exports.stringifyNumbers = stringifyNumbers;
