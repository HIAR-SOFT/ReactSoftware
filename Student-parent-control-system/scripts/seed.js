const mongoose = require('mongoose'); // importing Mongoose for MongoDB connection
const Student = require('../server/mongoose models/Student.js'); //importing the student model 

mongoose.set('bufferTimeoutMS', 30000); // Setting timeout for database operations to 30 seconds

// connection to the MongoDB database and start of seeding process
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => {
    console.log('Connected to MongoDB for seeding');
    seedDatabase(); // Calls the function to seed the database
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err); // Logs connection errors
    process.exit(1); // Exits the process with a failure code
  });


//Function: seedDatabase
//Purpse: Seeds the MongoDB database with initial data for the "students" collection.
//Input: directly accesses the database
//Output: performs database operations

const seedDatabase = async () => {
  try {
    const db = mongoose.connection.db; //accessing the database

    // check if the "students" collection exists
    const collections = await db.listCollections({ name: 'students' }).toArray();
    if (collections.length > 0) {
      console.log('Dropping existing collection: students');
      await db.collection('students').deleteMany(); // clear all documents in collection
      }

    // insert minimal seed data into the students collection
    await Student.create({
      studentId: '12345', //input: String (unique ID for the student)
      name: 'John Doe', //input: String (students name)
      attendance: [
        { date: '2024-01-01', status: 'Present' }, //input: array of objects (attendance records)
        { date: '2024-01-02', status: 'Absent' }, ],
      projects: [
        { title: 'Math Project', status: 'Completed' }, //input: array of objects (project records)
        { title: 'Science Fair', status: 'Pending' },],
      grades: [
        { subject: 'Math', grade: 85 }, //input: array of objects (grade records)
        { subject: 'History', grade: 78 }, ],});

    console.log('Database seeded successfully!'); //output:log message indicating success
  } catch (error) {
    console.error('Error seeding database:', error); //output:error message in case of failure
  } finally {
    mongoose.connection.close(); //closes the database connection
  }};

