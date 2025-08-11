import { catchAsync } from "../../utils/catchAsync";
import { AcademicDepartmentServices } from "./services";

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: " AcademicDepartment created successfully",
    data: result,
  });
});
const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentFromDB();
  res.status(200).json({
    success: true,
    message: "get all AcademicDepartment",
    data: result,
  });
});
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(id);
  res.status(200).json({
    success: true,
    message: "get single AcademicDepartment",
    data: result,
  });
});
const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicDepartmentServices.updateAcademicDepartmentFromDB(
      id,
      req.body
    );
  res.status(200).json({
    success: true,
    message: "update AcademicDepartment",
    data: result,
  });
});
const deleteAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(id);
  res.status(200).json({
    success: true,
    message: "delete AcademicDepartment",
    data: result,
  });
});

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment,
};
