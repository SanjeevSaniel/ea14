/*
Match the Strings

You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO.

Note: You have to complete String_Match function. No need to take any input.
*/

// TODO: Test cases failing
var String_Match = (S1, S2) => {
  if (S1.length === S2.length) {
    for (let i = 0; i < S1.length; i++) {
      if (S1[i] === S2[i]) {
        continue;
      } else {
        return "NO";
      }
    }
    return "YES";
  }
};
