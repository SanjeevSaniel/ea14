/**
Problem:
You are given a string (STR) of length N, consisting of only the lower case English alphabet.
Your task is to remove all the duplicate occurrences of characters in the string.

Input:
abcadeecfb

Output:
abcdef
 */

const unique_occurrences = (str) => {
  set = [...new Set(str)];
  let uniqueString = "";
  for (let value of set) uniqueString += value;
  console.log(uniqueString);
};

unique_occurrences("abcadeecfb");
