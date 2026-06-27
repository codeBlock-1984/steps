const { bubbleSort, bubbleSortOptimized } = require('./bubble-sort');

describe('bubbleSort', () => {
  it.each([
    {
      input1: [4, 2, 7, 9, 1, -2, 5, 10],
      expectedResult: [-2, 1, 2, 4, 5, 7, 9, 10],
    },
  ])('returns the correct result', ({ input1, expectedResult }) => {
    expect(bubbleSort(input1)).toStrictEqual(expectedResult);
  });
});

describe('bubbleSortOptimized', () => {
  it.each([
    {
      input1: [4, 2, 7, 9, 1, -2, 5, 10],
      expectedResult: [-2, 1, 2, 4, 5, 7, 9, 10],
    },
  ])('returns the correct result', ({ input1, expectedResult }) => {
    expect(bubbleSortOptimized(input1)).toStrictEqual(expectedResult);
  });
});
