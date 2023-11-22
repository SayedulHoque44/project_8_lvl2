// Req Res er jabotio kaj ba control ta hbe ai controller e
import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import StudentZodSchema from "./student.zod.validation";

// myCustom  ErrorResponse message fn
const ErrorResponse = (err: any) => {
  // checking is the error come from mongoose or validator package

  // its for mongoose uniqe validate
  if (err.code === 11000) {
    let fieldName;
    for (const i in err.keyValue) {
      fieldName = i;
    }
    return `${err.keyValue[fieldName as string]} already Exits!`;
  }

  //its for mongoose required validate
  if (err.errors) {
    let fieldName;
    for (const i in err.errors) {
      fieldName = i;
    }
    return err.errors[fieldName as string].message;
  }

  // "ZodError"
  if (err.name === "ZodError") {
    return "ZodError";
  }
};

// controller will handle the request response,it has no idea about database,database logic will be in service.ts
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // see joi/zod er maddome amra mongoose e hit korar agei validate kore pathai dite parteci error ta response kore

    //01 joi --validator
    // const { error } = StudentJOIValidationSchema.validate(studentData);
    // if (error) {
    //   res.status(400).json({
    //     success: false,
    //     message: error.details[0].message,
    //     data: error,
    //   });
    //   return;
    // }

    // 02 ZOD --validator (power -> zod catch e error ta pathai dey with message)
    const studentZodValidateData = StudentZodSchema.parse(studentData);
    // ZOD Summary: at first zod will read our data, if there any error that we seted that will throw to the catch, and also give piortiy required field than validate field

    // will call service fn to send this data
    const result = await StudentServices.createStudentIntoDB(
      studentZodValidateData,
    );

    // send response
    res.status(200).json({
      success: true,
      message: `Student is created succsesfully`,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || ErrorResponse(err),
      data: err,
    });
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
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: "operation faild! :(",
      data: err,
    });
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
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: "operation faild! :(",
      data: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
