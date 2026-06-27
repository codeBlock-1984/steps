/*
  Write a recursive function called isPalindrome 
  which returns true if the string passed to it 
  is a palindrome (reads the same forward and 
  backward). Otherwise it returns false.
*/

function isPalindrome(str) {
  if (!str.length) return true;

  const head = str[0];
  const tail = str[str.length - 1];

  return head === tail && isPalindrome(str.slice(1, str.length - 1));
}

module.exports = isPalindrome;
