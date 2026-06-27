function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midIndex));
  const right = mergeSort(arr.slice(midIndex));

  return mergeSortedArrays(left, right);
}

function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    const num1 = arr1[pointer1];
    const num2 = arr2[pointer2];
    if (num1 <= num2) {
      result.push(num1);
      pointer1++;
    }

    if (num2 <= num1) {
      result.push(num2);
      pointer2++;
    }
  }

  while (pointer1 < arr1.length) {
    result.push(arr1[pointer1]);
    pointer1++;
  }

  while (pointer2 < arr2.length) {
    result.push(arr2[pointer2]);
    pointer2++;
  }

  return result;
}

exports.mergeSort = mergeSort;
exports.mergeSortedArrays = mergeSortedArrays;
