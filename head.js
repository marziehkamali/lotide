
function head(array) {
  if (array.length === 0) {
    return undefined;  // Return undefined if the array is empty
  }
  return array[0];  // Return the first element of the array
}


module.exports = head;
