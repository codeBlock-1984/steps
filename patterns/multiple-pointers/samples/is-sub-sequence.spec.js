const isSubSequence = require('./is-sub-sequence');

describe('isSubSequence', () => {
  it.each([
    { input1: 'hello', input2: 'hello world', expectedResult: true },
    { input1: 'sing', input2: 'sting', expectedResult: true },
    { input1: 'abc', input2: 'abracadabra', expectedResult: true },
    {
      input1: 'abc',
      input2: 'acb',
      expectedResult: false,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(isSubSequence(input1, input2)).toBe(expectedResult);
    }
  );
});
