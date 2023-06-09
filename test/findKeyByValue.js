//Import findKeyByValue module
const findKeyByValue = require('../findKeyByValue')
const assert = require('chai').assert
//Test Cases
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  thriller: "Breaking Bad",
  fantasy: "Game of Thrones"
};
//findKeyByValue(bestTVShowsByGenre, "The Wire"); // drama
assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //✅✅✅ Assertion Passed: drama === drama
assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //✅✅✅ Assertion Passed: undefined === undefined
assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); //✅✅✅ Assertion Passed: sci_fi === sci_fi
assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "thriller"); //✅✅✅ Assertion Passed: thriller === thriller
assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Stranger Things"), undefined); //✅✅✅ Assertion Passed: undefined === undefined