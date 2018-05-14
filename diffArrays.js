function diffArray(arr1, arr2) {
  return arr1.filter(num => !arr2.includes(num)).concat(arr2.filter(num => !arr1.includes(num)));
}

module.exports.diffArray = diffArray;
