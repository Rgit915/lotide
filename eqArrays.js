//Function eqArrays implementation

const eqArrays = function(arr1, arr2) {
  //takes 2 arrays as parameters and compare their length
  if (arr1.length !== arr2.length) {
    //if length not equal return false
    return false;
  }
  // If same length, iterate over each element of arr1
  for (let i = 0; i < arr1.length; i++) {
    //checks if finds any match, if they're not equal return false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // return true if arrays are equal
  return true;
};

// Export 
module.exports = eqArrays;