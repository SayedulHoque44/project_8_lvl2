// routing handle
import express from "express";
import { StudentControllers } from "./student.controller";

// create Route from express
const router = express.Router();

//will call controller fn
router.post("/create-student", StudentControllers.createStudent);
// get all std
router.get("/", StudentControllers.getAllStudent);
// get all std
router.get("/:studentId", StudentControllers.getSingleStudent);

// for app.ts
export const StudentRoutes = router;
