function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}

function tail(array) {
  if (array.length <= 1) {
    return [];  // Return an empty array if the original array has 0 or 1 element
  }
  
  return array.slice(1);  // Return a new array containing all elements except the first one
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);