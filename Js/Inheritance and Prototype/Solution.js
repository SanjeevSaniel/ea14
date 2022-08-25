// 1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
const parent = {
  name: "Sanjeev",
  printName: function () {
    console.log(this.name);
  },
};

const child = Object.create(parent);
child.printName();

// 2. Write code to explain prototype chaining
function Mobile(brand, model, os) {
  this.brand = brand;
  this.model = model;
  this.os = os;
}

const myMobile = new Mobile("Samsung", "A11", "Android 12");
console.log(myMobile.hasOwnProperty("brand")); // true

// 3. Add a method to calculate sum of all elements in Array in array's prototype, use that method to calculate sum for multiple arrays
const numbers = [10, 20, 30, 40, 50]; // 150
const numbers1 = [100, 200, 300]; // 600

Array.prototype.total = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  console.log(sum);
};

numbers.total(); // 150
numbers1.total(); // 600

// 4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
const studentOne = {
  name: "Sanjeev",
  age: 20,
};

studentTwo = Object.create(studentOne);
studentTwo.birthYear = 2022;
// console.log(studentTwo.birthYear);

for (const key in studentTwo) {
  console.log(key);
}
