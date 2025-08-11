import { catchAsync } from "../../utils/catchAsync";
import { UserServices } from "./services";

const createStudent = catchAsync(async (req, res) => {
  //   const { student } = req.body;
  const result = await UserServices.createStudentIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "student created successfully",
    data: result,
  });
});

const createFaculty = catchAsync(async (req, res) => {
  //   const { Faculty } = req.body;
  const result = await UserServices.createFacultyIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "Faculty created successfully",
    data: result,
  });
});
const createAdmin = catchAsync(async (req, res) => {
  //   const { Admin } = req.body;
  const result = await UserServices.createAdminIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});

export const UserController = {
  createStudent,
  createAdmin,
  createFaculty,
};
