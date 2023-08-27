const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


function eqObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const actualResult = eqObjects(shirtObject , anotherShirtObject)
assertEqual(actualResult,true); 

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const actualResult2 = eqObjects(shirtObject , longSleeveShirtObject); 
assertEqual(actualResult2, false);

module.exports = eqObjects;