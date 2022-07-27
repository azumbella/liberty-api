const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

mongoose.connect("mongodb://localhost:27017/Liberty").then(() => {
  console.log("Connected to database");
});

const studentRouter = require("./routes/studentRoutes");
const courseRouter = require("./routes/courseRoutes");
const paymnetRouter = require("./routes/paymentRoutes");
const examRouter = require("./routes/examRoutes");
const teacherRouter = require("./routes/teacherRoutes");
const enrollRouter = require("./routes/enrollRoutes");
app.use(cors());
app.use(express.json());

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/payments", paymnetRouter);
app.use("/api/v1/exams", examRouter);
app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/enrolls", enrollRouter);

module.exports = app;
