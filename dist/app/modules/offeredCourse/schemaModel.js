"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseModel = void 0;
const mongoose_1 = require("mongoose");
// Mongoose Schema
const OfferedCourseSchema = new mongoose_1.Schema({
    semesterRegistration: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "OfferedCourse",
    },
    academicFaculty: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "AcademicFaculty",
    },
    academicDepartment: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "AcademicDepartment",
    },
    course: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Course",
    },
    faculty: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
exports.OfferedCourseModel = (0, mongoose_1.model)("OfferedCourse", OfferedCourseSchema);
