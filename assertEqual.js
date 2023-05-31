// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: [actual] === [expected]");
  } else {
    console.log("Assertion Failed: [actual] !== [expected]");
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("teacher", "TEACHER");
assertEqual("food", "food");
assertEqual(10, 10);
assertEqual(15, 20);