const longestSubString = require('./longest-sub-string');

describe('longestSubString', () => {
  it.each([
    {
      input: '',
      expectedResult: 0,
    },
    {
      input: 'rithmschool',
      expectedResult: 7,
    },
    {
      input: 'thisisawesome',
      expectedResult: 6,
    },
    {
      input: 'thecatinthehat',
      expectedResult: 7,
    },
    {
      input: 'bbbbbb',
      expectedResult: 1,
    },
    {
      input: 'longestsubstring',
      expectedResult: 8,
    },
    {
      input: 'thisishowwedoit',
      expectedResult: 6,
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(longestSubString(input)).toStrictEqual(expectedResult);
  });
});
