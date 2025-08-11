import { catchAsync } from "../../utils/catchAsync";
import { FacultyServices } from "./services";

const getAllFaculty = catchAsync(async (req, res) => {
  const result = await FacultyServices.getAllFacultyFromDB();
  res.status(200).json({
    success: true,
    message: "get all Faculty",
    data: result,
  });
});
const getSingleFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.getSingleFacultyFromDB(id);
  res.status(200).json({
    success: true,
    message: "get single Faculty",
    data: result,
  });
});
const updateFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.updateFacultyFromDB(id, req.body);
  res.status(200).json({
    success: true,
    message: "update Faculty",
    data: result,
  });
});
const deleteFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.getSingleFacultyFromDB(id);
  res.status(200).json({
    success: true,
    message: "delete Faculty",
    data: result,
  });
});

export const FacultyController = {
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
};
