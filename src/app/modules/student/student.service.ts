// buisness logic will be know only service fn

import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

// create student
const createStudentIntoDB = async (student: Student) => {
  // query will be implement in mongoose model
  const result = await StudentModel.create(student);
  return result;
};
// get all student
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
// get single std
const getSingleStudentFromDB = async (id: string) => {
  const res = await StudentModel.findOne({ id });
  return res;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
