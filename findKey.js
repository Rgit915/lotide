//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function findKey implementation
/* - function findKey takes an object & a callback
   - scan object, return the first key where callback returns a truthy value
   - if no key found, return undefined
*/
const findKey = function(object, callback) {
  const results ={};
  for(let key in object){
    if(callback(object[key])){
      return key;
    }
  }
  return undefined;

}
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma") // => "noma"
assertEqual(findKey({}, x => x == 3), undefined); //=> undefined
assertEqual(findKey({a:1, b:2, c:3}, x => x == 4), undefined); // => undefined