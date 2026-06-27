const factorial = require('./factorial');

describe('factorial', () => {
  it.each([
    {
      input: 1,
      expectedResult: 1,
    },
    {
      input: 2,
      expectedResult: 2,
    },
    {
      input: 3,
      expectedResult: 6,
    },
    {
      input: 4,
      expectedResult: 24,
    },
    {
      input: 7,
      expectedResult: 5040,
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(factorial(input)).toStrictEqual(expectedResult);
  });
});
