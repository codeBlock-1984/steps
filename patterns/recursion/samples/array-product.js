function arrayProduct(arr) {
  if (!arr.length) return 1;

  return arr[0] * arrayProduct(arr.slice(1));
}

module.exports = arrayProduct;
