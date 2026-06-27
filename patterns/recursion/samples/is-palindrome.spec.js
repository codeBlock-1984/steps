const isPalindrome = require('./is-palindrome');

describe('isPalindrome', () => {
  it.each([
    {
      input: 'awesome',
      expectedResult: false,
    },
    {
      input: 'foobar',
      expectedResult: false,
    },
    {
      input: 'tacocat',
      expectedResult: true,
    },
    {
      input: 'amanaplanacanalpanama',
      expectedResult: true,
    },
    {
      input: 'amanaplanacanalpandemonium',
      expectedResult: false,
    },
    {
      input: 'racecar',
      expectedResult: true,
    },
    {
      input: 'mom',
      expectedResult: true,
    },
    {
      input: 'dad',
      expectedResult: true,
    },
    {
      input: 'i',
      expectedResult: true,
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(isPalindrome(input)).toStrictEqual(expectedResult);
  });
});
