const factorial = function (n) {
  if (n < 0 || !Number.isInteger(n)) return;

  return n === 0 ? 1 : n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;
