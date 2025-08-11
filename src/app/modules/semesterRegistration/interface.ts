import { Types } from "mongoose";

export type TSemesterRegistration = {
  academicSemester: Types.ObjectId;
  status: "UPCOMING" | "GOING" | "ENDED";
  startDate: string;
  endDate: string;
  minCredit: number;
  maxCredit?: string;
};
