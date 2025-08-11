"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModel = void 0;
const mongoose_1 = require("mongoose");
// Mongoose Schema
const CourseSchema = new mongoose_1.Schema({
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
    credits: {
        type: Number,
        required: true,
        trim: true,
    },
    preRequisiteCourse: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Course",
    },
}, {
    timestamps: true,
});
exports.CourseModel = (0, mongoose_1.model)("Course", CourseSchema);
