exports.getOneEnrollment = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.getAllEnrollments = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.createEnrollment = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      students: req.body,
    },
  });
};
exports.updateEnrollment = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.deleteEnrollment = (req, res) => {
  res.status(204).json({
    status: "success",
  });
};
