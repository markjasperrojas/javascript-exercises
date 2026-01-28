const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, item) => (sum += item), 0);
};

const multiply = function (arr) {
  return arr.reduce((product, item) => (product *= item));
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (n) {
  if (n === 0 || n === 1) return 1;
  let arr = [];
  arr.length = n;
  for (let i = n; i > 0; i--) {
    arr[i - 1] = i;
  }
  return arr.reduce((product, item) => (product *= item));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
