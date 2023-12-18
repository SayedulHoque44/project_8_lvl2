import express from "express";
import validateRequest from "../../middlewares/validateReq";
import { academicFacultyControllers } from "./academicFaculty.controllers";
import { academicFacultyValidation } from "./academicFaculty.validation";

const router = express.Router();

// create academic-faculty
router.post(
  "/create-academic-faculty",
  validateRequest(academicFacultyValidation.createAcademicFacultyValiSchema),
  academicFacultyControllers.createAcademicFaculty,
);
// get all academic-faculty
router.get("/", academicFacultyControllers.getAllAcademicFaculty);
//get academic-faculty by id
router.get("/:facultyId", academicFacultyControllers.getAcademicFacultyById);
// update academic-faculty by id
router.patch(
  "/:facultyId",
  validateRequest(academicFacultyValidation.updateAcademicFacultyValiSchema),
  academicFacultyControllers.updateAcademicFacultyById,
);

export const AcademicFacultysRoutes = router;
