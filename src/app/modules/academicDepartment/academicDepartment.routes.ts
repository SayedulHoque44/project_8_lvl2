import express from "express";
import validateRequest from "../../middlewares/validateReq";
import { AcadmicDepartmentControllers } from "./academicDepartment.controllers";
import { AcademicDepartmentValidationSchemas } from "./academicDepartment.validaiton";

const router = express.Router();

// createAcademicDepartmentIntoDB
router.post(
  "/create-academic-department",
  // validateRequest(
  //   AcademicDepartmentValidationSchemas.createAcademicDepartmentVal,
  // ),
  AcadmicDepartmentControllers.createAcademicDepartment,
);
// getAllAcademicDepartmeFromDB
router.get("/", AcadmicDepartmentControllers.getAllAcademicDepartment);
// getAcademicDepartmentById
router.get(
  "/:departmentId",
  AcadmicDepartmentControllers.getAcademicDepartmentById,
);
// updateAcademicDepartmentById
router.patch(
  "/:departmentId",
  validateRequest(
    AcademicDepartmentValidationSchemas.updateAcademicDepartmentVal,
  ),
  AcadmicDepartmentControllers.updateAcademicDepartmentById,
);
export const AcademicDepartmentRoutes = router;
