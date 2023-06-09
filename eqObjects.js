//function eqObjects implementation
// it will take in two objects 
// returns true or false based on a perfect match
const eqObjects = function(object1, object2){
  //
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  // Check if the number of keys is the same
  if (key1.length !== key2.length) {
    return false;
  }
   // Check if the keys and corresponding values match
  for(const key of key1){
    //check the values arrays usin g Array.isArray
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) { //if values are not arrays, assuming primitives & compare two values using ===
        return false;
      }
    }
  }

  return true;
};

//Exporting eqObjects function
module.exports = eqObjects;