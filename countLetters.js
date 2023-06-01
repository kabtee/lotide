// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅ Assertion Passed: [actual] === [expected]');
  } else {
    console.log('🛑 Assertion Failed: [actual] !== [expected]');
  }
};

const string = `Nigeria is a country in West Africa. 
It's the most populous black nation in the world 
and being referred to as the Giant of Africa`;

// count letters in this string
const countLetters = function(str) {
  console.log(str);
  let letterCount = {};
  let letter = str.toLowerCase();
  for (let i of letter) {
    if (letterCount[i] !== undefined) {
      letterCount[i]++;
    } else {
      letterCount[i] = 1;
    }
  }

  console.log(letterCount);
};

countLetters(string);