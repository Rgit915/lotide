//
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Function implemetation
// return a count of each letters in a sentence
const countLetters = function(sentence) {
  const count = {}; // to store the counts of each letter
  for(const letter of sentence){
    if (count[letter]) {
      count[letter] += 1; //if the letter already exists increment by 1
      } else {
        count[letter] = 1; //if it doesn't exist,it will be added to the object with count 1
      }
    }
    return count;
};

//Test Cases
const result = countLetters("lighthouse in the house");
console.log(result); //
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result[" "], 3);
