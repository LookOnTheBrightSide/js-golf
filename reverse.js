function reverse(str) {
  let res = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    res += (str.charAt(i));
  }
  return res;
}

function reverseFun(str) {
  return str.split().reverse().join();
}

function reverseFor(str) {
  let rev = '';
  for (const char of str) {
    rev = char + rev;
  }
  return rev;
}

function reverseReduce(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

function reverseRecursive(str) {
  if (str === '') {
    return '';
  }
  return reverseRecursive(str.substr(1)).concat(str.charAt(0));
}

module.exports.reverse = reverse;
module.exports.reverseFun = reverseFun;
module.exports.reverseFor = reverseFor;
module.exports.reverseReduce = reverseReduce;
module.exports.reverseRecursive = reverseRecursive;
