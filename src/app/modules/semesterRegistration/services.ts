import { TSemesterRegistration } from "./interface";
import { SemesterRegistrationModel } from "./schemaModel";

const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration
) => {
  const result = await SemesterRegistrationModel.create(payload);
  return result;
};
const getAllSemesterRegistrationFromDB = async () => {
  const result = await SemesterRegistrationModel.find();
  return result;
};
const getSingleSemesterRegistrationFromDB = async (id: string) => {
  const result = await SemesterRegistrationModel.findById(id);
  return result;
};
const updateSemesterRegistrationFromDB = async (
  id: string,
  payload: Partial<TSemesterRegistration>
) => {
  const result = await SemesterRegistrationModel.findByIdAndUpdate(id);
  return result;
};
const deleteSemesterRegistrationFromDB = async (id: string) => {
  const result = await SemesterRegistrationModel.findByIdAndUpdate(id);
  return result;
};

export const SemesterRegistrationServices = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationFromDB,
  getSingleSemesterRegistrationFromDB,
  updateSemesterRegistrationFromDB,
  deleteSemesterRegistrationFromDB,
};
