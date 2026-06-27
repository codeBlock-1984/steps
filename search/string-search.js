function naiveStringSearch(str, pattern) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

function stringSearch(str, pattern) {
  let start = 0;
  let patternIndex = 0;
  let count = 0;

  while (start < str.length) {
    if (str[start] === pattern[patternIndex]) {
      if (patternIndex === pattern.length - 1) {
        patternIndex = 0;
        count++;
      } else {
        patternIndex++;
      }
    } else {
      patternIndex = 0;
    }
    start++;
  }

  return count;
}

exports.naiveStringSearch = naiveStringSearch;
exports.stringSearch = stringSearch;
