function maxCharFor(str) {
  const chars = {};
  str.split('').forEach(char => ((!(chars[char])) ? chars[char] = 1 : chars[char]++));
  return Object.keys(chars).reduce((a, b) => (chars[a] > chars[b] ? a : b));
}

const maxChar = function (str) {
  const chars = {};
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
};

module.exports.maxChar = maxChar;
module.exports.maxCharFor = maxCharFor;
