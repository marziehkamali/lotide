const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
};


const findKeyByValue = function(object, value){

  const genresArr = Object.keys(bestTVShowsByGenre);

  for(let i=0; i < genresArr.length; i++){

    const genre = genresArr[i];
    movieTitle = object[genre];
    if(movieTitle === value){
      return genre;
    }
  }
  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);