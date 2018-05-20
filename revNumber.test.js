const reverseInt = require('./revNumber');

test('Should be -51 for 15', () => {
  expect(reverseInt(15)).toEqual(51);
});

test('Should be 189 for 981', () => {
  expect(reverseInt(981)).toEqual(189);
});

test('Should be -9 for -90', () => {
  expect(reverseInt(-90)).toEqual(-9);
});
