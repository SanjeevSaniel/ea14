const fs = require("fs");
const { MongoClient } = require("mongodb");

const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";
const databaseName = "Human_Resource";

const data = JSON.parse(fs.readFileSync("./employee.json", "utf-8"));

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const employees = database.collection("employees");
    console.log("Connected successfully to server");

    const query1 = await employees.insertMany(data);

    const query2 = await employees.find({ salary: { $gt: "30000" } }).toArray();

    const query3 = await employees
      .find({ overallExp: { $gte: "2" } })
      .toArray();

    const query4 = await employees
      .find({
        yearGrad: { $gt: "2015" },
        overallExp: { $gt: "1" },
      })
      .toArray();

    const query5 = await employees.updateMany(
      { salary: { $gt: "70000" } },
      { $set: { salary: "65000" } }
    );

    const query6 = await employees.deleteMany({ lastCompany: "Y" });

    console.log(query1);
    console.log(query2);
    console.log(query3);
    console.log(query4);
    console.log(query5);
    console.log(query6);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
