const { flatten } = require('./flatten');

describe('flatten', () => {
  it.each([
    {
      input: [1, 2, 3, [4, 5]],
      expectedResult: [1, 2, 3, 4, 5],
    },
    {
      input: [1, [2, [3, 4], [[5]]]],
      expectedResult: [1, 2, 3, 4, 5],
    },
    {
      input: [[1], [2], [3]],
      expectedResult: [1, 2, 3],
    },
    {
      input: [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]],
      expectedResult: [1, 2, 3],
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(flatten(input)).toStrictEqual(expectedResult);
  });
});
