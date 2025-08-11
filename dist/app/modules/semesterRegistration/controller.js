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
exports.SemesterRegistrationController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const services_1 = require("./services");
const createSemesterRegistration = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.SemesterRegistrationServices.createSemesterRegistrationIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: " SemesterRegistration created successfully",
        data: result,
    });
}));
const getAllSemesterRegistration = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.SemesterRegistrationServices.getAllSemesterRegistrationFromDB();
    res.status(200).json({
        success: true,
        message: "get all SemesterRegistration",
        data: result,
    });
}));
const getSingleSemesterRegistration = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.SemesterRegistrationServices.getSingleSemesterRegistrationFromDB(id);
    res.status(200).json({
        success: true,
        message: "get single SemesterRegistration",
        data: result,
    });
}));
const updateSemesterRegistration = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.SemesterRegistrationServices.updateSemesterRegistrationFromDB(id, req.body);
    res.status(200).json({
        success: true,
        message: "update SemesterRegistration",
        data: result,
    });
}));
const deleteSemesterRegistration = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.SemesterRegistrationServices.getSingleSemesterRegistrationFromDB(id);
    res.status(200).json({
        success: true,
        message: "delete SemesterRegistration",
        data: result,
    });
}));
exports.SemesterRegistrationController = {
    createSemesterRegistration,
    getAllSemesterRegistration,
    getSingleSemesterRegistration,
    updateSemesterRegistration,
    deleteSemesterRegistration,
};
