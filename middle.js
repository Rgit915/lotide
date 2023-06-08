//Implement function middle
// Function to find the middle element(s) of an array
const middle = function(array) {
  const length = array.length;
  const midIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    return [array[midIndex]];
  } else {
    return [array[midIndex - 1], array[midIndex]];
  }
};

//Export middle function
module.exports = middle;