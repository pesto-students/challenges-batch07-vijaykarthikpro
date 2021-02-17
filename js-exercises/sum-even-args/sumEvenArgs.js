const sumEvenArgs = (...args) => {
  const evenNumbers = args.filter(item => item % 2 === 0);
  const sumOfEven = evenNumbers.reduce((previous, current) => previous + current, 0);
  return sumOfEven;
};

export { sumEvenArgs };
