import mongoose from "mongoose";
import config from "../../config";
import { TStudent } from "../student/interface";
import { StudentModel } from "../student/schemaModel";
import { TUser } from "./interface";
import { UserModel } from "./schemaModel";

const createStudentIntoDB = async (payload: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.email = payload.email;
  userData.role = "student";
  userData.password = config.default_pass;
  userData.id = "1234";

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const newUser = await UserModel.create([userData], { session });
    if (!newUser.length) {
      throw new Error("Fail to create user");
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;
    const newStudent = await StudentModel.create([payload], { session });
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("Fail to create user or student");
  }
};

export const UserServices = {
  createStudentIntoDB,
};
