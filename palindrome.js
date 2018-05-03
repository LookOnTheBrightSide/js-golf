function palindrome(str) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[(str.length - 1) - i]) {
      count += 1;
    }
  }
  return count === str.length;
}


function palindromeFun(str) {
  return str.split('').reverse().join('') === str;
}


function palindromeEvery(str) {
  return str.split('').every((val, ind) => str[ind] === str[(str.length - 1) - ind]);
}


function palindromeEfficient(str) {
  let currStartPosition = 0;
  let currEndPosition = str.length - 1;
  while (currStartPosition < currEndPosition) {
    if (str[currStartPosition++] !== str[currEndPosition--]) {
      return false;
    }
  }
  return true;
}


module.exports.palindrome = palindrome;
module.exports.palindromeFun = palindromeFun;
module.exports.palindromeEvery = palindromeEvery;
module.exports.palindromeEfficient = palindromeEfficient;
