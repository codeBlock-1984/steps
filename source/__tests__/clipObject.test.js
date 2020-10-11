const clipObject = require('../clipObject');

test('clipObject()', () => {
  expect(clipObject(3, 1, 5)).toBe(true);
  expect(clipObject(1, 1, 5)).toBe(true);
  expect(clipObject(5, 1, 5)).toBe(true);
  expect(clipObject(6, 1, 5)).toBe(false);
  expect(clipObject(1, 2, 5)).toBe(false);
});
