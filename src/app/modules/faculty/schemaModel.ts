import { model, Schema } from "mongoose";
import { TFaculty } from "./interface";

// Mongoose Schema
const FacultySchema = new Schema<TFaculty>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // or another related model
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    guardian: {
      name: { type: String, required: true },
      contactNo: { type: String, required: true },
      relation: { type: String, required: true },
    },
    localGuardian: {
      name: { type: String, required: true },
      contactNo: { type: String, required: true },
      relation: { type: String, required: true },
    },
    profilePicture: {
      type: String, // store image URL or path
    },
  },
  {
    timestamps: true,
  }
);

export const FacultyModel = model<TFaculty>("Faculty", FacultySchema);
