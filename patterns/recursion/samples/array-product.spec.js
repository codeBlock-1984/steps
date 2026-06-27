const arrayProduct = require('./array-product');

describe('arrayProduct', () => {
  it.each([
    {
      input: [1, 2, 3],
      expectedResult: 6,
    },
    {
      input: [1, 2, 3, 10],
      expectedResult: 60,
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(arrayProduct(input)).toStrictEqual(expectedResult);
  });
});
