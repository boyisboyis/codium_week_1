const split = require('./../src/split')

it('should 1 + 1 return [1, +, 1]', () => {
    const {operators, numbers} = split('1 + 1');
    expect(operators).toEqual(['+']);
    expect(numbers).toEqual([1,1]);
})