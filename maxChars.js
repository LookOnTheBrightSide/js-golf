function maxCharFor(str) {
  const chars = {};
  str.split('').forEach(char => (!(chars[char])) ? chars[char] = 1 : chars[char]++);
  return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b);
}

console.log(maxCharFor('ab222d'))
console.log(maxCharFor('1119999933'))
console.log(maxCharFor('apple crumbs'))

const maxChar = function (str) {
  let chars = {};
  for (char of str) {
    if (!(chars[char])) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  let max = 0;
  let maxChar = '';
  for (char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log('**** second *****')
console.log(maxChar('ab222d'))
console.log(maxChar('1119999933'))
console.log(maxChar('apple crumbs'))