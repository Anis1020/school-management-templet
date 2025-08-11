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
exports.SemesterRegistrationServices = void 0;
const schemaModel_1 = require("./schemaModel");
const createSemesterRegistrationIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_1.SemesterRegistrationModel.create(payload);
    return result;
});
const getAllSemesterRegistrationFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_1.SemesterRegistrationModel.find();
    return result;
});
const getSingleSemesterRegistrationFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_1.SemesterRegistrationModel.findById(id);
    return result;
});
const updateSemesterRegistrationFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_1.SemesterRegistrationModel.findByIdAndUpdate(id);
    return result;
});
const deleteSemesterRegistrationFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_1.SemesterRegistrationModel.findByIdAndUpdate(id);
    return result;
});
exports.SemesterRegistrationServices = {
    createSemesterRegistrationIntoDB,
    getAllSemesterRegistrationFromDB,
    getSingleSemesterRegistrationFromDB,
    updateSemesterRegistrationFromDB,
    deleteSemesterRegistrationFromDB,
};
