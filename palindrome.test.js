const palindrome = require('./palindrome');

// test the almost functional palindrome
test('Returns true for "Abba"', () => {
  expect(palindrome.palindromeFun('abba')).toBeTruthy();
});
test('Returns true for "racecar"', () => {
  expect(palindrome.palindromeFun('abba')).toBeTruthy();
});
test('Returns false for "Abb"', () => {
  expect(palindrome.palindromeFun('abb')).toBeFalsy();
});
test('Returns false for "race"', () => {
  expect(palindrome.palindromeFun('race')).toBeFalsy();
});

// test palindrome that uses the every method
test('Returns true for "Abba"', () => {
  expect(palindrome.palindromeEvery('abba')).toBeTruthy();
});
test('Returns true for "racecar"', () => {
  expect(palindrome.palindromeEvery('abba')).toBeTruthy();
});
test('Returns false for "Abb"', () => {
  expect(palindrome.palindromeEvery('abb')).toBeFalsy();
});
test('Returns false for "race"', () => {
  expect(palindrome.palindromeEvery('race')).toBeFalsy();
});

// test efficient solution
test('Returns true for "Abba"', () => {
  expect(palindrome.palindromeEfficient('abba')).toBeTruthy();
});
test('Returns true for "racecar"', () => {
  expect(palindrome.palindromeEfficient('abba')).toBeTruthy();
});
test('Returns false for "Abb"', () => {
  expect(palindrome.palindromeEfficient('abb')).toBeFalsy();
});
test('Returns false for "race"', () => {
  expect(palindrome.palindromeEfficient('race')).toBeFalsy();
});

// test normal palindrome
test('Returns true for "Abba"', () => {
  expect(palindrome.palindrome('abba')).toBeTruthy();
});
test('Returns true for "racecar"', () => {
  expect(palindrome.palindrome('abba')).toBeTruthy();
});
test('Returns false for "Abb"', () => {
  expect(palindrome.palindrome('abb')).toBeFalsy();
});
test('Returns false for "race"', () => {
  expect(palindrome.palindrome('race')).toBeFalsy();
});
