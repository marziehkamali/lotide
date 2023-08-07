
function middle(array){
  let middleIndex;
  middleIndex = array.length / 2;
  if(array.length <=2){
    return [];
  } else if(array.length % 2 !== 0){ // if its odd
    let roundedMiddleIndex =  Math.floor(middleIndex);
    return array[roundedMiddleIndex];
  }
  else if( array.length % 2  === 0){ // its even
    let secondMiddleIndex = array.length / 2;
    let firstMiddleInex = secondMiddleIndex - 1;

    let valueAtSecondIndex = array[secondMiddleIndex];
    let valueAtFirstIndex = array[firstMiddleInex];
    
    return [valueAtFirstIndex, valueAtSecondIndex]
  }
  return middleValue;
  } 

  module.exports = middle;



