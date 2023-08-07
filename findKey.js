const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
};

function findKey(object, callback) {
  const keys = Object.keys(object)
  for (let i = 0; i < keys.length; i++) {
    let value = object[keys[i]]
    if (callback(value) === true) {
      return keys[i];
    }
  }
  return undefined;

}



let answer = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);


let actual = answer
let expected = "noma";

assertEqual(answer, expected);

let answer2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 9);

let actual1 = answer2;
let expected1 = undefined;
assertEqual(actual1, expected1);



// => "noma

/* function a (x){ 
  if x.stars === 2
} return true; */

