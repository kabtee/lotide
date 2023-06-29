// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅ Assertion Passed: [actual] === [expected]');
  } else {
    console.log('🛑 Assertion Failed: [actual] !== [expected]');
  }
};


//assertArraysEqual Function
function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
}


// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "d"]), false);


// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3], [3, 2, 1]); 
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); 
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
