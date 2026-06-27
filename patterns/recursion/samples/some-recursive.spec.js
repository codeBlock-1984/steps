const someRecursive = require('./some-recursive');

const isOdd = (val) => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

describe('someRecursive', () => {
  it.each([
    {
      input1: [1, 2, 3, 4],
      input2: isOdd,
      expectedResult: true,
    },
    {
      input1: [4, 6, 8, 9],
      input2: isOdd,
      expectedResult: true,
    },
    {
      input1: [4, 6, 8],
      input2: isOdd,
      expectedResult: false,
    },
    {
      input1: [4, 6, 8],
      input2: (val) => val > 10,
      expectedResult: false,
    },
  ])(
    'returns the correct result',
    ({ input1, input2, expectedResult }) => {
      expect(someRecursive(input1, input2)).toStrictEqual(
        expectedResult
      );
    }
  );
});
