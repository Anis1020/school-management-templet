"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyModel = void 0;
const mongoose_1 = require("mongoose");
// Mongoose Schema
const FacultySchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
exports.FacultyModel = (0, mongoose_1.model)("Faculty", FacultySchema);
