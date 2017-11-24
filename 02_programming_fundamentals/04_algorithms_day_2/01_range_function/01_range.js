// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.

// Do not remove last lines, it is for tests
// eslint-disable-next-line


function range (startNumber, endNumber) {
  const range2 = [];
  if (startNumber < endNumber) {
    for (let i = startNumber; i <= endNumber; i++) {
      range2.push(i);
    }
  } else {
    for (let i = startNumber; i >= endNumber; i--) {
      range2.push(i);
    }
  }
  return range2;
}

module.exports = range;
