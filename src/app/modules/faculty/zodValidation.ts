import { z } from "zod";
import { Types } from "mongoose";

export const createFacultyValidationSchema = z.object({
  body: z.object({
    user: z.string().refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid ObjectId",
    }),
    name: z.string().min(1, "Name is required"),
    gender: z.enum(["male", "female", "other"], {
      message: "Gender is required",
    }),
    dateOfBirth: z.string({ message: "Date of birth is required" }),
    email: z.string(),
    contactNo: z.string().min(1, "Contact number is required"),
    emergencyContactNo: z
      .string()
      .min(1, "Emergency contact number is required"),
    presentAddress: z.string().min(1, "Present address is required"),
    permanentAddress: z.string().min(1, "Permanent address is required"),
    guardian: z.object({
      name: z.string().min(1, "Guardian name is required"),
      contactNo: z.string().min(1, "Guardian contact number is required"),
      relation: z.string().min(1, "Guardian relation is required"),
    }),
    localGuardian: z.object({
      name: z.string().min(1, "Local guardian name is required"),
      contactNo: z.string().min(1, "Local guardian contact number is required"),
      relation: z.string().min(1, "Local guardian relation is required"),
    }),
    profilePicture: z.string().optional(),
  }),
});

export const updateFacultyValidationSchema = z.object({
  body: z.object({
    user: z
      .string()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: "Invalid ObjectId",
      })
      .optional(),
    name: z.string().min(1, "Name is required").optional(),
    gender: z
      .enum(["male", "female", "other"], {
        message: "Gender is required",
      })
      .optional(),
    dateOfBirth: z.string({ message: "Date of birth is required" }).optional(),
    email: z.string().optional(),
    contactNo: z.string().min(1, "Contact number is required").optional(),
    emergencyContactNo: z
      .string()
      .min(1, "Emergency contact number is required")
      .optional(),
    presentAddress: z.string().min(1, "Present address is required").optional(),
    permanentAddress: z
      .string()
      .min(1, "Permanent address is required")
      .optional(),
    guardian: z
      .object({
        name: z.string().min(1, "Guardian name is required").optional(),
        contactNo: z
          .string()
          .min(1, "Guardian contact number is required")
          .optional(),
        relation: z.string().min(1, "Guardian relation is required").optional(),
      })
      .optional(),
    localGuardian: z
      .object({
        name: z.string().min(1, "Local guardian name is required").optional(),
        contactNo: z
          .string()
          .min(1, "Local guardian contact number is required")
          .optional(),
        relation: z
          .string()
          .min(1, "Local guardian relation is required")
          .optional(),
      })
      .optional(),
    profilePicture: z.string().optional(),
  }),
});

export const FacultyValidations = {
  createFacultyValidationSchema,
  updateFacultyValidationSchema,
};
