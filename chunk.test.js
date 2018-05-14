const chunkers = require('./chunk');

test('Returns correct order for 4', () => {
  expect(chunkers.chunker([1, 2, 3, 4, 5], 4)).toEqual([
    [1, 2, 3, 4],
    [5],
  ]);
});

test('Returns correct order for 2', () => {
  expect(chunkers.chunk([1, 2, 3, 4, 5], 2)).toEqual([
    [1, 2],
    [3, 4],
    [5],
  ]);
});

test('Returns correct order for 2', () => {
  expect(chunkers.chunkie([1, 2, 3, 4, 5], 2)).toEqual([
    [1, 2],
    [3, 4],
    [5],
  ]);
});

test('Returns correct order for 1', () => {
  expect(chunkers.chunkie([1, 2, 3, 4, 5], 1)).toEqual([
    [1],
    [2],
    [3],
    [4],
    [5],
  ]);
});
