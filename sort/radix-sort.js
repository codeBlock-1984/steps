function radixSort(arr) {
  return arr;
}

function getDigit(num, place) {
  const numStr = num.toString();
  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr.length - i - 1 === place) return +numStr[i];
  }

  return 0;
}

function getDigitVariant(num, place) {
  return Math.floor(num / Math.pow(10, place)) % 10;
}

exports.radixSort = radixSort;
exports.getDigit = getDigitVariant;
