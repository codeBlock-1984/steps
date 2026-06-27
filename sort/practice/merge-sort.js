function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    }
    if (arr2[p2] <= arr1[p1]) {
      result.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    result.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    result.push(arr2[p2]);
    p2++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midIndex));
  const right = mergeSort(arr.slice(midIndex));

  return mergeSortedArrays(left, right);
}

console.log(mergeSort([4, 1, 3, 2, 5])); // [1,2,3,4,5]

exports.mergeSort = mergeSort;
exports.mergeSortedArrays = mergeSortedArrays;
