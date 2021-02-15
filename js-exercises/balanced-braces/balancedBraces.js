function balancedBraces(str) {
  const bracesStack = [];

  const bracesMap = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const closedBraces = {
    '}': true,
    ']': true,
    ')': true,
  };

  for (let i = 0; i < str.length; i + 1) {
    const char = str[i];

    if (bracesMap[char]) {
      bracesStack.push(char);
    } else if (closedBraces[char]) {
      if (bracesMap[bracesStack.pop()] !== char) return false;
    }
  }
  return bracesStack.length === 0;
}

export {
  balancedBraces,
};
