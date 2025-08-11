import { Types } from "mongoose";

export interface TUser {
  id: string;
  email: string;
  role: "super-admin" | "admin" | "faculty" | "student";
  password: string;
  needsPasswordChange: boolean;
  status: "in-progress" | "blocked";
  isDeleted: boolean;
}
