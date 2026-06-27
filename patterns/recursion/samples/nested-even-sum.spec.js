const { nestedEvenSum } = require('./nested-even-sum');

describe('nestedEvenSum', () => {
  it.each([
    {
      input: {
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: 'yup',
          },
        },
      },
      expectedResult: 6,
    },
    {
      input: {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
        d: 1,
        e: { e: { e: 2 }, ee: 'car' },
      },
      expectedResult: 10,
    },
  ])('returns the correct result', ({ input, expectedResult }) => {
    expect(nestedEvenSum(input)).toStrictEqual(expectedResult);
  });
});
