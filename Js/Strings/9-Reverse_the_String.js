/*
Reverse the String

You are given a string S, Your task is to Reverse the string.
String can contain both upppercase lowercase letters. 

Note: You have to complete Reverse_String function. No need to take any input.
*/

var Reverse_String = (str) => {
  let reverseString = "";
  let length = str.length;

  while (length > 0) {
    reverseString += str[length - 1];
    length--;
  }

  //! Time exceeded.
  //   for (let i = str.length - 1; i >= 0; i++) {
  //     reverseString += str[i];
  //   }

  return reverseString;
};

Reverse_String("I am utkarsh raj");
