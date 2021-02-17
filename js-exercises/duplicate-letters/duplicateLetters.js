function duplicateLetters(str) {
  const charMap = {};

  for (const char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  const charCounts = Object.values(charMap);
  const countMax = Math.max(...charCounts);

  if (!countMax || countMax === 1) return false;
  return countMax;
}

export {
  duplicateLetters,
};
