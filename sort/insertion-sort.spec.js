const { insertionSort } = require('./insertion-sort');

describe('insertionSort', () => {
  it.each([
    {
      input1: [4, 2, 7, 9, 1, -2, 5, 10],
      expectedResult: [-2, 1, 2, 4, 5, 7, 9, 10],
    },
  ])('returns the correct result', ({ input1, expectedResult }) => {
    expect(insertionSort(input1)).toStrictEqual(expectedResult);
  });
});
