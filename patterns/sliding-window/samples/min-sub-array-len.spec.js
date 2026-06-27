const minSubArrayLen = require('./min-sub-array-len');

describe('minSubArrayLen', () => {
  it.each([
    {
      input1: [2, 3, 1, 2, 4, 3],
      input2: 7,
      expectedResult: 2,
    },
    {
      input1: [2, 1, 6, 5, 4],
      input2: 9,
      expectedResult: 2,
    },
    {
      input1: [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19],
      input2: 52,
      expectedResult: 1,
    },
    {
      input1: [1, 4, 16, 22, 5, 7, 8, 9, 10],
      input2: 39,
      expectedResult: 3,
    },
    {
      input1: [1, 4, 16, 22, 5, 7, 8, 9, 10],
      input2: 55,
      expectedResult: 5,
    },
    {
      input1: [4, 3, 3, 8, 1, 2, 3],
      input2: 11,
      expectedResult: 2,
    },
    {
      input1: [1, 4, 16, 22, 5, 7, 8, 9, 10],
      input2: 95,
      expectedResult: 0,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(minSubArrayLen(input1, input2)).toStrictEqual(
        expectedResult
      );
    }
  );
});
