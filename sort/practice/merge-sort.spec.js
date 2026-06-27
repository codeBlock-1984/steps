const { mergeSortedArrays, mergeSort } = require('./merge-sort');

describe('mergeSort', () => {
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
    expect(mergeSort(input1)).toStrictEqual(expectedResult);
  });
});

describe('mergeSortedArrays', () => {
  it.each([
    {
      input1: [3, 6, 10],
      input2: [1, 2, 5, 9, 12],
      expectedResult: [1, 2, 3, 5, 6, 9, 10, 12],
    },
    {
      input1: [-2, 1],
      input2: [5, 10],
      expectedResult: [-2, 1, 5, 10],
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(mergeSortedArrays(input1, input2)).toStrictEqual(
        expectedResult
      );
    }
  );
});
