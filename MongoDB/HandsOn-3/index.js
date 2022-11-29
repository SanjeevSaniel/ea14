const fs = require("fs");
const mongoose = require("mongoose");

const database = "Human_Resource";

mongoose
  //   .connect("mongodb://localhost/Human_Resource")
  .connect(`mongodb://127.0.0.1:27017/${database}`)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could connect to MongoDB...", err));

const data = JSON.parse(fs.readFileSync("./employee.json", "utf-8"));

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  salary: String,
  department: String,
  lastCompany: String,
  lastSalary: String,
  overallExp: String,
  contactInfo: String,
  yearGrad: String,
  gradStream: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

// async function createEmployee() {
//   const employee = new Employee({
//     firstName: "Sanjeev",
//     lastName: String,
//     salary: "30000",
//     department: String,
//     lastCompany: String,
//     lastSalary: String,
//     overallExp: String,
//     contactInfo: String,
//     yearGrad: "2020",
//     gradStream: String,
//   });

//   const result = await employee.save();
//   console.log(result);
// }

// createEmployee();

// Employee.createCollection().then((employee) => {
//   console.log("Collection is created");
// });

const importEmployee = async () => {
  try {
    await Employee.create(data);
    console.log("Data Imported Successfully");
    process.exit();
  } catch (error) {
    console.log("error", error);
  }
};

importEmployee();

const getEmployees = async () => {
  const employees = await Employee.find();
  const query2 = await Employee.find({ salary: { $gt: "30000" } });
  const query3 = await Employee.find({ overallExp: { $gte: "2" } });
  const query4 = await Employee.find({
    yearGrad: { $gt: "2015" },
    overallExp: { $gt: "1" },
  });
  const query5 = await Employee.updateMany(
    { salary: { $gt: "70000" } },
    { $set: { salary: "65000" } }
  );
  const query6 = await Employee.deleteMany({ lastCompany: "Y" });

  console.log(employees);
  console.log(query2);
  console.log(query3);
  console.log(query4);
  console.log(query5);
  console.log(query6);
};

getEmployees();
