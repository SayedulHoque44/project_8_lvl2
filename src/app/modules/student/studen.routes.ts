// routing handle
import express from "express";
import validateRequest from "../../middlewares/validateReq";
import { StudentControllers } from "./student.controller";
import { studentValidationSchema } from "./student.zod.validation";

// create Route from express
const router = express.Router();

// get all std
router.get("/", StudentControllers.getAllStudent);
// get single std
router.get("/:id", StudentControllers.getSingleStudent);
// delete single std
router.delete("/:id", StudentControllers.deleteSingleStudent);
// update single std
router.patch(
  "/:id",
  validateRequest(studentValidationSchema.updateStudentZodSchema),
  StudentControllers.updateStudent,
);

// for app.ts
export const StudentRoutes = router;
