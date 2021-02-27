function debounce(fn, timeInMs) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, timeInMs);
  };
}

export { debounce };
