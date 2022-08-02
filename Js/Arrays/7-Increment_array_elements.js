/*
Increment the Array Elements

You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.

You have to complete Inc_Arr. No need to take any input.
*/

const Inc_Arr = (array, N) => {
  let newArray = [];
  for (let i = 0; i < N; i++) {
    newArray.push(array[i] + 1);
  }
  console.log(newArray.join(" "));
};

Inc_Arr([1, 2, 3, 4, 5], 5);
