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

export const UserController = {
  createStudent,
};
