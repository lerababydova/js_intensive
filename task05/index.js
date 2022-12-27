let myIterable = {
  from: 1,
  to: 4,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (typeof this.from !== "number" || typeof this.to !== "number") {
      throw new Error("Ошибка!");
    }
    if (this.from > this.to) {
      throw new Error("Ошибка!");
    }
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of myIterable) {
  console.log(num);
}
