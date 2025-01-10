const mongoose = require('mongoose');

// define student schema
const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true, // ensures no duplicate student ids
},
  name: {
    type: String,
    required: true,},
  attendance: [
    {date: {
        type: String,
        required: true,},
      status: {
        type: String,
        required: true,
        enum: ['Present', 'Absent'],
      },},],
  projects: [
    {title: {
        type: String,
        required: true,},
      status: {
        type: String,
        required: true,
        enum: ['Completed', 'Pending'],
      }, },],
  grades: [
    {
      subject: {
        type: String,
        required: true,
      },
      grade: {
        type: Number,
        required: true,
        min: 0, // grade shouldnt be negative
        max: 100, //grade shouldnt exceed 100
      },},],});

// creates student model
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
