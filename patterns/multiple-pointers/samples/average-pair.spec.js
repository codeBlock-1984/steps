const averagePair = require('./average-pair');

describe('averagePair', () => {
  it.each([
    { input1: [1, 2, 3], input2: 2.5, expectedResult: true },
    {
      input1: [1, 3, 3, 5, 6, 7, 10, 12, 19],
      input2: 8,
      expectedResult: true,
    },
    {
      input1: [-1, 0, 3, 4, 5, 6],
      input2: 4.1,
      expectedResult: false,
    },
    {
      input1: [],
      input2: 4,
      expectedResult: false,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(averagePair(input1, input2)).toBe(expectedResult);
    }
  );
});
