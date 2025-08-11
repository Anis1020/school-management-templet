import { model, Schema } from "mongoose";
import { TSemesterRegistration } from "./interface";

// Mongoose Schema
const SemesterRegistrationSchema = new Schema<TSemesterRegistration>(
  {
    status: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
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
    minCredit: {
      type: Number,
      required: true,
      trim: true,
    },
    maxCredit: {
      type: Number,
      required: true,
      trim: true,
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: "AcademicSemester",
    },
  },
  {
    timestamps: true,
  }
);

export const SemesterRegistrationModel = model<TSemesterRegistration>(
  "SemesterRegistration",
  SemesterRegistrationSchema
);
