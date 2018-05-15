const maxChars = require('./maxChars');

test('Should be 9', () => {
  expect(maxChars.maxChar('1119999933')).toEqual('9');
});

test('Should be p', () => {
  expect(maxChars.maxChar('apple crumbs')).toEqual('p');
});
test('Should be 9', () => {
  expect(maxChars.maxCharFor('1119999933')).toEqual('9');
});

test('Should be p', () => {
  expect(maxChars.maxCharFor('apple crumbs')).toEqual('p');
});
