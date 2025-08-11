import { catchAsync } from "../../utils/catchAsync";
import { SemesterRegistrationServices } from "./services";

const createSemesterRegistration = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationServices.createSemesterRegistrationIntoDB(
      req.body
    );
  res.status(200).json({
    success: true,
    message: " SemesterRegistration created successfully",
    data: result,
  });
});
const getAllSemesterRegistration = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationServices.getAllSemesterRegistrationFromDB();
  res.status(200).json({
    success: true,
    message: "get all SemesterRegistration",
    data: result,
  });
});
const getSingleSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRegistrationServices.getSingleSemesterRegistrationFromDB(id);
  res.status(200).json({
    success: true,
    message: "get single SemesterRegistration",
    data: result,
  });
});
const updateSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRegistrationServices.updateSemesterRegistrationFromDB(
      id,
      req.body
    );
  res.status(200).json({
    success: true,
    message: "update SemesterRegistration",
    data: result,
  });
});
const deleteSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRegistrationServices.getSingleSemesterRegistrationFromDB(id);
  res.status(200).json({
    success: true,
    message: "delete SemesterRegistration",
    data: result,
  });
});

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistration,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
  deleteSemesterRegistration,
};
