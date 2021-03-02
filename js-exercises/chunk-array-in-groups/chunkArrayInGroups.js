function chunkArrayInGroups(array, chunkSize) {
  if (chunkSize > 0) {
    const chunks = Math.ceil(array.length / chunkSize);
    let newArray = Array(chunks).fill();
    newArray = newArray.map((_, index) => index * chunkSize);
    newArray = newArray.map((element) => [element, element + chunkSize]);
    newArray = newArray.map(([startIndex, endIndex]) => array.slice(startIndex, endIndex));
    return newArray;
  }
  return array;
}

export {
  chunkArrayInGroups,
};
