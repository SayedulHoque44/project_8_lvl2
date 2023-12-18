import express from "express";
import validateRequest from "../../middlewares/validateReq";
import { AdminValidations } from "../Admin/admin.validation";
import { facultyValidations } from "../Faculty/faculty.validation";
import { studentValidationSchema } from "../student/student.zod.validation";
import { UserControllers } from "./user.controller";

//
const router = express.Router();

//create student
router.post(
  "/create-student",
  validateRequest(studentValidationSchema.StudentZodSchema),
  UserControllers.createStudent,
);
//create faculty
router.post(
  "/create-faculty",
  validateRequest(facultyValidations.createFacultyValidation),
  UserControllers.createFaculty,
);
// create student
router.post(
  "/create-admin",
  validateRequest(AdminValidations.createAdminValidationSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
