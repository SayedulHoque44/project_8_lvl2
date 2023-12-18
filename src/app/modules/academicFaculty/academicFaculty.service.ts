import { TAcademicFaculty } from "./academicFaculty.Interface";
import { AcademicFacultyModel } from "./academicFaculty.Model";

// create Academic Faculty Into DB
const createAcademicFacultyIntoDB = async (paylode: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(paylode);
  return result;
};
// create Academic Faculty Into DB
const getllAllAcademicFacultyFromDB = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};
// get Academic Faculty By Id From DB
const getAcademicFacultyByIdFromDB = async (id: string) => {
  const result = await AcademicFacultyModel.findById(id);
  return result;
};
// update Academic Faculty By Id From DB
const updateAcademicFacultyByIdFromDB = async (
  id: string,
  paylode: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFacultyModel.findByIdAndUpdate(id, paylode);
  return result;
};

export const academicFacultyService = {
  createAcademicFacultyIntoDB,
  getllAllAcademicFacultyFromDB,
  getAcademicFacultyByIdFromDB,
  updateAcademicFacultyByIdFromDB,
};
