import { model, Schema } from "mongoose";
import { TOfferedCourse } from "./interface";

// Mongoose Schema
const OfferedCourseSchema = new Schema<TOfferedCourse>(
  {
    semesterRegistration: {
      type: Schema.Types.ObjectId,
      ref: "OfferedCourse",
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: "AcademicDepartment",
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: "Faculty",
    },
    maxCapacity: {
      type: Number,
      required: true,
      trim: true,
    },
    section: {
      type: Number,
      required: true,
      trim: true,
    },
    // days: {
    //   type: String,
    //   required: true,
    //   enum: [],
    // },
    startDate: {
      type: String,
      required: true,
      trim: true,
    },
    endDate: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OfferedCourseModel = model<TOfferedCourse>(
  "OfferedCourse",
  OfferedCourseSchema
);
