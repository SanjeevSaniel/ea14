// Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

let students = [];

for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].id > 120 && studentRecords[i].marks > 50) {
    students.push(Object.assign(studentRecords[i]));
  }
}

console.log(students);
