function abbreviateString(str) {
  if (typeof str === 'string') {
    const splitArray = str.split(' ');

    return `${splitArray[0]} ${splitArray[splitArray.length - 1][0].toUpperCase()}.`;
  }
  throw new Error();
}

export { abbreviateString };
