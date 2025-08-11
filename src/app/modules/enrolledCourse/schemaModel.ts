import { model, Schema } from "mongoose";
import { TCourse } from "./interface";

// Mongoose Schema
const CourseSchema = new Schema<TCourse>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    prefix: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: Number,
      required: true,
      trim: true,
    },
    credit: {
      type: Number,
      required: true,
      trim: true,
    },
    preRequisiteCourse: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CourseModel = model<TCourse>("Course", CourseSchema);
