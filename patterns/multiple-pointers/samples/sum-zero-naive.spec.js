const sumZeroNaive = require('./sum-zero-naive');

describe('sumZeroNaive', () => {
  it.each([
    {
      input: [-3, -2, -1, 0, 1, 2, 3],
      expectedResult: [-3, 3],
    },
    {
      input: [-2, 0, 1, 3],
      expectedResult: undefined,
    },
    {
      input: [1, 2, 3],
      expectedResult: undefined,
    },
    {
      input: [-4, -3, -2, -1, 0, 1, 2, 3, 10],
      expectedResult: [-3, 3],
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(sumZeroNaive(input)).toStrictEqual(expectedResult);
  });
});
