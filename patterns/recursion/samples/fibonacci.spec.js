const fibonacci = require('./fibonacci');

describe('fibonacci', () => {
  it.each([
    {
      input: 4,
      expectedResult: 3,
    },
    {
      input: 10,
      expectedResult: 55,
    },
    {
      input: 28,
      expectedResult: 317811,
    },
    {
      input: 35,
      expectedResult: 9227465,
    },
    {
      input: 50,
      expectedResult: 12_586_269_025,
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(fibonacci(input)).toStrictEqual(expectedResult);
  });
});
