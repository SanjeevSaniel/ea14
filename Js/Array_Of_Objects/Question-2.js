// Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

let students = [];

for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks > 50) {
    students.push(Object.assign(studentRecords[i]));
  }
}

console.log(students);
