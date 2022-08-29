/*
Mi initial approach would be to loop over the elements in the array, and get the minimum and maximum number and
position.

With the min and max position and numbers, we can now sum the rest of the numbers, exclusing the minValue for the
calculation of the maximum sum, and excluding the maxValue for the minimum sum.

Time complexity: O(n^2)
Space complexity: constant, O(6)
*/
function miniMaxSum(arr: number[]): void {
  let minValue = -1;
  let minIndex = -1;
  let maxValue = -1;
  let maxIndex = -1;
  arr.forEach((num, pos) => {
    if (minValue === -1 || minValue > num) {
      minValue = num;
      minIndex = pos;
    }
    if (maxValue === -1 || maxValue < num) {
      maxValue = num;
      maxIndex = pos;
    }
  });
  let minSum = 0;
  let maxSum = 0;
  arr.forEach((num, pos) => {
    if (pos !== maxIndex) {
      minSum += num;
    }
    if (pos !== minIndex) {
      maxSum += num;
    }
  });
  console.log(minSum, maxSum);
}
/*
The previous solution is a N^2 time complexity solution. Now we want to come up with a better solution.
I am thinking this can be done in linear time if we try to calculate the numbers as we go.
We could do this by 2 means: try to remove the minimum or maximum value if we find a new minimum or maximum, or by just
substracting the minimum/maximum.

I like more the second approach because it has more clarity, and helps to reduce the number of checks or operations
during the loop.

Time complexity: O(n)
Space complexity: O(3)
*/
function miniMaxSum(arr: number[]): void {
  let minValue = Infinity;
  let maxValue = 0;
  let totalSum = 0;
  arr.forEach((num, pos) => {
    if (minValue > num) {
      minValue = num;
    }
    if (maxValue < num) {
      maxValue = num;
    }
    totalSum += num;
  });
  console.log(totalSum - maxValue, totalSum - minValue);
}
