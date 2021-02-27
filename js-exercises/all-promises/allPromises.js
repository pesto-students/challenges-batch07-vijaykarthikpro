const allPromises = args => new Promise((resolve, reject) => {
  if (args === undefined) resolve(undefined);

  const resultArray = [];

  args.forEach((value, index) => {
    Promise.resolve(value).then(result => {
      resultArray[index] = result;
      if (index === args.length - 1) { resolve(resultArray); }
    }).catch(error => {
      reject(error);
    });
  });
});

export { allPromises };
