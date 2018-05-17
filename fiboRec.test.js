const fibRec = require('./fiboRec');

test('Fib 3 should be [0, 1, 1]', () => {
  expect(fibRec.fibRec(3)).toEqual([0, 1, 1]);
});

test('Fib 15 should be [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];', () => {
  expect(fibRec.fibRec(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
});
