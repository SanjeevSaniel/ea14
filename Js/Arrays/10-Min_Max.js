/*
Min and Max

Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.

The problem statement is simple- given N elements, find the minimum and maximum numbers among those elements.
*/

function arrayMin(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr[0];
}

function arrayMax(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr[0];
}

