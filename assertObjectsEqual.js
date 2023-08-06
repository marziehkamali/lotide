
function eqObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const  key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  console.log(`Example label: ${inspect(actual)}`);

};

console.log(eqObjects(assertObjectsEqual));