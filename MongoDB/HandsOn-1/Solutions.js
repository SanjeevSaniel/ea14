// Create a Database named "Human_Resource"
// - use Human_Resource

// Create a Collection named "employee"
// - db.createCollection("employee")

// Query - 3
// Query the collection "employee" and list all the documents
Human_Resource > db.employee.find();

// Query - 4
// Query the collection "employee" and list the employees who are having salary more than 30000
// - db.employee.find( { salary:  { $gt: "30000" }} )

Human_Resource > db.employee.find({ salary: { $gt: "30000" } })
[
    ({
      _id: ObjectId("61cc522daf6ba4fcb54e8c3b"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      _id: ObjectId("61cc522daf6ba4fcb54e8c3d"),
      firstName: "Jame",
      lastName: "roh",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
    {
      _id: ObjectId("61cc533baf6ba4fcb54e8c3f"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      _id: ObjectId("61cc533baf6ba4fcb54e8c41"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
    {
      _id: ObjectId("61cc5515af6ba4fcb54e8c43"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      _id: ObjectId("61cc5515af6ba4fcb54e8c45"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    })
  ]

// Query - 4
// Query the collection "employee" and list the employees who are having experience more than 2 years
Human_Resource > db.employee.find({ overallExp: { $gte: "2" } })
[
    ({
      _id: ObjectId("61cc5034af6ba4fcb54e8c38"),
      firstName: "John",
      lastName: "Doe",
      salary: "25000",
      department: "HR",
      lastCompany: "X",
      lastSalary: "10000",
      overallExp: "2",
      contactInfo: "1234567890",
      yearGrad: "2016",
      gradStream: "CSE",
    },
    {
      _id: ObjectId("61cc522daf6ba4fcb54e8c3c"),
      firstName: "Sao",
      lastName: "Avika",
      salary: "30000",
      department: "Sales",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      _id: ObjectId("61cc522daf6ba4fcb54e8c3d"),
      firstName: "Jame",
      lastName: "roh",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
    {
      _id: ObjectId("61cc533baf6ba4fcb54e8c40"),
      firstName: "Sao",
      lastName: "Avika",
      salary: "30000",
      department: "Sales",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      _id: ObjectId("61cc533baf6ba4fcb54e8c41"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
    {
      _id: ObjectId("61cc5515af6ba4fcb54e8c44"),
      firstName: "Sao",
      lastName: "Avika",
      salary: "30000",
      department: "Sales",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      _id: ObjectId("61cc5515af6ba4fcb54e8c45"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    })
  ]

// Query - 5
// Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year
Human_Resource > db.employee.find({ yearGrad: { $gt: "2015" }, overallExp: { $gt: "1" } })
  [
    ({
      _id: ObjectId("61cc5034af6ba4fcb54e8c38"),
      firstName: "John",
      lastName: "Doe",
      salary: "25000",
      department: "HR",
      lastCompany: "X",
      lastSalary: "10000",
      overallExp: "2",
      contactInfo: "1234567890",
      yearGrad: "2016",
      gradStream: "CSE",
    },
    {
      _id: ObjectId("61cc522daf6ba4fcb54e8c3b"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      _id: ObjectId("61cc522daf6ba4fcb54e8c3d"),
      firstName: "Jame",
      lastName: "roh",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
    {
      _id: ObjectId("61cc533baf6ba4fcb54e8c3f"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      _id: ObjectId("61cc533baf6ba4fcb54e8c41"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
    {
      _id: ObjectId("61cc5515af6ba4fcb54e8c43"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      _id: ObjectId("61cc5515af6ba4fcb54e8c45"),
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    })
  ]

// Query - 6
// Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.
