function rangeIter(lb, ub) {
  if (lb === ub) return [lb];
  if (lb < ub) {
    const range = {
      from: lb,
      to: ub,
      [Symbol.iterator]() {
        return {
          current: this.from,
          last: this.to,
          next() {
            if (this.current <= this.last) {
              // eslint-disable-next-line no-plusplus
              return { done: false, value: this.current++ };
            }
            return { done: true };
          },
        };
      },
    };
    return [...range];
  }
  return [];
}

function validator(lb, ub) {
  if (!lb || typeof lb !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  }
  if (!ub || typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }
}

function withValidation(fn, validatorFn) {
  return (...args) => {
    validatorFn(...args);
    return fn.apply(this, args);
  };
}
const ragneIterWithValidator = withValidation(rangeIter, validator);

export { ragneIterWithValidator as rangeIter };
