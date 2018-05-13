const anagrams = require('./anagrams');

test('Returns false for `abc` `cde`', () => {
  expect(anagrams.mapAnagram('abc', 'cde')).toBe(false);
});

test('Returns false for `abc` `cba`', () => {
  expect(anagrams.mapAnagram('Resistance', 'Ancestries')).toBe(true);
});

test('Returns false for `abc` `cde`', () => {
  expect(anagrams.quickAnagram('abc', 'yue')).toBe(false);
});

test('Returns false for `abc` `cba`', () => {
  expect(anagrams.quickAnagram('Deductions', 'Discounted')).toBe(true);
});
