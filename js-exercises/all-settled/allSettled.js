const allSettled = args => new Promise(resolve => {
  if (args === undefined) return undefined;

  const resultArray = [];

  args.forEach((value, index) => {
    Promise.resolve(value).then(result => {
      resultArray[index] = { status: 'fulfilled', value: result };
      if (index === args.length - 1) { resolve(resultArray); }
    }).catch(error => {
      resultArray[index] = { status: 'rejected', reason: error };
      if (index === args.length - 1) { resolve(resultArray); }
    });
  });
  return null;
});
export { allSettled };
