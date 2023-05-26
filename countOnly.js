function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}

// can create a function and store it in a variable! Call the function by calling variable later. 

const countOnly = function (allItems, itemsToCount) {  //has a function called countOnly with 2 parameters - aLLItems and itemsToCount)
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }


  return results;

  /* results = {
    "Jason": 1,
    "Karima": undefined,
    "Fang": 2
  }
  */
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
console.log(result1);



assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);