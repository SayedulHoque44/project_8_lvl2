import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartmentModel } from "./academicDepartment.model";

// createAcademicDepartmentIntoDB
const createAcademicDepartmentIntoDB = async (paylode: TAcademicDepartment) => {
  const result = await AcademicDepartmentModel.create(paylode);
  return result;
};
// getAllAcademicDepartmeFromDB
const getAllAcademicDepartmentFromDB = async () => {
  const result = await AcademicDepartmentModel.find();
  return result;
};
// getAcademicDepartmentById
const getAcademicDepartmentById = async (id: string) => {
  const result = await AcademicDepartmentModel.findById(id);
  return result;
};
// getAcademicDepartmentById
const updateAcademicDepartmentById = async (
  id: string,
  paylode: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartmentModel.findByIdAndUpdate(id, paylode);
  return result;
};

// services
export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAcademicDepartmentById,
  getAllAcademicDepartmentFromDB,
  updateAcademicDepartmentById,
};
