const Student = require("./../models/studentModel");
const APIFeatures = require("./../utils/apiFeatures");

exports.getOneStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate("courses");
    res.status(200).send({
      status: "success",
      data: {
        student,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    // Excuting query
    const features = new APIFeatures(Student.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const student = await features.query;

    // Send Response
    res.status(200).send({
      status: "success",
      result: student.length,
      data: {
        student,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).send({
      status: "success",
      data: {
        student,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send({
      status: "success",
      data: {
        student,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).send({
      status: "success",
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error });
  }
};

exports.getStudentStats = async (req, res) => {
  try {
    const stats = await Student.aggregate([
      {
        $match: { testRes: { $gte: 0 } },
      },
      {
        $group: {
          _id: null,
          maxScore: { $max: "$testRes" },
        },
      },
    ]);
    res.status(200).send({
      status: "success",
      data: {
        stats,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error });
  }
};
