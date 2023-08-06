
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');



let result = eqArrays([1, 2, 3], [1, 2, 3]);  // giving eqArrays a variable inorder to receive the result
assertEqual(result, true); // => should PASS  // testing your result of true against expected of true.
