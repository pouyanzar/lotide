const tail = function(arr) {
  if (arr.length === 1) {
    return [];
  }
  let newArray = arr.slice(1);
  return newArray;
};

module.exports = tail;

