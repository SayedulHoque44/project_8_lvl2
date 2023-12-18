import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicFacultyService } from "./academicFaculty.service";

// createAcademicFaculty
const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyService.createAcademicFacultyIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty created successfully!",
    data: result,
  });
});
// getAllAcademicFaculty
const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyService.getllAllAcademicFacultyFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Facultys retrived successfully!",
    data: result,
  });
});
// getAcademicFacultyById
const getAcademicFacultyById = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await academicFacultyService.getAcademicFacultyByIdFromDB(facultyId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty retrived successfully!",
    data: result,
  });
});
// getAcademicFacultyById
const updateAcademicFacultyById = catchAsync(async (req, res) => {
  const { params, body } = req;
  const result = await academicFacultyService.updateAcademicFacultyByIdFromDB(
    params.facultyId,
    body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty updated successfully!",
    data: result,
  });
});

export const academicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getAcademicFacultyById,
  updateAcademicFacultyById,
};
