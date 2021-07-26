//Function takes an array and return its middle elemet(s).
const middle = function(arr) {
  const middleArray = [];
  const arrLength = arr.length;
  if (arrLength < 3) {
    return [];
  } else if (arrLength % 2 === 0) {
    middleArray.push(arr[(arrLength / 2) - 1], arr[arrLength / 2]);
  } else {
    middleArray.push(arr[Math.floor(arrLength / 2)]);
  }
  return middleArray;
};

module.exports = middle;