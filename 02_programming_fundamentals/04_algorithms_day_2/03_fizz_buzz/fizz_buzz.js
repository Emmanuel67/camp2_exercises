/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/
const list = [1, 2, 3, 4, 5, 6];
function fizzBuzz(list) {
  const fizzBuzzArray = [];
  for(let i = 0; i < list.length; i++) {
    if (list[i] % 3 === 0 && list[i] % 5 === 0) {
      fizzBuzzArray[i] = "FizzBuzz";
    }
    else if (list[i] % 3 === 0) {
      fizzBuzzArray[i] = "Fizz";
    }
    else if (list[i] % 5 === 0) {
      fizzBuzzArray[i] = "Buzz";
    }
    else {
      fizzBuzzArray[i] = list[i];
    }
  }
  return fizzBuzzArray;
}
console.log(fizzBuzz(list));
module.exports = fizzBuzz;
