const { linearSearch } = require('./linear-search');

describe('linearSearch', () => {
  it.each([
    {
      input1: [10, 15, 20, 25, 30],
      input2: 15,
      expectedResult: 1,
    },
    {
      input1: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      input2: 4,
      expectedResult: 5,
    },
    {
      input1: [100],
      input2: 100,
      expectedResult: 0,
    },
    {
      input1: [1, 2, 3, 4, 5],
      input2: 6,
      expectedResult: -1,
    },
    {
      input1: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      input2: 10,
      expectedResult: -1,
    },
    {
      input1: [100],
      input2: 200,
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
