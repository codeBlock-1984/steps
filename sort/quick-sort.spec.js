const { findPivot, quickSort } = require('./quick-sort');

describe('quickSort', () => {
  it.each([
    {
      input1: [4, 2, 7, 9, 1, -2, 5, 10],
      expectedResult: [-2, 1, 2, 4, 5, 7, 9, 10],
    },
    {
      input1: [10, 24, 76, 73],
      expectedResult: [10, 24, 73, 76],
    },
  ])('returns the correct result', ({ input1, expectedResult }) => {
    expect(quickSort(input1)).toStrictEqual(expectedResult);
  });
});

describe('findPivot', () => {
  it.each([
    {
      input: [5, 2, 1, 8, 4, 7, 6, 3],
      expectedResult: 4,
    },
    {
      input: [4, 8, 2, 1, 5, 7, 6, 3],
      expectedResult: 3,
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(findPivot(input)).toStrictEqual(expectedResult);
  });
});
