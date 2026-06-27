function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = findPivot(arr, left);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

function findPivot(arr, start = 0) {
  let pivot = arr[start];
  let pivotIndex = start;

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      pivotIndex++; // Why does this work????
      swap(arr, i, pivotIndex);
      // pivotIndex++; // This works as expected
    }
  }

  swap(arr, start, pivotIndex);

  return pivotIndex;
}

function findPivot1(arr) {
  const pivot = arr[0];
  const lesser = [];
  const greater = [];
  let pivotIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) pivotIndex++;
  }

  arr[0] = arr[pivotIndex];
  arr[pivotIndex] = pivot;

  for (let i = pivotIndex + 1; i < arr.length; i++) {
    if (arr[i] < pivot) lesser.push(i);
  }

  for (let i = 0; i < pivotIndex; i++) {
    if (arr[i] > pivot) greater.push(i);
  }

  for (let i = 0; i < lesser.length; i++) {
    const temp = arr[lesser[i]];
    arr[lesser[i]] = arr[greater[i]];
    arr[greater[i]] = temp;
  }

  console.log(arr);

  return pivotIndex;
}

exports.quickSort = quickSort;
exports.findPivot = findPivot;
