import { z } from "zod";

export const carWashValidationSchema = z.object({
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
    carYear: z.string(),
    servicePackage: z.string(),
    address: z.string(),
    message: z.string(),
    status: z.enum(["pending", "approve", "completed", "rejected"]),
  }),
});
