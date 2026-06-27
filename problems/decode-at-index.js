function decodeAtIndex(str, k) {
  let result = '';
  let resultIndex = 0;

  for (const char of str) {
    const isNotNumber = isNaN(Number(char));

    if (isNotNumber) {
      resultIndex += 1;
      if (resultIndex === k) return char;
    } else {
      const count = Number(char);
      const tape = result;
      const newCount = count * resultIndex;

      // while ()

      result += tape.repeat(count - 1);
    }
  }
  return result.charAt(k - 1);
}

console.log(decodeAtIndex('leet2code3', 10));
