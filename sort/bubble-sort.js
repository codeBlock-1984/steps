function bubbleSort(arr) {
  for (let i = arr.length - 1; i > -1; i--) {
    for (let j = 0; j < i; j++) {
      const a = arr[j];
      const b = arr[j + 1];

      if (a > b) {
        arr[j] = b;
        arr[j + 1] = a;
      }
    }
  }
  return arr;
}

function bubbleSortOptimized(arr) {
  for (let i = arr.length - 1; i > -1; i--) {
    let didSwap = false;
    for (let j = 0; j < i; j++) {
      const a = arr[j];
      const b = arr[j + 1];

      if (a > b) {
        arr[j] = b;
        arr[j + 1] = a;
        didSwap = true;
      }
    }
    if (!didSwap) break;
  }
  return arr;
}

const input = Array.from({ length: 1000_00 }).map((_, i) =>
  i === 0 ? 1000_00 : i
);

// console.log(input.slice(0, 10), input[input.length - 1]);

console.time('bubbleSort');
bubbleSort(input);
console.timeEnd('bubbleSort');

console.time('bubbleSortOptimized');
bubbleSortOptimized(input);
console.timeEnd('bubbleSortOptimized');

exports.bubbleSort = bubbleSort;
exports.bubbleSortOptimized = bubbleSortOptimized;
