const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  if (n == 1 || n == 2) return 1;

  let fibonacci = 0;
  let a = 1;
  let b = 1;

  for (let i = 0; i < Number(n) - 2; i++) {
    fibonacci = a + b;
    a = b;
    b = fibonacci;
  }

  return fibonacci;
};

// Do not edit below this line
module.exports = fibonacci;
