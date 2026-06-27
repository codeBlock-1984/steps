const collectOdd = require('./collect-odd');

describe('collectOdd', () => {
  it.each([
    {
      input: [1, 2, 3, 4, 5],
      expectedResult: [1, 3, 5],
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(collectOdd(input)).toStrictEqual(expectedResult);
  });
});
