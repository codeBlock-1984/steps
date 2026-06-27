function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    let j = i - 1;
    for (; j > -1 && num < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = num;
  }
  return arr;
}

function insertionSortVariant1(arr) {
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    for (let j = i - 1; j > -1; j--) {
      if (num < arr[j]) {
        arr[j + 1] = arr[j];
        if (j === 0) arr[j] = num;
      } else {
        arr[j + 1] = num;
        break;
      }
    }
  }
  return arr;
}

function insertionSortVariant(arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i;
    for (let j = i - 1; j > -1; j--) {
      if (arr[index] < arr[j]) {
        const temp = arr[index];
        arr[index] = arr[j];
        arr[j] = temp;
        index = j;
      }
    }
  }
  return arr;
}

exports.insertionSort = insertionSort;
