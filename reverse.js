function reverse(str) {
  let res = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    res += (str.charAt(i));
  }
  return res;
}
console.log(reverse('hello'));

function reverseFun(str) {
  return str.split().reverse().join();
}
console.log(reverseFun('hello!'));

function reverseFor(str) {
  let rev = '';
  for (const char of str) {
    rev = char + rev;
  }
  return rev;
}
console.log(reverseFor('race'));

function reverseReduce(str) {
  return str.split().reduce((rev, char) => char + rev, '');
}
console.log(reverseReduce('rab'));