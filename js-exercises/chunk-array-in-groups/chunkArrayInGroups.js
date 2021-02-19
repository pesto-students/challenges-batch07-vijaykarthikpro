function chunkArrayInGroups(array, chunkSize) {
  if (chunkSize > 0) {
    const copyArray = array;
    return Array(Math.ceil(array.length / chunkSize))
      .fill().map(() => copyArray.splice(0, chunkSize));
  }
  return array;
}

export {
  chunkArrayInGroups,
};
