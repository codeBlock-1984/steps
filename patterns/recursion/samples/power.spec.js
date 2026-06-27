const power = require('./power');

describe('power', () => {
  it.each([
    {
      input1: 2,
      input2: 0,
      expectedResult: 1,
    },
    {
      input1: 2,
      input2: 2,
      expectedResult: 4,
    },
    {
      input1: 2,
      input2: 4,
      expectedResult: 16,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(power(input1, input2)).toStrictEqual(expectedResult);
    }
  );
});
