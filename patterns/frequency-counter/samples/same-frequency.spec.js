const sameFrequency = require('./same-frequency');

describe('sameFrequency', () => {
  it.each([
    { input1: 182, input2: 281, expectedResult: true },
    { input1: 34, input2: 14, expectedResult: false },
    { input1: 3589578, input2: 5879385, expectedResult: true },
    {
      input1: 22,
      input2: 222,
      expectedResult: false,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(sameFrequency(input1, input2)).toBe(expectedResult);
    }
  );
});
