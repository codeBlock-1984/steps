/*
  Write a function called findLongestSubstring,
  which accepts a string and returns the length
  of the longest substring with all distinct characters.

  E.g:
  findLongestSubstring('') // 0
  findLongestSubstring('rithmschool') // 7
  findLongestSubstring('thisisawesome') // 6
  findLongestSubstring('thecatinthehat') // 7
  findLongestSubstring('bbbbbb') // 1
  findLongestSubstring('longestsubstring') // 8
  findLongestSubstring('thisishowwedoit') // 6

  Constraints:
  Time Complexity - O(n)
*/

const longestSubString = (str) => {
  if (!str.length) return 0;

  let lookup = {};
  let maxLen = -Infinity;
  let head = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const seenIndex =
      typeof lookup[char] === 'number' ? lookup[char] : -1;
    const isSeenBefore = seenIndex >= head;

    if (isSeenBefore || i === str.length - 1) {
      const len = i - head + (isSeenBefore ? 0 : 1);
      maxLen = Math.max(len, maxLen);
      head = seenIndex + 1;
    }
    lookup[char] = i;
  }

  return maxLen;
};

module.exports = longestSubString;
