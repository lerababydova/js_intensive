class Queue {
  constructor() {
    this.value = [];
  }

  add(value) {
    this.value.push(value);
  }
  remove() {
    this.value.shift();
  }
}

const queue = new Queue();
