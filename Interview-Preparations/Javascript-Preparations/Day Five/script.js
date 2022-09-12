//* 1. Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button.
$("#btn-1").click(function () {
  $("#heading-1").toggle();
});

//* 2. Write code to get 1st H1 element from a webpage using DOM.
document.querySelector("h1").style.color = "green";

//* 3. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.
const clock = () => {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  document.getElementById("timer").innerHTML = `
        ${hours} hrs : ${minutes} mins : ${seconds} secs`;
  setTimeout(clock, 1000);
};

clock();

//* 4. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy" .

document.getElementById("btn-2").addEventListener("click", function () {
  document.getElementById("heading-3").innerText =
    "Welcome to Elevation academy";
});

//* 5. Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text.

document.getElementById("btn-3").addEventListener("click", function () {
  document.getElementById("heading-4").style.visibility = "hidden";
});

//* 6. Given an array of 0's and 1's find out number of 0's
const numbers = [0, 0, 1, 0, 1, 0];
let zeros = 0;
for (number of numbers) {
  if (number === 0) zeros += 1;
}

console.log(zeros);

//* 7. Given an array find out total no. of odd and even nos.
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = 0;
let odd = 0;
for (number of numbers1) {
  number % 2 == 0 ? (even += 1) : (odd += 1);
}

console.log(`Evens: ${even}, Odds: ${odd}`);

//* 8. Given a string find out number of vowels.
const message = "This is Javascript";
let vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;
for (letter of message) {
  if (vowels.includes(letter)) {
    vowelCount += 1;
  }
}

console.log(vowelCount);

//* 9. Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.

let obj1 = {
  message: "Awesome javascript 1",
  arr: ["orange", "pineapple", "apple"],
};

let obj2 = {
  message: "Awesome javascript 2",
  arr: ["orange", "pineapple", "apple"],
};

function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    let result = false;

    for (let index in arr1) {
      if (arr1[index] === arr2[index]) result = true;
      else return false;
    }
    return result;
  }
}

console.log(compareArrays(obj1.arr, obj2.arr));
