function binarySearch(arr, item) {
  const len = arr.length;
  let upperIndex = len - 1;
  let lowerIndex = 0;
  let result = null;
  let midItem;
  let midIndex;

  while (lowerIndex !== upperIndex) {
    midIndex = getMidItem(lowerIndex, upperIndex);
    midItem = arr[midIndex];
    if (midItem === item) {
      result = midIndex;
      return result;
    } else if (midItem > item) {
      upperIndex = midIndex - 1;
    } else {
      lowerIndex = midIndex + 1;
    }
  }
  if (lowerIndex === upperIndex) {
    midIndex = getMidItem(lowerIndex, upperIndex);
    midItem = arr[midIndex];
  }

  function getMidItem(l, u) {
    const result = l + ((u - l) / 2);
    return Math.round(result);
  }

  result = midItem === item ? midIndex : result;
  return result;
}

const arr = [10, 14, 19, 26, 27, 31, 33, 35, 42, 44];
const item = 42;
const res = binarySearch(arr, item);
console.log(res);

