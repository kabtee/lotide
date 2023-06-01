// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅ Assertion Passed: [actual] === [expected]');
  } else {
    console.log('🛑 Assertion Failed: [actual] !== [expected]');
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  let counts = 0;
  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {
      counts = countKey(item, allItems);
      if (counts !== 0) {
        results[item] = counts;
      }
    }
  }
  return results;
};

const countKey = function(key, allItems) {
  let count = 0;
  for (let item of allItems) {
    if (item === key) {
      count++;
    }
  }
  return count;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
