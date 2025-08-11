"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRegistrationModel = void 0;
const mongoose_1 = require("mongoose");
// Mongoose Schema
const SemesterRegistrationSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "AcademicSemester",
    },
}, {
    timestamps: true,
});
exports.SemesterRegistrationModel = (0, mongoose_1.model)("SemesterRegistration", SemesterRegistrationSchema);
