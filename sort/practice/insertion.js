function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[current]) {
        swap(current, j, arr);
        current = j;
      }
    }
  }
  return arr;
}

function insertionSortSimple(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    let lastIndex = null;
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      lastIndex = j;
    }

    if (typeof lastIndex === 'number') arr[lastIndex] = currentVal;
  }
  return arr;
}

console.log(insertionSortSimple([4, 3, 1, 5, 2]));
