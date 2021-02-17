function balancedBraces(...args) {
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

  for (const char of args[0]) {
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
