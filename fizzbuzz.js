function fizzBuzz(n) {
  let i = 1;
  const res = [];
  while (i <= n) {
    if (i % 3 == 0 && i % 5 == 0) {
      res.push('FizzBuzz');
    } else if (i % 3 == 0) {
      res.push('Fizz');
    } else if (i % 5 == 0) {
      res.push('Buzz');
    } else {
      res.push(i);
    }
    i += 1;
  }
  return res;
}

module.exports.fizzBuzz = fizzBuzz;
