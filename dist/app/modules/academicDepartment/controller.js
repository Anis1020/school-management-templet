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
exports.AcademicDepartmentController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const services_1 = require("./services");
const createAcademicDepartment = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: " AcademicDepartment created successfully",
        data: result,
    });
}));
const getAllAcademicDepartment = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.AcademicDepartmentServices.getAllAcademicDepartmentFromDB();
    res.status(200).json({
        success: true,
        message: "get all AcademicDepartment",
        data: result,
    });
}));
const getSingleAcademicDepartment = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(id);
    res.status(200).json({
        success: true,
        message: "get single AcademicDepartment",
        data: result,
    });
}));
const updateAcademicDepartment = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.AcademicDepartmentServices.updateAcademicDepartmentFromDB(id, req.body);
    res.status(200).json({
        success: true,
        message: "update AcademicDepartment",
        data: result,
    });
}));
const deleteAcademicDepartment = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(id);
    res.status(200).json({
        success: true,
        message: "delete AcademicDepartment",
        data: result,
    });
}));
exports.AcademicDepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateAcademicDepartment,
    deleteAcademicDepartment,
};
