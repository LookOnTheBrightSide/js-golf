function reverseInt(n) {
  const val = parseFloat(n.toString().split('').reverse().join(''));
  return n > 0 ? val : -val;
}

module.exports = reverseInt;
