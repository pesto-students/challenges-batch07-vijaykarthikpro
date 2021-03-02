const limitFunctionCallCount = (func, count) => {
  let countTimes = 0;
  function callBackFunction(...args) {
    if (countTimes === count) return null;
    countTimes += 1;
    return func.apply(this, args);
  }
  return callBackFunction;
};

export {
  limitFunctionCallCount,
};
