function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}

const countLetters = function(sentence) {
  const result = {};
  for(let i=0; i<sentence.length; i++){
    const letter = sentence[i];
    if(result[letter])
    {
      result[letter] =  result[letter] + 1;
    }
    else{
      result[letter] = 1;
    }
  }

  return result;
}

const result = countLetters("hello");
console.log(result);



















/*function countLetters(sentence) {
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

*/