const contains = function (obj, value) {
  for (const content of Object.values(obj)) {
    if (content === value || (Number.isNaN(content) && Number.isNaN(value)))
      return true;

    if (typeof content === 'object' && content !== null) {
      if (contains(content, value)) return true;
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
