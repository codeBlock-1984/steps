const { getDigit, radixSort } = require('./radix-sort');

describe('radixSort', () => {
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
    expect(radixSort(input1)).toStrictEqual(expectedResult);
  });
});

describe.only('getDigit', () => {
  it.each([
    {
      input1: 52184763,
      input2: 0,
      expectedResult: 3,
    },
    {
      input1: 52184763,
      input2: 1,
      expectedResult: 6,
    },
    {
      input1: 52184763,
      input2: 2,
      expectedResult: 7,
    },
    {
      input1: 52184763,
      input2: 3,
      expectedResult: 4,
    },
    {
      input1: 52184763,
      input2: 4,
      expectedResult: 8,
    },
    {
      input1: 52184763,
      input2: 5,
      expectedResult: 1,
    },
    {
      input1: 52184763,
      input2: 6,
      expectedResult: 2,
    },
    {
      input1: 52184763,
      input2: 7,
      expectedResult: 5,
    },
    {
      input1: 52184763,
      input2: 8,
      expectedResult: 0,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(getDigit(input1, input2)).toStrictEqual(expectedResult);
    }
  );
});
