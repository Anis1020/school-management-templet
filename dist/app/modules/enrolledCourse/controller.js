"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const services_1 = require("./services");
const createCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.CourseServices.createCourseIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: " Course created successfully",
        data: result,
    });
}));
const getAllCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.CourseServices.getAllCourseFromDB();
    res.status(200).json({
        success: true,
        message: "get all Course",
        data: result,
    });
}));
const getSingleCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.CourseServices.getSingleCourseFromDB(id);
    res.status(200).json({
        success: true,
        message: "get single Course",
        data: result,
    });
}));
const updateCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.CourseServices.updateCourseFromDB(id, req.body);
    res.status(200).json({
        success: true,
        message: "update Course",
        data: result,
    });
}));
const deleteCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.CourseServices.getSingleCourseFromDB(id);
    res.status(200).json({
        success: true,
        message: "delete Course",
        data: result,
    });
}));
exports.CourseController = {
    createCourse,
    getAllCourse,
    getSingleCourse,
    updateCourse,
    deleteCourse,
};
