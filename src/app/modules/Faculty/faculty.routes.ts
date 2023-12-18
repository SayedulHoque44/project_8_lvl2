import express from "express";
import validateRequest from "../../middlewares/validateReq";
import { facultyControllers } from "./faculty.controllers";
import { facultyValidations } from "./faculty.validation";

//
const router = express.Router();

// get all router
router.get("/", facultyControllers.getAllFaculty);
//
router.get("/:id", facultyControllers.getSingleFacultyById);
//
router.patch(
  "/:id",
  validateRequest(facultyValidations.updateFacultyValidation),
  facultyControllers.updateFaculty,
);
//
router.delete("/:id", facultyControllers.deleteFaculty);

//
export const facultyRoutes = router;
