const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');// middleware for enabling Cross-Origin Resource Sharing
const bodyParser = require('body-parser');//middleware to parse request bodies
const Student = require('./mongoose models/Student.js'); // Adjust the path to the model


const app = express();


app.use(cors()); // enable cors to allow requests from different origins
app.use(bodyParser.json()); // parse incoming request bodies as json

//Name: mongoose.connect
//Purpse: Establishes a connection to the MongoDB database.
//Input: Database connection string (String)
//Output: Promise (logs success message on success, error message on failure)
mongoose
  .connect('mongodb://127.0.0.1:27017/studentDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

//Name: app.get('/student/:id')
//Purpse: returns a specific students data from the database using their ID.
//Input: request object with the student ID in the URL parameters (String)
//Output: response object with JSON data of the student (Object) or error message
app.get('/student/:id', async(req,res) => {
    try {
      console.log('Requested Student ID:', req.params.id); // Debugging log
      const student = await Student.findOne({ studentId: req.params.id });
      if (!student) {
        console.log('Student not found'); // Debugging log
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json(student);
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
//Name: app.listen
//Purpse: Starts the Express server and listens for incoming requests on a specified port.
//Input: Port number (Number)
//Output: Console log confirming the server is running (String)
const PORT = 5000;
app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`);});

