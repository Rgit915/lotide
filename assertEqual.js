// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + "===" + expected);
  } else {
    console.log("🔴🔴🔴 Assertion Failed: " + actual + "!==" + expected);
  }
};

// TEST CODE
assertEqual("lotide", "lotide");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(5, 15);
assertEqual(1, 1);