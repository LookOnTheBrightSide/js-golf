const reverse = require('./reverse');

test('Returns olleh for hello', () => {
  expect(reverse.reverse('hello')).toEqual('olleh');
});

test('Returns ecar for race', () => {
  expect(reverse.reverseFor('race')).toEqual('ecar');
});

test('Returns bar for rab', () => {
  expect(reverse.reverseReduce('rab')).toEqual('bar');
});

test('Returns e for e', () => {
  expect(reverse.reverseReduce('e')).toEqual('e');
});

test('Returns race for ecar', () => {
  expect(reverse.reverseRecursive('ecar')).toEqual('race');
});
