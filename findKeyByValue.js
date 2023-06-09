
// findKeyByValue function implementation
//This function is dedigned to search for a key on an object where its value matches a given value
const findKeyByValue = function (myObject, myValue){
  //functiom takes in object and value
   const keys = Object.keys(myObject); //to retrieve an array of all the keys in `myObject'
  for(const key of keys){
    //
    if(myObject[key] === myValue){ 
      return key; //If a match is found, the key is returned
     }
  }
  return undefined  //if no key with given value is found return undefined.
};

//Export findKeyByValue
module.exports = findKeyByValue