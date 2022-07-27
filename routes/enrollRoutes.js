const express = require("express");
const enrollmentController = require("./../controllers/enrollmentController");

const router = express.Router();

router
  .route("/")
  .get(enrollmentController.getAllEnrollments)
  .post(enrollmentController.createEnrollment);
router
  .route("/:id")
  .get(enrollmentController.getOneEnrollment)
  .patch(enrollmentController.updateEnrollment)
  .delete(enrollmentController.deleteEnrollment);

module.exports = router;
