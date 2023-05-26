function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}

function countLetters(sentence) {
  let result = {};
  for (i = 0; i<sentence.length; i++){
    let currentCharacter = sentence[i]; //store 1 character at a time
    if(result[currentCharacter]){
      result[currentCharacter] += 1;
    }
    else{
      result[currentCharacter] = 1;
    }
  }
  return result;
}

let result = countLetters("Jane")
console.log(result)
