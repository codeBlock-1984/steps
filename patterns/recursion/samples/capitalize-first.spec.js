const { capitalizeFirst } = require('./capitalize-first');

describe('capitalizeFirst', () => {
  it.each([
    {
      input: ['car', 'taco', 'banana'],
      expectedResult: ['Car', 'Taco', 'Banana'],
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(capitalizeFirst(input)).toStrictEqual(expectedResult);
  });
});
