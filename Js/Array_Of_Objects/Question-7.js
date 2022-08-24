// This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

let totalMarks = 0;

for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks < 50) {
    totalMarks += studentRecords[i].marks + 15;
  }
}

console.log(totalMarks);
