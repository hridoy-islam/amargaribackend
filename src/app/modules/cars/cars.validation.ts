import { z } from "zod";

const FuelTypeSchema = z.object({
  value: z.string(),
  label: z.string(),
});

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
    fuelType: z.array(FuelTypeSchema),
    engine_capacity: z.string(),
    kilometer: z.string(),
    details: z.string(),
    gallery: z.string().array(),
    price: z.string(),
    phone: z.string(),
    division: z.string(),
    district: z.string(),
    upazila: z.string(),
    userid: z.string(),
  }),
});
