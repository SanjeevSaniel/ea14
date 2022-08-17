/*
"Problem:
You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

Input:
abcadeecfb

Output:
a=2
b=2
c=2
d=1
e=2
f=1"
*/

const countAlphabet = (str) => {
  let count = 0;
  let letterFrequency = new Map();
  for (let i = 0; i < str.length; i++) {
    if (letterFrequency.get(str[i])) {
      letterFrequency.set(str[i], count + 1);
    } else letterFrequency.set(str[i], 1);
    count = letterFrequency.get(str[i]);
  }
  console.log(letterFrequency);
};

countAlphabet("abcadeecfb");
