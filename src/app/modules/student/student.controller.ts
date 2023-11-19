import { Request, Response } from "express";
import { StudentServices } from "./student.service";

// controller will handle the request response,it has no idea about database,database logic will be in service.ts
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // will call service fn to send this data
    const result = await StudentServices.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: `Student is created succsesfully`,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
// get all student
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    // send response
    res.status(200).json({
      success: true,
      message: `Students are retrive succsesfully`,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
// get single std
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: `Student is retrive successfull`,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
