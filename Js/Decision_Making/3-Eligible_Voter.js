/*
Eligible Voter
You are given an integer A, denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.

Note: You have to complete isEligible function. No need to take any input
*/

const isEligible = (a) => {
  // if (a >= 18) {
  //   return "Eligible for Voting";
  // }
  // return "Not Eligible for Voting";

  return a >= 18 ? "Eligible for Voting" : "Not Eligible for Voting";
};
