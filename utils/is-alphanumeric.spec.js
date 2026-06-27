const isAlphanumeric = require('./is-alphanumeric');

describe('isAlphanumeric', () => {
  it.each([
    { input: 'a', expectedResult: true },
    { input: 'h', expectedResult: true },
    { input: 'z', expectedResult: true },
    { input: 'A', expectedResult: true },
    { input: 'K', expectedResult: true },
    { input: 'Z', expectedResult: true },
    { input: '1', expectedResult: true },
    { input: '0', expectedResult: true },
    { input: '9', expectedResult: true },
    { input: '$', expectedResult: false },
    { input: '%', expectedResult: false },
    { input: '!', expectedResult: false },
    { input: ')', expectedResult: false },
    { input: '+', expectedResult: false },
    { input: '=', expectedResult: false },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(isAlphanumeric.withCharCode(input)).toBe(expectedResult);
    expect(isAlphanumeric.withRegex(input)).toBe(expectedResult);
  });
});
