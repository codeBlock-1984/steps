const reverse = require('./reverse');

describe('reverse', () => {
  it.each([
    {
      input: 'awesome',
      expectedResult: 'emosewa',
    },
    {
      input: 'rithmschool',
      expectedResult: 'loohcsmhtir',
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(reverse(input)).toStrictEqual(expectedResult);
  });
});
