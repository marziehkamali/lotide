const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed!")
  } else {
    console.log("Assertion Failed");
  }
}
assertEqual("green", "blue");
assertEqual(1, 1);



/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/






/*function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}

assertEqual("Lighthouse Labs", "Bootcamp");

assertEqual(1, 1);
*/


/*
this function is called assertEqual.
This function is REUSABLE code for the purpose of comparing two primitive data types.
*/

