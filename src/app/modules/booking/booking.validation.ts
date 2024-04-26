import { z } from "zod";

export const bookingValidationSchema = z.object({
  body: z.object({
    userid: z.string(),
    bookingDate: z.string(),
    name: z.string(),
    phone: z.string(),
    car: z.string(),
    message: z.string(),
    address: z.string(),
    status: z.string().optional(),
  }),
});
