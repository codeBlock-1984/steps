const maxSubArraySumChallenge = require('./max-sub-array-sum-challenge');

describe('maxSubArraySumChallenge', () => {
  it.each([
    {
      input1: [100, 200, 300, 400],
      input2: 2,
      expectedResult: 700,
    },
    {
      input1: [1, 4, 2, 10, 23, 3, 1, 0, 20],
      input2: 4,
      expectedResult: 39,
    },
    {
      input1: [-3, 4, 0, -2, 6, -1],
      input2: 2,
      expectedResult: 5,
    },
    {
      input1: [3, -2, 7, -4, 1, -1, 4, -2, 1],
      input2: 2,
      expectedResult: 5,
    },
    {
      input1: [2, 3],
      input2: 3,
      expectedResult: null,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(maxSubArraySumChallenge(input1, input2)).toStrictEqual(
        expectedResult
      );
    }
  );
});
