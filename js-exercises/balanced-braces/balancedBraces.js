function balancedBraces(...args) {
  const stack = [];

  const bracesMap = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  for (const char of args[0]) {
    if (Object.keys(bracesMap).includes(char)) {
      stack.push(char);
    } else if (Object.values(bracesMap).includes(char)) {
      if (bracesMap[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}

export {
  balancedBraces,
};
