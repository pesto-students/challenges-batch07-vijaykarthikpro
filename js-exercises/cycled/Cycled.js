class Cycled {
  constructor(array) {
    this.arr = array;
    this.position = 0;
  }

  * [Symbol.iterator]() {
    for (let value = 0; value < this.arr.length; value += 1) {
      yield this.arr[value];
    }
  }

  [Symbol.iterator]() {
    const arr2 = [];
    let start = this.position;
    let count = 0;
    while (count < this.arr.length) {
      arr2.push(this.arr[start]);
      if (start === this.arr.length - 1) {
        start = 0;
      } else {
        start += 1;
      }
      count += 1;
    }
    return arr2.values();
  }

  next() {
    if (this.position === this.arr.length - 1) {
      this.position = 0;
    } else {
      this.position += 1;
    }

    function* nextGenerator(obj) {
      yield obj.arr[obj.position];
    }

    return nextGenerator(this).next().value;
  }

  previous() {
    if (this.position === 0) {
      this.position = this.arr.length - 1;
    } else {
      this.position -= 1;
    }

    function* nextGenerator(obj) {
      yield obj.arr[obj.position];
    }

    return nextGenerator(this).next().value;
  }

  current() {
    function* currentGenerator(obj) {
      yield obj.arr[obj.position];
    }

    return currentGenerator(this).next().value;
  }

  step(stepBy) {
    function* stepGenerator(obj) {
      yield obj.arr[obj.position];
    }

    if ((this.position + stepBy) >= this.arr.length) {
      this.position -= (this.arr.length - stepBy);
    } else {
      this.position += stepBy;
    }
    return stepGenerator(this).next().value;
  }

  get index() {
    return this.position;
  }

  set index(val) {
    if (val >= 0 && val <= this.arr.length) {
      this.position = val;
    }
  }

  indexOf(value) {
    return this.arr.indexOf(value);
  }

  * reversed() {
    yield this.arr[this.arr.length - 1 - this.position];
  }
}
export { Cycled };
