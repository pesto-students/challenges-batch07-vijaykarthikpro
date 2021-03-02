const deepCopyObject = objToCopy => {
  if (!objToCopy) return objToCopy;
  if (typeof objToCopy !== 'object') return objToCopy;

  const array = Object.entries(objToCopy);
  const objectCopyArray = array.map(([key, value]) => [key, deepCopyObject(value)]);
  const result = Object.fromEntries(objectCopyArray);
  return result;
};

export { deepCopyObject };
