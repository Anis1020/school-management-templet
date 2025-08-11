import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./interface";
import { Months } from "./constAndUtils";

// Mongoose Schema
const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: ["summer", "fall", "spring"],
      required: true,
      trim: true,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: ["01", "02", "03"],
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
      trim: true,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicSemesterModel = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
