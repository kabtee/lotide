// eqArrays Function
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

// assertArraysEqual Function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✅ Assertion Passed: [actual] === [expected]");
  } else {
    console.log('🛑 Assertion Failed: [actual] !== [expected]');
  }
};

// ACTUAL FUNCTION
const middle = function(array) {


//arrays with one or two elements, there is no middle. Return an empty array
const length = array.length;
  if (length <= 2) {
    return [];

  }
//arrays with odd number of elements, an array containing a single middle element should be returned
const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  }
//arrays with an even number of elements, an array containing the two elements in the middle should be returned
else {
  return [array[middleIndex]];
}

}

// TEST CODE
console.log(middle([1])); // []
console.log(middle([1, 2])); // []
console.log(middle([1, 2, 3])); // [2]
console.log(middle([1, 2, 3, 4, 5])); // [3]
console.log(middle([1, 2, 3, 4])); // [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // [3, 4]