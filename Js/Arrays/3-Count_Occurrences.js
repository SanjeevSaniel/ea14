/*
Count Occurrences

You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of K in array A.

Note: You have to complete findCount function. No need to take any input.
*/

const findCount = (N, K, Arr) => {
  let count = 0;
  for (let i = 0; i < N; i++) {
      if (K === Arr[i]) {
          count += 1;
    }
  }
  return count;
};
