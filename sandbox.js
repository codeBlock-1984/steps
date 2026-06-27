const longestSubString1 = (str) => {
  let start = 0;
  let end = 0;
  let longestSubStr = '';

  let currentStr = '';

  while (end < str.length) {
    const char = str[end];

    if (end === 0) {
      currentStr = char;
    } else {
      const isDuplicate = currentStr.includes(char);

      if (!isDuplicate) {
        currentStr += char;
      } else {
        start = end;

        if (currentStr.length > longestSubStr.length) {
          longestSubStr = currentStr;
        }

        currentStr = char;
      }
    }
    end++;
  }

  return longestSubStr;
};

const longestSubString = (str) => {
  let start = 0;
  let end = 0;
  let longestSubStr = '';

  while (end < str.length) {
    const char = str[end];
    const currentStr = str.slice(start, end);
    const isDuplicate = currentStr.includes(char);

    if (isDuplicate) {
      start = end;
      if (currentStr.length > longestSubStr.length) {
        longestSubStr = currentStr;
      }
    }
    end++;
  }

  return longestSubStr;
};

console.log(longestSubString('abcabcbb'));
console.log(longestSubString('bbbbb'));
console.log(longestSubString('pwwkew'));
