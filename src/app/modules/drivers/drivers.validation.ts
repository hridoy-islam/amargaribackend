import { z } from "zod";

export const driversValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    phone: z.string(),
    licenseFront: z.string().optional(),
    licenseBack: z.string().optional(),
    bluebookFront: z.string().optional(),
    bluebookBack: z.string().optional(),
    car: z.string(),
    division: z.string(),
    district: z.string(),
    upazila: z.string(),
  }),
});
