import { TAcademicSemester } from "./interface";
import { AcademicSemesterModel } from "./schemaModel";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  const result = await AcademicSemesterModel.create(payload);
  return result;
};
const getAllAcademicSemesterFromDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};
const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemesterModel.findById(id);
  return result;
};
const updateAcademicSemesterFromDB = async (
  id: string,
  payload: Partial<TAcademicSemester>
) => {
  const result = await AcademicSemesterModel.findByIdAndUpdate(id);
  return result;
};
const deleteAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemesterModel.findByIdAndUpdate(id);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterFromDB,
  deleteAcademicSemesterFromDB,
};
