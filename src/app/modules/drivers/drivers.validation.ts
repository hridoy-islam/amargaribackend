import { z } from "zod";

export const driversValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    phone: z.string(),
    license: z.string().array(),
    bluebook: z.string(),
    car: z.string(),
    district: z.string(),
    upazila: z.string(),
  }),
});
