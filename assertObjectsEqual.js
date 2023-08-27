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


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);;
  }
};

// Test - should print Assertion Passed
assertObjectsEqual({name:"John",lastName:"Doe"},{name:"John",lastName:"Doe"});

// Test - should print Assertion Failed
assertObjectsEqual({name:"Jane",lastName:"Doe"},{name:"John",lastName:"Doe"});

module.exports = assertObjectsEqual