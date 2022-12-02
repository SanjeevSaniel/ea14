1.  Which is the command that helps in processing the data?

    db.collection_name.aggregate(aggregate_operation)

2.  What is the command to sort the documents in ascending and descending value?

    Ascending Order: db.Collection_Name.sort({ field_name: 1 })
    Descending Order: db.Collection_Name.sort({ field_name: -1 })

3.  Which command is used to create a collection in MongoDB?

    - db.createCollection("Collection_Name")

4.  How to create and restore a backup?

    Create Backup

    - mongodump | OR
    - mongodump --db databaseName --collection collectionName | OR
    - mongodump –db databaseName –collection collectionName –out c:\backup

    Restore Backup

    - mongorestore dump | OR
    - mongorestore –db databaseName –collection collectionName directory/collectionName.bson

5.  How to create a new DATABASE?

    - use databaseName

6.  How do you perform CRUD operations in MongoDB?

    - Create Operations

      - db.collection.insertOne()
      - db.collection.insertMany()

    - Read Operations

      - db.collection.find()

    - Update Operations

      - db.collection.updateOne()
      - db.collection.updateMany()
      - db.collection.replaceOne()

    - Delete Operations

      - db.collection.deleteOne()
      - db.collection.deleteMany()

7.  What is BSON?

    BSON stands for Binary JSON. It is a binary file format that is used to store serialized JSON documents in a binary-encoded format. It was developed in 2009 by MongoDB. It extends JSON and provides more data types and fields.

8.  In what ways is MongoDB better than MySQL?

    MongoDB has a flexible data model where-in the schema can be expanded based on business needs. Also, MongoDB is faster and can handle more data types to manage real-time applications better.

9.  What makes MongoDB the best?

    MongoDB is considered to be the best NoSQL database because of its following features:

    - Document-oriented (DO)
    - High performance (HP)
    - High availability (HA)
    - Easy scalability
    - Rich query language

10. Which syntax is used to drop a collection in MongoDB?

    - db.collection.drop()

11. What is the use of the db command?

    The db command gives the name of the currently selected database.

12. What is the command to find the single record from the collection?

    - db.collectionn.findOne({ "field": "content" })

13. Can MongoDB replace MySQL?

    MongoDB is a cross-platform document-oriented and NoSQL database that allows fast changes over time in the database as the application grows but both have their pros and cons Mysql is open source, secure, and provides high flexibility whereas MongoDB provides speed, ability to handle unstructured data, etc. Considering all these points we can say yes MongoDB has the potential to replace MySQL.

14. What is MongoClient?
    The MongoClient class is a class that allows for making Connections to MongoDB.

        const MongoClient = require('mongodb').MongoClient;

15. What is Mongoose?

    Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

16. To start with any query using mongoose, what are the steps that you haved follow?

            1. Create a Schema and Model
                import mongoose from 'mongoose';

                const { Schema, model } = mongoose;

                const blogSchema = new Schema({
                    title: String,
                    tags: [String],
                    createdAt: Date,
                    updatedAt: Date,
                    comments: [{
                        user: String,
                        content: String,
                        votes: Number
                    }]
                });

                const Blog = model('Blog', blogSchema);

            2. Create a new blog post object

                const article = new Blog({
                    title: 'Awesome Post!',
                    slug: 'awesome-post',
                    published: true,
                    content: 'This is the best post ever',
                    tags: ['featured', 'announcement'],
                });

            3. Insert the article in our MongoDB database

                await article.save();

17. What is Schema Validation in Mongoose?

    Schema validation is a key concept while developing any backend application. Sometimes clients provide inputs which are not according to our requirements. For such cases, we need to implement the validation of any information being inserted into the database.

    MongoDB provides the convenience of validating data while inserting a new entry into your database documents, such as:

    - Checking if an email is unique or not
    - Checking if a given value is in a particular range
    - Checking if the phone number is 10 digits or not.

            const studentSchema = mongoose.Schema({
                name: String,
                age: {
                    type: Number,
                    min: 15,
                    max: 30
                },
                batch :{
                    type: String,
                    required: true
                }
            })

18. How do you Delete a Document?

    - db.collection.deleteOne({ "\_id" : 3 })
    - db.collection.deleteMany({ category: "Technology" })

19. What is Sharding in MongoDB?

    Sharding is a method for distributing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations.

    Database systems with large data sets or high throughput applications can challenge the capacity of a single server.

20. What is the “__v” field in Mongoose?

    In Mongoose the “__v” field is the versionKey is a property set on each document when first created by Mongoose. This is a document inserted through the mongo shell in a collection and this key-value contains the internal revision of the document.
