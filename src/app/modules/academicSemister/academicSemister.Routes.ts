import express from "express";
import validateRequest from "../../middlewares/validateReq";
import { AcademicSemisterControllers } from "./academicSemister.Controllers";
import { AcademicSemisterZodValidation } from "./academicSemister.validation";

const router = express.Router();

// create single academic semister
router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemisterZodValidation.creaetAcademicSemisterValidation,
  ),
  AcademicSemisterControllers.createAcademicSemester,
);
// get all academic semister
router.get("/", AcademicSemisterControllers.getAllAcademicSemister);
// get academic semister by id
router.get("/:semisterId", AcademicSemisterControllers.getAcademicSemisterById);
// update academic semister by id
router.patch(
  "/:semisterId",
  validateRequest(
    AcademicSemisterZodValidation.updateAcademicSemisterValidation,
  ),
  AcademicSemisterControllers.updateAcademicSemisterByID,
);

export const AcademicSemisterRoutes = router;
