const addUpTo = require('./add-up-to');

describe('addUpTo', () => {
  it.each([
    {
      input: 6,
      expectedResult: 21,
    },
    {
      input: 10,
      expectedResult: 55,
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(addUpTo(input)).toStrictEqual(expectedResult);
  });
});
