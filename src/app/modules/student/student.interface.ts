// 1. Create an interface representing a document in MongoDB. --> 2 in student.model.ts (1 line)

import { Model } from "mongoose";

// user name Type (sub of Student)
export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
// Gurdian Type (sub of Student)
export type TGurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

// localGurdian Type (sub of Student)
export type TLocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

// Student type (Main Type)
export type TStudent = {
  id: string;
  name: TUserName;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  gurdian: TGurdian;
  localGurdian: TLocalGurdian;
  profileImg?: string;
  isActive: "active" | "blocked";
};

// coustom static -> for creating static method
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

// coustom instance -> for creating instance
// export type StudentMethod = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };
// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethod
// >;
