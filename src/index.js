const readline = require('readline');
const split = require('./split');
const calculator = require('./calculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input your calculator: ', (answer) => {

  const {numbers, operators} = split(answer);
  
  let sum = numbers.shift();
  while(numbers.length > 0) {
    const next = numbers.shift();
    const operator = operators.shift();
    sum = calculator(sum,next,operator);
  }

  console.log('sum: ', sum);

  rl.close();
});