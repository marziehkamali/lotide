assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
};

const eqObjects = function(object1, object2) {
  console.log(Object.keys(shirtObject));
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEquals(eqObjects(shirtObject , anotherShirtObject), true);


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject)
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false); */

const person = {
  name: "Marzieh",
  age: 29,
  city: "Calgary",
  sex:"female"
}

//console.log(person["name"]);
//console.log(person['age']);
//console.log(person["city"]);

// [ 0      , 1    , 2     ]
// [ 'name', 'age', 'city' ]
var listOfAllKeys = Object.keys(person);  // access keys is first step- put inside a variable as there could be thousands of keys.

//console.log(person[listOfAllKeys[0]]);
//console.log(person[listOfAllKeys[1]]);
//console.log(person[listOfAllKeys[2]]);

for(let i=0; i < listOfAllKeys.length; i++){   // going through all keys as we may not know how many there are
  const value = listOfAllKeys[i];                // create a variable again that stores all list of all keys- access the index inside the key [] for the value!
  console.log(person[value]);                   // person[value]! to print out the values. 
}







/* person1 = {
  name : "sinton",
  age : "21"

}

person2 = {
  name : "sinton",
  age : "21"
}

if(person1["name"] = person2["name"] && person1["age"] === person2["age"])
{
  return true;
}
else{
  return false;
} */

// if keys length in person1 does not match person 2 then its not equal
// 