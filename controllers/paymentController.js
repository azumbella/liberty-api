exports.getOnePayment = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.getAllPayments = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.createPayment = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      students: req.body,
    },
  });
};
exports.updatePayment = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.deletePayment = (req, res) => {
  res.status(204).json({
    status: "success",
  });
};
