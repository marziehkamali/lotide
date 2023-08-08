function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}

const countOnly = function(allItems,itemsToCount){
  
  // create an empty objec that we can use to tally how many times a name appears
  // in memory, this object will look like
  // {
  //    "karl" : 1,
  //    "jason" : 2 
  // }
  const result = {};

  // Go through each name in the array/ list of names
  for(let i=0; i<allItems.length; i++){

    // Get each name one at a time and store it in the var item
    const item = allItems[i];

    // Check if this name(item) is in the itemsToCount object
    // We only care about counting a name, if its contained in itemsToCount and is set to true
    if(itemsToCount[item]){

      // Have we encountered this name before?
      if(result[item]){
        // Yes- add 1 to the current count
        result[item] = result[item] + 1;
      }else{
        // No - this is the first time we encountered it, so lets count it as 1
        result[item] = 1;
      }
    }
  }

  return result;
}


/* const countOnly = function(allItems, ItemsToCount){
  const results = {}
  for (const item of allItems) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    console.log(item);
  }
  return results;
} */

// Go through each name in the list
// Did we go through this name before?
// Yes - Increase Tally
// No - add 1 to the name and move on to next name
// Is there anymore names?
// Y - go to next name
// N - List all names and the number of times they appear

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

/* const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
 */

module.exports = countOnly;