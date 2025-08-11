import { catchAsync } from "../../utils/catchAsync";
import { CourseServices } from "./services";

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourseIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: " Course created successfully",
    data: result,
  });
});
const getAllCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCourseFromDB();
  res.status(200).json({
    success: true,
    message: "get all Course",
    data: result,
  });
});
const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCourseFromDB(id);
  res.status(200).json({
    success: true,
    message: "get single Course",
    data: result,
  });
});
const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.updateCourseFromDB(id, req.body);
  res.status(200).json({
    success: true,
    message: "update Course",
    data: result,
  });
});
const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCourseFromDB(id);
  res.status(200).json({
    success: true,
    message: "delete Course",
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
