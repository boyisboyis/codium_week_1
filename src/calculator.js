const sum = require('./calculator/sum');
const div = require('./calculator/div');
const multiple = require('./calculator/multiple');
const minus = require('./calculator/minus');

function calculator(a, b, operator) {
	switch (operator) {
		case '+':
			return sum(a, b);
		case '-':
			return minus(a, b);
		case '*':
			return multiple(a, b);
		case '/':
			return div(a, b);
	}
}
module.exports = calculator;