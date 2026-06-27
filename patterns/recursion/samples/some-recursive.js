/*
  Write a recursive function called someRecursive 
  which accepts an array and a callback. 
  
  The function returns true if a single value in 
  the array returns true when passed to the 
  callback. Otherwise it returns false.
*/

function someRecursive(arr, cb) {
  if (!arr.length) return false;

  const result = cb(arr[0]);

  if (result) return true;

  return someRecursive(arr.slice(1), cb);
}

module.exports = someRecursive;
