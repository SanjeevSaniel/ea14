/*
Count the Heads

Tina is given a string  S which contains the first letter of all the student names in her class. She got a curiosity to check how many people have their names starting from the same alphabet. So given a string  S , she decided to write a code that finds out the count of characters that occur more than once in the string.
*/

var Count_Occ = (s) => {
  let newString = "";
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;
  for (let letter of letters) {
    for (let character of s) {
      if (letter === character) {
        count++;
      }
    }
    if (count > 1) {
      newString += `${letter}${count}`;
    }
    count = 0;
  }
  return newString;
};

console.log(Count_Occ("prepbytes"));
