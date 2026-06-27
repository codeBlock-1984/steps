function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  do {
    const midIndex = Math.floor((left + right) / 2);
    const midElement = arr[midIndex];

    if (midElement === val) return midIndex;
    if (midElement < val) left = midIndex + 1;
    if (midElement > val) right = midIndex - 1;
  } while (left <= right);

  return -1;
}

// function linearSearchVariant(arr, val) {
//   for (let index = 0; index < array.length; index++) {}
// }

exports.binarySearch = binarySearch;
