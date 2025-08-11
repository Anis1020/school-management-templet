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
exports.OfferedCourseController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const services_1 = require("./services");
const createOfferedCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.OfferedCourseServices.createOfferedCourseIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: " OfferedCourse created successfully",
        data: result,
    });
}));
const getAllOfferedCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.OfferedCourseServices.getAllOfferedCourseFromDB();
    res.status(200).json({
        success: true,
        message: "get all OfferedCourse",
        data: result,
    });
}));
const getSingleOfferedCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.OfferedCourseServices.getSingleOfferedCourseFromDB(id);
    res.status(200).json({
        success: true,
        message: "get single OfferedCourse",
        data: result,
    });
}));
const updateOfferedCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.OfferedCourseServices.updateOfferedCourseFromDB(id, req.body);
    res.status(200).json({
        success: true,
        message: "update OfferedCourse",
        data: result,
    });
}));
const deleteOfferedCourse = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.OfferedCourseServices.getSingleOfferedCourseFromDB(id);
    res.status(200).json({
        success: true,
        message: "delete OfferedCourse",
        data: result,
    });
}));
exports.OfferedCourseController = {
    createOfferedCourse,
    getAllOfferedCourse,
    getSingleOfferedCourse,
    updateOfferedCourse,
    deleteOfferedCourse,
};
