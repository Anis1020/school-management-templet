import { TStudent } from "./interface";
import { StudentModel } from "./schemaModel";

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findById(id);
  return result;
};
const updateStudentFromDB = async (id: string, payload: Partial<TStudent>) => {
  const result = await StudentModel.findByIdAndUpdate(id);
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.findByIdAndUpdate(id);
  return result;
};

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updateStudentFromDB,
  deleteStudentFromDB,
};
