function swap(i, j, arr) {
  // console.log(i, j, 'arg....');
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) swap(j, j + 1, arr);
    }
  }

  return arr;
}

console.log(bubbleSort([5, 3, 1, 4, 2]));
