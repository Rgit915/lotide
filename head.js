
//Function head Implementation
const head = function(arr) {
  //if array is empty , return undefined
  if (arr.length === 0) {
    return undefined;
  }
  //returns first element of the array
  return arr[0];
};

// export head function to be used by other JS files
module.exports = head;