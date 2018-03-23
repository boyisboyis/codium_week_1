const minus = require('./../src/calculator/minus');

test('adds 1 - 2 to equal -1', () => {
  expect(minus(1, 2)).toBe(-1);
});

test('adds 2 - 1 to equal 1', () => {
  expect(minus(2, 1)).toBe(1);
});