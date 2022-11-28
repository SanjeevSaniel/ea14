Create a Database named "Human_Resource"
- use Human_Resource

Create a Collection named "employee"
- db.createCollection("employee")

Query the collection "employee" and list all the documents
- db.employee.find()

Query the collection "employee" and list the employees who are having salary more than 30000
- db.employee.find( { salary:  { $gt: "30000" }} )

Human_Resource> db.employee.find( { salary:  { $gt: "30000" }} )
[
  {
    _id: ObjectId("61cc522daf6ba4fcb54e8c3b"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("61cc522daf6ba4fcb54e8c3d"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("61cc533baf6ba4fcb54e8c3f"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("61cc533baf6ba4fcb54e8c41"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("61cc5515af6ba4fcb54e8c43"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("61cc5515af6ba4fcb54e8c45"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]