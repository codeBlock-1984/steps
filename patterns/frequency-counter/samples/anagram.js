/*
  Given two strings, write a function to determine
  if the second string is an anagram of the first.

  An anagram is a word, phrase, or name formed by
  rearranging the letters of another, such as cinema,
  formed from iceman.

  Eg:

  anagram('', '') // true
  anagram('aaz', 'zza') // false
  anagram('anagram', 'nagaram') // true
  anagram("rat","car") // false) // false
  anagram('awesome', 'awesom') // false
  anagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
  anagram('qwerty', 'qeywrt') // true
  anagram('texttwisttime', 'timetwisttext') // true
*/

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const char of str1) {
    const val = frequencyCounter1[char] || 0;
    frequencyCounter1[char] = val + 1;
  }

  for (const char of str2) {
    const val = frequencyCounter2[char] || 0;
    frequencyCounter2[char] = val + 1;
  }

  for (const key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key])
      return false;
  }

  return true;
};

module.exports = anagram;
