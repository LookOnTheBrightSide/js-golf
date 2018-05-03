const fizzBuzz = require('./fizzbuzz');


// test fizzbuzz
test('Returns correct sequence for first 15', () => {
  expect(fizzBuzz.fizzBuzz(15)).toEqual([1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
  ]);
});

test('Returns empty array for 0', () => {
  expect(fizzBuzz.fizzBuzz(0)).toEqual([]);
});

test('0 should be falsy', () => {
  expect(fizzBuzz.fizzBuzz(0)).toBeTruthy();
});
