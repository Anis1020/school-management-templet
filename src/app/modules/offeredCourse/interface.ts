import { Types } from "mongoose";

export type TOfferedCourse = {
  semesterRegistration: Types.ObjectId;
  academicFaculty: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  course: Types.ObjectId;
  faculty: Types.ObjectId;
  maxCapacity?: string;
  section: number;
  days: [];
  startDate: string;
  endDate: string;
};
