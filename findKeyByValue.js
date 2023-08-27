const assertEqual = require("./assertEqual");

const findKeyByValue = function (object, value) {

  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {

    const key = keys[i];
    const valueAtKey = object[key];
    if (valueAtKey === value) {
      return key;
    }
  }
  return undefined;
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

module.exports = findKeyByValue;