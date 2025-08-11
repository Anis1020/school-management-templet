import { catchAsync } from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./services";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body
  );
  res.status(200).json({
    success: true,
    message: " AcademicSemester created successfully",
    data: result,
  });
});
const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB();
  res.status(200).json({
    success: true,
    message: "get all AcademicSemester",
    data: result,
  });
});
const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(
    id
  );
  res.status(200).json({
    success: true,
    message: "get single AcademicSemester",
    data: result,
  });
});
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterFromDB(
    id,
    req.body
  );
  res.status(200).json({
    success: true,
    message: "update AcademicSemester",
    data: result,
  });
});
const deleteAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(
    id
  );
  res.status(200).json({
    success: true,
    message: "delete AcademicSemester",
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
  deleteAcademicSemester,
};
