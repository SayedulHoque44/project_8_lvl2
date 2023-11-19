// 2. Create a Schema corresponding to the document interface. --> next (create model) -> line 85
import { Schema, model } from "mongoose";
import {
  Gurdian,
  LocalGurdian,
  Student,
  UserName,
} from "./student/student.interface";

/*
// Note to be down ->
1. string mongoose e String capital letter S
2. mongoose let us as a gurd of uncontrolled data input 
3. mongoose type declared in this like prps:{type:T}
4.eNum used for preDefinded value or as like type of union

*/

// sub userNameschema of StudentSchema --> UserName from sub interface
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});
// sub gurdianSchema of StudentSchema --> Gurdian from sub interface
const gurdianSchema = new Schema<Gurdian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});
// sub localGurdianSchema of StudentSchema--> LocalGurdian from sub interface
const localGurdianSchema = new Schema<LocalGurdian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Main StudentSchema
const StudentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ["male", "female"],
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  profileImg: String, // we can use Type also like this if dont have any extra property as like requied
  isActive: ["active", "blocked"],
});

// 3. Create a Model.
/*
1. modelName = model<MainType>('DocName', provide schema)
2. modelName and DocName should be same
*/
export const StudentModel = model<Student>("Student", StudentSchema);
