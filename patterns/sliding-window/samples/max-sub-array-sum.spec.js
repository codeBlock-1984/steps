const maxSubArraySum = require('./max-sub-array-sum');

describe('maxSubArraySum', () => {
  it.each([
    {
      input1: [1, 2, 5, 2, 8, 1, 5],
      input2: 2,
      expectedResult: 10,
    },
    {
      input1: [1, 2, 5, 2, 8, 1, 5],
      input2: 4,
      expectedResult: 17,
    },
    {
      input1: [4, 2, 1, 6],
      input2: 1,
      expectedResult: 6,
    },
    {
      input1: [4, 2, 1, 6, 2],
      input2: 4,
      expectedResult: 13,
    },
    {
      input1: [],
      input2: 4,
      expectedResult: null,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(maxSubArraySum(input1, input2)).toStrictEqual(
        expectedResult
      );
    }
  );
});
