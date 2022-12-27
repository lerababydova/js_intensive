class Stack {
  constructor() {
    this.value = [];
  }

  add(value) {
    this.value.push(value);
  }
  remove() {
    this.value.pop();
  }
}
