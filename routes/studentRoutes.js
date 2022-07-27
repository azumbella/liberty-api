const express = require("express");
const studentsController = require("./../controllers/studentController");

const router = express.Router();

router
  .route("/")
  .get(studentsController.getAllStudents)
  .post(studentsController.createStudent);

router.route("/stats").get(studentsController.getStudentStats);
router
  .route("/:id")
  .get(studentsController.getOneStudent)
  .patch(studentsController.updateStudent)
  .delete(studentsController.deleteStudent);

module.exports = router;
