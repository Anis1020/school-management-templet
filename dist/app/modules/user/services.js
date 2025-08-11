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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../config"));
const schemaModel_1 = require("../student/schemaModel");
const schemaModel_2 = require("./schemaModel");
const schemaModel_3 = require("../faculty/schemaModel");
const schemaModel_4 = require("../admin/schemaModel");
const createStudentIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.email = payload.email;
    userData.role = "student";
    userData.password = config_1.default.default_pass;
    userData.id = "1234";
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const newUser = yield schemaModel_2.UserModel.create([userData], { session });
        if (!newUser.length) {
            throw new Error("Fail to create user");
        }
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        const newStudent = yield schemaModel_1.StudentModel.create([payload], { session });
        yield session.commitTransaction();
        yield session.endSession();
        return newStudent;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error("Fail to create user or student");
    }
});
const createFacultyIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.email = payload.email;
    userData.role = "faculty";
    userData.password = config_1.default.default_pass;
    userData.id = "1234";
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const newUser = yield schemaModel_2.UserModel.create([userData], { session });
        if (!newUser.length) {
            throw new Error("Fail to create user");
        }
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        const newFaculty = yield schemaModel_3.FacultyModel.create([payload], { session });
        yield session.commitTransaction();
        yield session.endSession();
        return newFaculty;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error("Fail to create user or Faculty");
    }
});
const createAdminIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.email = payload.email;
    userData.role = "admin";
    userData.password = config_1.default.default_pass;
    userData.id = "1234";
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const newUser = yield schemaModel_2.UserModel.create([userData], { session });
        if (!newUser.length) {
            throw new Error("Fail to create user");
        }
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        const newAdmin = yield schemaModel_4.AdminModel.create([payload], { session });
        yield session.commitTransaction();
        yield session.endSession();
        return newAdmin;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error("Fail to create user or Admin");
    }
});
exports.UserServices = {
    createStudentIntoDB,
    createFacultyIntoDB,
    createAdminIntoDB,
};
