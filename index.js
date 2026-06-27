// function collectStrings(obj) {
//   const result = [];

//   for (const key in obj) {
//     const value = obj[key];

//     if (typeof value === 'string') {
//       result.push(value);
//     }
//     if (typeof value === 'object') {
//       const res = collectStrings(value);
//       result.push(...res);
//     }
//   }

//   return result;
// }

// collectStrings({
//   stuff: 'foo',
//   data: {
//     val: 'bar',
//   },
// });

function func(str, memo = {}) {
  if (memo[str]) return memo[str];

  const left = str.includes('BB')
    ? func(str.replace('BB', ''), memo)
    : str.length;

  const right = str.includes('AB')
    ? func(str.replace('AB', ''), memo)
    : str.length;

  const result = left < right ? left : right;
  memo[str] = result;

  return result;
}

function func(unsorted) {
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = 0; i < unsorted.length - 1; i = i + 2) {
    let largest = i;
    let smallest = i + 1;

    for (let j = i; j < unsorted.length; j++) {
      const element = unsorted[j];
      if (element < unsorted[smallest]) {
        smallest = j;
      }
      if (element > unsorted[largest]) {
        largest = j;
      }
    }

    swap(unsorted, i, largest);
    swap(unsorted, i + 1, smallest);
  }

  return unsorted;
}

// console.log(func('BABBA'));
console.log(func([-1, 1, 2, 3, -5]));
// 3, -5,2, -1, 1
