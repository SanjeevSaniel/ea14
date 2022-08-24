// Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

let total = 0;

for (let i = 0; i < studentRecords.length; i++) {
  total += studentRecords[i].marks;
}

console.log(total);
