1. Which is the command that helps in processing the data?

2. What is the command to sort the documents in ascending and descending value?

   Ascending Order: db.Collection_Name.sort({ field_name: 1 })
   Descending Order: db.Collection_Name.sort({ field_name: -1 })

3. Which command is used to create a collection in MongoDB?

   - db.createCollection("Collection_Name")

4. How to create and restore a backup?

   Create Backup

   - mongodump | OR
   - mongodump --db databaseName --collection collectionName | OR
   - mongodump –db databaseName –collection collectionName –out c:\backup

   Restore Backup

   - mongorestore dump | OR
   - mongorestore –db databaseName –collection collectionName directory/collectionName.bson

5. How to create a new DATABASE?

   - use databaseName

6. How do you perform CRUD operations in MongoDB?

   - Create Operations
     -- db.collection.insertOne()
     -- db.collection.insertMany()

7. What is BSON?
8. In what ways is MongoDB better than MySQL?
9. What makes MongoDB the best?
10. Which syntax is used to drop a collection in MongoDB?
11. What is the use of the db command?
12. What is the command to find the single record from the collection?
13. Can MongoDB replace MySQL?
14. MongoClient and Mongoose
15. What is MongoClient?
16. What is Mongoose?
17. To start with any query using mongoose, what are the steps that you have follow?
18. What is Schema Validation in Mongoose?
19. How do you Delete a Document?
20. What is Sharding in MongoDB?
21. What is the “\_\_v” field in Mongoose?
