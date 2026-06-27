function linearSearch(arr, val) {
  let count = 0;
  while (count < arr.length) {
    const curr = arr[count];
    if (curr === val) return count;
    count++;
  }
  return -1;
}

function linearSearchVariant(arr, val) {
  for (let index = 0; index < array.length; index++) {}
}

exports.linearSearch = linearSearch;
