const totalIntegers = function (obj) {
  if (typeof obj !== 'object') return undefined;

  let result = 0;

  for (const value of Object.values(obj)) {
    if (Number.isInteger(value)) {
      result++;
    }

    if (typeof value === 'object' && value !== null) {
      result += totalIntegers(value);
    }
  }

  return result;
};

// Do not edit below this line
module.exports = totalIntegers;
