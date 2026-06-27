const areThereDuplicates = require('./are-there-duplicates');

describe('areThereDuplicates', () => {
  it.each([
    { input: [1, 2, 3], expectedResult: false },
    { input: [1, 2, 2], expectedResult: true },
    { input: ['a', 'b', 'c', 'a'], expectedResult: true },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(areThereDuplicates(...input)).toBe(expectedResult);
  });
});
