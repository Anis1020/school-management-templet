import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserServices } from "./services";

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};
const createStudent = catchAsync(async (req, res) => {
  //   const { student } = req.body;
  const result = await UserServices.createStudentIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "student created successfully",
    data: result,
  });
});

export const UserController = {
  createStudent,
};
