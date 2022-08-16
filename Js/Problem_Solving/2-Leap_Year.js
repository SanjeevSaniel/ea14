/*
Check whether the year is Leap year or not.
Write a program which takes an year N as input from the user and find out whether the given year is a Leap Year or not.

Note: You have to complete Check_Leap function. No need to take any input.
*/

var Check_Leap = (year) => {
  result =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      ? "Leap Year"
      : "Non Leap Year";
  return result;
};

console.log(Check_Leap(2016));
