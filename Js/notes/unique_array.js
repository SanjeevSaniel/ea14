const Unique_Numbers = (arr) => {
  let uniqueNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueNumbers.indexOf(arr[i]) === -1) {
      uniqueNumbers.push(arr[i]);
    }
  }

  return uniqueNumbers;
};

console.log(Unique_Numbers([1, 1, 2, 4, 1, 2, 3]));
