const pascal = function (n) {
  if (n === 1) return [1];

  let newArr = pascal(n - 1);

  newArr.unshift(0);
  newArr.push(0);

  let result = [];

  for (let i = 0; i < newArr.length - 1; i++) {
    result.push(newArr[i] + newArr[i + 1]);
  }

  return result;
};

// Do not edit below this line
module.exports = pascal;
