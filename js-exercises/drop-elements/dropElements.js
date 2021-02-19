function dropElements(elements, predicate) {
  return elements.filter((item) => {
    if (predicate(item)) return item;
    return null;
  });
}

export { dropElements };
