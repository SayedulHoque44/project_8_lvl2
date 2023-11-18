// 1. Create an interface representing a document in MongoDB. --> 2 in student.model.ts (1 line)

// user name Type (sub of Student)
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
// Gurdian Type (sub of Student)
export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

// localGurdian Type (sub of Student)
export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

// Student type (Main Type)
export type Student = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  gurdian: Gurdian;
  localGurdian: LocalGurdian;
  profileImg?: string;
  isActive: "active" | "blocked";
};
