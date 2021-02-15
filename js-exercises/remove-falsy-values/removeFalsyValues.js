function removeFalsyValues(array) {
  // filters falsy values by using Boolean as a function
  return array.filter(element => Boolean(element));
}

export {
  removeFalsyValues,
};
