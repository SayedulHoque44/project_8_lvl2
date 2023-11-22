import Joi from "joi";

// Define Joi schema for userName sub-document
const userNameSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(20)
    .trim()
    .pattern(new RegExp("^[A-Z][a-z]*$"), "capitalize")
    .message("{{#label}} must be in capitalize format"),
  middleName: Joi.string(),
  lastName: Joi.string()
    .required()
    .trim()
    .pattern(new RegExp("^[A-Za-z]+$"), "alpha")
    .message("{{#label}} must contain only alphabetic characters"),
});

// Define Joi schema for gurdian sub-document
const gurdianSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

// Define Joi schema for localGurdian sub-document
const localGurdianSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

// Define Joi schema for Student document
const StudentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameSchema.required(),
  gender: Joi.string().required().valid("male", "female", "other").messages({
    "any.only": "The gender field can only be one of: male, female, or other",
  }),
  dateOfBirth: Joi.string().required(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string()
    .required()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .messages({
      "any.only":
        "Blood group must be one of: A+, A-, B+, B-, AB+, AB-, O+, O-",
    }),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  gurdian: gurdianSchema.required(),
  localGurdian: localGurdianSchema.required(),
  profileImg: Joi.string(), // Assuming this is a string
  isActive: Joi.string()
    .required()
    .valid("active", "blocked")
    .default("active"),
});

export default StudentValidationSchema;
