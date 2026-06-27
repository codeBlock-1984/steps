const { capitalizeWords } = require('./capitalize-words');

describe('capitalizeWords', () => {
  it.each([
    {
      input: ['i', 'am', 'learning', 'recursion'],
      expectedResult: ['I', 'AM', 'LEARNING', 'RECURSION'],
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(capitalizeWords(input)).toStrictEqual(expectedResult);
  });
});
