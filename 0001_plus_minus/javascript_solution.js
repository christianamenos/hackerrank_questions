/*
In this questions, we were asked to count the percentage of positive, negative and zeroes appearing into an array
of numbers.

We can do this in linear time and constant space by using temporal variables that count the number of positives,
negatives and zeroes, and divide these number by the length of the array.

Time complexity: O(n) => We are iterating over all the elements of the array. The rest of the operations and conditions
are calculated in constant time.

Space complexity: O(4) => We are creating 4 auxiliar variables to keep track of the numbers. This is contant space
because this does not depend on the length of the input.

Note: the decimals should be with a precision of 6 decimals.
*/
function plusMinus(arr) {
  let totalNumbers = arr.length;
  let numPositives = 0;
  let numNegatives = 0;
  let numZeroes = 0;
  if (totalNumbers === 0) {
    console.log(numPositives.toFixed(6));
    console.log(numNegatives.toFixed(6));
    console.log(numZeroes.toFixed(6));
  }

  for (var number of arr) {
    if (number > 0) numPositives++;
    else if (number < 0) numNegatives++;
    else numZeroes++;
  }

  console.log((numPositives / totalNumbers).toFixed(6));
  console.log((numNegatives / totalNumbers).toFixed(6));
  console.log((numZeroes / totalNumbers).toFixed(6));
}
