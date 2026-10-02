const permutations = function (array) {
  if (array.length === 0) {
    return [[]];
  }

  const current = array[0];
  const remaining = array.slice(1);

  const smallerPermutations = permutations(remaining);

  const result = [];

  for (const permutation of smallerPermutations) {
    for (let i = 0; i <= permutation.length; i++) {
      const newPermutation = [...permutation];
      newPermutation.splice(i, 0, current);
      result.push(newPermutation);
    }
  }

  return result;
};

// Do not edit below this line
module.exports = permutations;
