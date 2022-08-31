/*
Mi first attempt for this exercise would be to iterate over the input array of scores, and keep updating 2 variables
that will keep track of the minimum and maximum values, and a 2-dimensional array that keeps track of the result, with
the numbers of times a new minimum or maximum is reached.

Time complexity: O(n) => linear time
Space complexity: O(4) => contant time
*/
function breakingRecords(scores: number[]): number[] {
  let result = [0, 0];
  if (scores.length === 0) return result;
  let minimum = scores[0];
  let maximum = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (minimum > scores[i]) {
      minimum = scores[i];
      result[1]++;
    }

    if (maximum < scores[i]) {
      maximum = scores[i];
      result[0]++;
    }
  }
  return result;
}
