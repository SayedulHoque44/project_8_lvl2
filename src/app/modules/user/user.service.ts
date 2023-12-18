import httpStatus from "http-status";
import mongoose from "mongoose";
import config from "../../config";
import AppError from "../../error/AppError";
import { Admin } from "../Admin/admin.model";
import { TFaculty } from "../Faculty/faculty.interface";
import { FacultyModel } from "../Faculty/faculty.model";
import { AcademicDepartmentModel } from "../academicDepartment/academicDepartment.model";
import { TAcademicSemister } from "../academicSemister/academicSemister.Interface";
import { AcademicSemisterModel } from "../academicSemister/academicSemister.Model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";
import {
  generateAdminId,
  generateFacultyId,
  generateStudentId,
} from "./user.utils";

// create student
const createStudentIntoDB = async (password: string, paylode: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};
  // if admin not gaved pass then it will user default password
  userData.password = password || (config.default_pass as string);

  // set student role
  userData.role = "student";

  // find academic semister info
  const admissionSemester = await AcademicSemisterModel.findById(
    paylode.admissionSemester,
  );

  // --- Create Session
  const session = await mongoose.startSession();

  try {
    session.startTransaction(); // start session
    //   set mannually generate it
    userData.id = await generateStudentId(
      admissionSemester as TAcademicSemister,
    );

    //create a user (Transaction-1) --> isolated enviroment
    const newUser = await UserModel.create([userData], { session });

    //create a student
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Faild to create User!");
    }
    // set id,_id a user
    paylode.id = newUser[0].id;
    paylode.user = newUser[0]._id; // reference id

    // create Student (Transaction-2) --> isolated enviroment ([data],{sessionName})
    const newStudent = await Student.create([paylode], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Faild to create Student!");
    }

    // Success!
    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    // if not sucess abort session
    await session.abortTransaction();
    await session.endSession();
    throw new Error("Fail to create Student");
  }
};

// create faculty
const createFacultyIntoDB = async (password: string, paylode: TFaculty) => {
  const userData: Partial<TUser> = {};
  // password
  userData.password = password || (config.default_pass as string);
  // role
  userData.role = "faculty";
  // find gaven academic department info
  const academicDepartment = await AcademicDepartmentModel.findById(
    paylode.academicDepartment,
  );

  if (!academicDepartment) {
    throw new AppError(httpStatus.NOT_FOUND, "Academic Department not Found!");
  }

  const session = await mongoose.startSession();

  try {
    // start session
    session.startTransaction();
    // set user id
    userData.id = await generateFacultyId();

    // create new user (transaction-1)

    const newUser = await UserModel.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Faild to create New User!");
    }

    // set id + user(_id) to faculty
    paylode.id = newUser[0].id;
    paylode.user = newUser[0]._id; // reference id

    // create new faculty (transaction-2)
    const newFaculty = await FacultyModel.create([paylode], { session });

    if (!newFaculty.length) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "Faild to create New Faculty!",
      );
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};
// createStudent
const createAdminIntoDB = async (password: string, payload: TFaculty) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_pass as string);

  //set student role
  userData.role = "admin";

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateAdminId();

    // create a user (transaction-1)
    const newUser = await UserModel.create([userData], { session });

    //create a admin
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create admin");
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a admin (transaction-2)
    const newAdmin = await Admin.create([payload], { session });

    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create admin");
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const UserServices = {
  createStudentIntoDB,
  createFacultyIntoDB,
  createAdminIntoDB,
};
