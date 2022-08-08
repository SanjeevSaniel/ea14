/*
Count the Vowels and Consonants

You are given a string S containing both uppercase and lowercase letters. 
You need to find out the number of vowels and the number of consonants in the given string.

Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.
*/

var Count_Vowels = (S) => {
  S = S.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for (let letter of S) {
    for (let vowel of vowels) {
      if (vowel === letter) {
        count++;
      }
    }
  }
  return count;
};

var Count_Consonants = (S) => {
  S = S.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for (let letter of S) {
    if (
      letter !== "a" &&
      letter !== "e" &&
      letter !== "i" &&
      letter !== "o" &&
      letter !== "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(Count_Consonants("Prepbytes"));
