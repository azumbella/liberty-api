exports.getOneExam = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.getAllExams = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.createExam = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      students: req.body,
    },
  });
};
exports.updateExam = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.deleteExam = (req, res) => {
  res.status(204).json({
    status: "success",
  });
};
