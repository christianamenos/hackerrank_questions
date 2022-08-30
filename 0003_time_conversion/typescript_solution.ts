/*
For this exercise, we have to convert a string like: 12:01:00PM to 12:01:00 and a string like: 12:01:00AM to 00:01:00
My first attempt would be to check at the last 2 characters to see if it ends with AM or PM. Then I would check at the
first two characters, converting them to a number, to add substract values.

I see an edge case, that is 12:XX:XXAM, in which we have to substract 12, while the rest of the AM numbers are kept the
same. Similarly, we have to be careful about the PM for 12.

Assumption: all characters will indicate AM or PM, so I won't be checking this.

Time complexity of the solution: constant time
Space complexity: constant space


*/
function timeConversion(s: string): string {
  let isPM = s.endsWith("PM");
  let time = s.substring(0, s.length - 2);
  let hour = parseInt(s.substring(0, 2));
  if (hour == 12) {
    if (!isPM) {
      hour -= 12;
    }
  } else if (isPM) {
    hour += 12;
  }
  return hour.toString().padStart(2, "0") + time.substring(2, s.length);
}
