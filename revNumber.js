function reverseInt(n) {
  const val = parseFloat(n.toString().split('').reverse().join(''));
  return n > 0 ? val : -val;
}


console.log(reverseInt(15))
console.log(reverseInt(981))
console.log(reverseInt(500))
console.log(reverseInt(-15))
console.log(reverseInt(-90))
