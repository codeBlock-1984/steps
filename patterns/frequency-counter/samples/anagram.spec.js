const anagram = require('./anagram');

describe('anagram', () => {
  it.each([
    { input1: '', input2: '', expectedResult: true },
    { input1: 'aaz', input2: 'zza', expectedResult: false },
    { input1: 'anagram', input2: 'nagaram', expectedResult: true },
    {
      input1: 'rat',
      input2: 'car',
      expectedResult: false,
    },
    {
      input1: 'awesome',
      input2: 'awesom',
      expectedResult: false,
    },
    {
      input1: 'amanaplanacanalpanama',
      input2: 'acanalmanplanpamana',
      expectedResult: false,
    },
    { input1: 'qwerty', input2: 'qeywrt', expectedResult: true },
    {
      input1: 'texttwisttime',
      input2: 'timetwisttext',
      expectedResult: true,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(anagram(input1, input2)).toBe(expectedResult);
    }
  );
});
