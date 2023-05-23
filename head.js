function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}

function head(array) {
  if (array.length === 0) {
    return undefined;  // Return undefined if the array is empty
  }
  return array[0];  // Return the first element of the array
}

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
