class Calculator {
  constructor(x, y, ...restNums) {
    if (isNaN(x) || isNaN(y) || restNums.length !== 0) {
      throw new Error("");
    }
    this.x = x;
    this.y = y;
  }
  setX(x) {
    if (isNaN(x)) {
      throw new Error("");
    }
    this.x = x;
  }

  setY(y) {
    if (isNaN(y)) {
      throw new Error("");
    }
    this.y = y;
  }

  logSum() {
    console.log(this.x + this.y);
  }

  logMul() {
    console.log(this.x * this.y);
  }

  logSub() {
    console.log(this.x - this.y);
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error("");
    }
    console.log(this.x / this.y);
  }
}
