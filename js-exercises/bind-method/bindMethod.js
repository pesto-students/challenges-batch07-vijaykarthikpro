// You can change the `args`
function bind(fn, obj) {
  return function callback(...args) {
    return fn.apply(obj, args);
  };
}

module.exports = { bind };
