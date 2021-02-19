function chunkArrayInGroups(array, chunkSize) {
  if (chunkSize > 0) {
    return Array(Math.ceil(array.length / chunkSize))
      .fill().map(() => array.splice(0, chunkSize));
  }
  return array;
}

export {
  chunkArrayInGroups,
};
