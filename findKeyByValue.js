//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKeyByValue function implementation
//This function is dedigned to search for a key on an object where its value matches a given value
const findKeyByValue = function (myObject, myValue){
  //functiom takes in object and value
  for(const key in myObject){
    //
    if(myObject[key] === myValue){ 
      return key; //If a match is found, the key is returned
     }
  }
  return undefined  //if no key with given value is found return undefined.
};

//Test Cases
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  thriller: "Breaking Bad",
  fantasy: "Game of Thrones"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //✅✅✅ Assertion Passed: drama === drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //✅✅✅ Assertion Passed: undefined === undefined
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); //✅✅✅ Assertion Passed: sci_fi === sci_fi
assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "thriller"); //✅✅✅ Assertion Passed: thriller === thriller
assertEqual(findKeyByValue(bestTVShowsByGenre, "Stranger Things"), undefined); //✅✅✅ Assertion Passed: undefined === undefined