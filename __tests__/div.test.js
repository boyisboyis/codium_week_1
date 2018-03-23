const div = require('./../src/calculator/div');

test('should 1 / 2 to equal 0.5', () => {
  expect(div(1, 2)).toBe(0.5);
});

test('should 1 / 0 to equal infinity', () => {
  expect(div(1,0)).toBe(Infinity);
})