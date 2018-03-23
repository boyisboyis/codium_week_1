function split(str) {
	const strs = str.split('');
	const numbs = [];
  const operators = [];
  // let sum = 0;
  let next = 0;
  while(strs.length > 0) {
    const str = strs.shift();
    if (['+','-','*','/'].includes(str)) {
      operators.push(str);
      next++;
    } else {
      if (numbs[next] === undefined) {
        numbs.push(0);
      }
      numbs[next] = Number(`${numbs[next]}${str}`);
    }
	}
	return {
		numbers: numbs,
		operators
	}
}
module.exports = split;