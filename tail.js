
function tail(array) {
  if (array.length <= 1) {
    return [];  // Return an empty array if the original array has 0 or 1 element
  }
  
  return array.slice(1);  // Return a new array containing all elements except the first one
}

module.exports = tail;
