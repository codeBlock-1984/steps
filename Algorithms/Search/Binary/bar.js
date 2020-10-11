function baz() {
  const foo = [10, 14, 19, 26, 27, 31, 33, 35, 42, 44];
  const item = 10;
  let low = 0;
  let high = foo.length - 1;
  let found = null;

  while (low !== high) {
    const mid = getMid(low, high);
    console.log(mid, low, high);
    const midItem = foo[mid];
    if (midItem === item) {
      found = mid;
      break;
    }
    if (midItem > item) {
      high = mid - 1;
    }
    if (midItem < item) {
      low = mid + 1;
    }

    function getMid(low, high) {
      const mid = Math.round(low + ((high - low)/2));
      return mid;
    }
  }

  if (low === high && foo[low] === item) {
    found = low;
  }

  return found;
}

console.log(baz());