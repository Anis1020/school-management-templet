import { Types } from "mongoose";

// User Interface
export type TAdmin = {
  id: string;
  user: Types.ObjectId; // reference to another model (like Auth or Account)
  name: string;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  email: string;
  contactNo: string;

  presentAddress: string;
  permanentAddress: string;
  guardian: {
    name: string;
    contactNo: string;
    relation: string;
  };
  localGuardian: {
    name: string;
    contactNo: string;
    relation: string;
  };
  profilePicture?: string; // URL or file path
};
