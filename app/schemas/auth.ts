import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  redirectTo: z.string().default("/notes"),
});

export type LoginForm = z.infer<typeof loginSchema>;
