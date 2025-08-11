import { TOfferedCourse } from "./interface";
import { OfferedCourseModel } from "./schemaModel";

const createOfferedCourseIntoDB = async (payload: TOfferedCourse) => {
  const result = await OfferedCourseModel.create(payload);
  return result;
};
const getAllOfferedCourseFromDB = async () => {
  const result = await OfferedCourseModel.find();
  return result;
};
const getSingleOfferedCourseFromDB = async (id: string) => {
  const result = await OfferedCourseModel.findById(id);
  return result;
};
const updateOfferedCourseFromDB = async (
  id: string,
  payload: Partial<TOfferedCourse>
) => {
  const result = await OfferedCourseModel.findByIdAndUpdate(id);
  return result;
};
const deleteOfferedCourseFromDB = async (id: string) => {
  const result = await OfferedCourseModel.findByIdAndUpdate(id);
  return result;
};

export const OfferedCourseServices = {
  createOfferedCourseIntoDB,
  getAllOfferedCourseFromDB,
  getSingleOfferedCourseFromDB,
  updateOfferedCourseFromDB,
  deleteOfferedCourseFromDB,
};
