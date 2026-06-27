const { stringifyNumbers } = require('./stringify-numbers');

describe('stringifyNumbers', () => {
  it.each([
    {
      input: {
        num: 1,
        test: [],
        data: {
          val: 4,
          info: {
            isRight: true,
            random: 66,
          },
        },
      },
      expectedResult: {
        num: '1',
        test: [],
        data: {
          val: '4',
          info: {
            isRight: true,
            random: '66',
          },
        },
      },
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(stringifyNumbers(input)).toStrictEqual(expectedResult);
  });
});
