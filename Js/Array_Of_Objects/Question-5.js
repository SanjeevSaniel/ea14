// This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

let names = [];

for (let i = 0; i < studentRecords.length; i++) {
  if (studentRecords[i].marks > 50) {
    names.push(studentRecords[i].name);
  }
}

console.log(names);
