function mapAnagram(a, b) {
  if (!a || !b) {
    return false;
  }

  function makeCharMap(str) {
    const charMap = {};
    for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  }
  const aCharMap = makeCharMap(a);
  const bCharMap = makeCharMap(b);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (const char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function quickAnagram(string1, string2) {
  return string1.replace(/[^\w]/g, '').toLowerCase().split('').sort()
    .join('') ===
    string2.toLowerCase().replace(/[^\w]/g, '').split('').sort()
      .join('');
}

module.exports.mapAnagram = mapAnagram;
module.exports.quickAnagram = quickAnagram;
