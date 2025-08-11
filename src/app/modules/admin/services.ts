import { TAdmin } from "./interface";
import { AdminModel } from "./schemaModel";

const getAllAdminFromDB = async () => {
  const result = await AdminModel.find();
  return result;
};
const getSingleAdminFromDB = async (id: string) => {
  const result = await AdminModel.findById(id);
  return result;
};
const updateAdminFromDB = async (id: string, payload: Partial<TAdmin>) => {
  const result = await AdminModel.findByIdAndUpdate(id);
  return result;
};
const deleteAdminFromDB = async (id: string) => {
  const result = await AdminModel.findByIdAndUpdate(id);
  return result;
};

export const AdminServices = {
  getAllAdminFromDB,
  getSingleAdminFromDB,
  updateAdminFromDB,
  deleteAdminFromDB,
};
