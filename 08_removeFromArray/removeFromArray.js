const removeFromArray = function (arr, ...nums) {
  return arr.filter((n) => !nums.includes(n));
};

// Do not edit below this line
module.exports = removeFromArray;
