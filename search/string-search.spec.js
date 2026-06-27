const {
  naiveStringSearch,
  stringSearch,
} = require('./string-search');

describe('stringSearch', () => {
  it.each([
    {
      input1: 'lol ol rei',
      input2: 'lol',
      expectedResult: 1,
    },
    {
      input1: 'lol ol rei',
      input2: 'ol',
      expectedResult: 2,
    },
    {
      input1: 'lol ol rei',
      input2: 'ole',
      expectedResult: 0,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(stringSearch(input1, input2)).toStrictEqual(
        expectedResult
      );
    }
  );
});
