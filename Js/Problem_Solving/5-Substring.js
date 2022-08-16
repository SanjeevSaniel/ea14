/*
Substring Check.
You are given two strings S1 and S2, you need to check whether the string S1 is a substring of string S2 or not.

Note: You have to complete Substring_Check function. No need to take any input.
*/

var Substring_Check = (S1, S2) => {
  let result = S1.includes(S2) ? "YES" : "NO";
  return result;
};
