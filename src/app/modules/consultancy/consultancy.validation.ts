import { z } from "zod";

export const consultancyValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    bodyType: z.enum([
      "Saloon",
      "SUV",
      "MPV",
      "Hatchback",
      "Estate",
      "Coupe",
      "Sports",
      "Convertible",
    ]),
    brand: z.string(),
    model: z.string(),
    carYear: z.number(),
    message: z.string(),
    time: z.string(),
    date: z.string(),
    status: z.enum(["pending", "approve", "completed", "rejected"]),
  }),
});
