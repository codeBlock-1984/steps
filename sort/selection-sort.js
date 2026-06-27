function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) smallestIndex = j;
    }
    if (smallestIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[smallestIndex];
      arr[smallestIndex] = temp;
    }
  }
  return arr;
}

exports.selectionSort = selectionSort;
