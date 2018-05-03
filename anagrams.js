function main(a, b) {
  let aCharMap = makeCharMap(a);
  let bCharMap = makeCharMap(b);
  console.log(aCharMap)

  function makeCharMap(a) {
    const charMap = {};
    for (let char of a.replace(/[^\w]/g, '').toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  }
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
}

console.log(main('abc', 'cde'));