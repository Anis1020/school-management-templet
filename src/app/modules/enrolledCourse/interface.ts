import { Types } from "mongoose";

export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  credit: number;
  isDeleted: boolean;
  preRequisiteCourse: Types.ObjectId;
};
