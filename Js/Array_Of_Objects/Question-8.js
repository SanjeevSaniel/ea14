// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.

const student1 = {
  name: "Sanjeev",
  class: 12,
  rollNo: 23,
};

const student2 = {
  name: "Sans",
  class: 9,
  rollNo: 20,
};
const student3 = {
  name: "Arpit",
  class: 5,
  rollNo: 5,
};
const student4 = {
  name: "Rohit",
  class: 8,
  rollNo: 45,
};
const student5 = {
  name: "Suman",
  class: 12,
  rollNo: 26,
};
const student6 = {
  name: "John",
  class: 1,
  rollNo: 10,
};

let students = [];

const studentRecords = (student) => {
  students.push(student);
};

studentRecords(student1);
studentRecords(student2);
studentRecords(student3);
studentRecords(student4);
studentRecords(student5);
studentRecords(student6);

console.log(students);
