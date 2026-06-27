/*
  Write a recursive function called flatten which accepts 
  an array of arrays and returns a new array with all 
  values flattened.
*/
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function flatten(arr) {
  const result = [];

  function helper(arr) {
    if (!arr.length) return;

    const first = arr[0];

    if (Array.isArray(first)) {
      helper(first);
    } else {
      result.push(first);
    }
    helper(arr.slice(1));
  }

  helper(arr);

  return result;
}

exports.flatten = flatten;
