import { catchAsync } from "../../utils/catchAsync";
import { StudentServices } from "./services";

const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB();
  res.status(200).json({
    success: true,
    message: "get all student",
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(id);
  res.status(200).json({
    success: true,
    message: "get single student",
    data: result,
  });
});
const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.updateStudentFromDB(id, req.body);
  res.status(200).json({
    success: true,
    message: "update student",
    data: result,
  });
});
const deleteStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(id);
  res.status(200).json({
    success: true,
    message: "delete student",
    data: result,
  });
});

export const StudentController = {
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
