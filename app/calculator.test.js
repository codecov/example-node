const test = require('node:test');
const assert = require('node:assert');
const Calculator = require('./calculator');

test('add', () => {
  assert.strictEqual(Calculator.add(1, 2), 3.0);
  assert.strictEqual(Calculator.add(1.0, 2.0), 3.0);
  assert.strictEqual(Calculator.add(0, 2.0), 2.0);
  assert.strictEqual(Calculator.add(2.0, 0), 2.0);
  assert.strictEqual(Calculator.add(-4, 2.0), -2.0);
});

test('subtract', () => {
  assert.strictEqual(Calculator.subtract(1, 2), -1.0);
  assert.strictEqual(Calculator.subtract(2, 1), 1.0);
  assert.strictEqual(Calculator.subtract(1.0, 2.0), -1.0);
  assert.strictEqual(Calculator.subtract(0, 2.0), -2.0);
  assert.strictEqual(Calculator.subtract(2.0, 0.0), 2.0);
  assert.strictEqual(Calculator.subtract(-4, 2.0), -6.0);
});

test('multiply', () => {
  assert.strictEqual(Calculator.multiply(1, 2), 2.0);
  assert.strictEqual(Calculator.multiply(1.0, 2.0), 2.0);
  assert.strictEqual(Calculator.multiply(0, 2.0), 0.0);
  assert.strictEqual(Calculator.multiply(2.0, 0.0), 0.0);
  assert.strictEqual(Calculator.multiply(-4, 2.0), -8.0);
});

test('divide', () => {
  assert.strictEqual(Calculator.divide(1.0, 2.0), 0.5);
  assert.strictEqual(Calculator.divide(0, 2.0), 0);
  assert.strictEqual(Calculator.divide(-4, 2.0), -2.0);
});
