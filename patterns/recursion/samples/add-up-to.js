function addUpTo(n) {
  if (n === 1) return 1;

  return n + addUpTo(n - 1);
}

module.exports = addUpTo;
