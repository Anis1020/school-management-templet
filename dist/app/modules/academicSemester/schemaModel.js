"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterModel = void 0;
const mongoose_1 = require("mongoose");
const constAndUtils_1 = require("./constAndUtils");
// Mongoose Schema
const academicSemesterSchema = new mongoose_1.Schema({
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
        enum: constAndUtils_1.Months,
        trim: true,
    },
    endMonth: {
        type: String,
        required: true,
        enum: constAndUtils_1.Months,
        trim: true,
    },
}, {
    timestamps: true,
});
exports.AcademicSemesterModel = (0, mongoose_1.model)("AcademicSemester", academicSemesterSchema);
