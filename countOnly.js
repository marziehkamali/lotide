function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}

const countOnly = function (allItems, itemsToCount) {

  const result = {};

  for (let i = 0; i < allItems.length; i++) {

    const item = allItems[i];

    if (itemsToCount[item]) {

      if (result[item]) {
        result[item] = result[item] + 1;
      } else {
        result[item] = 1;
      }
    }
  }

  return result;
}

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


module.exports = countOnly;