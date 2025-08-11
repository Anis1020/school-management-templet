import { TCourse } from "./interface";
import { CourseModel } from "./schemaModel";

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await CourseModel.create(payload);
  return result;
};
const getAllCourseFromDB = async () => {
  const result = await CourseModel.find();
  return result;
};
const getSingleCourseFromDB = async (id: string) => {
  const result = await CourseModel.findById(id);
  return result;
};
const updateCourseFromDB = async (id: string, payload: Partial<TCourse>) => {
  const result = await CourseModel.findByIdAndUpdate(id);
  return result;
};
const deleteCourseFromDB = async (id: string) => {
  const result = await CourseModel.findByIdAndUpdate(id);
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCourseFromDB,
  getSingleCourseFromDB,
  updateCourseFromDB,
  deleteCourseFromDB,
};
