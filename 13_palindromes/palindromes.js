const palindromes = function (str) {
  const newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return newStr.split("").reverse().join("") === newStr;
};

// Do not edit below this line
module.exports = palindromes;
