const { collectStrings } = require('./collect-strings');

describe('collectStrings', () => {
  it.each([
    {
      input: {
        stuff: 'foo',
        data: {
          val: {
            thing: {
              info: 'bar',
              moreInfo: {
                evenMoreInfo: {
                  weMadeIt: 'baz',
                },
              },
            },
          },
        },
      },
      expectedResult: ['foo', 'bar', 'baz'],
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(collectStrings(input)).toStrictEqual(expectedResult);
  });
});
