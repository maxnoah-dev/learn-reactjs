import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email('Email is not valid'),
    password: z.string().min(6, "Password is at least 6 characters"),
});