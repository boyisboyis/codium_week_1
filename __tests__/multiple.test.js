const multiple = require('./../src/calculator/multiple');

test('adds 1 * 2 to equal 2', () => {
  expect(multiple(1, 2)).toBe(2);
});

test('adds 4 * 4 to equal 16', () => {
  expect(multiple(4,4)).toBe(16);
});