const assertEqual = require("./assertEqual");

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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


module.exports = countOnly;