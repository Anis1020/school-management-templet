import { model, Schema } from "mongoose";
import { TAdmin } from "./interface";

// Mongoose Schema
const adminSchema = new Schema<TAdmin>(
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
      trim: true,
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
      trim: true,
    },
    presentAddress: {
      type: String,
      required: true,
      trim: true,
    },
    permanentAddress: {
      type: String,
      required: true,
      trim: true,
    },
    guardian: {
      name: { type: String, required: true, trim: true },
      contactNo: { type: String, required: true, trim: true },
      relation: { type: String, required: true, trim: true },
    },
    localGuardian: {
      name: { type: String, required: true, trim: true },
      contactNo: { type: String, required: true, trim: true },
      relation: { type: String, required: true, trim: true },
    },
    profilePicture: {
      type: String, // store image URL or path
    },
  },
  {
    timestamps: true,
  }
);

export const AdminModel = model<TAdmin>("Admin", adminSchema);
