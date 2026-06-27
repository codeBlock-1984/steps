const countUniqueValues = require('./count-unique-values');

describe('countUniqueValues', () => {
  it.each([
    {
      input: [1, 1, 1, 1, 1, 2],
      expectedResult: 2,
    },
    {
      input: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13],
      expectedResult: 7,
    },
    {
      input: [],
      expectedResult: 0,
    },
    {
      input: [-2, -1, -1, 0, 1],
      expectedResult: 4,
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(countUniqueValues(input)).toStrictEqual(expectedResult);
  });
});
