import { z } from "zod";

export const contactValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    message: z.string(),
  }),
});
