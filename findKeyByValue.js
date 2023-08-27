const assertEqual = require("./assertEqual");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


const findKeyByValue = function (object, value) {

  const genresArr = Object.keys(bestTVShowsByGenre);

  for (let i = 0; i < genresArr.length; i++) {

    const genre = genresArr[i];
    movieTitle = object[genre];
    if (movieTitle === value) {
      return genre;
    }
  }
  return undefined;
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

module.exports = findKeyByValue;