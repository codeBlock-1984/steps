const same = require('./same');

describe('same', () => {
  it.each([
    { input1: [1, 2, 3], input2: [4, 1, 9], expectedResult: true },
    { input1: [1, 2, 3], input2: [1, 9], expectedResult: false },
    { input1: [1, 2, 1], input2: [4, 4, 1], expectedResult: false },
    {
      input1: [1, 2, 3, 2],
      input2: [9, 1, 4, 4],
      expectedResult: true,
    },
    {
      input1: [1, 2, 3, 2, 5],
      input2: [9, 1, 4, 4, 11],
      expectedResult: false,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(same(input1, input2)).toBe(expectedResult);
    }
  );
});
