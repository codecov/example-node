class Calculator {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }

  static multiply(x, y) {
    return x * y;
  }

  static divide(x, y) {
    if (y === 0) {
      return 'Cannot divide by 0';
    }
    return (x * 1.0) / y;
  }
}

module.exports = Calculator;
