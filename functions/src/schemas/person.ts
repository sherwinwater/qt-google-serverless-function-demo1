import { z } from "zod";

export const personSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  companyName: z.string().min(1),
  message: z.string().min(1),
});

