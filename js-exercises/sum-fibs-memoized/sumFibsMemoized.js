/* eslint-disable no-console */
function sumFibs(num) {
  const fibonacci = [];

  fibonacci[0] = 1;
  fibonacci[1] = 1;

  if (num === 1) return 1;

  let i = 2;
  let sum = 2; // since taking i as 2, added first two fibonacci elements ;

  while (i <= num) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    if (fibonacci[i] <= num && !(fibonacci[i] % 2 === 0)) {
      sum += fibonacci[i];
    }
    i += 1;
  }

  return sum;
}

function cacheFunction(func) {
  const cached = {};

  return (num) => {
    if (num in cached) {
      return cached[num];
    // eslint-disable-next-line no-else-return
    } else {
      const sum = func(num);
      cached[num] = sum;
      return sum;
    }
  };
}

export { sumFibs, cacheFunction };
