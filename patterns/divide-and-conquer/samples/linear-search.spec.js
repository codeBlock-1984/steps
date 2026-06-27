const linearSearch = require('./linear-search');

describe('linearSearch', () => {
  it.each([
    {
      input1: [1, 2, 3, 4, 5, 6, 7, 8],
      input2: 4,
      expectedResult: 3,
    },
    {
      input1: [1, 2, 3, 4, 5, 6, 7, 8],
      input2: 6,
      expectedResult: 5,
    },
    {
      input1: [1, 2, 3, 4, 5, 6, 7, 8],
      input2: 8,
      expectedResult: 7,
    },
    {
      input1: [1, 2, 3, 4, 5, 6, 7, 8],
      input2: 11,
      expectedResult: -1,
    },
    {
      input1: [],
      input2: 4,
      expectedResult: -1,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(linearSearch(input1, input2)).toStrictEqual(
        expectedResult
      );
    }
  );
});
