const calculator = require('./../src/calculator');

test('calculator 1 , 2 , + is equal 3', () => {
  expect(calculator(1, 2, '+')).toEqual(3);
});

test('calculator 1 , 2 , - is equal -1', () => {
  expect(calculator(1, 2, '-')).toEqual(-1);
});

test('calculator 1 , 2 , * is equal 2', () => {
  expect(calculator(1, 2, '*')).toEqual(2);
});

test('calculator 1 , 2 , / is equal 0.5', () => {
  expect(calculator(1, 2, '/')).toEqual(0.5);
});