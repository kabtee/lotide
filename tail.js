// FUNCTION IMPLEMENTATION
const tail = function (array) {
  if (array.length !== 0) {
  return array[0];
  }
};

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("Assertion Passed: [actual] === [expected]");
    } else {
      console.log("Assertion Failed: [actual] !== [expected]");
    }
};



// test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 10);
assertEqual(head([]), 5);