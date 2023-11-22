import { z } from "zod";

// Zod schema for UserName
const UserNameZodSchema = z.object(
  {
    firstName: z
      .string()
      .min(1, { message: "First name is required!" })
      .max(20, { message: "First name must be less than 20 characters" })
      .refine(
        value => {
          const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
          return firstNameStr === value;
        },
        { message: "First name must be in capitalize format" },
      ),
    middleName: z.string(),
    lastName: z
      .string()
      .min(1, { message: "Last name is required!" })
      .refine(value => /^[A-Za-z]+$/.test(value), {
        message: "Field must contain only alphabetic characters",
      }),
  },
  { required_error: "User Name Must be required" },
);

// Zod schema for Gurdian
const GurdianZodSchema = z.object({
  fatherName: z.string().min(1, { message: "Father name is required!" }),
  fatherOccupation: z
    .string()
    .min(1, { message: "Father occupation is required!" }),
  fatherContactNo: z
    .string()
    .min(1, { message: "Father contact number is required!" }),
  motherName: z.string().min(1, { message: "Mother name is required!" }),
  motherOccupation: z
    .string()
    .min(1, { message: "Mother occupation is required!" }),
  motherContactNo: z
    .string()
    .min(1, { message: "Mother contact number is required!" }),
});

// Zod schema for LocalGurdian
const LocalGurdianZodSchema = z.object(
  {
    name: z.string().min(1, { message: "Local gurdian name is required!" }),
    occupation: z
      .string()
      .min(1, { message: "Local gurdian occupation is required!" }),
    contactNo: z
      .string()
      .min(1, { message: "Local gurdian contact number is required!" }),
    address: z
      .string()
      .min(1, { message: "Local gurdian address is required!" }),
  },
  { required_error: "Local Gudian field must be required" },
);

// Zod schema for Student
const StudentZodSchema = z.object({
  id: z.string({
    required_error: "Student ID is required!",
  }),
  // .min(1, { message: "Student ID is required!" }),
  name: UserNameZodSchema,
  gender: z.enum(["male", "female", "other"]),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required!" }),
  email: z
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Invalid email format" }),
  contactNo: z.string().min(1, { message: "Contact number is required!" }),
  emergencyContactNo: z
    .string()
    .min(1, { message: "Emergency contact number is required!" }),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  presentAddress: z
    .string()
    .min(1, { message: "Present address is required!" }),
  permanentAddress: z
    .string()
    .min(1, { message: "Permanent address is required!" }),
  gurdian: GurdianZodSchema,
  localGurdian: LocalGurdianZodSchema.required(),
  profileImg: z.string().optional(),
  isActive: z.enum(["active", "blocked"]).default("active"),
});

export default StudentZodSchema;
