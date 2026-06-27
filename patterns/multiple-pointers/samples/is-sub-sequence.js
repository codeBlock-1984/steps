/*
  Write a function called isSubsequence which takes in two strings
  and checks whether the characters in the first string form a
  subsequence of the characters in the second string.
  
  In other words, the function should check whether the characters
  in the first string appear somewhere in the second string,
  without their order changing.

  E.g:

  isSubsequence('hello', 'hello world'); // true
  isSubsequence('sing', 'sting'); // true
  isSubsequence('abc', 'abracadabra'); // true
  isSubsequence('abc', 'acb'); // false (order matters)

  Your solution MUST have AT LEAST the following complexities:
  - Time Complexity - O(N + M)
  - Space Complexity - O(1)
*/

const isSubSequence = (str1, str2) => {
  let target = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[target]) {
      target++;
    }

    if (target === str1.length) {
      return true;
    }
  }

  return false;
};

const isSubSequenceRecursive = (str1, str2) => {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  if (str1[0] === str2[0])
    return isSubSequenceRecursive(str1.slice(1), str2.slice(1));
  return isSubSequenceRecursive(str1, str2.slice(1));
};

module.exports = isSubSequence;
