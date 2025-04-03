import * as z from "zod";

const registerSchema = z
  .object({
    fullName: z.string().min(5, "Full Name must be at least 5 characters"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export default registerSchema;
