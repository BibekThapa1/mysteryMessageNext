import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be more than 2 letters")
  .max(20, "Username must be less than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username should not include special characters");

export const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "It should be valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
