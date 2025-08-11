import { catchAsync } from "../../utils/catchAsync";
import { AdminServices } from "./services";

const getAllAdmin = catchAsync(async (req, res) => {
  const result = await AdminServices.getAllAdminFromDB();
  res.status(200).json({
    success: true,
    message: "get all Admin",
    data: result,
  });
});
const getSingleAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.getSingleAdminFromDB(id);
  res.status(200).json({
    success: true,
    message: "get single Admin",
    data: result,
  });
});
const updateAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.updateAdminFromDB(id, req.body);
  res.status(200).json({
    success: true,
    message: "update Admin",
    data: result,
  });
});
const deleteAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.getSingleAdminFromDB(id);
  res.status(200).json({
    success: true,
    message: "delete Admin",
    data: result,
  });
});

export const AdminController = {
  getAllAdmin,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
};
