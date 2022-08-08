/*
String Replace
You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string.

Note: You have to complete Replace function. No need to take any input.
*/

var Replace = (S, pattern, text) => {
  return S.replace(pattern, text);
};

Replace("Hi, I am You.", "You", "Prepbytes");
