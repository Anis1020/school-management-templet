"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentValidations = exports.updateStudentValidationSchema = exports.createStudentValidationSchema = void 0;
const zod_1 = require("zod");
const mongoose_1 = require("mongoose");
exports.createStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z.string().refine((val) => mongoose_1.Types.ObjectId.isValid(val), {
            message: "Invalid ObjectId",
        }),
        name: zod_1.z.string().min(1, "Name is required"),
        gender: zod_1.z.enum(["male", "female", "other"], {
            message: "Gender is required",
        }),
        dateOfBirth: zod_1.z.string({ message: "Date of birth is required" }),
        email: zod_1.z.string(),
        contactNo: zod_1.z.string().min(1, "Contact number is required"),
        emergencyContactNo: zod_1.z
            .string()
            .min(1, "Emergency contact number is required"),
        presentAddress: zod_1.z.string().min(1, "Present address is required"),
        permanentAddress: zod_1.z.string().min(1, "Permanent address is required"),
        guardian: zod_1.z.object({
            name: zod_1.z.string().min(1, "Guardian name is required"),
            contactNo: zod_1.z.string().min(1, "Guardian contact number is required"),
            relation: zod_1.z.string().min(1, "Guardian relation is required"),
        }),
        localGuardian: zod_1.z.object({
            name: zod_1.z.string().min(1, "Local guardian name is required"),
            contactNo: zod_1.z.string().min(1, "Local guardian contact number is required"),
            relation: zod_1.z.string().min(1, "Local guardian relation is required"),
        }),
        profilePicture: zod_1.z.string().optional(),
    }),
});
exports.updateStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z
            .string()
            .refine((val) => mongoose_1.Types.ObjectId.isValid(val), {
            message: "Invalid ObjectId",
        })
            .optional(),
        name: zod_1.z.string().min(1, "Name is required").optional(),
        gender: zod_1.z
            .enum(["male", "female", "other"], {
            message: "Gender is required",
        })
            .optional(),
        dateOfBirth: zod_1.z.string({ message: "Date of birth is required" }).optional(),
        email: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().min(1, "Contact number is required").optional(),
        emergencyContactNo: zod_1.z
            .string()
            .min(1, "Emergency contact number is required")
            .optional(),
        presentAddress: zod_1.z.string().min(1, "Present address is required").optional(),
        permanentAddress: zod_1.z
            .string()
            .min(1, "Permanent address is required")
            .optional(),
        guardian: zod_1.z
            .object({
            name: zod_1.z.string().min(1, "Guardian name is required").optional(),
            contactNo: zod_1.z
                .string()
                .min(1, "Guardian contact number is required")
                .optional(),
            relation: zod_1.z.string().min(1, "Guardian relation is required").optional(),
        })
            .optional(),
        localGuardian: zod_1.z
            .object({
            name: zod_1.z.string().min(1, "Local guardian name is required").optional(),
            contactNo: zod_1.z
                .string()
                .min(1, "Local guardian contact number is required")
                .optional(),
            relation: zod_1.z
                .string()
                .min(1, "Local guardian relation is required")
                .optional(),
        })
            .optional(),
        profilePicture: zod_1.z.string().optional(),
    }),
});
exports.StudentValidations = {
    createStudentValidationSchema: exports.createStudentValidationSchema,
    updateStudentValidationSchema: exports.updateStudentValidationSchema,
};
