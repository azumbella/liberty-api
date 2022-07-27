const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: ["true", "A student firstName must be provided"],
    trim: true,
  },
  lastName: {
    type: String,
    required: ["true", "A student lastName must be provided"],
  },
  gender: {
    type: String,
  },
  birthPlace: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
    required: ["true", "A student lastName must be provided"],
  },
  emgPerName: {
    type: String,
  },
  emgPerPhone: {
    type: String,
  },
  testReq: {
    type: String,
  },
  testRes: {
    type: String,
  },
  regDate: {
    type: Date,
    default: Date.now(),
  },
  remarks: {
    type: String,
  },
  courses: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
    },
  ],
});

const Student = mongoose.model("Students", studentSchema);
module.exports = Student;
