/*
  Write a function called sameFrequency. Given two
  positive integers, find out if the two numbers 
  have the same frequency of digits.

  Your solution MUST have the following complexities:
  Time: O(N)

  sameFrequency(182,281) // true
  sameFrequency(34,14) // false
  sameFrequency(3589578, 5879385) // true
  sameFrequency(22,222) // false
*/

const sameFrequency = (num1, num2) => {
  const str1 = `${num1}`;
  const str2 = `${num2}`;

  if (str1.length !== str2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const char of str1) {
    const currentFreq = frequencyCounter1[char] ?? 0;
    frequencyCounter1[char] = currentFreq + 1;
  }

  for (const char of str2) {
    const currentFreq = frequencyCounter2[char] ?? 0;
    frequencyCounter2[char] = currentFreq + 1;
  }

  for (const key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key])
      return false;
  }

  return true;
};

module.exports = sameFrequency;
