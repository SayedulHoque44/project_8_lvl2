// buisness logic will be know only service fn

import { Student } from "../student.model";
import { TStudent } from "./student.interface";

// create student
const createStudentIntoDB = async (studentData: TStudent) => {
  // query will be implement in mongoose model

  // static method
  if (await Student.isUserExists(studentData.id)) {
    throw new Error("User Already Exists");
  }

  const result = await Student.create(studentData); // built in static method

  // coustom instance method
  // const student = new Student(studentData); // new instance
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error("User Already Exists");
  // const result = await student.save(); // built in instance method -> ata mongoose provide kore
  // }
  return result;
};
// get all student
const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
// get single std
const getSingleStudentFromDB = async (id: string) => {
  const res = await Student.findOne({ id });
  return res;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
