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
exports.UserController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const services_1 = require("./services");
const createStudent = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const { student } = req.body;
    const result = yield services_1.UserServices.createStudentIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "student created successfully",
        data: result,
    });
}));
const createFaculty = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const { Faculty } = req.body;
    const result = yield services_1.UserServices.createFacultyIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "Faculty created successfully",
        data: result,
    });
}));
const createAdmin = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const { Admin } = req.body;
    const result = yield services_1.UserServices.createAdminIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "Admin created successfully",
        data: result,
    });
}));
exports.UserController = {
    createStudent,
    createAdmin,
    createFaculty,
};
