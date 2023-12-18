import { z } from "zod";

const UserValidationSchema = z.object({
  password: z
    .string({
      required_error: "Password must be String",
    })
    .max(10, "Password cannot more than 20 characters"),
});

export const UserValidation = {
  UserValidationSchema,
};
