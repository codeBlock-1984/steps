/*
  Given two strings, write a function to determine
  if the second string is an anagram of the first.

  An anagram is a word, phrase, or name formed by
  rearranging the letters of another, such as cinema,
  formed from iceman.

  Eg:

  anagramVariant('', '') // true
  anagramVariant('aaz', 'zza') // false
  anagramVariant('anagram', 'nagaram') // true
  anagramVariant("rat","car") // false
  anagramVariant('awesome', 'awesom') // false
  anagramVariant('amanaplanacanalpanama', 'acanalmanplanpamana') // false
  anagramVariant('qwerty', 'qeywrt') // true
  anagramVariant('texttwisttime', 'timetwisttext') // true
*/

const anagramVariant = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const frequencyCounter = {};

  for (const char of str1) {
    const val = frequencyCounter[char] || 0;
    frequencyCounter[char] = val + 1;
  }

  for (const char of str2) {
    const freq = frequencyCounter[char];

    if (!freq) return false;

    --frequencyCounter[char];
  }

  return true;
};

module.exports = anagramVariant;
