import { z } from "zod";

export const carsValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    brand: z.string(),
    color: z.string(),
    model: z.string(),
    registration_year: z.string(),
    production_year: z.string(),
    condition: z.string(),
    transmition: z.string(),
    fuelType: z.string().array(),
    engine_capacity: z.string(),
    kilometer: z.string(),
    details: z.string(),
    gallery: z.string().array(),
    price: z.string(),
    phone: z.string(),
    district: z.string(),
    upazila: z.string(),
    userid: z.string(),
  }),
});
