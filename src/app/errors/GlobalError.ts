import { NextFunction, Request, Response } from "express";

export const GlobalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(403).json({
    success: false,
    message: "something wen wrong",
  });
};
