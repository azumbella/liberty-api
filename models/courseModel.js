const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: ["true", "A course must have a name"],
  },
  courseBook: {
    type: String,
  },
  courseDuration: {
    type: String,
  },
  startDate: {
    type: Date,
    default: Date.now(),
  },
  students: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Student",
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
